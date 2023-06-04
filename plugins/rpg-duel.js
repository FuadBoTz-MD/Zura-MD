let handler = async (m, { conn, text, args, command }) => {
  conn.duel = conn.duel || []
  if (args.length != 0) {
    conn.duel.push(m.mentionedJid ? m.mentionedJid[0] : (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net'))
  }
  let who = conn.duel[0]
  let enemy = global.db.data.users[who]
  let user = global.db.data.users[m.sender]
  let count = args[1] && args[1].length > 0 ? Math.min(100, Math.max(parseInt(args[1]), 1)) : 1
  let nama = await conn.getName(m.sender)

  let randomaku = `${Math.floor(Math.random() * 101)}`
  let randomkamu = `${Math.floor(Math.random() * 81)}`
  let Aku = parseInt(randomaku)
  let Kamu = parseInt(randomkamu)

  let __timers = (new Date() - user.lastduel)
  let _timers = (300000 - __timers)
  let timers = clockString(_timers)

  try {
    if (/duel/.test(command)) {
      if (!who) return conn.reply(m.chat, 'Tag orang yang ingin diajak duel!', m)

      let pler = `@${m.sender.replace(/@.+/, '')} mengajak duel ${args[0]}\n\nPilih Ya Atau Tidak`
      let mentionedJid = [m.sender]

      if (new Date() - user.lastduel > 300000) {
        conn.sendButton(m.chat, pler, 'Kamu menerima tantangan duel dari ' + nama, null, [
          { buttonId: '.dya', buttonText: { displayText: 'Ya' }, type: 1 },
          { buttonId: '.dno', buttonText: { displayText: 'Tidak' }, type: 1 }
        ], m, { mentions: conn.parseMention(mentionedJid) })
      } else {
        conn.reply(m.chat, `Kamu sudah berduel. Tunggu hingga ${timers} lagi`, m)
      }
    }

    if (/dya/.test(command)) {
      let kenal = !who.includes(m.sender)
      if (kenal) throw 'Kamu siapa?\nKok ikut-ikutan mau duel'
      user.lastduel = new Date() * 1
      if (Aku > Kamu) {
        user.money -= 900
        enemy.money += 900
        conn.reply(m.chat, `@${who.split("@")[0]} menang gelud🤼\n\nHadiah:\n900 money buat beli gorengan`, m)
      } else if (Aku < Kamu) {
        user.money += 450
        enemy.money -= 450
        conn.reply(m.chat, `@${who.split("@")[0]} kalah gelud🤼\n\nHadiah:\n450 money buat beli limit`, m)
      } else {
        user.money += 250
        enemy.money += 250
        conn.reply(m.chat, `@${who.split("@")[0]} seri\n\nHadiah:\nmasing-masing 250 money`, m)
      }
      delete conn.duel[0]
    }

    if (/dno/.test(command)) {
      let kenal = !who.includes(m.sender)
      if (kenal