import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { conn, text }) => {
let named = m.pushName
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  if (!text) throw 'Input username!'
  let res = await tiktokStalk(text), img = res?.pp_user
  delete res.pp_user
  let txt = Object.keys(res).map((v) => `*${v.capitalize()}:* ${res[v]}`).join`\n`

await conn.reply(m.chat, txt, fkon, { contextInfo: { isForwarded: false, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: img, title: `Tiktok Stalk ${text}`, thumbnail: { url: img }, thumbnailUrl: img, renderLargerThumbnail: true }}})
}
handler.help = ['tiktokstalk']
handler.tags = ['tools']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler

export async function tiktokStalk(user) {
  let res = await axios.get(`https://urlebird.com/user/${user}/`)
  let $ = cheerio.load(res.data), obj = {}
  obj.pp_user = $('div[class="col-md-auto justify-content-center text-center"] > img').attr('src')
  obj.name = $('h1.user').text().trim()
  obj.username = $('div.content > h5').text().trim()
  obj.followers = $('div[class="col-7 col-md-auto text-truncate"]').text().trim().split(' ')[1]
  obj.following = $('div[class="col-auto d-none d-sm-block text-truncate"]').text().trim().split(' ')[1]
  obj.description = $('div.content > p').text().trim()
  return obj
}