import fetch from "node-fetch"
import cheerio from "cheerio"

let handler = async (m, { conn, text }) => {
await m.reply(wait)
		if (text.includes("https://westmanga.info/manga/")) return m.reply("input link dari westmanga?")
	let res = await DownWest(text)
	let cap = "*Link:*\n" + res + "\n\nKetik *.westdown* " + res + " untuk menyimpan file nya"
	await m.reply(cap)
}
handler.help = ["westlink <link>"]
handler.tags = ["nsfw"]
handler.command = /^(westlink)$/i
export default handler

async function DownWest(url) {
// Array JSON untuk menyimpan hasil ekstraksi
const result = []

// Fetch halaman web
 return await fetch(url)
  .then(response => response.text())
  .then(data => {
    // Load HTML dengan Cheerio
    const $ = cheerio.load(data)

    // Cari semua elemen span dengan class "dlx r"
    $("span.dlx.r").each((index, element) => {
      // Ambil link dari a href pada elemen span saat ini
      const link = $(element).find("a").attr("href")
	let pairs = url.substring(url.indexOf("/") + 1).split("/")
      // Tambahkan data ke dalam array JSON
      result.push({
        title: pairs[2],
        value: link
      })
    })

    // Tampilkan hasil
    return result[0].value
  })
  }