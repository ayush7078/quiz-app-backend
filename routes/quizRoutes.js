const express = require('express');
const { createQuiz, getQuizzes, getQuizById, takeQuiz } = require('../controllers/quizContoller');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * /api/quiz:
 *   post:
 *     summary: Create a new quiz
 *     tags: [Quiz]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               questions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     question:
 *                       type: string
 *                     options:
 *                       type: array
 *                       items:
 *                         type: string
 *                     correctAnswer:
 *                       type: integer
 *     responses:
 *       201:
 *         description: Quiz created successfully
 *       500:
 *         description: Internal server error
 */
router.post('/', protect, createQuiz);

/**
 * @swagger
 * /api/quiz:
 *   get:
 *     summary: Get all quizzes
 *     tags: [Quiz]
 *     responses:
 *       200:
 *         description: A list of quizzes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Quiz'
 *       500:
 *         description: Internal server error
 */
router.get('/', getQuizzes);

module.exports = router;
