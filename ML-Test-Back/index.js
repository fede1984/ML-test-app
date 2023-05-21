const express = require('express')
require('dotenv').config();
const env = process.env

const app = express()

app.use(function (req, res, next) {
    
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(express.static("public"))


app.use('/api', require('./routes'))


app.listen(env.PORT, () => console.log(`Example app listening on port ${env.PORT}!`))
