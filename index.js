var express = require('express')
var server=express()
    console.log('hello world')
var http=require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write('hello world')
    res.end()
}).listen(8080);



