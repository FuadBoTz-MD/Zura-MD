let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) throw `Tidak ada teks untuk survei\n\nContoh: *${usedPrefix + command}* Pesan |Hai|Kak`
  if (!text.includes('|')) throw  `Pisahkan polling dengan tanda *|*\n\nContoh: *${usedPrefix + command}* survei saya|n|Apa|kabar|baik`

  let name = conn.getName(m.sender)
  let a = []
  let b = text.split('|')
  for (let c = 1; c < b.length; c++) {
    a.push(b[c])
  }
  await conn.sendPoll(m.chat, `📋 *Survei diminta oleh:* ${name}\n\n*Pesan:* ${b[0]}`, a, m)
}
handler.help = ['poll <halo|apa|kabar>']
handler.tags = ['group']
handler.command = ['poll', 'polling']
handler.group = true

export default handler