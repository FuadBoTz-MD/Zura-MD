import fs from 'fs'

let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => {
  if (!(isAdmin || isOwner)) {
	  global.dfail('admin', m, conn)
          throw false
  }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const { MessageType, Mimetype } = (await import("@adiwajshing/baileys")).default;
let fvid = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "17608914335-1613049930@g.us" } : {}) 
},
 message: { 
"videoMessage": { 
"title":"Haii Kak",
"h": `Hmm`,
'seconds': '1899992', 
'caption': `${name}`,
'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}}
  let isClose = {
	  'open': 'not_announcement',
	  'buka': 'not_announcement',
      'on': 'not_announcement',
	  '1': 'not_announcement',
	  'close': 'announcement',
	  'tutup': 'announcement',
      'off': 'announcement',
      '0': 'announcement',
  }[(args[0] || '')]
  if (isClose === undefined) {
	  let caption = `
Contoh: ${usedPrefix}${command} <open/close>
*Atau Pilih Option Timer Dibawah Ini!*`
      	const sections = [
   {
	title: `⟣⟝⟚⟝⟖❲ Group Dibuka Selama ❳⟕⟝⟚⟞⟢`,
	rows: [
	{title: "Open 1 Jam", rowId: `${usedPrefix}gctime open 1`},
	{title: "Open 2 Jam", rowId: `${usedPrefix}gctime open 2`},
	{title: "Open 3 Jam", rowId: `${usedPrefix}gctime open 3`},
	{title: "Open 4 Jam", rowId: `${usedPrefix}gctime open 4`},
	{title: "Open 5 Jam", rowId: `${usedPrefix}gctime open 5`},
	{title: "Open 6 Jam", rowId: `${usedPrefix}gctime open 6`},
	{title: "Open 7 Jam", rowId: `${usedPrefix}gctime open 7`},
	{title: "Open 8 Jam", rowId: `${usedPrefix}gctime open 8`},
	{title: "Open 9 Jam", rowId: `${usedPrefix}gctime open 9`},
	{title: "Open 10 Jam", rowId: `${usedPrefix}gctime open 10`},
	{title: "Open 11 Jam", rowId: `${usedPrefix}gctime open 11`},
	{title: "Open 12 Jam", rowId: `${usedPrefix}gctime open 12`},
	{title: "Open 13 Jam", rowId: `${usedPrefix}gctime open 13`},
	{title: "Open 14 Jam", rowId: `${usedPrefix}gctime open 14`},
	{title: "Open 15 Jam", rowId: `${usedPrefix}gctime open 15`},
	{title: "Open 16 Jam", rowId: `${usedPrefix}gctime open 16`},
	{title: "Open 17 Jam", rowId: `${usedPrefix}gctime open 17`},
	{title: "Open 18 Jam", rowId: `${usedPrefix}gctime open 18`},
	{title: "Open 19 Jam", rowId: `${usedPrefix}gctime open 19`},
	{title: "Open 20 Jam", rowId: `${usedPrefix}gctime open 20`},
	{title: "Open 21 Jam", rowId: `${usedPrefix}gctime open 21`},
	{title: "Open 22 Jam", rowId: `${usedPrefix}gctime open 22`},
	{title: "Open 23 Jam", rowId: `${usedPrefix}gctime open 23`},
	{title: "Open 24 Jam", rowId: `${usedPrefix}gctime open 24`},
	],
    }, {
	title: `⟣⟝⟚⟝⟖❲ Menutup Group Dalam ❳⟕⟝⟚⟞⟢`,
	rows: [
	{title: "Close 1 Jam", rowId: `${usedPrefix}gctime close 1`},
	{title: "Close 2 Jam", rowId: `${usedPrefix}gctime close 2`},
	{title: "Close 3 Jam", rowId: `${usedPrefix}gctime close 3`},
	{title: "Close 4 Jam", rowId: `${usedPrefix}gctime close 4`},
	{title: "Close 5 Jam", rowId: `${usedPrefix}gctime close 5`},
	{title: "Close 6 Jam", rowId: `${usedPrefix}gctime close 6`},
	{title: "Close 7 Jam", rowId: `${usedPrefix}gctime close 7`},
	{title: "Close 8 Jam", rowId: `${usedPrefix}gctime close 8`},
	{title: "Close 9 Jam", rowId: `${usedPrefix}gctime close 9`},
	{title: "Close 10 Jam", rowId: `${usedPrefix}gctime close 10`},
	{title: "Close 11 Jam", rowId: `${usedPrefix}gctime close 11`},
	{title: "Close 12 Jam", rowId: `${usedPrefix}gctime close 12`},
	{title: "Close 13 Jam", rowId: `${usedPrefix}gctime close 13`},
	{title: "Close 14 Jam", rowId: `${usedPrefix}gctime close 14`},
	{title: "Close 15 Jam", rowId: `${usedPrefix}gctime close 15`},
	{title: "Close 16 Jam", rowId: `${usedPrefix}gctime close 16`},
	{title: "Close 17 Jam", rowId: `${usedPrefix}gctime close 17`},
	{title: "Close 18 Jam", rowId: `${usedPrefix}gctime close 18`},
	{title: "Close 19 Jam", rowId: `${usedPrefix}gctime close 19`},
	{title: "Close 20 Jam", rowId: `${usedPrefix}gctime close 20`},
	{title: "Close 21 Jam", rowId: `${usedPrefix}gctime close 21`},
	{title: "Close 22 Jam", rowId: `${usedPrefix}gctime close 22`},
	{title: "Close 23 Jam", rowId: `${usedPrefix}gctime close 23`},
	{title: "Close 24 Jam", rowId: `${usedPrefix}gctime close 24`},
	],
	},
]

const listMessage = {
  text: ` `,
  footer: 'Thanks Kyami & Dave For Developing This Bot',
  title: caption,
  buttonText: "Option Timer Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fvid, mentions: await conn.parseMention(caption), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
	  throw false
  }
  let timeoutset = 86400000 * args[1] / 24
  await conn.groupSettingUpdate(m.chat, isClose).then(async _=> {
	  m.reply(`Sukses me${isClose == 'announcement' ? 'nutup' : 'mbuka'} grup${args[1] ? `, selama *${clockString(timeoutset)}*` : ''}`)
  })
  if (args[1]) {
	 setTimeout(async () => {
            await conn.groupSettingUpdate(m.chat, `${isClose == 'announcement' ? 'not_announcement' : 'announcement'}`).then(async _=>{
		    conn.reply(m.chat, `Group telah di ${isClose == 'not_announcement' ? 'tutup, sekarang hanya admin yang dapat mengirim pesan' : 'buka, sekarang semua member bisa mengirim pesan'}!`)
	    })
        }, timeoutset)
  }
  }
handler.help = ['grouptime <open/close> <number>']
handler.tags = ['group']
handler.command = /^(grouptime|gctime|group|grup|gc)$/i

handler.botAdmin = true
handler.group = true 

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}