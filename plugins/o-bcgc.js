import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `ぞ 𝚂𝚎𝚍𝚊𝚗𝚐 𝙼𝚎𝚗𝚐𝚒𝚛𝚒𝚖 𝙿𝚎𝚜𝚊𝚗 𝙱𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝 𝙺𝚎 ${groups.length} 𝙶𝚛𝚘𝚞𝚙𝚜`, m)
  for (let id of groups) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : `━━━━━▢ *BROADCAST* ▢━━━━━\n\n` + teks + '\n' + readMore + '\n' + botdate + `\nBroadcast from :\n wa.me/${m.sender.split('@')[0]}`), true).catch(_ => _)
  m.reply('Selesai Broadcast All Group :)')
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i

handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)