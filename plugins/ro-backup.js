import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let fpayment = {
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
	let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
conn.reply(m.chat, '*Succes*', m)
conn.reply('6285954708804' + '@s.whatsapp.net', `*🗓️ Database:* ${date}`, null)
          conn.sendFile('6285954708804' + '@s.whatsapp.net', fs.readFileSync('./lib/database.js'), 'database.js', '', 0, 0, { mimetype: 'application/json', quoted: fpayment})
 }
 
 handler.help = ['backup']
handler.tags = ['developer']
handler.command = /^(backup)$/i
handler.rowner = true

export default handler