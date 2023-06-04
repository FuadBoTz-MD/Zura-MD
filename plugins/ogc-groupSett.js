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
  let rows = [];
  rows.push({
      title: "Open",
      description: "",
      rowId: `${usedPrefix}timeopen ${args[0]}`
  })
  rows.push({
      title: "Close",
      description: "",
      rowId: `${usedPrefix}timeclose ${args[0]}`
  })
	  let msg = {
	  buttonText: "Pilih Disini",
	  description: "Open untuk Buka Group\nClose untuk Tutup Group",
	  footerText: 'Gunakan Dengan Bijak!\nKarena Fitur Ini Dapat Menyebabkan Terkena Limit!\n\nThanks Dave Kgw For This Feature.',
	  title: 'Group Setting'
	  }
      
      conn.sendListM(m.chat, msg, rows, m)
	  throw false
  }

handler.command = /^(gct)$/i

export default handler