import axios from 'axios'
import cheerio from 'cheerio'
import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} mabar`
    let res = await carigroup(text, 'name')
    if (!res.length) throw 'Group tidak ditemukan!'
    let teks = res.map(res => res.subject + '\n' + res.link).join('\n────────────\n')
    let image = 'https://telegra.ph/file/f5ec51bac808f543ef1d7.png'
   // conn.sendButtonLoc(m.chat, await(await fetch(image)).buffer(),teks,wm,'Jangan Di Pencet', 'huuu', m)
   let named = conn.getName(m.sender)
   let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${named}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
   let kled = 'https://telegra.ph/file/29246d6388bdf6966189a.png'
     await conn.reply(m.chat, teks, fkon, { contextInfo: { isForwarded: false, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: kled, title: `Mungkin Ini`, thumbnail: { url: kled }, thumbnailUrl: kled, renderLargerThumbnail: true }}})
}
handler.help = ['carigrup <pencarian>']
handler.tags = ['tools']

handler.command = /^carig(ro?up|c)/i
handler.register = true
export default handler

async function carigroup(search, searchby = 'name') {
    let { data } = await axios.get(global.API('http://ngarang.com', '/link-grup-wa/daftar-link-grup-wa.php', {
        search: encodeURIComponent(search),
        searchby,
    }))
    let $ = cheerio.load(data)
    let results = []
    $('#content > div.entry.clearfix > div.wa-chat').each(function (index, element) {
        let subject = $(this).find('div > div.wa-chat-title-container > a > div > div').text().trim()
        let link = $(this).find('div > div.wa-chat-message > a').attr('href').trim()
        results.push({
            subject,
            link
        })
    })
    return results
}