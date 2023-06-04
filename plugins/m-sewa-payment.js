const { generateWAMessageFromContent } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text }) => {
	if (!text) throw 'masukan teks';
	let obj = {
		requestPaymentMessage: {
			amount1000: 2000 + '00.000',
			currencyCodeIso4217: "USD",
			expiryTimestamp: m.messageTimestamp.low,
			noteMessage: {
				extendedTextMessage: {
					text: text,
				},
			},
			requestFrom: m.sender,
			amount: {
				value: 2000 + '00.000',
				currencyCode: "USD",
			},
		}
	}
	let gen = await generateWAMessageFromContent(m.chat, obj, { quoted: m, ephemeralExpiration: 86400 })
	return conn.relayMessage(m.chat, gen.message, { messageId: gen.key.id })
}
handler.help = ["rpay"]
handler.tags = ["main"]
handler.command = /^r(equest)?pay(ment)?$/i

export default handler