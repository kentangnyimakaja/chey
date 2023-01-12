const Discord = require("discord.js");
const ms = require("parse-ms");
const config = require("../../config.js");
const db = require("quick.db");
module.exports = {
  name: "stats",
  aliases: ["botstat", "stat", "botstats", "botinfo"],
  description: "",
  execute: async (client, message, args) => {


    var prefix = db.fetch(`guildprefix_${message.guild.id}`);
    if (!prefix) {
      var prefix = "==";
    }

    let uptime = [];

    Object.entries(ms(client.uptime)).map((x, y) => {
      if (x[1] > 0 && y < 4) uptime.push(`**${x[1]} ${x[0]}**`);
    });

    const embed = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`${client.user.username} stats`)
      .setThumbnail(client.user.displayAvatarURL())
      .addField(
        `📂 Penggunaan Memori:`,
        (process.memoryUsage().rss / 1024 / 1024).toFixed(2) + "MB",
        false
      )
      .setImage(`https://voidbots.net/api/embed/${client.user.id}`)
      .addField(`🏘 Jumlah Server:`, `${client.guilds.cache.size}`, false)
      .addField(`👥 Jumlah Pengguna:`, `${client.users.cache.size}`, false)
      .addField(`Jumlah Channel:`, `${client.channels.cache.size}`, false)
      .addField(`pecahan:`, `1`, false)
      .addField(`🗓 Tanggal Pembuatan -`, `6 February 2021`, false)
      .addField(`Dibuat dengan :`, `Node.js V12`, false)
      .addField(`:tools: Pengembang Bot Ini -`, `Rahmat ヅ`, false)
      .addField(`⚙ ➡ Prefix : `, `${prefix}`, false)
      .addField(`:chart_with_upwards_trend:Uptime:`, uptime.join(", "), false)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
    message.channel.send(embed);
  }
};
module.exports.help = {
  name: "stats",
  description: "Ini akan menunjukkan kepada Anda statistik bot",
  usage: "stats",
  type: "General"
}