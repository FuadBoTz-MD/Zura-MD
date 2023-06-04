let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*

Gunakan Game ini dengan bijak
• Dilarang spam
• Dilarang Keras bermain


◪ *Keuntungan bermain*

1. Mendapatkan Banyak exp
2. Mudah
3. Menghilangkan rasa gabut
4. Seru

◪ *Kekurangan Bermain*
1. Kecanduan

Selamat bermain & Mencari exp
`
const sections = [
   {
	title: `❪ LIST`,
	rows: [
	    {title: "┈┈┈┈ Tebak Kata ┈┈┈┈", rowId: '.tebakkata', description: '╰► Push Exp' },
	    {title: "┈┈┈┈ Tebak Gambar ┈┈┈┈", rowId: '.tebakgambar', description: '╰► Push Exp' },
	    {title: "┈┈┈┈ Tebak Lagu ┈┈┈┈", rowId: '.tebaklagu', description: '╰► Push Exp' },
	{title: "┈┈┈┈ Tebak Jenaka ┈┈┈┈", rowId: '.tebakjenaka', description: '╰► Push Exp' },
	{title: "┈┈┈┈ Tebak Logo ┈┈┈┈", rowId: '.tebaklogo', description: '╰► Push Exp' }
	]
    }, {
	title: `❪ UNDANG TEMAN`,
	rows: [
	    {title: "┈┈┈┈ Referal ┈┈┈┈", rowId: '.ref', description: '╰► Undang teman mu, agar bisa mendapatkan Ribuan Exp' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Click Here",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['listexp']
handler.tags = ['game']
handler.command = /^(listexp)$/i

export default handler