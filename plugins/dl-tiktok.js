/*import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
    let name = m.pushName
    let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${name}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    try {
        let res = (await axios.get(API('https://api.malesin.xyz', '/tiktok', {url: args[0]}))).data;
        if (res.status !== 200) throw res.message;
        let video = res.data.video.url
        
        await conn.sendFile(m.chat, video, 'Tiktok.mp4', `*Username :* ${res.data.author}\n*Description :* ${res.data.description}\n\n*©By :* ${res.creator}`, m)
    } catch (err) { 
        console.log(err)
        throw err
    }
}
    
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|tiktokdl|tt|ttdl)$/i

export default handler*/





import axios from 'axios'
import cheerio from 'cheerio'
var handler = async (m, { conn, args}) => {
let name = conn.getName(m.sender)
let fpay = {
				"key": {
					"remoteJid": "0@s.whatsapp.net",
					"fromMe": false,
					"id": "BAE595C600522C9C",
					"participant": "0@s.whatsapp.net"
				},
				"message": {
					"requestPaymentMessage": {
						"currencyCodeIso4217": wm,
						"amount1000": fsizedoc,
						"requestFrom": "0@s.whatsapp.net",
						"noteMessage": {
							"extendedTextMessage": {
								"text": "Hai Kak " + name
							}
						},
						"expiryTimestamp": fsizedoc,
						"amount": {
							"value": fsizedoc,
							"offset": fsizedoc,
							"currencyCode": wm
						}
					}
				}
			}
  if (!args[0]) throw 'Uhm...url nya mana?'
    const { thumbnail, video, audio } = await tiktokdl(args[0])
    const url = video
    if (!url) throw 'Can\'t download video!'
    await conn.sendMessage(m.chat, { video: { url: url }}, '® FuadXy', fpay)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^t(iktok(d(own(load(er)?)?|l))?|td(own(load(er)?)?|l))$/i

export default handler 

async function tiktokdl (url) {
    if (!/tiktok/.test(url)) return error.link;
    const gettoken = await axios.get("https://tikdown.org/id");
    const $ = cheerio.load(gettoken.data);
    const token = $("#download-form > input[type=hidden]:nth-child(2)").attr(
        "value"
    );
    const param = {
        url: url,
        _token: token,
    };
    const {
        data
    } = await axios.request("https://tikdown.org/getAjax?", {
        method: "post",
        data: new URLSearchParams(Object.entries(param)),
        headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
        },
    });
    var getdata = cheerio.load(data.html);
    if (data.status) {
        return {
            status: true,
            thumbnail: getdata("img").attr("src"),
            video: getdata("div.download-links > div:nth-child(1) > a").attr("href"),
            audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"),
        };
    } else
        return {
            status: false,
        };
};