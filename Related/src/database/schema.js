const mongoose = require('mongoose');
const fetch = require('node-fetch');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const db = mongoose.connect('mongodb://localhost/relatedArtists');

const artistSchema = new Schema({
  _id: String,
  name: String,
  bio: String,
  image: String,
  relatedartists: []
});

const Artist = mongoose.model('Artist', artistSchema);

const fetchImage = () => {
  const imagewidth = 400;
  const imageheight = 480;
  const collectionid = 1163637;
  return fetch(
    `http://source.unsplash.com/collection/${collectionid}/${imagewidth}x${imageheight}`
  ).then(response => response.url);
};

const getdata = () => {
  return new Promise((resolve, reject) => {
    Artist.find({}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getArtist = id => {
  return new Promise((resolve, reject) => {
    const query = Artist.where({ _id: id });
    query.findOne((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// seeddata();
module.exports = {
  fetchImage,
  getdata,
  getArtist,
  db
};
