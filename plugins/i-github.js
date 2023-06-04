let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `📮 *SC GW PRIVATE KARENA RAWAN DIJUAL!*
`.trim()


    conn.reply(m.chat, info, { key: { participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'}, message: { pollCreationMessage: { name: `Private...` } } })
}
handler.help = ['github']
handler.tags = ['info']
handler.command = /^(github|gh)$/i

handler.fail = null
handler.exp = 25

export default handler