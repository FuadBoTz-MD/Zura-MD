let handler = async (m, { conn, text, usedPrefix, command }) => {
    try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = db.data.users[who]
    if (!who) throw `tag or mention someone!`
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw `Berapa Hari?`
    if (isNaN(txt)) return m.reply(`only number!\n\ncontoh:\n${usedPrefix + command} @${m.sender.split`@`[0]} 7`)
    let username = conn.getName(who) 
      let name = conn.getName(who)
    let userprem = '*Selamat!🥳*\nKamu mendapatkan _kode premgift_ karna telah membeli premium.\nKode dapat di claim setiap hari...\nCara claim kode sebagai berikut: *.premgift <code>*\n\nCode: FuadXy'
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
user.premium = true
    conn.reply(`${who.split('@')[0]}@s.whatsapp.net`, userprem, m)
    m.reply(`*Success!*
*Name :* ${user.name}
*Days :* ${txt} days
*Countdown :* ${user.premiumTime - now}

Hei.. ${user.name} Jgn lupa minta giftcode premium dari owner ya:3\nMintanya lewat PrivateChat kalo ngga, gak akan di tanggapi😆
`)
} catch {
    conn.reply(m.chat, 'Tidak dapat membuat dia premium..', m)
    conn.reply(nomorown + '@s.whatsapp.net', 'Terjadi kesalahan saat *.addprem*', m)
}
}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)p(rem)?$/i

handler.group = false
handler.owner = true

export default handler