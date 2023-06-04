const {
	getBinaryNodeChild,
	getBinaryNodeChildren,
	proto,
} = (await import('@adiwajshing/baileys')).default
const fs = (await import('fs')).default
const fetch = (await import('node-fetch')).default

let handler = async (m, { conn, text, participants, usedPrefix, command, args }) => {
	if (!text) throw `_Masukan nomor!_\nContoh:\n\n${usedPrefix + command} ${global.owner[0]}`
	conn.reply(m.chat, '_Sedang di proses..._', null)
    let _participants = participants.map(user => user.id)
    let users = (await Promise.all(
        text.split(',')
            .map(v => v.replace(/[^0-9]/g, ''))
            .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
            .map(async v => [
                v,
                await conn.onWhatsApp(v + '@s.whatsapp.net')
            ])
    )).filter(v => v[1][0]?.exists).map(v => v[0] + '@c.us')
    try {
    const response = await conn.query({
        tag: 'iq',
        attrs: {
            type: 'set',
            xmlns: 'w:g2',
            to: m.chat,
        },
        content: users.map(jid => ({
            tag: 'add',
            attrs: {},
            content: [{ tag: 'participant', attrs: { jid } }]
        }))
    })
    const pp = await conn.profilePictureUrl(m.chat)
    const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
    const add = getBinaryNodeChild(response, 'add')
    const nama = await conn.getName(m.chat)
    const aku = m.sender.split('@')[0]
    const me = await conn.getName(aku)
    const participant = getBinaryNodeChildren(response, 'add')
    let ee = participant[0].content.filter(v => v)
    let name = conn.getName(m.sender)
    let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${name}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
    if (ee[0].attrs.error == 408) conn.sendButtonn(m.chat, `Tidak dapat menambahkan @${ee[0].attrs.jid.split('@')[0]}!\nKabarnya si @${ee[0].attrs.jid.split('@')[0]} baru keluar dari grup ini :'v`, wm, 'link', usedPrefix + `link`, m)
    for (const user of participant[0].content.filter(item => item.attrs.error == 403)) {
    	const jid = user.attrs.jid
    	const dia = await conn.getName(jid)
    	const saya = await m.pushName
    	const content = getBinaryNodeChild(user, 'add_request')
    	const invite_code = content.attrs.code
    	const invite_code_exp = content.attrs.expiration
    	const txt = `Mengundang ${dia} menggunakan invite...`
    	await m.reply(txt, null)
    	//await conn.delay(100)
    	//conn.sendButton(m.chat, txt, wm, 'menu', '.m', m)
    	await conn.sendGroupV4Invite(m.chat, jid, invite_code, invite_code_exp, nama, `Masuk Bang.. Kamu di undang oleh ${saya}`, jpegThumbnail, { contextInfo: { isForwarded: true, forwardingScore: 9999 }}).then(v => { 
    	    conn.reply(m.chat, `*Sukses!* link undangan telah terkirim..\nTinggal menunggu konfirmasi masuk dari ${dia}`, fkontak) 
    	    })
        }
    } catch {
    conn.reply('Orangnya udah ada_-')
    }
}
handler.help = ['oadd', 'o+'].map(v => v + ' @user')
handler.tags = ['owner']
handler.command = /^(oadd|o\+)$/i

handler.owner = true
handler.group = true
handler.botAdmin = true


export default handler