let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `“${iqtest.getRandom()}”`, author, ['Nyerah', `${usedPrefix}iqtest`], m)
handler.help = ['iqtest']
handler.tags = ['quotes']
handler.command = /^(iqtest)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.iqtest = [
"ADA IKAN 10 EKOR, 5 EKORDI MAKAN ANJING 3 EKOR TENGGELAM DAN 1 EKOR LAGI DI MAKAN KUCING, BERAPA EKOR IKAN YANG HIDUP?",
"1 Minggu = 7 Hari.\n1 Bulan = 4 Minggu.\n1 Tahun =...... Bulan?"
]