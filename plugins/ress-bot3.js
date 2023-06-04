let handler = async (m, { conn }) => {
let url = 'https://telegra.ph/file/be72e35ed0a4ccf55e21d.jpg'
conn.sendButtonLoc(m.chat, url, 'Jangan Spam Bot Ya Kntl', wm, 'MENU', '.menu', m)
}
handler.command = ['rules2']

export default handler