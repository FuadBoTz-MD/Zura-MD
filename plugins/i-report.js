let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `📮 Kalo kamu ada keluhan tentang bug/eror ketik .report <keluhan> atau lainya klik\n\nCustomer Service\n📣Klik link berikut: wa.me/6283837709331`
    if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`'_☑️Pesan terkirim kepemilik bot, jika ${command.toLowerCase()} hanya main-main tidak akan ditanggapi.\n_'`)
}
handler.help = ['report', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.private = false
handler.command = /^(report|request)$/i
export default handler