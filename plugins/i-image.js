import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendButton(m.chat,`
• <≫───• *GOOGLE IMAGE* •───≪> •

*Result:* ${text}
*Source:* Google
`, wm, link, [['NEXT', `.image ${text}`]], m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet']
handler.command = /^(gimage|image)$/i
handler.limit = true

export default handler