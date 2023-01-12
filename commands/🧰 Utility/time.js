const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
  name: "time",
  aliases: [],
  execute: async (client, message, args, data, db) => {

    var today = new Date()
    let Day = today.toString().split(" ")[0].concat("day");
    let Month = today.toString().split(" ")[1]
    let Year = today.toString().split(" ")[3]
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField("Hari ini adalah :", `${Day}` + ", " + `${Month}` + ", " + `${Year}`)
      .addField("Waktu hari :", `${today.toString().split(" ")[4]}`)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
    message.channel.send({ embed })

  }
}

module.exports.help = {
  name: "time",
  description: "Menampilkan waktu yang sebenarnya",
  usage: "time",
  type: "Utility"
}