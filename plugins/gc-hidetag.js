/**
 * 
 * ® By: Dev ×͜×
 * Github: davekgw
 */

import MessageType from '@adiwajshing/baileys'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import fs from 'fs'
let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    if (!(isAdmin || isOwner)) {
        dfail('admin', m, conn)
        throw false
    }
    let users = participants.map(u => conn.decodeJid(u.id))
    let q = m.quoted ? m.quoted : m
    let c = m.quoted ? m.quoted : m.msg
    let negara = ['Jerman🇩🇪', 'Rusia🇷🇺', 'Brazil🇧🇷', 'Indonesia🇮🇩', 'Inggris🇬🇧', 'Prancis🇫🇷', 'Amerika Serikat🇺🇸', 'Jepang🇯🇵', 'Korea🇰🇷', 'Argentina🇦🇷', 'Tokyo❓', 'Malaysia🇲🇾', 'Arab🇸🇦', 'Palestina🇵🇸', 'Prancis🇫🇷', 'Pakistan🇵🇰', 'Albania🇦🇱', 'Madura❓', , 'Jawa❓',]
    let ngr = negara.getRandom()
    let fLoc = {
                key:
                { fromMe: false,
                participant: `0@s.whatsapp.net`, ...(m.chat  ? 
                { remoteJid: "status@broadcast" } : {}) },
                message: { "liveLocationMessage": { "caption": `${ngr}`,"h": `${wm}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
               }
    const msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, { [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : { text: c || '' }}, { quoted: fLoc, userJid: conn.user.id }), text || q.text, conn.user.jid, { mentions: users })
    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = ['hidetag']
handler.tags = ['group', 'owner']
handler.command = /^(h(ide)?(tag)?)$/i
handler.group = true

export default handler