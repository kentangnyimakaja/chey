const Discord = require("discord.js");

module.exports = {
  name: "flipcoin",
  aliases: ["coinflip"],
  execute: async (client, message, args, data, db) => {


    function doanswer() {
      var answers = ["Heads", "Tails"]
      return answers[Math.floor(Math.random() * answers.length)];
    }

    await message.channel.send({
      embed: {
        color: 3447003,
        description: "Aku mendapatkan : " + doanswer(),
      }
    });


  }
}
module.exports.help = {
  name: "flipcoin",
  description: "Membalik koin virtual",
  usage: "flipcoin",
  type: "Fun"
}
