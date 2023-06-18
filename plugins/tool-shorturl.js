import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args }) => {
let tesk = '🚀 *ʟɪɴᴋ:* '
let pros = '_*ᴄ ᴏ ɴ ᴠ ᴇ ʀ ᴛ ɪ ɴ ɢ . . .*_'
	let ouo = await (await fetch(`https://api.lolhuman.xyz/api/ouoshortlink?apikey=e54205a4ca2caa368cc067bb&url=${args[0]}`)).json()
	m.reply(pros).then(_=> conn.reply(m.chat, `${tesk}${ouo.result}`,m))
	}
handler.help = ['short <url>']
handler.tags = ['internet']
handler.command = /^(short(url)?)$/i
handler.limit = true
export default handler
