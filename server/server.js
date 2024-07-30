const express = require('express');
const protected_routes = require('./Routes/protected');
const auth_routes = require('./Routes/auth')
const connectDB = require('./Config/dbConfig');
const cors = require('cors');


// Start Server Settings
const server = express();
server.use(cors());
connectDB();

server.use(express.json());
const PORT = 8000;

// Use user routes with prefix /app
server.use('/auth', auth_routes);
server.use('/secure', protected_routes);

// Start Server in try-catch
const start = async () => {
    try {
        server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();
