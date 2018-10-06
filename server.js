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

app.get('/toolkit', (req, res) => {
  res.render('toolkit')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/proposal', (req, res) => {
  res.render('proposal')
})

app.get('/proposal-submit', (req, res) => {
  var data = {
    fields: {
      Name: req.query.name,
      Tags: req.query.tags,
      Image: [],
      Description: req.query.description,
      Website: req.query.website,
      Github: req.query.github
    }
  }

  return fetch('https://api.airtable.com/v0/apphh54RWCIy6BMlr/Projects', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Authorization': 'Bearer ' + process.env.AIRTABLE_API_KEY,
      'Content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(json => res.redirect('proposal'))
})

app.get('/projects', (req, res)=> {
  return fetch('https://api.airtable.com/v0/apphh54RWCIy6BMlr/Projects?maxRecords=10', {
    headers: {
      'Authorization': 'Bearer ' + process.env.AIRTABLE_API_KEY
    },
    body: JSON.stringify()
  })
  .then(response => response.json())
  .then(function (json) {
    // res.send(json)
    res.render('projects', { projects: json.records })
  })
  // return fetch('https://api.airtable.com/v0/apphh54RWCIy6BMlr/Projects?maxRecords=10', {
  //   headers: {
  //     'Authorization': 'Bearer ' + process.env.AIRTABLE_API_KEY
  //   },
  //   body: JSON.stringify()
  // })
  // .then(response => response.json())
  // .then(function (json) {
  //   // res.send(json)
  //   res.send(json)
  // })
})

app.listen(process.env.PORT || 3000, () => console.log('App started!'))
