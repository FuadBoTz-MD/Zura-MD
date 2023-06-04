let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *DOWNLOAD* ${htka}

     WhatsApp Imune ♨️
    
    --------Kelebihan--------
• Anti Virtex✔️
• Anti lag✔️
• Anti Bug Call✔️
• Anti Bug troli, slayer Dll✔️
• Anti kadaluarsa ✔️
• Instantick✔️
• Anti hapus pesan ✔️
• Unclone Version✔️
• Broadcast ✔️
• Kebal All virus✔️
• Mode pesawat✔️

-------NOTE------
Kirimkan Bukti Pembayaran Kepada Owner!
Jangan Sebar Wa immune Kepada Orang-Orang
File Berpassword! Minta Pass Kpd Owner!
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '↗️Link', url: 'https://cararegistrasi.com/TyMuTxZ'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^waimune2$/i

export default handler
