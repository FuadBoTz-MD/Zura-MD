import { youtubeSearch } from '@bochilteam/scraper';

const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Contoh: ${usedPrefix}${command} Another Love`;

  const result = await youtubeSearch(text);
  const vid = result.video[0];

  if (!vid) throw 'Video/Audio Tidak ditemukan';

  const { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid;
  const url = `https://www.youtube.com/watch?v=${videoId}`;
  const pp = `${thumbnail}`

  const ytnya = `*𓆩 𓃠 𓆪 ✧══ YouTube ══✧ 𓆩 𓃠 𓆪*
ও *TITLE*
» ${title}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও *DESCRIPTION*
» ${description}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও *PUBLISHED*
» ${publishedTime}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও *DURATION*
» ${durationH}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও *VIEWS*
» ${viewH}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও *URL*
» ${url}

Downloader tinggal ketik
type vidio
.ytmp4 <URL>
type audio
.ytmp3 <URL>

*Hai kak ${conn.getName(m.sender)} Gunakan bot dengan bijak ya*`;

  await conn.reply(m.chat, ytnya, m, {
    mentions: [m.sender],
    contextInfo: {
      forwardingScore: 9999,
      isForwarded: true,
      externalAdReply: {
        mediaType: 1,
        mediaUrl: pp,
        title: ' ',
        thumbnail: { url: pp },
        thumbnailUrl: pp,
        sourceUrl: `${url}`,
        renderLargerThumbnail: true,
      },
    },
  });
};

handler.help = ['play', 'play2'].map((v) => v + ' <pencarian>');
handler.tags = ['downloader'];
handler.command = /^play2?$/i;
handler.exp = 0;
handler.limit = true;
handler.register = true;

export default handler;