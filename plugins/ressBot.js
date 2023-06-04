import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
const { default: { Image }} = await import('node-webpmux')

let handler = async (m, { conn, text, usedPrefix, command }) => {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let img = './ress-bot.webp'
let stiker = await addExif(img, packname || '𝑭𝒖𝒂𝒅𝑩𝒐𝑻𝒛', author || '© 𝑩𝒚 𝑭𝒖𝒂𝒅𝑿𝒚࿐')
conn.fakeReply(m.chat, stiker, '0@s.whatsapp.net', '*Ada Apa Kak?(✿^‿^)*', 'status@broadcast')
}

handler.customPrefix = /^(bot|hi bot|halo|hiii bot|hy)$/i
handler.command = new RegExp

export default handler

async function addExif(buffer, packname, author, categories = [''], extra = {}) {
	const img = new Image()
	const json = { 'sticker-pack-id': `${wm}`, 'sticker-pack-name': packname, 'sticker-pack-publisher': author, 'emojis': categories, 'is-avatar-sticker': 1, ...extra }
	let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
	let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
	let exif = Buffer.concat([exifAttr, jsonBuffer])
	exif.writeUIntLE(jsonBuffer.length, 14, 4)
	await img.load(buffer)
	img.exif = exif
	return await img.save(null)
}