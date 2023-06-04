import cp from 'child_process'
import { promisify } from 'util'
let exec = promisify(cp.exec).bind(cp)
let handler = async (m) => {
	await conn.reply(m.chat, wait, m)
    let o
    try {
        o = await exec('git status')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
    }
}
handler.help = ['status']
handler.tags = ['developer']
handler.command = /^(status)$/i
handler.rowner = true

export default handler
