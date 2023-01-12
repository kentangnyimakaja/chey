const db = require("quick.db");
const Discord = require("discord.js")
module.exports = {
  name: "anti-alt",
  aliases: ["antialt"],
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD")) {
      message.channel.send(
        "Kamu membutuhkan `MANAGE GUILD` untuk mengonfigurasi pengaturan anti alt!"
      );
      return;
    }
    var wchannel = args[0];
    if (!wchannel) {
      return message.reply("Tolong berikan aku enable atau disable")
    }
    if (wchannel == "enable") {
      db.set(`antialt_${message.guild.id}`, wchannel);
      message.reply(`OK sekarang anti-alt diaktifkan`);
      return;
    }
    else if (wchannel == "disable") {
      db.delete(`antialt_${message.guild.id}`);
      message.reply(`OK sekarang anti-alt dinonaktifkan`);
      return;
    } else {
      return message.reply("Anda tidak memasukkan enable atau disable")
    }


  }
}