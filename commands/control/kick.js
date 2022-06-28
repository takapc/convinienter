module.exports = {
    name: "kick",
    category: "control",
    description: "Owner or Authorized persons can kick  the member.",

    run: async (client, message, args) => {
        if (!message.member.permissions.has("BAN_MEMBERS"))
            return message.reply(
                "```You do not have permissions.\n権限を持っていません。```"
            );
        if (args.length < 1 || message.mentions.members.size == 0) {
            return message.reply(
                "```Choose you want to kicked member.\nキックしたいメンバーを選んでください。```"
            );
        }
        const members = message.mentions.members;
        let i = 0;
        members.forEach((member) => {
            if (member.kickable) {
                member.kick();
                i++;
            }
        });
        message.reply(
            "```Kicked the player.\n" +
                i +
                "人のプレイヤーをキックしました。```"
        );
    },
};
