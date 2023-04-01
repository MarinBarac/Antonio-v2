import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { fullName, email, message, mailServiceConfiguration } = request.body;
  require("dotenv").config();
  const transporter = nodemailer.createTransport({
    ...mailServiceConfiguration,
    auth: {
      user: process.env.ANTONIO_EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailData = {
    from: process.env.ANTONIO_EMAIL,
    to: process.env.ANTONIO_EMAIL,
    replyTo: email,
    subject: `Portfolio message from ${fullName}`,
    text: JSON.stringify(request.body) + " | Sent from: " + email,
    html: `<div>
      <p><b>Sender: <b>${fullName}<p>
      <p><b>E-mail: <b>${email}<p>
      <p><b>Message: <b>${message}<p>
    </div>`,
  };

  try {
    const info = await transporter.sendMail(mailData);
    const response = NextResponse.json(info)
    response.headers.set("Content-Type", "application/json");
    response.headers.set("Cache-Control", "max-age=180000");
    return response;
  } catch (error) {
    const response = NextResponse.json(error)
    return response;
  }
}
