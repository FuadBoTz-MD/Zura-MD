const handler = async (m, { conn, isOwner, text, usedPrefix, command, wm }) => {
  let who;
  if (m.isGroup) {
    if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat;
    else who = m.chat;
  } else {
    if (!isOwner) {
      global.dfail('owner', m, conn);
      throw false;
    }
    who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat;
  }

  try {
    if (who.endsWith('g.us')) global.db.data.chats[who].isBanned = true;
    else global.db.data.users[who].banned = true;
    let teks = `@${who.split("@")[0]} telah melakukan ${usedPrefix + command} ${await conn.getName(who) == undefined ? 'ini' : await conn.getName(who)}`;
    conn.reply(`${global.nomorbot}@s.whatsapp.net`, m.quoted ? teks + m.quoted.text : teks, null, {
      contextInfo: {
        mentionedJid: [who]
      }
    });
    m.reply(`Berhasil Ban! FuadBoTz tidak akan merespon chat dari ${await conn.getName(who) == undefined ? 'ini' : await conn.getName(who)}.`);
  } catch (e) {
    throw `Nomor tidak ada di database!`;
  }
};

handler.help = ['ban'];
handler.tags = ['owner'];
handler.command = /^ban(chat)?$/i;
handler.owner = true;

export default handler;