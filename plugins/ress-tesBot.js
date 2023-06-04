import fs from 'fs'

import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix: _p }) => {

let info = `Ada Apa Broo...? (｡>_<｡)`



let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'


await conn.sendPresenceUpdate('composing', m.chat)
conn.reply(m.chat, info, m, { quoted: fgif },{ contextInfo: { externalAdReply: { showAdAttribution: true,
      mediaUrl: "https://Instagram.com/fuadxy99",
      mediaType: 2,
      description: "https://Instagram.com/fuadxy99", 
      title: global.titlebot,
      body: wm,
      thumbnail: thumb,
      sourceUrl: sig  }}})

}

handler.customPrefix = /^(tes|tess|test)$/i

handler.command = new RegExp



export default handler