import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw 'Masukan URL Instagram...'
let res = await fetch(`https://saipulanuar.ga/api/downloader/instagram?url=${args[0]}`)
let data = await res.json()
let json = data.result
m.reply(`Mengirim Media...`)
//for(var media of res.url_list) { 
conn.sendFile(m.chat, json.url, 'ig.mp4', null, m)
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig|instagram(dl))$/i

handler.limit = 3

export default handler