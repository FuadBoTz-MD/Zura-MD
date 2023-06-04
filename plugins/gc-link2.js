let handler = async (m, { conn }) => {
  try {
    /*conn.sendTemplateButtonDoc(m.chat, col, `*Link Group:* ${await conn.getName(m.chat)}\n\nhttps://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat), wm, 'Info Grup', '.infogrup', m)*/

conn.sendMessage(m.chat, {
  text: `*Group Name:* ${await conn.getName(m.chat)}\n*ID:* ${m.chat}ɪ`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Copy`,
      url: 'https://www.whatsapp.com/otp/copy/https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat)
    }
  }],
  footer: wm
})

  } catch {
    conn.reply(m.chat, `Jadikan @${conn.user.jid.split('@')[0]} sebagai admin untuk menggunakan perintah ini!`, m, { mentions: [conn.user.jid] })
  }
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^(linkgc)?$/i

handler.group = true
handler.botAdmin = true

export default handler