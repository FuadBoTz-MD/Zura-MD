import fs from 'fs'
import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { conn, text, usedPrefix, command }) {

let named = conn.getName(m.sender)
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let kled = 'https://telegra.ph/file/71f6216f8db3715c03ca3.jpg'

let info = `*Hallo!*👋🏻\nSaya adalah Fuad BOT, Fuad BOT Adalah Sebuah Bot RPG Yang Dibuat Khusus Untuk Bersenang² Bersama.\nSaya Juga Adalah Bot Yang Bisa Membantumu Dengan Banyak Fitur Berguna, Ketik .? all\nUntuk Menampilkan Semua Fitur Bot
`
await conn.reply(m.chat, info, fkon, { contextInfo: { isForwarded: false, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: kled, title: `     Perkenalan FuadBoTz ⎙     `, thumbnail: { url: kled }, thumbnailUrl: kled, renderLargerThumbnail: true }}}) // Title sengaja gw bikin gitu
}

handler.customPrefix = /^(.salken)$/i
handler.command = new RegExp

export default handler