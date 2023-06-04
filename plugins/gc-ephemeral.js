import { promises } from 'fs'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
   {
        title: `✽ Pilih Waktu/Hari Nya! ✽`,
        rows: [
        {title: `⬙ 24 HOUR ⬙`, rowId: `${usedPrefix + command} 24h`},
        {title: `◈ 7 DAY ◈`, rowId: `${usedPrefix + command} 7d`},
        {title: `▣ 90 DAY ▣`, rowId: `${usedPrefix + command} 90d`}
        ]
    },
]
const listMessage = {
  text: ' ',
  footer: '\nUpdated By ᴋʏᴀᴍɪ×͜×࿐',
  title: `┏━°⌜ Pilih Waktu/Hari nya ⌟°━┓`,
  buttonText: "Pilihan Di Sini",
  sections
}
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let asu = 'https://telegra.ph/file/2279dc4b2f8c4cf4f1153.jpg'
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
       case '24h':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
        if (chat.e24h) return
       await conn.sendMessage(m.chat, { disappearingMessagesInChat: 1*24*3600 })
       chat.e24h = !isEnable
       break
       case '7d':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
        if (chat.e7d) return
       await conn.sendMessage(m.chat, { disappearingMessagesInChat: 7*24*3600 })
       chat.e7d = !isEnable
       break
       case '90d':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
        if (chat.e90d) return
       await conn.sendMessage(m.chat, { disappearingMessagesInChat: 90*24*3600 })
       chat.e90d = !isEnable
       break
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
      throw false
  }
  
conn.sendButton(m.chat, `*OPTIONS*
*Type:* ${type} 
*Status:* Succes ✅
*Options:* ${isEnable ? 'Enable' : 'Disable'}
*For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`, author, asu, [[`${isEnable ? '✖️ Disable' : '✔️ Enable'}`, `${isEnable ? `.off ${type}` : `.ephe ${type}`}`], ['Group Info', '.gcinfo']], m, {
asLocation: true })
}
handler.help = ['ephe'].map(v => v + ' <option>')
handler.tags = ['group', 'owner']
handler.command = /^((ephe)|[01])$/i

export default handler
