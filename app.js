import http from 'node:http';
import fs from 'node:fs'

const server = http.createServer((req, res) => {
    console.log('Hello World!')
    console.log(`Request URL ${req.url}`)
    if(req.url == '/') {
        console.log('Index!')
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('./index.html', (err, data) => {
            if(err) {
                console.log(err);
                return;
            }
            res.write(data);
            res.end();
        });
    } else if (req.url == '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('./about.html', (err, data) => {
            if(err) {
                console.log(err);
                return;
            }
            res.write(data);
            res.end();
        });
    } else if (req.url == "/contact-me") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('./contact-me.html', (err, data) => {
            if(err) {
                console.log(err);
                return;
            }
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('./404.html', (err, data) => {
            if(err) {
                console.log(err);
                return;
            }
            res.write(data);
            res.end();
        });
    }
    
})


server.listen(8000);