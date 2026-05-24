import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  fullName:         z.string().min(2),
  email:            z.string().email(),
  phone:            z.string().optional(),
  matterType:       z.string().min(1),
  message:          z.string().min(20),
  preferredContact: z.enum(["email", "phone", "either"]).default("either"),
  refId:            z.string(),
});

// ─── Email sending ────────────────────────────────────────────────────────────
// Set RESEND_API_KEY in your environment variables to enable email delivery.
// Set CONTACT_TO_EMAIL to the inbox that should receive inquiries
// (defaults to the email in your FIRM constant / hello@meridianlaw.com).
// Set CONTACT_FROM_EMAIL to a verified sender on your Resend account
// (e.g. "Meridian Law <noreply@meridianlaw.com>").
// ─────────────────────────────────────────────────────────────────────────────

async function sendContactEmail(data: z.infer<typeof schema>): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No API key — log and continue (form still shows success to user)
    console.log("[Contact] RESEND_API_KEY not set — skipping email send.");
    return;
  }

  const toEmail   = process.env.CONTACT_TO_EMAIL   ?? "hello@meridianlaw.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL  ?? "Meridian Law <noreply@meridianlaw.com>";

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const preferredLabel: Record<string, string> = {
    email: "Email",
    phone: "Phone",
    either: "No preference",
  };

  const htmlBody = `
    <div style="font-family:sans-serif;max-width:600px;color:#111827">
      <h2 style="color:#0D1B2A;border-bottom:2px solid #C9A84C;padding-bottom:8px">
        New Inquiry — Meridian Law
      </h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;color:#6B7280;width:160px">Reference ID</td><td style="padding:8px 0;font-weight:600">${data.refId}</td></tr>
        <tr><td style="padding:8px 0;color:#6B7280">Name</td><td style="padding:8px 0">${data.fullName}</td></tr>
        <tr><td style="padding:8px 0;color:#6B7280">Email</td><td style="padding:8px 0"><a href="mailto:${data.email}" style="color:#C9A84C">${data.email}</a></td></tr>
        <tr><td style="padding:8px 0;color:#6B7280">Phone</td><td style="padding:8px 0">${data.phone ?? "—"}</td></tr>
        <tr><td style="padding:8px 0;color:#6B7280">Matter Type</td><td style="padding:8px 0">${data.matterType}</td></tr>
        <tr><td style="padding:8px 0;color:#6B7280">Preferred Contact</td><td style="padding:8px 0">${preferredLabel[data.preferredContact] ?? data.preferredContact}</td></tr>
      </table>
      <h3 style="color:#0D1B2A;margin-top:24px">Message</h3>
      <div style="background:#F8F6F2;border-left:3px solid #C9A84C;padding:16px;border-radius:2px;white-space:pre-wrap">${data.message}</div>
      <p style="color:#9CA3AF;font-size:12px;margin-top:32px">
        Submitted ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET
      </p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from:    fromEmail,
    to:      toEmail,
    replyTo: data.email,
    subject: `[${data.refId}] New inquiry — ${data.matterType} (${data.fullName})`,
    html:    htmlBody,
  });

  if (error) {
    // Log but don't surface to client — form submission already succeeded
    console.error("[Contact] Resend delivery error:", error);
  }
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Log every submission server-side for audit trail
    console.log("[Contact] New inquiry", {
      refId:      data.refId,
      name:       data.fullName,
      email:      data.email,
      matterType: data.matterType,
      timestamp:  new Date().toISOString(),
    });

    // Send email (non-blocking from the client's perspective — errors are caught internally)
    await sendContactEmail(data);

    return NextResponse.json({ success: true, refId: data.refId }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    console.error("[Contact] Unexpected error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
