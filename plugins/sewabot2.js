import fetch from 'node-fetch' 
import moment from 'moment-timezone'
 let handler = async(m, { conn, usedPrefix, args, command }) => { 
     let name = db.data.users[m.sender].name 
 let fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 9998282719181899999,
    status: 404,
    surface : 404,
    message: `${ucapan()}`,
    orderTitle: `${ucapan()}`,
    thumbnail: await (await fetch(`https://i.ibb.co/jfZVKmC/babi2.jpg`)).buffer(),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
 let judul = ''
  const sections = [ 
                 { 
                   "rows": [{ 
                     "title": `Pemilik Bot`, 
                     "description": "Nomor Pemilik Bot (owner)", 
                     "rowId": `${usedPrefix}owner2` 
                   }, { 
                     "title": "Syarat Ketentuan dan Peraturan", 
                     "description": "Harap membaca Peraturan demi kenyamanan kita bersama", 
                     "rowId": `${usedPrefix}donasi` 
                   }, { 
                     "title": `Group Official ${namebot} Bot`, 
                     "description": "Gabung untuk mendapatkan informasi mengenai bot atau sekedar meramaikan", 
                     "rowId": `${usedPrefix}gcbot` 
                   }], 
                   "title": "Informasi Bot" 
                 }, { 
                   "rows": [{ 
                     "title": `Free Trial 1 Hari`, 
                     "description": "Masukkan bot secara gratis selama 1 Hari", 
                     "rowId": `${usedPrefix}join` 
                     }], 
                   "title": "────────「 Trial 」" 
                 }, { 
                     "rows": [{ 
                       "title": `Permanent! Rp50.000`, 
                       "description": "Masukkan bot ke dalam group tanpa batasann waktu!", 
                       "rowId": ".order SEWA BOT 50K Permanent"
                   }], 
                     "title": "───────「 Permanent 」" 
                 } 
               ]
         const listMessage = {
      text: `*❏ SEWA BOT*
µɳƭµҡ ƒเƭµɾ ɓσƭ ɓเรα ɓαcα ɱεɳµ รαɱραเ รεℓεรαเ ყα ҡαҡ, ∂เcσɓα cσɓα ∂µℓµ ɓเαɾ ƭαµ ( ҡεƭเҡ *.menu* )
รเℓαɦҡαɳ ɦµɓµɳɠเ σωɳεɾ ( ҡεƭเҡ *.owner* ) ʝเҡα เɳɠเɳ ɱεɳყεωα ɓσƭ µɳƭµҡ ɠɾµρ cɦαƭ ҡαℓเαɳ

➠ รεωα (ʝσเɳ ɠɾµρ) ɦαɾɠα 50ҡ / ρεɾɱαɳεɳƭ ∂αɳ αραɓเℓα ɓσƭ ∂เ ҡเcҡ ∂αɾเ ɠɾµρ รεɳɠαʝα αƭαµ ƭเ∂αҡ รεɳɠαʝα ƭเ∂αҡ ɓเรα ∂เ ʝσเɳ ҡαɳ ℓαɠเ (ɦαɳɠµร).

➠ ρεɱɓαყαɾαɳ รααƭ เɳเ ɦαɳყα ƭεɾรε∂เα ѵเα ∂αɳα

➠ ρɾσรεร ƭɾαɳรαҡรเ รερεɾƭเ ρα∂α µɱµɱɳყα, cɦαƭ σωɳεɾ ƭεɾℓεɓเɦ ∂αɦµℓµ µɳƭµҡ ɱεɳαɳყαҡαɳ ɳσɱσɾ ƭµʝµαɳ ƭɾαɳรƒεɾ รεƭεℓαɦ เƭµ รcɾεεɳรɦσƭ ɓµҡƭเ ρεɱɓαყαɾαɳ.

➠ *ρεɳƭเɳɠ!* รเɱραɳ ɳσɱσɾ σωɳεɾ ∂αɳ ʝσเɳ ҡε ∂αℓαɱ ɠɾµρ σƒƒเcเαℓ ∂เɓαωαɦ µɳƭµҡ ɱεɳɠεƭαɦµเ µρ∂αƭε ɳσɱσɾ ɓσƭ ƭεɾɓαɾµ αραɓเℓα ƭεɾ-ɓαɳɳε∂.

➠ ɓσƭ ɓเรα ∂เ ρเɳ∂αɦ ρเɳ
∂αɦ ɠɾµρ (ɓεɾℓαҡµ µɳƭµҡ ყαɳɠ รεωα) ҡε∂αℓαɱ ɠɾµρ ℓαเɳ (ɦαɳყα 1 ɠɾµρ)

➠ ɱααƒ µɳƭµҡ ყαɳɠ รµ∂αɦ ƭɾαɳรƒεɾ ƭเ∂αҡ ∂αραƭ ∂เ ɾεƒµɳ∂/∂เɓαƭαℓҡαɳ.

➠ ɱεɱɓεℓเ/รεωα ɓεɾαɾƭเ รεƭµʝµ ∂αℓαɱ ρεɾรყαɾαƭαɳ ƭεɾรεɓµƭ`,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: judul.trim(),
      buttonText: "Click Here",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fload, mentions: await conn.parseMention(judul), contextInfo: { externalAdReply :{ 
     showAdAttribution: true, 
      }} 
   })
    
    }
handler.command = /^(sewabot2|sewa2|belibot2|buyprem2)$/i

export default handler 

function ucapan() {
    let res = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = ('Hi')
  if (time >= 0) {
    res = ('Selamat Malam🌃')
  }
  if (time >= 4) {
    res = ('Selamat Pagi🌄')
  }
  if (time >= 12) {
    res = ('Selamat Siang☀️')
  }
  if (time >= 16) {
    res = ('️ Selamat Malam🌇')
  }
  if (time >= 23) {
    res = ('Selamat Malam🌙')
  }
  return res
}