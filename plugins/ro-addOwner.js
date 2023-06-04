import fs from 'fs';
import path, { dirname } from 'path';
import { pathToFileURL, fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let handler = async (m, { conn, args }) => {
    const json = JSON.parse(fs.readFileSync("./src/owner.json", "utf-8"));
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0] ? args[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : null;
    else who = args[0] ? args[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : null;
    if (!who) throw "Siapa yg mau diangkat jadi owner?";
    if (json.find(v => v[0] == who.split('@')[0])) throw `${await conn.getName(who)} sudah menjadi owner!`;
    json.push([`${who.split("@")[0]}`]); // push to json
    fs.writeFileSync("./src/owner.json", JSON.stringify(json, null, 2)); // write to json
    await m.reply(`@${who.split("@")[0]} sekarang owner!`);

    let file = pathToFileURL(path.join(__dirname, "../config.js")).href;
    import(`${file}?update=${Date.now()}`).then(() => console.log("reload config file done"));
};
handler.help = ['addowner @user']
handler.tags = ['developer']
handler.command = /^(addown|addowner|ao)$/i

handler.rowner = true

export default handler