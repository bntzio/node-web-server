const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send({
    name: 'Enrique Benitez',
    technologies: [
      'nodejs',
      'react',
      'rails',
      'vue',
      'express'
    ]
  })
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000 ✨');
});
