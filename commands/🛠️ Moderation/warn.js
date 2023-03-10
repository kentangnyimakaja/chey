const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./json db/warnings.json", "utf8"));
const db = require("quick.db")
module.exports = {
  name: "warn",
  aliases: ["strike"],
  execute: async (client, message, args) => {

    //!warn @daeshan <reason>
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({
      embed: {
        color: 16734039,
        description: "Anda tidak memiliki izin untuk warn members!"
      }
    })
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
    if (!wUser) return message.channel.send({
      embed: {
        color: 16734039,
        description: "Saya tidak dapat menemukan pengguna!"
      }
    })
    if (wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send({
      embed: {
        color: 16734039,
        description: "Saya tidak dapat warn pengguna tersebut!"
      }
    })
    let reason = args.join(" ");

    if (!reason) return message.channel.send({
      embed: {
        color: 16734039,
        description: "Silakan masukkan alasannya!"
      }
    })
    if (!warns[wUser.id]) warns[wUser.id] = {
      warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
      if (err) console.log(err)
    });

    let warnEmbed = new Discord.MessageEmbed()
      .setTitle("Warns")
      .setColor("RANDOM")
      .addField("Warned User:", `<@${wUser.id}>`)
      .addField("Warned In:", message.channel)
      .addField("Number of Warnings:", warns[wUser.id].warns)
      .addField("Reason:", reason)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
    message.channel.send(warnEmbed);
  }
}
module.exports.help = {
  name: "warn",
  description: "Warn a user",
  usage: "warn <user> <channel>",
  type: "Moderation"
}