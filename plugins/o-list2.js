import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'rxy') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; KarlTzy\nNICKNAME:👑 Owner FuadCyx~\nORG: Rino Xyro\nTITLE:soft\nitem1.TEL;waid=6283129022267:+62 831-2902-2267\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://Instagram.com/fuadxy99\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: hodonk192@gmail.com@gmail.com\nitem3.X-ABLabel:💌 Mail Owner KarlTzy\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 ,21 Desember 2004\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner Saya kak`
    await conn.sendButton(m.chat, caption, author, null, [['👨Sapa Owner', 'sapaown']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
}
if (command == 'yxy') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Yohanes Xyro\nNICKNAME:👑 Owner FuadXy\nORG: Yohanes Xyro\nTITLE:soft\nitem1.TEL;waid=6283835148953:+62 838-3514-8953\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://Instagram.com/fuadxy99\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: hodonk340@gmail.com\nitem3.X-ABLabel:💌 Mail Owner FuadXy\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 ,21 Desember 2004\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner Saya kak`
    await conn.sendButton(m.chat, caption, author, null, [['👨Sapa Owner', 'sapaown']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
}
if (command == 'rdc') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Radit Xyro\nNICKNAME:👑 Owner FuadXy\nORG: Radit Xyro\nTITLE:soft\nitem1.TEL;waid=6285792645286:+62 857-9264-5286\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://Instagram.com/fuadxy99\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: hodonk50@gmail.com@gmail.com\nitem3.X-ABLabel:💌 Mail Owner Fuad Xy\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 ,21 Desember 2004\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner Saya kak`
    await conn.sendButton(m.chat, caption, author, null, [['👨Sapa Owner', 'sapaown']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
}
if (command == 'ownfxy') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6283837709331:+62 838-3770-9331\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} ᴛɪᴅᴀᴋ ᴍᴇɴᴇʀɪᴍᴀ sᴀᴠᴇ ᴋᴏɴᴛᴀᴋ.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
await conn.reply(m.chat, `Jangan Lupa Follow IG: @fuadxy99`,m)
  }
}
handler.tags = ['info']
handler.command = /^(ownfxy|yxy|rxy|rdc)$/i
export default handler