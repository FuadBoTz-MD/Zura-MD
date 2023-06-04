import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import knights from 'knights-canvas'
export async function all(m) {
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let name = await this.getName(who)
	let chat = global.db.data.chats[m.chat]
    let { isBanned } = global.db.data.chats[m.chat]
    let { banned } = global.db.data.users[m.sender]
    let { group } = global.db.data.settings
    let setting = global.db.data.settings
    let user = global.db.data.users[m.sender]
    

    if (chat.autoReply) {
    // ketika ada yang kirim anu
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `${htjava} *Undang Bot ke Grup* ${htjava}
${dmenub} 7 Hari / Rp 5,000
${dmenub} 30 Hari / Rp 15,000
${dmenuf}
`.trim(), wm, 'Pemilik Bot', '.owner', m)
await this.reply(nomorown + '@s.whatsapp.net', `Ada Yang Mau Nyulik nih :v \n\ndari: @${m.sender.split("@")[0]} \n\npesan: ${m.text}`, m, { mentions: [m.sender] })
    }
    
    // ketika ada yang kirim anu
    if (m.mtype === 'reactionMessage') {
    let caption = `Terdeteksi ${name} @${who.split("@")[0]} Lagi Mengirim Reaction [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
        
    // ketika ada yang kirim anu
    if (m.mtype === 'paymentMessage') {
    let caption = `Terdeteksi ${name} @${who.split("@")[0]} Lagi Meminta Uang :> [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    
    // ketika ada yang kirim anu
    if (m.mtype === 'productMessage') {
    let caption = `Terdeteksi ${name} @${who.split("@")[0]} Lagi Promosi :> [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    
    // ketika ada yang kirim anu
    if (m.mtype === 'orderMessage') {
    let caption = `Terdeteksi ${name} @${who.split("@")[0]} Lagi Meng Order :> [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    
    // ketika ada yang kirim anu
    if (m.mtype === 'stickerMessage') {
    this.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
    
    // ketika ada yang kirim anu
    if (m.text.includes('🗿')) {
    this.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
        
    // ketika ada yang kirim anu
    
    // bot
    if (/^(aktif|w(ey|oi)|bot|ha[iy]|we|oy|p)$/i.test(m.text)) {
    let apsih = ["Kenapa",
"Ada apa",
"Naon meng",
"Iya, bot disini",
"Luwak white coffe passwordnya",
"Hmmm, kenapa",
"Apasih",
"Okey bot sudah aktif",
"2, 3 tutup botol",
"Bot aktif"]
        let caption = `*${apsih.getRandom()}* kak ${name} @${who.split("@")[0]} 🗿`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    }

    return !0
}
