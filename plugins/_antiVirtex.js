/* Recode By FuadXy
 * Wa: 6283837709331
 * Bot: 6283138381932
 */
export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    let named = conn.getName(m.sender)
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let kled = 'https://telegra.ph/file/ce745fc2b7b5e9eda0e5f.jpg'
    let hapus = m.key.participant
    let bang = m.key.id
    let regVirtex = /(PLHIPS|settings|৭৭|๑๑|๒๒|[Đৡดผ๖⃝-⃟⃢-⃤㜸])/i
    let isVirtexOn = regVirtex.exec(m.text)
    if (chat.antiVirtex && isVirtexOn && !m.fromMe) {
   await this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        await conn.reply(m.chat, `*Font Virtext Detect!*${isBotAdmin ? '' : '\n\n_Bot bukan admin_'}`,m, { contextInfo: { isForwarded: false, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: kled, title: `® FuadXy`, thumbnail: { url: kled }, thumbnailUrl: kled, renderLargerThumbnail: true }}})
        if (isBotAdmin && bot.restrict) {
       return
        } else if (!bot.restrict) return m.reply('Mungkin Dia Admin!')
    }
    return !0
}