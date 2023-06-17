import fetch from "node-fetch"
import cheerio from "cheerio"

let handler = async (m, {
    command,
    usedprefix,
    conn,
    text,
    args
}) => {
await m.reply(wait)
  try {
    const result = await wabetainfo();
    const currentdate = result.updated;
      const output = [
        `*[ new updated ]*\n\n`,
        `*update:*\n${result.updated}\n`,
        `*desc:*\n${result.content}\n`,
        `*link:*\n${result.postedonlink}\n\n`
      ];
      
      result.faq.foreach((item, index) => {
        output.push(`${index + 1}. ${item.question}\n${item.answer}\n`);
      });
      
      let captions = output.join('\n');
      let images = result.ogimage;
      await conn.sendfile(m.chat, images, '', captions, m);
  } catch (e) {
    console.log(e);
  }
}
handler.help = ["wbi"]
handler.tags = ["info"]
handler.command = /^(wbi)$/i
export default handler

async function wabetainfo() {
  const url = 'https://wabetainfo.com';
  
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const header = $('header.entry-header');
    const entrymeta = header.find('.entry-meta');
    const entrydate = entrymeta.find('time.entry-date').attr('datetime');
    const updateddate = entrymeta.find('time.updated').attr('datetime');
    const ioslink = entrymeta.find('a[href*="/ios/"]').attr('href');

    const entrycontent = $('.entry-content');
    const postedonlink = entrycontent.find('a.more-link').attr('href');
    const content = entrycontent.find('p').first().text();

    const cleanpostedonlink = postedonlink ? postedonlink.split('#')[0] : '';

    const faqresponse = await fetch(cleanpostedonlink);
    const faqhtml = await faqresponse.text();
    const faq$ = cheerio.load(faqhtml);

    const faqtable = faq$('table.styled-table');
    const faqrows = faqtable.find('tbody tr');
    const faqlist = faqrows.map((_, row) => {
      const question = faq$(row).find('td').eq(0).text();
      const answer = faq$(row).find('td').eq(1).text();
      return { question, answer };
    }).get();

    const ogimageurl = faq$('meta[property="og:image"]').attr('content');

    const result = {
      url,
      postedonlink: cleanpostedonlink,
      published: entrydate,
      updated: updateddate,
      ioslink,
      content,
      faq: faqlist,
      ogimage: ogimageurl
    };
    return result;
  } catch (error) {
    console.error('error:', error);
    return null;
  }
}