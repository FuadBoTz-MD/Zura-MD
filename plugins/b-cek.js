/* FuadBoTz
  *
  * ® FuadXy
  *
  */
let handler = async(m, { conn, groupMetadata, usedPrefix, command }) => {
await conn.sendMessage(m.chat, {
          react: {
            text: "💰",
            key: m.key,
          }})
  let named = conn.getName(m.sender)
  const fpayment = {
		key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: 'FuadXy',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: (m !== null && m !== undefined) ? m.sender : '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: (m !== null && m !== undefined) ? m.text : 'IG: fuadxy99'
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "USD"
			}
		}
	}
}
  let kled = 'https://telegra.ph/file/0451b07945f7f9633b59b.jpg'
  let user = global.db.data.users[m.sender]
  const caption = `
❖─···─〈 *B A N K - C E K*
│ ⎆  *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
│ 💳 *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : '✖️'}
│ 🏛️ *Bank:* ${user.bank} 💲 / ${user.fullatm} 💲
│ 💹 *Money:* ${user.money} 💲
│ 🤖 *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : '✖️'}
│ 🌟 *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
│ 📑 *Registered:* ${user.registered ? 'Yes':'No'}
┗───···─────𖡹
`.trim()
  await conn.sendPresenceUpdate('composing', m.chat)
  await conn.reply(m.chat, caption, fpayment, { contextInfo: { isForwarded: true, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: kled, title: `Bank Cek`, thumbnail: { url: kled }, thumbnailUrl: kled, renderLargerThumbnail: true }}})
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i
handler.register = false
export default handler