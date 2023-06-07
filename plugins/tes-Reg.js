import { format } from 'util';
import nodemailer from 'nodemailer';

const axios = await import('axios');

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let users = db.data.users[m.sender];
  try {
    if (users.registered) return conn.reply(m.chat, `✅ Kamu sudah terdaftar.`, m);
    if (!args || !args[0]) return conn.reply(m.chat, `${usedPrefix + command} 'email@gmail.com`, m);
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig.test(args[0])) return conn.reply(m.chat, 'Email tidak valid.', m);
    let emails = Object.values(db.data.users).filter(v => v.email).map(v => v.email);
    if (emails.includes(args[0])) return conn.reply(m.chat, 'Email sudah terdaftar!', m);
    let code = `${getRandom(100, 900)}-${getRandom(100, 900)}`;

    users.email = args[0];
    users.code = code;
    users.codeExpire = new Date() * 1;

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'forest.herzog78@ethereal.email',
        pass: 'f8g2feMRpqK9QYY5yv' // disini mungkin pass akun emailmu udh gw coba tapi ga work
      }
    });

    const mailOptions = {
      from: {
        name: 'Forest Herzog',
        address: 'forest.herzog78@ethereal.email'
      },
      to: args[0],
      subject: 'Email Verification',
      html: `<div style="padding:20px;border:1px dashed #222;font-size:15px"><tt>Hi <b>${m.pushName} 😘</b><br><br>Confirm your email to be able to use FuadBoTz-MD. Send this code to the bot and it will expire in 3 minutes.<br><center><h1>${code}</h1></center>Or copy and paste the URL below into your browser : <a href="https://wa.me/${conn.decodeJid(conn.user.id).split('@')[0]}?text=${code}">https://wa.me/${conn.decodeJid(conn.user.jid).split('@')[0]}?text=${code}</a><br><br><hr style="border:0px; border-top:1px dashed #222"><br>Regards, <b>FuadXy</b></tt></div>`
    };

    transport.sendMail(mailOptions, function(err, data) {
      if (err) return conn.reply(m.chat, `❌ SMTP Error !!\n\n${err}`, m);
      return conn.reply(m.chat, `✅ Check your mailbox to get a verification code.`, m);
    });
  } catch (e) {
    conn.reply(m.chat, format(e), m);
  }
};

handler.command = ['tesreg'];
export default handler;

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}