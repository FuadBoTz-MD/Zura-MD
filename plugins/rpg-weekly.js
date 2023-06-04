const rewards = {
  exp: 15000,
  money: 35999,
  potion: 9,
}
const cooldown = 604800000
let handler = async (m) => {
  let user = global.db.data.users[m.sender]
  let named = conn.getName(m.sender)
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  let fuadxd = 'https://telegra.ph/file/f5856c749c6569d2717ac.jpg'
  if (new Date - user.lastweekly < cooldown) throw `You have already claimed this daily claim!, wait for *${((user.lastweekly + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  await conn.sendPresenceUpdate('composing', m.chat)
  await conn.reply(m.chat, text, fkon, { contextInfo: { isForwarded: true, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: fuadxd, title: `Selamat ${conn.getName(m.sender)}`, thumbnail: { url: fuadxd }, thumbnailUrl: fuadxd, renderLargerThumbnail: true }}})
  user.lastweekly = new Date * 1
}
handler.help = ['weekly']
handler.tags = ['rpg']
handler.command = /^(weekly)$/i

handler.cooldown = cooldown

export default handler