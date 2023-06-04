let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `V`.trim()
conn.reply(m.chat, info, fgif)
}
handler.command = /^(turu)$/i
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler