const db = require("quick.db");
const Discord = require("discord.js")
module.exports = {
  name: "hide",
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
    message.channel.overwritePermissions([
      {
        id: message.guild.roles.everyone.id,
        deny: ['VIEW_CHANNEL'],
      },
    ], `${message.member.id} Disuruh mengunci server`);
    message.channel.send("Selesai, saya telah menyembunyikan saluran ini sekarang :thumbsup:")


  }
}
module.exports.help = {
  name: "hide",
  description: "Itu menyembunyikan saluran saat ini",
  usage: "hide",
  type: "Moderation"
}