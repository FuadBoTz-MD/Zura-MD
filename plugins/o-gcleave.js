import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, args, command, text, usedPrefix: _p }) => {
let [number, pesan, boddy] = text.split `|`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

    if (!number) return conn.reply(m.chat, 'Silahkan masukan id grup yang akan dikirim', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]
    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*Pesan: ${pesan}*\n\n${wm}`

    await conn.reply(korban + '@g.us', spam1, 0)
    await conn.groupLeave(korban + '@g.us')

{

    let logs = `[!] Berhasil mengirim pesan wa ke id grup ${korban}@g.us`
    await conn.reply(m.chat, logs, m)
}}
handler.command = /^gc(leave)$/i
handler.owner = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler
