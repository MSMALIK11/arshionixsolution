import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "info@arshionix.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Full name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not set — contact form submission logged only.");
      console.info("Contact form:", { name, email, service, message });
      return NextResponse.json({ success: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Arshionix Website <onboarding@resend.dev>",
        to: [CONTACT_EMAIL],
        replyTo: email,
        subject: `[Arshionix] New message from ${name}`,
        html: `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service || "—"}</p>
          <p><strong>Message:</strong></p>
          <pre>${message}</pre>
        `,
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
