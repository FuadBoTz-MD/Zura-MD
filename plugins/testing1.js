function handler(m) { 
    
   const kontak = { 
         "displayName": 'My Owner', 
         vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('6285954708804@s.whatsapp.net')}\nitem1.TEL;waid=6285954708804:6285954708804\nitem1.X-ABLabel:Owner¹\nURL;Ig:IG: @fuadxy99\nEMAIL;Email Owner: fxy³@gmail.com\nORG: Tidak Menerima Sv Kontak\nTEL;Owner²;waid=6283837709331:6283837709331\nEND:VCARD` 
 } 
  
 conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m }) 
    
 } 
 handler.help = ['owner', 'creator'] 
 handler.tags = ['info'] 
  
 handler.command = /^(own4)$/i 
  
 export default handler