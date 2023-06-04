import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Mau Cari Apa?`
    let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${global.lolkey}&query=${encodeURIComponent(text)}`)
    if (!res.ok) throw await `Terjadi kesalahan.`
    let json = await res.json()
    if (json.status != '200') throw `Terjadi Kesalahan, Coba Lagi Nanti.`
	let get_result = json.result
	let ini_txt = `Found : *${text}*`
	for (var x of get_result) {
		ini_txt += `\n\n*Title : ${x.title}*\n`
		ini_txt += `Artists : ${x.artists}\n`
		ini_txt += `Duration : ${x.duration}\n`
		ini_txt += `Link : ${x.link}\n`
		ini_txt += `${x.preview_url ? `Preview : ${x.preview_url}\n` : ''}`
		ini_txt += `───────────────────`
	}
	m.reply(ini_txt)
}

handler.help = ['spotsearch']
handler.tags = ['downloader']
handler.command = /^spotify?search$/i

handler.limit = true

export default handler