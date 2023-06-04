//APIkey asli open ai
/*import { Configuration, OpenAIApi } from "openai";
import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    
    let name = conn.getName(m.sender);
    let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${name}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}};
    if (!text) throw `Contoh:\n${usedPrefix + command} Apa itu OpenAI`
    const configuration = new Configuration({
        apiKey: "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" //api key bisa didapatkan dari https://openai.com/api/
    });
    const openai = new OpenAIApi(configuration);
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: text,
                temperature: 0,
                max_tokens: 3000,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0
            });
                conn.reply(m.chat, response.data.choices[0].text, fkontak)
}
handler.help = ['ai <pertanyaan>']
handler.tags = ['internet']
handler.command = /^(ai)$/i
handler.premium = true

export default handler*/

/**
 * 
 * By: Author Silence Bot
 * Github: CyexMD
 * 
 */


// Kalo pake API link replit
import { Configuration, OpenAIApi } from "openai"
import fs from 'fs'
import fetch from 'node-fetch'

var handler = async (m, { conn, usedPrefix, command, text }) => {
let aikey = await fetch(`https://ShinjiranaiWa.kaizax.repl.co`)
let ai = await aikey.json()
let keys = ai.key
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName[who]
let fpay = { "key": { "remoteJid": "0@s.whatsapp.net", "fromMe": false, "id": "BAE595C600522C9C", "participant": "0@s.whatsapp.net"},
"message": {
"requestPaymentMessage": {
"currencyCodeIso4217": wm,
"amount1000": '99999999999999',
"requestFrom": "0@s.whatsapp.net",
"noteMessage": {
"extendedTextMessage": { "text": "𝑭𝒖𝒂𝒅𝑿𝒚 \n® 𝑩𝒚 𝓕𝓾𝓪𝓭𝓧𝔂 "}},
"expiryTimestamp": '99999999999999',
"amount": { "value": '99999999999999', "offset": '99999999999999', "currencyCode": wm }}}}
try {
  if (!text) return m.reply(`Chat dengan AI.\n\nContoh:\n${usedPrefix}${command} Halo? `);
  let configuration = new Configuration({
      apiKey: `${keys}`,});
  let openai = new OpenAIApi(configuration);
  let response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      temperature: 0,
      max_tokens: 2048,
      top_p: 1,
      presence_penalty: 0});
conn.reply(m.chat, response.data.choices[0].text, fpay);
} catch (error) {
if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
    console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
  console.log(error);
  m.reply("error" + error.message);
}}
}
handler.help = ['fuadxy <pertanyaan>']
handler.tags = ['internet']
handler.command = /^(fuadxy)$/i
handler.premium = true

export default handler