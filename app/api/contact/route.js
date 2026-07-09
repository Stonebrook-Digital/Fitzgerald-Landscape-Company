import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const DEFAULT_FROM = "Fitzgerald Landscape Site <hello@stonebrooknyc.com>";
const DEFAULT_TO = "fitzgeraldlandscapeco@gmail.com";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, subject, message } = body;

    const trimmedName = name?.trim();
    const trimmedEmail = email?.trim();
    const trimmedMessage = message?.trim();
    const trimmedPhone = phone?.trim() || "Not provided";
    const trimmedService = service?.trim() || subject?.trim() || "Not specified";

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Contact form error: RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const from = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM;
    const to = process.env.CONTACT_TO_EMAIL || DEFAULT_TO;

    const text = [
      `Name: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
      `Phone: ${trimmedPhone}`,
      `Service: ${trimmedService}`,
      "",
      "Message:",
      trimmedMessage,
    ].join("\n");

    const html = `
      <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(trimmedPhone)}</p>
      <p><strong>Service:</strong> ${escapeHtml(trimmedService)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(trimmedMessage).replace(/\n/g, "<br />")}</p>
    `;

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: trimmedEmail,
      subject: `New inquiry from ${trimmedName}`,
      text,
      html,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    console.log("Contact form sent:", { id: data?.id, to, from });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
