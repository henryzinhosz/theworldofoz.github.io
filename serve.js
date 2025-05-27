const express = require('express')
const app = express()

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  app.use(express.static(__dirname + '/public/main.css'));
  res.sendFile('index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
  app.use(express.static(__dirname + '/public/about.css'));
  res.sendFile('about.html', { root: __dirname })
})

app.get('/index.js', (req, res) => {
  res.sendFile('index.js', { root: __dirname })
})

app.get('/aboutIndex.js', (req, res) => {
  res.sendFile('aboutIndex.js', { root: __dirname })
})

cors: {
origin: [' https://henryzinhosz.github.io/ ', ' https://pfpfinder.com/api/discord/user/ '],
methods: 'GET,HEAD,PUT,PATCH,DELETE',
},
  
app.listen(3000, '0.0.0.0');
