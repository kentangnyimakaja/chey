const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
  name: "wiki",
  cooldown: 8000,
  category: "info",
  uimage: '',
  usage: "`wiki <query>`",
  description: "Mengembalikan artikel dari Wikipedia",
  execute: async (client, message, args) => {

    const body = await fetch(

      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        args.join(" ")
      )}`

    ).then(res => res.json().catch(() => { }));

    if (!body)

      return message.channel.sendmessage.channel.send({

        embed: {

          color: "RANDOM",

          title: "❌ Halaman Kesalahan Tidak Ditemukan."

        }

      });

    if (body.title && body.title === "Not found.")

      return message.channel.send({

        embed: {

          color: "RANDOM",

          title: "❌ Halaman Kesalahan Tidak Ditemukan."

        }

      });

    const embed = new Discord.MessageEmbed()

      .setTitle(`🌐 ${body.title} `)

      .addField(

        "Info lebih lanjut : ",

        `**[Klik di sini!](${body.content_urls.desktop.page})**`,

        true

      )

      .setDescription(`** ${body.extract}**`)

      .setColor(`RANDOM`)
      .setFooter(`WikiPedia Support`)

      .setTimestamp();

    if (body.thumbnail) embed.setThumbnail(body.thumbnail.source);

    message.channel.send(embed);

  }

};
