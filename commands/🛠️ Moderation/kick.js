const Discord = module.require("discord.js");

module.exports = {
    name: "kick",
    aliases: [],
    execute: async (client, message, args) => {
        {
            if (message.member.hasPermission("KICK_MEMBERS")) {
                let mentioned = await message.mentions.members.first();
                let reason = await args.slice(1).join(' ');

                if (!mentioned)
                    return await message.channel.send({
                        embed: {
                            color: 16734039,
                            description: "Sebutkan anggota yang valid!"
                        }
                    })
                if (!mentioned.kickable)
                    return await message.channel.send({
                        embed: {
                            color: 16734039,
                            description: "Anda tidak dapat menendang anggota ini!"
                        }
                    })
                if (message.author === mentioned) {
                    return await message.channel.send({
                        embed: {
                            color: 16734039,
                            description: "Anda tidak bisa menendang diri sendiri!"
                        }
                    })
                }
                if (!reason)
                    reason = "Tidak ada alasan yang diberikan!";

                mentioned.kick(reason);
                await message.channel.send({
                    embed: {
                        color: 16734039,
                        description: ":arrow_right: " + mentioned.displayName + " telah ditendang! :door:"
                    }
                });
            } else {
                message.channel.send({
                    embed: {
                        color: 16734039,
                        description: "Anda tidak memiliki izin untuk menendang anggota!"
                    }
                })
            }
        }
    }
}
module.exports.help = {
    name: "kick",
    description: "Menendang anggota",
    usage: "kick <mention> <reason>",
    type: "Moderation"
}