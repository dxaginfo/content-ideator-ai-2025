# Content Ideator AI

An AI-powered web application that generates creative and relevant content ideas for blog posts, videos, social media, and other content formats. Designed to help content creators, marketers, and social media managers overcome creative blocks and develop engaging content strategies.

## 🚀 Features

- **AI-Powered Idea Generation**: Generate unique content ideas for blogs, videos, and social media
- **Trend Analysis**: Discover trending topics in your industry to maximize relevance
- **Keyword Optimization**: Get SEO keyword suggestions for better content discoverability
- **Content Calendar Planning**: Plan and schedule your content effectively
- **User Account System**: Save favorite ideas and track your content history

## 💻 Tech Stack

### Frontend
- React.js with TypeScript
- Material UI for UI components
- Redux for state management
- React Router for navigation
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB for database
- JWT for authentication
- OpenAI API integration
- Google Trends API integration

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- MongoDB instance
- OpenAI API key

### Installation

1. Clone this repository
```bash
git clone https://github.com/dxaginfo/content-ideator-ai-2025.git
cd content-ideator-ai-2025
```

2. Install frontend dependencies
```bash
cd frontend
npm install
```

3. Install backend dependencies
```bash
cd ../backend
npm install
```

4. Create a `.env` file in the backend directory with the following:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
```

5. Start the development servers
```bash
# Start backend server
cd backend
npm run dev

# In another terminal, start frontend
cd frontend
npm start
```

## 📂 Project Structure

```
content-ideator-ai-2025/
├── frontend/                # React frontend
│   ├── public/              # Static files
│   ├── src/                 # Source code
│   │   ├── components/      # UI components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── store/           # Redux store
│   │   └── App.tsx          # Main app component
├── backend/                 # Node.js backend
│   ├── controllers/         # Route controllers
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── services/            # Business logic
│   └── server.js            # Entry point
└── README.md                # Project documentation
```

## 🧪 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Content Ideas
- `POST /api/ideas/generate` - Generate new content ideas
- `GET /api/ideas` - Get user's saved ideas
- `POST /api/ideas/save` - Save an idea
- `DELETE /api/ideas/:id` - Delete a saved idea

### Content Calendar
- `GET /api/calendar` - Get user's content calendar
- `POST /api/calendar/add` - Add idea to calendar
- `PUT /api/calendar/:id` - Update calendar item
- `DELETE /api/calendar/:id` - Remove item from calendar

### Trends & Keywords
- `GET /api/trends` - Get trending topics
- `GET /api/keywords` - Get keyword suggestions

## 🔄 Development Workflow

1. **Development**: Implement features on feature branches
2. **Testing**: Write and run tests for components and APIs
3. **Review**: Code review via pull requests
4. **Deployment**: CI/CD pipeline with GitHub Actions

## 📊 Future Enhancements

- Content writing assistance with AI
- Integration with popular CMS platforms
- Advanced analytics and performance tracking
- Team collaboration features
- Mobile application

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request