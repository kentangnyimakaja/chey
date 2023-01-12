const Discord = require("discord.js");
const weather = require('weather-js')

module.exports = {
  name: "weather",
  aliases: [],
  execute: async (client, message, args, data, db) => {

    if (args.length === 0) {
      let errorembed = new Discord.MessageEmbed()
        .setTitle("Error :cry:")
        .setDescription("Silakan masukkan lokasi!")
        .setColor("FF5757")
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(errorembed);
    }

    weather.find({ search: args.join(" "), degreeType: 'C' }, function (err, result) {

      if (!result) {
        let errorembed = new Discord.MessageEmbed()
          .setTitle("Error :cry:")
          .setDescription("Silakan masukkan lokasi yang valid!")
          .setColor("FF5757")
          .setTimestamp()
          .setFooter(`Requested by ${message.author.tag}`)
        return message.channel.send(errorembed);
      }

      var current = result[0].current;
      var location = result[0].location;
      if (err) {
        let errorembed = new Discord.MessageEmbed()
          .setTitle("Error :cry:")
          .setDescription("Silakan masukkan lokasi yang valid!")
          .setColor("FF5757")
          .setTimestamp()
          .setFooter(`Requested by ${message.author.tag}`)
        return message.channel.send(errorembed);
      }


      let embed = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Cuaca untuk ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x00AE86)
        .addField('Zona waktu', `UTC${location.timezone}`, true)
        .addField('Tipe Derajat', location.degreetype, true)
        .addField('Suhu', `${current.temperature} Derajat`, true)
        .addField('Rasanya seperti', `${current.feelslike} Derajat`, true)
        .addField('Angin', current.winddisplay, true)
        .addField('Kelembaban', `${current.humidity}%`, true)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
      message.channel.send(embed)
    });


  }
}
module.exports.help = {
  name: "weather",
  description: "Menampilkan statistik cuaca",
  usage: "weather <location>",
  type: "Utility"
}