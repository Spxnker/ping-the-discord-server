const Discord = require('discord.js');
const client = new Discord.Client();
// Spanker Ve Null Tarafından Ananazın amına aramağan olsun.

// 5, 6 Saniyelik Ses bağlantınız gider arkadaşlarınıza çaka yapmak içni bire bir.
// ya da sunucu patlatacaksınız sunucunun pinigini attırmak için 'de kullanılabilir.


// Sınavım var ben ne yapıyorum off neyse edebiyat sınavıma çalışmaya gidiyorum saat 23:35 0 bilgi offfff

const serverUpdateCommands = '!sese vur'
const eski_haline_getir = '!eski haline getir'
const voicee = 'ses' // Botların Bağlanacağı Ses Kanalı.

const  kısım_gerceklesti = 'Kısım Gerçekleşti'

// Çok fazla Token Yazmayın 3 tane gayet yeterlidir.
// Çok fazla token açarsanız sunucunun şaftı kayar
const panker = [
    'ODkyNzYwNzI5NzMwNTc2NDM0.TokenYazcNAknKyOKsAcALISmAZvlLA', // Ayrı Ayrı Token Yazın
  'ODkyNzYwNzI5NzMwNTc2NDM0.TokenYazcNAknKyOKsAcALISmAZvlLA',
  'ODkyNzYwNzI5NzMwNTc2NDM0.TokenYazcNAknKyOKsAcALISmAZvlLA',
  'ODkyNzYwNzI5NzMwNTc2NDM0.TokenYazcNAknKyOKsAcALISmAZvlLA',
  'ODkyNzYwNzI5NzMwNTc2NDM0.TokenYazcNAknKyOKsAcALISmAZvlLA'  
];



for (let simple = 0; simple < panker.length; simple++) {
  const token = panker[simple];
  const client = new Discord.Client();
  client.login(token);

const channel = client.channels.cache.get(voicee);

client.once('ready', async () => {
client.user.setPresence({ activity: { name: `Spanker Tarafından Geliştirildi.` }, status: 'dnd' });
if (channel && channel.joinable) channel.join().console.log('Voice connected!');
console.log(`${client.user.tag}, Giriş Gerçekleşti.`)
});
setInterval(() => {

  const channel = client.channels.cache.get(voicee);

  if (!channel) return
  
  channel.join();
}, 1);
          
client.on('message', async  message =>{
  const onayla = "✅", reddet = "❌" // reddeti kullanmadım ileriki zamanlarda 20 star gelirse daha güzel bir şey yapıp eklerim :p

  const nullvurdu = [onayla] 

  const nullke = nullvurdu[Math.floor(Math.random() * nullvurdu.length)];

  if(message.content === eski_haline_getir){

    await message.react(nullke)

     setTimeout(function() {message.guild.setRegion('europe'),  message.channel.send('Eski Haline Düzeltiliyor.').then(let => {

       setTimeout(function() {

         let duzeltildi = "~~Eski Haline Düzeltiliyor.~~\n**Düzeltildi.** 🔐", duzetlilmedi = `~~Eski Haline Düzeltiliyor.~~\n**düzeltilemedi.** (Lütfen Yeniden Deneyiniz. **${message.content}**)`

         const spankgod = [duzeltildi, duzetlilmedi]
         const console = spankgod[Math.floor(Math.random() * spankgod.length)];

 let.edit(console).catch(err => message.channel.send(duzetlilmedi))

       }, 3000)
     }
       )
   }, 2000)
   }
  if(message.content === serverUpdateCommands){

    message.channel.send('Sunucuya Ping Saldırısı Başladı! 🔐').then(let => {

    setTimeout(function() {

      let.edit("Başarıyla Ping Saldırısı Bitti.")

    }, 46000)
  })
  
    setTimeout(function() {message.guild.setRegion('japan'), message.channel.send('0. '+kısım_gerceklesti+'')}, 500)


    setTimeout(function() {message.guild.setRegion('eu-west'), message.channel.send('1. '+kısım_gerceklesti+'') }, 1000)


    setTimeout(function() {message.guild.setRegion('dubai'), message.channel.send('2. '+kısım_gerceklesti+'') }, 4000)


     setTimeout(function() {message.guild.setRegion('st-pete'), message.channel.send('3. '+kısım_gerceklesti+'') }, 6000)


     setTimeout(function() {message.guild.setRegion('atlanta'), message.channel.send('4. '+kısım_gerceklesti+'') }, 8000)


     setTimeout(function() {message.guild.setRegion('amsterdam'), message.channel.send('5. '+kısım_gerceklesti+'') }, 12000)


     setTimeout(function() {message.guild.setRegion('sydney'), message.channel.send('7. '+kısım_gerceklesti+'') }, 15000)


     setTimeout(function() {message.guild.setRegion('japan'), message.channel.send('8. '+kısım_gerceklesti+'') }, 17000)


     setTimeout(function() {message.guild.setRegion('dubai'), message.channel.send('9. '+kısım_gerceklesti+'') }, 19000)


     setTimeout(function() {message.guild.setRegion('st-pete'), message.channel.send('10. '+kısım_gerceklesti+'') }, 22000)


     setTimeout(function() {message.guild.setRegion('atlanta'), message.channel.send('11. '+kısım_gerceklesti+'') }, 24000)


     setTimeout(function() {message.guild.setRegion('amsterdam'), message.channel.send('12. '+kısım_gerceklesti+'') }, 26000)

     

     setTimeout(function() {message.guild.setRegion('sydney'), message.channel.send('13. '+kısım_gerceklesti+'') }, 28000)

    

     setTimeout(function() { message.guild.setRegion('japan'), message.channel.send('14. '+kısım_gerceklesti+'') }, 34000)

  

     setTimeout(function() {message.guild.setRegion('dubai'), message.channel.send('15. '+kısım_gerceklesti+'') }, 38000) 


     setTimeout(function() {message.guild.setRegion('st-pete'), message.channel.send('16. '+kısım_gerceklesti+'') }, 40000)


     setTimeout(function() { message.guild.setRegion('atlanta'), message.channel.send('17. '+kısım_gerceklesti+'') }, 43000)

   

     setTimeout(function() {message.guild.setRegion('japan'),  message.channel.send('18. '+kısım_gerceklesti+'')  }, 46000)

    
  }

})

}



