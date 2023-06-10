const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i;

export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return true;
    if (!m.isGroup)
        return false;

    let chat = global.db.data.chats[m.chat];
    let bot = global.db.data.settings[this.user.jid] || {};
    let named = conn.getName(m.sender);
    let fkon = {
        key: {
            fromMe: false,
            participant: `${m.sender.split('@')[0]}@s.whatsapp.net`,
            ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {})
        },
        message: {
            contactMessage: {
                displayName: `${named}`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${named}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        }
    };
    let hapus = m.key.participant;
    let bang = m.key.id;
    let kled = 'https://telegra.ph/file/e949b3455fb6aa5b4f243.png';

    const isGroupLink = linkRegex.exec(m.text);

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
            if (m.text.includes(linkThisGroup))
                return true;
        }

        await this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        await conn.reply(m.chat, `*Gʀᴏᴜʙ Lɪɴᴋ Dᴇᴛᴇᴄᴛ!*${isBotAdmin ? '' : '\n\n_❬Bot Bukan Admin❭_'}`, m, {
            contextInfo: {
                isForwarded: false,
                forwardingScore: 9999,
                externalAdReply: {
                    mediaType: 1,
                    mediaUrl: kled,
                    title: `${wm} Ada yang ngirim link nih`,
                    thumbnail: { url: kled },
                    thumbnailUrl: kled,
                    renderLargerThumbnail: true
                }
            }
        });

        if (isBotAdmin && bot.restrict) {
        } else if (!bot.restrict) {
            return m.reply('Owner disable auto kick!');
        }
    }

    return true;
}