const db = require("quick.db");
const Discord = require("discord.js")
module.exports = {
  name: "antilink",
  aliases: ["anti-link"],
  execute: async (client, message, args) => {
    let embed = db.fetch(`embed_${message.guild.id}`);

    if (!message.member.hasPermission("MANAGE_GUILD")) {
      message.channel.send(
        "Kamu membutuhkan `MANAGE GUILD` untuk mengonfigurasi pengaturan anti link!"
      );
      return;
    }
    let content = args[0];

    var prefix = db.fetch(`guildprefix_${message.guild.id}`);
    if (!prefix) {
      var prefix = "==";
    }
    if (!content) {
      message.channel.send(`Anda tidak memberi saya opsi hidup atau mati, seperti : - ${prefix}antilink on/off`);
      return;
    }
    if (content.toLowerCase() === "on") {
      let antilink1 = db.fetch(`antilink_${message.guild.id}`);
      if (antilink1 == "on") {
        message.channel.send("Anda telah mengaktifkan antilink");
        return;
      }
      let on1 = "on";
      db.set(`antilink_${message.guild.id}`, on1);
      message.channel.send("Ok sekarang saya akan Hapus pesan ketika seseorang mengirim link di obrolan");
    }
    else if (content.toLowerCase() === "off") {
      let antilink1 = db.fetch(`antilink_${message.guild.id}`);
      if (antilink1 == "off") {
        message.channel.send("Anda telah mematikan antilink");
        return;
      }
      let off1 = "off";
      db.set(`antilink_${message.guild.id}`, off1);
      message.channel.send("Oke sekarang saya tidak akan Menghapus pesan ketika seseorang mengirim link di obrolan");
    }
    else {
      return message.reply("Anda tidak memberi saya on atau off");
    }
  }
}
module.exports.help = {
  name: "antilink",
  description: "Ini akan mengaktifkan sistem anti link",
  usage: "antilink <on/off>",
  type: "Moderation"
}
