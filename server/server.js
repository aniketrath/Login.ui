// Initialise Express.
const express = require('express');
const cors = require("cors")

const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())


const USER_DETAILS =
{
    userEmail: 'benjamin@login.ui.com',
    userPassword: '9556479373',
    userName: 'Aniket Rath',
    userPosition: 'Site Developer'
}


app.post("/user/login", (req, res) => {
    if (
        !req.body.username || !req.body.password
    ) {
        return res.status(400).json("Username and Password Required.")
    }

    if (req.body.username === USER_DETAILS.userEmail && req.body.password === USER_DETAILS.userPassword) {
        res.status(200).json(USER_DETAILS);
    } else {
        res.status(404).json("Invalid Cred.")
    }

})
app.get("/user/logindetails", (req, res) => {
    res.json(req.username, req.password);
})

app.listen(port, () => {
    console.log("server has started at http://localhost:5000/user/login");
})