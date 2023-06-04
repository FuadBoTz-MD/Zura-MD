import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
    let _pp = hwaifu.getRandom()
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
    let name = conn.getName(who)
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => _pp)
    let { premium, level, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[who]
    let user = db.data.users[who]
    let skill = db.data.users[who].skill
    let title = db.data.users[who].title
    let pasang = db.data.users[who].pasangan
    let umr = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].getRandom()
    let str = `💌 • *Name:* ${registered ? user.name : name} 
📧 • *Tag:* @${who.replace(/@.+/, '')}
📞 • *Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 • *Link:* https://wa.me/${who.split`@`[0]} ${registered ? `\n🎨 • *Age:* ${age}` : ''}
🗣️ • *Title:* ${title ? title : 'Belum Diberi Title'}
🌹 • *Pasangan:* ${pasang ? `@${pasang.split('@')[0]}` : 'Awokawok kasian jomblo :p'}
✨ • *Level:* ${level}
🏅 • *Pangkat:* ${user.role}
⚡ • *Skill:* ${skill == '' ? 'Belum Memiliki Skill' : '' || skill == 'swordmaster' ? 'Sword Master' : '' || skill == 'archer' ? 'Archer' : '' || skill == 'magicswordmaster' ? 'Magic Sword Master' : '' || skill == 'masterspearman' ? 'Master Spearman' : '' || skill == 'shadow' ? 'Assassin' : ''}
🌟 • *Premium:* ${user.premiumTime <= 0 ? "❌" : "✅"}
📑 • *Registered:* ${registered ? '✅': '❌\n\n  ~ Registrasi tekan tombol dibawah..'}
`.trim()
    await conn.sendPresenceUpdate('composing', m.chat)
    await conn.reply(m.chat, str + '\n\n' + botdate, fkon, { contextInfo: { mentionedJid: [pasang, who], forwardingScore: 9999, isForwarded: true, externalAdReply: { mediaType: 1, mediaUrl: pp, title: ']========❏ *PROFILE* ❏========[', thumbnail: { url: pp }, thumbnailUrl: pp, sourceUrl: false, renderLargerThumbnail: true }}})
}
handler.help = ['profile @user']
handler.tags = ['xp']
handler.command = /^(pp|profil|profile)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)