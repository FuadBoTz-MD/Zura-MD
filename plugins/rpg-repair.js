
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = global.botwm

  let caption = `
▧ Pickaxe ⛏️
▧ Sword ⚔️
▧ Fishingrod 🎣

*❏ RECIPE*
▧ Pickaxe ⛏️
〉 5 Kayu
〉 3 Batu
〉 3 Iron
〉 1 Diamond

▧ Sword ⚔️
〉 5 Kayu
〉 9 Iron
〉 1 Diamond

▧ Armor 🥼
〉 15 Iron
〉 3 Diamond

example .repair armor 
untuk melihat armor 
`
  try {
    if (/repair/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
          if (user.pickaxedurability > 99) return conn.reply(m.chat,'Tools ini belum memiliki kerusakan')
          if (user.pickaxe == 0) return conn.reply(m.chat,'Kamu belum memilik ini')
            if(user.diamond < 1 || user.rock < 3 || user.wood < 5 || user.iron < 3 ) return conn.reply(m.chat,`Barang tidak cukup!`)
             user.rock -= 3
             user.wood -= 5
             user.iron -= 3
             user.diamond -= 1
             user.pickaxedurability = 100
            conn.reply(m.chat,"Sukses memperbaiki!")
            break
          case 'sword':
          if (user.sworddurability > 99) return conn.reply(m.chat,'Tools ini belum memiliki kerusakan')
          if (user.sword == 0) return conn.reply(m.chat,'Kamu belum memilik ini')
            if(user.diamond < 1 || user.wood < 5 || user.iron < 9 ) return conn.reply(m.chat,`Barang tidak cukup!`)
             user.wood -= 5
             user.iron -= 9
             user.diamond -= 1
             user.sworddurability = 100
            conn.reply(m.chat,"Sukses memperbaiki!")
            break
            case 'armor':
          if (user.armordurability > 99) return conn.reply(m.chat,'Tools ini belum memiliki kerusakan')
          if (user.armor == 0) return conn.reply(m.chat,'Kamu belum memilik ini')
            if(user.diamond < 3 || user.iron < 15 ) return conn.reply(m.chat,`Barang tidak cukup!`)
             user.iron -= 15
             user.diamond -= 3
             user.armordurability = 100
            conn.reply(m.chat,"Sukses memperbaiki!")
            break
          default:
            return conn.reply(m.chat, caption)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendFile(m.chat, caption, null, null, m)
      }
    }
  } catch (err) {
    conn.reply(m.chat,"Error\n\n\n" + err.stack)
  }
}

handler.help = ['repair']
handler.tags = ['rpg']
handler.command = /^(repair)/i

export default handler