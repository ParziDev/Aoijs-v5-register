const parzi = require("aoi.js")
const bot = new parzi.Bot({
token: process.env.token, 
prefix: "$getServerVar[prefix]", 
intents: "all" 
})

const loader = new parzi.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")

////////// CALLBACKS \\\\\\\\\\
bot.onJoin()
bot.onLeave()
bot.onMessage()

////////// STATUS \\\\\\\\\\
bot.status({
  text:"ParzivâL",
  type:"PLAYING",
  status:"dnd",
  time: 12
})

////////// VARİABLES \\\\\\\\\\
bot.variables({
  prefix:".",
  kayıtsız:"",//Kayıtsız rolü ID
  erkek:"",//Erkek rolü ID
  kız:"",//Kız rolü ID
  yetkili:"",//Yetkili rolü ID
  register:"",//Hoşgeldin kanalı ID
  chat:"",//Chat kanalı ID
  kke:"",//Elleme
  toplamk:"0",//Elleme
  kızk:"0",//Elleme
  erkekk:"0",//Elleme
  yhrol:"",//Yeni hesap rolü ID
  yhlog:"",//Yeni hesap logu ID
  tag:"",//Tag 
  tick:"",//Onay emoji ID örn: ✅
  cross:""//Red emoji ID örn: ❎
})

////////// COMMANDS \\\\\\\\\\
bot.joinCommand({
  channel:"$getServerVar[register]",
  $if:"v4",
  code:`
$if[$sub[$datestamp;$creationdate[$authorID;ms]]<$multi[$multi[$multi[$multi[7;24];60];60];1000]]
$sendDM[**$serverName** sunucumuzda hesabın 7 günden önce açıldığı için cezalandırıldın.;$authorID;no]
$channelSendMessage[$getServerVar[yhlog];<@$authorID> Hesabın yeni olduğu için **$roleName[$getServerVar[yhrol]]** rolün verildi.]
$getServerVar[tick] \`$userTag\` adlı üyenin hesabı 7 günden önce açıldığı için cezalıya atıldı.
$changeNickname[$authorID;$getServerVar[tag] Yeni | Hesap]
$giveRoles[$guildID;$authorID;$getServerVar[yhrol]]

$else

**🎉 Aramıza hoşgeldin <@$authorID>.

Seninle beraber \`$membersCount\` üyeyiz.

Kayıt olmak için <@&$getServerVar[yetkili]> rolündeki üyeleri bekleyin.

Hesabın \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$authorID;time];and;ve];seconds;Saniye];minutes;Dakika];hours;Saat];days;Gün];months;Ay];weeks;Hafta];years;Yıl];second;Saniye];minute;Dakika];hour;Saat];month;Ay];year;Yıl];week;Hafta]\` önce kurulmuş.**

$giveRoles[$guildID;$authorID;$getServerVar[kayıtsız]]
$changeNickname[$authorID;$getServerVar[tag] İsim | Yaş]
$endif
  `
})
