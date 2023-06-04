let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
if (!args[0]) return m.reply(`*KETIK KODE NEGARA UNTUK MENCARI NOMOR DALAM GRUP INI*\nContoh: ${usedPrefix + command} 92`) 
if (isNaN(args[0])) return m.reply(`KETIK KODE NEGARA UNTUK MENCARI NOMOR DALAM GROUP INI\nContoh: ${usedPrefix + command} 52`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`*Tidak Ada Nomor Dengan Awalan +${lol}* Di Group Ini!`)
let numeros = ps.map(v=> '⭔ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "listnum":
case "listnumber": 
conn.reply(m.chat, `*List Nomor Dengan Kode Negara +${lol} Yang Stay Di Group Ini:*\n\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "kicknum":  
case "kicknumber":
if (!bot.restrict) return m.reply('*Developer Tidak Menyalakan Restrict:v*') 
if (!isBotAdmin) return m.reply('*Bot Bukan Admin, Ga Bisa Ngekick Cok*')          
conn.reply(m.chat, `*Mulai menghapus nomor dengan kode negara +${lol}*, Bot akan mengeluarkan nomor tersebut setiap *10 DETIK!.*`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `@${user.split("@")[0]} telah dikeluarkan atau telah meninggalkan grup`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply('*ERROR!*')}
break            
}}
handler.help = ['listnumber', 'kicknumber']
handler.tags = ['group']
handler.command = /^(listnum|kicknum|listnumber|kicknumber)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null

export default handler