const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // Configura el transporter de nodemailer con tus credenciales de correo
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'mario.ventas.sv@gmail.com',
      pass: 'dfke sqrn wyvr xkdf',
    },
  });

  // Configura el correo que será enviado
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'ventas@aserraderosanvicente.com',
    subject: 'Nuevo Formulario de Contacto',
    html: `
    <p>Nombre: ${name}</p>

    <p>Consulta: ${message}</p>

    <p>Correo: ${email}</p>`
  };

  try {
    // Envía el correo
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
}
