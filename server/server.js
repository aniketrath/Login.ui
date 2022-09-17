// Initialise Express.
const express = require('express');
const app = express();
const port = 5000;

const user = [
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
console.log(user);

app.get("/server/login", (req, res) => {
    res.json(user);
})

app.listen(port, () => {
    console.log("server has started at http://localhost:5000/server/login");
})