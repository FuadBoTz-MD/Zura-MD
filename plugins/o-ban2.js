let { MessageType, proto } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, usedPrefix }) => {
    
    let them = `https://telegra.ph/file/11e3e914045115de76095.jpg`
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

  var hl = []
  hl[0] = text.split('|')[0]
  hl[0] = no(hl[0]) + "@s.whatsapp.net"
  hl[1] = text.split('|')[1]
  
  if (!text) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• ${usedPrefix}ban2 number|days\n*Example:* ${usedPrefix}ban2 6289654360447|99\n\n• ${usedPrefix}ban2 @tag|days\n*Example:* ${usedPrefix}ban2 @6289654360447|99`, m)
  if (typeof db.data.users[hl[0]] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  let mampos = `*TERBANNED!!*\n\nawoakwok Dibanned Owner Kan Luh:v MAMPOS!\n\nKamu *@${hl[0].split('@')[0]}* di banned selama *${hl[1]} HARI*.`
  var jumlahHari = 86400000 * hl[1]
  // var jumlahHari = 1000 * text
  var now = new Date() * 1
  global.db.data.users[hl[0]].banned = true
  if (now < global.db.data.users[hl[0]].bannedDate) global.db.data.users[hl[0]].bannedDate += jumlahHari
  else global.db.data.users[hl[0]].bannedDate = now + jumlahHari

  await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: fsizedoc,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: mampos,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
     //® FuadXy
  await conn.relayMessage(hl[0],  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: fsizedoc,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: mampos,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
} /* Jangan Dihapus Su Kentod
   * By ᴋʏᴀᴍɪ×͜×࿐ dave×͜×࿐
   * Remaked 2023 For People I Trust :)
   */
handler.help = ['ban2 @tag|days']
handler.tags = ['owner']
handler.command = /^ban2$/i
handler.owner = true
handler.fail = null

export default handler 

function msToDate(ms) {
 let days = Math.floor(ms / (24*60*60*1000));
 let daysms = ms % (24*60*60*1000);
 let hours = Math.floor((daysms)/(60*60*1000));
 let hoursms = ms % (60*60*1000);
 let minutes = Math.floor((hoursms)/(60*1000));
 let minutesms = ms % (60*1000);
 let sec = Math.floor((minutesms)/(1000));
  return days+"H "+hours+"J "+ minutes + "M";
  // +minutes+":"+sec;
}