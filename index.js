(async()=>{
    // default imports
    const events = require('events');
    const { exec } = require("child_process")
    const logs = require("discord-logs")
    const Discord = require("discord.js")
    const { 
        MessageEmbed, 
        MessageButton, 
        MessageActionRow, 
        Intents, 
        Permissions, 
        MessageSelectMenu 
    }= require("discord.js")
    const fs = require('fs');
    let process = require('process');
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // block imports
    const os = require("os-utils");
    let URL = require('url')
    const ms = require("ms")
    let https = require("https")
    const Captcha = require("@haileybot/captcha-generator");
    const S4D_APP_PKG_axios = require('axios')
    const synchronizeSlashCommands = require('@frostzzone/discord-sync-commands');
    const Database  = require("easy-json-database")
    
    // define s4d components (pretty sure 90% of these arnt even used/required)
    let s4d = {
        Discord,
        fire:null,
        joiningMember:null,
        reply:null,
        player:null,
        manager:null,
        Inviter:null,
        message:null,
        notifer:null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };

    // check if d.js is v13
    if (!require('./package.json').dependencies['discord.js'].startsWith("^13.")) {
      let file = JSON.parse(fs.readFileSync('package.json'))
      file.dependencies['discord.js'] = '^13.16.0'
      fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
      exec('npm i')
      throw new Error("Seems you arent using v13 please re-run or run `npm i discord.js@13.16.0`");
    }

    // check if discord-logs is v2
    if (!require('./package.json').dependencies['discord-logs'].startsWith("^2.")) {
      let file = JSON.parse(fs.readFileSync('package.json'))
      file.dependencies['discord-logs'] = '^2.0.0'
      fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
      exec('npm i')
      throw new Error("discord-logs must be 2.0.0. please re-run or if that fails run `npm i discord-logs@2.0.0` then re-run");
    }

    // create a new discord client
    s4d.client = new s4d.Discord.Client({
        intents: [
            Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)
        ],
        partials: [
            "REACTION", 
            "CHANNEL"
        ]
    });

    // when the bot is connected say so
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })

    // upon error print "Error!" and the error
    process.on('uncaughtException', function (err) {
        console.log('Error!');
        console.log(err);
    });

    // give the new client to discord-logs
    logs(s4d.client);

    // pre blockly code
    async function _S4D_inventionFSHapi(_S4D_fshurl, _S4D_fshquery) {
            let _S4D_fshresponse;
            try {
                _S4D_fshresponse = await S4D_APP_PKG_axios.get('https://fsh-bot.frostzzone.repl.co/api/' + _S4D_fshurl + encodeURIComponent(_S4D_fshquery) + '&plain=1');
                _S4D_fshresponse = _S4D_fshresponse.data;
            } catch (error) {
                // if error return empty and log
                _S4D_fshresponse = ""
                console.error('Fsh api error!')
                console.error(error)
            }
            return _S4D_fshresponse;
        }

    // blockly code
    var prefix, bot_server_count, uptime, osiw, nsiw, cpu_usage, text, vds;
    
    function mathRandomInt(a, b) {
      if (a > b) {
        // Swap a and b to ensure a is smaller.
        var c = a;
        a = b;
        b = c;
      }
      return Math.floor(Math.random() * (b - a + 1) + a);
    }
    
    function subsequenceFromStartLast(sequence, at1) {
      var start = at1;
      var end = sequence.length - 1 + 1;
      return sequence.slice(start, end);
    }
    
    
    await s4d.client.login('MTE3OTc3MzIxNzYwNzUzMjU5NQ.Gfa3kp.LJ0drHCRMFxGK8lWIhPg4OqcYR1DcXfIe3o8xY').catch((e) => {
            const tokenInvalid = true;
            const tokenError = e;
            if (e.toString().toLowerCase().includes("token")) {
                throw new Error("An invalid bot token was provided!")
            } else {
                throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
            }
        });
    
    const prfx = new Database('./prefixs.json')
    const ves = new Database('./vers.json')
    const prfx = new Database('./prefixs.json')
    const atmd = new Database('./automod.json')
    const whse = new Database('./whiser.json')
    const spco = new Database('./spamcooldowns.json')
    const strikes = new Database('./strikes.json')
    const lgs = new Database('./lgs.json')
    s4d.client.on('ready', async () => {
    
              while(s4d.client && s4d.client.token) {
                  await delay(50);
                    bot_server_count = (s4d.client.guilds.cache.size);
        s4d.client.user.setPresence({status: "online",activities:[{name:('Bot 1 - Server #' + String(mathRandomInt(1, bot_server_count))),type:"WATCHING"}]});
        await delay(Number(10)*1000);
    
                  console.log('ran')
              }
          prefix = 'm!';
      uptime = 0;
      cpu_usage = null;
    
              while(s4d.client && s4d.client.token) {
                  await delay(50);
                    await delay(Number(1)*1000);
        uptime = (typeof uptime === 'number' ? uptime : 0) + 1;
    
                  console.log('ran')
              }
    
    });
    
    s4d.client.on('guildCreate', async (s4dguild) => {
      if ((s4d.client.guilds.cache.size) >= '10') {
        (s4d.client.guilds.cache.get((s4dguild.id))).leave()((s4d.client.guilds.cache.get('1168853536096923709')).members.cache.get(String('909870379344994305')) || await (s4d.client.guilds.cache.get('1168853536096923709')).members.fetch(String('909870379344994305'))).send({content:String('Bot reached max ammount of servers. You can\'t add this bot to another server unless you remove it from another server!')});
      } else {
        (s4dguild.owner).send({content:String((['# MessaBet addition complete!','\n','MessaBet has been added to your server. MessaBet will do it\'s best to protect your server.','\n','\n','Addition Server: **_',s4dguild.name,'_**'].join('')))});
        prefix = 'm!';
        prfx.set(String((s4dguild.id)), (['"',prefix,'"'].join('')));
        nsiw = whse.get(String((s4dguild.id)));
        if (nsiw == false) {
          (s4d.client.guilds.cache.get((s4dguild.id))).leave()}
        whse.set(String((s4dguild.id)), false);
        (s4dguild.owner).send({content:String(([['# ',(s4d.client.user).nickname == null ? (s4d.client.user).user.username : (s4d.client.user).nickname,' addition complete!'].join(''),'\n',[(s4d.client.user).nickname == null ? (s4d.client.user).user.username : (s4d.client.user).nickname,' has been added to your server.',(s4d.client.user).nickname == null ? (s4d.client.user).user.username : (s4d.client.user).nickname,' will do it\'s best to protect your server.'].join(''),'\n','\n','Addition Server: **_',s4dguild.name,'_**'].join('')))});
        prefix = 'm!';
        prfx.set(String((s4dguild.id)), prefix);
      }
    
    });
    
    synchronizeSlashCommands(s4d.client, [
      {
          name: 'servers-manage',
      		description: 'Manage your premium servers.',
      		options: [
              {
            type: 3,
        	name: 'old-server-id',
            required: true,
        	description: 'ID of the old server.',
            choices: [
    
            ]
        },{
            type: 3,
        	name: 'new-server-id',
            required: true,
        	description: 'ID of the new server.',
            choices: [
    
            ]
        },
          ]
      },{
          name: 'servers-add',
      		description: 'Add MessaBet Plus to a server.',
      		options: [
              {
            type: 3,
        	name: 'server-id',
            required: true,
        	description: 'ID of the server.',
            choices: [
    
            ]
        },
          ]
      },{
          name: 'servers-remove',
      		description: 'Remove MessaBet Plus from a server.',
      		options: [
              {
            type: 3,
        	name: 'server-id',
            required: true,
        	description: 'ID of the server.',
            choices: [
    
            ]
        },
          ]
      },{
          name: 'ping',
      		description: 'See the bot status.',
      		options: [
    
          ]
      },{
          name: 'purge',
      		description: 'Purge message\'s. (Only messages that are <14 days old can be purged)',
      		options: [
              {
            type: 4,
        	name: 'amount',
            required: true,
        	description: 'Amount (Max: 200)',
            choices: [
    
            ]
        },{
            type: 7,
        	name: 'channel',
            required: true,
        	description: 'Channel',
            choices: [
    
            ]
        },
          ]
      },{
          name: 'set-preifx',
      		description: 'Set the server prefix.',
      		options: [
              {
            type: 3,
        	name: 'prefix',
            required: true,
        	description: 'The prefix value.',
            choices: [
    
            ]
        },
          ]
      },{
          name: 'warn',
      		description: 'Warn a member.',
      		options: [
              {
            type: 6,
        	name: 'member',
            required: true,
        	description: 'Member.',
            choices: [
    
            ]
        },{
            type: 3,
        	name: 'reason',
            required: true,
        	description: 'Reason of this warn.',
            choices: [
    
            ]
        },
          ]
      },{
          name: 'timeout',
      		description: 'Add timeout/mute to a member.',
      		options: [
              {
            type: 6,
        	name: 'member',
            required: true,
        	description: 'Member.',
            choices: [
    
            ]
        },{
            type: 4,
        	name: 'time',
            required: true,
        	description: 'Duration of mute. (in minutes)',
            choices: [
    
            ]
        },{
            type: 3,
        	name: 'reason',
            required: true,
        	description: 'Reason of timeout.',
            choices: [
    
            ]
        },
          ]
      },{
          name: 'untimeout',
      		description: 'Remove timeout/mute from a member.',
      		options: [
              {
            type: 6,
        	name: 'member',
            required: true,
        	description: 'Member.',
            choices: [
    
            ]
        },{
            type: 3,
        	name: 'reason',
            required: true,
        	description: 'Reason of untimeout.',
            choices: [
    
            ]
        },
          ]
      },{
          name: 'setup-verification',
      		description: 'Setup verification for this server.',
      		options: [
              {
            type: 7,
        	name: 'channel',
            required: true,
        	description: 'Channel for the verification.',
            choices: [
    
            ]
        },{
            type: 8,
        	name: 'verified-role',
            required: true,
        	description: 'Gaven role after the verification is done and successful.',
            choices: [
    
            ]
        },{
            type: 8,
        	name: 'unverified-role',
            required: true,
        	description: 'Removed role after the verification is done and successful.',
            choices: [
    
            ]
        },{
            type: 4,
        	name: 'duration',
            required: true,
        	description: 'Duration period of the verification.',
            choices: [
    
            ]
        },
          ]
      },{
          name: 'config-automod',
      		description: 'Config auto-mod.',
      		options: [
              {
            type: 3,
        	name: 'anti-invites',
            required: true,
        	description: 'Detects invite links. (true or false)',
            choices: [
    
            ]
        },{
            type: 3,
        	name: 'anti-bad-words',
            required: true,
        	description: 'Detects bad words. (true or false)',
            choices: [
    
            ]
        },{
            type: 3,
        	name: 'anti-spam',
            required: true,
        	description: 'Detects spams. (true or false)',
            choices: [
    
            ]
        },
          ]
      },{
          name: 'setup-logs',
      		description: 'Setup logs for this server.',
      		options: [
              {
            type: 7,
        	name: 'channel',
            required: true,
        	description: 'Channel for the logs.',
            choices: [
    
            ]
        },
          ]
      },{
          name: 'help',
      		description: 'Get help with MessaBet commands',
      		options: [
    
          ]
      },
    ],{
        debug: false,
    
    });
    
    s4d.client.on('interactionCreate', async (interaction) => {
              if ((interaction.commandName) == 'servers-manage') {
        if ((interaction.member) == ((s4d.client.guilds.cache.get('1168853536096923709')).members.cache.get(String('909870379344994305')) || await (s4d.client.guilds.cache.get('1168853536096923709')).members.fetch(String('909870379344994305')))) {
          osiw = whse.get(String((interaction.options.getString('old-server-id'))));
          nsiw = whse.get(String((interaction.options.getString('new-server-id'))));
          if (osiw == true && nsiw == true) {
            await interaction.reply({ content: 'MessaBet Plus is already in this server.', ephemeral: false, components: [] });
          } else if (osiw == false && nsiw == false) {
            await interaction.reply({ content: (['MessaBet Plus is not in the old server; pls use </servers-add:',(s4d.client.user).id,'> to add a server.'].join('')), ephemeral: false, components: [] });
          } else if (osiw == true && nsiw == false) {
            nsiw = true;
            osiw = false;
            whse.set(String((interaction.options.getString('new-server-id'))), nsiw);
            whse.set(String((interaction.options.getString('old-server-id'))), osiw);
            (s4d.client.guilds.cache.get((interaction.options.getString('old-server-id')))).leave()try {
              await interaction.reply({ content: (['Successfully unwhitelisted  ',(s4d.client.guilds.cache.get((interaction.options.getString('old-server-id')))).name,' and whitelisted ',(s4d.client.guilds.cache.get((interaction.options.getString('new-server-id')))).name].join('')), ephemeral: true, components: [] });
    
            } catch (err) {
              await interaction.reply({ content: 'A wrong id was provided!', ephemeral: true, components: [] });
              console.log((err));
    
            }} else if (osiw == false && nsiw == true) {
            await interaction.reply({ content: 'MessaBet Plus is already in this server.', ephemeral: false, components: [] });
          }
        } else {
          await interaction.reply({ content: (['You do not have permission to use this command! ',(s4d.client).emojis.cache.find(emoji => emoji.id === '1149744847549374476'),'\n','Only the user bellow can use this command!','\n',(s4d.client.guilds.cache.get('1168853536096923709')).members.cache.get(String('909870379344994305')) || await (s4d.client.guilds.cache.get('1168853536096923709')).members.fetch(String('909870379344994305'))].join('')), ephemeral: false, components: [] });
        }
      } else if ((interaction.commandName) == 'servers-add') {
        if ((interaction.member) == ((s4d.client.guilds.cache.get('1168853536096923709')).members.cache.get(String('909870379344994305')) || await (s4d.client.guilds.cache.get('1168853536096923709')).members.fetch(String('909870379344994305')))) {
          nsiw = whse.get(String((interaction.options.getString('server-id'))));
          if (nsiw == false) {
            try {
              await interaction.reply({ content: ('Successfully whitelisted ' + String((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).name)), ephemeral: false, components: [] });
    
            } catch (err) {
              await interaction.reply({ content: 'A wrong id was provided!', ephemeral: true, components: [] });
              console.log((err));
    
            }} else {
            await interaction.reply({ content: 'MessaBet Plus is already in this server.', ephemeral: false, components: [] });
          }
        } else {
          await interaction.reply({ content: (['You do not have permission to use this command! ',(s4d.client).emojis.cache.find(emoji => emoji.id === '1149744847549374476'),'\n','Only the user bellow can use this command!','\n',(s4d.client.guilds.cache.get('1168853536096923709')).members.cache.get(String('909870379344994305')) || await (s4d.client.guilds.cache.get('1168853536096923709')).members.fetch(String('909870379344994305'))].join('')), ephemeral: false, components: [] });
          whse.set(String((interaction.options.getString('server-id'))), false);
        }
      } else if ((interaction.commandName) == 'servers-remove') {
        if ((interaction.member) == ((s4d.client.guilds.cache.get('1168853536096923709')).members.cache.get(String('909870379344994305')) || await (s4d.client.guilds.cache.get('1168853536096923709')).members.fetch(String('909870379344994305')))) {
          osiw = whse.get(String((interaction.options.getString('server-id'))));
          if (osiw == true) {
            try {
              await interaction.reply({ content: ('Successfully unwhitelisted ' + String((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).name)), ephemeral: false, components: [] });
              (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).leave()
            } catch (err) {
              await interaction.reply({ content: 'A wrong id was provided!', ephemeral: true, components: [] });
              console.log((err));
    
            }} else {
            await interaction.reply({ content: 'MessaBet Plus is not in this server.', ephemeral: false, components: [] });
          }
        } else {
          await interaction.reply({ content: (['You do not have permission to use this command! ',(s4d.client).emojis.cache.find(emoji => emoji.id === '1149744847549374476'),'\n','Only the user bellow can use this command!','\n',(s4d.client.guilds.cache.get('1168853536096923709')).members.cache.get(String('909870379344994305')) || await (s4d.client.guilds.cache.get('1168853536096923709')).members.fetch(String('909870379344994305'))].join('')), ephemeral: false, components: [] });
        }
      }
      if ((interaction.commandName) == 'ping') {
    
                os.cpuUsage(async function(v){
        	      var obj = v * 100
                  cpu_usage = (obj);
    
        });
        var sts = new Discord.MessageEmbed();
           sts.setTitle(String((String((s4d.client).emojis.cache.find(emoji => emoji.id === '1176254290894004294')) + ' Status')))
           sts.setURL(String());
          sts.addField(String((String((s4d.client).emojis.cache.find(emoji => emoji.id === '1176255420977913866')) + ' Server\'s')), String((s4d.client.guilds.cache.size)), false);
          sts.addField(String((String((s4d.client).emojis.cache.find(emoji => emoji.id === '1154331024554209341')) + ' Member\'s')), String((s4d.client.users.cache.size)), false);
          sts.addField(String((String((s4d.client).emojis.cache.find(emoji => emoji.id === '1154364713820491786')) + ' CPU Usage')), String(cpu_usage), false);
          sts.addField(String((String((s4d.client).emojis.cache.find(emoji => emoji.id === '1181894123788185620')) + ' Ping')), String((String(s4d.client.ws.ping) + ' ms')), false);
          sts.addField(String((String((s4d.client).emojis.cache.find(emoji => emoji.id === '1154326667246964737')) + ' Up Time')), String((String(uptime) + ' Second\'s')), false);
          sts.addField(String((String((s4d.client).emojis.cache.find(emoji => emoji.id === '1181894604803547166')) + 'Memory')), String((['Free Memory: ',os.freemem(),'\n','Total Memory: ',os.totalmem()].join(''))), false);
    
        await interaction.reply({embeds: [sts], ephemeral: false, components: [] });
      } else if ((interaction.commandName) == 'purge') {
        if ((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || (interaction.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) || (interaction.member).permissions.has(Permissions.FLAGS.MANAGE_GUILD) || (interaction.member).permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) {
          (interaction.options.getChannel('channel')).bulkDelete(((interaction.options.getInteger('amount'))|1));
          await interaction.reply({ content: (['Successfully purged ',interaction.options.getInteger('amount'),' messages in ',interaction.options.getChannel('channel')].join('')), ephemeral: true, components: [] });
        } else {
          await interaction.reply({ content: 'You are not authorized to use this command.', ephemeral: true, components: [] });
        }
      } else if ((interaction.commandName) == 'warn') {
        if ((interaction.member) == ((interaction.guild).members.cache.get(String((String((interaction.guild).ownerId)))) || await (interaction.guild).members.fetch(String((String((interaction.guild).ownerId))))) || (interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || (interaction.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
          if (!((interaction.options.getMember('member')).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || (interaction.options.getMember('member')).permissions.has(Permissions.FLAGS.MANAGE_ROLES) || (interaction.options.getMember('member')).permissions.has(Permissions.FLAGS.MANAGE_CHANNELS) || (interaction.options.getMember('member')).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) || (interaction.options.getMember('member')).permissions.has(Permissions.FLAGS.MANAGE_GUILD) || (interaction.options.getMember('member')) == ((s4dmessage.guild).members.cache.get(String((String((s4dmessage.guild).ownerId)))) || await (s4dmessage.guild).members.fetch(String((String((s4dmessage.guild).ownerId))))))) {
            var succ = new Discord.MessageEmbed();
               succ.setTitle(String('Member Warned'))
               succ.setURL(String());
              succ.addField(String('Reason'), String((interaction.options.getString('reason'))), false);
              succ.addField(String('Target'), String((interaction.options.getMember('member'))), false);
              succ.addField(String('Action Author'), String((interaction.member)), false);
    
            await interaction.reply({embeds: [succ], ephemeral: false, components: [] });
            var warn = new Discord.MessageEmbed();
               warn.setAuthor(String(((interaction.member).nickname == null ? (interaction.member).user.username : (interaction.member).nickname)), String(((interaction.member).displayAvatarURL({format:"png"}))), String());
              warn.setTitle(String((['You have been warned in **',(interaction.guild).name,'**'].join(''))))
               warn.setURL(String());
              warn.addField(String('Reason'), String((interaction.options.getString('reason'))), false);
    
            (interaction.options.getMember('member')).send({embeds: [warn]});
          }
        } else {
          await interaction.reply({ content: 'You are not authorized to use this command.', ephemeral: true, components: [] });
        }
      } else if ((interaction.commandName) == 'set-prefix') {
        if ((interaction.member) == ((interaction.guild).members.cache.get(String((String((interaction.guild).ownerId)))) || await (interaction.guild).members.fetch(String((String((interaction.guild).ownerId))))) || (interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || (interaction.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
          prefix = prfx.get(String(((interaction.guild).id)));
          if ((interaction.options.getString('prefix')) == prefix) {
            await interaction.reply({ content: (String(['`',interaction.options.getString('prefix'),'`'].join('')) + ' is already the current prefix.'), ephemeral: true, components: [] });
          } else {
            prefix = (interaction.options.getString('prefix'));
            prfx.set(String(((interaction.guild).id)), prefix);
            await interaction.reply({ content: (String(['`',interaction.options.getString('prefix'),'`'].join('')) + ' has been successfully set as the server prefix.'), ephemeral: false, components: [] });
          }
        } else {
          await interaction.reply({ content: 'You are not authorized to use this command.', ephemeral: true, components: [] });
        }
      } else if ((interaction.commandName) == 'setup-verification') {
        if ((interaction.member) == ((interaction.guild).members.cache.get(String((String((interaction.guild).ownerId)))) || await (interaction.guild).members.fetch(String((String((interaction.guild).ownerId))))) || (interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || (interaction.member).permissions.has(Permissions.FLAGS.MANAGE_GUILD) || (interaction.member).permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) {
          vds = (interaction.options.getInteger('duration'));
          ves.set(String(('ive-' + String((interaction.guild).id))), true);
          ves.set(String(('verdur-' + String((interaction.guild).id))), vds);
          ves.set(String(('verrole-' + String((interaction.guild).id))), ((interaction.options.getRole('verified-role')).id));
          ves.set(String(('unverrole-' + String((interaction.guild).id))), ((interaction.options.getRole('unverified-role')).id));
          let Verification = new MessageButton()
            Verification.setStyle("SUCCESS");Verification.setLabel('Verification');Verification.setCustomId('732');var vfem = new Discord.MessageEmbed();
             vfem.setColor('#33ff33');
            vfem.setTitle(String(('Verification ' + String((s4d.client).emojis.cache.find(emoji => emoji.id === '1174802099872206878')))))
             vfem.setURL(String());
            vfem.setDescription(String((String((interaction.guild).name) + ' needs an verification, tap the button bellow and follow the instructions.')));
    
          interaction.options.getChannel('channel').send({
                  content: String('Verification'),
                  components: [new MessageActionRow().addComponents(Verification)],
                  embeds: [vfem]
                  });await interaction.reply({ content: 'Done!', ephemeral: true, components: [] });
        } else {
          await interaction.reply({ content: 'You are not authorized to use this command.', ephemeral: true, components: [] });
        }
      } else if ((interaction.commandName) == 'timeout') {
        if ((interaction.member) == ((interaction.guild).members.cache.get(String((String((interaction.guild).ownerId)))) || await (interaction.guild).members.fetch(String((String((interaction.guild).ownerId))))) || (interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || (interaction.member).permissions.has(Permissions.FLAGS.MUTE_MEMBERS)) {
          if (((interaction.options.getMember('member')).moderatable) || ((interaction.options.getMember('member')).manageable)) {
            interaction.options.getMember('member').timeout(((interaction.options.getInteger('duration')) * 60 * 1000), interaction.options.getString('reason'))
                var succ = new Discord.MessageEmbed();
               succ.setTitle(String('Member Timed Out'))
               succ.setURL(String());
              succ.addField(String('Reason'), String((interaction.options.getString('reason'))), false);
              succ.addField(String('Duration'), String((interaction.options.getInteger('duration'))), false);
              succ.addField(String('Target'), String((interaction.options.getMember('member'))), false);
              succ.addField(String('Action Author'), String((interaction.member)), false);
    
            await interaction.reply({embeds: [succ], ephemeral: false, components: [] });
            var mute = new Discord.MessageEmbed();
               mute.setAuthor(String(((interaction.member).nickname == null ? (interaction.member).user.username : (interaction.member).nickname)), String(((interaction.member).displayAvatarURL({format:"png"}))), String());
              mute.setTitle(String((['You have been muted in **',(interaction.guild).name,'**'].join(''))))
               mute.setURL(String());
              mute.addField(String('Reason'), String((interaction.options.getString('reason'))), false);
              mute.addField(String('Duration '), String((String(interaction.options.getInteger('duration')) + ' Minute\'s')), false);
    
            (interaction.options.getMember('member')).send({embeds: [mute]});
          } else {
            await interaction.reply({ content: 'MessaBet cannot timeout this user! Reason: Target being over the bot/having dangerous permissions.', ephemeral: true, components: [] });
          }
        } else {
          await interaction.reply({ content: 'You are not authorized to use this command.', ephemeral: true, components: [] });
        }
      } else if ((interaction.commandName) == 'untimeout') {
        if ((interaction.member) == ((interaction.guild).members.cache.get(String((String((interaction.guild).ownerId)))) || await (interaction.guild).members.fetch(String((String((interaction.guild).ownerId))))) || (interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || (interaction.member).permissions.has(Permissions.FLAGS.MUTE_MEMBERS)) {
          if (((interaction.options.getMember('member')).moderatable) || ((interaction.options.getMember('member')).manageable)) {
            (interaction.options.getMember('member')).timeout(null)
                var succ = new Discord.MessageEmbed();
               succ.setTitle(String('Member Untimed Out'))
               succ.setURL(String());
              succ.addField(String('Reason'), String((interaction.options.getString('reason'))), false);
              succ.addField(String('Target'), String((interaction.options.getMember('member'))), false);
              succ.addField(String('Action Author'), String((interaction.member)), false);
    
            await interaction.reply({embeds: [succ], ephemeral: false, components: [] });
            var unmute = new Discord.MessageEmbed();
               unmute.setAuthor(String(((interaction.member).nickname == null ? (interaction.member).user.username : (interaction.member).nickname)), String(((interaction.member).displayAvatarURL({format:"png"}))), String());
              unmute.setTitle(String((['You have been unmuted in **',(interaction.guild).name,'**'].join(''))))
               unmute.setURL(String());
              unmute.addField(String('Reason'), String((interaction.options.getString('reason'))), false);
    
            (interaction.options.getMember('member')).send({embeds: [unmute]});
          } else {
            await interaction.reply({ content: 'MessaBet cannot untimeout this user! Reason: Target being over the bot.', ephemeral: true, components: [] });
          }
        } else {
          await interaction.reply({ content: 'You are not authorized to use this command.', ephemeral: true, components: [] });
        }
      } else if ((interaction.commandName) == 'config-automod') {
        if ((interaction.member) == ((interaction.guild).members.cache.get(String((String((interaction.guild).ownerId)))) || await (interaction.guild).members.fetch(String((String((interaction.guild).ownerId))))) || (interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
          if ((interaction.options.getString('anti-invites')) == 'true' || (interaction.options.getString('anti-invites')) == 'True' || (interaction.options.getString('anti-invites')) == 'TRUE') {
            atmd.set(String(('anti-invite-' + String((interaction.guild).id))), true);
          } else if ((interaction.options.getString('anti-invites')) == 'false' || (interaction.options.getString('anti-invites')) == 'False' || (interaction.options.getString('anti-invites')) == 'FALSE') {
            atmd.set(String(('anti-invite-' + String((interaction.guild).id))), false);
          }
          if ((interaction.options.getString('anti-bad-words')) == 'true' || (interaction.options.getString('anti-bad-words')) == 'True' || (interaction.options.getString('anti-bad-words')) == 'TRUE') {
            atmd.set(String(('abw-' + String((interaction.guild).id))), true);
          } else if ((interaction.options.getString('anti-bad-words')) == 'false' || (interaction.options.getString('anti-bad-words')) == 'False' || (interaction.options.getString('anti-bad-words')) == 'FALSE') {
            atmd.set(String(('abw-' + String((interaction.guild).id))), false);
          }
          if ((interaction.options.getString('anti-spam')) == 'true' || (interaction.options.getString('anti-spam')) == 'True' || (interaction.options.getString('anti-spam')) == 'TRUE') {
            atmd.set(String(('anti-spam-' + String((interaction.guild).id))), true);
          } else if ((interaction.options.getString('anti-spam')) == 'false' || (interaction.options.getString('anti-spam')) == 'False' || (interaction.options.getString('anti-spam')) == 'FALSE') {
            atmd.set(String(('anti-spam-' + String((interaction.guild).id))), false);
          }
          await interaction.reply({ content: 'Auto-mod configuration complete!', ephemeral: true, components: [] });
        } else {
          await interaction.reply({ content: 'You are not authorized to use this command.', ephemeral: true, components: [] });
        }
      } else if ((interaction.commandName) == 'setup-logs') {
        if ((interaction.member) == ((interaction.guild).members.cache.get(String((String((interaction.guild).ownerId)))) || await (interaction.guild).members.fetch(String((String((interaction.guild).ownerId))))) || (interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || (interaction.member).permissions.has(Permissions.FLAGS.MANAGE_GUILD) || (interaction.member).permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) {
          lgs.set(String(('lc-' + String((interaction.guild).id))), ((interaction.options.getChannel('channel')).id));
          lgs.set(String(('ile-' + String((interaction.guild).id))), true);
          (interaction.options.getChannel('channel')).createWebhook(String('MessaBet'), { avatar: String('https://media.discordapp.net/attachments/1149696910811222049/1182293866213281824/New_Project_55_0CC58C7.png'), reason: String('MessaBet Logs') } )
              .then(async webhook => {
                    lgs.set(String(('lwt-' + String((interaction.guild).id))), (webhook.token));
            lgs.set(String(('lwid-' + String((interaction.guild).id))), (webhook.id));
    
              })
          await interaction.reply({ content: ('Successfully set logs channel to ' + String(interaction.options.getChannel('channel'))), ephemeral: true, components: [] });
        } else {
          await interaction.reply({ content: 'You are not authorized to use this command.', ephemeral: true, components: [] });
        }
      } else if ((interaction.commandName) == 'help') {
        var helpcmd = new Discord.MessageEmbed();
           helpcmd.addField(String('</warn:1154315112593768568>'), String('Warn a member. - {member} Member you want to warn. - {reason} Reason of warning this member.'), false);
          helpcmd.addField(String('</untimeout:1154315112593768568>'), String('Remove a timeout from a member - {member} Member to remove a timeout from. - {reason} Reason of untimeout.'), false);
          helpcmd.addField(String('</timeout:1154315112593768568>'), String('Timeout a member. - {member} Member to timeout. - {reason} Reason of timeout.'), false);
          helpcmd.addField(String('</setup-verification:1154315112593768568>'), String('Setup verification for your server. - {channel} Channel for verification message. - {verified-role} Gaven role after the verification is done and successful. - {unverified-role} Removed role after the verification is done and successful. - {duration} Duration period of a verification. (In minute\'s)'), false);
          helpcmd.addField(String('</setup-logs:1154315112593768568>'), String('Setup logs for your server. - {channel} Logs channel.'), false);
          helpcmd.addField(String('</set-prefix:1154315112593768568>'), String('Set your server prefix. - {prefix} Value of prefix. (Ex: ! or , or . or q. or *etc*)'), false);
          helpcmd.addField(String('</purge:1154315112593768568>'), String('Purge messages. (Note: only messages that are <14 days old can be purged.) - {amount} Amount of message\'s you want to purge. - {channel} Channel you want to purge messages in.'), false);
          helpcmd.addField(String('</ping:1154315112593768568>'), String('See the bot status.'), false);
          helpcmd.addField(String('</config-automod:1154315112593768568>'), String('Configure automod. - {anti-invites} Anti-invite links. - {anti-bad-words} Anti-profane/vulgar/racist/NSFW words. - {anti-spam} Anti-spam.'), false);
    
        await interaction.reply({embeds: [helpcmd], ephemeral: true, components: [] });
      }
    
        });
    
    s4d.client.on('guildMemberAdd', async (param1) => {
    s4d.joiningMember = param1;
      if (ves.get(String(('ive-' + String((s4d.joiningMember.guild).id)))) == true) {
        (s4d.joiningMember).roles.add(ves.get(String(('unverrole-' + String((s4d.joiningMember.guild).id)))));
      }
    s4d.joiningMember = null
    });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      if (!((s4dmessage.author).bot)) {
        if (atmd.get(String(('anti-invite-' + String((s4dmessage.guild).id)))) == true) {
          if ((String((s4dmessage.content)).includes(String('discord.gg/'))) || (String((s4dmessage.content)).includes(String('discord.com/invite/')))) {
            if (!((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || (s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_ROLES) || (s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_CHANNELS) || (s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) || (s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_GUILD) || (interaction.member) == ((s4dmessage.guild).members.cache.get(String((String((s4dmessage.guild).ownerId)))) || await (s4dmessage.guild).members.fetch(String((String((s4dmessage.guild).ownerId))))))) {
              s4dmessage.author.timeout((300 * 1000), 'Sending Discord invite\'s.')
                  var succ = new Discord.MessageEmbed();
                 succ.setTitle(String('Member Timed Out'))
                 succ.setURL(String());
                succ.addField(String('Reason'), String('Sending Discord invite\'s.'), false);
                succ.addField(String('Target'), String((s4dmessage.author)), false);
                succ.addField(String('Duration'), String('5 Minute\'s'), false);
                succ.addField(String('Action Author'), String('Auto-Mod'), false);
    
              (s4dmessage.channel).send({embeds: [succ]});
            }
          }
        } else if (atmd.get(String(('abw-' + String((s4dmessage.guild).id)))) == true) {
          if (await _S4D_inventionFSHapi('filter?text=', (s4dmessage.content))) {
            if (!((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || (s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_ROLES) || (s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_CHANNELS) || (s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) || (s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_GUILD) || (interaction.member) == ((s4dmessage.guild).members.cache.get(String((String((s4dmessage.guild).ownerId)))) || await (s4dmessage.guild).members.fetch(String((String((s4dmessage.guild).ownerId))))))) {
              s4dmessage.author.timeout((300 * 1000), 'Usage of vulgar/profane words.')
                  var succ = new Discord.MessageEmbed();
                 succ.setTitle(String('Member Timed Out'))
                 succ.setURL(String());
                succ.addField(String('Reason'), String('Usage of vulgar/profane words.'), false);
                succ.addField(String('Target'), String((s4dmessage.author)), false);
                succ.addField(String('Duration'), String('5 Minute\'s'), false);
                succ.addField(String('Action Author'), String('Auto-Mod'), false);
    
              (s4dmessage.channel).send({embeds: [succ]});
            }
          }
        } else if (atmd.get(String(('anti-spam-' + String((s4dmessage.guild).id)))) == true) {
          if (!((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || (s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_ROLES) || (s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_CHANNELS) || (s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) || (s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_GUILD) || (interaction.member) == ((s4dmessage.guild).members.cache.get(String((String((s4dmessage.guild).ownerId)))) || await (s4dmessage.guild).members.fetch(String((String((s4dmessage.guild).ownerId))))))) {
            if (!(spco.get(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join('')))) > 0)) {
              spco.set(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join(''))), '5');
              while (!(spco.get(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join('')))) <= 0)) {
                await delay(Number(1)*1000);
                spco.subtract(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join(''))), parseInt(1));
              }
            } else {
              if (!(strikes.get(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join('')))) > 0)) {
                strikes.set(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join(''))), '0');
                strikes.add(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join(''))), parseInt(1));
              } else {
                strikes.add(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join(''))), parseInt(1));
              }
            }
            if (strikes.get(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join('')))) > 0) {
              while (!(strikes.get(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join('')))) <= 0)) {
                await delay(Number(60)*1000);
                strikes.subtract(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join(''))), parseInt(1));
              }
            }
            if (strikes.get(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join('')))) >= 3) {
              s4dmessage.author.timeout((300 * 1000), 'Spamming.')
                  var succ = new Discord.MessageEmbed();
                 succ.setTitle(String('Member Timed Out'))
                 succ.setURL(String());
                succ.addField(String('Reason'), String('Spamming.'), false);
                succ.addField(String('Duration'), String('5 Minute\'s'), false);
                succ.addField(String('Target'), String((s4dmessage.author)), false);
                succ.addField(String('Action Author'), String('Auto-Mod'), false);
    
              (s4dmessage.channel).send({embeds: [succ]});
            }
          }
        }
      } else {
        if (atmd.get(String(('anti-invite-' + String((s4dmessage.guild).id)))) == true) {
          if ((String((s4dmessage.content)).includes(String('discord.gg/'))) || (String((s4dmessage.content)).includes(String('discord.com/invite/')))) {
            (s4dmessage.author).roles.cache.forEach(async (member_role) => {
                  (s4dmessage.author).roles.remove((member_role));
    
            })
            await delay(Number(1)*1000);
            (s4dmessage.author).roles.cache.forEach(async (member_role) => {
                  (member_role).setPermissions(0n)
    
            })
            var succ = new Discord.MessageEmbed();
               succ.setTitle(String('Bot Taken Down'))
               succ.setURL(String());
              succ.addField(String('Reason'), String('Sending Discord invite\'s.'), false);
              succ.addField(String('Target'), String((s4dmessage.author)), false);
              succ.addField(String('Action Author'), String('Auto-Mod'), false);
    
            (s4dmessage.channel).send({embeds: [succ]});
          }
        } else if (atmd.get(String(('abw-' + String((s4dmessage.guild).id)))) == true) {
          if (await _S4D_inventionFSHapi('filter?text=', (s4dmessage.content))) {
            (s4dmessage.author).roles.cache.forEach(async (member_role) => {
                  (s4dmessage.author).roles.remove((member_role));
    
            })
            await delay(Number(1)*1000);
            (s4dmessage.author).roles.cache.forEach(async (member_role) => {
                  (member_role).setPermissions(0n)
    
            })
            var succ = new Discord.MessageEmbed();
               succ.setTitle(String('Bot Taken Down'))
               succ.setURL(String());
              succ.addField(String('Reason'), String('Usage of vulgar/profane words.'), false);
              succ.addField(String('Target'), String((s4dmessage.author)), false);
              succ.addField(String('Action Author'), String('Auto-Mod'), false);
    
            (s4dmessage.channel).send({embeds: [succ]});
          }
        } else if (atmd.get(String(('anti-spam-' + String((s4dmessage.guild).id)))) == true) {
          if (!(spco.get(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join('')))) > 0)) {
            spco.set(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join(''))), '5');
            while (!(spco.get(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join('')))) <= 0)) {
              await delay(Number(1)*1000);
              spco.subtract(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join(''))), parseInt(1));
            }
          } else {
            if (!(strikes.get(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join('')))) > 0)) {
              strikes.set(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join(''))), '0');
              strikes.add(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join(''))), parseInt(1));
            } else {
              strikes.add(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join(''))), parseInt(1));
            }
          }
          if (strikes.get(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join('')))) > 0) {
            while (!(strikes.get(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join('')))) <= 0)) {
              await delay(Number(60)*1000);
              strikes.subtract(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join(''))), parseInt(1));
            }
          }
          if (strikes.get(String(([(s4dmessage.author).id,'-',(s4dmessage.guild).id].join('')))) >= 3) {
            (s4dmessage.author).roles.cache.forEach(async (member_role) => {
                  (s4dmessage.author).roles.remove((member_role));
    
            })
            await delay(Number(1)*1000);
            (s4dmessage.author).roles.cache.forEach(async (member_role) => {
                  (member_role).setPermissions(0n)
    
            })
            var succ = new Discord.MessageEmbed();
               succ.setTitle(String('Bot Taken Down'))
               succ.setURL(String());
              succ.addField(String('Reason'), String('Usage of vulgar/profane words.'), false);
              succ.addField(String('Target'), String((s4dmessage.author)), false);
              succ.addField(String('Action Author'), String('Auto-Mod'), false);
    
            (s4dmessage.channel).send({embeds: [succ]});
          }
        }
      }
    
    });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
            if (s4dmessage.author.bot) {
                return;
            }
              prefix = prfx.get(String(((s4dmessage.guild).id)));
      if (((s4dmessage.content) || '').startsWith((String(prefix) + 'ping') || '')) {
    
                os.cpuUsage(async function(v){
        	      var obj = v * 100
                  cpu_usage = (obj);
    
        });
        var sts = new Discord.MessageEmbed();
           sts.setTitle(String((String((s4d.client).emojis.cache.find(emoji => emoji.id === '1176254290894004294')) + ' Status')))
           sts.setURL(String());
          sts.addField(String((String((s4d.client).emojis.cache.find(emoji => emoji.id === '1176255420977913866')) + ' Server\'s')), String((s4d.client.guilds.cache.size)), false);
          sts.addField(String((String((s4d.client).emojis.cache.find(emoji => emoji.id === '1154331024554209341')) + ' Member\'s')), String((s4d.client.users.cache.size)), false);
          sts.addField(String((String((s4d.client).emojis.cache.find(emoji => emoji.id === '1154364713820491786')) + ' CPU Usage')), String(cpu_usage), false);
          sts.addField(String((String((s4d.client).emojis.cache.find(emoji => emoji.id === '1181894123788185620')) + ' Ping')), String((String(s4d.client.ws.ping) + ' ms')), false);
          sts.addField(String((String((s4d.client).emojis.cache.find(emoji => emoji.id === '1154326667246964737')) + ' Up Time')), String((String(uptime) + ' Second\'s')), false);
          sts.addField(String((String((s4d.client).emojis.cache.find(emoji => emoji.id === '1181894604803547166')) + 'Memory')), String((['Free Memory: ',os.freemem(),'\n','Total Memory: ',os.totalmem()].join(''))), false);
    
        s4dmessage.reply({embeds: [sts], allowedMentions: {
                repliedUser: false
            }});
      } else if (((s4dmessage.content) || '').startsWith((String(prefix) + 'purge') || '')) {
        if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || (s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) || (s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_GUILD) || (s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) {
          text = subsequenceFromStartLast(s4dmessage.content, 29);
          (s4dmessage.mentions.channels.first()).bulkDelete((text|1));
          s4dmessage.reply({content:String((['Successfully purged ',text,' messages in ',s4dmessage.mentions.channels.first()].join(''))), allowedMentions: {
                  repliedUser: false
              }});
        } else {
          s4dmessage.reply({content:String('You are not authorized to use this command.'), allowedMentions: {
                  repliedUser: true
              }});
        }
      } else if (((s4dmessage.content) || '').startsWith((String(prefix) + 'help') || '')) {
        var helpcmd = new Discord.MessageEmbed();
           helpcmd.addField(String('</warn:1154315112593768568>'), String('Warn a member. - {member} Member you want to warn. - {reason} Reason of warning this member.'), false);
          helpcmd.addField(String('</untimeout:1154315112593768568>'), String('Remove a timeout from a member - {member} Member to remove a timeout from. - {reason} Reason of untimeout.'), false);
          helpcmd.addField(String('</timeout:1154315112593768568>'), String('Timeout a member. - {member} Member to timeout. - {reason} Reason of timeout.'), false);
          helpcmd.addField(String('</setup-verification:1154315112593768568>'), String('Setup verification for your server. - {channel} Channel for verification message. - {verified-role} Gaven role after the verification is done and successful. - {unverified-role} Removed role after the verification is done and successful. - {duration} Duration period of a verification. (In minute\'s)'), false);
          helpcmd.addField(String('</setup-logs:1154315112593768568>'), String('Setup logs for your server. - {channel} Logs channel.'), false);
          helpcmd.addField(String('</set-prefix:1154315112593768568>'), String('Set your server prefix. - {prefix} Value of prefix. (Ex: ! or , or . or q. or *etc*)'), false);
          helpcmd.addField(String('</purge:1154315112593768568>'), String('Purge messages. (Note: only messages that are <14 days old can be purged.) - {amount} Amount of message\'s you want to purge. - {channel} Channel you want to purge messages in.'), false);
          helpcmd.addField(String('</ping:1154315112593768568>'), String('See the bot status.'), false);
          helpcmd.addField(String('</config-automod:1154315112593768568>'), String('Configure automod. - {anti-invites} Anti-invite links. - {anti-bad-words} Anti-profane/vulgar/racist/NSFW words. - {anti-spam} Anti-spam.'), false);
    
        (s4dmessage).reply({embeds: [helpcmd], allowedMentions: {
                repliedUser: false
            }});
      } else if (((s4dmessage.content) || '').startsWith((String(prefix) + 'restart') || '')) {
        fs.unlinkSync('.cahce', async function (err) {
           if (err) {
            console.log((err));
            (s4dmessage).reply({content:String('Restart fail.'), allowedMentions: {
                    repliedUser: false
                }});
          } else {
            (s4dmessage).reply({content:String('Restart complete.'), allowedMentions: {
                    repliedUser: false
                }});
          }
    
        });
      }
    
        });
    
    s4d.client.on('interactionCreate', async (i) => {
            let member = i.guild.members.cache.get(i.member.user.id)
            let interaction = i; if (!(i.isButton())) return;
              if (((i.customId)) == '732') {
        let captcha = new Captcha();
        s4d.client.channels.cache.get('1180236339459915947').send({files:[(new Discord.MessageAttachment(captcha.JPEGStream, "captcha.jpeg") )]});
        await delay(Number(2)*1000);
        s4d.client.channels.cache.get('1180236339459915947').messages.fetch({ limit: 1 }).then(async (last_messages_in_channel) => {
              var verif = new Discord.MessageEmbed();
             verif.setTitle(String('Verification Required!'))
             verif.setURL(String());
            verif.setDescription(String('Enter the captcha bellow to verify.'));
            verif.setImage(String((((last_messages_in_channel.at(1 - 1)).attachments.at(Number(1) - 1)).url)));
            verif.setAuthor(String((['Duration: ',ves.get(String(('verdur-' + String((interaction.guild).id)))),' Minute\'s'].join(''))), String(), String());
    
           ((i.member)).send({embeds: [verif]}).then(msg =>{
          msg.channel.awaitMessages(response => response.content, { time: (ves.get(String(('verdur-' + String((interaction.guild).id))))*60*1000), max: 1,errors: ['time'] }).then(async (collected) => { s4d.reply = collected.first().content;
             if ((s4d.reply) == (captcha.value)) {
              ((i.member)).roles.add((((i.guild)).roles.cache.get(ves.get(String(('verrole-' + String((interaction.guild).id)))))));
              ((i.member)).roles.remove((((i.guild)).roles.cache.get(ves.get(String(('unverrole-' + String((interaction.guild).id)))))));
              ((i.member)).send({content:String('Verification done!')});
            } else {
              ((i.member)).send({content:String('Verification failed!')});
            }
    
           s4d.reply = null; }).catch(async (e) => { console.error(e);   ((i.member)).send({content:String('Verification timed out!')});
           })
          });
    
        });
      }
    
        });
    
    s4d.client.on('messageUpdate', async (oldMessage, newMessage) => {
        s4dmessage = newMessage
          if (lgs.get(String(('ile-' + String((newMessage.guild).id)))) == true) {
        var mesedi = new Discord.MessageEmbed();
           mesedi.setTitle(String('Message Edited'))
           mesedi.setURL(String());
          mesedi.addField(String('Message Content'), String((['Old: `',oldMessage.content,'`','\n','New: `',newMessage.content,'`'].join(''))), false);
          mesedi.addField(String('Message ID'), String(((s4dmessage).id)), false);
          mesedi.addField(String('Message Author'), String(((s4dmessage).author)), false);
          mesedi.addField(String('Message Channel'), String(((s4dmessage).channel)), false);
          mesedi.setTimestamp(new Date());
    
        s4d.client.fetchWebhook(lgs.get(String(('lwid-' + String(((s4dmessage).guild).id)))),lgs.get(String(('lwt-' + String(((s4dmessage).guild).id))))).then(async gwebhook =>{
          gwebhook.send({embeds: [mesedi]});
    
        });
      }
    
    });
    
    s4d.client.on('messageDelete', async (s4dmessage) => {
      if (lgs.get(String(('ile-' + String(((s4dmessage).guild).id)))) == true) {
        var mesdel = new Discord.MessageEmbed();
           mesdel.setTitle(String('Message Deleted'))
           mesdel.setURL(String());
          mesdel.addField(String('Message Content'), String((s4dmessage.content)), false);
          mesdel.addField(String('Message ID'), String(((s4dmessage).id)), false);
          mesdel.addField(String('Message Author'), String((s4dmessage.member.user)), false);
          mesdel.addField(String('Message Channel'), String((s4dmessage.channel)), false);
          mesdel.setTimestamp(new Date());
    
        s4d.client.fetchWebhook(lgs.get(String(('lwid-' + String(((s4dmessage).guild).id)))),lgs.get(String(('lwt-' + String(((s4dmessage).guild).id))))).then(async gwebhook =>{
          gwebhook.send({embeds: [mesdel]});
    
        });
      }
    
    });
    
    s4d.client.on('channelCreate', async (channel) => {
      if (lgs.get(String(('ile-' + String(s4d.client.channels.cache.get((channel.id)).guildId)))) == true) {
        var chacre = new Discord.MessageEmbed();
           chacre.setTitle(String('Channel Created'))
           chacre.setURL(String());
          chacre.addField(String('Channel Name'), String((channel.name)), false);
          chacre.addField(String('Channel ID'), String((channel.id)), false);
          chacre.addField(String('Channel Type'), String((channel.type)), false);
          chacre.addField(String('Channel'), String((channel)), false);
          chacre.setTimestamp(new Date());
    
        s4d.client.fetchWebhook(lgs.get(String(('lwid-' + String(s4d.client.channels.cache.get((channel.id)).guildId)))),lgs.get(String(('lwt-' + String(s4d.client.channels.cache.get((channel.id)).guildId))))).then(async gwebhook =>{
          gwebhook.send({embeds: [chacre]});
    
        });
      }
    
    });
    
    s4d.client.on('channelUpdate', async (oldChannel, newChannel) => {
      if (lgs.get(String(('ile-' + String(s4d.client.channels.cache.get(((newChannel.channel).id)).guildId)))) == true) {
        var chaupd = new Discord.MessageEmbed();
           chaupd.setTitle(String('Channel Updated'))
           chaupd.setURL(String());
          chaupd.addField(String('Channel Name'), String((['New: ',newChannel.name,'\n','Old: ',oldChannel.name].join(''))), false);
          chaupd.addField(String('Channel Topic'), String((['New: ',newChannel.topic,'\n','Old: ',oldChannel.topic].join(''))), false);
          chaupd.addField(String('Channel Type'), String((['New: ',newChannel.type,'\n','Old: ',oldChannel.type].join(''))), false);
          chaupd.addField(String('Channel Position'), String((['New: ',newChannel.position,'\n','Old: ',oldChannel.position].join(''))), false);
          chaupd.addField(String('Channel Bitrate'), String((['New: ',newChannel.bitrate,'\n','Old: ',oldChannel.bitrate].join(''))), false);
          chaupd.addField(String('Channel User Limit'), String((['New: ',newChannel.userLimit,'\n','Old: ',oldChannel.userLimit].join(''))), false);
          chaupd.addField(String('Channel Slow Mode'), String((['New: ',newChannel.rateLimitPerUser,'\n','Old: ',oldChannel.rateLimitPerUser].join(''))), false);
          chaupd.addField(String('Channel NSFW'), String((['New: ',newChannel.nsfw,'\n','Old: ',oldChannel.nsfw].join(''))), false);
          chaupd.addField(String('Channel ID'), String(((newChannel.channel).id)), false);
          chaupd.addField(String('Channel'), String((newChannel.channel)), false);
          chaupd.setTimestamp(new Date());
    
        s4d.client.fetchWebhook(lgs.get(String(('lwid-' + String(s4d.client.channels.cache.get(((newChannel.channel).id)).guildId)))),lgs.get(String(('lwt-' + String(s4d.client.channels.cache.get(((newChannel.channel).id)).guildId))))).then(async gwebhook =>{
          gwebhook.send({embeds: [chaupd]});
    
        });
      }
    
    });
    
    s4d.client.on('channelDelete', async (channel) => {
      if (lgs.get(String(('ile-' + String(s4d.client.channels.cache.get((channel.id)).guildId)))) == true) {
        var chadel = new Discord.MessageEmbed();
           chadel.setTitle(String('Channel Deleted'))
           chadel.setURL(String());
          chadel.addField(String('Channel Name'), String((channel.name)), false);
          chadel.addField(String('Channel ID'), String((channel.id)), false);
          chadel.addField(String('Channel Type'), String((channel.type)), false);
          chadel.addField(String('Channel'), String((channel)), false);
          chadel.setTimestamp(new Date());
    
        s4d.client.fetchWebhook(lgs.get(String(('lwid-' + String(s4d.client.channels.cache.get((channel.id)).guildId)))),lgs.get(String(('lwt-' + String(s4d.client.channels.cache.get((channel.id)).guildId))))).then(async gwebhook =>{
          gwebhook.send({embeds: [chadel]});
    
        });
      }
    
    });
    
    s4d.client.on("guildChannelTopicUpdate", async (channel, oldTopic, newTopic) => {
      if (lgs.get(String(('ile-' + String(s4d.client.channels.cache.get(((channel || {}).id)).guildId)))) == true) {
        var topcha = new Discord.MessageEmbed();
           topcha.setTitle(String('Topic Changed'))
           topcha.setURL(String());
          topcha.addField(String('Topic'), String((['New: ',newTopic,'\n','Old: ',oldTopic].join(''))), false);
          topcha.addField(String('Channel Name'), String(((channel || {}).name)), false);
          topcha.addField(String('Channel ID'), String(((channel || {}).id)), false);
          topcha.setTimestamp(new Date());
    
        s4d.client.fetchWebhook(lgs.get(String(('lwid-' + String(s4d.client.channels.cache.get(((channel || {}).id)).guildId)))),lgs.get(String(('lwt-' + String(s4d.client.channels.cache.get(((channel || {}).id)).guildId))))).then(async gwebhook =>{
          gwebhook.send({embeds: [topcha]});
    
        });
      }
    
    });
    
    return s4d
})();