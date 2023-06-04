import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, command }) => {
        let f = await fetch(`https://api.alquran.cloud/v1/surah`)
        let xx = await f.json()
        let str = xx.data.map((v, index) => {
        return `${1 + index}. *${v.name}*
Name: ${v.englishName}
Translation: ${v.englishNameTranslation}
Ayahs: ${v.numberOfAyahs}
Type: ${v.revelationType}
`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str, wm, null, [
                ['Alquran!', `${usedPrefix}alquran`]
            ], m)
        
}
handler.help = ['daftarsurah']
handler.tags = ['islam']
handler.command = /^((list|daftar)sura(t|h))$/i
export default handler