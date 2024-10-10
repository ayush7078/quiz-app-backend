require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the CORS package
const authRoutes = require('../routes/authRoutes'); // Ensure paths are correct
const quizRoutes = require('../routes/quizRoutes'); // Ensure paths are correct
const { connectDB } = require('../config/db'); // Ensure paths are correct
const swaggerDocs = require('../config/swagger'); // Ensure paths are correct

const app = express();

app.use(cors()); 
app.use(express.json()); 
connectDB(); 
swaggerDocs(app);

app.use('/api/auth', authRoutes); 
app.use('/api/quiz', quizRoutes); 

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; 