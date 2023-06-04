import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Level ${user.level} 📊
*${user.exp - min} / ${xp}*
Kurang *${max - user.exp}* lagi! ✨
`.trim()
    }
    let fuadxyz = 'https://telegra.ph/file/274775735ac4d3f446f45.png'
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `.             ${user.role}`
        let str = `
*🎉 C O N G R A T S 🎉*
*${before}* ➔ *${user.level}* [ *${user.role}* ]`.trim()
        try {
            const fuadxyz = await levelup(teks, user.level)
            await conn.reply(m.chat, str, m, { contextInfo: { isForwarded: true, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: fuadxyz, title: `Level Up`, thumbnail: { url: fuadxyz }, thumbnailUrl: fuadxyz, renderLargerThumbnail: true }}})
        } catch (e) {
            await conn.reply(m.chat, str, m, { contextInfo: { isForwarded: true, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: fuadxyz, title: `Level Up`, thumbnail: { url: fuadxyz }, thumbnailUrl: fuadxyz, renderLargerThumbnail: true }}})
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

export default handler