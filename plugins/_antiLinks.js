/*
 * JANGAN DIHAPUS ANJING
 * Update By KyamiShio
 * Script Bot Ini Hanya Kyami Berikan Kepada Orang Yang Sangat Dia Percaya
 * Jaga Amanah Yak Kontol
 * Wa Kyami? : https://wa.me/6287734910547?text=Hallo+Kyami+hehehe
 * Github Original Kyami : https://github.com/ShionMDv/
*/


const linkRegex = /https:/i
export async function before(m, { conn, isAdmin, isBotAdmin, text }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)

if (chat.antiLinks && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
const linkThisGroup4 = `https://www.xnxx.com/`
if (m.text.includes(linkThisGroup)) return m.reply('Kamu mengirim link grup ini jadi ga akan di kick:v')
if (m.text.includes(linkThisGroup2)) return m.reply("Kamu mengirim link Youtube!")
if (m.text.includes(linkThisGroup3)) return m.reply("Kamu mengirim link Youtube!")
if (m.text.includes(linkThisGroup4)) return m.reply("Kamu mengirim link Bokep!")
}    

try {
if (isBotAdmin) {
await conn.reply(m.chat, `*AntiLink v2 Aktif!*\n1. Link Group\n2. Link Youtube\n3. Link Bokep\n\n${author}`, m).then(() => { this.sendMessage(m.chat, { delete: m.key })
  })
} else if (!bot.restrict) return m.reply('Owner disable auto kick!')
    } catch (e) {
        console.log(e)
        throw (e)
}
}
    return !0
}
