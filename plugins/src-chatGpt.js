import fetch from "node-fetch"

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Input Teks"
    try {
            await m.reply(wait)
            let res = await ChatGpt(text)
            await m.reply(res)
    } catch (e) {
        throw eror
    }
}
handler.help = ["chatgpt"]
handler.tags = ["internet"]
handler.command = /^chatgpto$/i

export default handler

/* New Line */
async function ChatGpt(input) {
  let apiURL = 'https://chatgptonline.ai/wp-json/ai-chatbot/v1/chat';
let restNonce = 'f7c4ee2f52';
let service = 'openai';
let session = 'N/A';
let mode = 'chat';
let model = 'gpt-3.5-turbo';
const data = {
    env: 'chatbot',
    prompt: input,
    session: 'N/A',
    newMessage: input,
    model: model,
    maxResults: 1,
    apiKey: '',
    service: service,
    clientId: Math.random().toString(36).substring(2)
}
let res = await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce': restNonce,
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    if (res.answer) {
    return res.answer
    } else return res.message
}