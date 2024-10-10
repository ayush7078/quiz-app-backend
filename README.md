# Quiz App - RESTful API

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

4. Create a `.env` file and add the following environment variables:
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

### API Documentation
- The API is documented with **Swagger**. To access the Swagger docs, navigate to `/api-docs` on your running server.
