/* eslint-disable no-console */
const { Artist, Album } = require('./index.js');

class DatabaseQueryHandler {
  static getAllArtistData(artistName, cb) {
    Artist.find({ name: artistName }, (err, data) => {
      if (err) {
        console.log('failed to get artist data');
        cb(err, null);
      } else {
        cb(null, data);
      }
    });
  }

  static getArtistAlbums(artistName, cb, albumWord = null) {
    let artistData = [];
    let artistAlbums = [];
    const getByIDs = [];
    DatabaseQueryHandler.getAllArtistData(artistName, (err, data) => {
      if (err) {
        console.log('failed to get album');
        cb(err, null);
      } else {
        artistData = data;
        artistAlbums = artistData[0].albums;

        artistAlbums.map(id => getByIDs.push(Album.findById(id).exec()));
        Promise.all(getByIDs).then((albumnames) => {
          const filteredAlbums = [];
          // eslint-disable-next-line array-callback-return
          albumnames.map((element) => {
            if (albumWord) {
              if (element.type === albumWord) {
                filteredAlbums.push(element);
              }
            } else {
              filteredAlbums.push(element);
            }
          });
          cb(null, filteredAlbums);
        });
      }
    });
  }
}
module.exports = {
  DatabaseQueryHandler,
};
