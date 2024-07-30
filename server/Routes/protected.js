const express = require('express');
const router = express.Router();
const verifyToken = require('../Middleware/middlewareAuthentication');
const user_schema = require('../Config/dbSchema');

router.get('/getcreds', verifyToken, async (req, res) => {
    // req.user should now contain the user details from the token
    const user = req.user;
    const user_id = user.userId;
    const userData = await user_schema.findById(user_id);
    
    return res.status(201).json({ userData });
});

module.exports = router;
