const mongoose = require('mongoose');
require('dotenv').config();

// Ensure the MongoDB URI is defined in the environment variables
const mongoURI = process.env.mongo_url;

// Connect to MongoDB using the URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

// Error handling
connection.on('error', (err) => {
    console.error('Error connecting to DB:', err.message);
});

// Connection established successfully
connection.on('connected', () => {
    console.log('Connected to DB');
});

// Connection disconnected
connection.on('disconnected', () => {
    console.log('Disconnected from DB');
});

// Close the MongoDB connection when the Node.js process exits
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
});

module.exports = connection;
