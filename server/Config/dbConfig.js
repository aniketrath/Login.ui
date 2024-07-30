const mongoose = require('mongoose');

const db_name = 'login_ui'

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${db_name}`)
        console.log('DB connection Established :');
    } catch (error) {
        console.error('Error connecting to MongoDB : ', error);
    }
}

module.exports = connectDB;


