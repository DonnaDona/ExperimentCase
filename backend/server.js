require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const {connectDB} = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

connectDB()
    .then(() => console.log('MongoDB connection SUCCESS'))
    .catch(() => {
        console.error('MongoDB connection FAIL');
        process.exit(1);
    });

app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));