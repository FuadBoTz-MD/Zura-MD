import { tmpdir } from 'os';
import path, { join } from 'path';
import { readdirSync, statSync, unlinkSync } from 'fs';
import { readFileSync } from 'fs';
import { watch } from 'fs';

let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
  await conn.sendPresenceUpdate('composing', m.chat);
  conn.reply(m.chat, 'Success!', m);

  const tmp = [tmpdir(), join(__dirname, '../tmp')];
  const filename = [];

  tmp.forEach((dirname) =>
    readdirSync(dirname).forEach((file) => filename.push(join(dirname, file)))
  );

  filename.forEach((file) => {
    const stats = statSync(file);
    unlinkSync(file);
  });
};

handler.help = ['cleartmp'];
handler.tags = ['developer'];
handler.command = /^(cleartmp)$/i;
handler.rowner = true;

export default handler;