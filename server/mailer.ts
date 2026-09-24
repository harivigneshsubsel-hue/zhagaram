import nodemailer from "nodemailer";

const smtpUser = process.env.SMTP_USER;
const smtpPassword = process.env.SMTP_PASSWORD;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT || 465),
  secure: Number(process.env.SMTP_PORT || 465) === 465,
  auth:
    smtpUser && smtpPassword
      ? {
          user: smtpUser,
          pass: smtpPassword,
        }
      : undefined,
});

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  if (!process.env.MAIL_FROM) {
    throw new Error("MAIL_FROM environment variable is not configured.");
  }

  return transporter.sendMail({
    from: `"ZHAGARAM EXIM LLP" <${process.env.MAIL_FROM}>`,
    to,
    subject,
    html,
  });
}