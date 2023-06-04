import fetch from 'node-fetch'
import fs from 'fs'

export async function all(m) {
  let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/c42f32cb4ad09e3b983b0.png')
  let stc = await fs.readFileSync('./media/ress-bot.webp')

if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.sendMessage(m.chat, { sticker : stc, thumbnail: await( await fetch(pp)).buffer() , contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: sig,
title: 'Ada Apa......??',
body: wm,
sourceUrl: 'http://instagram.com/fuadxy99',
thumbnail: await( await fetch(pp)).buffer()
  }
 }}, { quoted: m })
          
        }
    } catch (e) {
        return
    }

                                
}