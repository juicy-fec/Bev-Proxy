/* eslint-disable func-names */
/* eslint-disable no-console */
const { DatabaseQueryHandler } = require('./database/DatabaseQueryHandler.js');

module.exports = function (app) {
  app.get('/data/albumsbyartist/:artistId', (req, res) => {
    // route to db and get album array by an artist id albums with Album tag
    DatabaseQueryHandler.getArtistAlbums(req.params.artistId, (err, data) => {
      if (err) {
        res.end(404);
      } else {
        res.json(data);
      }
    });
  }); // all albums
  app.get('/data/albumswithartist/:artistId', (req, res) => {
    // route to db and get album array with 'Includes' by an artist id return empty array if nothing
    DatabaseQueryHandler.getArtistAlbums(
      req.params.artistId,
      (err, data) => {
        if (err) {
          res.end();
        } else {
          res.json(data);
        }
      },
      'Includes',
    );
  }); // Includes tag
  app.get('/data/epswithartist/:artistId', (req, res) => {
    // route to db and get album array with 'EP' by an artist id
    DatabaseQueryHandler.getArtistAlbums(
      req.params.artistId,
      (err, data) => {
        if (err) {
          res.end();
        } else {
          res.json(data);
        }
      },
      'EP',
    );
  }); // EP tag
  app.get('/data/compilationswithartist/:artistId', (req, res) => {
    // route to db and get album array with 'Compilation' by an artist id
    DatabaseQueryHandler.getArtistAlbums(
      req.params.artistId,
      (err, data) => {
        if (err) {
          res.end();
        } else {
          res.json(data);
        }
      },
      'Compilation',
    );
  }); // compilation tag
};
