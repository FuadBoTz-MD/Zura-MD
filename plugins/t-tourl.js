/** JANGAN DIHAPUS KONTOL
  * Update To Url by ᴋʏᴀᴍɪ×͜×࿐
  * Github: https://github.com/ShionMDv
  * WhatsApp: wa.me/6287734910547
  * Jangan Dijual Ya Kontol
**/





import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async function (m, { conn }) {
let named = conn.getName(m.sender)
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)

let telep = `*L I N K :*\n${link}\n*Size:* ${media.length} Byte\n*Expired:* ${isTele ? 'Tanpa Expired' : 'Unknown'}`

conn.reply(m.chat, telep, fkon, { contextInfo: { isForwarded: false, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: link, title: `${wm} Upload Image`, thumbnail: { url: link }, thumbnailUrl: link, renderLargerThumbnail: true }}})
}
handler.help = ['upload (reply media)', 'tourl (reply media)']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i

export default handler