import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

let handler  = async (m, { conn }) => {

  let pp = 'https://telegra.ph/file/c8a6d0396874f11b85b55.jpg'
  try {
    pp = await conn.profilePictureUrl(m.sender, 'image')
  } catch (e) {
  }

let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: '𝗖𝗟𝗜𝗖𝗞 𝗛𝗘𝗥𝗘',
  address: 'Join Grub Bot',
  url: 'https://chat.whatsapp.com/EAR7T7H59vOJz8KcwMP179',
  isLive: true,
  accuracyInMeters: 0,
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 2,
  comment: '',
  jpegThumbnail: await( await fetch(darktzy)).buffer()
}}, { quoted: m })

return conn.relayMessage(m.chat, msg.message, {})
}

handler.command = /^gcbot2$/
handler.owner = false
export default handler