import axios from "axios"
import {
    sticker
} from "../lib/sticker.js"
import {
    JSDOM
} from "jsdom"
import wibusoft from "wibusoft"

let handler = async (m, {
    conn,
    args,
    text,
    usedPrefix,
    command
}) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
	let query = "input text\nEx. .flammingtext hello world\n<command> <tex>"
	
	let urut = text.split`|`
  let one = urut[0]
  let two = urut[1]
  let three = urut[2]
  
  if (command == "flammingtheme") {
  if (!one) throw "input query\nContoh:\n.flammingtext Fire|2"
  if (!two) throw "input page"
  let TEXT_STYLES = await searchImageUrl(one, two)
  let listSections = []
	Object.values(TEXT_STYLES).map((v, index) => {
    let vendor = v.value
	listSections.push(vendor)
  })
  var listnya = listSections.map((v, index) => { return `[ ${++index} ] ${v.split(/[\s/?]+/)[2]}` }).join('\n')
  await m.reply("*L I S T - T E M A*\nContoh:\n.flammingtext Design-Fire|hello guys\n\n" + listnya)
  }
  
  if (command == "flammingtext") {
  if (!one) throw "input design\nContoh:\n.flammingtext Design-Fire|hello guys\nketik *.flammingtheme* query|page untuk mencari list tema"
  if (!two) throw "input text"
  await m.reply(wait)
    let result = await getImageUrl(one, two)
    try {
        let out = await wibusoft.tools.makeSticker(result.image, {
            author: packname,
            pack: name,
            keepScale: true
        })
        await m.reply(out)
    } catch (e) {
        let stick = await sticker(buffer, false, name, packname)
        await conn.sendFile(m.chat, stick, "flammingtext.webp", "", m)
    }
  }
}
handler.help = ["flammingtext"]
handler.tags = ["misc"]
handler.command = /^(flammingtext|flammingtheme)$/i
export default handler

async function getImageUrl(textStyleId, text) {
  try {
  var data = {
    image: '',
    status: false
  }
  var html = 'https://api.flamingtext.com/logo/' + textStyleId + '?_variations=true&text='
  var loc = '&_loc=catdynamic'
  var query = text
  var client_uri = html + encodeURIComponent(query) + loc
  var data_uri = await axios.get(client_uri)
  var find_sc = data_uri.data.split('ft-justify-grid-item">')[2].split('href="')[1].split('" class')[0].replace('amp;', '')
  var get_image = await axios.get('https://api.flamingtext.com' + find_sc)
  var payload = get_image.data.split('alt="Image')[1].split('src="')[1].split('" />')[0]
  
  data.image = payload
  data.status = true
  return data;
  } catch (e) {
    console.error(e);
    throw new Error("Something went wrong getting Word Art");
  }
}

async function searchImageUrl(textStyle, page) {
let res = await fetch('https://api.flamingtext.com/Cool-Text-Generator/page' + page + '?text=' + textStyle)
    let html = await res.text()
    let dom = new JSDOM(html)
    
// Mengambil semua elemen HTML
let htmlCollection = dom.window.document.getElementsByTagName('a');

// Membuat array kosong untuk menampung hasil
let jsonArray = [];

// Melakukan looping melalui semua elemen HTML
for (let i = 0; i < htmlCollection.length; i++) {
// Mengambil tag dan nilai dari setiap elemen HTML
if (htmlCollection[i].href.startsWith('/logo')) {
let tagName = htmlCollection[i].tagName;
let value = htmlCollection[i].href;

// Membuat objek JSON untuk setiap elemen HTML
let jsonObject = {
tag: tagName,
value: value
};

// Menambahkan objek JSON ke array JSON
jsonArray.push(jsonObject);
}
}

// Mengembalikan array JSON sebagai hasil akhir
return jsonArray
}