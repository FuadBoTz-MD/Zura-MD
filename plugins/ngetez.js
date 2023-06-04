import { generateWAMessageFromContent } from "@adiwajshing/baileys"
import { performance } from 'perf_hooks'
import fs from 'fs'
let handler  = async (m, { conn, usedPrefix: _p }) => {

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `\n\t\t*「 \t ${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S \t」*\n`
}
					const runtime = process.uptime()
		            const teks = `${kyun(runtime)}`
		            const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `${author}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:${wm}\nitem1.TEL;waid=6281991410940:6281991410940\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}  
					const itsme = `0@s.whatsapp.net`
					const split = `uwu >/<`
					const rtimebro = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
				    text: split
									}
								}
							}
					}
						    
						  let prep = await generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: -10062007, status: 500,
surface: 999,
message: teks,
description: '^^',
orderTitle: 'Hehe',
token: '9',
curreyCode: 'IDR',
totalCurrencyCode: '>〰<',
totalAmount1000: '1000000',
sellerJid: '17608914335@s.whatsapp.net',
thumbnail: fs.readFileSync('./thumbnail.jpg')
}}, {quoted: fkon, contextInfo:{}})
conn.relayWAMessage(prep)
				/*	conn.sendMessage(m.chat, `${teks}`, MessageType.text, rtimebro)*/
}

handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^rt2$/i
handler.fail = null

export default handler