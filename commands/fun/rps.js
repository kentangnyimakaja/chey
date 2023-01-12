const discord = require('discord.js')
module.exports = {
    name: "rps",
    description: "mainkan permainan batu, kertas, dan gunting",
    execute: async (client, message, args) => {
        let embed = new discord.MessageEmbed()
            .setTitle("RPS GAME")
            .setDescription("React to play!")
            .setTimestamp()
            .setFooter(`Requested by ${message.author.tag}`)
        let msg = await message.channel.send(embed)
        await msg.react("🗿")
        await msg.react("✂")
        await msg.react("📜")

        const filter = (reaction, user) => {
            return ['🗿', '✂', '📜'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗿', '✂', '📜']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, { max: 1, time: 60000, error: ["time"] })
            .then(
                async (collected) => {
                    const reaction = collected.first()

                    let result = new discord.MessageEmbed()
                        .setTitle("RESULT")
                        .addField("Pilihanmu", `${reaction.emoji.name}`)
                        .addField("Pilihanku", `${me}`)
                        .setTimestamp()
                        .setFooter(`Requested by ${message.author.tag}`)
                    await msg.edit(result)

                    if ((me === "🗿" && reaction.emoji.name === "✂") ||
                        (me === "📜" && reaction.emoji.name === "🗿") ||
                        (me === "✂" && reaction.emoji.name === "📜")) {
                        message.reply("Kamu kalah!");
                    } else if (me === reaction.emoji.name) {
                        return message.reply("Ini seri!");
                    } else {
                        return message.reply("Kamu menang!");
                    }
                })

            .catch(collected => {
                message.reply('Proses telah dibatalkan karena Anda tidak merespons tepat waktu!');
            })
    }
}