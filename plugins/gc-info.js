let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, adminOnly, antispam, antiSticker, antiBot, sWelcome, sBye, sPromote, sDemote, antiLink, antiLuar, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    
 let named = conn.getName(m.sender)
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}   
    
        let text = `
*ID :* 
${groupMetadata.id}
*Name :* 
${groupMetadata.subject}
*Description :* 
${groupMetadata.desc?.toString() || 'unknown'}
*Total Members :*
${participants.length} Members
*Group Owner :* 
@${owner.split('@')[0]}
*Group Admins :*
${listAdmin}
*Group Settings :*
Welcome: ${welcome == true ? '✅' : '❌'}
Admin Only: ${adminOnly == true ? '✅' : '❌'}
Anti Bot: ${antiBot == true ? '✅' : '❌'}
Anti Sticker: ${antiSticker == true ? '✅' : '❌'}
Anti Link: ${antiLink == true ? '✅' : '❌'}
Anti Bule: ${antiLuar == true ? '✅' : '❌'}
Anti Spam: ${antispam == true ? '✅' : '❌'}
Anti Delete: ${del ? '❌' : '✅'}

*Message Settings :*
Welcome: ${sWelcome}
Bye: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}
`.trim()
    await conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [...groupAdmins.map(v => v.id), owner], isForwarded: true, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: pp, title: '*「 Group Information 」*', thumbnail: { url: pp }, thumbnailUrl: pp, sourceUrl: 'https://chat.whatsapp.com/EAR7T7H59vOJz8KcwMP179', renderLargerThumbnail: true }}})
}

handler.help = ['groupinfo']
handler.tags = ['group']
handler.command = /^(grupinfo|groupinfo|gcinfo)$/i

handler.group = true

export default handler