const Discord = require("discord.js");

module.exports = {
  name: "roleid",
  aliases: [],
  execute: async(client, message, args, data, db) => {
    var mention = message.mentions.roles.first();
    if(!mention) return message.channel.send({embed: {
            color: 16734039,
            description: "Sebutkan pengguna untuk mendapatkan ID mereka!"
        }})
    const lolid = new Discord.MessageEmbed()
   
    .setColor("RANDOM")
    .addField('Berikut adalah ' + `${mention}`, mention.id)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`)
    message.channel.send(lolid)  
}
}
module.exports.help = {
    name: "roleid",
    description: "Menampilkan ID peran",
    usage: "roleid",
    type: "Utility"  
}