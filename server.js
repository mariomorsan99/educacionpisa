const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('EducacionApp' + '/dist'));

app.listen(process.env.PORT || 8080);

//PathLocationStragety
app.get('/*', function(req, res) {
    res.sendFile(path.join(_dirname + '/dist/index.html'));
});

console.log('listeling');