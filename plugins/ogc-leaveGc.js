import moment from 'moment-timezone';
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
		m.reply('Bot akan keluar dari grup *' + group.subject + '!*')
		await conn.sendMessage(args[0], { text: 'Babayyy bot akan keluar...\n♪ヽ(*´∀`)ﾉ' }, { quoted: null }).then(() => {
			conn.groupLeave(args[0])
			m.reply('berhasil keluar!')
			return !0
		})
	}
	
handler.command = ['leavegc']

export default handler