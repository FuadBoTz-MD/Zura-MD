import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants, groupMetadata  }) => {
	
let users = groupMetadata.participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith('62' || '62'))
for (let user of users)
await conn.groupParticipantsUpdate(m.chat, [user], 'promote').catch(v => m.reply('ERROR'))
}

handler.help = ['adminall']
handler.tags = ['group']

handler.command = /^(adminall|promoteall)$/i
handler.admin = true
handler.group = true

export default handler