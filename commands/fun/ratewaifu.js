const Discord = require('discord.js')
const cooldown = new Set()

module.exports = {
  name: "ratewaifu",
  aliases: [],
  execute: async(client, message, args, data, db) => {

  if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`Anda harus menunggu 5 detik!`)
    .setColor(`RED`)
    .setFooter(`Pesan ini akan dihapus dalam 5 detik..`)
    return message.channel.send(cooldownemb).then(message => {
     message.delete(5000) 
    })

    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
 let m421 = args.join(" ");
  if (!m421) return  message.channel.send({embed: {
                color: 16734039,
                description: "Silakan masukkan nama waifu!"
            }})
  if (m421.length > 30) return  message.channel.send({embed: {
                color: 16734039,
                title: "Saya tidak bisa menilai waifu Anda. Panjang nama maksimal adalah 30"
            }})
  let result = Math.floor((Math.random() * 100) + 0);

    const happyrate = new Discord.MessageEmbed()
  .setDescription(`saya akan menilai **${m421}** ${result}/100 ?`)
  .setColor(`GREEN`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`)

      const sadembed = new Discord.MessageEmbed()
  .setDescription(`saya akan menilai **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`)

        const idkembed = new Discord.MessageEmbed()
  .setDescription(`saya akan menilai **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`)

      const shrugembed = new Discord.MessageEmbed()
  .setDescription(`saya akan menilai **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`)

          const okembed = new Discord.MessageEmbed()
  .setDescription(`saya akan menilai **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`)

const thumbupembed = new Discord.MessageEmbed()
  .setDescription(`saya akan menilai **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`)

const eyesembed = new Discord.MessageEmbed()
  .setDescription(`saya akan menilai **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`)

  if (result > 90) return message.channel.send(happyrate)
  if (result < 30) return message.channel.send(sadembed)
  if (result > 40) return message.channel.send(idkembed)
  if (result > 50) return message.channel.send(shrugembed)
  if (result > 60) return message.channel.send(okembed)
  if (result > 70) return message.channel.send(thumbupembed)
  if (result > 80) return message.channel.send(eyesembed)
} 
}
module.exports.help = {
    name: "ratewaifu",
    description: "Beri nilai seorang waifu",
    usage: "ratewaifu <name> <points>",
    type: "Fun" 
}