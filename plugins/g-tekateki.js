import fetch from 'node-fetch'
let timeout = 120000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    if (global.db.data.chats[m.chat].game == false && m.isGroup) return conn.reply(m.chat, 'Game Tidak Aktif Di Chat Ini\n\nSilahkan Ketik .on game\nUntuk Mengaktifkan Game ', fkontak)
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) return conn.reply(m.chat, 'Belum dijawab!', conn.tekateki[id][0])
    let res = await fetch ('https://restapi.frteam.xyz/tekateki?&apikey=085759681568')
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tete untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tekateki[id] = [
        await conn.sendBut(m.chat, caption, wm, 'Bantuan', `.tete`, m),
        json, poin,
        setTimeout(() => {
            if (conn.tekateki[id]) conn.sendBut(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'Teka Teki', `.tekateki`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}
handler.help = ['tekateki']
handler.tags = ['game']
handler.command = /^tekateki/i

handler.game = true

export default handler