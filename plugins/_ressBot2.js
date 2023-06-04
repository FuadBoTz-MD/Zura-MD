let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let ftroli = { key: { participant: '6283837709331@s.whatsapp.net' },
			    message: {
				  orderMessage: {
					itemCount: fsizedoc,
					status: 1,
					surface: 1,
					message: botdate,
					orderTitle: `${wm}`,
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
let messaa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/afk.jpg') }, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "120363026067421350@g.us",
"inviteCode": "EAR7T7H59vOJz8KcwMP179",
"inviteExpiration": `99999999999`,
"groupName": "┏━°⌜──⇌• 𝑭𝒖𝒂𝒅𝑿𝒚 •⇋──⌟°━┓",
"caption": `Kenapa Kak?`,
"jpegThumbnail": messaa.imageMessage,
}
}), { userJid: m.chat, quoted: ftroli })
conn.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
handler.customPrefix = /^(hai|p)$/i
handler.command = new RegExp

export default handler