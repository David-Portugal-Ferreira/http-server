//import http from 'node:http';
//import fs from 'node:fs'

const fs = require('fs')


/*
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
*/


const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.sendFile('/home/david/top-node/project-basic-informational-site/index.html', (err) => {
        if(err) {
            console.log(err);
        }
    });
});

app.get('/about-me', (req, res) => {
    res.sendFile('/home/david/top-node/project-basic-informational-site/about-me.html', (err) => {
        if(err) {
            console.log(err);
        }
    });
});
app.get('/contact-me', (req, res) => {
    res.sendFile('/home/david/top-node/project-basic-informational-site/contact-me.html', (err) => {
        if(err) {
            console.log(err);
        }
    });
});

app.use((req, res) => {
    res.sendFile('/home/david/top-node/project-basic-informational-site/404.html', (err) => {
        if(err) {
            console.log(err);
        }
    });
})

const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
})