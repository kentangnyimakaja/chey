const Discord = module.require("discord.js");
const fs = require("fs");

module.exports = {
  name: "servericon",
  aliases: ["icon"],
  execute: async(client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setColor("RANDOM")
    .setImage(message.guild.iconURL())
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`)

  await message.channel.send(embed);
}
}
module.exports.help = {
    name: "servericon",
    description: "Ambil ikon server",
    usage: "servericon",
    type: "Utility"
}