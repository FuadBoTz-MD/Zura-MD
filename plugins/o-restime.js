let handler = async (m, {conn}) => {
    if (m.isGroup) {
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastclaim = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastfreegift = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastgaji = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastmaling = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastbonus = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastcollect = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastadventure = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastfishing = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastdungeon = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastduel = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastnebang = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastberbru = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastmining = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lasthunt = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastweekly = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastmonthly = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastnyampah = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastbunga = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastkill = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lasthourly = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastjb = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastrob = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastdaang = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastngojek = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastnganu = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastgrab = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastngocok = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastturu = 0
    
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastpremgift = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastpackage = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastspecial = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastberburu = 0
        
    for (let u of Object.keys(db.data.users))
        db.data.users[u].lastmancing = 0
        
    for (let u of Object.keys(db.data.users)) db.data.users[u].lastkorupsi = 0
        
    } throw 'Sukses Mereset Semua Time Di Rpg...'
}
handler.help = ['restime']
handler.tags = ['owner'] 
handler.command = ['restime']
handler.owner = true
export default handler