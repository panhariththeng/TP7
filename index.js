const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello API')
})

app.get('/detail', function (req, res) {
  res.send('Hello From API In Detail')
})

app.listen(3000, () => {
  console.log('Your Project is running on port: 3000')
})
