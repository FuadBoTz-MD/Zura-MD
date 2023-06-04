const { WAMessageStubType } = (await import('@adiwajshing/baileys')).default
import { format } from 'util';

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

export async function all(m) {
	if (m.fromMe && m.isBaileys) return !0
	let text;
	let setting = global.db.data.settings[this.user.jid]
	if(!setting.anticall) return 
	
	if (m.messageStubType === (WAMessageStubType.CALL_MISSED_VOICE || WAMessageStubType.CALL_MISSED_VIDEO)) {
		await this.reply(m.chat, `Mohon maaf kamu di blockir oleh bot karena owner menyalakan *Anti Call*\n\nHub Owner:\nwa.me/${nomorown}?text=Bang+maaf+saya+tadi+menelpon+bot+tolong+buka+bock+saya`, null)
		await delay(1000)
		await this.updateBlockStatus(m.chat, "block")
	}
}




































/*

JANGAN DI HAPUS!!


Made By FokusDotId (Fokus ID)

https://github.com/FokusDotId

*/