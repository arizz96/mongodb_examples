var express = require('express');
var mongoose = require('mongoose');
var Bear = require('./bear');

const app = express();

var options = {
  useMongoClient: true,
};
mongoose.connect(process.env.MONGODB_URL, options).then(
  ()    => { console.log('DB connect') },
  (err) => { console.log('Error connecting to DB ' + err) }
);

var port = process.env.PORT || 8080;

app.get('/bears', (req, res) => {
  Bear.find((err, bears) => {
    if(err) { res.send(err) };
    res.json(bears)
  });
});

app.listen(port);
console.log('Started');
