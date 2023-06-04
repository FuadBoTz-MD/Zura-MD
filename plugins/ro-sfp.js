/*
 * Don't Deleted!
 * By ᴋʏᴀᴍɪ×͜×࿐
 * ᴄᴏʟᴜᴍʙɪɴᴀ ᴍᴅ࿐ V6 Fixed!
 * Github: https://github.com/ShionMDv
 * WhatsApp: wa.me/6287734910547
*/

import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    try {
    let named = m.pushName
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    
    let alvin = await conn.profilePictureUrl(who, 'image').catch(_ => hwaifu.getRandom()) 

    if (!text) return conn.reply(m.chat, `Reply Textnya!\nContoh: ${usedPrefix + command} gc-info`, fkon, m)
    let path = `plugins/${text}.js`
    await fs.writeFileSync(path, m.quoted.text)
    let buttonMessage = `\n\ntersimpan di ${path}`
    
    await conn.sendPresenceUpdate('composing', m.chat)
    await conn.reply(m.chat, buttonMessage, fkon, { contextInfo: { isForwarded: false, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: alvin, title: `⎙ Done ${conn.getName(m.sender)}`, thumbnail: { url: alvin }, thumbnailUrl: alvin, renderLargerThumbnail: true }}})
    } catch {
        m.reply(`_Penggunaan:_\n*${usedPrefix + command} <teks>*\n\n_Contoh:_\n*${usedPrefix + command} menu*`)
    }
}
handler.help = ['sfp'].map(v => v + ' <teks>')
handler.tags = ['developer']
handler.command = /^(sfp)$/i
handler.rowner = true

export default handler