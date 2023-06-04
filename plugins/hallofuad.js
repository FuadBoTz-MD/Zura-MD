let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = ` `.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*✧───────···────────✧*\n*Hallo Juga Woy👋🏻* \n *Gimana Kabar Nya? >_<*', 'status@broadcast')
}
handler.customPrefix = /^(Hallo Fuad)$/i
handler.command = new RegExp

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler