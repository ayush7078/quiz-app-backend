const express = require('express');
const { createQuiz, getQuizzes, getQuizById, takeQuiz } = require('../controllers/quizContoller');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Quiz:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         title:
 *           type: string
 *         questions:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *               correctAnswer:
 *                 type: integer
 *     QuizResult:
 *       type: object
 *       properties:
 *         score:
 *           type: integer
 *         totalQuestions:
 *           type: integer
 */

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
router.post('/',  createQuiz);

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

/**
 * @swagger
 * /api/quiz/{id}:
 *   get:
 *     summary: Get a quiz by ID
 *     tags: [Quiz]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the quiz
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Quiz found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quiz'
 *       404:
 *         description: Quiz not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getQuizById);

/**
 * @swagger
 * /api/quiz/{id}/take:
 *   post:
 *     summary: Take a quiz
 *     tags: [Quiz]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the quiz
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               answers:
 *                 type: array
 *                 items:
 *                   type: integer
 *     responses:
 *       200:
 *         description: Quiz result
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizResult'
 *       404:
 *         description: Quiz not found
 *       500:
 *         description: Internal server error
 */
router.post('/:id/take', takeQuiz);

module.exports = router;
