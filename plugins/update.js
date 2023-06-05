import cp from 'child_process'
import { promisify, format } from 'util'
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn, isOwner }) => {
    let caption = `"V7"`
    if (!isOwner) return
	await conn.reply(m.chat, "Mohon tunggu...\nSedang mengupload script ke github", m)
    exec(`git config --global user.email "fuadbotzmd@gmail.com" && git config --global user.name "FuadBoTz-MD" && git add . && git commit -m ${caption} && git push`, (stdout, stderr) => {
        if (stdout) return m.reply(stdout); //biasanya error disini, kalo error coba hapus aja 2 if ini
        if (stderr) return m.reply(stderr);
    })
}
handler.help = ['update']
handler.tags = ['advanced']
handler.command = /^(update|u)$/i
handler.rowner = true

export default handler