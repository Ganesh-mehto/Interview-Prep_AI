require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const connectDB = require('./config/db');

app.use(cors({
    origin: '*', // Adjust this to your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
connectDB()
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});