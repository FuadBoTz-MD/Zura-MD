import fs from 'fs'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
await conn.sendMessage(m.chat, {
          react: {
            text: '🦋',
            key: m.key,
          }})
    let fkontak = {
		key: {
			participant: '0@s.whatsapp.net'
		},
		message: {
			contactMessage: {
				displayName: global.wm,
				vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
				jpegThumbnail: fs.readFileSync('./thumbnail.jpg'),
				thumbnail: fs.readFileSync('./thumbnail.jpg'),
				sendEphemeral: true
			}
		}
	};
    let totalreg = Object.keys(global.db.data.users).length
    let unreg = Object.keys(db.data.users).filter(user => !db.data.users[user].registered).length
    let reg = Object.keys(db.data.users).filter(user => db.data.users[user].registered).length

    await conn.sendPresenceUpdate('composing', m.chat)
    conn.reply(m.chat, `┬┈┈┈┈┈┈┈┈┈┈┈┈□┈┈┈┈┈┈┈┈┈┈┈┈┬\n友 Jumlah User Bot: *${totalreg} Orang*\n◙  User Registrasi: *${reg} Orang*\n◘  User Yang Tidak Registrasi: *${unreg} Orang*\n┴┈┈┈┈┈┈┈┈┈┈┈┈■┈┈┈┈┈┈┈┈┈┈┈┈┴\n\n${wm3}`, fkontak)
}
handler.help = ['database']
handler.tags = ['info', 'main']
handler.command = /^(database|db)$/i
handler.limit = true

export default handler