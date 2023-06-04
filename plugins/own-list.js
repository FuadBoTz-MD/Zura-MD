let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	
let teks = ' '
const sections = [
   {
	title: `${htjava} Oᴡɴᴇʀ –––––––––·•`,
	rows: [
	{title: "•~ 𝑭𝒖𝒂𝒅𝑿𝒚ヅ", rowId: ".owner2"},
	{title: "•~ 𝑷𝒆𝒏𝒈𝒆𝒎𝒃𝒂𝒏𝒈", rowId: ".own4"},
	{title: "•~ 𝑷𝒆𝒎𝒃𝒖𝒂𝒕 𝑺𝒄𝒓𝒊𝒑𝒕 𝑩𝒐𝒕 𝑰𝒏𝒊", rowId: ".pengembang"},
	]
    },{
	title: `${htjava} Sᴜᴘᴘᴏʀᴛ Oᴡɴᴇʀ –––––––·•`,
	rows: [
	    {title: "• Dᴏɴᴀsɪ", rowId: ".donasi"},
	{title: "• Sᴇᴡᴀ Bᴏᴛ", rowId: ".sewa"},
	{title: "• Uᴘ Pʀᴇᴍɪᴜᴍ", rowId: ".premium"},
	]
    },{
	title: `${htjava} Jᴀᴅɪ Bᴏᴛ–––––––·•`,
	rows: [
	    {title: "• Jᴀᴅɪ Bᴏᴛ 🅜︎", rowId: ".jadibot"},
	]
  },{
	title: `${htjava} Bᴀᴄᴋ Tᴏ–––––––·•`,
	rows: [
	    {title: "• Mᴇɴᴜ", rowId: ".menu"},
	{title: "• Rᴘɢ", rowId: ".? rpg"},
	{title: "• Cᴇᴋ Pʀᴏғɪʟᴇ Mᴜ", rowId: ".profile"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: wm,
  title: `━━━━━━▢ *Oᴡɴᴇʀ* ▢━━━━━━\n\n*_Sᴇʟᴇɴɢᴋᴀᴘɴʏᴀ Dᴀʀɪ Pᴀʀᴀ Oᴡɴᴇʀ😁_*`,
  buttonText: "Cʟɪᴄᴋ Hᴇʀᴇ !",
  sections
}
    return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
}
handler.help = ['owner']
handler.tags = ['main', 'info']
handler.command = ['owner']

export default handler