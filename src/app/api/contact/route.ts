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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // In production: send email via Resend or similar
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });

    console.log("[Contact Form Submission]", {
      refId: data.refId,
      name: data.fullName,
      email: data.email,
      matterType: data.matterType,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, refId: data.refId }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    console.error("[Contact Form Error]", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
