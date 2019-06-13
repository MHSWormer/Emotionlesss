const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "token"

bot.on('ready', function(message){
    console.log("Ready");
})

bot.on('message', (message) => {
    if(message.content == ".Worm King") {
        message.reply("MHS_Worm in the worm king!");
    }
});



bot.on('message', (message) => {
    if(message.content == ".Worm Beauty") {
        message.reply("The beauty of worms is 100% compared to humans!");
    }
});



bot.on('message', (message) => {
    if(message.content == ".Worm Gay") {
        message.reply("Worm's are 50% gay!");
    }
});



bot.on('message', (message) => {
    if(message.content == "**.Bold**") {
        message.reply("**You are a bold wormy!**");
    }
});














bot.on('message', (message) => {
    if(message.content == ".Changelog") {
        message.reply("```Added food commands, you can see them under Bartender using the link found by using the commands .Cmds ```");
    }
});


bot.on('message', (message) => {
    if(message.content == ".Cmds") {
        message.reply("You will see a list of commands at https://docs.google.com/document/d/1BqQQ5NcRBw9gBoqrAam76JyeTaoZw5igQDyjdKFNitY/edit?usp=sharing!");
    }
});


bot.on('message', (message) => {
    if(message.content == ".Help") {
        message.reply("You will see a list of commands at https://docs.google.com/document/d/1BqQQ5NcRBw9gBoqrAam76JyeTaoZw5igQDyjdKFNitY/edit?usp=sharing!");
    }
});


bot.on('message', (message) => {
    if(message.content == ".Similar Bots") {
        message.reply("You will see a list of similar bots at https://docs.google.com/document/d/1BqQQ5NcRBw9gBoqrAam76JyeTaoZw5igQDyjdKFNitY/edit?usp=sharing!");
    }
});


bot.on('message', (message) => {
    if(message.content == ".Similar Servers") {
        message.reply("You will see a list of Similar Servers at https://docs.google.com/document/d/1BqQQ5NcRBw9gBoqrAam76JyeTaoZw5igQDyjdKFNitY/edit?usp=sharing!");
    }
});


bot.on('message', (message) => {
    if(message.content == ".Discord") {
        message.reply("Join our Discord Server! https://discord.gg/TtC8GVT");
    }
});


bot.on('message', (message) => {
    if(message.content == ".Drinks") {
        message.reply("We have Beer, Wine, and Soda! Do .Food for a list of food!");
    }
});


bot.on('message', (message) => {
    if(message.content == ".Sell Beer") {
        message.reply("Has handed you your Beer!");
    }
});


bot.on('message', (message) => {
    if(message.content == ".Sell Wine") {
        message.reply("Has handed you your Wine!");
    }
});


bot.on('message', (message) => {
    if(message.content == ".Sell Soda") {
        message.reply("Has handed you your Soda!");
    }
});


bot.on('message', (message) => {
    if(message.content == ".Food") {
        message.reply("We have Donuts! Chocolate Donuts and we have Vanilla Donuts! For a list of drinks do .Drinks!");
    }
});


bot.on('message', (message) => {
    if(message.content == ".Sell Choco Donut") {
        message.reply("Has handed you your Chocolate Donut!");
    }
});


bot.on('message', (message) => {
    if(message.content == ".Sell Chocolate Donut") {
        message.reply("Has handed you your Chocolate Donut!");
    }
});


bot.on('message', (message) => {
    if(message.content == ".Sell Van Donut") {
        message.reply("Has handed you your Vanilla Donut!");
    }
});


bot.on('message', (message) => {
    if(message.content == ".Sell Vanilla Donut") {
        message.reply("Has handed you your Vanilla Donut!");
    }
});


bot.login(process.env.BOT_TOKEN);
