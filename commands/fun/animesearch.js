const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports = {
  name: "animesearch",
  aliases: ["asearch"],
  execute: async(client, message, args, data, db) => {

  const search = `${args}`;

  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.MessageEmbed()
      .setAuthor(`Hasil pencarian Daftar Anime Saya untuk ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor("RANDOM")
      .addField('Judul Bahasa Inggris', data.englishTitle)
      .addField('Judul Jepang', data.japaneseTitle)
      .addField('Jenis', data.type)
      .addField('Semua episode', data.episodes)
      .addField('Rating', data.rating)
      .addField('ditayangkan', data.aired)
      .addField('Skor', data.score)
      .addField('Statistik Skor', data.scoreStats)
      .addField('Link', data.url)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
      

      message.channel.send(malEmbed);

    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Harap masukkan nama yang valid!"
            }}));

}
}
module.exports.help = {
    name: "animesearch",
    description: "Cari anime",
    usage: "animesearch <name>",
    type: "Fun"  
}

