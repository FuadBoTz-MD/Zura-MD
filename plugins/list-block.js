let handler = async (m, { conn, usedPrefix }) => {

let fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=List+Block'
await conn.fetchBlocklist().then(async data => {
let txt = `\n*Total:* ${data.length}\n\n┌─\n`
	for (let i of data) {
	txt += `├ @${i.split("@")[0]}\n`
}
	txt += "└────"
await conn.reply(m.chat, txt, false, { contextInfo: { externalAdReply :{ mediaType: 1, mediaUrl: fla, title: '「  Daftar Nomor Yang Diblokir  」', thumbnail: { url: fla }, thumbnailUrl: fla, renderLargerThumbnail: true }}})
	}).catch(err => {
		console.log(err);
		throw 'tidak ada yang diblokir!'
	})
}

handler.help = ['listblock']
handler.tags = ['info']
handler.command = /^(listblock|blocklist|bloklist)$/i
handler.owner = true

export default handler
