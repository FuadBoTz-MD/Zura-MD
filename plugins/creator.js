let { MessageType } = (await import('@adiwajshing/baileys')).default
let fetch = (await import('node-fetch')).default
let handler = async(m, { conn, command, args, usedPrefix, DevMode }) => {

  let name = m.sender

  let noah = `6283837709331`
  let ppown = await conn.profilePictureUrl(noah + '@s.whatsapp.net', 'image').catch(_ => hwaifu.getRandom()) 
  let nowner = `${noah.split`@`[0]}@s.whatsapp.net`
  let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6283837709331@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  let sok3 = `6283837709331@s.whatsapp.net`
  try {

  let sentMsg = await conn.sendContactArray(m.chat, [

    [`${sok3.split('@')[0]}`, `http://ī.am/𝔉𝔲𝔞𝔡𝔛𝔶×፝֟͜×࿐`, `🎗 Team Developer`, `🚫 Don't call Owner`, `alvinrinegar@gmail.com`, `🇮🇩 Indonesia`, `➣ https://instagram.com/fuadxy99`, `Developerku  ͡❛ ᴥ ͡❛`],
  ], fkonn)
  
  } catch {

 conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, sentMsg, {mentions: [m.sender]})

  }
}
handler.command = /^(owner)$/i

export default handler