let handler = m => m
handler.all = async function (m) {
	let chat = global.db.data.chats[m.chat]
	if (chat.autoPesence) {
    if (m.text) {
      if (m.text.startsWith('.') || m.text.startsWith('#') || m.text.startsWith('!')) {
        let ran = ['unavailable', 'available', 'composing', 'recording', 'paused', 'm.text.startsWith']
        return this.sendPresenceUpdate(ran.getRandom(), m.chat).then(v => { this.sendMessage(m.chat, { react: { text: '💫', key: m.key }})
        })
      }
    }
  }
}
export default handler