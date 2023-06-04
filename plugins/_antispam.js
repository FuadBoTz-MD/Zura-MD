export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
            if (this.spam[m.sender].count > 5) {
                global.db.data.users[m.sender].banned = true
                m.reply('*📮Kamu Di Banned Karena Spam*\n\n*💬Laporkan Masalah Ini Ke wa.me/6283837709331?text=📧Bang+tolong+unban+nomor+ku*')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}