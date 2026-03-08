import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "info@arshionix.com";
const RESEND_FROM = process.env.RESEND_FROM_EMAIL ?? "Arshionix Website <onboarding@resend.dev>";

const MAX_NAME_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br>");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const service = typeof body.service === "string" ? body.service.trim() : "";
    const projectType = typeof body.projectType === "string" ? body.projectType.trim() : "";
    const budget = typeof body.budget === "string" ? body.budget.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Full name, email, and message are required." },
        { status: 400 }
      );
    }

    if (name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { error: "Name is too long." },
        { status: 400 }
      );
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: "Message is too long." },
        { status: 400 }
      );
    }

    if (!RESEND_API_KEY) {
      console.warn(
        "RESEND_API_KEY not set — contact form submission logged only. Add it to .env.local and restart the dev server (npm run dev)."
      );
      console.info("Contact form:", { name, email, company, service, projectType, budget, message: message.slice(0, 100) });
      return NextResponse.json({ success: true });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "—");
    const safeService = escapeHtml(service || "—");
    const safeProjectType = escapeHtml(projectType || "—");
    const safeBudget = escapeHtml(budget || "—");
    const safeMessage = escapeHtml(message);

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;font-family:system-ui,-apple-system,sans-serif;background:#f1f5f9;padding:24px">
  <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.07)">
    <div style="background:linear-gradient(135deg,#6366f1,#7c3aed);color:#fff;padding:20px 24px">
      <h1 style="margin:0;font-size:18px;font-weight:700">New contact form submission</h1>
      <p style="margin:4px 0 0;font-size:13px;opacity:0.9">Arshionix website</p>
    </div>
    <div style="padding:24px">
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;font-size:13px;color:#64748b;width:120px">Name</td><td style="padding:8px 0;font-size:14px;font-weight:600;color:#0f172a">${safeName}</td></tr>
        <tr><td style="padding:8px 0;font-size:13px;color:#64748b">Email</td><td style="padding:8px 0"><a href="mailto:${safeEmail}" style="font-size:14px;color:#6366f1;text-decoration:none">${safeEmail}</a></td></tr>
        <tr><td style="padding:8px 0;font-size:13px;color:#64748b">Company</td><td style="padding:8px 0;font-size:14px;color:#0f172a">${safeCompany}</td></tr>
        <tr><td style="padding:8px 0;font-size:13px;color:#64748b">Service</td><td style="padding:8px 0;font-size:14px;color:#0f172a">${safeService}</td></tr>
        <tr><td style="padding:8px 0;font-size:13px;color:#64748b">Project type</td><td style="padding:8px 0;font-size:14px;color:#0f172a">${safeProjectType}</td></tr>
        <tr><td style="padding:8px 0;font-size:13px;color:#64748b">Budget</td><td style="padding:8px 0;font-size:14px;color:#0f172a">${safeBudget}</td></tr>
      </table>
      <div style="margin-top:20px;padding-top:20px;border-top:1px solid #e2e8f0">
        <p style="margin:0 0 8px;font-size:13px;color:#64748b">Message</p>
        <div style="font-size:14px;line-height:1.6;color:#0f172a;white-space:pre-wrap">${safeMessage}</div>
      </div>
    </div>
  </div>
  <p style="margin:16px 0 0;text-align:center;font-size:12px;color:#94a3b8">Sent via Arshionix contact form</p>
</body>
</html>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [CONTACT_EMAIL],
        replyTo: email,
        subject: `[Arshionix] ${name}${company ? ` (${company})` : ""} — ${projectType || service || "General enquiry"}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend API error:", err);
      return NextResponse.json(
        { error: "Failed to send message. Please try again or email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
