const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res)=> {
    console.log(req.url)
    if(req.url==='/') {
        console.log(req.url)
        fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
    }

    if(req.url.indexOf('.html') != -1){ //req.url has the pathname, check if it conatins '.html'
      console.log(req.url)
      fs.readFile(__dirname + req.url, function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
    }


    if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile(__dirname + req.url, function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });

    }

    if(req.url.indexOf('.png') != -1){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile(__dirname + req.url, function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        res.end();
      });

    }

    if(req.url.indexOf('.svg') != -1){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile(__dirname + req.url, function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'image/svg'});
        res.write(data);
        res.end();
      });

    }

    
    
})

server.listen(3000, '127.0.0.1', ()=>console.log("Server is Live"));