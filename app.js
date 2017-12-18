var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))
app.use('/assets/', express.static('assets'))

app.get('/', function (req, res){res.render('index')})
app.get('/list-view', function (req, res){res.render('list-view')})
app.get('/login', function (req, res){res.render('login')})
app.get('/view', function (req, res){res.render('view')})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})