const Quiz = require('../models/quiz');

// Create a new quiz
exports.createQuiz = async (req, res) => {
  const { title, questions } = req.body;
  try {
    const newQuiz = new Quiz({ title, questions }); // Create quiz object with title and questions
    await newQuiz.save(); // Save the quiz to the database
    res.status(201).json({ message: 'Quiz created successfully', quiz: newQuiz });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating quiz', error: error.message });
  }
};

// Fetch all quizzes
exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find(); // Fetch all quizzes from the database
    res.status(200).json(quizzes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching quizzes', error: error.message });
  }
};

// Get a quiz by ID
exports.getQuizById = async (req, res) => {
  const { id } = req.params;
  try {
    const quiz = await Quiz.findById(id); // Find quiz by ID
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    res.status(200).json(quiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching quiz', error: error.message });
  }
};

// Take the quiz and calculate the score
exports.takeQuiz = async (req, res) => {
    const { id } = req.params;
    const { answers } = req.body; // User's submitted answers, where each answer corresponds to the respective question index
    try {
      const quiz = await Quiz.findById(id); // Find quiz by ID
      if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
  
      let score = 0;
      quiz.questions.forEach((question, index) => {
        // Compare user's answers with correct answers
        // User's answer for the first question is at index 0, second question at index 1, and so on
        if (question.correctAnswer === answers[index]) score++; 
      });
  
      res.status(200).json({ score, totalQuestions: quiz.questions.length }); // Respond with score
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error taking quiz', error: error.message });
    }
  };
  
