var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))
app.use('/assets/', express.static('assets'))

// 기본라우팅 - HOME
app.get('/', function (req, res){res.render('index')})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})