module.exports = {
  name:"kke",
  aliases:"kimkayıtetti",
  code:`
  $author[1;$userTag[$mentioned[1;no]];$userAvatar[$mentioned[1;no]]]
  $description[1;<@$mentioned[1;no]> adlı üyeyi kaydeden yetkili: $replaceText[<@$getUserVar[kke;$mentioned[1;no]]>;<@>;Bulunamadı]]
  $footer[1;Developed by ParzivâL]
  $color[1;ffffff]
  $thumbnail[1;$userAvatar[$mentioned[1;no]]]
  $onlyIf[$mentioned[1;no]!=undefined;$getServerVar[cross] <@$authorID>, Üyeyi etiketle.]
  $onlyForRoles[$getServerVar[yetkili];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }
