let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async(m, { conn, command, args, usedPrefix, DevMode }) => {

  let name = m.sender

  let noah = `6285954708804`
  let ppown = await conn.profilePictureUrl(noah + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
  let nowner = `${noah.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `🔥𝗧𝗵𝗶𝘀 𝗶𝘀 𝗠𝘆 𝗢𝘄𝗻𝗲𝗿 𝗙𝘂𝗮𝗱\n\n     📮 *Nᴏᴛᴇ :*\n• *Oᴡɴᴇʀ Yᴀɴɢ Bᴀɪᴋ Hᴀᴛɪ*\n• Oᴡɴᴇʀ Tɪᴅᴀᴋ Mᴇɴᴇʀɪᴍᴀ Sᴀᴠᴇ Cᴏɴᴛᴀᴄᴛ!\n• Oᴡɴᴇʀ Bᴇʀʜᴀᴋ Bʟᴏᴄᴋɪʀ Tᴀᴍᴘᴀ Aʟᴀsᴀɴ\n• Bᴇʀʙɪᴄᴀʀᴀʟᴀʜ Yᴀɴɢ =Sᴏᴘᴀɴ & Tɪᴅᴀᴋ Sᴘᴀᴍ\n• Oᴡɴᴇʀ Hᴀɴʏᴀ Mᴇʀᴇsᴘᴏɴ Yᴀɴɢ Bᴇʀᴋᴀɪᴛᴀɴ Dᴇɴɢᴀɴ Bᴏᴛ\n• Nᴏ Tʟᴘ\n• Cʜᴀᴛ Gᴀᴊᴇʟᴀs = Bʟᴏᴄᴋ`
  let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6287753191005@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  let sok3 = `6283837709331@s.whatsapp.net`
  try {

  const sentMsg = await conn.sendContactArray(m.chat, [

    [`${sok3.split('@')[0]}`, `ᯤ ғᴜᴀᴅ ᴏғᴄ`, `🎗 Tᴇᴀᴍ Dʀᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ`, `🚫 Dᴏ'ɴᴛ Cᴀʟʟ Fᴜᴀᴅ`, `hodonk50@gmail.com`, `🇮🇩 Iɴᴅᴏɴᴇsɪᴀ`, `🚀 https://github.com/FuadXy`, `Just Try!!`],
  ], fkonn)
  await conn.reply(m.chat, teksnomor, fkon, { contextInfo: { isForwarded: false, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: ppown, title: `® 𝑭𝒖𝒂𝒅𝑿𝒚`, thumbnail: { url: ppown }, thumbnailUrl: ppown, renderLargerThumbnail: true }}})
}

handler.command = /^(owner2)$/i



export default handler