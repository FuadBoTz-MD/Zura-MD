let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan jumlah legendary yang akan diberi'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya angka'
    let poin = parseInt(txt)
    let legendary = poin
    if (legendary < 1) throw 'Minimal 1'
    let users = global.db.data.users
    users[who].legendary += poin

    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu mendapatkan +${poin} Legendary!`, m, { mentions: [who] }, {
        mentions: [m.sender]
    }) 
}

handler.help = ['addlegendary @user <amount>']
handler.tags = ['xp']
handler.command = /^addlegendary$/
handler.owner = true

export default handler