// Remake By ᴋʏᴀᴍɪ×͜×࿐
import fs from 'fs'
import { createHash } from 'crypto'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
  
let name = conn.getName(m.sender)
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  let ted = `https://telegra.ph/file/dd69bf4207145db5ad397.jpg`
  let info = `
┏━ꕥ〔 *Pulsa • Dana* 〕ꕥ━⬣
┃✾ Dana: [083837709331]
┃✾ Pulsa: [083837709331]
┗━━━━ꕥ
┏━━ꕥ〔 *NOTE* 〕ꕥ━⬣
┃ Ingin donasi? wa.me/${nomorown}
┃ _Hasil donasi akan digunakan buat sewa_
┃ _atau beli *PANEL* agar bot bisa jalan_
┃ _24jam tanpa kendala_
┗━━━━ꕥ
`
await conn.reply(m.chat, info, fkon, { contextInfo: { isForwarded: false, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: ted, title: `⎙ Payment ${author}`, thumbnail: { url: ted }, thumbnailUrl: ted, renderLargerThumbnail: true }}})
     } 

handler.tags = ['info']
handler.help = ['payment', 'donasi']
handler.command = /^(pay|payment|bayar|donasi|donate)$/i
handler.limit = true

export default handler