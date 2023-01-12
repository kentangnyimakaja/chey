const Discord = require("discord.js");

module.exports = {
  name: "ban",
  aliases: [],
  execute: async (client, message, args, data, db) => {

    if (message.member.hasPermission("BAN_MEMBERS")) {
      if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
        return message.channel.send('Saya tidak memiliki izin yang cukup');
      }
      const Member = message.mentions.members.first();
      if (!Member) return message.channel.send('Silakan tentukan pengguna untuk di Ban.');
      if (Member.id == message.author.id) {
        return message.channel.send("Saya tidak bisa Ban diri Anda");
      }
      if (Member.id == client.user.id) {
        return message.channel.send("Saya tidak bisa Ban diri saya sendiri")
      }

      var args2 = args.slice(1).join(" ");
      if (!args2) {
        var args2 = "Tidak ada alasan yang diberikan";
      }
      await Member.ban({ reason: `${args2}` })
      const embed = new Discord.MessageEmbed()
        .setTitle('BAN')
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/796744218893746176/816713126245957693/kick.gif')
        .setDescription(`${Member.user.tag} was Banned from the server!`)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)


      message.channel.send(embed)
    }
  }
}
module.exports.help = {
  name: "ban",
  description: "Ban member",
  usage: "ban <mention> <reason>",
  type: "Moderation"
}