/*import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `_🎐Pilih Mode bot nya...\n_Off atau On di group_\n`,wm + '\n\n' + botdate, thumbdoc, [['ON','.unbanchat'],['OFF','.banchat']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'MODE BOT',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['botmode']
handler.tags = ['group']
handler.command = /^(botmode)$/i

handler.admin = true
handler.group = true

export default handler
*/