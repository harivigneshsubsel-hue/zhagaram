import "dotenv/config";

import cors from "cors";
import express from "express";

import { sendEmail } from "./mailer";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "Mail server is running",
  });
});

app.post("/api/enquiry", async (req, res) => {
  try {
    const {
      name,
      company,
      email,
      phone,
      country,
      product,
      quantity,
      message,
    } = req.body;

    if (!name || !email || !product || !message) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing.",
      });
    }

    await sendEmail({
      to: process.env.MAIL_TO!,
      subject: `New Enquiry - ${product}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto">

          <h2 style="color:#075333">
            New ZHAGARAM EXIM Enquiry
          </h2>

          <hr />

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>

          <h3>Message</h3>

          <p style="line-height:1.7">
            ${message}
          </p>

        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Enquiry email sent successfully.",
    });
  } catch (error) {
    console.error("Nodemailer error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send enquiry email.",
    });
  }
});

app.listen(4000, () => {
  console.log("Mail server running on http://localhost:4000");
});