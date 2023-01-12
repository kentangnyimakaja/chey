const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const Color = `RANDOM`;
module.exports = {
  name: "stealemoji",
  aliases: ["steal", "addemoji"],
  execute: async (client, message, args, data, db) => {
    if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
      return message.channel.send(`Anda Tidak Memiliki Izin Untuk Menggunakan Perintah Ini! Manage Emojis`)
    }

    const name = args[0];

    if (name.includes("https://") || name.includes(":")) {


      message.channel.send("Beri saya nama emoji untuk disimpan dengannya");
      return;
    }
    const emoji = args[1];
    if (!emoji) return message.channel.send(`Tolong Beri Saya Emoji!`);

    let customemoji = Discord.Util.parseEmoji(emoji);
    if (message.content.includes("https://")) {
      var Link = args[1];
    }
    if (!message.content.includes("https://")) {
      var Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? "gif" : "png"
        }`;
    }



    message.guild.emojis.create(
      `${Link}`,
      `${name}`
    );
    const Added = new Discord.MessageEmbed()
      .setTitle(`Emoji Added`)
      .setColor(`${Color}`)
      .setDescription(
        `Emoji Telah Ditambahkan! | Nama : ${name} | Preview : [Click Me](${Link})`)
      .setFooter(`Jika emoji tidak terunggah berarti ukuran emoji yang Anda coba unggah lebih dari 256.0 KB `);
    return message.channel.send(Added);

  }
}
module.exports.help = {
  name: "stealemoji",
  description: "Ini akan mencuri emoji yang diberikan",
  usage: "stealemoji <emoji>",
  type: "Moderation"
}