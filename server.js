const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi! You are on a backend right now.')
})

const port = 3000;
app.listen(port, () => {
    console.log(`The server is now running on port ${port}!`)
})