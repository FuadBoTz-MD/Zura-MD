import { execSync } from 'child_process'
import fs from 'fs'
let handler = async (m, { conn, text, isROwner }) => {
  if (global.conn.user.jid == conn.user.jid) {
    let stdout = execSync('git config --global user.email "fuadbotzmd@gmail.com" && git config --global user.name "FuadBoTz-MD" && git add . && git commit -m "Percobaan-" && git push' + text + 'FuadBoTz-MD' + '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 ' + (text ? ' ' + text : ''))
    if (isROwner) fs.readdirSync('plugins').map(v => global.reload('', v))
    m.reply(stdout.toString())
  }
}
handler.help = ['update']
handler.tags = ['host']
handler.command = /^update$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

export default handler