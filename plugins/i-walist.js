let handler = async (m, { conn }) => {
let info = `
*${htki} IMUNE ${htka}*
          
 
          
                  
–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
*📮 Download Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `✃ INFO`,
	rows: [
	    {title: "WhatsApp Imune 1", rowId: '.waimune1', description: 'Wa GB Free For All User' },
	    {title: "WhatsApp Imune 2", rowId: '.waimune2', description: 'Wa GB Free For All' },
	{title: "WhatsApp Gb Kebal 1", rowId: '.wagb1', description: 'Wa Immune Free' },
	{title: "WhatsApp Gb Kebal 2", rowId: '.wagb2', description: 'Wa Immune For Premium User' },
	]
    }, {
    title: `✃ BUY`,
	rows: [
	    {title: "VinzCyx", rowId: '.owner', description: 'Pembuat Bot' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "📛Download",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['waantivirus']
handler.tags = ['virus']
handler.command = /^waantivirus$/i
handler.premium = false

export default handler
