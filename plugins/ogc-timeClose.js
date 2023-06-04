let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => {
	if (!args[0]) throw 'Uhm.. id groupnya mana?';
	let group = await conn.groupMetadata(args[0])
	let text = false;
	if (args[0] && args[1]) text = args[1]
	let chat = global.db.data.chats[args[0]]
  
	if (!isOwner) {
		global.dfail('owner', m, conn)
		throw false
	}
	  await conn.groupSettingUpdate(args[0], 'announcement').then(async _=> {
	  m.reply(`Sukses menutup grup`)
  }).then(async _=> {conn.reply(args[0], `Owner telah menutup group ini`)
  })
  }
handler.command = /^(timeclose)$/i

export default handler 

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}