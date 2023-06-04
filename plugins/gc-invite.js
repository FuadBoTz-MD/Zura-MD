let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `Masukkan nomor yang ingin dikirim undangan grup\n\nContoh :\n*${usedPrefix + command}* 6287734910547`
if (text.includes('+')) throw  `Masukkan nomornya saja, tanpa *+*`
if (isNaN(text)) throw '*Masukkan hanya angka!*'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
 await conn.reply(text+'@s.whatsapp.net', `≡ *Invite Group Untukmu*\n\n*Seseorang mengundang Anda untuk bergabung dengan grup ini* \n\n${link}`, m, {mentions: [m.sender]})
m.reply(`✅ Sukses Mengirim Link Undangan`) 
}

handler.help = ['invite <62856xxx>']
handler.tags = ['group']
handler.command = ['invite','invit'] 
handler.group = true
handler.botAdmin = true

export default handler
