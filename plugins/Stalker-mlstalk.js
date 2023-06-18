import axios from 'axios'
let handler = async (m, { conn, args, text, usedPrefix, command  }) => {
if (!text) return m.reply(`Contoh ${usedPrefix+command} 530793138|8129`)
m.reply(md)
let dat = await mlstalk(text.split("|")[0], text.split("|")[1])
m.reply(`*/ STALKING MOBILE LEGEND \\*

Username : ${dat.userName}
Id : ${text.split("|")[0]}
Zoneid : ${text.split("|")[1]}`)
}
handler.help = ['mlstalk'].map(v => v + ' <id>')
handler.tags = ['stalker']
handler.limit = true
handler.command = /^(mlstalk)$/i
export default handler
async function mlstalk(id, zoneId) {
    return new Promise(async (resolve, reject) => {
      axios
        .post(
          'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
          new URLSearchParams(
            Object.entries({
              productId: '1',
              itemId: '2',
              catalogId: '57',
              paymentId: '352',
              gameId: id,
              zoneId: zoneId,
              product_ref: 'REG',
              product_ref_denom: 'AE',
            })
          ),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Referer: 'https://www.duniagames.co.id/',
              Accept: 'application/json',
            },
          }
        )
        .then((response) => {
          resolve(response.data.data.gameDetail)
        })
        .catch((err) => {
          reject(err)
        })
    })
}