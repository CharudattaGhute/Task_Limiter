# Task Rate Limiter API

This project provides an API to process tasks with rate limiting for each user. It includes a middleware function to limit the number of tasks a user can create within a specific time frame.

## Features

- Rate limiting to prevent users from creating more than:
  - 1 task per second
  - 20 tasks per minute
- Logging each task with a timestamp
- Simple task processing and storage

## Technologies

- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for building APIs
- **MongoDB**: Database for storing task records
- **Mongoose**: MongoDB ODM for schema definitions and data modeling

### Installation
### Install dependencies
```bash
npm install express mongoose dotenv nodemon
```
## Setup instructions
```bash
git clone https://github.com/CharudattaGhute/Task_Limiter.git
```

## API Endpoints

### Rate Limiter Middleware
- The rateLimiter middleware restricts the number of tasks a user can create based on two conditions:
1] No more than 1 task per second.
2] No more than 20 tasks per minute.

## Task Processing
### Endpoint: POST /task
- Processes a new task for the given user_id. This endpoint is protected by the rateLimiter middleware.
## Requeat body:-
```bash
{
  "user_id": "your_user_id"
}
```
## Response:
- 200 OK: If the task was successfully processed and logged.
- 429 Too Many Requests: If the rate limit is exceeded.


   
