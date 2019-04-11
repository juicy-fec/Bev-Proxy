// var generateBandNames = () => {
//   var bandNames = [];
//   for (let i = 0; i < 100; i++) {
//     var randomPre = prefixes[Math.floor(Math.random() * prefixes.length)];
//     var randomSuf = suffixes[Math.floor(Math.random() * suffixes.length)];
//     bandNames.push('The ' + randomPre + ' ' + randomSuf);
//   }
//   return bandNames;
// };

// var generateSongNames = () => {
//   var preAndSuf = prefixes.concat(suffixes);
//   var songNames = [];
//   for (let i = 0; i < 100; i++) {
//     var randFirst = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
//     var randSecond = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
//     var randThird = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
//     songNames.push(`${randFirst} ${randSecond} ${randThird}`);
//   }
//   return songNames;
// };

// var generateBio = () => {
//   var preAndSuf = prefixes.concat(suffixes);
//   var bios = [];
//   for (let i = 0; i < 100; i++) {
//     let randPara = '';
//     for (let j = 0; j < 100; j++) {
//       var randWord = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
//       randPara += randWord + ' ';
//     }
//     bios.push(`${randPara}`);
//   }
//   return bios;
// };

// var generateAlbumPic = (cb) => {

//   let imagesList = [];
//   let promiseArr =[];
//   for (let i = 0; i < 100; i++) {
//       let randomNum = Math.floor(Math.random()*151);
//       let imgURL = `https://source.unsplash.com/collection/893352/50x50/?sig=${randomNum}`;
//       promiseArr.push(fetch(imgURL));
//   }
//   Promise.all(promiseArr)
//   .then((val)=>{
//     val.map(element =>{
//         imagesList.push(element.url)
//     });  
//   })
//   .then (()=>{
//   cb(imagesList);
//   })
// };

// var images = [];

// generateAlbumPic((data) => {
//   images = data;
// })

// var generateAlbumPic = () => {
//   let promiseArr = [];
//   for (let i = 0; i < 100; i++) {
//     let randomNum = Math.floor(Math.random() * 151);
//     let imgURL = `https://source.unsplash.com/collection/893352/280x280/?sig=${randomNum}`;
//     promiseArr.push(fetch(imgURL));
//   }
//   return promiseArr;
// }

// var imageArr = generateAlbumPic()

// Promise.all(imageArr)
//   .then(results => results.json())
//   .then(results => console.log(results))
//   .catch(console.log)

var prefixes = [
  'Flaming',
  'Black',
  'Talking',
  'Broken',
  'Ashen',
  'Rainbow',
  'Wandering',
  'Lost',
  'Breathing',
  'Rough',
  'Rolling',
  'Thundering',
  'Hipster',
  'Punk',
  'Goth',
  'White',
  'Pale',
  'Lunar',
  'Mystic',
  'Screaming',
  'Sexy',
  'Diabolical',
  'Evil',
  'Thumping',
  'Ascending',
  'Falling',
  'Spinning',
  'Drooling',
  'Secret',
  'Mad',
  'Hot',
  'Veiled',
  'Hidden',
  'Psychic',
  'Nightly',
  'Eerie',
  'Transparent',
  'Wild',
  'Smashing',
  'Chunking',
  'Guns and',
  "Roamin' ",
  'Grummel',
  'Schwifty',
  'Stylish',
  'Creepy',
  'Nerdy',
  'Anti',
  'Panoramic',
  'McShizzle',
  'Pensive',
  'Crushing',
  "Dead Man's",
  'Lords of',
  'Burnt',
  'Wheeled',
  'Living',
  'Azure',
  'Undead',
  'Exploding',
  'Spiralling',
  'Boom-boom',
  'Serious',
  'Stoic',
  'Deep',
  'Somber',
  'Squirming',
  'Vanilla',
  'Screeching',
  'Thrashing',
  'Selective',
  'Swift',
  'Soaring',
  'Mighty'
];

var suffixes = [
  'Flames',
  'Banisters',
  'Skulls',
  'Unicorns',
  'Souls',
  'Corpses',
  'Flannel',
  'Zombies',
  'Lampshades',
  'Scientists',
  'Ghosts',
  'Dude and His Merry Gang of Band Nerds',
  'Hunters',
  'Sirens',
  'Lozenges',
  'Stones',
  'Heads',
  'Hands',
  'Cerulean',
  'Lightning',
  'Blades',
  'Gang',
  'Homeboys',
  'Critics',
  'Emos',
  'Rebels',
  'Pirates',
  'Pumpkins',
  'Roses',
  'Demons',
  'Tractors',
  'Men',
  'Gals',
  'Riders',
  'Ray-Bans',
  'Trenchcoats',
  'Creepers',
  'Gravity',
  'Diamonds',
  'Mirrors',
  'Jefes',
  'Esperantos',
  'Crimson',
  'Wrappers',
  'José y los gauchos',
  'Heat',
  'Fever',
  'Wave',
  'Spell',
  'Spectacle',
  'Voices',
  'Group',
  'Fliers',
  'Homies',
  'Rum',
  'Wheels',
  'Brits',
  'Machines',
  'Assassination',
  'Flint',
  'Noises',
  'Perspiration',
  'Perpetrator',
  'Betrayed',
  'Wasslers',
  'Whirlpool',
  'Pistols',
  'Boulders',
  'Trinkets',
  'Rag Dolls',
  'Bazookas',
  'Popsicle',
  'Ice Cubes',
  'Banshees',
  'Frost',
  'Darkness',
  'Beat',
  'Freeze',
  'Kittens',
  'Superheroes',
  'Bagel',
  'Flaxseeds',
  'Children',
  'Love',
  'Equinox',
  'Life'
];

let bands = ["The Squirming Diamonds", "The Goth Superheroes", "The Ashen Skulls", "The Thrashing Lozenges", "The Lost Scientists", "The Ashen Flaxseeds", "The Vanilla Group", "The Serious Men", "The Swift Bazookas", "The Rainbow Lampshades", "The Mystic Flames", "The Spinning Demons", "The Mystic Spell", "The Soaring Whirlpool", "The Chunking Love", "The Punk Gals", "The Anti Brits", "The Evil Homeboys", "The Lunar Voices", "The Burnt Dude and His Merry Gang of Band Nerds", "The Flaming Trinkets", "The Hipster Popsicle", "The Somber Love", "The Stylish Demons", "The Squirming Beat", "The Roamin'  Machines", "The Azure Bagel", "The Falling Fliers", "The Exploding Demons", "The Grummel Voices", "The Screaming Stones", "The Thundering Stones", "The Spiralling Trinkets", "The Swift Brits", "The Punk Perspiration", "The Mad Emos", "The Stoic Emos", "The Ascending Rum", "The Wandering Roses", "The Thumping Children", "The Undead Bazookas", "The Mystic Esperantos", "The Panoramic Lampshades", "The Wild Emos", "The Lunar Blades", "The Dead Man's Flint", "The Secret Wrappers", "The Guns and Blades", "The Wandering Freeze", "The McShizzle Scientists", "The Azure Fever", "The Black Fliers", "The Evil Roses", "The Wild Blades", "The Talking Wasslers", "The Rainbow Crimson", "The Nightly Whirlpool", "The Rainbow Pirates", "The Lunar Bazookas", "The Black Pistols", "The Ashen Freeze", "The Exploding Homeboys", "The Wild Children", "The Nerdy Whirlpool", "The Nerdy Spectacle", "The McShizzle Blades", "The Rough Group", "The Roamin'  Kittens", "The Talking Hands", "The Evil Fever", "The Spiralling Flint", "The Eerie Cerulean", "The Roamin'  Popsicle", "The Soaring Crimson", "The Hipster Gang", "The Evil Assassination", "The Spinning Tractors", "The Spinning Heads", "The Goth Homeboys", "The Mad Perspiration", "The Sexy Jefes", "The Spiralling Blades", "The Goth Wheels", "The Stylish Crimson", "The Dead Man's Trenchcoats", "The Mad Noises", "The Lunar Life", "The Sexy Spell", "The Stylish Gals", "The Grummel Hunters", "The Evil Gals", "The Wandering Men", "The Hot Trinkets", "The Thundering Voices", "The Creepy Kittens", "The Serious Hands", "The Swift Tractors", "The Stylish Whirlpool", "The Pensive Diamonds", "The Pale Superheroes"];

let songs = ["Azure Flaming Boom-boom", "Flaming Equinox Evil", "Freeze Secret Nightly", "Thundering Screeching Eerie", "Fever Gravity Flames", "Crimson Pumpkins Gravity", "Eerie Wasslers Men", "Wheels Esperantos Smashing", "Rag Dolls Guns and Equinox", "Guns and Selective Secret", "Schwifty Burnt Gals", "Rolling Pumpkins Assassination", "Skulls Rum Wrappers", "Blades Jefes Azure", "Rainbow Skulls Fever", "Frost Demons Burnt", "Homies Breathing Darkness", "Deep White Squirming", "Noises Whirlpool Ray-Bans", "Flaxseeds Souls Goth", "Mirrors Pensive Brits", "Wandering Grummel Trinkets", "Boom-boom Popsicle Fever", "Creepers Nerdy Betrayed", "Pirates Ashen Selective", "Rainbow Screaming Deep", "Homeboys Chunking Zombies", "Rebels Bazookas Thumping", "Roamin'  Hands Gals", "Superheroes Rainbow Falling", "Popsicle Equinox Boulders", "Beat Superheroes Love", "Swift Boulders Critics", "Sexy Crushing Lords of", "Deep Trinkets Dead Man's", "Rolling Unicorns Grummel", "Punk Beat Voices", "Lightning Perspiration Deep", "Anti Gravity Selective", "Lozenges Azure Screaming", "Ascending Heat Spinning", "Critics Critics Banshees", "Sirens Falling Thundering", "Deep Mighty Children", "Life Smashing Ray-Bans", "Black Panoramic Stoic", "Swift Creepers Punk", "Souls Flint Hands", "Unicorns Flaxseeds Chunking", "Trinkets Zombies Demons", "Lightning Flaming Wasslers", "Psychic Wild Smashing", "Hands Roamin'  Flames", "Life Punk Boom-boom", "Homeboys Popsicle Talking", "Exploding Skulls Flint", "Demons Bagel Evil", "Whirlpool Creepy Cerulean", "Stylish Children Demons", "Burnt Chunking Critics", "Gravity Spell Panoramic", "Superheroes Equinox Black", "Crimson Undead Banshees", "Crushing Vanilla Drooling", "Betrayed Kittens Bagel", "Grummel Wrappers Zombies", "Stoic Thumping Flannel", "Nightly Bazookas Sirens", "Nightly Thumping Flaxseeds", "Secret Trenchcoats Assassination", "Trenchcoats Trinkets Dead Man's", "Spectacle Squirming Goth", "Wheels Critics Serious", "Critics Rough Nerdy", "Bazookas Stoic Rough", "Creepers Boom-boom Deep", "Deep Wave Eerie", "Unicorns Goth Hipster", "White Wild Spiralling", "Flames Wandering Men", "Jefes Equinox Burnt", "Wheels Pistols Emos", "Hunters Somber Emos", "Gals Mad Gravity", "José y los gauchos Thumping Fever", "Nightly Rum Beat", "Swift Jefes Gang", "Screaming McShizzle José y los gauchos", "Hipster Bazookas Stones", "Deep Darkness Rough", "Brits Ice Cubes Thumping", "Mad Whirlpool Hidden", "Diamonds Scientists Rum", "Emos Lost Homies", "Diamonds Chunking Anti", "Pistols Ray-Bans Tractors", "Lunar Brits White", "Spectacle Machines Tractors", "Superheroes Frost Rebels", "Hot Smashing Deep"];

let images = [
"https://images.unsplash.com/photo-1486556396467-d83d2b23514b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1492201789320-a16a060174d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1519952858562-54e1df53319c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1514668899050-f91140ee495b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1486556396467-d83d2b23514b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1516685499100-f272ed42223b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1478759615268-c5668ad08e3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1512656182047-45353ebe62ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1492584115029-f633e64c61fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1500625597061-d472abd2afbb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1502771498473-c112f905a912?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1492201789320-a16a060174d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1492201789320-a16a060174d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1492201789320-a16a060174d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1473392548369-8fdba574120e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1512656182047-45353ebe62ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1518982703581-5fddaa030272?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1492584115029-f633e64c61fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1485368510545-b1f4bcd02d0d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1416615267350-a82c5a347dbf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/35/BIR62RGGjGxN5nrbnzwu_3.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1473392548369-8fdba574120e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1496400554956-2641ee73a932?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1478759615268-c5668ad08e3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1491140162236-6448ea91bc8f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1485761954900-f9a29f318567?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1512656182047-45353ebe62ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1492584115029-f633e64c61fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1502771498473-c112f905a912?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1492584115029-f633e64c61fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1498736162085-1638bc6a2fc2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1496450080853-5f78c43af9e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1516685499100-f272ed42223b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1500869386957-078e5e53ccf7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1492584115029-f633e64c61fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1516685499100-f272ed42223b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1489835373123-77857c895b57?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1470290449668-02dd93d9420a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1416615267350-a82c5a347dbf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1512656182047-45353ebe62ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1449710146567-1e282fa41f2f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1439566773766-06344d7ee69a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1503776768674-0e612f631345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1449710146567-1e282fa41f2f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1478759615268-c5668ad08e3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1486556396467-d83d2b23514b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1502771498473-c112f905a912?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1473392548369-8fdba574120e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1486556396467-d83d2b23514b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1484820986637-7ec3e85b394f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1519952858562-54e1df53319c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1518982703581-5fddaa030272?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1478759615268-c5668ad08e3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1486556396467-d83d2b23514b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1518982703581-5fddaa030272?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1504898931369-4e77cb7fdd29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1502771498473-c112f905a912?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1518982703581-5fddaa030272?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1503776768674-0e612f631345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1454600366270-5c75e4386c7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1514668899050-f91140ee495b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1518982703581-5fddaa030272?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1501947248335-9b511c0cb5c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1449710146567-1e282fa41f2f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1478759615268-c5668ad08e3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1485761954900-f9a29f318567?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1478759615268-c5668ad08e3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1485368510545-b1f4bcd02d0d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1449710146567-1e282fa41f2f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1503776768674-0e612f631345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1484820986637-7ec3e85b394f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1492201789320-a16a060174d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1478759615268-c5668ad08e3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1492584115029-f633e64c61fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1439566773766-06344d7ee69a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1501947248335-9b511c0cb5c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1473392548369-8fdba574120e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1486556396467-d83d2b23514b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1470238660368-09dd17cab0b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1416615267350-a82c5a347dbf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/35/BIR62RGGjGxN5nrbnzwu_3.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
"https://images.unsplash.com/photo-1502771498473-c112f905a912?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9"
];

module.exports = {
  bands,
  songs,
  images
};