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

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/task-rate-limiter.git
   ```
   
