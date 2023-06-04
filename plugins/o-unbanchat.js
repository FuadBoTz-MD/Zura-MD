let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('*sukses unbanned grup ini!*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^(unbanchat|unbnc)$/i
handler.owner = true

export default handler