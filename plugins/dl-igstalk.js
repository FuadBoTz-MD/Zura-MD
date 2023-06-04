import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { command, text, conn }) => {
  if (!text) throw 'Input username'
try {
let res = await igStalk(text)
  if (!res) throw res
m.reply(m.chat, `*Name:* ${res.name}
*Username:* ${res.username}
*Followers:* ${res.followersH}
*Following:* ${res.followingH}
*Posts:* ${res.postsH}
*Bio:*
${res.description}
`.trim()
  } catch {
  let res = await axios('https://violetics.pw/api/stalk/instagram?apikey=beta&type=json&username=' + text)
let json = res.data
let v = json.result
m.reply(m.chat, `*ID:* ${v.id}
*Username:* ${v.username}
*Private:* ${v.is_private}
*Biography:* ${v.biography}
*Full name:* ${v.full_name}
*Timeline media:* ${v.edge_owner_to_timeline_media.count}
*Followed by:* ${v.edge_followed_by.count}
*Follow:* ${v.edge_follow.count}
*Signature expires:* ${v.profile_pic_url_signature.expires}
*Signature:* ${v.profile_pic_url_signature.signature}
`.trim()
}

}
handler.help = ['igstalk']
handler.tags = ['tools']
handler.alias = ['igstalk', 'stalkig']
handler.command = /^(igs|igstalk|stalkig)$/i

export default handler

async function igStalk(username) {
    username = username.replace(/^@/, '')
    const html = await (await fetch(`https://dumpor.com/v/${username}`)).text()
    const $$ = cheerio.load(html)
    const name = $$('div.user__title > a > h1').text().trim()
    const Uname = $$('div.user__title > h4').text().trim()
    const description = $$('div.user__info-desc').text().trim()
    const profilePic = $$('div.user__img').attr('style')?.replace("background-image: url('", '').replace("');", '')
    const row = $$('#user-page > div.container > div > div > div:nth-child(1) > div > a')
    const postsH = row.eq(0).text().replace(/Posts/i, '').trim()
    const followersH = row.eq(2).text().replace(/Followers/i, '').trim()
    const followingH = row.eq(3).text().replace(/Following/i, '').trim()
    const list = $$('ul.list > li.list__item')
    const posts = parseInt(list.eq(0).text().replace(/Posts/i, '').trim().replace(/\s/g, ''))
    const followers = parseInt(list.eq(1).text().replace(/Followers/i, '').trim().replace(/\s/g, ''))
    const following = parseInt(list.eq(2).text().replace(/Following/i, '').trim().replace(/\s/g, ''))
    return {
        name,
        username: Uname,
        description,
        postsH,
        posts,
        followersH,
        followers,
        followingH,
        following,
        profilePic
    }
}