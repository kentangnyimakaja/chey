const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["av"],
  execute: async (client, message, args, data, db) => {
    if (!message.mentions.users.size) {
      let embed = new Discord.MessageEmbed()

        .setColor("RANDOM")
        .setAuthor(message.author.username + "'s Avatar", message.author.displayAvatarURL)
        .setImage(message.author.displayAvatarURL({ size: 4096, dynamic: true }))
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)

      message.channel.send(embed)
    }

    const avatarList = message.mentions.users.map(user => {
      return `${user.username},${user.displayAvatarURL({ size: 4096, dynamic: true })}`;
    });

    for (var i = 0; i < avatarList.length; i++) {
      let Username = avatarList[i].split(',')[0];
      let AvatarURL = avatarList[i].split(",").pop();

      let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(Username + "'s Avatar", AvatarURL)
        .setImage(AvatarURL)
        .setFooter(`Requested by ${message.author.tag}`)

      message.channel.send(embed)
    }
  }
}
module.exports.help = {
  name: "avatar",
  description: "Mendapatkan avatar pengguna dari sebutan",
  usage: "avatar <mention>",
  type: "Utility",
}
