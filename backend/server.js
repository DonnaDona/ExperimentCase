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

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    const buildDirectory = path.join(__dirname, './dist');
    app.use(express.static(buildDirectory));
    app.get("*", (req, res) => {
        res.sendFile(path.join(buildDirectory, "index.html"));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));