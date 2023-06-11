import moment from 'moment-timezone'
import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
   let res = await fetch('https://api.github.com/repos/ShionMDv/ShionMDv')
   let pp = 'https://telegra.ph/file/344ca06078289bb8fe8dc.jpg'
   let link = 'https://chat.whatsapp.com/EAR7T7H59vOJz8KcwMP179'
   let json = await res.json()

let info = `
*乂  I N F O  -  S C R I P T*

    ◦  *Name* : ${json.name}
    ◦  *Visitor* : ${json.watchers_count}
    ◦  *Size* : ${(json.size / 1024).toFixed(2)} MB
    ◦  *Updated* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}
    ◦  *Url* : ${json.html_url}
    ◦  *Base :* github.com/Jikarinka
    
    ${json.forks_count} Forks · ${json.stargazers_count} Stars · ${json.open_issues_count} Issues
  

 *N o t e :*
• *sᴄʀɪᴘᴛ ɪɴɪ ʀᴀᴡᴀɴ ᴅɪ ᴊᴜᴀʟ ᴋᴀʀᴇɴᴀ ʙᴇʀɪsɪ ғɪᴛᴜʀ² ʟᴀɴɢᴋᴀ!*
• ᴏʟᴇʜ ᴋᴀʀᴇɴᴀ ɪᴛᴜ ᴋᴀᴍɪ ᴍᴇᴍᴘʀɪᴠᴀᴛ sᴄʀɪᴘᴛ ʙᴏᴛ ɪɴɪ ( ! )
• ɢᴀʙᴀᴋᴀʟ ᴅɪ ᴋᴀsɪʜ ᴡᴀʟᴀᴜ ɴɢᴇᴍɪs² :ᴠ
• ᴊɪᴋᴀ ᴍᴇɴᴇᴍᴜᴋᴀɴ ʙᴜɢ ᴅɪ sᴄʀɪᴘᴛ, ʜᴀʀᴀᴘ ʟᴀᴘᴏʀ ᴏᴡɴᴇʀ
• ʙᴏᴛ sᴇᴡᴀ ᴏɴʟʏ ʙᴜᴋᴀɴ ʙᴏᴛ ɢʀᴀᴛɪsᴀɴ, ᴋᴀʟᴏ ᴍᴀᴜ ᴍᴇᴍᴀsᴜᴋᴋᴀɴ ᴋᴇ ɢʀᴜᴘ ʟᴀɪɴ ᴍɪɴᴛᴀ ɪᴢɪɴ ᴏᴡɴᴇʀ ᴅᴜʟᴜ ʏᴀ :)
`
await conn.reply(m.chat, info, m, { mentions: [m.sender], contextInfo: { forwardingScore: 9999, isForwarded: true, externalAdReply :{ mediaType: 1, mediaUrl: pp, title: '乂 ғᴜᴀᴅ-ᴍᴅ ᴠ⁷彡', thumbnail: { url: pp }, thumbnailUrl: pp, sourceUrl: link, renderLargerThumbnail: true }}})
}

handler.help = ['scbot']
handler.tags = ['info']
handler.command = /^sc(ript(bot)?|bot)?$/i
export default handler