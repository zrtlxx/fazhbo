const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english, spanyol} = require(`./language`)
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz',
}
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'V12',
}
global.autoread = true
global.autobio = true 
global.language = indonesia
global.botname = "FazhBoT"
global.ownername= "FachriOfc"
global.myweb ="https://asukayang7.github.io"
global.youtube = "https://youtube.com/c/Fachri??"
global.github = "https://github.com/Fachri114"
global.email = "pelerrrslebew@gmail.com"
global.region = "Indonesia"
global.timezone = 'Asia/Jakarta'
global.premium = ['6288227758096']
global.owner = ["6288227758096"]
global.ownernomer = "6288227758096"
global.ownernomerr = "+6288227758096"
global.thumbnail = "./image/maple.jpg"
global.donasi = "./image/20220725_074924.png"
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg"
global.packname = 'FazhBoT'
global.author = 'FachriOfc'
global.sessionName = 'session'
global.typemenu = 'document'

global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
