const Discord = require("discord.js");
const cnf = require('../../config.js');

module.exports = {
  name: "invite",
  aliases: ["getbot"],
  execute: async (client, message, args, data, db) => {
    try {
      const embed = new Discord.MessageEmbed()
        .setTitle("Support Me.")
        .setColor('RANDOM')
        .addField("Server", `[Join to official server](https://discord.gg/TCTMuU4GED)`)
        .addField('**Support BOT**', '\n [Click here](https://saweria.co/discordbot) Untuk Bergabung dengan BOT Dukungan Kami.')
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)

      message.author.send({ embed })

      message.channel.send({
        embed: {
          color: 3447003,
          description: "Cek pesan DM!"
        }
      })
    } catch (err) {
      message.channel.send({
        embed: {
          color: 16734039,
          description: "Something went wrong... :cry:"
        }
      })
    }
  }
}
module.exports.help = {
  name: "invite",
  description: "Mengirim undangan bot",
  usage: "invite",
  type: "General"
}