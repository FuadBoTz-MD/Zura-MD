// VERSI LAMA

/*let handler = async (m, { conn, text }) => {

  let _pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => hwaifu.getRandom())

    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    conn.sendButton(m.chat,
`*––––––––【 AFK 】––––––––*`,
`   • ᴀᴡᴀʏ ғʀᴏᴍ ᴋᴇʏʙᴏᴀʀᴅ sᴛᴀʀᴛᴇᴅ •

${conn.getName(m.sender)} is now AFK

ʀᴇᴀsᴏɴ: ${text ? '' + text : 'Tidak Ada'}`, await conn.resize(pp, 300, 180), [
[`ʏɢ ᴀꜰᴋ ᴅɪ ʙᴜʟʟʏ`, `OK`]
], m, {asLocation: true})
}
handler.help = ['afk [reason]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler*/




// KALO MAU PAKE CONN REPLY

import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { text }) => {
let name = m.pushName || conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[m.sender]
let wibu = `${hwaifu}.getRandom()`

let thumb = await conn.profilePictureUrl(who, 'image').catch(_ => hwaifu.getRandom())
user.afk = + new Date
user.afkReason = text
let anunya = `\n${conn.getName(m.sender)} Sedang AFK\nDᴇɴɢᴀɴ Aʟᴀsᴀɴ ⬕ ${text ? ': ' + text : ''}`
await conn.reply(m.chat, anunya, false, { contextInfo: { isForwarded: false, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: thumb, title: `Seseorang AFK!`, thumbnail: { url: thumb }, thumbnailUrl: thumb, renderLargerThumbnail: true }}})
}

handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler


// KALO MAU PAKE BUTTON DOC

/*import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = m.pushName || conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let alvin = await conn.profilePictureUrl(who, 'image').catch(_ => hwaifu.getRandom()) 
let alasan = `\n*${conn.getName(m.sender)} Sedang AFK*`
let alasan2 = `*Dengan Alasan:* ${text ? ': ' + text : ''}`
let thumb = await(await fetch(alvin)).buffer()
user.afk = + new Date
user.afkReason = text
 conn.sendButtonDoc(m.chat, alasan, alasan2, 'Jangan Ganggu Ya', 'Oke', m,  { contextInfo: { externalAdReply: { showAdAttribution: true,
        mediaUrl: "https://instagram.com/_alv.stn",
        mediaType: "VIDEO",
        description: "https://instagram.com/_alv.stn",
        title: 'Columbina By Kyami',
        body: wm,
        thumbnail: thumb,
        sourceUrl: sgc }}})
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler*/