let handler = async (m, { conn, args, isOwner, command, usedPrefix }) => {
	if (!args[0]) throw `Masukan ID Group\nContoh: *${usedPrefix + command} ID*`;
	let group = await conn.groupMetadata(args[0])
	let text = false;
	if (args[0] && args[1]) text = args[1]
	let chat = global.db.data.chats[args[0]]
	if (!isOwner) {
			global.dfail('owner', m, conn)
			throw false
		}
		await conn.sendMessage(args[0], { text: '*Group Ini Telah Di Banned Owner!*' }, { quoted: null }).then(() => {
			chat.isBanned = true
			m.reply(`*Berhasil Banned!!*\nBot tidak akan lagi merespon group ${group.subject}`)
			return !0
		})
	}
	
handler.command = ['bnt']

export default handler