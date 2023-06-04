let handler = async (m, { conn, participants, groupMetadata }) => {
let text = `*「 Group Description 」*\n
${groupMetadata.desc?.toString() || 'unknown'}
`.trim()
m.reply(text)
}

handler.help = ['getdesc']
handler.tags = ['group']
handler.command = /^(getdesc|groupdesc|gcdesc)$/i
handler.group = true
handler.admin = true

export default handler