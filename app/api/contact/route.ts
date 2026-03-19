import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
// Where contact form submissions are delivered (your inbox)
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "info@arshionix.com";
// From address: must use your verified Resend domain (e.g. noreply@arshionix.com)
const RESEND_FROM = process.env.RESEND_FROM_EMAIL ?? "Arshionix <noreply@arshionix.com>";

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
    const projectType = typeof body.projectType === "string" ? body.projectType.trim() : "";
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
      console.info("Contact form:", { name, email, company, projectType, message: message.slice(0, 100) });
      return NextResponse.json(
        { error: "Email is not configured. Please add RESEND_API_KEY to your server environment." },
        { status: 503 }
      );
    }

    if (!CONTACT_EMAIL || !CONTACT_EMAIL.includes("@")) {
      console.error("CONTACT_EMAIL is missing or invalid:", CONTACT_EMAIL);
      return NextResponse.json(
        { error: "Server misconfiguration: contact recipient email not set." },
        { status: 503 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "—");
    const safeProjectType = escapeHtml(projectType || "—");
    const safeMessage = escapeHtml(message);

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
    
    <body style="margin:0;padding:0;background:#0b0f19;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
    
      <div style="max-width:560px;margin:40px auto;background:#111827;border-radius:16px;overflow:hidden;border:1px solid #1f2937;box-shadow:0 10px 30px rgba(0,0,0,0.5)">
    
        <!-- Header -->
        <div style="padding:24px;background:linear-gradient(135deg,#6366f1,#4f46e5,#7c3aed)">
          <h1 style="margin:0;font-size:20px;color:#fff;font-weight:700;letter-spacing:0.3px">
            🚀 New Lead Captured
          </h1>
          <p style="margin:6px 0 0;font-size:13px;color:#e0e7ff;opacity:0.9">
            Arshionix Solutions • Website Inquiry
          </p>
        </div>
    
        <!-- Body -->
        <div style="padding:28px">
    
          <!-- Info Table -->
          <table style="width:100%;border-collapse:collapse">
    
            <tr>
              <td style="padding:10px 0;font-size:12px;color:#9ca3af;width:130px">Full Name</td>
              <td style="padding:10px 0;font-size:15px;font-weight:600;color:#f9fafb">${safeName}</td>
            </tr>
    
            <tr>
              <td style="padding:10px 0;font-size:12px;color:#9ca3af">Email</td>
              <td style="padding:10px 0">
                <a href="mailto:${safeEmail}" style="color:#818cf8;text-decoration:none;font-size:14px">
                  ${safeEmail}
                </a>
              </td>
            </tr>
    
            <tr>
              <td style="padding:10px 0;font-size:12px;color:#9ca3af">Company</td>
              <td style="padding:10px 0;font-size:14px;color:#e5e7eb">${safeCompany || "-"}</td>
            </tr>
    
            <tr>
              <td style="padding:10px 0;font-size:12px;color:#9ca3af">Project Type</td>
              <td style="padding:10px 0;font-size:14px;color:#e5e7eb">${safeProjectType || "-"}</td>
            </tr>
    
          </table>
    
          <!-- Message -->
          <div style="margin-top:24px;padding:18px;background:#020617;border-radius:12px;border:1px solid #1e293b">
            <p style="margin:0 0 10px;font-size:12px;color:#94a3b8">Client Message</p>
            <div style="font-size:14px;line-height:1.7;color:#f1f5f9;white-space:pre-wrap">
              ${safeMessage}
            </div>
          </div>
    
          <!-- CTA -->
          <div style="margin-top:26px;text-align:center">
            <a href="mailto:${safeEmail}" 
               style="display:inline-block;padding:12px 20px;border-radius:8px;background:#6366f1;color:#fff;text-decoration:none;font-size:14px;font-weight:600">
              Reply to Client
            </a>
          </div>
    
        </div>
    
      </div>
    
      <!-- Footer -->
      <p style="text-align:center;font-size:12px;color:#6b7280;margin-top:18px">
        © ${new Date().getFullYear()} Arshionix Solutions — New inquiry received
      </p>
    
    </body>
    </html>
    `;

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
        subject: `[Arshionix] ${name}${company ? ` (${company})` : ""} — ${projectType || "General enquiry"}`,
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

    const data = await res.json().catch(() => ({}));
    console.info("Contact email sent to", CONTACT_EMAIL, "id:", (data as { id?: string }).id ?? "—");

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
