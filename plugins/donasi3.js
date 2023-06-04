import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix: _p }) => {

await conn.relayMessage(m.chat, 
        {"requestPaymentMessage" : {
        amount:{value: 100000000000,offset: 0,currencyCode: 'USD'},
        amount1000: 100000000000,
        background: null,
        currencyCodeIso4217: 'USD',
        expiryTimestamp: 0,
        noteMessage: {extendedTextMessage : { text : `❒ Pulsa : 083837709331\n❒ Dana : 083837709331\n❒ Ovo : 083837709331\n\nNote : Donasi Seikhlasnya, Agar Bot Dapat Beroperasi Lebih Lama Dan Supaya Owner Samangat Untuk Menambah Fitur² Baru, Dan Memperbaiki Fitur² Yang Eror\n\nSekian *Trima Kasih*
\n\n©𝑭𝒖𝒂𝒅𝑿𝒚`}},
        requestFrom: m.sender}},{messageId:m.key.id})
}    
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi3)$/i

export default handler