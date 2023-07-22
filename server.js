var express = require('express')
var server=express()
    console.log('hello world')
server.get('/',function(req,res){
    res.writeHead(200,{'Content-Type': 'application/json'})
    res.write('hello world')
    res.end()
})



