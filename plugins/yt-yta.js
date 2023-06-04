import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `𝙺𝚒𝚛𝚒𝚖 𝙻𝚒𝚗𝚔 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝚈𝚊𝚗𝚐 𝚒𝚗𝚐𝚒𝚗 𝙳𝚒 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍\ncσntσh\n*${usedPrefix + command} https://youtu.be/c5gJRzCi0f0*`, fkontak, m)
await conn.reply(m.chat, `𝙰𝚞𝚍𝚒𝚘 𝚂𝚎𝚍𝚊𝚗𝚐 𝙳𝚒 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍, 𝚃𝚘𝚕𝚘𝚗𝚐 𝚃𝚞𝚗𝚐𝚐𝚞 𝙱𝚎𝚋𝚎𝚛𝚊𝚙𝚊 𝚂𝚊𝚊𝚝...`, fkontak, m)
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'Error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
//await conn.sendFile(m.chat, lolh.result.link, `${n}.mp3`, null, m, false, { mimetype: 'audio/mp4' })    
} catch {
await conn.reply(m.chat, `Ukuran File Terlalu Besar!`, m)}
}}

handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i

handler.exp = 0
handler.register = true
handler.limit = true

export default handler
