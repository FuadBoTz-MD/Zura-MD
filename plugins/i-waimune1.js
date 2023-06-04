let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *DOWNLOAD* ${htka}

     WhatsApp Imune ♨️
    
    --------Kelebihan--------
• Anti Virtex(30%)✔️
• Anti lag(68%)✔️
• Fitur war(70%)✔️
• Anti Bug troli, slayer(48%)✔️
• No Password ✔️

-------NOTE-------
JANGAN DIGUNAKAN UNTUK TUJUAN YG MERUGIKAN
TUNGGU AJA PASTI GW ACC KOK
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '↗️Link', url: 'https://cararegistrasi.com/cMyXZwsK'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^waimune1$/i

export default handler
