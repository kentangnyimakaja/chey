const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "remove-logs",
  aliases: ["logs-del", "logs-delete", "logs-remove"],
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_SERVER")) {
      return;
    }
    message.guild.channels.cache.find(channel => channel.name === "ticket-logs").delete("Logs Off");


    message.reply("Selesai menghapus saluran dan fitur log keduanya");
  }
}