const Discord = require("discord.js");
const ms = require("ms")
module.exports = {
  name: "hack",
  aliases: ["hax"],
  execute: async (client, message, args) => {
    const hacked = message.mentions.users.first();
    const user = message.mentions.users.first();
    if (user == client.users.cache.get(message.author.id)) {
      return message.channel.send(" ok, Anda diretas Pilih orang lain")
    }
    function wait(ms) {
      let start = new Date().getTime();
      let end = start;
      while (end < start + ms) {
        end = new Date().getTime();
      }
    }

    if (!user) {
      return message.reply("Siapa yang harus diretas? Tolong sebutkan dia");
    }
    const prompt = await message.channel.send(`Hacking ${user ? hacked.username : hacked} now...`);

    await wait(2700);
    await prompt.edit('Menemukan login Discord...');
    await wait(2700);
    await prompt.edit(`Menemukan:\n**Email**: \`${hacked.username}***@gmail.com\`\n**Password**: \`*******\``);
    await wait(3700);
    await prompt.edit('Mengambil DMS');
    await wait(3700);
    await prompt.edit('Daftar kata-kata yang paling umum...');
    await wait(2700);
    await prompt.edit(`Menyuntikkan virus ke dalam diskriminatif #${hacked.discriminator}`);
    await wait(3700);
    await prompt.edit('Virus disuntikkan');
    await wait(3700);

    await prompt.edit('Menemukan IP address');
    await wait(5000);
    await prompt.edit('Spamming email...');
    await wait(6700);
    await prompt.edit('Menjual data ke Facebook...');
    await wait(3700);
    let embed = new Discord.MessageEmbed()
      .setDescription(`Hacking yang berbahaya dan sangat asli dari ${user ? hacked.username : hacked} Baru saja selesai`)
      .setImage("https://media1.tenor.com/images/5ba5501d9ee356cc0c478daa57306c19/tenor.gif?itemid=20964053")
      .setFooter(`Requested by ${message.author.tag}`);
    await prompt.delete
    await message.channel.send(embed);


  }
}
