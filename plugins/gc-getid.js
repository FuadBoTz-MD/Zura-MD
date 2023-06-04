let handler = async (m, {conn, groupMetadata }) => {
let group = groupMetadata
conn.reply(m.chat, `${group.id}`, m)
}
handler.help = ['gcid']
handler.tags = ['group']
handler.command = /^(cekid|idgc|gcid)$/i
handler.group = true
handler.rowner = true

export default handler
