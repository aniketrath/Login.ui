// Initialise Express.
const express = require('express');

const app = express();
const port = 5000;

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');

    next();
});

const userDetails =
{
    userEmail: 'benjamin@login.ui.com',
    userPassword: '9556479373',
    userName: 'Aniket Rath',
    userPosition: 'Site Developer'
}

console.log(userDetails);

app.get("/user/login", (req, res) => {
    res.json(userDetails);
})
app.get("/user/logindetails", (req, res) => {
    res.json(req.username, req.password);
})

app.listen(port, () => {
    console.log("server has started at http://localhost:5000/user/login");
})