import fetch from 'node-fetch'
let handler = async (m, { conn, text, command, args, usedPrefix }) => {
if (!args[0]) throw `Membuat gambar dari AI.\n\nContoh:\n${command} Wooden house on snow mountain`
  let res = `https://api.lolhuman.xyz/api/dall-e?apikey=SGWN&text=${text}`
  
  conn.sendFile(m.chat, res, 'image.jpg', `Result from *${text}*`, m)
  
}
handler.help = ['ai-image', 'aidraw']
handler.tags = ['internet']
handler.command = /^(ai-image|aidraw)$/i
handler.limit = true

export default handler