import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { command, conn, text, usedPrefix }) => {
if (!text) throw `[❗INFO❗] Masukan Nama Lagu Yang Ingin Di Cari\n\n*—◉ Contoh:\n${usedPrefix}play.1 Summer time sadness*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `*_Tunggu Sebentar, Audio Sedang Di Proses..._*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'YouTube Audio',
body: `${wm}`,         
previewType: 0, thumbnail: fs.readFileSync("./thumbnail.jpg"),
sourceUrl: `https://github.com/ShionMDv`}}}) 
  
let res = await fetch(`https://api.dhamzxploit.my.id/api/ytplaymp3?text=${text}`)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_Tunggu Sebentar, Video Sedang Di Proses..._*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'YouTube Video',
body: `${wm}`,         
previewType: 0, thumbnail: fs.readFileSync("./thumbnail.jpg"),
sourceUrl: `https://github.com/ShionMDv`}}})
  
let res = await fetch(`https://api.dhamzxploit.my.id/api/ytplaymp4?text=${text}`)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `${wm}`, m)}
}catch(e){
m.reply(`Error! ${wm} Tidak Dapat Menemukan Lagu Tersebut`)
console.log(e)
}}

handler.help = ['play.1' , 'play.2'].map(v => v + ' <text>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']

export default handler
