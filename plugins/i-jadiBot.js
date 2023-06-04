import fs from 'fs'
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.nomorown
let anu = `Hallo 👋
⟩» *Kalau kakak mau jadi bot silahkan buy prem dan ktik .scanbot Untuk Jadi Bot*

          
━━━〔 ıll *HARGA* llı 〕━━ꕥ
⬡ *7 Hari* 5.000
⬡ *1 BULAN* 15.000
⬡ *2 BULAN:* 25.000
⬡ *PERMANEN:* 75.000
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━━〔 ıll *PAYMENT* llı 〕━━ꕥ
⬡ *DANA:* 083837709331
⬡ *GOPAY:* -
⬡ *OVO:* 083837709331
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━〔 ıll *RULES* llı 〕━ꕥ
⬡ [❗] *Dana yang sudah masuk tidak bisa di kembalikan*
⬡ [❗] *Kalau akunmu ke banned bukan urusan saya*
┗━━━━━━━━━━ꕥ
Jika anda berminat hubungi nomor di bawah!!
⟩» *jangan lupa donasi kak* «⟨
Terimakasih yang sudah mendonasikan untuk bot

Contact:
wa.me/6283837709331 (Owner)

*Follow Instagram ku juga kak😼*`
  m.reply(anu)
}
handler.help = ['jadibot']
handler.tags = ['info']
handler.command = /^(jadibot)$/i

export default handler