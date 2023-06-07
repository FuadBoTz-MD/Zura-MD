import nodemailer from 'nodemailer';

const createBusinessEmail = async (options) => {
  try {
    // Membuat transporter
    let transporter = nodemailer.createTransport({
      host: options.host,
      port: options.port,
      secure: options.secure,
      auth: {
        user: options.user,
        pass: options.pass
      }
    });

    // Membuat opsi email
    let mailOptions = {
      from: options.from,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html
    };

    // Mengirim email
    let info = await transporter.sendMail(mailOptions);
    console.log('Email berhasil dikirim: ' + info.response);
  } catch (err) {
    console.log(err);
  }
};

export default createBusinessEmail;

export function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Contoh penggunaan handler
const handler = {
  command: ['cmail'],
  handleCommand: () => {
    // Logika penanganan perintah 'cmail'
    // ...
  }
};