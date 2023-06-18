let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await conn.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
m.reply(teks + `Untuk Penggunaan Silahkan Ketik 
Command ${usedPrefix}pushkontakv3 idgroup|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas\n\n*NOTE*\npushkontakv3 Tidak ada jeda\npushkontakv4 ada jeda 
`)
}
handler.help = ['idgroup', 'cekid']
handler.tags = ['owner']
handler.command = /^(idgroup|cekid)$/i
handler.owner = true
export default handler
