let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
    conn.menfess = conn.menfess ? conn.menfess : {}
    if (!text) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note: *Jika Penggunaan Kata Terdeteksi Toxic Otomatis Tidak Akan Dikirim Oleh Bot!*\n*Harap Yang Sopan Kak!*\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw 'Nomer tidak terdaftar di whatsapp.';
    if (jid == m.sender) throw 'tidak bisa mengirim pesan menfess ke diri sendiri.'
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
    try {
    	let id = + new Date
        let pp = 'https://telegra.ph/file/2870f05b11447e5c80fb1.jpg'
        let link = 'https://chat.whatsapp.com/EAR7T7H59vOJz8KcwMP179'
        let tek = `Hai Kak ${data.jid.split('@')[0]}, kamu menerima pesan Menfess nih.\n\nDari: *${name}*\nPesan: \n${pesan}\n\nMau balas pesan ini? bisa kok. tulis aja sesuatu lalu kirim nanti terkirim otomatis ke ${name}`
        await conn.reply(data.jid, tek, m, { contextInfo: { mentionedJid: [who], isForwarded: true, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: pp, title: '*「 Konfess 」*', thumbnail: { url: pp }, thumbnailUrl: pp, sourceUrl: 'https://chat.whatsapp.com/EAR7T7H59vOJz8KcwMP179', renderLargerThumbnail: true }}})
        .then(() => {
            m.reply('Berhasil mengirim pesan menfess.')
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
    } catch (e) {
        console.log(e)
        m.reply('Maaf Ada Yang Error');
    }
}
handler.tags = ['main']
handler.help = ['menfess', 'menfes'].map(v => v + ' <nomor|nama pengirim|pesan>')
handler.command = /^(menfess|menfes)$/i
handler.private = true

export default handler