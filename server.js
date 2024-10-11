require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const authRoutes = require('./routes/authRoutes'); 
const quizRoutes = require('./routes/quizRoutes'); 
const { connectDB } = require('./config/db'); 
const swaggerDocs = require('./config/swagger'); 

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