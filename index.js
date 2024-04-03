const express = require('express');
const cors = require('cors');
require('dotenv').config;
require('./testData');

const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./db");
db.connect()

// Middleware
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
