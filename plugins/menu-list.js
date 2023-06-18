import {
  promises,
  readFileSync
} from "fs"
import {
  join
} from "path"
import {
  xpRange
} from "../lib/levelling.js"
import moment from "moment-timezone"
import os from "os"
import fs from "fs"
import fetch from "node-fetch"

let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚝', '⚚', '♪'])}`
   let tags = {
   'main': '*MAIN MENU*', 
   'game': '*GAME*',
   'rpg': '*RPG GAMES*',
   'xp': '*EXP & LIMIT*',
   'sticker': '*STICKER*',
   'kerang': '*KERANG AJAIB*',
   'quotes': '*QUOTES*',
   'fun': '*FUN*',
   'asupan': '*ASUPAN*',
   'cerpen': '*CERPEN*',
   'anime': '*ANIME*',
   'admin': '*ADMIN*',
   'group': '*GROUP*',
   'vote': '*VOTING*',
   'absen': '*ABSEN*',
   'premium': '*PREMIUM*',
   'asupan': '*ASUPAN*',
   'anonymous': '*ANONYMOUS CHAT*',
   'menbalas': '*MENFESS*',
   'internet': '*INTERNET*',
   'news': '*NEWS*',
   'image': '*IMAGE*',
   'randomfoto': '*RANDOM FOTO*',
   'stalker': '*STALKER*',
   'downloader': '*DOWNLOADER*',
   'tools': '*TOOLS*',
   'nulis': '*MAGERNULIS*',
   'audio': '*AUDIO*',
   'sound': '*SOUND*',
   'openai': '*OPENAI*',
   'maker': '*TEXTPRO*',
   'ephoto': '*EPHOTO 360*',
   'database': '*DATABASE*',
   'quran': '*AL QUR\'AN*',
   'owner': '*OWNER*',
   'ownerstore': '*OWNER STORE*',
   'host': '*HOST*',
   'jadian': '*JADIAN*',
   'advanced': '*ADVANCED*',
   'info': '*INFO*',
   'nocategory': '*NO CATEGORY*',
}   
const defaultMenu = {
  before: `
%dash2

%m1 *I N F O  C M D* 
%m4 🅟 = *Premium*
%m4 🅛 = *Limit*
%m3

%m1 *I N F O  B O T*
%m4 Bot Name : *%me*
%m4 Mode : *%mode*
%m4 Platform : *%platform*
%m4 Prefix : [ *%_p* ]
%m4 Uptime : *%muptime*
%m4 Database : *%rtotalreg dari %totalreg*
%m3

%m1 *U S E R*
%m2 Name : %name
%m2 Tag : %tag
%m2 Status : *%prems*
%m2 Limit : *%limit*
%m2 Money : *%money*
%m2 Role : *%role*
%m2 Level : *%level [ %xp4levelup Xp For Levelup]*
%m2 Xp : *%exp / %maxexp*
%m2 Total Xp : *%totalexp*
%m3

%m1 *T O D A Y*
%m2 %ucpn
%m2 Days : %week
%m2 Date : %date
%m2 Time : %wib
%m3
%readmore
`.trimStart(),
  header: '%cc *%category* %c1',
  body: '%c2 %cmd %isPremium %islimit',
  footer: '%c3',
  after: `%c4 %me`,
}

let handler = async (m, {
  conn,
  usedPrefix: _p,
  __dirname,
  args,
  command,
  usedPrefix
}) => {
try {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//  let name = await conn.getName(who)
  let names = await conn.getName(who)
  let imgr = flaaa.getRandom()
  await conn.sendMessage(m.chat, {
      react: {
          text: "⏳",
          key: m.key,
      }
  })  
//  let tags
 //  let teks = `${args[0]}`.toLowerCase()

      // DEFAULT MENU
      let dash = global.dashmenu
      let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2

      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua

      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split("@")[0]}`

      /* Gobal */
      let glb = global.db.data.users
      let usrs = glb[m.sender]
      let wib = moment.tz("Asia/Jakarta").format("HH:mm:ss")
      let wibh = moment.tz("Asia/Makassar").format("HH")
      let wibm = moment.tz("Asia/Makassar").format("mm")
      let wibs = moment.tz("Asia/Makassar").format("ss")
      let wita = moment.tz("Asia/Makassar").format("HH:mm:ss")
      let waktuwita = `${wibh} H ${wibm} M ${wibs} S`

      /* Info Menu */
      let mode = global.opts["self"] ? "Private" : "Publik"
      let _package = JSON.parse(await promises.readFile(join(__dirname, "../package.json")).catch(_ => ({}))) || {}
      let {
          age,
          exp,
          limit,
          level,
          role,
          registered,
          money
      } = glb[m.sender]
      let {
          min,
          xp,
          max
      } = xpRange(level, global.multiplier)
      let name = await conn.getName(m.sender)
      let premium = glb[m.sender].premiumTime
      let prems = `${premium > 0 ? "Premium": "Free"}`
      let platform = os.platform()

      //-----------TIME---------
      let ucpn = `${ucapan()}`
      let d = new Date(new Date + 3600000)
      let locale = "id"
      // d.getTimeZoneOffset()
      // Offset -420 is 18.00
      // Offset    0 is  0.00
      // Offset  420 is  7.00
      let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(d / 84600000) % 5]
      let week = d.toLocaleDateString(locale, {
          weekday: "long"
      })
      let date = d.toLocaleDateString(locale, {
          day: "numeric",
          month: "long",
          year: "numeric"
      })
      let dateIslamic = Intl.DateTimeFormat(locale + "-TN-u-ca-islamic", {
          day: "numeric",
          month: "long",
          year: "numeric"
      }).format(d)
      let time = d.toLocaleTimeString(locale, {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
      })
      let _uptime = process.uptime() * 1000
      let _muptime
      if (process.send) {
          process.send("uptime")
          _muptime = await new Promise(resolve => {
              process.once("message", resolve)
              setTimeout(resolve, 1000)
          }) * 1000
      }
      let muptime = clockString(_muptime)
      let uptime = clockString(_uptime)
      let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
      let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
      let totalreg = Object.keys(glb).length
      let rtotalreg = Object.values(glb).filter(user => user.registered == true).length
      let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
          return {
              help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
              tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
              prefix: "customPrefix" in plugin,
              limit: plugin.limit,
              premium: plugin.premium,
              enabled: !plugin.disabled,
          }
      })
      let groups = {}
      for (let tag in tags) {
          groups[tag] = []
          for (let plugin of help)
              if (plugin.tags && plugin.tags.includes(tag))
                  if (plugin.help) groups[tag].push(plugin)
      }
      conn.menu = conn.menu ? conn.menu : {}
      let before = conn.menu.before || defaultMenu.before
      let header = conn.menu.header || defaultMenu.header
      let body = conn.menu.body || defaultMenu.body
      let footer = conn.menu.footer || defaultMenu.footer
      let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? "" : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
      let _text = [
          before,
          ...Object.keys(tags).map(tag => {
              return header.replace(/%category/g, tags[tag]) + "\n" + [
                  ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
                      return menu.help.map(help => {
                          return body.replace(/%cmd/g, menu.prefix ? help : "%_p" + help)
                              .replace(/%islimit/g, menu.limit ? "Ⓛ" : "")
                              .replace(/%isPremium/g, menu.premium ? "🅟" : "")
                              .trim()
                      }).join("\n")
                  }),
                  footer
              ].join("\n")
          }),
          after
      ].join("\n")
      let text = typeof conn.menu == "string" ? conn.menu : typeof conn.menu == "object" ? _text : ""
      let md = fs.readFileSync('./thumbnail.jpg')
      let replace = {
          "%": "%",
          p: _p,
          uptime,
          muptime,
          me: conn.getName(conn.user.jid),
          npmname: _package.name,
          npmdesc: _package.description,
          version: _package.version,
          exp: exp - min,
          maxexp: xp,
          totalexp: exp,
          xp4levelup: max - exp,
          github: _package.homepage ? _package.homepage.url || _package.homepage : "[unknown github url]",
          tag,
          dash,
          m1,
          m2,
          m3,
          m4,
          cc,
          c1,
          c2,
          c3,
          c4,
          lprem,
          llim,
          ucpn,
          platform,
          wib,
          wita,
          mode,
          _p,
          money,
          age,
          tag,
          prems,
          level,
          limit,
          name,
          names,
          weton,
          week,
          date,
          dateIslamic,
          time,
          totalreg,
          totalfeatures,
          rtotalreg,
          role,
          readmore: readMore
      }
      text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, "g"), (_, name) => "" + replace[name])
      const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => "./src/avatar_contact.png")
      //FAKE TROLI

  const ftrol = {

      key : {
  
      remoteJid: 'status@broadcast',
  
      participant : '0@s.whatsapp.net'
  
      },
  
      message: {
  
      orderMessage: {
  
      itemCount : 2022,
  
      status: 1,
  
      surface : 1,
  
      message: `Hai Kak ${name}!`, 
  
      orderTitle: `▮Menu ▸`,
  
      thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye
  
      sellerJid: '0@s.whatsapp.net' 
  
      }
  
      }
  
      }


      //------------------< MENU All>----------------
let all = `
Hello ${name}, ${ucapan()}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Databases* : ${totalreg}
 *Baileys:* Multi Device
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!

 *INFO CMD*
     
*Ⓟ* = Premium
*Ⓛ* = Limit`
conn.sendMessage(m.chat, {
text: all + readMore + '\n\n' + text,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: menu,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
   
      await conn.sendMessage(m.chat, {
        react: {
            text: "⚡",
            key: m.key,
        }
    })
  } catch (e) {
      conn.reply(m.chat, "Maaf, menu sedang error", m)
      throw e
  }
}
handler.help = ['menu', '?']
handler.command = /^(menu|menuall|allmenut|\?)$/i

handler.exp = 3

export default handler
//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
  return [h, " H ", m, " M ", s, " S "].map(v => v.toString().padStart(2, 0)).join("")
}

function clockStringP(ms) {
  let ye = isNaN(ms) ? "--" : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? "--" : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
  return [ye, " *Years 🗓️*\n", mo, " *Month 🌙*\n", d, " *Days ☀️*\n", h, " *Hours 🕐*\n", m, " *Minute ⏰*\n", s, " *Second ⏱️*"].map(v => v.toString().padStart(2, 0)).join("")
}

function ucapan() {
  const time = moment.tz("Asia/Makassar").format("HH")
  let res = "Selamat DiniHari ☀️"
  if (time >= 4) {
      res = "Good Morning 🌄"
  }
  if (time >= 10) {
      res = "Good Afternoon ☀️"
  }
  if (time >= 15) {
      res = "Good Afternoon 🌇"
  }
  if (time >= 18) {
      res = "Good Night 🌙"
  }
  return res
}