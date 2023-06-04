import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
/* Gabut */
let named = conn.getName(m.sender)
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let flaa = `Sucsess, Harap Tunggu Beberapa Saat`
 await conn.reply(m.chat, flaa, fkon, { contextInfo: { forwardingScore: 9999, isForwarded: true, externalAdReply :{ mediaType: 1, mediaUrl: rtt, title: '© By FuadXy (Public BOT)', thumbnail: { url: rtt }, thumbnailUrl: rtt, sourceUrl: 'https://chat.whatsapp.com/EAR7T7H59vOJz8KcwMP179', renderLargerThumbnail: true }}})
}
handler.help = ['uban']
handler.command = ['uban']

export default handler