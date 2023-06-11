import axios from "axios"
import fetch from "node-fetch"
import uploadImage from "../lib/uploadImage.js"

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {

    let lister = [
        "v1",
        "v2",
        "v3",
        "v4",
        "v5",
        "v6"

    ]
let spas = "                "
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
    if (!lister.includes(feature.toLowerCase())) return m.reply("*Example:*\n" + usedPrefix + command + " v2 link\n\n*Pilih type yg ada*\n" + lister.map((v, index) => "  ○ " + v.toUpperCase()).join("\n"))
    
    if (lister.includes(feature)) {
        if (feature == "v1") {
            let LinkReg = /https?:\/\//.test(inputs) ? inputs : "https://" + inputs
            if (!LinkReg) return m.reply("Input query link")
            m.reply(wait)
                try {
                let res = "https://shot.screenshotapi.net/screenshot?token=WCCYKR0-X5CMMV0-JB4G5Z5-P6SPC8R&url=" + LinkReg + "&full_page=true&fresh=true&output=image&file_type=jpg"
                await conn.sendFile(m.chat, res, "", "*Request:* " + m.name, m)
            } catch (e) {
                throw eror
            }
        }
        if (feature == "v2") {
            let LinkReg = /https?:\/\//.test(inputs) ? inputs : "https://" + inputs
            if (!LinkReg) return m.reply("Input query link")
            m.reply(wait)
                try {
                let res = "https://api.popcat.xyz/screenshot?url=" + LinkReg
                await conn.sendFile(m.chat, res, "", "*Request:* " + m.name, m)
            } catch (e) {
                throw eror
            }

        }
        if (feature == "v3") {
            let LinkReg = /https?:\/\//.test(inputs) ? inputs : "https://" + inputs
            if (!LinkReg) return m.reply("Input query link")
            m.reply(wait)
            try{
                let res = "https://api.apiflash.com/v1/urltoimage?access_key=7eea5c14db5041ecb528f68062a7ab5d&wait_until=page_loaded&url=" + LinkReg
                await conn.sendFile(m.chat, res, "", "*Request:* " + m.name, m)
            } catch (e) {
                throw eror
            }

        }
        if (feature == "v4") {
            let LinkReg = /https?:\/\//.test(inputs) ? inputs : "https://" + inputs
            if (!LinkReg) return m.reply("Input query link")
            m.reply(wait)
                try {
                let res = "https://image.thum.io/get/fullpage/" + LinkReg
                await conn.sendFile(m.chat, res, "", "*Request:* " + m.name, m)
            } catch (e) {
                throw eror
            }

        }
        if (feature == "v5") {
            let LinkReg = /https?:\/\//.test(inputs) ? inputs : "https://" + inputs
            if (!LinkReg) return m.reply("Input query link")
            m.reply(wait)
                try {
                let st = await ssweb(LinkReg, "full", "desktop")
                let res = await uploadImage(st)
                await conn.sendFile(m.chat, res, "", "*Request:* " + m.name, m)
            } catch (e) {
                throw eror
            }

        }
        if (feature == "v6") {
            let LinkReg = /https?:\/\//.test(inputs) ? inputs : "https://" + inputs
            if (!LinkReg) return m.reply("Input query link")
            m.reply(wait)
                try {
                let res = await ssweb2(LinkReg)
                await conn.sendFile(m.chat, res, "", "*Request:* " + m.name, m)
            } catch (e) {
                throw eror
            }

        }

    }
}
handler.help = ["ss", "ssf", "ssweb"]
handler.tags = ["tools"]
handler.command = /^ss(web|f)?$/i
export default handler

 async function ssweb(url = "", full = false, type = "desktop") {
    type = type.toLowerCase()
    if (!["desktop", "tablet", "phone"].includes(type)) type = "desktop"
    let form = new URLSearchParams()
    form.append("url", url)
    form.append("device", type)
    if (!!full) form.append("full", "on")
    form.append("cacheLimit", 0)
    let res = await axios({
        url: "https://www.screenshotmachine.com/capture.php",
        method: "post",
        data: form
    })
    let cookies = res.headers["set-cookie"]
    let buffer = await axios({
        url: "https://www.screenshotmachine.com/" + res.data.link,
        headers: {
            "cookie": cookies.join("")
        },
        responseType: "arraybuffer"
    })
    return Buffer.from(buffer.data)
}

 async function ssweb2(url) {
    let data = await axios.post("https://www.urlbox.io/api/render", {
        url
    })
    return data.data.screenshotUrl
}