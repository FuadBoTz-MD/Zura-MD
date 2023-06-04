let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `V7`.trim()
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
conn.reply(m.chat, info, fpayment)
}
handler.command = /^(cekversi)$/i
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler