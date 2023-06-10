const cooldown = 300000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastadventure))
    if (user.health < 80) return m.reply(`
Requires at least 80 ❤️Healths for the adventure!!
please buy ❤️Healths first by typing *${usedPrefix}buy potion <quantity>*,
and type *${usedPrefix}heal <quantity>* to use potions
`.trim())
    if (new Date - user.lastadventure <= cooldown) return m.reply(`
You're already adventure!!, please wait *🕐${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = 'you\'ve been adventure and lost'
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}${lost}:* ${total}`
    }
    text += '\n\nBut you got'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n*${global.rpg.emoticon(rewardItem)}${rewardItem}:* ${total}`
    } 
    let pp = 'https://telegra.ph/file/aa5336e0d4f84a6e8ed18.jpg'
    await conn.reply(m.chat, text.trim(), m, { mentions: [who], contextInfo: { forwardingScore: 9999, isForwarded: true, externalAdReply :{ mediaType: 1, mediaUrl: pp, title: ' ', thumbnail: { url: pp }, thumbnailUrl: pp, sourceUrl: 'https://call.whatsapp.com/video/rX0OHKCdyxNvvypMT7FdqZ', renderLargerThumbnail: true }}})
    user.lastadventure = new Date * 1
}
handler.help = ['adventure', 'adv']
handler.tags = ['rpg']
handler.command = /^(adventure|adv)$/i

handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            money: 201,
            exp: 301,
            trash: 101,
            potion: 2,
            rock: 2,
            wood: 2,
            string: 2,
            common: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
            uncommon: [0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                )).fill(0)
            ),
            mythic: [0, 0, 0, 0, 0, 1, 0, 0, 0].concat(
                new Array(8 - (
                    (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                )).fill(0)
            ),
            legendary: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0].concat(
                new Array(10 - (
                    (user.dog > 8 && user.dog) || 4
                )).fill(0)
            ),
            iron: [0, 0, 0, 1, 0, 0],
            gold: [0, 0, 0, 0, 0, 1, 0],
            diamond: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            health: 101 - user.cat * 4
        }
    }
    return rewards
}