# Tech Task Admin Panel

This project is divided into two main directories: one for the backend (`admin-panel-backend`) and one for the frontend (`tech-task-admin-panel`).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm

### Installing

A step by step series of examples that tell you how to get a development environment running:

1. Clone the repository:

- git clone https://github.com/philippOkie
  tech-task-admin-panel.git

2. Navigate into the project directory:

- cd tech-task-admin-panel

#### Backend

3. Navigate into the backend directory:

- cd admin-panel-backend

4. Install the backend dependencies:

- npm install

  4.1. Add .env file into the root dir and make sure it looks like

///
MONGODB_URI = "mongodb+srv://<username>:<password>@tech-task.5rwzeli.mongodb.net/?retryWrites=true&w=majority"
PORT=3003
///

I used MongoDB Atlas for this project.

#### Frontend

5. Navigate into the frontend directory:

- cd …/tech-task-admin-panel

6. Install the frontend dependencies:

- npm install

### Running in Development Mode

#### Backend

To start the backend server in development mode, navigate to the backend directory and use the following command:

- npm run dev

#### Frontend

To start the frontend server in development mode, navigate to the frontend directory and use the following command:

- npm run dev

## Built With

- Node.js
- Express
- React
- Vite
