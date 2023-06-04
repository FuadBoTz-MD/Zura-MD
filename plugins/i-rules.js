let handler = async (m, { conn }) => {
let info = `
━━━━━━▢ *RULES* ▢━━━━━━

Bᴀᴄᴀ Rᴜʟᴇs Nʏᴀ Yᴀ Kᴀᴋ😃

© 2021-2023 Fᴜᴀᴅ BoTz Oғғɪᴄɪᴀʟ 
`
const sections = [
   {
	title: `✃ Rᴜʟᴇs`,
	rows: [
         {title: "❗Pᴇʀɪɴɢᴀᴛᴀɴ", rowId: '.banperingatan', description: 'Wᴀʀɴ' },
	{title: "❗Bᴀɴɴᴇᴅ Pᴇʀᴍᴀɴᴇɴ", rowId: '.banpermanen', description: 'Bᴀɴɴᴇᴅ Sᴇʟᴀᴍᴀɴʏᴀ' },
	{title: "❗Bᴀɴɴᴇᴅ + Dᴇɴᴅᴀ", rowId: '.bandenda', description: 'Bᴀɴɴᴇᴅ + Dᴇɴᴅᴀ' },
	{title: "❗Aɴᴛɪ Bᴀɴɴᴇᴅ", rowId: '.antibanned', description: 'Aɢᴀʀ Tɪᴅᴀᴋ Tᴇʀᴋᴇɴᴀ Pᴇʟᴀɴɢɢᴀʀᴀɴ' },
	{title: "❗Nᴏᴛᴇ", rowId: '.bannote', description: 'Nᴏᴛᴇ Bᴏᴛ' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Cᴇᴋ Rᴜʟᴇs",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['rules']
handler.tags = ['info', 'main']
handler.command = /^(rules(bot)?|peraturan)$/i
handler.private = false

export default handler