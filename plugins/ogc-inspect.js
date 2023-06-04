import moment from 'moment-timezone';
let handler = async (m, { conn, args, isOwner, command, usedPrefix }) => {
	if (!args[0]) throw `Masukan ID Group\nContoh: *${usedPrefix + command} ID*`;
	let group = await conn.groupMetadata(args[0])
	let text = false;
	if (args[0] && args[1]) text = args[1]
	let chat = global.db.data.chats[args[0]]
	
	let botAdmin = group.participants.filter(v => v.id == conn.user.jid)[0].admin;
	let dibuat = await moment(group.creation * 1000).tz("Asia/Makassar").format('DD/MM/YYYY HH:mm:ss')
        let desc = `*⌬*`
    let foot = `*▢═══════════════════▢*`
		let txt = `
 *▢═════「 INFO GRUP 」═════▢*

${desc} *Nama Grup:* ${group.subject}
${desc} *ID:* ${group.id}
${desc} *Pembuat:* ${group.owner !== undefined ? '@' + group.owner.split('@')[0] : 'Telah Keluar'}
${desc} *Tanggal dibuat:* ${dibuat}
${desc} *Total Anggota:* ${group.participants.length}
${desc} *Bot Admin?:* ${botAdmin ? "Yes" : "No"}
${desc} *Expired:* ${(chat && chat.expired > 0) ? msToDate(chat.expired - new Date() * 1) : 'Tidak Di Setel'}
${desc} *Banned?:* ${chat.isBanned ? "✅" : "❌"}

${foot}
`
    let rows = [
		{
		title: 'Add Expired',
		description: 'Menerapkan kadaluarsa untuk grup',
		rowId: usedPrefix + 'expred ' + args[0],
		},
		{
		title: 'Leave Group',
		description: 'Mengeluarkan bot dari grup',
		rowId: usedPrefix + 'leavegc ' + args[0],
		},
        {
	    title: 'Banned Group',
	    description: 'Jika di nyalakan bot tidak akan merespon grup itu',
	    rowId: usedPrefix + 'bnt ' + args[0]
	    },
	    {
	    title: 'Unbanned Group',
	    description: 'Sesuai titlenya:v',
	    rowId: usedPrefix + 'bntod ' + args[0]
	    }
		];
		if (botAdmin) {
		rows.push({
			title: 'Link Group',
			description: 'Mengambil link group',
			rowId: usedPrefix + 'links ' + args[0],
		})
		rows.push({
		    title: 'Group Setting',
		    description: 'Untuk membuka/menutup grup',
		    rowId: usedPrefix + 'gct ' + args[0],
	    })
	    rows.push({
	        title: 'Add Owner',
	        description: 'Untuk memasukan owner ke grup',
	        rowId: usedPrefix + 'joinown ' + args[0],
	    })
		}
		
	let msg = {
		buttonText: 'LIST COMMAND',
		description: txt,
		footerText: wm,
		title: 'List Perintah '
	}
	await conn.sendListM(m.chat, msg, rows, fgif)
}

handler.command = /^inspe(ct|k)$/i

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