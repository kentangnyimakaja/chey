const db = require("quick.db");
const Discord = require("discord.js");
module.exports = {
  name: "maintainence",
  aliases: ["antiraid", "lockallch"],
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return;
    }
    var prefix = db.fetch(`guildprefix_${message.guild.id}`);
    if (!prefix) {
      var prefix = "==";
    }
    if (!args[0]) {
      message.channel.send(`Anda tidak memberi saya ${prefix}maintainenece on/off, Tolong Berikan agar saya bisa mengerti apa yang harus dilakukan!!`)
    }
    if (args[0] == "on") {
      let ont = db.fetch(`maintain_${message.guild.id}`);
      if (ont == "on") {
        message.channel.send("The Maintainence sudah aktif")
        return;
      }
      let on2 = "on";
      db.set(`maintain_${message.guild.id}`, on2);
      message.guild.channels.cache.forEach(ch => {
        ch.overwritePermissions([
          {
            id: message.guild.roles.everyone.id,
            deny: ['VIEW_CHANNEL'],
          },
        ], `${message.member.id} Disuruh mengunci server`);
      })
      message.guild.channels.create('maintainence-chat', { //Create a channel
        type: 'text', //Make sure the channel is a text channel
        permissionOverwrites: [{ //Set permission overwrites
          id: message.guild.roles.everyone.id,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
        }]
      });
      message.guild.channels.create('maintainence-vc', { //Create a channel
        type: 'voice', //Make sure the channel is a text channel
        permissionOverwrites: [{ //Set permission overwrites
          id: message.guild.roles.everyone.id,
          allow: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK'],
        }]
      });
      message.channel.send(`Selesai, saya telah menyembunyikan semua Saluran suara dan teks yang ada di server dan membuat vc pemeliharaan dan saluran pemeliharaan`)
    }
    if (args[0] == "off") {

      let offt = db.fetch(`maintain_${message.guild.id}`);
      if (offt == "off") {
        message.channel.send("TThe Maintainence sudah non aktif")
        return;
      }
      let off2 = "off";
      db.set(`maintain_${message.guild.id}`, off2);
      message.guild.channels.cache.forEach(ch => {
        ch.overwritePermissions([
          {
            id: message.guild.roles.everyone.id,
            allow: ['VIEW_CHANNEL'],
          },
        ], `${message.member.id} Disuruh mengunci server`);
      })
      message.guild.channels.cache.find(channel => channel.name === "maintainence-chat").delete("Maintainence mode off");
      message.guild.channels.cache.find(channel => channel.name === "maintainence-vc").delete("Maintainence mode off");


      message.channel.send(`Selesai, saya telah menyembunyikan semua Saluran suara dan teks yang ada di server dan menghapus vc pemeliharaan dan obrolan pemeliharaan`)
    }



  }
}
module.exports.help = {
  name: "maintainence",
  description: "akan mengaktifkan atau menonaktifkan mode maintainence",
  usage: "maintainence on/off",
  type: "Moderation"
}