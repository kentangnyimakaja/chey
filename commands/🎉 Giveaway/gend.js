const ms = require('ms');

module.exports = {
    name: "end",
    aliases: ["gend"],
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
            return message.channel.send(':x: Tidak dapat menemukan hadiah untuk `' + args.join(' ') + '`.');
        }

        // Edit the giveaway
        client.giveawaysManager.edit(giveaway.messageID, {
            setEndTimestamp: Date.now()
        })
            // Success message
            .then(() => {
                // Success message
                message.channel.send('✅ Giveaway akan berakhir kurang dari ' + (client.giveawaysManager.options.updateCountdownEvery / 1000) + ' seconds...');
            })
            .catch((e) => {
                if (e.startsWith(`Hadiah dengan ID pesan ${giveaway.messageID} sudah berakhir.`)) {
                    message.channel.send('Giveaway ini sudah berakhir!');
                } else {
                    console.error(e);
                    message.channel.send(':x: ada kesalahan');
                }
            });

    }
}
module.exports.help = {
    name: "gend",
    description: "Ini mengakhiri Giveaway",
    usage: "gend <message_id> or <Giveaway_Prize_Name>",
    type: "Giveaway"
}