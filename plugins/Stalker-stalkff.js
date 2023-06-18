import axios from 'axios'
let handler = async (m, { conn, text }) => {
if (!text) throw 'Input your ID?'
let result = await stalkff(text)
m.reply(`*/ STALKING FREE FIRE \\*

Nama: ${result.nickname}
ID: ${text}`)
}
handler.help = ['stalkff'].map(v => v + ' <id>')
handler.tags = ['stalker']
handler.command = /^(stalkff|epep|idfreefire|idff)$/i
handler.limit = true
export default handler 
async function stalkff(text) {
  var datap = {
    "voucherPricePoint.id": 8050,
    "voucherPricePoint.price": "",
    "voucherPricePoint.variablePrice": "",
    "email": "",
    "n": "",
    "userVariablePrice": "",
    "order.data.profile": "",
    "user.userId": text,
    "voucherTypeName": "FREEFIRE",
    "affiliateTrackingId": "",
    "impactClickId": "",
    "checkoutId": "",
    "tmwAccessToken": "",
    "shopLang": "in_ID",
  }
  var epep = await axios({
    "headers": {
    "Content-Type": "application/json; charset\u003dutf-8"
    },
    "method": "POST",
    "url": "https://order.codashop.com/id/initPayment.action",
    "data": datap
  })
  return {
    id: text,
    nickname: epep.data["confirmationFields"]["roles"][0]["role"]
  }
}