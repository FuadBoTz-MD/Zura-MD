//APIKEY
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = conn.parseMention(tag)
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://tiktok.com/xxxx`
try {
let res = await fetch(`https://saipulanuar.ga/api/download/tiktok?url=${args[0]}`)
let data = await res.json()
let json = data.result

let view = await fetch(`https://saipulanuar.ga/api/download/tiktokview?url=${args[0]}`)
let don = await view.json()
let jsoon = don.result
let done = ``
//conn.reply(m.chat, 'Proses', m)

conn.sendFile(m.chat, json.video, 'tiktok.m4', done, fliveLoc) 

} catch (e) {
conn.reply(m.chat, 'Tidak dapat mengambil url', m)
throw e
}
} 
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttv)$/i

export default handler