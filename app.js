var express = require('express');
var app = express();
var port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
})