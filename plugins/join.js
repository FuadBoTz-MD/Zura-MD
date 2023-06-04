let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = db.data.users[m.sender]
    let fitur = db.data.settings[conn.user.jid]
    let teks = `@${who.split("@")[0]} Telah menambahkan Bot ke grup`
    if (fitur.limitjoin < 0) return conn.sendMessage(m.chat, {text: '[ ✘ ] Join Limit Sudah Habis..\nMinta Join Limit Ke Owner wa.me/6283837709331\nJangan Lupa Mampir... \nLink: https://chat.whatsapp.com/EAR7T7H59vOJz8KcwMP179 \nShare Linknya Untuk Meramaikan Grup 🙏🏻'}, {quoted: m})
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw 'Link mana?'
    let res = await conn.groupAcceptInvite(code)
    expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    fitur.limitjoin -= 1
    user.joinlimit -= 1
    await conn.sendMessage(m.chat, {text: `[ ✓ ] Join Group Berhasil ${res}\n📛 BOT Akan Keluar Dalam ${expired} Hari`}).then(() => { m.reply(`Join Limit -1
    Sisa = ${user.joinlimit}
    Minta Join Limit Ke Owner wa.me/6283837709331`) })
    conn.reply(global.nomorbot + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
            contextInfo: {
                mentionedJid: [who]
            }
        })
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
}
handler.help = ['join <chat.whatsapp.com> <waktu>']
handler.tags = ['group', 'main']

handler.command = /^(join)$/i
handler.group = null
handler.limit = true

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))