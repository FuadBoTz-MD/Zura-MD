// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -
// • Allah SWT
// • FuadXy (Me)
// • Kyami
// • Davegkw
// • Dll
import { watchFile, unwatchFile, readFileSync } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*⫘⫘⫘⫘ WAKTU ⫘⫘⫘⫘⫘*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

/*⫘⫘⫘⫘⫘ MEDIA SOSIAL ⫘⫘⫘⫘*/
global.sig = 'https://www.instagram.com/fuadxy99' //Instagram mu
global.sgh = 'https://github.com/FuadBoTz-MD' //Github mu
global.sgc = 'https://chat.whatsapp.com/EAR7T7H59vOJz8KcwMP179' //Group WhatsApp mu
global.sdc = '----' //Discord Mu
global.snh = 'https://nhentai.net/g/365296/' //Make ini ana gausah di ganti.

/*⫘⫘⫘⫘ALL PAYMENT⫘⫘⫘⫘⫘*/
global.pdana = '083837709331' //Dana
global.povo = '083837709331' //Ovo
global.pgopay = '----' //Gopay
global.ppulsa = '083837709331' //Pulsa 
global.ppulsa2 = '085954708804' //Pulsa, Kalau nomor cuma 1, yg ini kasih tanda -
global.psaweria = 'Unavailable' //Saweria

/*⫘⫘⫘⫘ GLOBAL NOMOR ⫘⫘⫘⫘⫘*/
global.nomorbot = '6283837709331' //Nomor Bot mu
global.nomorown = '6285954708804' //Nomormu
global.namebot = '𝑭𝒖𝒂𝒅𝑩𝒐𝑻𝒛' //Nama bot mu
global.nameown = 'ī.am/𝕱𝖚𝖆𝖉𝖃𝖉×፝֟͜×࿐'
//Nama mu


/*⫘⫘⫘⫘ OWNER ⫘⫘⫘⫘⫘*/
global.owner = JSON.parse(readFileSync("./src/owner.json", "utf-8"));

/*⫘⫘⫘⫘ DEVELOPER ⫘⫘⫘⫘⫘*/
global.developer = [
  ['6283837709331'],  
  ['6285954708804', '𝑭𝒖𝒂𝒅𝑿𝒚࿐', true],
  ]
global.mods = [] // Ntar Tunggu Update Selanjutnya
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*⫘⫘⫘⫘ APIKEY ⫘⫘⫘⫘⫘*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  bsbt: 'https://bsbt-api-rest.herokuapp.com', 
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'NezukoTachibana281207',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Papah-Chan',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'gedFijw7',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Fa2GhFnr',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
// FREE APIKEY, WAJIB SUBSCRIBE:V
// kalau mau ganti apikey mu sendiri terserah

/*⫘⫘⫘⫘ WATERMAK ⫘⫘⫘⫘⫘*/
//GANTI JANGAN NGASAL.
global.wm = 'ī.am/𝕱𝖚𝖆𝖉𝖃𝖉×፝֟͜×' //Wm
global.wm2 = '┏━°⌜──⇌• 𝑭𝒖𝒂𝒅𝑩𝒐𝑻𝒛 •⇋──⌟°━┓' //Name Wm
global.wm3 = '- - ┈┈∘┈˃̶𝑭𝒖𝒂𝒅𝑩𝒐𝑻𝒛˂̶┈∘┈┈ --'
global.botdate = `🗓️️ 𝗗𝗮𝘁𝗲: ${week} ${date}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`
global.titlebot = 'IG:@fuadxy99' //Ganti serah lu
global.author = '𝑭𝒖𝒂𝒅𝑿𝒚࿐' //Wm author


/*⫘⫘⫘⫘ LOGO ⫘⫘⫘⫘⫘*/
// INI JUGA GANTI SETERAH MU
global.thumb = 'https://telegra.ph/file/32a3028e40c56d09efbb5.jpg' //Thumbnail nya
global.thumb2 = 'https://telegra.ph/file/8651406e637258fe27cef.jpg' //Thumbnail 2
global.thumb3 = 'https://telegra.ph/file/650100a8fd34069f3162f.jpg' //Thumbnail 3
global.myp = 'https://telegra.ph/file/a23bd29d62456a8846de9.jpg' //Thumb xp-my
global.darktzy = 'https://telegra.ph/file/93b22cdaf16e8c2b7ce83.jpg'
global.thumbbc = 'https://telegra.ph/file/1fcb0b336dd2eaea095fa.jpg' //Image Bcgcb
// global.giflogo = 'https://telegra.ph/file/8ace5460d97b5a575a248.jpg' //Bebas
global.intro = 'https://telegra.ph/file/cc045445603302e0d2a6f.jpg' //Tambahan Doang
global.mwife = 'https://telegra.ph/file/64bba9fa465e34bc38b7c.jpg' //Tambahan Doang

global.fla = [
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]
//global.fla Jangan di ganti

/*⫘⫘⫘⫘ LOADING ⫘⫘⫘⫘⫘*/
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」Loading...```'
global.eror = 'Acsess Denied!'

/*⫘⫘⫘⫘ DOCUMENT ⫘⫘⫘⫘⫘*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/e936c6fda97bdbc70d982.jpg' //Ganti jadi foto Bot

/*⫘⫘⫘⫘ FAKE SIZE ⫘⫘⫘⫘⫘*/
global.fsizedoc = '99999999999999' // 10TB
global.fpagedoc = '999' //Gausah di ganti.

/*⫘⫘⫘⫘ HIASAN ⫘⫘⫘⫘⫘*/
// DEFAULT MENU
global.htki = '❀⊱┄┄┄┄┄┄┄'
global.htka = '┄┄┄┄┄┄┄⊰❀'
global.dmenut = '┏━━━━━━━►' //top
global.dmenub = '❘⎇ ' //body
global.dmenub2 = '❘' //body for info cmd on Default menu
global.dmenuf = '𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊\n\n◐ Allah SWT\n◐Fokus Id\n◐ᴋʏᴀᴍɪ×͜×࿐\n◐DaveKgw\n◐BallBot\n◐\n◐Dan Pemakai bot ini\n◐I love you\n\n*The one and only FuadXy࿐*' //footer
global.emojis = '❀'

// COMMAND MENU
global.cmenut = '┏━━━━━━━►' //top
global.cmenuh = '◄•━────┐' //header
global.cmenub = '❘ 𖤓 ︎' //body
global.cmenuf = '╰──────⫘⫘⫘⫘⫘⫘─────┘\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n' //after
global.pmenus = '│⸙︎' //pembatas menu selector

global.lopr = '🅟' //LOGO PREMIUM ON MENU.JS
global.lolm = '🅛' //LOGO FREE ON MENU.JS
global.htjava = '❀'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']


/*⫘⫘⫘⫘ STICKER ⫘⫘⫘⫘⫘*/
global.stickpack = '𝑭𝒖𝒂𝒅𝑩𝒐𝑻𝒛'
global.stickauth = `© 𝑩𝒚 𝑭𝒖𝒂𝒅𝑿𝒚`

global.multiplier = 38 // The higher, The harder levelup

/*⫘⫘⫘⫘ GLOBAL EMOJI ⫘⫘⫘⫘⫘*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

global.fpay = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: 'FuadTzy',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: 'Hay kak👋'
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "USD"
			}
		}
	}
}
global.fpayment = (m) => {
	let key = {
		key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: 'FuadTzy',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: (m !== null && m !== undefined) ? m.sender : '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: (m !== null && m !== undefined) ? m.text : 'Follow IG: @fuadxy99'
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "USD"
			}
		}
	}
	}
	return key
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})