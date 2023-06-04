import axios from "axios"
import cheerio from "cheerio"

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw '\nSertakan querinya kak !\n\nContoh: .jagokata Sedih'
    m.reply(wait)
    let res = await jagoKata(text)
    throw res[0].isi + '\n\n' + res[0].by
}
handler.help = ['jagokata']
handler.tags = ['fun']
handler.command = ['jagokata']

export default handler
/* New Line */
   async function jagoKata(query) {
const base = `https://jagokata.com/kata-bijak/kata-${query}.html`
const des = await axios.get(base)
const sup = cheerio.load(des.data)
var page = sup('h4 > strong').eq(2).text() / 10
page = parseInt(page)
const randomPage = Math.floor(Math.random() * page)
const res = await axios.get(`${base}?page=${randomPage}`)
const $ = cheerio.load(res.data)
const hasil = []
const list = $('ul > li')
const random = Math.floor(Math.random() * 10)
const isi = $(list).find('q.fbquote').eq(random).text() 

var by = $(list).find('div > div > a').eq(random).text()
by = by ? by : author
hasil.push({ isi,  by })
return hasil
}