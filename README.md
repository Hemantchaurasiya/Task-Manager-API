# Task Manager API

## Description

RESTful API to manage users and their personal tasks with secure authentication, rate-limited quote endpoints.

## Features
- User Registration & Login
- CRUD for user-owned tasks
- Rate-limited motivational quotes endpoint
- Input validation, security middleware

## API Endpoints
See postman-collections folder for all available request and response.

- POST /api/auth/register – Register a new user
- POST /api/auth/login – Login and receive JWT
- GET /api/tasks – Fetch all tasks (auth required)
- GET /api/tasks/:id – Fetch a task (auth required)
- POST /api/tasks – Create a task (auth required)
- PUT /api/tasks/:id – Update a task (auth required)
- DELETE /api/tasks/:id – Delete a task (auth required)
- GET /api/quote – Get motivational quote (rate-limited)

## Assumptions
Each task is owned by a single user.
Quotes are retrieved from a public API and not cached.
MongoDB is assumed to run as as a Docker container.

## How to Scale for 100K+ Users
To make the system scalable and production-grade for high loads:

Use Redis for:
    - Caching
    - Distributed rate-limiting
- Add RabbitMQ / Kafka for background task queues (e.g., emails, logs).
- Enable MongoDB connection pooling and tune indexes for query optimization.
- Deploy in Kubernetes with HPA (horizontal pod autoscaler) and load balancers.

## Production-Ready Improvements
These enhancements can prepare the app for real-world deployment:

- No need to push .env file
- Add DTO (data transfer object) to send data to user.
- Add refresh token mechanism with rotation and blacklisting
- Add structured logging (to file or external systems)
- Add Sentry, Prometheus, or Grafana for error tracking and performance metrics
- Integrate OAuth2 providers (Google, GitHub)
- Write unit and integration test cases.
