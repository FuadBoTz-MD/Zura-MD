
import { dare } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let name = conn.getName(m.sender)
  let cin = await dare()
  let caption = `${ucapan()} ${name}\n\nTruth:\n${cin}`
  let image = await(await fetch('./thumbnail.jpg',)).buffer()
//  let image = await conn.getBuffer('https://i.imgur.com/QvxnxD4.jpg')
  conn.sendFile(m.chat, image, 'truth.jpg', caption, m)
}
handler.help = ['truth']
handler.tags = ['quotes']
handler.command = /^(truh)$/i
export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Malam"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}
