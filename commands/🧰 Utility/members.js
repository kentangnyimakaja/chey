const Discord = module.require("discord.js");

module.exports = {
  name: "members",
  aliases: ["memberscount", "membercount"],
  execute: async (client, message, args, data, db) => {



    const embed = new Discord.MessageEmbed()
      .setAuthor("Members", message.guild.iconURL)
      .setColor("RANDOM")
      .addField("Anggota Keseluruhan :", message.guild.memberCount || message.guild.members.size)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)

    message.channel.send(embed);
  }
}
module.exports.help = {
  name: "members",
  description: "Berapa banyak anggota di server saat ini berapa banyak anggota di server saat ini",
  usage: "members",
  type: "Utility"
}