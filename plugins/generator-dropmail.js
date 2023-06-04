import fetch from "node-fetch";
let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    text
}) => {
    if (command == "dropmailget") {
        if (!text) return m.reply("Input id only!")
        try {
            let eml = await get_mails(text)
            await m.reply(wait)
            await m.reply("*INBOX:*\n" + eml[0] + "\n\n" + "*TOTAL:*\n" + eml[1] + "\n\n_Ketik *.dropmail* Untuk membuat email baru_")
        } catch (e) {
            await m.reply(eror)
        }
    } else {
        try {
            let eml = await random_mail()
            await m.reply(wait)
            await m.reply("*EMAIL:*\n" + eml[0] + "\n\n" + "*ID:*\n" + eml[1] + "\n\n_Ketik *.dropmailget* Untuk mengecek inbox_")
        } catch (e) {
            await m.reply(eror)
        }
    }
}
handler.help = ["dropmail"]
handler.tags = ["misc"]
handler.command = /^dropmail(get)?$/i
export default handler

async function random_mail() {
    const link = "https://dropmail.me/api/graphql/web-test-wgq6m5i?query=mutation%20%7BintroduceSession%20%7Bid%2C%20expiresAt%2C%20addresses%20%7Baddress%7D%7D%7D"

    try {
        let response = await fetch(link);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        let email = data["data"]["introduceSession"]["addresses"][0]["address"];
        let id_ = data["data"]["introduceSession"]["id"];

        return [email, id_];

    } catch (error) {
        console.log(error);
    }
}

async function get_mails(id_) {
    const link = `https://dropmail.me/api/graphql/web-test-wgq6m5i?query=query%20(%24id%3A%20ID!)%20%7Bsession(id%3A%24id)%20%7B%20addresses%20%7Baddress%7D%2C%20mails%7BrawSize%2C%20fromAddr%2C%20toAddr%2C%20downloadUrl%2C%20text%2C%20headerSubject%7D%7D%20%7D&variables=%7B%22id%22%3A%22${id_}%22%7D`;

    try {
        let response = await fetch(link);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        let inbox = data["data"]["session"]["mails"];

        // return the size of the inbox to verify the amount of mail and whether the mail has arrived
        return [inbox, inbox.length];

    } catch (error) {
        console.log(error);
    }
}