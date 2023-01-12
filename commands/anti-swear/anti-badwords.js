const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "anti-badwords",
  aliases: ["antibadwords", "antiwords"],
  execute: async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return;
    if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
      return message.channel.send('Saya tidak memiliki izin untuk menghapus pesan.')
    }
    if (await db.has(`swear-${message.guild.id}`) === false) {
      await db.set(`swear-${message.guild.id}`, true)
      message.channel.send('AntiBadwords telah dihidupkan!')

    } else {
      await db.delete(`swear-${message.guild.id}`)
      return message.channel.send('AntiBadwords telah dimatikan!')
    }
  }
}