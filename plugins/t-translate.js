import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, command }) => {
    let lang, text
	if (args.length >= 2) {
		lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
	} else if (m.quoted && m.quoted.text) {
		lang = args[0] ? args[0] : 'id', text = m.quoted.text
	} else throw `Ex: ${usedPrefix + command} id hello i am robot`
	let reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=' + lang + '&dt=t&q=' + text)
	let res = await reis.json()
	if (!res) throw `Error : Bahasa"${lang}" Tidak Support`
	const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
	let Detect = regionNamesInEnglish.of(res[2].toUpperCase() ? res[2].toUpperCase() : 'US')
	let ToLang = regionNamesInEnglish.of(lang.toUpperCase())
	let caption = `*[ Terdeteksi ]*
- ${Detect}

*[ Ke Bahasa ]*
- ${ToLang}

*[ Terjemahan ]*
- ${res[0][0][0]}
`
m.reply(caption)
}
handler.help = ['translate'].map(v => v + ' <lang> <teks>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i

export default handler