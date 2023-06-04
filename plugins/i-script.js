import fs from 'fs'
import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { conn, text, usedPrefix, command }) {

let named = conn.getName(m.sender)
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let kled = 'https://telegra.ph/file/ae8721ed9eb78064e7df7.jpg'

let info = `
Script: 
https://Private-Bang-Lu-Mau-Ngapain-Kontol.com

 *Base :*
github.com/Jikarinka

 *N o t e :*
• *Script Ini Rawan Dijual Karena Berisi Fitur² Langka!*
• Oleh Karena Itu Kami Memprivate Script Bot Ini!
• Gabakal dikasih walau ngemis-ngemis:v
• Jika menemukan bug di script, harap lapor owner
• Bot Sewa Only Bukan Bot Gratisan, kalo mau memasukan BOT ke grup lain minta izin owner dulu ya:)
`
await conn.reply(m.chat, info, fkon, { contextInfo: { isForwarded: false, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: kled, title: `                      ⎙  Script ${wm}`, thumbnail: { url: kled }, thumbnailUrl: kled, renderLargerThumbnail: true }}}) // Title sengaja gw bikin gitu
}

handler.customPrefix = /^(.script|.sc)$/i
handler.command = new RegExp

export default handler