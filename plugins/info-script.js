import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {

let str = `
🚩 This bot uses the Script from the Zura-MD. Please visit the Github link below:
https://https://github.com/FuadBoTz-MD/Zura-MD

owner contact
wa.me/6283837709331`
conn.sendMessage(m.chat, {
text: str,
contextInfo: {
externalAdReply: {
title: `® FuadXy`,
thumbnailUrl: `https://telegra.ph/file/d9bd5301bba8c1013393e.png`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
