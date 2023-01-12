const db = require("quick.db");
const Discord = require("discord.js");
module.exports = {
  name: "autonick",
  aliases: ["auto-nick"],
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD")) {
      message.channel.send(
        "Kamu membutuhkan `MANAGE GUILD` untuk mengonfigurasi pengaturan nickname otomatis!"
      );
      return;
    }
    if (!args[0]) {
      return message.reply(" silakan masukkan nama panggilan seperti : LGT - nama pengguna - OP (Nama pengguna berarti nama pengguna yang bergabung)")
    }
    let message1 = args.join(" ");
    if (message1 !== "disable") {
      db.set(`nickm_${message.guild.id}`, message1);
      message.channel.send(`Selesai Pesan Anda Telah diatur di Database`);
    }
    if (args[0] == "disable" || args[0] == "off") {
      db.delete(`nickm_${message.guild.id}`);
      return message.reply("selesai menghapus fitur autonick");
    }

  }
}