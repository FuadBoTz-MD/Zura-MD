let handler = async(m, { conn, args, text }) => {
    let sets = !args || !args[0] ? args[0] : isNumber(args[0]) ? parseInt(args[0]) : args[0]
        sets = Math.max(0, sets)
        
    let fitur = db.data.settings[conn.user.jid]
    if (!sets) return conn.reply(m.chat, `Berapa *Limit Fitur Join?*\nContoh: *.jlimit 5*`, m)
    await conn.reply(m.chat, `*Limit Fitur Join* di Set ${sets}`, m)
    
    fitur.limitjoin = sets
}
handler.help = ['limitjoin <set>']
handler.tags = ['developer']
handler.command = /^(jlimit|limitjoin)$/i
handler.rowner = true

export default handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}