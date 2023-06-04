import nodemailer from "nodemailer";

let handler = async (m, { conn, usedPrefix, args, command }) => {
  try {
    if (global.db.users.find((v) => v.jid == m.sender).verified)
      return conn.reply(m.chat, Func.texted('bold', `✅ Your number already verified.`), m);
    if (!args || !args[0])
      return conn.reply(m.chat, Func.example(isPrefix, command, 'ʜᴏᴅᴏɴᴋ340@gmail.com'), m);
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig.test(args[0]))
      return conn.reply(m.chat, Func.texted('bold', '🚩 Invalid email.'), m);
    let emails = global.db.users.filter((v) => v.email).map((v) => v.email);
    if (emails.includes(args[0]))
      return conn.reply(m.chat, Func.texted('bold', '🚩 Email already registered.'), m);
    conn.sendReact(m.chat, '🕒', m.key);
    let code = `${Func.randomInt(100, 900)}-${Func.randomInt(100, 900)}`;
    let users = global.db.users.find((v) => v.jid == m.sender);
    users.codeExpire = new Date() * 1;
    users.code = code;
    users.email = args[0];
    const transport = nodemailer.createTransport({
      service: process.env.USER_EMAIL_PROVIDER,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_APP_PASSWORD,
      },
    });
    const mailOptions = {
      from: {
        name: process.env.USER_NAME,
        address: process.env.USER_EMAIL,
      },
      to: args[0],
      subject: 'Email Verification',
      html: `<div style="padding:20px;border:1px dashed #222;font-size:15px"><tt>Hi <b>${m.pushName} 😘</b><br><br>Confirm your email to be able to use ${process.env.USER_NAME}. Send this code to the bot and it will expire in 3 minutes.<br><center><h1>${code}</h1></center>Or copy and paste the URL below into your browser : <a href="https://wa.me/${client.decodeJid(client.user.id).split('@')[0]}?text=${code}">https://wa.me/${client.decodeJid(client.user.id).split('@')[0]}?text=${code}</a><br><br><hr style="border:0px; border-top:1px dashed #222"><br>Regards, <b>${global.owner_name}</b></tt></div>`,
    };
    transport.sendMail(mailOptions, function (err, data) {
      if (err) return m.reply(Func.texted('bold', `❌ SMTP Error !!`));
      return conn.reply(m.chat, Func.texted('bold', `✅ Check your mailbox to get a verification code.`), m);
    });
  } catch (e) {
    conn.reply(m.chat, Func.jsonFormat(e), m);
  }
};

handler.help = ['rgs <email>'];
handler.tags = ['exp'];
handler.command = /^(rgs)$/i;

handler.limit = true;

export default