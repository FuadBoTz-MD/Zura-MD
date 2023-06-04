import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m) => {
    let user = db.data.users[m.sender]
    if (user.warning == 0) throw 'Kamu tidak memiliki dosa !'

    let waktu = user.lastIstigfar + 262800288
    if (new Date - user.lastIstigfar < 262800288) throw `[ 💬 ]Kamu harus menunggu selama, ${msToTime(waktu - new Date())}`
    user.warning -= 1
let info = `🔥 *Dosa* : ${user.warn} / 100 `
    user.lastIstigfar = new Date * 1
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'ᴡᴀᴀʟᴀɪᴋᴜᴍᴍᴜꜱꜱᴀʟᴀᴍ ᴡᴀʀᴀʜᴍᴀᴛᴜʟʟᴀʜɪ ᴡᴀʙᴀʀᴏᴋᴀᴛᴜʜ', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.command = /^(astagh?fir(ullah)?|maaf)$/i

handler.limit = false
handler.exp = 100

export default handler 

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return minutes + " menit " + seconds + " detik"
}