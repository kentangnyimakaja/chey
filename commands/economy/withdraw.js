const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

    module.exports = {
  name: "withdraw",
  aliases: ["with"],
  execute: async(client, message, args) => {

  let user = message.author;

  let member = db.fetch(`money_${message.author.id}`)
  let member2 = db.fetch(`bank_${message.author.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`bank_${message.author.id}`)
    
    db.subtract(`bank_${message.author.id}`, money)
    db.add(`money_${message.author.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`You have withdrawn all your coins from your bank`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`)
  message.channel.send(embed5)
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`Specify an amount to withdraw`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`)
  
  if (!args[0]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`You can't withdraw negative money`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`)

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`You don't have that much money in the bank`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`)

  if (member2 < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`You have withdrawn ${args[0]} coins from your bank`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`)

  message.channel.send(embed5)
  db.subtract(`bank_${message.author.id}`, args[0])
  db.add(`money_${message.author.id}`, args[0])
  }
}
    }

module.exports.help = {
    name: "withdraw",
    description: "Withdraw money from bank",
    usage: "withdraw <money>",
    type: "Economy"  
}
