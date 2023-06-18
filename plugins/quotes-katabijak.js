import fetch from 'node-fetch'
import util from 'util'
import fs from 'fs'
let handler = async (m, { text }) => {
                let body = fs.readFileSync('./lib/katabijak.txt', 'utf-8')
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                m.reply(randomnix)
}
handler.help = ['katabijak']
handler.tags = ['quotes']
handler.command = /^(katabijak|jagokata)$/i

export default handler
