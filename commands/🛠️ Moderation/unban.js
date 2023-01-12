const Discord = require("discord.js");

module.exports = {
  name: "unban",
  aliases: [],
  execute: async (client, message, args, data, db) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return;
    }
    const reason = args.slice(1).join(' ');
    client.unbanReason = reason;
    client.unbanAuth = message.author;

    const user = args[0];

    if (reason.length < 1) {
      return message.channel.send({
        embed: {
          color: 16734039,
          description: "Anda harus memberikan alasan unban."
        }
      })
    } else if (!user) {
      return message.channel.send({
        embed: {
          color: 16734039,
          description: "Anda harus menyediakan User dibatasi, seperti id pengguna."
        }
      })
    }
    message.guild.unban(user);
    message.channel.send({
      embed: {
        color: 16734039,
        description: "User telah di unbaned! :scream:"
      }
    })
  }

}
module.exports.help = {
  name: "unban",
  description: "Unbans the user.",
  usage: "unban <mention> <reason>",
  type: "Moderation"
}