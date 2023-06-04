import fs from 'fs'
import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { conn, text, usedPrefix, command }) {

let named = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let kled = 'https://telegra.ph/file/4b61139736fcebba60f7e.png'

let info = `
━━━━━▢ *SEWA BOT* ▢━━━━━
┏ ⫹⫺ *Murah Bat* 
┗ Rp. 2k / Group (1 hari)

┏ ⫹⫺ *Ga Terlalu:v* 
┗ Rp. 7k / Group (1 minggu)

┏ ⫹⫺ *Normal* 
┗ Rp. 25k / Group (1 bulan)

┏ ⫹⫺ *Ga Rugi* 
┗ Rp. 45k / Group (2 bulan)

┏ ⫹⫺ *Lebih Hemat* 
┗ Rp. 60k / Group (3 bulan)

┏ ⫹⫺ *Permanen!!* 
┗ Rp. 150k / Group (Permanen)

*Tip:*
Maaf Jika Harga Mahal:) Panel Sekarang Cukup Mahal Kak:)
`
await conn.reply(m.chat, info, m, { contextInfo: { isForwarded: false, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: kled, title: `® FuadXy`, thumbnail: { url: kled }, thumbnailUrl: kled, renderLargerThumbnail: true }}})
}
handler.customPrefix = /^(sewa(bot)?)$/i
handler.command = new RegExp

export default handler