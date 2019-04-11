/* eslint-disable no-console */
const express = require('express');
// const { DatabaseQueryHandler } = require('./database/index.js');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(`${__dirname}/../public`));
require('./router.js')(app);

const PORT = 3242;

app.listen(PORT, (err) => {
  if (err) {
    console.error('failed to open server');
  } else {
    console.log(`Listening on ${PORT}`);
  }
});
