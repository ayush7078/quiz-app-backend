const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true, validate: [arrayLimit, `{PATH} must have 4 options`] },
  correctAnswer: { type: Number, required: true }, 
});

// Helper function to enforce 4 options per question
function arrayLimit(val) {
    return val.length === 4;
  }

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [questionSchema],
});

module.exports = mongoose.model('Quiz', quizSchema);
