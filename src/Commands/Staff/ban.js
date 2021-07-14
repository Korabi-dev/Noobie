  
module.exports = {
    permissions: ["BAN_MEMBERS"],
    botpermissions: ["BAN_MEMBERS"],
    run: async(client, message, args) => {
        var reason = "No Reason."
        if(args[1]) reason = args.slice(1).join(" ")

        var target = message.mentions.members.first()
        if(!target){
            if(!args[0]) return message.reply(client.embed("Error", `You didn't provide a user to ban.`))
            const user = message.guild.members.cache.get(args[0])
            if(user && user.permissions.has("MANAGE_MESSAGES"))return message.reply(client.embed("Error", "You cannot ban a moderator."))
              message.guild.members.ban(args[0], {reason: reason}).then(user => {
                    message.reply(client.embed("Success!", `Banned user ${user.tag}`))
                }).catch(e => {
                    message.reply(client.embed("Error", "Could Not Ban This User."))  
                })
               } else if(target) {
                if(target.permissions.has("MANAGE_MESSAGES")) return message.reply(client.embed("Error", "You cannot ban a moderator."))
  message.guild.members.ban(target.id, {reason: reason}).then(user => {
                    message.reply(client.embed("Success!", `Banned user ${user.tag}`))
                }).catch(e => {
                    message.reply(client.embed("Error", "Could Not Ban This User."))  
                })

        }

    }
}