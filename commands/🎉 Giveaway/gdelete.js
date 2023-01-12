const ms = require('ms');

module.exports = {
    name: "gdelete",
    aliases: ["gcancel", "gdelete"],
    execute: async (client, message, args) => {


        // If the member doesn't have enough permissions
        if (!message.member.hasPermission("MANAGE_GUILD")) {
            message.channel.send(
                "Kamu membutuhkan `MANAGE GUILD` untuk mengakses perintah ini!"
            );
            return;
        }


        if (!args[0]) {
            return message.channel.send(':x: Anda harus menentukan ID pesan yang valid!');
        }

        let messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("✅ Giveaway deleted!");
        }).catch((err) => {
            message.channel.send(":x: Tidak ada giveaway yang ditemukan untuk \`${messageID}\`, silakan periksa apakah Anda memiliki pesan yang benar dan coba lagi.");
        });
    }
}
module.exports.help = {
    name: "gdelete",
    description: "Ini akan menghapus Giveaway",
    usage: "gdelete <message_id>",
    type: "Giveaway"
}