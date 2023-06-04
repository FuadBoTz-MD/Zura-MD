import cp from 'child_process';
import { exec as _exec } from 'child_process';
import { promisify } from 'util';

let exec = promisify(_exec).bind(cp);

let handler = async (m, { conn, isROwner, usedPrefix, command, text }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    await m.reply(global.wait);
    if (!isROwner) return;
    let ar = Object.keys(plugins);
    let ar1 = ar.map(v => v.replace('.js', ''));
    let teks = `@${who.split("@")[0]} Telah melalukan ${usedPrefix + command} ${text}`;
    if (!text) throw `uhm.. where the text?\n\nexample:\n${usedPrefix + command} info`;
    if (!ar1.includes(text)) return m.reply(`*🗃️ NOT FOUND!*\n==================================\n\n${ar1.map(v => ' ' + v).join`\n`}`);
    let o;
    try {
        o = await exec('cat plugins/' + text + '.js');
        conn.reply(global.nomorbot + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
            contextInfo: {
                mentionedJid: [who]
            }
        });
    } catch (e) {
        o = e;
    } finally {
        let { stdout, stderr } = o;
        if (stdout.trim()) m.reply(stdout);
        if (stderr.trim()) m.reply(stderr);
    }
};

handler.help = ['getplugin'].map(v => v + ' <text>');
handler.tags = ['developer'];
handler.command = /^(getplugin|gp)$/i;
handler.rowner = true;

export default handler;