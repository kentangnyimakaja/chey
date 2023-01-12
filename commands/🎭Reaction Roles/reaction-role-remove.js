
module.exports = {
  name: "reaction-role-remove",
  aliases: ["reactionrole-remove"],
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return;
    }
    if (!args[0]) {
      return message.reply("Tolong Beri saya ID Pesan");
    }
    if (!args[1]) {
      return message.reply("PLease Beri saya emoji untuk menghapus reaksi itu");
    }
    client.reactionRoleManager.delete({
      messageID: args[0],
      reaction: args[1],
    });
    message.channel.send(`Selesai menghapus peran reaksi`);


    return;
  }
}
