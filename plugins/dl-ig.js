var handler = async (m, { args }) => {
    if (!args[0]) throw 'Input URL'
    try { 
    	let res = await bochil.instagramdlv2(args[0]) 
    let media = await res[0].url
    if (!res) throw 'Can\'t download the post'
    m.reply('_In progress, please wait..._')
    conn.sendMessage(m.chat, { video : { url : media }}, m) 
    } catch {
     try {
     	let res2 = await bochil.instagramdlv3(args[0]) 
   let media2 = res2.url
   let cap = res2.title
     return this.sendFile(m.chat, media, 'instagram.mp4', cap, m)
     } finally {
   }
  }
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?)$/i

export default handler