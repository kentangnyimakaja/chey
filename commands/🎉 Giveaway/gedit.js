const ms = require('ms');

module.exports = {
    name: "edit",
    aliases: ["gedit"],
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

        // If no field to edit is specifed
        if (!args[1]) {
            return message.channel.send(':x: Anda perlu mengedit hadiah atau pemenangnya!');
        }

        if (args[1] === 'prize') {
            let newPrize = args.slice(2).join(' ')

            if (!newPrize) return message.channel.send(':x: Anda harus memberikan hadiah baru!');

            client.giveawaysManager.edit(args[0], {
                newPrize: newPrize,
            }).then(() => {
                // here, we can calculate the time after which we are sure that the lib will update the giveaway
                const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
                message.channel.send('✅ Hadiah giveaway akan diperbarui dalam waktu kurang dari ' + numberOfSecondsMax + ' detik.');
            }).catch((err) => {
                message.channel.send(`:x: Tidak ada hadiah yang ditemukan untuk \`${args[0]}\`, silakan periksa apakah Anda memiliki pesan yang benar dan coba lagi.`);
            });
        } else
            if (args[1] === 'winners') {
                let newWinners = args[2]
                if (isNaN(newWinners) || (parseInt(newWinners) <= 0)) {
                    return message.channel.send(':x: Anda harus menentukan jumlah pemenang yang valid!');
                }

                client.giveawaysManager.edit(args[0], {
                    newWinnerCount: newWinners,
                }).then(() => {
                    // here, we can calculate the time after which we are sure that the lib will update the giveaway
                    const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
                    message.channel.send('✅ Jumlah pemenang giveaway akan diperbarui dalam waktu kurang dari ' + numberOfSecondsMax + ' detik.');
                }).catch((err) => {
                    message.channel.send(`:x: Tidak ada hadiah yang ditemukan untuk \`${args[0]}\`, silakan periksa apakah Anda memiliki pesan yang benar dan coba lagi.`);
                });
            } else {
                return message.channel.send(':x: Anda perlu mengedit hadiah atau pemenangnya!');
            }
    }
}
module.exports.help = {
    name: "gedit",
    description: "Untuk mengedit hadiah",
    usage: "gedit <message_id> <to chnage things>",
    type: "Giveaway"
}