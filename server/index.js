import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Route for handling form submission
app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or "smtp.mailgun.org" if using custom SMTP
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password
      },
    });

    // Send mail
   await transporter.sendMail({
  from: email,
  to: process.env.EMAIL_USER,
  subject: `📩 New Portfolio Contact Form Submission`,
  text: `Phone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`, // fallback text

  // 🎨 HTML version
  html: `
    <div style="font-family: Arial, sans-serif; background: #f4f7fb; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #06b6d4, #3b82f6); padding: 20px; text-align: center; color: white;">
          <h2 style="margin: 0;">💌 New Contact Request</h2>
        </div>

        <!-- Body -->
        <div style="padding: 20px; color: #333;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin-top: 10px;">
            ${message}
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f1f5f9; padding: 15px; text-align: center; font-size: 14px; color: #555;">
          This message was sent from your <strong>Portfolio Contact Form</strong>.
        </div>
      </div>
    </div>
  `,
});


    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
