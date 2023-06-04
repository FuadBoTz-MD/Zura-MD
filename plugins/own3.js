let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async(m, { conn, command, args, usedPrefix, DevMode }) => {

  let name = m.sender

  let noah = `6287753191005`
  let ppown = await conn.profilePictureUrl(noah + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
  let nowner = `${noah.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `🔥𝗧𝗵𝗶𝘀 𝗶𝘀 𝗠𝘆 𝗢𝘄𝗻𝗲𝗿 𝗙𝘂𝗮𝗱\n\n     📮 *Nᴏᴛᴇ :*\n• *Oᴡɴᴇʀ Yᴀɴɢ Bᴀɪᴋ Hᴀᴛɪ*\n• Oᴡɴᴇʀ Tɪᴅᴀᴋ Mᴇɴᴇʀɪᴍᴀ Sᴀᴠᴇ Cᴏɴᴛᴀᴄᴛ!\n• Oᴡɴᴇʀ Bᴇʀʜᴀᴋ Bʟᴏᴄᴋɪʀ Tᴀᴍᴘᴀ Aʟᴀsᴀɴ\n• Bᴇʀʙɪᴄᴀʀᴀʟᴀʜ Yᴀɴɢ =Sᴏᴘᴀɴ & Tɪᴅᴀᴋ Sᴘᴀᴍ\n• Oᴡɴᴇʀ Hᴀɴʏᴀ Mᴇʀᴇsᴘᴏɴ Yᴀɴɢ Bᴇʀᴋᴀɪᴛᴀɴ Dᴇɴɢᴀɴ Bᴏᴛ\n• Nᴏ Tʟᴘ\n• Cʜᴀᴛ Gᴀᴊᴇʟᴀs = Bʟᴏᴄᴋ`
  let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6285954708804@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  let sok3 = `6285954708804@s.whatsapp.net`
  try {

  const sentMsg = await conn.sendContactArray(m.chat, [

    [`${sok3.split('@')[0]}`, `Fᴜᴀᴅ×͜×⁩`, `🎗 Tᴇᴀᴍ Dʀᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ`, `🚫 Dᴏ'ɴᴛ Cᴀʟʟ Fᴜᴀᴅ`, `hodonk50@gmail.com`, `🇮🇩 Iɴᴅᴏɴᴇsɪᴀ`, `🚀 https://github.com/FuadXy`, `Just Try!!`],
  ], fkonn) 

  await conn.sendHydrated(m.chat, teksnomor, wm, ppown, "https://wa.me/" + noah, "Cʜᴀᴛ ᯤ ғᴜᴀᴅ ", null,null, [["Sᴀʟᴋᴇɴ", '.salken'], ["Sᴇᴡᴀ Bᴏᴛ", '.sewabot2'],["Bᴀᴄᴋ Tᴏ Mᴇɴᴜ",'.menu']], sentMsg, {mentions: [m.sender]})

  } catch {

  const sentMsg = await conn.sendContact(m.chat, `${owner[0]}`, `${await conn.getName(owner[0]+'@s.whatsapp.net')}`, m) 

  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, sentMsg, {mentions: [m.sender]})

  }
}

handler.command = /^(owner3)$/i



export default handler