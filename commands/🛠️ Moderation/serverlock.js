const db = require("quick.db");
const Discord = require("discord.js")
module.exports = {
  name: "serverlock",
  aliases: [],
  execute: async(client, message, args) => {
     let embed = db.fetch(`embed_${message.guild.id}`);
    
    if (!message.member.hasPermission("MANAGE_GUILD"))
    {
      message.channel.send(
        "Kamu membutuhkan `MANAGE GUILD` untuk mengonfigurasi pengaturan server!"
      )
      return;
      }
    let content = args[0];
  
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = "==";
    }
      if(!content)
    {
      message.channel.send(`Anda tidak memberi saya opsi teks atau video, misal - ${prefix}serverlock text/vc/all/hide`);
      return;
    }
    if (content.toLowerCase() === "text") 
    {
      message.guild.channels.cache.forEach(ch => 
{
if(ch.type == "text")
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     deny: ['SEND_MESSAGES'],
  },
], `${message.member.id} Disuruh mengunci server`);
}) 
message.channel.send(`Disuruh Selesai, saya telah Mengunci semua Saluran teks yang ada di server mengunci server`)
}
if (content.toLowerCase() === "vc") 
    {
        message.guild.channels.cache.forEach(ch => 
{
if(ch.type == "voice")
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     deny: ['CONNECT'],
  },
], `${message.member.id} Disuruh mengunci server`);
}) 
message.channel.send(`Selesai saya telah Mengunci semua Saluran suara yang ada di server`)
    }
     if (content.toLowerCase() === "all") 
    {
        message.guild.channels.cache.forEach(ch => 
{
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     deny: ['CONNECT', 'SEND_MESSAGES'],
  },
], `${message.member.id} Disuruh mengunci server`);
}) 
message.channel.send(`Selesai saya telah Mengunci semua Saluran suara dan teks yang ada di server`)
    }
       if (content.toLowerCase() === "hide") 
    {
        message.guild.channels.cache.forEach(ch => 
{
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     deny: ['VIEW_CHANNEL'],
  },
], `${message.member.id} Told to lock the server`);
}) 
message.channel.send(`Selesai, saya telah menyembunyikan semua Saluran suara dan teks yang ada di server`)
    }

}
}
module.exports.help = {
    name: "serverlock",
    description: "Ini akan mengunci seluruh server",
    usage: "serverlock text/vc/all/hide",
    type: "Moderation"   
}