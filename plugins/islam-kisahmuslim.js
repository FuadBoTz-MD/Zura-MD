import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  
let res = await fetch('https://api.zahwazein.xyz/islami/kisahmuslim?apikey=85345ee3d9de')
    let x = await res.json()    
    await m.reply(`Wait..`)
    let ucp = `${cmenut} Kisah Muslim ${htka}
${cmenub} judul : ${x.result.Judul}
${cmenuf}
Cerita : 
${x.result.Cerita} :

${wm}`
let cap = '*Kisah Nabi*'
conn.sendButton(m.chat, cap, ucp, await(await fetch(x.result.image)).buffer(),[['Menu', '.menuv1'],[ 'Next', '.kisahnabi']], m)
 //   await conn.sendButtonImg(m.chat, json.result.thumbnail, txt, wm, `Again`, `.ceritahoror`, m)
}
handler.help = ['kisahmuslim']
handler.tags = ['quran']
handler.command = /^kisahmuslim$/i


export default handler