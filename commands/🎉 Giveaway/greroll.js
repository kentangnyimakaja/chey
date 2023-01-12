const ms = require('ms');

module.exports = {
    name: "reroll",
    aliases: ["greroll"],
    execute: async (client, message, args) => {


        // If the member doesn't have enough permissions
        if (!message.member.hasPermission("MANAGE_GUILD")) {
            message.channel.send(
                "Kamu membutuhkan `MANAGE GUILD` untuk mengakses perintah ini!"
            );
            return;
        }

        // If no message ID or giveaway name is specified
        if (!args[0]) {
            return message.channel.send(':x: Anda harus menentukan ID pesan yang valid!');
        }

        // try to found the giveaway with prize then with ID
        let giveaway =
            // Search with giveaway prize
            client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
            // Search with giveaway ID
            client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

        // If no giveaway was found
        if (!giveaway) {
            message.channel.send(`:x: Tidak ada hadiah yang ditemukan untuk \`${messageID}\`, silakan periksa apakah Anda memiliki pesan yang benar dan coba lagi.`);
        }

        // Reroll the giveaway
        client.giveawaysManager.reroll(giveaway.messageID, {
            messages: {
                congrat: client.config.giveawayEmoji + 'New winner(s) : {winners}! Congratulations!'
            }
        })
            .then(() => {
                // Success message
                message.channel.send('✅ Giveaway rerolled!');
            })
            .catch((e) => {
                if (e.startsWith(`Hadiah dengan ID pesan ${giveaway.messageID} belum berakhir.`)) {
                    message.channel.send('Giveaway ini belum berakhir!');
                } else {
                    console.error(e);
                    message.channel.send(':x: ada kesalahan');
                }
            });
    }
}
module.exports.help = {
    name: "greroll",
    description: "Ini akan memutar ulang Giveaway",
    usage: "greroll <message_id>",
    type: "Giveaway"
}