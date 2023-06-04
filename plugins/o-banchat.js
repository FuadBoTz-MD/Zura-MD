let handler = async (m, { participants }) => {
    if (participants.map(v=>v.jid).includes(global.owner.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('*grup ini di ban dari bot!*')
    } else m.reply('Ada nomor owner disini...')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^(banchat|bnc|b)$/i

handler.owner = true

export default handler