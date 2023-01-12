const db = require("quick.db");
const Discord = require("discord.js")
module.exports = {
  name: "autorole",
  aliases: ["ar", "auto-role"],
  execute: async (client, message, args) => {
    if (message.member.hasPermission("MANAGE_SERVER")) {
      if (message.content.includes("@everyone")) {
        return message.reply("@everyone sudah secara otomatis diberikan oleh Discord");
      }

      if (!args[0]) {
        return message.reply("Hei, Anda tidak memberi saya role untuk ditambahkan ketika seorang anggota bergabung dengan server");
      }
      var role1 = message.mentions.roles.first().id;
      if (!role1) {
        var role1 = args[0];
      }
      if (args[0] == "disable" || args[0] == "off") {

        db.delete(`autorole_${message.guild.id}`);
        return message.reply("Selesai, saya telah Menonaktifkan role role di server Anda, aktifkan dengan menambahkan role apa pun");
      }
      else {
        message.reply(`Ok Sekarang saya akan memberikan role ini ketika seseorang bergabung dengan role server ini - ${role1}`)
        db.set(`autorole_${message.guild.id}`, role1);
      }
    }
  }
}
module.exports.help = {
  name: "autorole",
  description: "Ini mengatur role eran server Anda untuk diberikan jika ada anggota yang bergabung",
  usage: "autorole",
  type: "Moderation"
}