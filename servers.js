const http = require('http');
const url = require('url');
const fs = require('fs');
const { json } = require('stream/consumers');

const data= fs.readFileSync(`${__dirname}/dev-data/data.json` , 'utf-8');
const dataObj= JSON.parse(data);

const  server =http.createServer((req,res)=>{
    const  path = req.url;

    if(path=== '/overview' || path==='/') {
        res.end('This is OVERVIEW');
    } else if(path === '/product') {
        res.end('this is PRODUCT, bitch');
    } else if (path==='/api') {
        res.writeHead(200, {'Content-type' : 'application/json'} )
        res.end(data);
    } else {
        res.writeHead(404 , {'Content-type' : 'text/html'} )
        res.end('<h4>LOL, ERROR 404</h4>')
    }
});
server.listen(3000,()=>{ // it can also be (3000,'127.0.0.1') which is basically loval host by default
    console.log('Listening on port-3000!!!');
});
