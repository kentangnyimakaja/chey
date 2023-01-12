const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "t-new",
  aliases: ["create"],
  execute: async (client, message, args) => {
    let channel3 = await db.fetch(`setuped_${message.guild.id}`);
    if (channel3 == null) {
      return message.reply("Anda belum menyelesaikan sistem tiket, lakukan dengan melakukan `==t-setup`");
    }
    if (channel3 != message.channel.id) {
      return message.reply(`Anda hanya dapat membuat tiket di saluran kotak tiket`)
    }
    var prefix = db.fetch(`guildprefix_${message.guild.id}`);
    if (!prefix) {
      var prefix = "==";
    }
    if (message.author.bot) {
      return;
    }
    let user = message.author;
    let timeout = "600000";
    var weekly = db.fetch(`messageem_${message.guild.id}_${user.id}`);
    if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
      let time = ms(timeout - (Date.now() - weekly));
      message.channel.send("Anda tidak bisa Anda hanya dapat membuat 1 tiket dalam 1 jam untuk Menghindari Tiket Spam")
    } else {

      db.set(`messageem_${message.guild.id}_${user.id}`, Date.now());


      if (message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.id}`)) {
        return message.reply('Anda sudah memiliki tiket, harap tutup terlebih dahulu tiket yang ada sebelum membuka yang baru!');
      }

      message.guild.channels.create(`ticket-${message.author.id}`, {
        permissionOverwrites: [
          {
            id: message.author.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: message.guild.roles.everyone,
            deny: ['VIEW_CHANNEL'],
          },
        ],
        type: 'text',
      }).then(async channel => {
        message.reply(`Anda telah berhasil membuat tiket! Silahkan klik ${channel} untuk melihat tiket Anda.`);
        channel.send(`Hi ${message.author}, Selamat datang di tiket Anda! Harap bersabar, kami akan bersamamu dalam waktu dekat. Jika Anda ingin menutup tiket ini, silakan jalankan \`${prefix}close\``);
        let logchannel = message.guild.channels.cache.find(channel => channel.name === `ticket-box`)
        if (logchannel) {
          logchannel.send(`Ticket ${message.author.id} telah dibuat. Klik hal berikut ini untuk menampilkan <#${channel.id}>`);
        }
      });
    }
  }
}


module.exports.help = {
  name: "t-new",
  description: "Ini akan membuat tiket",
  usage: "t-new",
  type: "🎟️ Ticket"
}