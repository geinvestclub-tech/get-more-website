import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, assets, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !assets) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; direction: rtl; text-align: right; max-width: 600px; margin: 0 auto; border: 1px solid #B8963E; padding: 0;">
        <div style="background: #2C2C2C; padding: 24px 32px;">
          <h1 style="color: #B8963E; font-size: 22px; margin: 0; letter-spacing: 3px;">GET MORE</h1>
          <p style="color: #F5F0E8; font-size: 12px; margin: 4px 0 0; opacity: 0.6;">פנייה חדשה מהאתר</p>
        </div>
        <div style="padding: 32px; background: #F5F0E8;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #DDD3C0; color: #B8963E; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; width: 40%;">שם מלא</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #DDD3C0; color: #2C2C2C; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #DDD3C0; color: #B8963E; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">טלפון</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #DDD3C0; color: #2C2C2C; font-size: 15px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #DDD3C0; color: #B8963E; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">דוא"ל</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #DDD3C0; color: #2C2C2C; font-size: 15px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #DDD3C0; color: #B8963E; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">היקף נכסים</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #DDD3C0; color: #2C2C2C; font-size: 15px;">${assets}</td>
            </tr>
            ${
              message
                ? `<tr>
              <td colspan="2" style="padding: 16px 0 0;">
                <p style="color: #B8963E; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px;">הודעה</p>
                <p style="color: #4A4A4A; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
              </td>
            </tr>`
                : ""
            }
          </table>
        </div>
        <div style="background: #EDE5D4; padding: 16px 32px; text-align: center;">
          <p style="font-size: 10px; color: #9A8F80; margin: 0;">GET MORE | Private Capital | ${new Date().toLocaleDateString("he-IL")}</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"GET MORE Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `פנייה חדשה מהאתר – ${name} | ${assets}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
