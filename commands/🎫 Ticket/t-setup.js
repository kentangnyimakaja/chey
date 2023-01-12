const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
module.exports = {
  name: "t-setup",
  aliases: [],
  execute: async (client, message, args) => {
    const log = message.guild.channels.cache.find(log => log.name === "ticket-box")
    if (log) {
      return message.reply("Anda sudah menyiapkan kotak tiket")
    }
    message.guild.channels.create(`ticket-box`, {
      permissionOverwrites: [


        {
          id: message.guild.roles.everyone,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
        },
      ],
      type: 'text',
    }).then(async channel => {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Kotak Tiket`)
        .setDescription("Tuliskan `==t-new` Untuk membuat tiket")
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
      channel.send(embed);
      let vc1 = "600";
      channel.setRateLimitPerUser(vc1, `Responsible - ${message.member}`);
      db.set(`setuped_${message.guild.id}`, channel.id);
    })
    message.reply("Selesai, sekarang saya hanya akan menerima pesan tiket dari saluran kotak tiket")
  }
}