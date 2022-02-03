import http from 'http';
import fs from 'fs';

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    switch (req.url) {
        case "/":
            fs.readFile('index.html', function (err, data) {
                res.write(data);
                return res.end();
            });
            break;
        case "/home":
            fs.readFile('home.html', function (err, data) {
                res.write(data);
                return res.end();
            });
            break;
        case "/profil":
            fs.readFile('profil.html', function (err, data) {
                res.write(data);
                return res.end();
            });
            break;
        case "/about":
            fs.readFile('about.html', function (err, data) {
                res.write(data);
                return res.end();
            });
            break;
        default:
            break;
    }

}).listen(8000);

console.log('server is running on http://localhost:8000');
