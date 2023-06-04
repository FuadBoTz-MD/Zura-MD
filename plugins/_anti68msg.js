let handler = m => m

handler.all = async function (m, { conn, isAdmin, isBotAdmin }) {
    if (m.messageStubType === 68)
    let chat = global.db.data.chats[m.chat]
    let sender = global.db.data.chats[m.sender]
        if (!isAdmin) {
          if (isBotAdmin) {
       this.sendMessage(m.chat, { delete: m.key }) 
        
      }
    }
}

export default handler