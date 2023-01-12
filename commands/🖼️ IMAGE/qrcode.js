const Discord = require("discord.js")
const AmeClient = require("amethyste-api");
module.exports = {
  name: "qrcode",
  aliases: ["code"],
  execute: async (client, message, args, data, db) => {
    const text = args.join(" ");
    if (!text) {
      return message.channel.send("MISSING_TEXT");
    }



    const embed = new Discord.MessageEmbed()
      .setImage(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.replace(new RegExp(" ", "g"), "%20")}`)
      .setTimestamp()
       .setFooter(`Requested by ${message.author.tag}`)
    message.channel.send(embed)



  }
}
module.exports.help = {
  name: "qrcode",
  description: "Mengirimkan foto kode QR teks yang telah Anda berikan",
  usage: "qrcode",
  type: "Image"
}