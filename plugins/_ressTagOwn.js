import fs from 'fs'

let handler  = async (m, { conn }) => {
let tag = fs.readFileSync('./media/ress-tagVin.webp')
conn.sendFile(m.chat, tag, '', '', m)      
}

handler.customPrefix = /^(@6283837709331)$/i
handler.command = new RegExp

export default handler