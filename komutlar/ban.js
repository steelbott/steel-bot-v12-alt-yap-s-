const Discord = require('discord.js');


exports.run = async(client, message, args) => {
  if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply('<a:no:845350575470411786> I Botun Yetkisi Yetmemektedir!');
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("<a:no:845350575470411786> I Bu komutu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.");
  var guild = message.guild;
  var banlayan = message.author.tag;
  let banxx = await message.guild.fetchBans();

  var kisi = message.mentions.users.first() || client.users.resolve(args[0]) || client.users.cache.find(u => u.username === args[0]) || client.users.cache.get(args[0]);
  if(!kisi) return message.reply("Banlayacağım Kişiyi Belirtmen Gerekiyor `ID / @kullanici`")
let sebeb = args.slice(1).join(' ') || 'Belirtilmemiş'


    if(message.author == kisi) return message.reply("Kendini Yasaklayamazsın!")
    if (banxx.get(kisi.id)) return message.reply(":x: Kişi Zaten Yasaklanmış!")

 var now = new Date()
 if (!sebeb) {
         try {
          kisi.send(`<a:uyari:846435581806641212> ${kisi} **${guild}** adlı sunucudan yasaklandınız. sebeb: \`${sebeb}\``)
          message.channel.send(`**${kisi} Yasaklandı**`)
          guild.members.ban(kisi, { reason: sebeb/*, days: gun*/});
        } catch (error) {
          message.reply("Bir hata oluşdu rolüme bakmaya ne dersin")
          console.log(error)
        }
 } else {
 try {
   kisi.send(`<a:uyari:846435581806641212> ${kisi} **${guild}** adlı sunucudan yasaklandınız. \nNedeni: **${sebeb}**`)
   message.channel.send(`**${kisi} Yasaklandı. \nNedeni:** \`${sebeb}\``)
   guild.members.ban(kisi, { reason: sebeb/*, days: gun*/});
 } catch (error) {
   message.reply("Bir hata oluşdu rolüme bakmaya ne dersin")
   console.log(error)
 }

 }
};


exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'ban atar !',
  usage: 'ban'
};