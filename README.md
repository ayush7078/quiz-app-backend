# Quiz App - RESTful API

## Project Overview
The Quiz App is a RESTful API designed to manage quizzes, user authentication, and score calculation for an online quiz application. It allows users to register, log in, create quizzes, take quizzes, and retrieve quiz results.

## Table of Contents
- [Project Setup](#project-setup)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)

## Project Setup

### Prerequisites
- Node.js installed
- MongoDB connection string (for example, from MongoDB Atlas)
- Git (to clone the repository)

### Installation Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/ayush7078/quiz-app-backend.git
    ```

2. Navigate into the project directory:
    ```bash
    cd quiz-app-backend
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add the following environment variables:
    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=5000
    ```

5. Run the server in development mode:
    ```bash
    npm run dev
    ```

6. Run the server in production mode:
    ```bash
    npm start
    ```

7. To access the API, use:
    ```bash
    http://localhost:5000/api
    ```

## API Endpoints

### Authentication
- **Register a new user**: `/api/auth/register`
- **Log in a user**: `/api/auth/login`

### Quizzes
- **Create a new quiz**: `/api/quizzes`
- **Get all quizzes**: `/api/quizzes`
- **Get a quiz by ID**: `/api/quizzes/:id`
- **Take a quiz**: `/api/quizzes/:id/take`

## Usage
- The API is documented with **Swagger**. To access the Swagger documentation, navigate to `/api-docs` on your running server:
    ```plaintext
    http://localhost:5000/api-docs
    ```

## Technologies Used
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT) for authentication
- Bcrypt for password hashing
- Swagger for API documentation
- Nodemon for development

## License
This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
