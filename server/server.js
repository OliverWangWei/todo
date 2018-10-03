var express = require('express')
var bodyParse = require('body-parser')

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./modules/todo')
var {Users} = require('./modules/user')

var app = express()

app.listen(3000, () => {
    console.log('Started on port 3000')
})