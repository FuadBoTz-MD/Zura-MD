import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import fs from 'fs'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/image/g.test(mime) && !/webp/g.test(mime)) {
    	try {
    	let img = await webp2png(await q.download()),
			url = API('lolhuman', '/api/removebg', { img }, 'apikey')
			await conn.sendFile(m.chat, url, 'removebg.png', '*Made by:* lolhuman', m)
    	} catch (e) {
    		let img = await q.download?.()
			let out = await uploadImage(img)
			let url = "https://removebg.api.akuari.my.id/other/removebgg?gambar=" + out
			await conn.sendFile(m.chat, url, 'removebg.png', '*Made by:* akuari', m)
    	}
    } else {
    	m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
    }
}

handler.help = ['removebg']
handler.tags = ['tools']
handler.command = /^(no|remove)bg$/i

export default handler