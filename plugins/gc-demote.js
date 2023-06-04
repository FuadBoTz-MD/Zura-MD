import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    let user = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.quoted
            await conn.groupParticipantsUpdate(m.chat, [user], 'demote')
            await delay(1 * 1000)
        
    m.reply('Sukses Demote')

}
handler.help = ['demote @tag']
handler.tags = ['group']
handler.command = /^(demote)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))