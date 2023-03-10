const Discord = module.require("discord.js");
var deaths = [
  "[NAME1] ran over [NAME2] with a School Bus! :bus:",
  "[NAME1] poisoned [NAME2]’s candy bar",
  "[NAME2] swallowed a grenade",
  "[NAME1] sent John Wick to kill [NAME2]!",
  "[NAME1] pressed Ctrl+Alt+Del deleting [NAME2] from the Universe!",
  "[NAME1] threw the ban hammer at [NAME2] for spamming",
  "[NAME2] stepped on a lego brick"
];


module.exports = {
  name: "kill",
  aliases: [],
  execute: async (client, message, args, data, db) => {
    let member = await message.mentions.members.first();

    if (!member) {
      return message.channel.send({
        embed: {
          color: 16734039,
          description: "Sebutkan anggota yang valid dari server ini!"
        }
      })
    }

    if (message.author === member) {
      return await message.channel.send({
        embed: {
          color: 16734039,
          description: "Anda tidak bisa bunuh diri!"
        }
      })
    }
    var pickeddeath = deaths[Math.floor(Math.random() * deaths.length)];
    var change1 = pickeddeath.replace("[NAME1]", message.author.username);
    var change2 = change1.replace("[NAME2]", member.displayName);

    await message.channel.send({
      embed: {
        color: 16734039,
        author: {
          name: "Batu nisan dari " + member.displayName + "!",
          icon_url: member.user.displayAvatarURL
        },
        title: "Penyebab Kematian",
        description: change2
      }
    });
  }
}
module.exports.help = {
  name: "kill",
  description: "Membunuh pengguna",
  usage: "kill <user>",
  type: "Fun"
}