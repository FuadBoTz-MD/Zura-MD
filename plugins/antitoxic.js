const isToxic = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|a(su|sw|syu)/i

export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
        
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    let user = db.data.users[m.sender]
    const isAntiToxic = isToxic.exec(m.text)

    if (chat.antiBadword && isAntiToxic) {
        await this.sendButton(m.chat, `*Terdeteksi Toxic!*${isBotAdmin ? `\n_Akan di hapus_ \nWarning +1` : `\n_Bot bukan admin_ \nWarning +1`}`, wm2, ['off antitoxic', '.off antitoxic'], m)
        if (m.isGroup) {
            if (isBotAdmin) {
                user.warning += 1
                await this.sendMessage(m.chat, { delete: m.key })
                if (user.warning > 5) {
                    user.banned = true
                    await m.reply('*Kamu dibanned!*\n_Warning 5/5_')
                }
            } else if (!bot.restrict) return m.reply('Semoga harimu suram!')
        }
    }
    return !0
}