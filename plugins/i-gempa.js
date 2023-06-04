import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

import fs from 'fs'
let handler = async (m, { conn, text }) => {
m.reply('Sedang Mendeteksi Getaran....')
let res = await fetch(`https://saipulanuar.ga/api/info/gempa`)
let named = conn.getName(m.sender)
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let data = await res.json()
let json = data.result
let deteksi = `Wᴀsᴘᴀᴅᴀ ɢᴇᴍᴘᴀ ᴛᴇʀᴅᴇᴛᴇᴋsɪ!!
🗓️ᴛᴀɴɢɢᴀʟ : ${json.tanggal}
⌚ᴊᴀᴍ : ${json.jam}
⌛ᴅᴀᴛᴇᴛɪᴍᴇ : ${json.datetime}
🗾ᴄᴏᴏʀᴅɪɴᴀᴛᴇs : ${json.coordinates}
🌏ʟɪɴᴛᴀɴɢ : ${json.lintang}
🌐ʙᴜᴊᴜʀ : ${json.bujur}
📳ᴍᴀɢɴɪᴛᴜᴅᴇ : ${json.magnitude}
🚧ᴋᴇᴅᴀʟᴀᴍᴀɴ : ${json.kedalaman}
❗ᴘᴏᴛᴇɴsɪ : ${json.potensi}
♨️ᴅɪʀᴀsᴀᴋᴀɴ : ${json.dirasakan}
`
let map = json.shakem
await conn.reply(m.chat, deteksi, fkon, { contextInfo: { forwardingScore: 9999, isForwarded: true, externalAdReply :{ mediaType: 1, mediaUrl: hwaifu.getRandom(), title: 'Info Gempa', thumbnail: { url: await (await fetch(json.shakemap)).buffer() }, thumbnailUrl: json.shakemap, sourceUrl: 'https://chat.whatsapp.com/EAR7T7H59vOJz8KcwMP179', renderLargerThumbnail: true }}})
}
handler.help = ['infogempa']
handler.tags = ['info']
 handler.command = /^(infogempa|gempa)$/i
export default handler