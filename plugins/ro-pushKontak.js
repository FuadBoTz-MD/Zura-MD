let handler = async(m, { conn, groupMetadata, usedPrefix, text, command }) => {
if (!text) return m.reply("Input teks!")
let get = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
          let count = get.length;
          let sentCount = 0;
          m.reply(wait);
          for (let i = 0; i < get.length; i++) {
            setTimeout(function() {
              conn.sendMessage(get[i], { text: text });
              count--;
              sentCount++;
              if (count === 0) {
                m.reply(`Berhasil Push Kontak:\nJumlah Pesan Terkirim: *${sentCount}*`);
              }
            }, i * 1000); // delay setiap pengiriman selama 1 detik
          }
}
handler.command = handler.help = ["pushkontak"]
handler.tags = ["tools"]
handler.owner = true
handler.group = true
export default handler