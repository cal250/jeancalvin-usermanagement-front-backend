const mongoose = require('mongoose');

async function connectdb() {
    const url = 'mongodb://localhost:27017/examform';
    try {
        await mongoose.connect(url);
        console.log(`Database connected: ${url}`);
    } catch (err) {
        console.error(`Connection error: ${err}`);
        process.exit(1);
    }
}

module.exports = connectdb;