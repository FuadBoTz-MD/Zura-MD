let handler = async (m, { conn, args, isOwner, command, usedPrefix }) => {
	if (!args[0]) throw 'Masukan ID Group..';
	let group = await conn.groupMetadata(args[0])
	let text = false;
	if (args[0] && args[1]) text = args[1]
	let chat = global.db.data.chats[args[0]]
  
	if (!isOwner) {
		global.dfail('owner', m, conn)
		throw false
	}
    conn.reply(m.chat, `*Group Name:* ${group.subject}\n*ID:* ${group.id}\n\n*Link Group:* https://chat.whatsapp.com/` + await conn.groupInviteCode(args[0]) + `\n\n${wm}`, m) //Pakai ini jika ingin kelihatan di Wa biasa
}

handler.command = /^links$/i

export default handler
