const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')();

const gmailEmail = 'coflipweb@gmail.com';
const gmailPassword = 'fedesss10';

const transporter = nodemailer.createTransport({
  service: 'privateemail.com',
  port: 587, // Update with the correct SMTP port (usually 587 or 465)
  secure: false,
  auth: {
    user: "ventasmayorista@aserraderosanvicente.com",
    pass: "boaa-azyn-kkzf-zhwo",
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'ventasmayorista@aserraderosanvicente.com',
      subject: 'New Contact Form Submission',
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).send(error.toString());
    }
  });
});
