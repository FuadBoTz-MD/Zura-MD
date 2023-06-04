import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
await conn.sendMessage(m.chat, {
          react: {
            text: '🇮🇩',
            key: m.key,
          }})

let named = conn.getName(m.sender)
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let kled = 'https://telegra.ph/file/ae8721ed9eb78064e7df7.jpg'
let ucpn = `${ucapan()}`
let info = `Hallo ${name}👋🏻* \n*${ucpn}* รєlค๓คt ๔คtคภᎶ ๔เ ๔ครђ๒๏คг๔ ๒๏t кค๓เ

*▢═════〔 llı USER ıll 〕═════▢*
*𖥂* Name : *${await conn.getName(m.sender)}*
*𖥂* Tags : @${m.sender.split`@`[0]}
*𖥂* Status : ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
*𖥂* Level: *${usrs.level}*
*𖥂* Role: *${usrs.role}${usrs.premiumTime > 1 ? `*
*𖥂* Limit : *${usrs.limit}*
*𖥂* Premium : *${usrs.premiumTime > 1 ? '✓': '✗'}*

*▢═════〔 llı INFO BOTZ ıll 〕═════▢*
*𖤓* Uptime : *${mpt}*
*𖤓* Creator : *FuadXy*
*𖤓* Platform : *${os.platform()}*
*𖤓* Mode : *${global.opts['self'] ? 'Private' : 'Publik'}*

*▢═════〔 llı CODE ıll 〕═════▢*
*𖥂* 🅟 = *Premium*
*𖥂* 🅛 = *Limit*

 💫 *Note (harap dibaca) :*
Berhubung button tidak lagi
terlihat di Whatsapp Ori, kami
developer setuju utk membuat
bot ini tanpa button jadi kami
harap user skalian jgn mager utk
mengetik command & membaca
keterangan² bot ini:)

 🎲 *Peraturan :*
1. Jgn Spam!!
2. Beri jeda 5 detik jika tdk merespon
3. Gunakan dengan *Bijak*
4. JANGAN TELFON/CALL BOT!

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

❀𝑫𝒂𝒕𝒆 ${new Date().toLocaleDateString()}

#𝕱𝖚𝖆𝖉 𝕭𝖔𝕿𝒛 2022-2023
`
await conn.reply(m.chat, info, fkon, { contextInfo: { isForwarded: false, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: kled, title: `Menu Utama`, thumbnail: { url: kled }, thumbnailUrl: kled, renderLargerThumbnail: true }}}) // Title sengaja gw bikin gitu
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