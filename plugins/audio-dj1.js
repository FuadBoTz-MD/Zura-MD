import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/dj1.mp3'
conn.sendFile(m.chat, vn, 'dj1.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['dj1']
handler.tags = ['sound']
handler.command = /^(dj1)$/i
handler.fail = null
handler.exp = 100
export default handler