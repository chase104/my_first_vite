const express = require('express');
const uuid = require('uuid')
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));



app.listen(4001, () => {
    console.log('listening on 4001')
    console.log(uuid)
});