const db = require("quick.db");
const Discord = require("discord.js");
module.exports = {
  name: "auto-official-role",
  aliases: ["auto-official", "auto-name-role", "anr", "af", "autoofficial"],
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_SERVER")) {
      return;
    }
    if (!args[0]) {
      return message.reply("Anda tidak memberi saya role atau nama panggilan untuk ditetapkan\n misalnya : ==auto-official-role @member");
    }
    if (args[0] == "role") {
      var role2 = message.mentions.roles.first();
      if (role2) {
        var role2 = message.mentions.roles.first().id;
      }
      else if (!role2) {
        var role2 = args[1];
      }
      if (!role2) {
        return message.reply("Anda tidak memberi saya role yang valid");
      }
      db.set(`tagg_${message.guild.id}`, role2);
      return message.reply("Selesai, sekarang saya akan memberikan role ini ketika seseorang menambahkan tag yang Anda berikan ke nama pengguna");
    }
    if (args[0] == "name") {
      let name = args[1];
      if (!name) {
        return message.reply("Tolong Beri Nama untuk mengatur nama di database");
      }
      db.set(`tagn_${message.guild.id}`, name);
      return message.reply("Selesai, sekarang saya akan memberikan role ketika seseorang menambahkan nama ini ke nama pengguna nya");
    }
  }
}