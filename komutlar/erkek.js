module.exports = {
  name:"erkek",
  aliases:"e",
  description:"Üyeyi erkek olarak kayıt eder",
  code:`
  $setUserVar[kke;$authorID;$message[1]]
  $setUserVar[toplamk;$sum[$getUserVar[toplamk];1]]
  $setUserVar[erkekk;$sum[$getUserVar[erkekk];1]]
  $channelSendMessage[$getServerVar[chat];<@$message[1]> Aramıza yeni bir prens katıldı.]
  $channelSendMessage[$channelID;{newEmbed:{author:Başarılı!:$userAvatar[$message[1]]}{description:<@$message[1]> adlı üye erkek olarak kayıt edildi.}{footer:Developed By ParzivâL}{color:ffffff}{thumbnail:$userAvatar[$message[1]]}}]
  $giveRole[$guildID;$message[1];$getServerVar[erkek]]
  $takeRole[$guildID;$message[1];$getServerVar[kayıtsız]]
  $changeNickname[$message[1];$getServerVar[tag] $message[2] | $message[3]]
  $onlyIf[$isNumber[$message[3]]==true;$getServerVar[cross] <@$authorID>, Üyenin yaşını gir.]
  $onlyIf[$message[2]!=;$getServerVar[cross] <@$authorID>, Üyenin ismini gir.]
  $onlyIf[$hasRoles[$guildID;$message[1];$getServerVar[kayıtsız]]==true;$getServerVar[cross] <@$authorID>, Üye zaten kayıt olmuş.]
  $onlyIf[$memberExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Sunucumuzda böyle bir kullanıcı yok.]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Üyenin ID'sini gir.]
  $onlyForRoles[$getServerVar[yetkili];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }
