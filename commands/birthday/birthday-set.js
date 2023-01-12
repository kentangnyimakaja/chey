const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
        name: "birthday-set",
        aliases: ["set-hbd", "set-bd"],
        execute: async (client, message, args) => {
                const months = {
                        1: "January",
                        2: "February",
                        3: "March",
                        4: "Apirl",
                        5: "May",
                        6: "June",
                        7: "July",
                        8: "August",
                        9: "September",
                        10: "October",
                        11: "November",
                        12: "December"
                };
                if (message.mentions.users.first()) {
                        return message.channel.send("Anda hanya dapat mengatur Ulang Tahun Diri Sendiri");
                }
                const joined = args.join(" ");
                if (message.content.includes("/")) {
                        var split = joined.trim().split("/");
                }
                if (message.content.includes("-")) {
                        var split = joined.trim().split("-");
                }
                let [day, month] = split;
                if (!day) return message.reply('Harap tentukan tanggal! misal : `==birthday-set 24-9`');
                if (!month) return message.reply('Harap tentukan bulan! misal : `==birthday-set 24-9`');

                if (isNaN(day) || isNaN(month)) return message.reply('Harap tentukan nomor yang valid! misal : `==birthday-set 24-9`');
                day = parseInt(day);
                month = parseInt(month);
                if (!day || day > 31) return message.reply('Harap tentukan tanggal dalam 31! misal : `==birthday-set 24-9`');
                if (!month || month > 12) return message.reply('Harap tentukan bulan dalam waktu 12! misal : `==birthday-set 24-9`');
                const convertedDay = suffixes(day);
                const convertedMonth = months[month];
                const BirthdayString = `${convertedDay} of ${convertedMonth}`;
                db.set(`birthdate_${message.author.id}`, BirthdayString);
                message.reply(`${BirthdayString} telah ditetapkan sebagai Tanggal ulang tahunmu!`)
        }
}
function suffixes(number) {
        const converted = number.toString();

        const lastChar = converted.charAt(converted.length - 1);

        return lastChar == "1"
                ? `${converted}st`
                : lastChar == "2"
                        ? `${converted}nd`
                        : lastChar == "3"
                                ? `${converted}rd`
                                : `${converted}th`;
}