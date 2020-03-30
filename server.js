const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

// app.listen(process.env.PORT || 8080);

//PathLocationStragety
app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

console.log('listeling');

//Escuchar Peticiones
app.listen(process.env.PORT || 8080, () => {
    console.log(__dirname);
    console.log('Express server puerto 8080: \x1b[32m%s\x1b[0m', 'online');
});