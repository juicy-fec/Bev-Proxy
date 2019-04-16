const mongoose = require('mongoose');
const fetch = require('node-fetch');
mongoose.Promise = require('bluebird');

require('babel-polyfill');

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

/* istanbul ignore next */
const fetchImage = () => {
  const imagewidth = 400;
  const imageheight = 480;
  const collectionid = 1163637;
  return fetch(
    `http://source.unsplash.com/collection/${collectionid}/${imagewidth}x${imageheight}`
  ).then(response => response.url);
};

/* istanbul ignore next */
const seeddata = () => {
  try {
    Artist.collection.drop();
  } catch (err) {
    if (err.message !== 'ns not found') {
      throw err;
    }
  }
  const imageurls = [];
  let count = 0;
  const entries = 100;
  while (count < entries) {
    imageurls.push(fetchImage());
    count += 1;
  }
  Promise.all(imageurls)
    .then(images => {
      const dbpromises = [];
      images.forEach((image, index) => {
        dbpromises.push(
          Artist.create({
            _id: `${index}`,
            name: `${index}`,
            bio: `bio of ${index}`,
            image,
            relatedartists: [(index + 1) % 100, (index + 20) % 100]
          })
        );
      });
      Promise.all(dbpromises).then(() => {
        console.log('done seeding');
        db.connection.close();
      });
    })
    .catch(err => {
      console.log(err);
    });
  // .then(() => {
  //   console.log('done seeding');
  //   db.connection.close();
  // });
};

seeddata();
