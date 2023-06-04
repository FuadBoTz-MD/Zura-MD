/*
 * JANGAN DIHAPUS MEMEK!
 * Jangan Disebar ASU Ni Buat Lu Anjic
 * Dah Lu Tinggal Recode Dikit Aja
 * WhatsApp ᴋʏᴀᴍɪ×͜×࿐ : wa.me/6287734910547
*/








import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
let info = 'Gitclone By Creator 𝑭𝒖𝒂𝒅𝑩𝑶𝑻'
if (!args[0]) throw `Link Githubnya Mana Kontol\nContoh:\n*${usedPrefix + command} https://github.com/KaiZax/XhimmerMD*`
if (!regex.test(args[0])) throw 'Link Github Tidak Valid!'
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply('Sedang Mengirim File...\nFile ini akan otomatis dibatalkan jika ukurannya terlalu besar.')
conn.sendFile(m.chat, url, filename, info, m)  
}

handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /^(gitclone|ghdl)$/i
handler.limit = 10

export default handler