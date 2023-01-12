const api = require('novelcovid');
const moment = require('moment');
const { CanvasRenderService } = require('chartjs-node-canvas');
const Discord = require("discord.js");
module.exports = {
  name: "covid",
  aliases: [],
  execute: async (client, message, args) => {
    if (!args[0]) {
      const coronaEmbed = new Discord.MessageEmbed()
      const data = await api.all()
      coronaEmbed.setColor('#00B2B2')
        .setTitle("🌐 Kasus Global")
        .setDescription("Jumlah kasus mungkin berbeda dari sumber lain")
        .addField("Kasus", data.cases, true)
        .addField("Aktif", data.active, true)
        .addField("Kasus Hari Ini", data.todayCases, true)
        .addField("Kasus Kritis", data.critical, true)
        .addField("Meninggal", data.deaths, true)
        .addField("Sembuh", data.recovered, true)
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
      message.channel.send(coronaEmbed);
    } else {
      if (args[0]) {

        const countrycovid = args.join(" ");
        const countrydata = await api.countries({ country: countrycovid })


        const countryEmbed = new Discord.MessageEmbed()
          .setColor('#00B2B2')
          .setTitle(`${countrycovid} cases`).setThumbnail(countrydata.countryInfo.flag)

          .setDescription("Jumlah kasus mungkin berbeda dari sumber lain")
          .addField("Kasus", countrydata.cases, true)
          .addField("Aktif", countrydata.active, true)
          .addField("Kasus Hari Ini", countrydata.todayCases, true)
          .addField("Kasus Kritis", countrydata.critical, true)
          .addField("Meninggal", countrydata.deaths, true)
          .addField("Sembuh", countrydata.recovered, true)
          .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
          .setTimestamp()
          .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(countryEmbed)



      }
    }
  }
}