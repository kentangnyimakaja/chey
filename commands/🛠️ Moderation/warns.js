const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./json db/warnings.json", "utf8"));

module.exports = {
  name: "warns",
  aliases: ["strikes"],
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({
      embed: {
        color: 16734039,
        description: "Anda tidak memiliki izin untuk memeriksa members warns!"
      }
    })

    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
    if (!wUser) return message.channel.send({
      embed: {
        color: 16734039,
        description: "Saya tidak dapat menemukan pengguna!"
      }
    })
    if (!warns[wUser.id]) warns[wUser.id] = {
      warns: 0
    };
    let warnlevel = warns[wUser.id].warns

    let warnEmbed = new Discord.MessageEmbed()
      .setTitle("Warns")
      .setColor("RANDOM")
      .addField(`Jumlah warn dari `, `<@${wUser.id}> adalah warn : ${warnlevel}`)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
    message.channel.send(warnEmbed);



  }
}
module.exports.help = {
  name: "warns",
  description: "Menunjukan jumlah warns",
  usage: "warns <user>",
  type: "Moderation"
}