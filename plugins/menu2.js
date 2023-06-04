import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

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
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
await conn.sendMessage(m.chat, {
          react: {
            text: '⚡',
            key: m.key,
          }})
	let tags
	let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'update', 'maker', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote', 'nsfw', 'audio', 'sound', 'info', 'owner', 'developer', 'store', 'virus']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main',
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'fun': 'Fun',
  'anime': 'Anime',
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Voting',
  'absen': 'Absen',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'sound': 'Sound',
  'nulis': 'MagerNulis & Logo',
  'audio': 'Audio',
  'maker': 'Maker',
  'database': 'Database',
  'quran': 'Al Qur-an',
  'developer': 'Developer',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  'store': 'Store Menu',
  'virus': 'Virtex',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis',
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an',
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
  }
  if (teks == 'sound') tags = {
    'sound': 'Sound'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'developer') tags = {
    'developer': 'Developer'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
 }
  if (teks == 'maker') tags = {
    'maker': 'Maker'
 }
  if (teks == 'store') tags = {
    'store': 'Store Menu'
  }
  if (teks == 'virus') tags = {
    'virus': '𐐪-〚 Virtex 〛-𐑂'
  }
  try {
  	// DEFAULT MENU
      let dash = `*───━•〔 DASHBOARD 〕•━───*`
      let dash2 = `*───━•[DASHBOARD]•━───*`
  	let m1 = `*❖─···─〈*`
      let m2 = `*│𖥂*`
      let m3 = `*┗───···─────𖡹*`
      let m4 = `*│𖤓*`
      
      // COMMAND MENU
      let cc = `*╭────━•〔*`
      let c1 = `*〕•━────┐*`
      let c2 = `*│⌬*`
      let c3 = `*╰───···─────*𖡹\n`
      let c4 = `\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     `
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
      const sections = [
   {
	title: `${htki} ▮𝗦𝘁𝗮𝘁𝘂𝘀 」 ${htka}`,
	rows: [
	    {title: `┊📛┊𝙸𝚗𝚏𝚘 𝙱𝚘𝚝`, rowId: ".info", description: `✧ 𝙸𝚗𝚏𝚘 ${wm}`},
	    {title: `┊💌┊𝙾𝚠𝚗𝚎𝚛`, rowId: ".owner", description: "✧ 𝙸𝚗𝚒 𝚁𝚘𝚘𝚖 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛❗"},
	{title: `┊🗣┊𝚁𝚎𝚚𝚞𝚎𝚜𝚝 𝙵𝚒𝚝𝚞𝚛`, rowId: ".request", description: `✧ 𝚁𝚎𝚚𝚞𝚎𝚜𝚝 𝙵𝚒𝚝𝚞𝚛 𝚄𝚗𝚝𝚞𝚔 ${wm}`},
	{title: ` ┊📊┊𝚃𝚎𝚜𝚝 𝚂𝚙𝚎𝚎𝚍`, rowId: ".testspeed", description: `𝚃𝚎𝚜𝚝 𝚂𝚙𝚎𝚎𝚍 ${wm}`},
	{title: `┊⚡┊𝚂𝚙𝚎𝚎𝚍`, rowId: ".speed", description: `✧ 𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙺𝚎𝚌𝚎𝚙𝚊𝚝𝚊𝚗 ${wm}`},
	]
    },{
	title: `${htki} ▮𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆 」 ${htka}`,
	rows: [
	    {title: `┊🔖┊ 『 𝚂𝚎𝚠𝚊 𝙱𝚘𝚝 』`, rowId: ".sewa", description: "✧ 𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙻𝚒𝚜𝚝 𝙷𝚊𝚛𝚐𝚊 𝚜𝚎𝚠𝚊 𝙱𝚘𝚝"},
	    {title: `┊📑┊ 『 𝙱𝚞𝚢 𝚂𝚌𝚛𝚒𝚙𝚝 』`, rowId: ".owner", description: "✧ 𝙶𝚊𝚔 𝙰𝚔𝚊𝚗 𝙳𝚒 𝙹𝚞𝚊𝚕 𝙾𝚠𝚗𝚎𝚛 𝚂𝚌𝚛𝚒𝚙𝚝 𝙱𝚘𝚝 𝙸𝚗𝚒"},
	    {title: `┊🌟┊ 『 𝚄𝙿 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 』`, rowId: ".premium", description: "✧ 𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙻𝚒𝚜𝚝 𝙷𝚊𝚛𝚐𝚊 𝚄𝚙𝚐𝚛𝚊𝚍𝚎 𝙿𝚛𝚎𝚖𝚒𝚞𝚖"},
	    {title: `┊🥞┊ 『 𝙶𝚎𝚝 𝙷𝚊𝚍𝚒𝚊𝚑』`, rowId: ".daily", description: '✧ 𝙼𝚊𝚞 𝙷𝚊𝚍𝚒𝚊𝚑 𝙴𝚗𝚐𝚐𝚊𝚔 𝚔𝚊𝚔?...'},
	{title: `┊✨┊ 『 𝚁𝚊𝚝𝚒𝚗𝚐 』`, rowId: ".rate", description: '✧ 𝙹𝚊𝚗𝚐𝚊𝚗 𝙺𝚊𝚜𝚒𝚑 𝚁𝚊𝚝𝚎 𝚁𝚎𝚗𝚍𝚊𝚑 𝙳𝚘𝚗𝚐 :/'},
	{title: `┊🗳️┊ 『 𝙼𝚢 𝙿𝚛𝚘𝚏𝚒𝚕𝚎 』`, rowId: ".pp", description: '✧ 𝚂𝚊𝚙𝚊 𝚈𝚊 𝙺𝚊𝚖𝚞?...'},
	]
	},{
	title: `${htki} ▮𝗠𝗲𝗻𝘂 ${htka}`,
	rows: [
	    {title: `┊🗒️┊ › 〚 ᴀʟʟ ᴍᴇɴᴜ 〛-𐑂`, rowId: ".? all", description: "╰► ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sᴇᴍᴜᴀ ᴄᴏᴍᴍᴀɴᴅ ʙᴏᴛ"},
	    {title: `┊🌱┊ › 〚 ʀᴘɢ 〛-𐑂`, rowId: ".? rpg", description: "╰► ᴄᴀʟᴏɴ ᴀɴᴀᴋ ᴘᴇᴛᴜᴀʟᴀɴɢ ɴɪʜ..."},
	{title: `┊✨┊ › 〚 ᴇxᴘ 〛-𐑂`, rowId: ".? xp", description: "╰► ᴋᴀʟᴀᴜ ᴅᴀʜ ʟᴇᴠᴇʟ 100 ᴅᴀᴘᴀᴛ ʜᴀᴅɪᴀʜ"},
	{title: `┊🎮┊ › 〚 ɢᴀᴍᴇ 〛-𐑂`, rowId: ".? game", description: "╰► ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ғɪᴛᴜʀ ɢᴀᴍᴇ...."},
	{title: `┊🧩┊ › 〚 ғᴜɴ 〛-𐑂`, rowId: ".? fun", description: "╰► ɢᴀʙᴜᴛ ʏᴀʜ ʙᴀɴɢ?"},
	{title: `┊🐚┊ › 〚 ᴋᴇʀᴀɴɢ 〛-𐑂`, rowId: ".? kerangajaib", description: "╰► ᴍᴀᴜ ᴛᴀɴʏᴀ ᴀᴘᴀ sɪʜ ʙᴀɴɢ?..."},
	{title: `┊📑┊ › 〚 ǫᴜᴏᴛᴇs 〛-𐑂`, rowId: ".? quotes", description: "╰► ᴀᴅᴀ ʏᴀɴɢ ᴍᴀᴜ ɴʏᴀʀɪ ᴛᴏᴘɪᴋ ɴɪʜ..."},
	{title: `┊⛩️┊ › 〚 ᴀɴɪᴍᴇ 〛-𐑂`, rowId: ".? anime", description: "╰► ʟᴀʜ, ᴡɪʙᴜ..."},
	{title: `┊🔞┊ › 〚 ɴsғᴡ 〛-𐑂`, rowId: ".? nsfw", description: "╰► ᴀɴᴀᴋ ᴋᴇᴄɪʟ ɢᴀᴋ ʙᴏʟᴇʜ ʏᴀ...."},
	{title: `┊🌟┊ › 〚 ᴘʀᴇᴍɪᴜᴍ 〛-𐑂`, rowId: ".? premium", description: "╰► ʜᴀɴʏᴀ ᴋʜᴜsᴜs ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ..."},
	{title: `┊🎭┊ › 〚 ᴀɴᴏɴʏᴍᴏᴜs ᴄʜᴀᴛ 〛-𐑂`, rowId: ".? anonymous", description: "╰► ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴇɴɢᴀɴ ᴏʀᴀɴɢ ʏᴀɴɢ ᴛɪᴅᴀᴋ ᴅɪᴋᴇɴᴀʟ >.<"},
	{title: `┊☪️┊ › 〚 ɪsʟᴀᴍɪᴄ 〛-𐑂`, rowId: ".? quran", description: "╰► ᴛᴏʙᴀᴛ ʏᴀ ᴋᴀᴋ...."},
	{title: `┊🌐┊ › 〚 ɪɴᴛᴇʀɴᴇᴛ 〛-𐑂`, rowId: ".? internet", description: "╰► ɢᴀᴋ ᴀᴅᴀ ɢᴏᴏɢʟᴇ ʏᴀ ᴋᴀᴋ..."},
	{title: `┊📤️┊ › 〚 ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 〛-𐑂`, rowId: ".? downloader", description: "╰► ᴊᴀɴɢᴀɴ ᴅᴏᴡɴʟᴏᴀᴅ ʏᴀɴɢ ᴀɴᴇʜ-ᴀɴᴇʜ, xɪxɪxɪ"},
	{title: `┊🃏┊ › 〚 sᴛɪᴋᴇʀs 〛-𐑂`, rowId: ".? stiker", description: "╰► ᴋᴀʟᴀᴜ ʙɪᴋɪɴ sᴛɪᴄᴋᴇʀ ᴊᴀɴɢᴀɴ ᴅɪ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ..."},
	{title: `┊✏️┊ › 〚 ɴᴜʟɪs 〛-𐑂`, rowId: ".? nulis", description: "╰► ʜᴀᴛɪ-ʜᴀᴛɪ ᴋᴇᴛᴀʜᴜᴀɴ ʙᴜ sʀɪ..."},
  {title: `┊🎶┊ › 〚 sᴏᴜɴᴅ 〛-𐑂`, rowId: ".? sound", description: "╰► ᴍᴜsɪᴄ sɪᴍᴘᴀɴᴀɴ ᴅᴇᴠᴇʟᴏᴘᴇʀ:ᴠ"},
	{title: `┊🎵┊ › 〚 ᴀᴜᴅɪᴏ 〛-𐑂`, rowId: ".? audio", description: "╰► ᴄᴀʟᴏɴ ʀᴇᴍɪxᴇʀ ʜᴀʜᴀʜᴀ...."},
	{title: `┊🦄┊ › 〚 ɢʀᴏᴜʙ 〛-𐑂`, rowId: ".? group", description: "╰► ᴍᴇɴᴜ sᴇᴛᴛɪɴɢᴀɴ ʙᴜᴀᴛ ɢʀᴏᴜʙ ᴍᴜ ᴋᴀᴋ"},
	{title: `┊👑┊ › 〚 ᴀᴅᴍᴜɴ 〛-𐑂`, rowId: ".? admin", description: "╰► ʏᴀɴɢ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ ᴊᴀɴɢᴀɴ ᴍᴀᴋᴇ ғɪᴛᴜʀ ɪɴɪ"},
	{title: `┊🗃️️┊ › 〚 ᴅᴀᴛᴀʙᴀsᴇ 〛-𐑂`, rowId: ".? database", description: "╰► sɪᴍᴘᴇɴ ᴀᴘᴀ ᴛᴜʜ...."},
	{title: `┊🧰️┊ › 〚 ᴛᴏᴏʟs 〛-𐑂`, rowId: ".? tools", description: "╰► ʙᴜᴛᴜʜ ᴀᴘᴀ ᴀᴊᴀ ʙᴏᴛ ᴀᴋᴀɴ ʙᴀɴᴛᴜ"},
	{title: `️️┊📊️┊ › 〚 ɪɴғᴏ 〛-𐑂`, rowId: ".? info", description: "╰► ɪɴғᴏ ʟᴏᴡᴋᴇʀ ᴋᴀᴋ?..."},
	{title: `┊🎨┊ › 〚 ᴍᴀᴋᴇʀ 〛-𐑂`, rowId: ".? maker", description: "╰► ʙɪᴋɪɴ ʟᴏɢᴏ ᴀᴘᴀ ʏᴀ ᴇɴᴀᴋɴʏᴀ?"},
	{title: `┊💌┊ › 〚 sᴛᴏʀᴇ 〛-𐑂`, rowId: ".? store", description: "╰► ᴀɴᴀᴋ ᴊʙ ʏᴀ ᴋᴀᴍᴜ?"},
	{title: `┊🔥┊ › 〚 Virtex 〛-𐑂`, rowId: ".? virus", description: "╰► ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴀᴡᴏᴋᴀᴡᴏᴋ"},
	]
    },{
	title: `${htki} ▮𝗜𝗻𝗳𝗼 」 ${htka}`,
	rows: [
	    {title: `┊💬 ∫ » ᴇᴠᴇɴᴛ «`, rowId: ".event", description: "✧ ɴʏᴀʀɪ ᴅɪsᴋᴏɴ? ʜᴀʜᴀʜᴀ"},
	    {title: `┊🎳 ∫ » ᴠᴇʀsɪᴏɴ «`, rowId: ".cekversi", description: "✧ ᴍᴀᴜ ɴɢᴀᴘᴀɪɴ ʏᴀ?..."},
	    {title: `┊🎁 ∫ » ʀᴇғᴇʀᴀʟ «`, rowId: ".ref", description: "✧ ʙᴀɢɪᴋᴀɴ ᴄᴏᴅᴇ ᴜɴᴅᴀɴɢᴀɴ ʙɪᴀʀ ᴅᴀᴘᴀᴛ ʜᴀᴅɪᴀʜ...."},
	    {title: `┊🔭 ∫ » sᴄʀɪᴘᴛ «`, rowId: ".sc", description: `✧ sᴏᴜʀᴄᴇ ᴄᴏᴅᴇ ${namebot}`},
	    {title: `┊📮 ∫ » ʀᴜʟᴇs «`, rowId: ".rules", description: `✧ ᴘᴇʀᴀᴛᴜʀᴀɴ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ${namebot}`},
	    {title: `┊💰 ∫ » ᴅᴏɴᴀsɪ «`, rowId: ".donasi", description: '✧ sᴜᴘᴘᴏʀᴛ ʙᴏᴛ ᴀɢᴀʀ ʙᴏᴛ ᴏɴ ᴊᴀᴍ ɴᴏɴ sᴛᴏᴘ'},
	  //{title: `┊✨ ∫ » ʀᴀᴛɪɢ «`, rowId: ".rate", description: '✧ Support BOT agar Semangat update'},
	  {title: `┊🌸 ∫ » ɢʀᴏᴜʙ ʙᴏᴛ «`, rowId: ".groupbot", description: '✧ ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ᴍᴀᴍᴘɪʀ ʏᴀʜ...'},
	  {title: `┊🎖️ ∫ » ᴛʜᴀɴᴋs ᴛᴏ «`, rowId: ".tqto", description: '✧ ᴋᴀᴡᴀɴ-ᴋᴀᴡᴀɴ ʏᴀɴɢ ᴍᴇᴍʙᴀɴᴛᴜ ᴘᴇᴍʙᴜᴀᴛᴀɴ ʙᴏᴛ ɪɴɪ...'},
	  {title: `┊☎️ ∫ » ᴋᴀᴛᴀ ᴘᴇɴᴜᴛᴜᴘ «`, rowId: ".galau", description: '✧ ᴛᴇʀɪᴍᴀᴋᴀsɪʜ ʏᴀɴɢ sᴜᴅᴀʜ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ ᴅᴇɴɢᴀɴ ʙᴀɪᴋ...'},
      ]
    },{
	title: `${htki} ▮*𝑻𝒆𝒂𝒎𝒔* 」 ${htka}`,
	rows: [
    {title: `┊🔐 ∫ » 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 «`, rowId: ".? developer", description: "✧ ғɪᴛᴜʀ ᴋʜᴜsᴜs ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ..."},
	{title: `┊👩‍💻┊ › 𝑶𝒘𝒏𝒆𝒓 -𐑂`, rowId: ".? owner", description: "╰► ғɪᴛᴜʀ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ʙᴏᴛ..."},
      ]
    },
]

let usrs = db.data.users[m.sender]
let tek = `
*❅${ucapan()} ${conn.getName(m.sender)}*
𝑮𝒖𝒏𝒂𝒌𝒂𝒏 𝑩𝒐𝒕 𝑫𝒆𝒏𝒈𝒂𝒏 𝑩𝒊𝒋𝒂𝒌!!
𝑷𝒂𝒕𝒖𝒉𝒊 𝑺𝒆𝒕𝒊𝒂𝒑 𝑹𝒖𝒍𝒆𝒔 𝑨𝒈𝒂𝒓 𝑻𝒊𝒅𝒂𝒌 𝑫𝒊 𝑩𝒂𝒏𝒏𝒆𝒅 𝑩𝑶𝑻...

*⫷═════〔 llı 𝑰𝑵𝑭𝑶 ıll 〕═════⫸*
*𖥂* 🅟 = *Premium*
*𖥂* 🅛 = *Limit*

*༺════〔 llı 𝑼𝑺𝑬𝑹 ıll 〕════༻*
*𖥂* Name : ${usrs.registered ? usrs.name : conn.getName(m.sender)}
*𖥂* Tags : @${m.sender.split`@`[0]}
*𖥂* Status : *${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}*
*𖥂* Level: *${usrs.level}*
*𖥂* Role: *${usrs.role}${usrs.premiumTime > 1 ? `*
*𖥂* Limit : *${usrs.limit}*
*𖥂* Premium : *${usrs.premiumTime > 1 ? '✓': '✗'}*
*𖥂* Expired Premium : 
${clockStringP(usrs.premiumTime - new Date())}` : ''}

*⌘═════〔 llı 𝑩𝑶𝑻𝒁 ıll 〕═════⌘*
*𖤓* Uptime : *${mpt}*
*𖤓* Admin : *𝑭𝒖𝒂𝒅𝑿𝒚*
*𖤓* Users : *${Object.keys(global.db.data.users).length}*
*𖤓* Register : *${Object.keys(global.db.data.users).length}*
*𖤓* Unregister : *${Object.values(global.db.data.users).filter(user => user.registered == true).length}*
*𖤓* Platform : *${os.platform()}*
*𖤓* Mode : *${global.opts['self'] ? 'Private' : 'Publik'}*

❀𝑫𝒂𝒕𝒆 ${new Date().toLocaleDateString()}

`
const listMessage = {
  text: tek,
  footer: `ᴍᴏᴛɪᴠᴀsɪ: ${motivasi.getRandom()}`,
  mentions: await conn.parseMention(tek),
  title: ``,
  buttonText: `CLICK HERE ⎙`,
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
    }
  	
 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { day: 'numeric' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
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
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    //----------------- FAKE
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  let fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": wm,
                  "h": `Nekohime`,
                  'duration': '99999999', 
                  'gifPlayback': 'true', 
                  'caption': bottime,
                  'jpegThumbnail': thumb
                         }
                        }
                     }
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    
    //------------------< MENU >----------------
    
    //------------------ SIMPLE
    /*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch(thumb2)).buffer(),
         mediaUrl: sig
        }
     }
    })*/
    
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'text/rtf'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
    
    //------- BUTTON DOC WITH EXTERNAL ADS
    // MAMPUS DI ENC :v
    const _0x187932 = _0x5c09;

function _0x5c09(_0x28b840, _0x244043) {
    const _0x1766bb = _0x1766();
    return _0x5c09 = function(_0x5c09dc, _0x158321) {
        _0x5c09dc = _0x5c09dc - 0x1bb;
        let _0x4031df = _0x1766bb[_0x5c09dc];
        return _0x4031df;
    }, _0x5c09(_0x28b840, _0x244043);
}(function(_0x1c9e83, _0x2eef01) {
    const _0x5e85ab = _0x5c09,
        _0x179660 = _0x1c9e83();
    while (!![]) {
        try {
            const _0x4c7814 = -parseInt(_0x5e85ab(0x1d0)) / 0x1 * (-parseInt(_0x5e85ab(0x1bd)) / 0x2) + parseInt(_0x5e85ab(0x1c4)) / 0x3 * (parseInt(_0x5e85ab(0x1bf)) / 0x4) + parseInt(_0x5e85ab(0x1cc)) / 0x5 * (-parseInt(_0x5e85ab(0x1d1)) / 0x6) + parseInt(_0x5e85ab(0x1c1)) / 0x7 * (parseInt(_0x5e85ab(0x1bc)) / 0x8) + parseInt(_0x5e85ab(0x1cd)) / 0x9 * (-parseInt(_0x5e85ab(0x1c7)) / 0xa) + parseInt(_0x5e85ab(0x1cb)) / 0xb * (-parseInt(_0x5e85ab(0x1be)) / 0xc) + parseInt(_0x5e85ab(0x1ce)) / 0xd;
            if (_0x4c7814 === _0x2eef01) break;
            else _0x179660['push'](_0x179660['shift']());
        } catch (_0x2b3360) {
            _0x179660['push'](_0x179660['shift']());
        }
    }
}(_0x1766, 0x70ad5));
/*
* Karena Ga Guna Lagi hahaha, Remake By ᴋʏᴀᴍɪ×͜×࿐, Dev×͜×, 𝕱𝖚𝖆𝖉𝖃𝖉×፝֟͜×
*/
//await conn.reply(m.chat, text, fkon, { contextInfo: { isForwarded: false, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: thumb3, title: `List Menu ${teks}`, thumbnail: { url: thumb2 }, thumbnailUrl: thumb3, renderLargerThumbnail: true }}})
//conn.sendVin2ButtonLoc(m.chat, await conn.resize(thumb3, 300, 180), text, 'Thank You Dave ×͜× & ᴋʏᴀᴍɪ×͜×࿐ for developing this bot so well', 'ɢʀᴜʙ ʙᴏᴛ', 'https://chat.whatsapp.com/EAR7T7H59vOJz8KcwMP179', 'ᴅᴏɴᴀsɪ', '.donate', 'ɪɴғᴏ ʙᴏᴛt', '.botinfo', fkon)
await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: fsizedoc,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: text,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
function _0x1766() {
    const _0x1c60e8 = ['3ezQcUH', '.nameown', '.cekversi', '725770ccnUBU', 'sig', 'pdf', 'buffer', '305624SHQwwY', '233195fjGJSZ', '72BjUaMS', '2869867kBKaey', 'chat', '6NokiEm', '72PsFaxu', '🎐Sewa Bot', '1832yREmVQ', '205026IsvCrH', '132IBvmfp', '3329164htczQJ', 'Author', '7315FCLnNH', 'sendMessage', 'sender'];
    _0x1766 = function() {
        return _0x1c60e8;
    };
    return _0x1766();
}
    
//-------DOC TEMPLATE
    const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(),
            fileName: '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: text,
            footer: titlebot + `\n⚡Support ${author} Team`,
            templateButtons: [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: 'https://github.com/KaiZax'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Group Official',
                        url: sgc
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '🎐Sewa Bot',
                        id: '.sewa'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '💮 Author',
                        id: '.nameown'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '⚜ Version Bot',
                        id: '.versibot'
                    }
                },
            ]
        }
        //await conn.sendMessage(m.chat, message, m, { mentionedJid: [m.sender] })
        
    //------------------- BUTTON VID
     //conn.sendButton(m.chat, text, wm, 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4', [['Ping', '.ping'],['Owner', '.owner'],['Donasi', '.donasi']],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
     
   } catch (e) {
    conn.reply(m.chat, '📮Maaf, menu sedang error', m)
    throw e
  }
}
handler.command = /^(menu2|\?)$/i

handler.register = true
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat DiniHari ☀️"
  if (time >= 4) {
    res = "Selamat Pagi 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌇"
  }
  if (time >= 18) {
    res = "Selamat Malam 🌙"
  }
  return res
}