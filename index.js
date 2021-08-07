const { Webhook, MessageBuilder } = require('discord-webhook-node');
const configs = require("./configs/config.json")
const hook = new Webhook(configs.WEBHOOK);
hook.setUsername(configs.embeds.NAME);
hook.setAvatar(configs.embeds.LOGO);
 
const embed = new MessageBuilder()
.setColor(configs.embeds.COLOR)
.setThumbnail(configs.embeds.LOGO)
.setDescription("**" + `${configs.embeds.NAME}` + "**"
+ "\n"
+ "───────────────"
+ "\n\n"
+ "**" + `${configs.EMOJIS.ONLINE} Server Up!` + "**"
+ "\n\n"
+ "───────────────"
+ "\n\n"
+ `<#${configs.CHANNELS.CONNECT}>`
+ "\n\n"
+ "───────────────"
+ "\n\n"
+  "**" + ":video_game:Have Fun!:video_game:" + "**" 
+ "\n\n"
+ "───────────────"
+ "\n\n")
hook.send("||@everyone||");
hook.send(embed);