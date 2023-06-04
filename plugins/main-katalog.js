let handler = async (m, { conn }) => {
    let url = tesa[Math.floor(Math.random() * tesa.length)]
    let cums = await(await fetch(url)).buffer()
    
conn.relayMessage(m.chat, {
  productMessage: {
    product: {
      productImage: cums,
      productId: '5337910042992327',
      title: 'tes',
      description: 'Luwh Mawu Ngapain Dah?:v',
      productImageCount: 1
    },
    businessOwnerJid: '120363042769504712@s.whatsapp.net'
  }
}) }
handler.help = ['katalog']
handler.tags = ['main']
handler.command = /^(katalog)$/i
export default handler

global.tesa = [
    "https://cdn.discordapp.com/attachments/993030102415851563/1016341372694966412/Untitled97"
    ]