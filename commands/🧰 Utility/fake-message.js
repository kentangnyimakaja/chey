const Discord = module.require("discord.js");
const fs = require("fs");

module.exports = {
  name: "fake-message",
  aliases: [],
  execute: async (client, message, args, data, db) => {
    // If the message is in a server
  


    message.channel.bulkDelete(1)

    if (!args[1]) return message.reply('Silahkan berikan pesan untuk mengirim \n ```\n Menggunakan: fake-message [mention] [text]```')
    const member = message.mentions.members.first()
    if (!member) return message.reply('Silahkan tag pengguna')
    message.channel.createWebhook(member.user.username, {
        avatar: member.user.displayAvatarURL({ dynamic: true })
    }).then(webhook => {
        webhook.send(args.slice(1).join(' '))
        setTimeout(() => {
            webhook.delete()
        }, 3000)
    })
  }
}

module.exports.help = {
  name: "fake-message",
  description: "Mengambil pesan palsu",
  usage: "fake-message",
  type: "Utility"
}
