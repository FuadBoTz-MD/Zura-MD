import HMtai from 'hmtai';
const hmtai = new HMtai();

let handler = async (m, { conn, usedPrefix }) => {
await m.reply('Wait...')
let img = await hmtai.sfw.mobileWallpaper();
let capt = `Milik Kita🐦`
conn.sendButton(m.chat, capt, wm, img, [['Wallnime', `${usedPrefix}wallnime`]], m)
}

handler.help = ['wallnime']
handler.tags = ['internet']

handler.command = /^(wallnime|wallhp)$/i
handler.limit = true

export default handler