let handler = async (m, { conn }) => {
let info = `
*${htki} VIRUS ${htka}*
          
 🔥BY ${nameown}🔥
          
                  
–––––– *INFO!* ––––––
*📮Virus Ini Hanya Khusus ${author} Mampus Bocil Virtex Gabisa Akses Awoakwok*
`
const sections = [
   {
    title: `✃ VIRTEX`,
	rows: [
	    {title: "Virus Slayer 1", rowId: '.virslayer', description: 'ᴄᴏʟᴜᴍʙɪɴᴀ ᴍᴅ࿐' },
	    {title: "Virtex Slayer 2", rowId: '.virslayer2', description: 'ᴄᴏʟᴜᴍʙɪɴᴀ ᴍᴅ࿐' },
	{title: "Virus Air", rowId: '.vair', description: 'ᴄᴏʟᴜᴍʙɪɴᴀ ᴍᴅ࿐' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "Download WhatsApp Imune", rowId: '.waantivirus', description: 'Download WhatsApp Kebal' },
	    ]
        }, {
    title: `✃ UNLOCK PREMIUM`,
	rows: [
	    {title: "💸Upgrade Premium", rowId: '.sewa', description: 'Dan unclock Fitur premium lainya!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "① ᴄᴏʟᴜᴍʙɪɴᴀ ᴍᴅ࿐",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
}
handler.help = ['virtex']
handler.tags = ['virus']
handler.command = /^virtex$/i
handler.premium = false

export default handler
