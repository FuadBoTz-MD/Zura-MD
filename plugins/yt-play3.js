import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*Contoh: ${usedPrefix + command} Billie Eilish - Bellyache*`
  await m.reply(wait)
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Error'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  const yt = await await youtubedlv2(url).catch(async _ => await youtubedl(url)).catch(async _ => await youtubedlv3(url))
  const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: wm,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
    }
  }
}

  return conn.sendMessage(m.chat, doc, { quoted: m })
}
handler.help = ['play3'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play3$/i

handler.exp = 0
handler.limit = 2
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
