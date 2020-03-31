const express = require('express');
const app = express();
const path = require('path');



app.use(express.static(path.join(__dirname, '/EducacionApp/dist')));



app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/src/app/app.component.html');

});

// app.all('/*', function(req, res, next) {
//     app.use('/js', express.static(__dirname + '/dist/EducacionApp/assets/js'));
//     app.use('/css', express.static(__dirname + '/dist/EducacionApp/assets/css'));
//     // Just send the index.html for other files to support HTML5Mode
//     res.sendFile('index.html', { root: __dirname + '/dist/EducacionApp/' });
// });

console.log('listeling');

app.listen(process.env.PORT || 4200, () => {
    console.log(path.join(__dirname + '/src/assets/js'));
    console.log(path.join(__dirname + '/dist/EducacionApp/index.html'));
    console.log('Express server puerto 8080: \x1b[32m%s\x1b[0m', 'online');
});