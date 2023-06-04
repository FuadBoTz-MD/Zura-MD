import moment from 'moment-timezone';
let handler = async (m, { conn, args, isOwner, command, usedPrefix }) => {
	if (!args[0]) throw `Masukan ID Group\nContoh: *${usedPrefix + command} ID*`;
	let group = await conn.groupMetadata(args[0])
	let text = false;
	if (args[0] && args[1]) text = args[1]
	let chat = global.db.data.chats[args[0]]
		if (!isOwner) {
			global.dfail('owner', m, conn)
			throw false
		}
		if (!text) {
			let hari = [];
			for (let i = 1; i < 31; i++) {
				hari.push(i);
			};
			let rows = hari.map(v => ({
				title: v + ' Hari',
				description: 'Bot akan keluar setelah ' + v + ' Hari.',
				rowId: usedPrefix + command + ` ${args[0]} ${v}`
			}));
			let msg = {
				buttonText: "LIST HARI",
				description: `\nKlik dibawah ini memilih berapa hari yg di tetapkan untuk grup ${group.subject}\n`,
				footerText: wm,
			}
			await conn.sendListM(m.chat, msg, rows, m)
		} else {
			let jumlahHari = 86400000 * text;
			let now = new Date() * 1;
			if (now < chat.expired) chat.expired += jumlahHari;
			else chat.expired = now + jumlahHari;
			m.reply("\nBerhasil menetapkan hari kadaluarsa untuk grup *" + group.subject + `* selama *${text}* hari.`)
		}
	}
	
handler.command = ['expred']

export default handler

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