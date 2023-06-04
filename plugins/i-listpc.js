let handler = async (m, { conn, usedPrefix, text, command, args, isOwner, isAdmin, isROwner }) => {
   let name = await conn.getName(m.sender)
   let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
	let pc = (Object.entries(await conn.chats).map(([nama, isi]) => { return { nama, ...isi} })).filter(v => !v.nama.endsWith('g.us'))
    let listSections = []
	Object.values(pc).map((i, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + i.name, [
          ['More Information', usedPrefix + command + ' gw ' + index, '']
        ]])
	})
  let type = (args[0] || '').toLowerCase()
  switch (type) {
      case 'gw':
      let i = args[1]
      let pp = await conn.profilePictureUrl(pc[i].id, 'image')
      let str = `*${dmenut}* ${i}
*${dmenub} Name :* ${pc[i].name}
*${dmenub} ID :* ${'@' + pc[i].id.replace(/@.+/, '')}
*${dmenub} Presences :* ${pc[i].presences ? pc[i].presences : 'Tidak Diketahui'}
${dmenuf}\n\n`
      await conn.sendButtonImg(m.chat, pp ? pp : logo, str, author, 'ɴʏᴀʟᴀᴋᴀɴ ᴍᴏᴅᴇ ɢʀᴏᴜᴘ', '.on gconly', fgif)
       break
    default:
      if (!/[01]/.test(command)) return conn.sendList(m.chat, '═══════▣〘 Prіvɑtе Lіst 〙▣═══════', `⚡ Silakan pilih Private List di tombol di bawah...\n*Teks yang anda kirim:* ${text ? text : 'Kosong'}\n\nKetik ulang *${usedPrefix + command}* (text) anda untuk mengubah teks lagi`, author, `» 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘓𝘪𝘴𝘵 𝘏𝘦𝘳𝘦! «`, listSections, m)
      throw false
  }
}
handler.help = ['listpc']
handler.tags = ['owner']
handler.command = /^(listpc|pclist|daftarpc|pc)$/i
handler.owner = true

export default handler