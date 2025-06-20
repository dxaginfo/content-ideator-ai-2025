# Content Ideator AI Backend

This is the Node.js backend for the Content Ideator AI application.

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file with the following variables:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
```

## Project Structure

- `controllers` - Route controllers
- `models` - Database models
- `routes` - API routes
- `services` - Business logic
- `middleware` - Custom middleware
- `utils` - Helper functions
