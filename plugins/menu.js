import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
await conn.sendMessage(m.chat, {
          react: {
            text: '🦋',
            key: m.key,
          }})
let pp = 'https://telegra.ph/file/879d6a009a8068d9ddee8.jpg'

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
    let name = conn.getName(who)
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

let ucpn = `${ucapan()}`
let info = `Hallo ${name}👋🏻* \n*${ucpn}*\n\n*༺▢══〔 llı USER ıll 〕══༻*
*𖥂* Name : *${await conn.getName(m.sender)}*
*𖥂* Tags : @${who.replace(/@.+/, '')}

*⌘══〔 llı CODE ıll 〕══⌘*
*𖥂* 🅟 = *Premium*
*𖥂* 🅛 = *Limit*

 💫 *ɴᴏᴛᴇ (ʜᴀʀᴀᴘ ᴅɪʙᴀᴄᴀ) :*
ʙᴇʀʜᴜʙᴜɴɢ ʙᴜᴛᴛᴏɴ ᴛɪᴅᴀᴋ ʟᴀɢɪ
ᴛᴇʀʟɪʜᴀᴛ ᴅɪ ᴡʜᴀᴛsᴀᴘᴘ ᴏʀ, ᴋᴀᴍɪ
ᴅᴇᴠᴇʟᴏᴘᴇʀ sᴇᴛᴜᴊᴜ ᴜᴛᴋ ᴍᴇᴍʙᴜᴀᴛ
ʙᴏᴛ ɪɴɪ ᴛᴀɴᴘᴀ ʙᴜᴛᴛᴏɴ ᴊᴀᴅɪ ᴋᴀᴍɪ
ʜᴀʀᴀᴘ ᴜsᴇʀ sᴋᴀʟɪᴀɴ ᴊɢɴ ᴍᴀɢᴇʀ ᴜᴛᴋ
ᴍᴇɴɢᴇᴛɪᴋ ᴄᴏᴍᴍᴀɴᴅ & ᴍᴇᴍʙᴀᴄᴀ ᴋᴇᴛᴇʀᴀɴɢᴀɴ² ʙᴏᴛ ɪɴɪ,
ᴜɴᴛᴜᴋ ᴡʜᴀᴛsᴀᴘᴘ ᴍᴏᴅ/ᴏʀɪ ᴠᴇʀsɪ ʟᴀᴍᴀ ʙɪsᴀ ʟᴀɴɢsᴜɴɢ ᴋᴇᴛɪᴋ .menu2.


🦋 *ᴘᴇʀᴀᴛᴜʀᴀɴ :*
1. Jɢɴ Sᴘᴀᴍ!!
2. ʙᴇʀɪ ᴊᴇᴅᴀ 5 ᴅᴇᴛɪᴋ ᴊɪᴋᴀ ᴛᴅᴋ ᴍᴇʀᴇsᴘᴏɴ
3. ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ᴅᴇɴɢᴀɴ *ʙɪᴊᴀᴋ*
4. ᴊᴀɴɢᴀɴ ᴛᴇʟғᴏɴ/ᴄᴀʟʟ ʙᴏᴛ!

  *LIST Command :*
1. Menu Utama => *.menu2*
2. Sewa BOT => *.sewa*
3. Perkenalan BOT => *.salken*
4. All Fitur => *.? All*
5. List Fitur RPG => *.? rpg* 
6. List Fitur Game => *.? game*
7. List Fitur Group => *.? group*
8. List Fitur Anime => *.? anime*
9. List Fitur Premium => *.? premium*
10. List Fitur Downloader => *.? downloader*
11. List Fitur  Anonymous => *.? anonymous*
🦋 Dan Masi Banyak Lagi Seperti stiker, internet, tools, maker, virus, exp, Dan Lain²

 ┣═┅━━┅━┅━┅═–––๑
 ┃〔 llı 𝑻𝒉𝒂𝒏𝒌𝒔 𝑻𝒐 ıll 〕
 ┣═┅═━––––––––––๑
 ┃▷ *𝐀𝐥𝐥𝐚𝐡 𝐒𝐖𝐓*
 ┃▷ *𝐎𝐫𝐚𝐧𝐠 𝐓𝐮𝐚*
 ┃▷ *𝐅𝐮𝐚𝐝𝐗𝐲 (𝐌𝐞)*
 ┃▷ *𝐊𝐲𝐚𝐦𝐢*
 ┃▷ *𝐃𝐚𝐯𝐞 𝐊𝐠𝐰*
 ┃▷ *𝐍𝐚𝐫𝐮𝐭𝐨𝐦𝐨*
 ┃▷ *𝐁𝐨𝐜𝐡𝐢𝐥𝐆𝐚𝐦𝐢𝐧𝐠*
 ┃▷ *𝐀𝐠𝐮𝐬 𝐅𝐚𝐦𝐢𝐥𝐢𝐚*
 ┃▷ *𝐁𝐨𝐜𝐡𝐢𝐥𝐭𝐞𝐚𝐦*
 ╰═┅═━––––––––––๑
❀𝑫𝒂𝒕𝒆 ${new Date().toLocaleDateString()}*`
await conn.reply(m.chat, info, fkon, { mentions: [who], contextInfo: { forwardingScore: 9999, isForwarded: true, externalAdReply :{ mediaType: 1, mediaUrl: pp, title: '® FuadXy (Public)', thumbnail: { url: pp }, thumbnailUrl: pp, sourceUrl: 'https://chat.whatsapp.com/EAR7T7H59vOJz8KcwMP179', renderLargerThumbnail: true }}})
  }
handler.help = ['menu']
handler.tags = ['info', 'main']
handler.command =  /^(menu|help)$/i

handler.register = false
handler.premium = false
handler.limit = false

export default handler

function ucapan() {
	const time = moment.tz('Asia/Jakarta').format('HH')
	let res = "Selamat Dinihari🌃"
	if (time >= 4) {
		res = "Selamat Pagi🌄"
	}
	if (time >= 10) {
    res = "Selamat Siang☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore🌇"
  }
  if (time >= 18) {
    res = "Selamat Malam🌙"
  }
  return res
}