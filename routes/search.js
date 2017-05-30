const fs = require('fs');
const path = require('path');
const omdb = require('../lib/omdb');


function search(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  omdb.get('avengers', (error, movie) => {
    if (error) throw error;

    console.log(movie);
  });

  const stream = fs.createReadStream(path.resolve('public', 'movie.html')); // public/css/app.css

  stream.pipe(res);

}

module.exports = search;
