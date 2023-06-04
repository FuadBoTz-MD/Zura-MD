let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'demote')
}
handler.help = ['demotebang']
handler.tags = ['group', 'owner']
handler.command = /^demotebang$/i

handler.owner = true
handler.botAdmin = true
handler.group = true

export default handler