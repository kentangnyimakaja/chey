const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "balance",
  aliases: ["bal"],
  execute: async(client, message, args) => {

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.author.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.author.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`**${user}'s Balance**\n\nPocket: ${bal}\nBank: ${bank}`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`)
  message.channel.send(moneyEmbed)
}
}
module.exports.help = {
    name: "balance",
    description: "Display a your or a mentioned user balance",
    usage: "balance <mention>",
    type: "Economy"  
}
