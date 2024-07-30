const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = require('../Config/dbSchema')

// User registration
router.post('/register', async (req, res) => {
    try {
        const { username, password, email, position, name } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userSchema({ username, password: hashedPassword, position, email, name });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});



// User login
router.post('/login', async (req, res) => {
    console.log("Login req Requested :");
    try {
        const { username, password } = req.body;
        if (!username) {
            res.status(200).json({ err_msg : "Please Enter usernname" });
        }
        // Sanitize input
        const sanitizedUsername = username.replace(/[^a-zA-Z0-9]/g, '');

        const user = await userSchema.findOne({ username: sanitizedUsername });
        if (!user) {
            console.log("user fail");
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            console.log("passwd fail    ");
            return res.status(401).json({ error: 'Authentication failed' });
        }

        const token = jwt.sign({ userId: user._id }, 'login_ui_user', {
            expiresIn: '1h',
        });

        res.status(200).json({ token });
    } catch (error) {
        console.error('Login error:', error);
    }
});
module.exports = router;