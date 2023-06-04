import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (command == 'gettenor') {
if (!text) throw `*Contoh penggunaan*: ${usedPrefix}${command} bobesponja|2`
let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
  
    let gas = await fetch(`https://g.tenor.com/v1/search?q=${text1}&key=LIVDSRZULELA&limit=${text2}`)
    let json = await gas.json()
    let ter = json.results

    for (let i = 0; i < ter.length; i++) {
        let out = ter[i].media[0].mp4.url
        await conn.sendButton(m.chat, `*Hasil dari ${text1}*`, author, out, [
                ['Ubah ke Stiker', `${usedPrefix}s`]
            ], m)
    }
  }
if (command == 'buscars') {
if (!text) throw `*Contoh penggunaan*: ${usedPrefix + command} bobesponja`

	const sections = [
    {
	title: "Theme",
	rows: [
	{title: "1 Sticker", rowId: usedPrefix + 'gettenor ' + text + '|1'},
	{title: "2 Stickers", rowId: usedPrefix + 'gettenor ' + text + '|2'},
	{title: "3 Stickers", rowId: usedPrefix + 'gettenor ' + text + '|3'},
	{title: "4 Stickers", rowId: usedPrefix + 'gettenor ' + text + '|4'},
	{title: "5 Stickers", rowId: usedPrefix + 'gettenor ' + text + '|5'}
	]
    }
]

const listMessage = {
  text: `⚡ Pilih hasil yang Anda inginkan pada tombol di bawah ini...\n*Teks yang Anda tulis:* ${text}\n\nUntuk mengubahnya gunakan *${usedPrefix + command}* + Gambar/gif untuk diubah menjadi stiker`,
  footer: global.wm,
  title: `⎔───「 ${command} 」───⎔`,
  buttonText: `Pilih Disini!️`,
  sections
}
conn.sendMessage(m.chat, listMessage, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})
}
}
handler.command = ['gettenor', 'icons']

export default handler