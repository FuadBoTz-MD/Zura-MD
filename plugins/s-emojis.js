import { EmojiAPI } from 'emoji-api'  
 const emoji = new EmojiAPI() 
 let handler = async (m, { conn, args, text, usedPrefix, command, isPrems }) => { 
 let name = await conn.getName(m.sender) 
 let aa = 'Masukkan teks:\nEx. smoji 🗿 m\nm = Module\na = Api' 
 let ma = 'Masukkan teks m atau a 🗿' 
  
 if (!args[1] || !args[1]) throw aa 
 if (args[1] == 'm') { 
 let amo = await emoji.get(`${args[0]}`) 
 let emo = amo.images 
         let row = Object.values(emo).map((v, index) => ({ 
                 title: v.index + ' Emoji Api ' + v.vendor, 
                 description: '\nName: ' + amo.name + '\nEmoji: ' + amo.emoji + '\nUnicode: ' + amo.unicode + '\nDescription: ' + amo.description, 
                 rowId: usedPrefix + 'fetchsticker ' + v.url + ' wsf' 
         })) 
         let button = { 
                 buttonText: `☂️ ${command} Search Disini ☂️`, 
                 description: `⚡${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, 
                 footerText: wm 
         } 
         return conn.sendListM(m.chat, button, row, m) 
         } throw ma 
 if (args[1] == 'a') { 
   let emo = ["apple", 
 "facebook", 
 "google", 
 "microsoft", 
 "samsung", 
 "skype", 
 "twitter", 
 "whatsapp"] 
         let row = Object.keys(emo).map((v, index) => ({ 
                 title: '📌 Emoji ' + emo[v], 
                 description: '\nBy: ' + wm, 
                 rowId: usedPrefix + 'fetchsticker ' + 'https://botcahx-rest-api.herokuapp.com/api/emoji/' + emo[v] + '?emoji=' + args[0] + ' wsf' 
         })) 
         let button = { 
                 buttonText: `☂️ ${command} Search Disini ☂️`, 
                 description: `⚡${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, 
                 footerText: wm 
         } 
         return conn.sendListM(m.chat, button, row, m) 
         } throw ma 
 } 
 handler.help = ['emoji'] 
 handler.tags = ['sticker']  
 handler.command = /^(emo(jis|(ji)?)|se?moji)$/i 
 export default handler