
import { dare } from '@bochilteam/scraper'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, text, command }) => {
  let name = conn.getName(m.sender)
  let ucapan = getUcapan()
  let cin = await dare()
  m.reply(`${ucapan} ${name}\n❲ *Dᴀʀᴇ* ❳\n❏ ${cin}`)
}

handler.help = ['dare']
handler.tags = ['quotes']
handler.command = /^(dare)$/i
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
