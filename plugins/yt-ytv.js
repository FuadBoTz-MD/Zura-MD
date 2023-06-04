/*
 * Don't Deleted!
 * Updated By ᴋʏᴀᴍɪ×͜×࿐
 * Github Kyami: https://github.com/ShionMDv
 * WhatsApp: wa.me/6287734910547
*/

import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let limit = 80
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `Contoh :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
  if (!args[0].match(/youtu/gi)) throw `Link Tersebut Tidak Valid!`
 await conn.reply(m.chat, `𝚅𝚒𝚍𝚎𝚘 𝚂𝚎𝚍𝚊𝚗𝚐 𝙳𝚒 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍, 𝚃𝚘𝚕𝚘𝚗𝚐 𝚃𝚞𝚗𝚐𝚐𝚞 𝙱𝚎𝚋𝚎𝚛𝚊𝚙𝚊 𝚂𝚊𝚊𝚝...`, m)
 let chat = global.db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 350 : limit) * 3074
  let video, source, res, link, lastError, isLimit
  for (let i in _video) {
    try {
      video = _video[i]
      if (isNaN(video.fileSize)) continue
      isLimit = limitedSize < video.fileSize
      if (isLimit) continue
      link = await video.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      video = source = link = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw '❎ Error: ' + (lastError || 'no puedo descargar el video')
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumbnail)).buffer() } }
  catch (e) { }
  if (!isLimit) await conn.sendFile(m.chat, link, title + '.mp4', `
 ≡ ${wm} _*YT Download*_
  
▢ *📌 Title* : ${title}
▢ *📟 Type* : mp4
▢ *⚖️ Ukuran File* : ${video.fileSizeH} (kadang lebih:v)
`.trim(), m, false, {
    ..._thumb,
    asDocument: chat.useDocument
  })
}
handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i

handler.register = true
handler.limit = true


export default handler
