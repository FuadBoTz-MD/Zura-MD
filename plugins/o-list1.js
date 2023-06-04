let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	
let teks = ' '
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	{title: "•~ FuadXyヅ", rowId: ".ownfxy"},
	{title: "•~ Radit Ca", rowId: ".rdc"},
	{title: "•~ Rino Xyro", rowId: ".rxy"},
	{title: "•~ Yohanes Xyro", rowId: ".yxy"},
	]
    },{
	title: `${htjava} SUPPORT OWNER –––––––·•`,
	rows: [
	    {title: "• Donasi", rowId: ".donasi"},
	{title: "• Sewa BOT", rowId: ".sewa"},
	{title: "• Up Premium", rowId: ".premium"},
	]
  },{
	title: `${htjava} BACK TO–––––––·•`,
	rows: [
	    {title: "• Menu", rowId: ".menu"},
	{title: "• RPG", rowId: ".? rpg"},
	{title: "• Cek Profilmu", rowId: ".profile"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: wm,
  title: `━━━━━━▢ *OWNER* ▢━━━━━━\n\n*_Selengkapnya dari para Owner😁_*`,
  buttonText: "Click Here !",
  sections
}
    return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
}
handler.help = ['owner']
handler.tags = ['main', 'info']
handler.command = ['ownlist']

export default handler