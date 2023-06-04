let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('Byee Bot akan pergi.... !', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['out']
handler.tags = ['owner']
handler.command = /^(out)$/i

handler.owner = true

export default handler
