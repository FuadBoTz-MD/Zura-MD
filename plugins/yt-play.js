import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  
  if (!text) throw `Contoh: ${usedPrefix}${command} Another Love`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
let ytnya = `*𓆩 𓃠 𓆪 ✧═══ YouTube ═══✧ 𓆩 𓃠 𓆪*
ও *TITLE*
» ${title}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও *DESCRIPTION*
» ${description}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও *PUBLISHED*
» ${publishedTime}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও *DURATION*
» ${durationH}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও *VIEWS*
» ${viewH}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও *URL*
» ${url}
*𓆩 𓃠 𓆪 ✧═══ ${wm} ═══✧ 𓆩 𓃠 𓆪*`

const sections = [{
title:' Pilih Type Nya ',
rows: [
{title: "༺ 𝘈𝘜𝘋𝘐𝘖 𝘝𝟣 ༻ (Option 1)", rowId: `${usedPrefix}yta ${url}`, description: `${title}\n`},
{title: "༺ 𝘈𝘜𝘋𝘐𝘖 𝘝𝟤 ༻ (Option 2)", rowId: `${usedPrefix}play3 ${url}`, description: `${title}\n`},
{title: "༺ 𝙑𝙄𝘿𝙀𝙊 ༻ (Option 3)", rowId: `${usedPrefix}ytv ${url}`, description: `${title}\n`},
{title: "༺  𝗔 𝗨 𝗗 𝗜 𝗢 ༻ (Still Error)", rowId: `${usedPrefix}play.1 ${url}`, description: `${title}\n`},
{title: "༺  𝗩 𝗜 𝗗 𝗘 𝗢 ༻ (Still Error)", rowId: `${usedPrefix}play.2 ${url}`, description: `${title}\n`},
]},{
title: ' ⇌• Pencarian Lebih Lengkap •⇋ ',
rows: [
{title: ".·:*¨Youtube Search¨*:·.", rowId: `${usedPrefix}ytsearch ${text}`}
]}]
const listMessage = {
  text: `*YouTube  ${text}*`,
  footer: ytnya,
  title: '*Youtube Download*',
  buttonText: `Pilih Disini`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = true
handler.register = true

export default handler
