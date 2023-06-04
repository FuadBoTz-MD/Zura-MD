import fs from 'fs'
import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async(m, { conn, groupMetadata, usedPrefix, command }) => {
await conn.sendMessage(m.chat, {
          react: {
            text: "🦋",
            key: m.key,
          }})

let named = conn.getName(m.sender)
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let kled = 'https://telegra.ph/file/0d11dceb48f2a3724dadf.jpg'

let info = `◐ *Adiwajshing*\nhttps://github.com/adiwajshing\n\n◐ *Fokus Id*\nhttps://github.com/Fokusdotid\n\n◐ *AmirulDev*\nhttps://github.com/amiruldev20\n\n◐ *Aiinne*\nhttps://github.com/Aiinne\n\n◐ *The.sad.boy01*\nhttps://github.com/kangsad01\n\n◐ *Kanna*\nhttps://github.com/Kannachann\n\n◐ *Nurutomo*\nhttps://github.com/Narutomo\n\n◐ *Bochilgaming*\nhttps://github.com/BochilGaming\n\n◐ *FangzXD*\nhttps://github.com/Fangzbotz2007\n\n◐ *DaveKgw*\nhttps://github.com/davekgw\n\n◐ *Kyami*\nhttps://github.com/KaiZax\n\n◐ *Ahmad*\nhttps://github.com/Dzox13524\n\n◐ *Dan semua pemakai bot ini*\n\nThanks😄\n_© Creator By FuadXy~_
`
await conn.reply(m.chat, info, fkon, { contextInfo: { isForwarded: true, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: kled, title: `───━•〔 𝘽𝙄𝙂 𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊 〕•━───`, thumbnail: { url: kled }, thumbnailUrl: kled, renderLargerThumbnail: true }}}) // Title sengaja gw bikin gitu
}

handler.customPrefix = /^(.tqto|pembuat)$/i
handler.command = new RegExp

export default handler