const Discord = require("discord.js");

module.exports = {
  name: "flatearth",
  aliases: ["proof"],
  execute: async (client, message, args, data, db) => {
    try {
      let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Jika bumi tidak datar, jelaskan hal ini:")
        .setImage("https://img.buzzfeed.com/buzzfeed-static/static/2017-09/12/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13197-1505231830-3.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto")
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`) 
      message.channel.send(embed);
    } catch (err) {
      message.channel.send({
        embed: {
          color: 16734039,
          description: "Ada yang tidak beres... :cry:"
        }
      })
    }
  }
}
module.exports.help = {
  name: "flatearth",
  description: "Menunjukkan mengapa bumi datar",
  usage: "flatearth",
  type: "Fun"
}
