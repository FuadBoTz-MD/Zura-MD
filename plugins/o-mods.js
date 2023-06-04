let handler = async(m, { conn }) => {
  let name = m.sender
  let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6289631008798@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  let data = mods.filter(([id, nama]) => id && nama)
  await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), fkonn)
}

handler.command = /^(mod(s?)?)$/i

export default handler