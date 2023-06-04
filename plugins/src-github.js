/**
  * Jangan Dihapus Kontol
  * GitHub Search Updated By Kyami
  * WhatsApp: wa.me/6287734910547
  * Github: https://github.com/ShionMDv
**/

import MessageType from '@adiwajshing/baileys'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let name = conn.getName(m.sender)
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
try {
if (!text) throw `Masukan Nama Repositori Github!\nContoh: ${usedPrefix + command} ShionMDv`
let res = await fetch(global.API('https://api.github.com', '/search/repositories', { q: text }))
let json = await res.json()
if (res.status !== 200) throw json
let str = json.items.map((repo, index) => {
return `
▢ 📦 Result: ${1 + index}
▢ 📎 Link: ${repo.html_url}
▢ 🍁 Creator: ${repo.owner.login}
▢ 🔍 Repo Name: ${repo.name}
▢ 📅 Create: ${formatDate(repo.created_at)}
▢ ⏱️ Updated: ${formatDate(repo.updated_at)}
▢ 👀 Watching: ${repo.watchers}
▢ ⚜️ Forks: ${repo.forks}
▢ ⭐ Stars: ${repo.stargazers_count}
▢ 🎭 Issues: ${repo.open_issues}
▢ 📓 Description: ${repo.description ? `${repo.description}` : 'Tanpa deskripsi'}
▢ 🥃 Clone: ${repo.clone_url}
`.trim()})
let anunya = json.items.map((repo) => { return `https://github.com/${repo.owner.login}/${repo.name}`})
conn.reply(m.chat, `*ɢɪᴛʜᴜʙ sᴇᴀʀᴄʜ*\n` + str, fkon, m)
} catch {
    m.reply('*_Tidak Ditemukan_*')
  }
}
handler.help = ['githubsearch'].map(v => v + '')
handler.tags = ['internet']

handler.command = /^(githubsearch|ghs)$/i
handler.register = true

export default handler 

function formatDate(n, locale = 'id') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }