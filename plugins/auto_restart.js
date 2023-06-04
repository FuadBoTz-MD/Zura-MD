export async function all(m) {
  const check = setInterval(() => {
    var ram = process.memoryUsage().rss;
    if (ram >= 735000000) {
      clearInterval(check);
      process.send('reset');
      m.reply('Bot restart karena penggunaan RAM mencapai batas');
    }
  }, 60 * 1000);
}

export const disabled = false;