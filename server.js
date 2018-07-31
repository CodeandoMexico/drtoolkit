const express = require('express')
const app = express()
const fetch = require('node-fetch')

require('dotenv').config()
app.set('view engine', 'pug')
app.set('views', 'views')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/toolkit', (req, res) =>{
  return fetch('https://api.airtable.com/v0/apphh54RWCIy6BMlr/Projects?maxRecords=10&view=All', {
    headers: {
      'Authorization': 'Bearer ' + process.env.AIRTABLE_API_KEY
    },
    body: JSON.stringify()
  })
  .then(response => response.json())
  .then(function (json) {
    // res.send(json)
    res.render('toolkit', {projects: json.records})
  })
})

app.get('/about', (req, res)=>{
  res.render('about')
})

app.listen(3000 || process.env.PORT, () => console.log('Listening on port 3000!'))
