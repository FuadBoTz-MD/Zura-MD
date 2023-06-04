import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
await conn.sendMessage(m.chat, {
          react: {
            text: '🥶',
            key: m.key,
          }})
let _pp = './src/avatar_contact.png'
let named = conn.getName(m.sender)
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let namemu = await conn.getName(who)

if(!args[0]) throw "Masukkan Nama Lokasi"
        const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
        let res = await response
        let name = res.data.name
        let Country = res.data.sys.country
        let Weather= res.data.weather[0].description
        let Temperature = res.data.main.temp + '°C'
        let Minimum_Temperature= res.data.main.temp_min + '°C'
        let Maximum_Temperature= res.data.main.temp_max + '°C'
        let Humidity= res.data.main.humidity + '%'
        let Wind= res.data.wind.speed + 'km/h'


        let caption = `
        「 📍 」 Place: ${name}\n「 🗺️ 」 Country: ${Country}\n「 🌤️ 」 Weather: ${Weather}\n「 🌡️ 」Temperature: ${Temperature}\n「 💠 」 Minimum Temperature: ${Minimum_Temperature}\n「 📛 」 Maximum Temperature: ${Maximum_Temperature}\n「 💦 」 Humidity: ${Humidity}\n「 🌬️ 」 Wind: ${Wind}\n\nHai ${namemu} kamu sehat kan hari ini?
         `.trim()
        
//conn.sendVinButtonLoc(m.chat, await conn.resize(pp, 300, 180), caption, 'Thank you Dave ×͜× & ᴋʏᴀᴍɪ×͜×࿐ for developing this bot so well', 'instagram', 'https://instagram.com/fuadxy99', 'Donasi', '.pay', m)//
await conn.reply(m.chat, caption, fgif, { contextInfo: { isForwarded: true, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: pp, title: `Info Cuaca `, thumbnail: { url: pp }, thumbnailUrl: pp, renderLargerThumbnail: true }}})
}

handler.help = ['infocuaca <city>']
handler.tags = ['info']
handler.command = /^(infocuaca|weather)$/i
handler.limit = true

export default handler