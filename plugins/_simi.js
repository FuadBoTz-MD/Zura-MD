import fetch from 'node-fetch'

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    if (chat.simi) {
    try {
        let api = await fetch("https://api.simsimi.net/v2/?text=" + encodeURIComponent(m.text) + "&lc=id")
  let res = await api.json()
  m.reply(`${res.success}`)
  } catch (e) {
  let api = await fetch("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=1&msg=" + encodeURIComponent(m.text))
  let res = await api.json()
  m.reply(`${res.cnt}`)
  }
    }
}