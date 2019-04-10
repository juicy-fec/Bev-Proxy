/* eslint-disable no-console */
const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.connect('mongodb://database/spoticlone');
const db = mongoose.connection;
db.on('error', () => console.error('failed to load DB'));
db.once('open', () => console.log('db connected'));
const artistSchema = new Schema({
  name: String,
  albums: Array,
});
const albumSchema = new Schema({
  name: String,
  image: String,
  type: String,
});
const Album = mongoose.model('Album', albumSchema);
const Artist = mongoose.model('Artist', artistSchema);

module.exports = {
  Album,
  Artist,
  db,
};
