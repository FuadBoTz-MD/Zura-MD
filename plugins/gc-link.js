let handler = async (m, { conn }) => {
  try {

    conn.reply(m.chat, `*Group Name:* ${await conn.getName(m.chat)}\n*ID:* ${m.chat}\n\n*Link Group:* https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat) + `\n\n${wm}`, m) //Pakai ini jika ingin kelihatan di Wa biasa

  } catch {
    conn.reply(m.chat, `Jadikan @${conn.user.jid.split('@')[0]} sebagai admin untuk menggunakan perintah ini!`, m, { mentions: [conn.user.jid] })
  }
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(g(c)?ro?up)?$/i

handler.group = true
handler.botAdmin = true

export default handler