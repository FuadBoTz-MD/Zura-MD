/**
 * Jangan Di Hapus!
 * Fitur Mute By Kyami
 * WhatsApp: wa.me/6287734910547
 * Author SilenceBot && ColumbinaBot
 **/

let handler = async (m, { conn, args}) => {

    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0] ? args[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : null;
    else who = args[0] ? args[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : null;
    if (!who) throw 'Tag yang mau di mute!'
    if (!(who in global.db.data.users)) throw 'User tidak terdaftar dalam DATABASE!!'
    let user = global.db.data.users[who]
  user.mute = true
  user.banned = true
  m.reply(`Sukses Mute! Bot ${wm} akan menghapus pesan ${conn.getName(who)}`)
}

handler.help = ['mute']
handler.tags = ['group']
handler.command = /^(mute)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
