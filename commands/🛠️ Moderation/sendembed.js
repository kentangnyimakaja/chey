const Discord = require("discord.js");
const db = require("quick.db")
module.exports = {
  name: "sendembed",
  aliases: [],
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return;
    }
    if (args[1] <= 0)
      return message.reply(`${emoji.Error} Oh ayolah, katakan sesuatu jadi saya bisa memberikannya dalam format embed !!`)
        .then(message => {
          message.delete({ timeout: 10000 })
        });
    message.delete();
    const taggedChannel = await message.mentions.channels.first();
    var prefix2 = db.fetch(`guildprefix_${message.guild.id}`);
    if (!prefix2) {
      var prefix2 = "==";
    }
    let colour1 = db.fetch(`embed_${message.guild.id}`);
    if (taggedChannel) {
      const embed1 = new Discord.MessageEmbed()
        .setDescription(args.join(" ").replace(taggedChannel, ""))
        .setColor(`${colour1}`)
        .setFooter(`Requested by ${message.author.tag}`)
      await taggedChannel.send(embed1);
      message.channel.send(`ngomong-ngomong, Anda dapat mengubah warna embed dengan ${prefix2}embed <any_color> seperti merah, biru, dan lain lain`).then(message => {
        message.delete({ timeout: 10000 })
      });
    }
    if (!taggedChannel) {
      var prefix1 = db.fetch(`guildprefix_${message.guild.id}`);
      let colour = db.fetch(`embed_${message.guild.id}`);
      const embed = new Discord.MessageEmbed()
        .setDescription(args.join(" "))
        .setColor(`${colour}`)
        .setFooter(`Requested by ${message.author.tag}`)
      message.channel.send(embed)
      message.channel.send(`ngomong-ngomong, Anda dapat mengubah warna embed dengan ${prefix1}embed <any_color> seperti merah, biru, dan lain lain`).then(message => {
        message.delete({ timeout: 10000 })
      });
    }
  }
}
module.exports.help = {
  name: "sendembed",
  description: "Ini mengirim embed ke saluran yang Anda ketik perintah dan teks embed akan menjadi apa pun yang Anda inginkan!",
  usage: "sendembed <text>",
  type: "Moderation"
}