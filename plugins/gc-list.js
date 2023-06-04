import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
    const fkontak = {
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
	let grup = Object.keys(await conn.groupFetchAllParticipating())
	let rows = [];

	for (let i of grup) {
		const dbnya = db.data.chats[i]
		const expired = `${(dbnya && dbnya.expired > 0) ? msToDate(dbnya.expired - new Date() * 1) : 'Tidak Disetel'}`;
		const gc = await conn.groupMetadata(i);
		try {
        let botAdmin = gc.participants.filter(v => v.id == conn.user.jid)[0].admin;
		rows.push({
			title: gc.subject,
			description: `Admin?: ${botAdmin ? "Yes" : "No"}\nExpired: ` + expired,
			rowId: usedPrefix + 'inspect ' + i,
		})
		} catch (e) {
		    console.log(e)
		}
	}
	let msg = {
		buttonText: "GROUP LIST",
		description: '\nSilahkan pilih grup dengan menekan tombol dibawah ini..!\n\nTotal Group: ' + grup.length,
		footerText: '\n' + wm,
		title: 'DAFTAR GROUP BOT',
	}
	await conn.sendListM(m.chat, msg, rows, fkontak)
}
handler.help = ['grouplist', 'gruplist']
handler.tags = ['info','group']
handler.command = /^(listgc|listgrup|listgroup|gruplist|grouplist|gclist)$/i

export default handler;

function msToDate(ms) {
	let days = Math.floor(ms / (24 * 60 * 60 * 1000));
	let daysms = ms % (24 * 60 * 60 * 1000);
	let hours = Math.floor((daysms) / (60 * 60 * 1000));
	let hoursms = ms % (60 * 60 * 1000);
	let minutes = Math.floor((hoursms) / (60 * 1000));
	let minutesms = ms % (60 * 1000);
	let sec = Math.floor((minutesms) / (1000));
	return days + " Hari " + hours + " Jam " + minutes + " Menit";
};