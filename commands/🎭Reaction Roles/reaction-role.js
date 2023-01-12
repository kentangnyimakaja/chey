
module.exports = {
  name: "reaction-role",
  aliases: ["rr", "reactionrole"],
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return;
    }
    if (!args[0]) {
      return message.reply(`Anda Tidak Memberi Saya Emoji Di sini adalah perintah untuk melakukan - ${prefix}reaction-role 🎉 6969696969 @Giveaway-Ping/69696969\n Jadi pertama adalah emoji untuk menambahkan\n Kedua adalah Pesan-id untuk ditambahkan\n Ketiga adalah Role To Ping atau Enter Role ID.`);
    }
    if (!args[1]) {
      return message.reply("Anda Tidak Memberi saya ID Pesan untuk menambahkan ini Anda dapat mengirim Pesan Embed Hanya Dengan Bot Dan menambahkan role Reaksi ke dalamnya");
    }
    var role2 = message.mentions.roles.first();


    if (!role2) {
      var role2 = args[2];
      var role2 = message.guild.roles.cache.get(role2);
      console.log("tidak disebutkan");
    }

    if (!role2) {
      return message.reply("Anda tidak memberi saya role");
    }
    client.reactionRoleManager.create({
      messageID: args[1],
      channel: message.channel,
      reaction: args[0],
      role: role2
    })
    message.channel.send(`Selesai Perlu waktu beberapa saat untuk Menambahkan server Anda di database Silakan tunggu`);
    await message.delete();

    return;
  }
}
