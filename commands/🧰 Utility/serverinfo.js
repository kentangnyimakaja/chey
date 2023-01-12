const Discord = module.require("discord.js");
const fs = require("fs");

module.exports = {
  name: "serverinfo",
  aliases: [],
  execute: async (client, message, args, data, db) => {
    // If the message is in a server
    if (message.guild) {
      let admins = "";
      message.guild.members.cache.array().forEach(member => {
        if (member.hasPermission("ADMINISTRATOR")) {
          admins += member.displayName + ", ";
        }
      });
      admins = admins.slice(0, admins.lastIndexOf(","));

      const embed = {
        embed: {
          color: 3447003,
          title: message.guild.name,
          thumbnail: {
            url: message.guild.iconURL()
          },
          fields: [
            {
              name: "Owner",
              value: `${message.guild.owner}`
            },

            {
              name: "Admin",
              value: admins
            },
            {
              name: "Tanggal Pembuatan",
              value: `${message.guild.createdAt.toDateString()} at ${message.guild.createdAt.toTimeString()}`
            },
            {
              name: "Jumlah Saluran",
              value: message.guild.channels.cache.size
            },
            {
              name: "Jumlah Anggota",
              // Filter the members list to only include non-bots
              value: message.guild.members.cache.filter(member => !member.user.bot)
                .size
            },
            {
              name: "Jumlah BOT",
              // Filter the list to only include bots
              value: message.guild.members.cache.filter(member => member.user.bot)
                .size
            },
            {
              name: "Jumlah Emoji",
              value: `${message.guild.emojis.cache.size}`
            },
            {
              name: "Jumlah Role",
              value: `${message.guild.roles.cache.size}`
            }
          ],
          timestamp: new Date(),
          footer: {
            text: `ID: ${message.guild.id}`
          }
        }
      };
      return message.channel.send(embed);
    }
    else {
      // The message was sent in a DM, can't retrieve the server info
      return message.reply(
        "Sepertinya Anda tidak mengirim pesan ini dari server"
      );
    }
  }
}

module.exports.help = {
  name: "serverinfo",
  description: "Mengambil info server",
  usage: "serverinfo",
  type: "Utility"
}
