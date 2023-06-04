import fetch from 'node-fetch' 
 let handler = async(m, { conn, usedPrefix, command, text }) => { 
  
 /*MAP*/ 
 let rndm = ['AF','AX','AL','DZ','AS','AD','AO','AI','AQ','AG','AR','AM','AW','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','BQ','BA','BW','BV','BR','IO','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CX','CC','CO','KM','CG','CD','CK','CR','CI','HR','CU','CW','CY','CZ','DK','DJ','DM','DO','EC','EG','SV','GQ','ER','EE','ET','FK','FO','FJ','FI','FR','GF','PF','TF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GG','GN','GW','GY','HT','HM','VA','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IM','IL','IT','JM','JP','JE','JO','KZ','KE','KI','KP','KR','XK','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MK','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','AN','NC','NZ','NI','NE','NG','NU','NF','MP','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','PR','QA','RS','RE','RO','RU','RW','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','CS','SC','SL','SG','SX','SK','SI','SB','SO','ZA','GS','SS','ES','LK','SD','SR','SJ','SZ','SE','CH','SY','TW','TJ','TZ','TH','TL','TG','TK','TO','TT','TN','TR','XT','TM','TC','TV','UG','UA','AE','GB','US','UM','UY','UZ','VU','VE','VN','VG','VI','WF','EH','YE','ZM','ZW'] 
  
 if (!text) throw `Contoh: 
 ${usedPrefix + command} ID 
  
 List: 
 ${Array.from(rndm)} 
 ` 
 let f = await fetch(`https://api.worldbank.org/v2/country/${text}?format=json`) 
 let xx = await f.json() 
  
 let teks = `*Name :* ${xx[1][0].name} 
 *ID :* ${xx[1][0].id} 
 *City :* ${xx[1][0].capitalCity} 
 *longitude :* ${xx[1][0].longitude} 
 *latitude :* ${xx[1][0].latitude}` 
   await conn.sendButton(m.chat, teks, wm, `https://static-maps.yandex.ru/1.x/?lang=id-ID&ll=${xx[1][0].longitude},${xx[1][0].latitude}&z=12&l=map&size=600,300`, [ 
                 ['Menu', `${usedPrefix}menu`] 
             ], m, { quoted: fgif }) 
  
 } 
  
 handler.help = ['peta <wilayah>'] 
 handler.tags = ['internet'] 
 handler.command = /^(peta|map)$/i 
 handler.limit = true 
  
 export default handler