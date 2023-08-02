import config from "@config/site";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const res = await request.json();
  const { fullName, email, message, mailServiceConfiguration } = res;
  const transporter = nodemailer.createTransport({
    ...mailServiceConfiguration,
    auth: {
      user: config.email,
      pass: config.emailPassword,
    },
  });

  const mailData = {
    from: config.email,
    to: config.emailPassword,
    replyTo: email,
    subject: `Portfolio message from ${fullName}`,
    text: JSON.stringify(res) + " | Sent from: " + email,
    html: `<div>
      <p><b>Sender: <b>${fullName}<p>
      <p><b>E-mail: <b>${email}<p>
      <p><b>Message: <b>${message}<p>
    </div>`,
  };

  try {
    const info = await transporter.sendMail(mailData);
    const response = NextResponse.json(info);
    response.headers.set("Content-Type", "application/json");
    response.headers.set("Cache-Control", "max-age=180000");
    return new Response("Success", {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "max-age=180000",
      },
      body: JSON.stringify(info),
    });
  } catch (error) {
    return new Response("Failure", {
      status: 500,
    });
  }
}
