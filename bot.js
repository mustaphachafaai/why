const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : m7md');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'ŤĤĔ ČĤĨŃŴĨ',
     details: `ŤĤĔ ČĤĨŃŴĨ`,
     url: 'http://twitch.tv/M7md_Salih',
     state: `ŤĤĔ ČĤĨŃŴĨ`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'ŤĤĔ ČĤĨŃŴĨ',
        large_image: `377480353259978752`,
        large_text: `ŤĤĔ ČĤĨŃŴĨ` }

  }
    });
});
اقولها

client.login("NTQxMzg2MjM1ODUyMzU3NjM0.D17YPg.JjsIHhL5enUDF2zhhROOu1_hM58");
