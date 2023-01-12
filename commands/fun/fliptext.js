const Discord = require("discord.js");
const flip = require("flip-text");

module.exports = {
  name: "fliptext",
  aliases: [],
  execute: async (client, message, args, data, db) => {

    if (args.length <= 0) return message.channel.send({
      embed: {
        color: 16734039,
        description: "Anda harus memberikan teks!"
      }
    })

    var flipped = [];

    args.forEach((arg) => {
      flipped.push(flip(arg));
    });


    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Membalik teks : " + flipped.join(" "))
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
    await message.channel.send(embed);
  }
}
module.exports.help = {
  name: "fliptext",
  description: "Membalik beberapa teks",
  usage: "fliptext <text>",
  type: "Fun"
}