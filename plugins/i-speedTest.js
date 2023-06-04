import cp from 'child_process'
import { promisify } from 'util'
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn}) => {
	await conn.reply(m.chat, `Please Wait`, m)
    let o
    try {
        o = await exec('python3 speed.py --share --secure')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) conn.sendMessage(m.chat, {
text: stdout,
contextInfo: {
externalAdReply: {
title: "",
body: "",
thumbnailUrl: "https://telegra.ph/file/ec8cf04e3a2890d3dce9c.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}})
        if (stderr.trim()) m.reply(stderr)
    }
}
handler.help = ['speedtest']
handler.tags = ['info']
handler.command = /^(speedtest)$/i

export default handler