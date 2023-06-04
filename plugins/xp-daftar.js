import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "Select Your Age Here !",
	rows: [
	    {title: "❉ Random Years", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "O L D",
	rows: [
	    {title: "30• Years", rowId: '.daftar ' + namae + '.30 '},
	    {title: "29• Years", rowId: '.daftar ' + namae + '.29 '},
	    {title: "28• Years", rowId: '.daftar ' + namae + '.28 '},
	{title: "27• Years", rowId: '.daftar ' + namae + '.27 '},
	{title: "26• Years", rowId: '.daftar ' + namae + '.26 '},
	{title: "25• Years", rowId: '.daftar ' + namae + '.25 '},
	{title: "24• Years", rowId: '.daftar ' + namae + '.24 '},
	{title: "23• Years", rowId: '.daftar ' + namae + '.23 '},
	{title: "22• Years", rowId: '.daftar ' + namae + '.22 '},
	{title: "21• Years", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "Y O U N G",
	rows: [
	    {title: "20• Years", rowId: '.daftar ' + namae + '.20 '},
	    {title: "19• Years", rowId: '.daftar ' + namae + '.19 '},
	    {title: "18• Years", rowId: '.daftar ' + namae + '.18 '},
	{title: "17• Years", rowId: '.daftar ' + namae + '.17 '},
	{title: "16• Years", rowId: '.daftar ' + namae + '.16 '},
	{title: "15• Years", rowId: '.daftar ' + namae + '.15 '},
	{title: "14• Years", rowId: '.daftar ' + namae + '.14 '},
	{title: "13• Years", rowId: '.daftar ' + namae + '.13 '},
	{title: "12• Years", rowId: '.daftar ' + namae + '.12 '},
	{title: "11• Years", rowId: '.daftar ' + namae + '.11 '},
	{title: "10• Years", rowId: '.daftar ' + namae + '.10 '},
	{title: "9• Years", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `│›Please select your age at the bottom button...`,
  footer: `┗ *ʏᴏᴜʀ ɴᴀᴍᴇ:* ${conn.getName(m.sender)}\n<❔>  BOT PRIVATE\nBy FuadXy࿐`,
  title: "▢━━━━「 Registration 」━━━━▢",
  buttonText: "Register",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Mmmm Kamu Sudah ter daftar di database, Apa kamu ingin mendaftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let named = conn.getName(m.sender)
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let kled = 'https://telegra.ph/file/b497b05a8c5df726fa7b9.jpg'
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 999) throw 'WOI TUA (。-`ω´-)'
  if (age < 5) throw 'Halah dasar bocil'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let freegift = '*Selamat!🥳*\nKamu mendapatkan _kode gift_ gratis karna telah mendaftar dalam database FuadBoTz.\nKode dapat di claim setiap hari...\nCara claim kode sbagai berikut: *.freegift <code>*\n\nCode: fxy01a4bk'
  let cap = `
  ━━━━ 「 *Successful Registration* 」━━━
  .
╭━━「 *ᴜsᴇʀs* 」
│▸ *sᴛᴀᴛᴜs:* ☑️ sᴜᴄᴄᴇssғᴜʟ
│▸ *ɴᴀᴍᴇ:* ${name}
│▸ *ᴀɢᴇ:* ${age} ʏᴇᴀʀs
│▸ *sɴ:* ${sn}
╰═┅═━––––––๑

http://bīt.ly/ᯤ
𝑭𝒖𝒂𝒅 𝑩𝒐𝑻𝒛࿐
`
  conn.reply(`${who.split('@')[0]}@s.whatsapp.net`, freegift, m)
  await conn.reply(m.chat, cap, fkon, { contextInfo: { isForwarded: false, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: kled, title: `Sucses Register`, thumbnail: { url: kled }, thumbnailUrl: kled, renderLargerThumbnail: true }}})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler