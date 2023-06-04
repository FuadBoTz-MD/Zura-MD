let handler = async function (m) {
  //if (!m.quoted) throw false
 //let { chat, fromMe, id, isBaileys } = m.quoted
 // if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 conn.sendMessage(m.chat, { delete: key })
}
handler.help = ['delete', 'del']
handler.tags = ['owner']
handler.command = /^(delete|delet|del)$/i
handler.group = true
handler.admin = true

export default handler