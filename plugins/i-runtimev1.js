import fs from 'fs';
import fetch from 'node-fetch';
import moment from 'moment-timezone';

let handler = async (m, { conn, args, command }) => {
  let _muptime;
  if (process.send) {
    process.send('uptime');
    _muptime = await new Promise(resolve => {
      process.once('message', resolve);
      setTimeout(resolve, 1000);
    });
    _muptime *= 1000;
  }
  let muptime = clockString(_muptime);

  let upt = 'ʀᴜɴᴛɪᴍᴇ ʙᴏᴛ';
  let mentionedJid = [m.sender];
  let flaa = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=${muptime}`;
  await conn.reply(m.chat, upt, m, {
    mentions: mentionedJid,
    contextInfo: {
      forwardingScore: 9999,
      isForwarded: true,
      externalAdReply: {
        mediaType: 1,
        mediaUrl: flaa,
        title: ' ',
        thumbnail: { url: flaa },
        thumbnailUrl: flaa,
        sourceUrl: 'https://wa.me/stickerpack/Betakkuma2',
        renderLargerThumbnail: true
      }
    }
  });
};

handler.help = ['runtime1'];
handler.command = ['runtime1', 'rt1'];

export default handler;

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH');
  let res = 'Sudah Dini Hari Kok Belum Tidur Kak? 🥱';
  if (time >= 4) {
    res = 'Pagi Lord 🌄';
  }
  if (time >= 10) {
    res = 'Selamat Siang Kak ☀️';
  }
  if (time >= 15) {
    res = 'Selamat Sore Kak 🌇';
  }
  if (time >= 18) {
    res = 'Malam Kak 🌙';
  }
  return res;
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, '0')).join('');
}