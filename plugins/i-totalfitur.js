import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
    const ultah = new Date('November 4 2022 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let gam = 'https://telegra.ph/file/95838f2e44bc7bd21b69d.jpg'
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 let kon = `*🔖TOTAL FITUR :* ${totalf} \n\nMasi dalam tahap pengembangan..\n\n\n® By FuadXy`.trim()
 conn.sendPresenceUpdate('composing', m.chat)
 await conn.relayMessage(m.chat, { requestPaymentMessage: {
  noteMessage: { extendedTextMessage: { text: kon,
  currencyCodeIso4217: 'USD',
  requestFrom: '0@s.whatsapp.net',
  expiryTimestamp: 8600,
  amount: 10000,
  background: thumb
}}}}, {})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler