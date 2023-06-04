import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
const effects = ['greyscale', 'invert', 'brightness', 'threshold', 'sepia', 'red', 'green', 'blue', 'blurple', 'pixelate', 'blur']

let handler = async (m, { conn, usedPrefix, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
*_Masukan Command Yang Tepat!_*
*Contoh:* ${usedPrefix}stickerfilter greyscale

*List Efek:*
${effects.map(effect => `_> ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*_Kirim Gambar Dengan Caption\nAtau Bisa Reply Pesan Nya_*'
if (!/image\/(jpe?g|png)/.test(mime)) throw `*Format Tidak Didukung!*\nKirim Gambar Berupa image, jpe, jpg, dan png !`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.stickpack, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) {
m.reply('*_Terjadi kesalahan saat mengonversi ke stiker_*\n\n_Sedang Mengirim gambar sebagai gantinya..._')
await conn.sendFile(m.chat, apiUrl, 'image.png', 'Creator 𝑺𝒊𝒍𝒆𝒏𝒄𝒆𝑩𝑶𝑻', m)
}}
handler.help = ['stickfilter (caption|reply media)']
handler.tags = ['sticker']
handler.command = /^(stickerfilter|stikerfilter|s2)$/i

export default handler
