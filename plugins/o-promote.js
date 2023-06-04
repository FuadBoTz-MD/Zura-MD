/* Creditos a https://github.com/unptoadrih15/UPABOT-MD */

let handler = async (m, { conn, isAdmin }) => {  
if (m.fromMe) return
if (isAdmin) throw 'Only Owner'
try {  
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
} catch {
await m.reply('Sucsess.....')}}
handler.help ['opromote']
handler.tags ['owner']
handler.command = /^opromote$/i
handler.owner = true
handler.group = true
handler.botAdmin = true
export default handler