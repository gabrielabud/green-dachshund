
const express = require('express');

const app = express();
const port = 3000;
const items = require('./routes/items');


app.get('/', (req, res) => res.send('Hello Green Dachshund'));
app.use('/search', items);


module.exports = {
  run: () => app.listen(port, () => console.log(`Verde Dachshund listening on port ${port}!`)),
  app
};
