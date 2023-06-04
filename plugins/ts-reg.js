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
        user: 'fuadbotzmd@gmail.com',
        pass: 'baqgdarpwcrfgldm' // disini mungkin pass akun emailmu udh gw coba tapi ga work
      }
    });

    const mailOptions = {
      from: {
        name: 'FuadBoTz-MD',
        address: 'fuadbotzmd@gmail.com'
      },
      to: args[0],
      subject: 'Email Verification',
      html: `<div style="padding:20px;border:1px dashed #222;font-size:15px"><tt>Hi <b>${m.pushName} 😘</b><br><br>Confirm your email to be able to use FuadBoTz-MD. Send this code to the bot and it will expire in 3 minutes.<br><center><h1>${code}</h1></center>Or copy and paste the URL below into your browser : <a href="https://wa.me/${conn.decodeJid(conn.user.id).split('@')[0]}?text=${code}">https://wa.me/${conn.decodeJid(conn.user.jid).split('@')[0]}?text=${code}</a><br><br><hr style="border:0px; border-top:1px dashed #222"><br>Regards, <b>FuadXy</b></tt></div>`
    };

    let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Mmmm Kamu Sudah ter daftar di database, Apa kamu ingin mendaftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let named = conn.getName(m.sender)
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let kled = 'https://telegra.ph/file/b497b05a8c5df726fa7b9.jpg'
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'WOI TUA (。-`ω´-)'
  if (age < 5) throw 'Halah dasar bocil'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let freegift = '*Selamat!🥳*\nKamu mendapatkan _kode gift_ gratis karna telah mendaftar dalam database FuadBoTz.\nKode dapat di claim setiap hari...\nCara claim kode sbagai berikut: *.freegift <code>*\n\nCode: fxy01a4bk'
  let cap = `
  ━━━━ 「 *Successful Registration* 」━━━
  .
╭━━「 *ᴜsᴇʀs* 」
│▸ *sᴛᴀᴛᴜs:* ☑️ sᴜᴄᴄᴇssғᴜʟ
│▸ *ɴᴀᴍᴇ:* ${name}
│▸ *ᴀɢᴇ:* ${age} ʏᴇᴀʀs
│▸ *sɴ:* ${sn}
╰═┅═━––––––๑

http://bīt.ly/ᯤ
𝑭𝒖𝒂𝒅 𝑩𝒐𝑻𝒛࿐
`
  conn.reply(`${who.split('@')[0]}@s.whatsapp.net`, freegift, m)
  await conn.reply(m.chat, cap, fkon, { contextInfo: { isForwarded: false, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: kled, title: `Sucses Register`, thumbnail: { url: kled }, thumbnailUrl: kled, renderLargerThumbnail: true }}})

    transport.sendMail(mailOptions, function(err, data) {
      if (err) return conn.reply(m.chat, `❌ SMTP Error !!\n\n${err}`, m);
      return conn.reply(m.chat, `✅ Check your mailbox to get a verification code.`, m);
    });
  } catch (e) {
    conn.reply(m.chat, format(e), m);
  }
};

handler.help = ['tsreg'].map(v => v + ' <nama>.<umur> | <email>')
export default handler;

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}