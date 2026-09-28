import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  company_website?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (body.company_website && body.company_website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !subject || message.length < 12) {
    return NextResponse.json(
      { ok: false, error: "Please complete all fields with a valid message." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || "mdanny892@gmail.com";
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "onboarding@resend.dev";

  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email delivery is not configured. Add RESEND_API_KEY to .env.local. Create a free key at https://resend.com (sign up with the inbox that should receive messages).",
      },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message || "The email provider rejected the message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Email sending failed. Please try again later." },
      { status: 502 }
    );
  }
}
