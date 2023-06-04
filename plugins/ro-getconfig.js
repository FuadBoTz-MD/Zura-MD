import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: 'Config', 
  jpegThumbnail: fs.readFileSync('./thumbnail.jpg'),
                            }
                          }
                        }
	let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
conn.reply(m.chat, `*Sukses!* config.js telah dikirim ke kontak Owner`,m)
conn.reply('6287734910547' + '@s.whatsapp.net', `*config.js tanggal ${date}*`, m)
          conn.sendFile('6287734910547' + '@s.whatsapp.net', fs.readFileSync('./config.js'), 'config.js', '', 0, 0, { mimetype: 'application/js', quoted: fdoc})
 }
 
handler.help = ['getconfig']
handler.tags = ['developer']
handler.command = /^(getconfig)$/i

handler.rowner = true

export default handler