import fs from 'fs';
import fetch from 'node-fetch';
import os from 'os';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let _muptime;
  if (process.send) {
    process.send('uptime');
    _muptime = await new Promise(resolve => {
      process.once('message', resolve);
      setTimeout(resolve, 1000);
    }) * 1000;
  }
  let = pp 'https://telegra.ph/file/321aedc39e2afa8714162.png'
  let muptime = runtime(process.uptime());
  let cap = `━━━━━━ ❨ 𝐑 𝐔 𝐍 𝐓 𝐈 𝐌 𝐄 ❩ ━━━━━━\n\n${muptime}\n\n${global.author}`;
  await conn.reply(m.chat, {
    extendedTextMessage: {
      text: cap,
      jpegThumbnail: pp,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          body: global.author,
          containsAutoReply: true,
          mediaType: 1,
          mediaUrl: sgh,
          renderLargerThumbnail: true,
          showAdAttribution: true,
          sourceId: "WudySoft",
          sourceType: "PDF",
          previewType: "PDF",
          sourceUrl: sgh,
          thumbnail: pp,
          thumbnailUrl: pp,
          title: htki + " M E N U - B O T " + htka
        }
      }
    }
  }, {
    quoted: m
  });
};

handler.help = ['runtime'];
handler.tags = ['info'];
handler.command = ['rt', 'runtime'];

export default handler;

function runtime(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor(seconds % (3600 * 24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}