//
let { MessageType } = (await import('@adiwajshing/baileys')).default
import { sticker } from '../lib/sticker.js'
let handler  = async (m, { conn, args }) => {
  let stiker = false
try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Reply stiker nya!'
      stiker = await sticker(img, false, ' ', '𝑭𝒖𝒂𝒅𝑩𝒐𝑻𝒛 : 𝔐𝔥𝔪𝔡𝔇𝔣𝔣𝔞')
    } else if (args[0]) stiker = await sticker(false, args[0], '🍀', '🎮')
  } finally {
    if (stiker) conn.fakeReply(m.chat, stiker, '0@s.whatsapp.net', '*Sucsess Create*', 'status@broadcast')
    else throw 'Conversion failed'
  }
}
handler.help = ['mdz']
handler.tags = ['sticker']
handler.command = /^mdz$/i
handler.owner = true

export default handler