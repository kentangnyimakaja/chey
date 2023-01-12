const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "cc-create",
  aliases: ["create-cc"],
  execute: async(client, message, args, data) => {

 if(!message.member.hasPermission('ADMINISTRATOR')) return;

       var name = args[0].toLowerCase(); const response = args.slice(1).join(" ");
     if(!name){
           var errembed = new Discord.MessageEmbed()
    .setDescription("**Failed**")
    .addField("Error:", `You Didnt Gave me a Name of Your Custom Command`)
    .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(errembed)
     }
     if(!response) {
           var errembed = new Discord.MessageEmbed()
    .setDescription("**Failed**")
    .addField("Error:", `You Didnt Gave me a Reply of Your Custom Command`)
    .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(errembed)
     }
     if(db.has(`${name}_${message.guild.id}`)){
         var errembed = new Discord.MessageEmbed()
    .setDescription("**Failed**")
    .addField("Error:", `This Command Already Exist Please Delete it First to add New One`)
    .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(errembed)
     }
     db.set(`${name}_${message.guild.id}`, response);
     db.set(`cc_${name}`, name);
         data.logs.unshift(`Command Name - **${name}** || Command Response - **${response}**`)
          db.set(`logs_${message.guild.id}`, data.logs)
          db.add(`cccount_${message.guild.id}`, 1)
        const aembed = new Discord.MessageEmbed()
   .setDescription("**Successfull**")
   .addField("Custom Command Name to Set:", name)
   .addField("Custom Command Reply/Response to Set:", response)
   .setFooter(`Requested by ${message.author.tag}`)
   message.channel.send(aembed);
     
  }
}

module.exports.help = {
  name: "cc-create",
  description: "Menambahkan auto reply sendiri",
  usage: "cc-create <kata> <balasan untuk bot>",
  type: "Custom CC"  
}