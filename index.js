const clientBuilder = require('./config');
const clientBuilder = require('./config');

let clientArray = []

const configsArray = [
{
    login: "axesf1240",
    password: "ax1024axess",
    shared_secret: "9VBOZc/MiGnKub2FHGejYFqhxlY=",
    games: [
        570, // Dota 2
        331470, // Everlasting Summer
        240720, // Getting Over It with Bennett Foddy
        1067310, // Gravitas
        322330, // Don't Starve Together
        17410, // Mirror's Edge
        1419170, // My Singing Monsters
        543870, // NARUTO SHIPPUDEN: Ultimate Ninja STORM 2
        234670, // NARUTO SHIPPUDEN: Ultimate Ninja STORM 3 Full Burst HD
        349040, // NARUTO SHIPPUDEN: Ultimate Ninja STORM 4
        495140, // NARUTO: Ultimate Ninja STORM
        1905180, // OBS Studio
        444090, // Paladins®
        238960, // Path of Exile
        218620, // PAYDAY 2
        648800, // Raft
        1343400, // RuneScape ®
        252490, // Rust
        1818450, // STALCRAFT
        413150, // Stardew Valley
        322500, // SUPERHOT
        105600, // Terraria
        1062090, // Timberborn
        304930, // Unturned
        945360, // Among Us
        1172470, // Apex Legends™
        550650, // Black Squad
        363970, // Clicker Heroes
        386180, // Crossout
        977950, // A Dance of Fire and Ice
        588430, // Fallout Shelter
        1203220, // NARAKA: BLADEPOINT
        620, // Portal 2
    ]
}]


console.log('Bot number: ' + configsArray.length);

for (let config of configsArray) {

    let client = clientBuilder.execute(config);
    client.doLogin();
    clientArray.push(client);
}
console.log('Running ' + configsArray.length + ' bots.');