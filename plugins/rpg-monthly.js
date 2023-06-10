const rewards = {
    exp: 50000,
    money: 49999,
    potion: 10,
    mythic: 3,
    legendary: 1
};

let pp = 'https://telegra.ph/file/af95778da909961bf0841.jpg';
const cooldown = 2592000000;

let handler = async (m, { usedPrefix }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[m.sender];
    if (new Date() - user.lastmonthly < cooldown) {
        return m.reply(`*–––––『 COOLDOWN 』–––––*
ʏᴏᴜ'ᴠᴇ ᴀʟʀᴇᴀᴅʏ ᴄʟᴀɪᴍᴇᴅ *ᴍᴏɴᴛʜʟʏ ʀᴇᴡᴀʀᴅs*, ᴩʟᴇᴀsᴇ ᴡᴀɪᴛ ᴛɪʟʟ ᴄᴏᴏʟᴅᴏᴡɴ ғɪɴɪsʜ.\n\n⏱️ ${((user.lastmonthly + cooldown) - new Date()).toTimeString()}`);
    }

    let text = '';
    for (let reward of Object.keys(rewards)) {
        if (reward in user) {
            user[reward] += rewards[reward];
            text += `⮕ ${rpg.emoticon(reward)} ${reward}: ${rewards[reward]}\n`;
        }
    }

    let anunya = `*––––––『 MONTHLY 』––––––*
🔖 ᴍᴏɴᴛʜʟʏ ʀᴇᴡᴀʀᴅ ʀᴇᴄᴇɪᴠᴇᴅ :\n${text}`;

    await conn.reply(m.chat, anunya, m, {
        mentions: [who],
        contextInfo: {
            forwardingScore: 9999,
            isForwarded: true,
            externalAdReply: {
                mediaType: 1,
                mediaUrl: pp,
                title: ' ',
                thumbnail: { url: pp },
                thumbnailUrl: pp,
                sourceUrl: 'https://call.whatsapp.com/video/rX0OHKCdyxNvvypMT7FdqZ',
                renderLargerThumbnail: true
            }
        }
    });

    user.lastmonthly = new Date() * 1;
};

handler.help = ['monthly'];
handler.tags = ['rpg'];
handler.command = /^(monthly)$/i;
handler.cooldown = cooldown;

export default handler;