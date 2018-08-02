const http = require('http');

const srv = http.createServer((req, res) => { //Kiedy przeglądarka wysyła zapytanie...
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('???'); //...oraz przesłanie odpowiedzi.
});

//Coś tu powinno być