let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
	title: `STATS`,
	rows: [
	    {title: "⚡ Test Speed", rowId: '.ping', description: `╰►Test Speed ${wm}` },
	    {title: "📉 Stats Server", rowId: '.statserver', description: `╰►Status server ${wm}` },
	    {title: "💻 Bot Info", rowId: '.botinfo', description: `╰►Info Server ${wm}` },
	{title: "👤 Creator", rowId: '.owner', description: `╰►Developer ${wm}` },
	{title: "💰 Donasi", rowId: '.donasi', description: `╰►Support ${author} Agar bot on 24 Jam untuk menemani kamu` },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "📖 Rules", rowId: '.rules', description: `╰►S&K ${wm}` },
	    {title: "📑 Event", rowId: '.event', description: `╰►Event Dari ${author}` },
	{title: "💵 Sewa BOT", rowId: '.sewa', description: `╰►Sewa ${wm} untuk jadi assisten Mu` },
	{title: "🗣 ️Request Fitur", rowId: '.request', description: `╰►Request Fitur ${wm}` },
	{title: "🌏 Lokasi BOT", rowId: '.loc2', description: `╰►Lokasi ${wm}` },
	{title: "🧰 Version Bot", rowId: '.cekversi', description: `╰►Versi ${wm}` },
	{title: "👋 Sapa Bot", rowId: '.salken', description: `╰►Menyapa ${wm}` },
	]
    },
]

const listMessage = {
  text: 'Beberapa Info Bot Yang Dibuat Dengan Simpel',
  footer: info,
  title: null,
  buttonText: "HERE 🍻",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
}

handler.help = ['info', 'infobot']
handler.tags = ['info']
handler.command = /^(info|infobot)$/i

export default handler
