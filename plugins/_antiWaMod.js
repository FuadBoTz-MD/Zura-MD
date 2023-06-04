import navigator from 'navigator'

let handler = async (m) => {
let user = m.quoted ? m.quoted.sender : null
let info = await waMod(user)
await m.reply(`Is WaMod: ${info == true ? '✅' : '❌'}`)
}

handler.command = /^(wamod)$/i
export default handler

async function waMod() {
   if (navigator.userAgent.indexOf("WhatsApp") > -1) {
   return true;
  } else {
    return false;
  }
 }