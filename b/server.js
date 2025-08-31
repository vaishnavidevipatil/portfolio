// server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Debug: check env variables
console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_PASS:", process.env.GMAIL_PASS ? "Loaded ✅" : "Not loaded ❌");

// POST /send-mail
app.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received request:", req.body);

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    // Nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // use TLS
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    // Mail options
    let mailOptions = {
      from: process.env.GMAIL_USER,   // your Gmail
      replyTo: email,                 // user email
      to: process.env.GMAIL_USER,     // your receiving Gmail
      subject: `Message from ${name}`,
      text: `You have a new message from ${name} <${email}>:\n\n${message}`,
    };

    // Send mail
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    res.json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Email sending failed:", err);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
