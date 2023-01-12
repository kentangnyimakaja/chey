const { Client, Message, MessageEmbed } = require('discord.js');
require('discord-reply')
const ms = require("ms")
module.exports = {
  name: 'reminder',
  aliases: ["remindme", "remind"],
  execute: async (client, message, args) => {
    let time = args[0]
    if (!time) {
      var embed = new MessageEmbed()

        .setDescription("**Penggunaan yang salah**\n Jam berapa sisanya harus dimatikan ? ")
        .setColor("RANDOM")
        .setTimestamp();
      return message.channel.send(embed);
    }
    if (ms(time) > ms("1w")) {

      var embed = new MessageEmbed()

        .setDescription(`**Penggunaan yang salah**\n ${message.author.tag} Anda tidak dapat mengatur pengingat Anda untuk lebih dari 1 week`)
        .setColor("RANDOM")
        .setTimestamp();
      return message.channel.send(embed);
    }
    let alert = args.slice(1).join(" ")
    if (!alert) {
      var embed = new MessageEmbed()

        .setDescription(`**Penggunaan yang salah**\n Untuk apa pengingat ?`)
        .setColor("RANDOM")
        .setTimestamp();
      return message.channel.send(embed);

    }
    var embed = new MessageEmbed()
      .setDescription(`**Berhasil**`)
      .setColor("RANDOM")
      .addField(`Waktu :`, `\`${time}\``, true)
      .addField(`Untuk :`, `\`${alert}\``, true)
    message.lineReply(embed)
    setTimeout(() => {
      let DP = new MessageEmbed()
        .setAuthor(`Pengingat Anda Selesai`)
        .setTimestamp()
        .setColor("RANDOM")
        .addField("Durasi :", `\`${time}\``, true)
        .addField(`Alasan :`, `\`${alert}\``, true)
      message.author.send(DP)
    }, ms(time))
  }
}