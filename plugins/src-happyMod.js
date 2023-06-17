import axios from "axios"
import cheerio from "cheerio"

let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
	let query = "input text\nEx. .happymodsearch minecraft\n<command> <tex>"
	let text
	if (args.length >= 1) {
		text = args.slice(0).join(" ")
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text
	} else throw query
	
	m.reply(wait)
	 var list = await happymodSearch(text)
	 const captiond = list.map((v, index) => { return `*${htki + " " + ++index + " " + htka}*\n*Title:* ${v.title}\n*Rating:* ${v.rating}\n*Link:* ${v.link}\n*Link Icon:* ${v.icon}` }).join('\n\n\n')
        await conn.sendFile(m.chat, fla.getRandom() + "HappyMod", "result", captiond, m)
}
handler.help = ["happymodsearch"]
handler.tags = ["search"]
handler.command = /^(happymodsearch)$/i
export default handler

async function happymodSearch(query) {
try {
const baseUrl = "https://www.happymod.com/"
		const res = await axios.get(baseUrl+"search.html?q="+query)
		var $ = cheerio.load(res.data)
		const hasil = []
		$("div.pdt-app-box").each(function(c, d) {
			var title = $(d).find("a").text().trim();
			var icon = $(d).find("img.lazy").attr("data-original");
			var rating = $(d).find("span").text();
			var link = baseUrl+$(d).find("a").attr("href");
			hasil.push({
				title,
				icon,
				link,
				rating
			})
	})
		return hasil
		} catch (e) {
		return "Tidak dapat menemukan aplikasi tersebut!"
	}
}