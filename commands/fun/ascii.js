var figlet = require('figlet');
const Discord = require('discord.js')

module.exports = {
  name: "ascii",
  aliases: ["convert"],
  execute: async(client, message, args, data, db) => {

  var maxLen = 50

  if(args.join(' ').length > maxLen) return message.channel.send({embed: {
                color: 16734039,
                description: "Panjang maksimal adalah " + `${maxLen}` + " !"
            }})

  if(!args[0])return message.channel.send({embed: {
                color: 16734039,
                description: "Silakan masukkan teks untuk dikonversi!"
            }})

  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
return message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }})
      }
      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });


}
}
module.exports.help = {
    name: "ascii",
    description: "Mengonversi teks ke format ascii",
    usage: "ascii <text>",
    type: "Fun" 
}