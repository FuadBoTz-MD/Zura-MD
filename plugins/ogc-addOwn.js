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
		conn.groupParticipantsUpdate(args[0], [m.sender], 'add').then(v => conn.sendMessage(m.chat, {text: `Anda telah di joinkan bot ke grup ${group.subject}`}, {quoted: m})).catch(e => m.reply('Terjadi kesalahan...'))
}

handler.command = /^(joinown)$/i

export default handler