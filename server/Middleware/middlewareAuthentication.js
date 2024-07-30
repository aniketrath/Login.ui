const jwt = require('jsonwebtoken');
const secretKey = 'login_ui_user'; // Replace with your actual secret key

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }
        // If everything is good, save the decoded user details to the request
        req.user = decoded;
        next();
    });
};

module.exports = verifyToken;
