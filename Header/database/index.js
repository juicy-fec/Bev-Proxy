/* eslint-disable no-console */
const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/artists', { useNewUrlParser: true });
const collection = mongoose.connection;

// Schema for database
const artistSchema = new Schema({
  name: String,
  header_img: String,
});

// Instantiation of mongoose model
const Artist = mongoose.model('Artist', artistSchema);

// Model for GET by id
const getArtist = (id) => {
  return Artist.findById(id, 'name header_img -_id').exec();
};

// Model for POST
const save = (artist) => {
  const newArtist = new Artist({
    name: artist.name,
    header_img: artist.header_img,
  });

  newArtist.save((err) => {
    // eslint-disable-next-line no-unused-expressions
    err ? console.log(err) : console.log('New artist added to database')
  });
};

module.exports.save = save;
module.exports.getArtist = getArtist;
module.exports.collection = collection;
