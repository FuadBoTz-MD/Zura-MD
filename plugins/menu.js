import fs from 'fs'
import os from 'os'
import { sizeFormatter } from 'human-readable'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
await conn.sendMessage(m.chat, {
          react: {
            text: '🦋',
            key: m.key,
          }})
let formatSize = sizeFormatter({
	std: 'JEDEC',
	decimalPlaces: '2',
	keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B`
})
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)

let pp = 'https://telegra.ph/file/b0b58f446bd5935ee6c00.jpg'

let ucpn = `${ucapan()}`
let info = `Hallo ${name}👋🏻* \n*${ucpn}*\n\nSelamat datang di dashboard bot kami!*\n\n- Kami berharap Anda akan menikmati pengalaman berinteraksi dengan bot kami yang ramah dan intuitif.\n\n- Kami telah menyertakan berbagai fitur yang dapat membantu Anda mengelola dan meningkatkan kinerja bot Anda.\n\n- Kami berharap Anda akan menikmati menggunakan dashboard bot kami dan semoga Anda mendapatkan manfaat dari fitur-fitur yang kami tawarkan.


 💫 *ɴᴏᴛᴇ (ʜᴀʀᴀᴘ ᴅɪʙᴀᴄᴀ) :*
ʙᴇʀʜᴜʙᴜɴɢ ʙᴜᴛᴛᴏɴ ᴛɪᴅᴀᴋ ʟᴀɢɪ
ᴛᴇʀʟɪʜᴀᴛ ᴅɪ ᴡʜᴀᴛsᴀᴘᴘ ᴏʀɪ, ᴋᴀᴍɪ
ᴅᴇᴠᴇʟᴏᴘᴇʀ sᴇᴛᴜᴊᴜ ᴜᴛᴋ ᴍᴇᴍʙᴜᴀᴛ
ʙᴏᴛ ɪɴɪ ᴛᴀɴᴘᴀ ʙᴜᴛᴛᴏɴ ᴊᴀᴅɪ ᴋᴀᴍɪ
ʜᴀʀᴀᴘ ᴜsᴇʀ sᴋᴀʟɪᴀɴ ᴊɢɴ ᴍᴀɢᴇʀ ᴜᴛᴋ
ᴍᴇɴɢᴇᴛɪᴋ ᴄᴏᴍᴍᴀɴᴅ & ᴍᴇᴍʙᴀᴄᴀ ᴋᴇᴛᴇʀᴀɴɢᴀɴ² ʙᴏᴛ ɪɴɪ,
◉ SILAHKAN KETIK CMD
 .? All
Untuk Menampilkan Semua Fitur BOT

🦋 *ᴘᴇʀᴀᴛᴜʀᴀɴ :*
1. Jɢɴ Sᴘᴀᴍ!!
2. ʙᴇʀɪ ᴊᴇᴅᴀ 5 ᴅᴇᴛɪᴋ ᴊɪᴋᴀ ᴛᴅᴋ ᴍᴇʀᴇsᴘᴏɴ
3. ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ᴅᴇɴɢᴀɴ *ʙɪᴊᴀᴋ*
4. ᴊᴀɴɢᴀɴ ᴛᴇʟғᴏɴ/ᴄᴀʟʟ ʙᴏᴛ!

*❖─···─〈* *I N F O  S E R V E R*
~ ᴍᴇᴍᴏʀʏ : ${formatSize(os.totalmem() - os.freemem())} / ${formatSize(os.totalmem())}
~ ᴍᴇᴍᴏʀʏ ᴜsᴇᴅ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB
~ sɪᴢᴇ ᴅᴀᴛᴀʙᴀsᴇ: ${megabit()} MB
~ ᴛᴏᴛᴀʟ ғɪᴛᴜʀ: ${totalf}
- ɴᴏᴅᴇᴊs: ${process.version}
◈------------------◈------------------◈


]=❏ *Tʜᴀɴᴋs Tᴏ* ❏=[
   • *𝐀𝐥𝐥𝐚𝐡 𝐒𝐖𝐓*
   • *𝐎𝐫𝐚𝐧𝐠 𝐓𝐮𝐚*
   • *𝐅𝐮𝐚𝐝𝐗𝐲 (𝐌𝐞)*
   • *𝐊𝐲𝐚𝐦𝐢*
   • *𝐃𝐚𝐯𝐞 𝐊𝐠𝐰*
   • *𝐍𝐚𝐫𝐮𝐭𝐨𝐦𝐨*
   • *𝐁𝐨𝐜𝐡𝐢𝐥𝐆𝐚𝐦𝐢𝐧𝐠*
   • *𝐀𝐠𝐮𝐬 𝐅𝐚𝐦𝐢𝐥𝐢𝐚*
   • *𝐁𝐨𝐜𝐡𝐢𝐥𝐭𝐞𝐚𝐦*
 
ᴍᴏᴛɪᴠᴀsɪ 🦋:
${motivasi.getRandom()}

❀𝑫𝒂𝒕𝒆 ${new Date().toLocaleDateString()}`
await conn.sendPresenceUpdate('recording', m.chat)
await conn.reply(m.chat, info, m, { mentions: [who], contextInfo: { forwardingScore: 9999, isForwarded: true, externalAdReply :{ mediaType: 1, mediaUrl: pp, title: ' ', thumbnail: { url: pp }, thumbnailUrl: pp, sourceUrl: 'https://call.whatsapp.com/video/rX0OHKCdyxNvvypMT7FdqZ', renderLargerThumbnail: true }}})
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
function megabit() {
    let stats = fs.statSync("database.json")
    let ukuran_mb = stats.size / (1024*1024)
    return ukuran_mb.toFixed(1)
    }