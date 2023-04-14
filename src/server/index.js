const dotenv = require("dotenv");
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const sURL = "https://api.meaningcloud.com/sentiment-2.1";

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'))

console.log(__dirname);


app.get('/', function (req, res) {

    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})


app.post('/analyze', async function (req, res) {

    let sText = req.body.text;
    let result;
    fetch(`${sURL}?key=${process.env.API_KEY}&lang=en&txt=${sText}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(async data => {
        try {
            result = await data.json();
        } catch (err) {
            result = {}
        }
        res.send(result);
    }, err => {
        console.error(err);
        result = {};
        res.send(result);
    })
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log(`The API_KEY is : ${process.env.API_KEY}`)
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
