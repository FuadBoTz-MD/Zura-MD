import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let named = conn.getName(m.sender)
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let pp = 'https://telegra.ph/file/554097fe1a6fb58f8b2cf.jpg'

    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dinihari 🌆"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }

    let user = global.db.data.users[m.sender]
    let txt = `👋 Hai, ${res}

${user.banned ? '📮Maaf, kamu dibanned & Tidak bisa menggunakan bot ini lagi' : `💬 Ada yg bisa ${this.user.name} bantu?\nSilahkan ketik *.menu* untuk melihat daftar menu pada bot.\n\nNote: ᴅᴀᴛᴀʙᴀsᴇ ʙᴏᴛ ʙɪsᴀ sᴀᴊᴀ ᴋᴇʀᴇsᴇᴛ ᴋᴀʀᴇɴᴀ ᴘʟᴀᴛғʀᴏᴍɴʏᴀ..\nsᴜᴘᴘᴏʀᴛ ʙᴏᴛ ɪɴɪ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ ʙᴇʀᴅᴏɴᴀsɪ/sᴇᴡᴀ ʙᴏᴛ ᴀɢᴀʀ ʙᴏᴛ ɪɴɪ ʙɪsᴀ ᴏɴ ²⁴ ᴊᴀᴍ ᴅᴀɴ ᴅᴀᴛᴀʙᴀsᴇ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴋᴇʀᴇsᴇʀ.\n\nᴛʀɪᴍᴀ ᴋᴀsɪʜ🙏`}`.trim()

    if (new Date() - user.pc < 21600000) return // waktu ori 21600000 (6 jam)
    await conn.reply(m.chat, txt, fkon, { contextInfo: { forwardingScore: 9999, isForwarded: true, externalAdReply :{ mediaType: 1, mediaUrl: pp, title: 'ғᴜᴀᴅ-ʙᴏᴛᴢ (ᴘᴜʙʟɪᴄ)', thumbnail: { url: pp }, thumbnailUrl: pp, sourceUrl: 'https://chat.whatsapp.com/EAR7T7H59vOJz8KcwMP179', renderLargerThumbnail: true }}})
    user.pc = new Date * 1
}