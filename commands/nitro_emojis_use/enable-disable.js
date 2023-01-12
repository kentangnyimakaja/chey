const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "nitro-emojis",
  aliases: [],
  execute: async(client, message, args) => {

   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   if(db.fetch(`nitroemoji_${message.guild.id}`) == true) {
          var aembed = new Discord.MessageEmbed()
   .setDescription("**Successfull**")
   .addField("Now Nitro Emojis:", "Disabled")
   .setFooter(`Requested by ${message.author.tag}`)
   message.channel.send(aembed);
   } else {
       db.set(`nitroemoji_${message.guild.id}`, true)
           var aembed = new Discord.MessageEmbed()
   .setDescription("**Successfull**")
   .addField("Now Nitro Emojis:", "Enabled")
   .setFooter(`Requested by ${message.author.tag}`)
   message.channel.send(aembed);
   }

  }
}
