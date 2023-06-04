/*
 * Don't Delete!
 * Updated By Kyami
 * Github: https://github.com/ShionMDv
 * WhatsApp: wa.me/6287734910547
 */

import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let type = (command).toLowerCase()
switch (type) {

  case 'waifu':
  case 'megumin':
  case 'neko':
    let res = await fetch(`https://api.waifu.pics/sfw/${command}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, `Random ${command}`, wm, json.url, [['▷▷ Next', `${usedPrefix + command}`]], m) 
break


default:
 }
}

handler.help = ['waifu', 'neko', 'megumin']
handler.tags = ['anime']
handler.command = ['waifu', 'neko', 'megumin'] 
handler.register = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
