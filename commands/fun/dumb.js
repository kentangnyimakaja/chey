const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: "dumb",
  aliases: ["dumby"],
  execute: async (client, message, args) => {
    const embed1 = new Discord.MessageEmbed()
      .setDescription("Saya mendapatkan data penghitungan bodoh Anda")
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
    let broov1 = db.fetch(`broov_${message.member.id}`);
    const embed = new Discord.MessageEmbed()
      .addField(`Anda telah mengatakan bodoh`, `${broov1} kali!!`)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
    message.channel.send(embed1).then(msg => {
      msg.edit(embed)
    })


  }
}
module.exports.help = {
  name: "dumb",
  description: "Ini menunjukkan berapa kali Anda mengatakan bodoh",
  usage: "dumb",
  type: "Fun"
}