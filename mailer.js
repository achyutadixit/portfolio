const nodemailer = require("nodemailer");

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "achyutadixit61@gmail.com",
    pass: "acaufmxbucizpbad"
,
  },
});

// Send an email using async/await
(async () => {
  const info = await transporter.sendMail({
    from: '"Achyuta" <achyutadixit@outlook.com>',
    to: "achyutadixit@outlook.com, bcs_2025001@iiitm.ac.in",
    subject: "Hello ✔",
    text: "Hello world?", // Plain-text version of the message
    html: "<b>Hello world?</b>", // HTML version of the message
  });

  console.log("Message sent:", info.messageId);
})();