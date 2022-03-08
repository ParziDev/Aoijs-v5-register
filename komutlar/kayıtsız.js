module.exports = {
  name:"kayıtsız",
  aliases:"unreg",
  description:"Üyeyi kayıtsıza geri atar",
  code:`
  $channelSendMessage[$channelID;{newEmbed:{author:Başarılı!:$userAvatar[$message[1]]}{description:<@$message[1]> adlı üye kayıtsıza atıldı.}{footer:Developed by ParzivâL}{color:ffffff}{thumbnail:$userAvatar[$message[1]]}}]
  $setRoles[$guildID;$message[1];$getServerVar[kayıtsız]]
  $changeNickname[$message[1];$getServerVar[tag] İsim | Yaş]
  $onlyIf[$hasRoles[$guildID;$message[1];$getServerVar[kayıtsız]]==false;$getServerVar[cross] <@$authorID>, Üye zaten kayıtsız.]
  $onlyIf[$memberExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Sunucumuzda böyle bir kullanıcı yok.]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Üyenin ID'sini gir.]
  $onlyForRoles[$getServerVar[yetkili];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
`
}
