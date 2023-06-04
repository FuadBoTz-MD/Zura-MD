
let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 50) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 📧 EMAIL 」*\n\n📫Pengirim : Rahasia\n💬Pesan : ${pesan}\n\n *${global.wm}*`

    conn.sendMessage(korban + '@s.whatsapp.net', spam1, m)

    let logs = `[!] Berhasil mengirim pesan wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}
handler.help = ['menfess']
handler.tags = ['owner']

handler.command = /^(menfess)$/i
handler.owner = true
handler.fail = null

export default handler 
