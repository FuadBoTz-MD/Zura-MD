let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw 'Padahal udah jadi admin'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
}
handler.help = ['accbang']
handler.tags = ['owner', 'group']
handler.command = /^accbang$/i

handler.owner = true
handler.botAdmin = true
handler.group = true

export default handler