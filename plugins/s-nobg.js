import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let img = await q.download()
let url = await uploadImage(img)
let sremovebg = global.API(`https://violetics.pw/api/media/removebg?apikey=beta&img=${url}`) 
let stickerr = await sticker(false, sremovebg, global.stickpack, global.stickauth)
conn.sendFile(m.chat, stickerr, 'sticker.webp', '', m, { asSticker: true })
} catch (e) {
m.reply(`Kirim gambar dengan caption *${usedPrefix + command}*\nAtau bisa dengan reply pesan dengan teks *${usedPrefix + command}*`)
}}
handler.tags = ['sticker']
handler.help = ['snobg']
handler.command = /^s(remove|no)bg$/i
export default handler
