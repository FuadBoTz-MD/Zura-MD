import fetch from "node-fetch"
import uploadImage from "../lib/uploadImage.js"
import { ArtEnhance } from "../lib/art-enhance.js"
import fs from "fs"

let handler = async (m, { conn }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (/image/.test(mime)) {
		await m.reply(wait)
		let media = await q.download()
		let sauce = await ArtEnhance(await uploadImage(media), "3a4886dd3230e523600d3b555f651dc82aba3a4e")
		await conn.sendFile(m.chat, sauce, null, '', m)
	} else throw 'Reply imagenya'
}
handler.help = ["remini"]
handler.tags = ["tools"]
handler.command = ["remini"]
export default handler