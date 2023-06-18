import { bucin } from '@bochilteam/scraper'
import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let name = conn.getName(m.sender)
let cin = await bucin()
//let nth = '❲ *Bᴜᴄɪɴ* ❳'
  m.reply(`${ucapan} ${name}\n❲ *Bᴜᴄɪɴ* ❳\n❏ ${cin}`)
}

handler.help = ['q-bucin']
handler.tags = ['quotes']
handler.command = /^(q-bucin|bucin)$/i
export default handler

function getUcapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Malam"
  if (time >= 4) res = "Selamat Pagi"
  if (time >= 10) res = "Selamat Siang"
  if (time >= 15) res = "Selamat Sore"
  if (time >= 18) res = "Selamat Malam"
  return res
}
