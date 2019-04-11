// Dependencies Setup

const express = require('express');
const morgan = require('morgan');
const db = require('./db.js');
const cors = require('cors');
const app = express();

// Middelware Setup

app.use(express.static(`${__dirname}/../client/dist`));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes Setup

app.get('/data/toptracks', (req, res) => {
  db.getTopTracks()
    .then(results => res.json(results))
    .catch(console.log);
});

// Server Setup

const PORT = process.env.PORT || 3004;

app.listen(PORT, err => {
  if (err) console.log('Error connecting to server...');
  else {
    console.log(`Server running on PORT: ${PORT}...`);
  }
});
