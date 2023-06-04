import { format } from 'util';
import nodemailer from 'nodemailer';

const axios = (await import('axios')).default;

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

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'fuadbotzz@gmail.com',
        pass: 'xziadpxgbklggtuh' //disini mungkin pass akun emailmu udh gw coba tapi ga work
      }
    });

    const mailOptions = {
      from: {
        name: 'FuadBotz',
        address: 'fuadbotzz@gmail.com'
      },
      to: args[0],
      subject: 'Email Verification',
      html: `## <img height="40" src="https://raw.githubusercontent.com/innng/innng/master/assets/kyubey.gif"/> DATABASE | FREE

[![Typing SVG](https://readme-typing-svg.herokuapp.com?size=30&duration=4500&color=51AAFF&lines=DATABASE+FREE+FOR+ALL+;GUNAKAN+DENGAN+BIJAK!!!;SELAMAT+MENGGUNAKAN+%F0%9F%92%95%F0%9F%8C%B9)](https://git.io/typing-svg)
 ------
 
 [![DZOX](https://github.com/Dzox13524.png?size=200)](https://github.com/Dzox13524) | [![KAZUKO](https://github.com/KazukoGans.png?size=200)](https://github.com/KazukoGans) | [![KAIZAX](https://github.com/KaiZax.png?size=200)](https://github.com/KaiZax) | [![NEVT](https://github.com/NevtBotz.png?size=200)](https://github.com/NevtBotz) | [![REYY](https://github.com/inirey.png?size=200)](https://github.com/inirey)
----|----|----|----|----
[DZOX](https://github.com/Dzox13524) | [KAZUKO](https://github.com/KazukoGans) | [KAIZAX](https://github.com/KaiZax) | [NEVT](https://github.com/NevtBotz) | [REYY](https://github.com/inirey)
 Helper | Author | Helper | MASTAH | Author
 `
    };

    transport.sendMail(mailOptions, function(err, data) {
      if (err) return conn.reply(m.chat, `❌ SMTP Error !!\n\n${err}`, m);
      return conn.reply(m.chat, `✅ Check your mailbox to get a verification code.`, m);
    });
  } catch (e) {
    conn.reply(m.chat, format(e), m);
  }
};

handler.command = ['tesreg2'];
export default handler;

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}