let handler = async (m, { conn }) => {
let info = `
*${htki} GROUP BOT ${htka}*
`
const sections = [
   {
	title: `𝑱𝒐𝒊𝒏 𝑲𝒆 𝑮𝒓𝒖𝒑 𝑶𝒇𝒇𝒊𝒄𝒂𝒍 𝑭𝒖𝒂𝒅𝑩𝒐𝑻𝒛࿐\n\n\n━━━〔 Dᴏɴ'ᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕━━━`,
	rows: [
	    {title: '"=⌕ › Group FuadBoTz࿐', description: "Group Utama FuadXy×͜×࿐", rowId:".gcbot"},
        {title: '"=⌕ › Grup Ke 2 FuadBoTz࿐', description: "Group Kedua", rowId:".gcbot2"},
        {title: '⌘ › Owner', description: "Creator FuadBoTz࿐", rowId:".owner"},
        {title: '⎚ › Info FuadBoTz࿐', description: "Info FuadBoTz࿐", rowId:".info"},
        {title: '⎙ › Donasi', description: "Donasi Untuk FuadXy×͜×", rowId:".donasi"},
	    ]
      },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Klik di sini",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler