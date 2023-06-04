import fetch from 'node-fetch'
let handler = async(m, {
	conn, text, usedPrefix, command, args
}) => {
	if (!args || !args[0]) return conn.reply(m.chat, `conn.reply(m.chat, 'Silahkan masukan pesannya', m)
	let ngen = ['|']
	if (args[0].includes(ngen)) throw 'Ganti Simbol | Jadi spasi'
	if (args[0].length > 14) throw 'Nomor Kepanjangan'
	if (args[0].length < 7) throw 'Nomor Kependekan'
	if (args[0].startsWith('0')) throw 'Gunakan format 62'
	
    let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!mention) throw 'Tag salah satu lah'
	let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	let tujuan = `👋 Saya *𝑭𝒖𝒂𝒅 𝑩𝒐𝑻𝒛*, Pesan Dari Owner *${conn.user.name}*

Pesan: ${txt}
`
	let cap = `𝑪𝒓𝒆𝒂𝒕𝒆 𝑩𝒚 𝑭𝒖𝒂𝒅𝑿𝒚`
	if (!m.quoted) {
		await conn.sendHydrated(mention, tujuan, cap, thumbnailUrl.getRandom(), 'https://wa.me/' + m.sender.split("@s.whatsapp.net")[0], 'KIRIM PESAN', null, null, [
			[null, null]
		], null)
	} else {
		await conn.sendHydrated(mention, tujuan, cap, thumbnailUrl.getRandom(), 'https://wa.me/' + m.sender.split("@s.whatsapp.net")[0], 'KIRIM PESAN', null, null, [
			[null, null]
		], null)
		let media = q ? await m.getQuotedObj() : false || m
		await conn.copyNForward(mention, media, false).catch(_ => _)
	}
	let suks = `𝑴𝒆𝒏𝒈𝒊𝒓𝒊𝒎 𝑷𝒆𝒔𝒂𝒏 *${mime ? mime : 'Teks'}*
👥 Dari : @${m.sender.replace(/@.+/, '')}
👥 Untuk : @${mention.replace(/@.+/, '')}

𝑪𝒓𝒆𝒂𝒕𝒆 𝑩𝒚 𝑭𝒖𝒂𝒅𝑿𝒚
`
	await conn.sendButton(m.chat, suks, wm, null, [['Menu', '/menu']], m, { mentions: conn.parseMention(suks) })
}
handler.help = ['chat <628XXXXXXXXXX> <pesan>']
handler.tags = ['menbalas']

handler.command = /^(chat)$/i

handler.limit = true
handler.private = true
export default handler