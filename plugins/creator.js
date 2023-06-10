import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'owner') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6283837709331:+62 838-3770-9331\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} ᴛɪᴅᴀᴋ ᴍᴇɴᴇʀɪᴍᴀ sᴀᴠᴇ ᴋᴏɴᴛᴀᴋ.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply('Follow Instagram.com/@fuadxy99\n Dan kirim ss ke owner untuk mendapatkan Premium secara gratis, selama 190 Hari')
 }
}
handler.tags = ['info']
handler.command = /^(owner)$/i
export default handler