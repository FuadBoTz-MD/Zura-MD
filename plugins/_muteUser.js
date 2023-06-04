/**
 * Jangan Di Hapus!
 * Fitur Mute By Kyami
 * WhatsApp: wa.me/6287734910547
 * Author SilenceBot && ColumbinaBot
 **/

let handler = m => m

handler.before = async function (m) {
    let user = db.data.users[m.sender]
    if (user.mute) {
   this.sendMessage(m.chat, { delete: m.key })
   }
  return !0
}

export default handler