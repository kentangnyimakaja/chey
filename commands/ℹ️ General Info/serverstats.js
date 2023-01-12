const db = require("quick.db");
const Discord = require("discord.js");
const fs = require("fs");
const yaml = require("js-yaml");
const { mainprefix, color } = require("../../config.js")


module.exports = {
  name: "serverstats",
  aliases: [],
  execute: async (client, message, args) => {
    let embed = db.fetch(`embed_${message.guild.id}`)
    const stats = new Discord.MessageEmbed()
      .setColor(`${embed || color}`)
      .addField(`👑 Pemilik Server`, `**${message.guild.owner}**`)
      .addField(`👒 Jumlah anggota`, `**${message.guild.memberCount}**`)
      .addField(`✅ Anggota Online`, `**${message.guild.members.cache.filter(member => member.presence.status !== "offline").size}**`)
      .addField(`🎈 Anggota Offline`, `**${message.guild.members.cache.filter(member => member.presence.status == "offline").size}**`)
      .addField(`🧸 Jumlah Emoji`, `**${message.guild.emojis.cache.size}**`)
      .addField(`🎐 Jumlah Role`, `**${message.guild.roles.cache.size}**`)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
    message.channel.send(stats)
  }
}
module.exports.help = {
  name: "serverstats",
  description: "Ini menunjukkan statistik server",
  usage: "serverstats",
  type: "General",
}