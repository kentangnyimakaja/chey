const db = require("quick.db")
const Discord = require("discord.js")
module.exports = {
  name: "serverunlock",
  aliases: [],
  execute: async (client, message, args) => {
    let embed = db.fetch(`embed_${message.guild.id}`);

    if (!message.member.hasPermission("MANAGE_GUILD")) {
      message.channel.send(
        "Kamu membutuhkan `MANAGE GUILD` untuk mengonfigurasi pengaturan server!"

      );
      return;
    }
    let content = args[0];

    var prefix = db.fetch(`guildprefix_${message.guild.id}`);
    if (!prefix) {
      var prefix = "==";
    }
    if (!content) {
      message.channel.send(`Anda tidak memberi saya opsi teks atau video, misal - ${prefix}serverunlock text/vc/all`);
      return;
    }
    if (content.toLowerCase() === "text") {
      message.guild.channels.cache.forEach(ch => {
        if (ch.type == "text")
          ch.overwritePermissions([
            {
              id: message.guild.roles.everyone.id,
              allow: ['SEND_MESSAGES'],
            },
          ], `${message.member.id} Diberitahu untuk membuka kunci server`);
      })
      message.channel.send(`Selesai, saya telah membuka kunci semua Saluran teks yang ada di server`)
    }
    if (content.toLowerCase() === "vc") {
      message.guild.channels.cache.forEach(ch => {
        if (ch.type == "voice")
          ch.overwritePermissions([
            {
              id: message.guild.roles.everyone.id,
              allow: ['CONNECT'],
            },
          ], `${message.member.id} Disuruh mengunci server`);
      })
      message.channel.send(`Selesai, saya telah membuka kunci semua Saluran suara yang ada di server`)
    }
    if (content.toLowerCase() === "all") {
      message.guild.channels.cache.forEach(ch => {
        ch.overwritePermissions([
          {
            id: message.guild.roles.everyone.id,
            allow: ['CONNECT', 'SEND_MESSAGES'],
          },
        ], `${message.member.id} Disuruh mengunci server`);
      })
      message.channel.send(`Selesai, saya telah membuka kunci semua Saluran suara dan teks yang ada di server`)
    }
    if (content.toLowerCase() === "unhide") {
      message.guild.channels.cache.forEach(ch => {
        ch.overwritePermissions([
          {
            id: message.guild.roles.everyone.id,
            allow: ['VIEW_CHANNEL'],
          },
        ], `${message.member.id} Disuruh mengunci server`);
      })
      message.channel.send(`Selesai, saya telah menyembunyikan semua Saluran suara dan teks yang ada di server`)
    }
  }
}
module.exports.help = {
  name: "serverunlock",
  description: "Ini akan membuka kunci seluruh server",
  usage: "serverunlock text/vc/all/unhide",
  type: "Moderation"
}