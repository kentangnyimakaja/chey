const Discord = module.require("discord.js");

module.exports = {
  name: "dice",
  aliases: [],
  execute: async(client, message, args, data, db) => {

function dice() {
    var answers = ["1", "2", "3", "4", "5", "6"]
    return answers[Math.floor(Math.random()*answers.length)];
}
  
   var embed = new Discord.MessageEmbed()
    .setDescription(":game_die: Dadu digulung " + `${dice()}` + "! :game_die:")
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.author.tag}`)
  
  message.channel.send(embed=embed);

}
}
module.exports.help = {
    name: "dice",
    description: "Gulung dadu",
    usage: "dice",
    type: "Fun" 
}