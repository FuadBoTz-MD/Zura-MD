let handler = async (m, { jid, conn, isOwner }) => {

let users = Object.entries(global.db.data.users).filter(user => user[1].warn)

let name = conn.getName('6287734910547@s.whatsapp.net')
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

let adv = Object.entries(global.db.data.users).filter(user => user[1].warn)
let warns = global.db.data.users.warn
let user = global.db.data.users
let fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=List+Warn'
let caption = `List User Tengil 
*╔═══════════════════·•*
║ *Total : ${adv.length} User* ${adv ? '\n' + adv.map(([jid, user], i) => `
║ 
║ • ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : db.data.users[jid].name}
║
║ 1.- ${isOwner ? '@' + jid.split`@`[0] : jid} *(${user.warn}/4)*
`.trim()).join('\n') : ''}
*╚═══════════════════·•*`
await conn.reply(m.chat, caption, fkon, { contextInfo: { isForwarded: false, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: fla, title: `List Warn ${wm}`, thumbnail: { url: fla }, thumbnailUrl: fla, renderLargerThumbnail: true }}})
}

handler.command = /^(listwarn)$/i 
handler.limit = true

export default handler
