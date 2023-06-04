import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
    }

handler.customPrefix = /^(ok|oke)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/d8d9ce6bc420036f610dd.png",
 "https://telegra.ph/file/08a98476cca5dcd0d5115.png",
 "https://telegra.ph/file/c42f32cb4ad09e3b983b0.png",
] // Tambahin Sendiri