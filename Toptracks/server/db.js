// Database Setup

const mongoose = require('mongoose');
const data = require('./z_seedData.js');

mongoose.connect('mongodb://localhost:27017/topTracks');

const db = mongoose.connection;

db.on('error', () => console.log('Error connecting to topTracks database...'));
db.once('open', () => console.log('Connected to topTracks database...'));

const songSchema = new mongoose.Schema({
  name: String,
  artist: String,
  image: String,
  playCount: Number,
  length: String
});

const Song = mongoose.model('Song', songSchema);

const getTopTracks = () => Song.find({}, '_id name artist image playCount length')
  .limit(5)
  .sort('-playCount')
  .exec();

// // Seed Data Generator

db.dropDatabase();

const dummyData = (bands, songs, images) => {
  for (let i = 0; i < 100; i++) {
    const song = new Song({
      name: songs[i],
      artist: bands[i],
      image: images[i],
      playCount: Math.floor(Math.random() * 10000),
      length: `${Math.floor(3 + (Math.random() * 3))}:${Math.floor(10 + (Math.random() * 50))}`
    });
    song.save();
  }
};

dummyData(data.bands, data.songs, data.images);

module.exports.getTopTracks = getTopTracks;
module.exports.bands = data.bands;
module.exports.songs = data.songs;
module.exports.images = data.images;
module.exports.dummyData = dummyData;
