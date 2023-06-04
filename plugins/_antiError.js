let handler = m => m

handler.all = async function (m) {
    let user = global.db.data.users[m.sender]
    let chat = db.data.chats[m.chat]
    if ((user.money * 1) > 999999999999) {
        user.money = 999999999999
    } else if ((user.money * 1) < 0) {
        user.money = 0
    }
    if ((user.health * 1) > 200) {
        user.health = 200
    } else if ((user.money * 1) < 0) {
        user.health = 0
    }
    if ((user.level * 1) > 15000) {
        user.level = 15000
    } else if ((user.money * 1) < 0) {
        user.health = 0
    }
    if ((chat.expired * 1) < 0) {
        chat.expired = 0
    } else if ((chat.expired * 1) < 0) {
        chat.expired = 0
    }
}

export default handler