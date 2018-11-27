var express = require('express');
var app = express();

//Watson Code

var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var VisualRecognition = new VisualRecognitionV3({
    version: '2018-03-19',
    iam_apikey: 'm6IL5rDoi64XxQGv8xFaakma_JoTkJdvFKKFGjzP5-54'
});

var images_file = fs.createReadStream('face.jpeg');

var params = { images_file: images_file };
VisualRecognition.detectFaces(params, function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(response, null, 2))
    }
});




app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.listen(3000, function () {
    console.log('listening on port 3000');
});




