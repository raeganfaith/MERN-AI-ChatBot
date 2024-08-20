# MERN ChatBot with OpenAI API

Welcome to the MERN ChatBot repository! This project is a ChatBot application built using the MERN stack (MongoDB, Express.js, React, Node.js) and integrated with the OpenAI API for natural language processing.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Security](#security)

## Features

- **Natural Language Processing:** Utilizes the OpenAI API to understand and respond to user input.
- **User Authentication:** Secure user login and registration using JWT tokens and encrypted passwords.
- **Message History:** Stores user messages in a database, allowing for message retrieval and deletion.
- **Middleware Chains:** Protects routes and handles errors effectively.
- **Responsive UI:** A clean and intuitive user interface built with React.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/MERN-ChatBot.git
    cd MERN-ChatBot
    ```

2. **Install dependencies for both the server and client:**
    ```bash
    # For the server
    cd server
    npm install

    # For the client
    cd ../client
    npm install
    ```

3. **Set up the environment variables** (see the [Environment Variables](#environment-variables) section below).

4. **Run the application:**

    - **Server:**
      ```bash
      cd server
      npm start
      ```

    - **Client:**
      ```bash
      cd client
      npm start
      ```

5. **Open your browser:**
    - Visit `http://localhost:3000` to access the ChatBot application.

## Usage

1. **Register or log in** to start using the ChatBot.
2. **Interact** with the bot by typing messages into the chat interface.
3. **View your chat history** or delete messages as needed.

## Environment Variables

Create a `.env` file in the `server` directory with the following environment variables:

```plaintext
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
