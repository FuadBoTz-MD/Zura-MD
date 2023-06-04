import {
    tiktokdl,
    tiktokdlv2
} from "@bochilteam/scraper"
export async function before(m) {
    const regex = /^https:\/\/vt\.tiktok\.com\/([a-zA-Z0-9]+)\//;

    if (regex.test(m.text)) {
        const {
            author: {
                nickname
            },
            video,
            description
        } = await tiktokdl(m.text).catch(async _ => await tiktokdlv2(m.text))
        const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark
        if (!url) throw "Can\"t download video!"
        this.sendFile(m.chat, url, "tiktok.mp4", `
🔗 *Url:* ${url}
🧏 *Nickname:* ${nickname}${description ? `🖹 *Description:* ${description}` : ""}
`.trim(), m)
    } else {
        console.log('URL TikTok Tidak Valid');
    }

}
export const disabled = false