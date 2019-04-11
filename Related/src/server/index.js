const express = require('express');
const path = require('path');
const db = require('../database/schema');
const cors = require('cors');


const app = express();
app.use(cors());
const port = 3100;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(express.static(path.join(__dirname, '/../../public')));
app.use(express.json());


app.get('/artists', (req, res) => {
  db.getdata().then((data) => {
    res.json(data);
  }).catch(() => {
    res.json({ err: 'cant access database' });
  });
});

app.get('/data/artist/', (req, res) => {
  const userid = req.query.id;
  db.getArtist(userid).then((data) => {
    res.json(data);
  });
});

app.get('/icon', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/playicon.png'));
});
