const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
module.exports = {
  name: "t-delete",
  aliases: ["nikal"],
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_SERVER")) {
      return;
    }
    var prefix = db.fetch(`guildprefix_${message.guild.id}`);
    if (!prefix) {
      var prefix = "==";
    }

    if (message.channel.name.includes('ticket-')) {
      message.channel.delete();
    }
    else {
      return message.reply('Anda tidak dapat menggunakan perintah ini di sini. Silakan gunakan perintah ini ketika Anda ingin menghapus tiket.');
    }

  }
}
module.exports.help = {
  name: "t-delete",
  description: "Ini akan menghapus saluran tiket secara paksa",
  usage: "t-delete",
  type: "🎟️ Ticket"
}