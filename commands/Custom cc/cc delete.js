const Discord = require("discord.js");
const db = require("quick.db");
const { get } = require('../../cc_list_test/sqlite.js')
module.exports = {
  name: "cc-delete",
  aliases: ["delete-cc", "cc-del", "del-cc"],
  execute: async(client, message, args, data) => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;

        var name = args[0].toLowerCase();

        if(!name) 
        {
                var errembed = new Discord.MessageEmbed()
    .setDescription("**Failed**")
    .addField("Error:", `You Didnt Gave me a Name of Your Custom Command To Delete`)
    .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(errembed)
        }
        let todel = db.fetch(`${args[0]}_${message.guild.id}`)
        if(!todel){
                var errembed = new Discord.MessageEmbed()
    .setDescription("**Failed**")
    .addField("Error:", `That Command Didnt Exist`)
    .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(errembed)
        }
             
        const aembed = new Discord.MessageEmbed()
   .setDescription("**Successfull**")
   .addField("Custom Command Name to Delete:", name)
   .addField("Custom Command Reply/Response to Delete:", todel)
   .setFooter(`Requested by ${message.author.tag}`)
   message.channel.send(aembed);
       data.logs.shift(`Command Name - ${name} Command Response - ${todel}`)
        db.subtract(`cccount_${message.guild.id}`, 1)
          db.set(`logs_${message.guild.id}`, data.logs)
    db.delete(`${name}_${message.guild.id}`);


  }
}

module.exports.help = {
  name: "cc-delete",
  description: "Menghapus auto reply sendiri",
  usage: "cc-delete <kata>",
  type: "Custom CC"  
}