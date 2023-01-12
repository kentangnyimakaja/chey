const Discord = require("discord.js");

module.exports = {
  name: "id",
  aliases: ["userid"],
  execute: async(client, message, args, data, db) => {
   var mention = message.guild.member(message.mentions.users.first());
    if(!mention) return message.channel.send({embed: {
            color: 16734039,
            description: "Sebutkan pengguna untuk mendapatkan ID mereka!"
        }})
    const lolid = new Discord.MessageEmbed()
    .setThumbnail(mention.user.avatarURL)
    .setColor("RANDOM")
    .addField('Berikut adalah ' + `${mention.user.username} ID`, mention.id)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`)
    message.channel.send(lolid)  
}
}
module.exports.help = {
    name: "id",
    description: "Menampilkan ID pengguna",
    usage: "id",
    type: "Utility"  
}