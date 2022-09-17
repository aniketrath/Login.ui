// Initialise Express.
const express = require('express');
const app = express();

app.get("/server", (req, res) => {
    res.json({ "users": ["UserOne", "UserTwo"] })
})

app.listen(5000, () => {
    console.log("server has started at http://localhost:5000/server");
})