/* eslint-disable no-plusplus */
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const { Album, Artist, db } = require('./index.js');

class RandomDataGenerator {
  constructor() {
    this.prefixes = [
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
      'Mighty',
    ];
    this.suffixes = [
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
      ' José y los gauchos',
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
      'Life',
    ];
    this.types = [
      'Rock',
      'Metal',
      'Pop',
      'Rap',
      'Hip-Hop',
      'Soul',
      'Country',
      'Classical',
      'Jazz',
      'Big Band',
      'Funk',
      'Disco',
    ];
    this.names = this.generateSongNames();
    this.genres = RandomDataGenerator.generateAlbumType();
    // this.artistVals();
    db.dropDatabase().then(() => {
      this.albumVals((err, data) => {
        Promise.all(data)
          .then((albumData) => {
            const albums = [];
            // eslint-disable-next-line no-underscore-dangle
            albumData.map(element => albums.push(element._id));
            return albums;
          })
          .then(albumStuff => this.artistVals(albumStuff))
          .then((promisearr) => {
            Promise.all(promisearr).then(() => {
              process.exit(0);
            });
          });
      });
    });
  }

  albumVals(cb) {
    // name, image, type
    const { names } = this;
    const { genres } = this;
    const imagesList = [];
    let queries = [];
    Promise.all(RandomDataGenerator.generateAlbumPic())
      .then((val) => {
        val.map(element => imagesList.push(element.url));
      })
      .then(() => {
        const albumQueries = [];
        for (let i = 0; i < 100; i++) {
          const newAlbum = new Album({
            name: names[i],
            image: imagesList[i],
            type: genres[i],
          });
          albumQueries.push(newAlbum.save());
        }
        return albumQueries;
      })
      .then((albumQs) => {
        queries = albumQs;
        cb(null, queries);
      })
      .catch('failed to generate albums');
  }

  generateArtistNames() {
    const bandNames = [];
    for (let i = 0; i < 100; i++) {
      const randomPre = this.prefixes[Math.floor(Math.random() * this.prefixes.length)];
      const randomSuf = this.suffixes[Math.floor(Math.random() * this.suffixes.length)];
      bandNames.push(`The ${randomPre} ${randomSuf}`);
    }
    return bandNames;
  }

  generateGenreType() {
    const genres = [];
    for (let i = 0; i < 100; i++) {
      const randomGenre = this.types[Math.floor(Math.random() * this.types.length)];
      genres.push(randomGenre);
    }
    return genres;
  }

  generateSongNames() {
    const preAndSuf = this.prefixes.concat(this.suffixes);
    const songNames = [];
    for (let i = 0; i < 100; i++) {
      const randFirst = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
      const randSecond = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
      const randThird = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
      songNames.push(`${randFirst} ${randSecond} ${randThird}`);
    }
    return songNames;
  }

  generateBio() {
    const preAndSuf = this.prefixes.concat(this.suffixes);
    const bios = [];
    for (let i = 0; i < 100; i++) {
      let randPara = '';
      for (let j = 0; j < 100; j++) {
        const randWord = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
        randPara += `${randWord} `;
      }
      bios.push(`${randPara}`);
    }
    return bios;
  }

  static generateAlbumPic() {
    const promiseArr = [];
    for (let i = 0; i < 100; i++) {
      const randomNum = Math.floor(Math.random() * 151);
      const imgURL = `https://source.unsplash.com/collection/893352/280x280/?sig=${randomNum}`;
      promiseArr.push(fetch(imgURL));
    }
    return promiseArr;
  }

  static generateAlbumType() {
    const albums = ['Compilation', 'EP', 'Album', 'Includes'];
    const albumTypes = [];
    for (let i = 0; i < 100; i++) {
      const randI = Math.floor(Math.random() * albums.length);
      albumTypes.push(albums[randI]);
    }
    return albumTypes;
  }

  artistVals(albums) {
    // name albums
    const artists = this.generateArtistNames();
    const allArtistAlbums = [];
    for (let i = 0; i < 100; i++) {
      const randomAlbNum = Math.floor(Math.random() * 18) + 2;
      const albumsPerArtist = [];
      for (let j = 0; j < randomAlbNum; j++) {
        const randomAlb = Math.floor(Math.random() * albums.length);
        albumsPerArtist.push(albums[randomAlb]);
      }
      allArtistAlbums.push(albumsPerArtist);
    }
    const promiseArr = [];
    for (let i = 0; i < 100; i++) {
      const newArtist = Artist({
        name: artists[i],
        albums: allArtistAlbums[i],
      });
      promiseArr.push(newArtist.save());
    }
    const newArtist = Artist({
      name: 'The Ascending Critics',
      albums: allArtistAlbums[1],
    });
    promiseArr.push(newArtist.save());
    return promiseArr;
  }
}
// eslint-disable-next-line no-unused-vars
const stuff = new RandomDataGenerator();
