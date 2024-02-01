const nodemailer = require('nodemailer');
const cors = require('cors')();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'mario.ventas.sv@gmail.com',
    pass: 'dfke sqrn wyvr xkdf',
  },
  port: 465,
  secure: true,
});

const sendReportMail = (mailOptions) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

exports.reportMail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'ventas@aserraderosanvicente.com',
      subject: 'New Contact Form Submission',
      text: message,
    };

    try {
      await sendReportMail(mailOptions);
      return res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Detailed error:', error.response?.data || error.message || error);
      return res.status(500).send(error.toString());
    }
  });
});
