const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : m7md');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'ŤĤĔ ČĤĨŃŴĨ Ď'Ź฿Ĩ ♥',
     details: `ŤĤĔ ČĤĨŃŴĨ Ď'Ź฿Ĩ ♥`,
     url: 'http://twitch.tv/M7md_Salih',
     state: `ŤĤĔ ČĤĨŃŴĨ Ď'Ź฿Ĩ ♥`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'ŤĤĔ ČĤĨŃŴĨ Ď'Ź฿Ĩ ♥',
        large_image: `377480353259978752`,
        large_text: `ŤĤĔ ČĤĨŃŴĨ Ď'Ź฿Ĩ ♥` }

  }
    });
});
اقولها

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
