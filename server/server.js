// Initialise Express.
const express = require('express');

const app = express();
const port = 5000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

const userDetails = [
    {
        userEmail: 'benjamin@login.ui.com',
        userName: 'Aniket Rath',
        userPosition: 'Site Developer'
    },
    {
        userEmail: 'jameson@login.ui.com',
        userName: 'Jameson Smith',
        userPosition: 'Site Admin'
    }
]
console.log(userDetails);

app.get("/user/login", (req, res) => {
    res.json(userDetails);
})

app.listen(port, () => {
    console.log("server has started at http://localhost:5000/user/login");
})