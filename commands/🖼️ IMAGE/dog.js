const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
  name: "dog",
  aliases: [],
  execute: async (client, message, args, data, db) => {
    superagent.get('https://nekos.life/api/v2/img/woof')
      .end((err, response) => {
        const embed = new Discord.MessageEmbed()
          .setTitle("Random Anjing")
          .setImage(response.body.url)
          .setColor("RANDOM")
          .setFooter(`woof`)
          .setURL(response.body.url)
          .setTimestamp();
        message.channel.send(embed);
      }).catch((err) => message.channel.send({
        embed: {
          color: 16734039,
          description: "Ada yang tidak beres... :cry:"
        }
      }));

  }
}
module.exports.help = {
  name: "dog",
  description: "Sends a random dog photo",
  usage: "dog",
  type: "Fun"
}