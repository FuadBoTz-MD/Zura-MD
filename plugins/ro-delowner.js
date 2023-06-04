let handler = async (m, { conn, args }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0]?.replace(/[^0-9]/g, '');
    else who = args[0] ? args[0].replace(/[^0-9]/g, '') : m.chat;
    if (!who) throw 'Tag orangnya!';
    
    // Periksa apakah pengguna adalah owner
    let ownerIndex = owner.findIndex(v => v[0] === who.split('@')[0]);
    if (ownerIndex === -1) throw 'Dia bukan Owner!';
    
    // Hapus owner dari daftar owner
    owner.splice(ownerIndex, 1);
    
    conn.reply(m.chat, `@${who.split('@')[0]} Sekarang bukan owner!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    });
};

handler.help = ['delowner [@user]'];
handler.tags = ['developer'];
handler.command = /^((remove|hapus|-|del)own(er?)?)$/i;
handler.rowner = true;

export default handler;