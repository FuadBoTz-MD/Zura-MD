import nodemailer from 'nodemailer';

const broadcastEmail = async (recipients, subject, message) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'fuadbotzmd@gmail.com', // generated ethereal user
      pass: 'baqgdarpwcrfgldm' // generated ethereal password
    }
  });

  try {
    // send mail with defined transport object
    let info = await Promise.all(
      recipients.map((recipient) => {
        return transporter.sendMail({
          from: '"Fred Foo 👻" <foo@example.com>', // sender address
          to: recipient, // list of receivers
          subject: subject, // Subject line
          text: message, // plain text body
          html: message // html body
        });
      })
    );

    console.log('Email sent successfully:', info);
  } catch (error) {
    console.log('Error sending email:', error);
  }
};

const handler = {
  command: ['bcmail'],
};

export default handler;

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}