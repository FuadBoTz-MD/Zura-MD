import fs from 'fs'
import fetch from 'node-fetch'
import { createHash } from 'crypto'
let handler  = async (m, { conn, text, usedPrefix: _p }) => {

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: 'https://instagram.com/_alv.stn' },
            fileName: global.wm,
            mimetype: td, 
            fileLength: '9999999999',
            pageCount: '1',
            contextInfo: {
            externalAdReply: {
            thumbnail: await (await fetch(thumb)).buffer(), 
            mediaUrl: sig,
            mediaType: 2,
            title: null,
            body: null,
            sourceUrl: 'https://youtube.com'}},
            caption: wm2,
            footer: `Oitt... ${stickpack} Aktif Kok! Mwehehe`,
            templateButtons: [
            {
            urlButton: {
            displayText: 'My Owner',
            url: 'https://wa.me/6287734910547?text=Hallo+Brow+wkwkwk'
       }
      }
    ]
            headerType: 6}
            
conn.sendMessage(m.chat, message, { quoted:m})
}
handler.customPrefix = /^(halo|hallo|test|tes)$/i
handler.command = new RegExp

export default handler