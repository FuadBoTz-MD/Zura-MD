//By: ZYKO MD
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
//let imgr = flaaa2
if (!args[0]) throw `MASUKAN URL FB`
let f = await fetch(`https://saipulanuar.ga/api/download/fb?url=${args[0]}`)
m.reply('_Silahkan Tunggu..._')
let data = await f.json()
let x = data.result
//let x = await f.json()
let cap = `DOWNLOADER FACEBOOK`
conn.sendFile(m.chat, x.sd, 'facebook.mp4', cap, m)
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler