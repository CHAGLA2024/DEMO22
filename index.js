require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('HELLOW HII !')
})

app.get('/twitter1', (req, res) => {
  res.send('<h1>PLEASE LOGIN AT CHAI WITH CODE HERE !</h1>')
})

app.get('/twitter2', (req, res) => {
  res.send("<h2>PLEASE LOGIN AT CHAI WITH CODE HERE !</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})