import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

  let handler = async (m, { conn, text, usedPrefix: _p, command }) => { 
  if (!text) throw `Kirim perintah : ${_p}${command} [nama file]
Contoh : ${_p}${command} Tugas Matematika`
let fvdocs = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net', remoteJid: 'status@broadcast'}, message: { documentMessage: { title: 'Nih Kak...\nStay Grateful With Your Life ;3', jpegThumbnail: await (await fetch('https://telegra.ph/file/824bf7abb11bdded9164a.jpg')).buffer()}}}
let sizez = {
    "4A0": [4767.87, 6740.79],
    "2A0": [3370.39, 4767.87],
    "A0": [2383.94, 3370.39],
    "A1": [1683.78, 2383.94],
    "A2": [1190.55, 1683.78],
    "A3": [841.89, 1190.55],
    "A4": [595.28, 841.89],
    "A5": [419.53, 595.28],
    "A6": [297.64, 419.53],
    "A7": [209.76, 297.64],
    "A8": [147.4, 209.76],
    "A9": [104.88, 147.4],
    "A10": [73.7, 104.88],
    "B0": [2834.65, 4008.19],
    "B1": [2004.09, 2834.65],
    "B2": [1417.32, 2004.09],
    "B3": [1000.63, 1417.32],
    "B4": [708.66, 1000.63],
    "B5": [498.9, 708.66],
    "B6": [354.33, 498.9],
    "B7": [249.45, 354.33],
    "B8": [175.75, 249.45],
    "B9": [124.72, 175.75],
    "B10": [87.87, 124.72],
    "C0": [2599.37, 3676.54],
    "C1": [1836.85, 2599.37],
    "C2": [1298.27, 1836.85],
    "C3": [918.43, 1298.27],
    "C4": [649.13, 918.43],
    "C5": [459.21, 649.13],
    "C6": [323.15, 459.21],
    "C7": [229.61, 323.15],
    "C8": [161.57, 229.61],
    "C9": [113.39, 161.57],
    "C10": [79.37, 113.39],
    "RA0": [2437.8, 3458.27],
    "RA1": [1729.13, 2437.8],
    "RA2": [1218.9, 1729.13],
    "RA3": [864.57, 1218.9],
    "RA4": [609.45, 864.57],
    "SRA0": [2551.18, 3628.35],
    "SRA1": [1814.17, 2551.18],
    "SRA2": [1275.59, 1814.17],
    "SRA3": [907.09, 1275.59],
    "SRA4": [637.8, 907.09],
    "EXECUTIVE": [521.86, 756.0],
    "FOLIO": [612.0, 936.0],
    "LEGAL": [612.0, 1008.0],
    "LETTER": [612.0, 792.0],
    "TABLOID": [792.0, 1224.0]
}
let sise = Object.keys(sizez)
   let q = m.quoted ? m.quoted : m 
   let mime = (q.msg || q).mimetype || '' 
   if (!mime) throw 'Tidak ada media yang ditemukan' 
   if (text.length > 12) throw `terlalu panjang, maksimal 12 karakter!`
   let media = await q.download() 
   let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime) 
   let link = await (isTele ? uploadImage : uploadFile)(media) 
   let data = await toPDF.link.buffer()
 conn.reply(m.chat, '*WAIT! | Mohon Tunggu Sebentar...*', m)
await conn.sendMessage(m.chat, { document: data, mimetype: 'application/pdf', fileName: `${text}` }, { quoted: fvdocs })
 } 
 handler.help = ['topdf <reply image>'] 
 handler.tags = ['tools'] 
 handler.command = /^(topdf)$/i 

 handler.limit = true 

 export default handler

async function toPDF(images = [], size = "A4") {
    return new Promise(async (resolve, reject) => {
        if (!Array.isArray(images)) throw new TypeError("Gambar itu berada di array");
        let _size = sise[size];
        if (!_size) throw new Error("Size nya berapa?");
        let buffs = [];
        const doc = new pdfkit({ margin: 0, size: sizes[size] });
        for (let img of images) {
            const resp = await fetch(img);
            const data = await resp.buffer();
            doc.image(data, 0, 0, {
                fit: _size,
                align: "center",
                valign: "center",
            });
            doc.addPage();
        }
        doc.on("data", (chunk) => buffs.push(chunk));
        doc.on("end", () => resolve(Buffer.concat(buffs)));
        doc.on("error", (err) => reject(err));
        doc.end();
    });
}


/*import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix: _p, command }) => { 
  if (!text) throw `Kirim perintah : ${_p}${command} [nama file]
Contoh : ${_p}${command} Tugas Matematika`
let fvdocs = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net', remoteJid: 'status@broadcast',}, message: { documentMessage: { title: 'AngelDark Team\nAuthor Silence Bot', jpegThumbnail: await (await fetch('https://telegra.ph/file/7e7cfe296f425f81c4e6f.jpg')).buffer()}}}
   let q = m.quoted ? m.quoted : m 
   let mime = (q.msg || q).mimetype || '' 
   if (!mime) throw 'Tidak ada media yang ditemukan' 
   if (text.length > 12) throw `terlalu panjang, maksimal 12 karakter!`
   let media = await q.download() 
   let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime) 
   let link = await (isTele ? uploadImage : uploadFile)(media) 
   let data =await (await fetch(`https://api.xteam.xyz/imagetopdf?url=${link}&APIKEY=bf8ff984af1506b7`)).buffer() 
 conn.reply(m.chat, '*WAIT! | Mohon Tunggu Sebentar...*', m)
await conn.sendMessage(m.chat, { document: data, mimetype: 'application/pdf', fileName: `${text}` }, { quoted: fvdocs })
 } 
 handler.help = ['topdf <reply image>'] 
 handler.tags = ['tools'] 
 handler.command = /^(topdf)$/i 

 handler.limit = true 

 export default handler*/