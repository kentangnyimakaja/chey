const Discord = require('discord.js');
const { YTSearcher } = require('ytsearcher');
const cnf = require('../../config.js');

const searcher = new YTSearcher(cnf.api);

module.exports = {
  name: "youtube",
  aliases: [],
  execute: async (client, message, args, data, db) => {
    try {
      if (!args[0]) return message.channel.send({
        embed: {
          color: 16734039,
          description: "Silakan masukkan kata untuk dicari!"
        }
      })
      if (args.join(" ").includes("sex") || args.join(" ").includes("boobs") || args.join(" ").includes("booty")) {
        return message.reply("Tolong jangan mencari hal hal NSFW");
      }
      let msg = await message.channel.send({
        embed: {
          color: 16734039,
          description: "🔎 Searching on Youtube..."
        }
      })

      searcher.search(args.join(' ')).then(info => {
        if (!info.first) {
          let embed2 = new Discord.MessageEmbed()
            .setDescription("Saya tidak dapat menemukan apa pun di Youtube dengan kueri Anda!")
            .setColor('FF5757')
            .setTimestamp()
            .setFooter(`Requested by ${message.author.tag}`)
          return msg.edit(embed2);
        }
        let embed = new Discord.MessageEmbed()
          .setTitle("🔎 Hasil Pencarian Youtube:")
          .setDescription("`Hasil pertama:` " + info.first.url + " - " + info.first.title + "\n \`\`\`" + info.first.description + "\`\`\`")
          .setColor('RANDOM')
          .setTimestamp()
          .setFooter(`Requested by ${message.author.tag}`)
        msg.edit(embed);
      });

    } catch (err) {
      return message.channel.send({
        embed: {
          color: 16734039,
          description: "Ada yang salah... :cry:"
        }
      })
    }
  }
}
module.exports.help = {
  name: "youtube",
  description: "Cari di youtube",
  usage: "search <word>",
  type: "Fun"
}