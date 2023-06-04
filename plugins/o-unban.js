let { proto } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, args, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.quoted
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, 'Succes!', m)
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban(user)?$/i
handler.owner = true

export default handler
