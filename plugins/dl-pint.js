import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    m.reply(m.chat,`
• <≫───• *GOOGLE IMAGE* •───≪> •

*Result:* ${text}
*Source:* Google
`)
}
handler.help = ['pint <query>', 'image <query>']
handler.tags = ['internet']
handler.command = /^(pint|pinterest)$/i
handler.limit = true

export default handler