import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Only POST allowed" });

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message)
      return res.status(400).json({ message: "All fields are required" });

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
   from: "Portfolio Contact <contact@shubhamportfolio.com>"
      to: "shubhamsharma200599@gmail.com",
      subject: `New Portfolio Message: ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Email sending failed" });
  }
}