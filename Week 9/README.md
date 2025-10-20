# 🎯 Goal Tracking App - MERN Stack

A full-stack web application for tracking and managing personal goals, built with MongoDB, Express.js, React, and Node.js.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-brightgreen)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?logo=express)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)

## ✨ Features

- ✅ Create, Read, Update, and Delete (CRUD) goals
- 📊 Track goal status (Not Started, In Progress, Completed)
- 🎨 Beautiful and responsive UI with gradient design
- 🔍 Filter goals by status
- 📅 Set target dates for goals
- 💾 Persistent data storage with MongoDB
- ⚡ Real-time updates
- 🎯 Clean and intuitive user experience

## 🛠️ Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend
- **React** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling with modern gradients and animations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/HassanBinWaqar/goal-tracking-app.git
cd goal-tracking-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGODB_URI=mongodb://localhost:27017/goaltracker
PORT=5000
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal:
```bash
cd frontend
npm install
```

Start the React development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
goal-tracking-app/
├── backend/
│   ├── models/
│   │   └── Goal.js              # Mongoose schema for goals
│   ├── routes/
│   │   └── goals.js             # API routes for CRUD operations
│   ├── .env                     # Environment variables
│   ├── .gitignore              # Git ignore file
│   ├── server.js               # Express server setup
│   └── package.json            # Backend dependencies
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── GoalList.jsx    # Display list of goals
│   │   │   ├── GoalList.css
│   │   │   ├── GoalForm.jsx    # Form to create goals
│   │   │   ├── GoalForm.css
│   │   │   ├── GoalItem.jsx    # Individual goal card
│   │   │   ├── GoalItem.css
│   │   │   ├── EditGoal.jsx    # Edit goal form
│   │   │   └── EditGoal.css
│   │   ├── services/
│   │   │   └── goalService.js  # API service functions
│   │   ├── App.js              # Main app component
│   │   ├── App.css             # Global styles
│   │   └── index.js            # React entry point
│   └── package.json            # Frontend dependencies
└── README.md                   # Project documentation
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/goals` | Get all goals |
| GET | `/api/goals/:id` | Get single goal by ID |
| POST | `/api/goals` | Create a new goal |
| PUT | `/api/goals/:id` | Update an existing goal |
| DELETE | `/api/goals/:id` | Delete a goal |

### Example Request Body (POST/PUT):
```json
{
  "title": "Learn MERN Stack",
  "description": "Complete the goal tracking app tutorial",
  "targetDate": "2025-11-01",
  "status": "in-progress"
}
```

## 🎨 Screenshots

### Home Page with Goals
![Home Page](https://via.placeholder.com/800x400/667eea/ffffff?text=Goal+Tracking+App)

### Create New Goal
![Create Goal](https://via.placeholder.com/800x400/764ba2/ffffff?text=Create+New+Goal)

### Filter Goals
![Filter Goals](https://via.placeholder.com/800x400/667eea/ffffff?text=Filter+Goals+by+Status)

## 🧪 Testing the Application

1. **Create a Goal:**
   - Fill out the form with title, description, target date, and status
   - Click "Add Goal"

2. **View Goals:**
   - All goals appear in cards below the form
   - Color-coded by status (Green=Completed, Yellow=In Progress, Gray=Not Started)

3. **Filter Goals:**
   - Use filter buttons to show specific status goals

4. **Edit a Goal:**
   - Click "Edit" button on any goal card
   - Modify the details and click "Update Goal"

5. **Delete a Goal:**
   - Click "Delete" button on any goal card
   - Confirm the deletion

## 🌐 Deployment

### Backend Deployment (Render/Heroku)

1. Create a new web service on Render or Heroku
2. Connect your GitHub repository
3. Set environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: production
4. Deploy!

### Frontend Deployment (Vercel/Netlify)

1. Build the React app:
```bash
cd frontend
npm run build
```

2. Deploy the `build` folder to Vercel or Netlify
3. Update API URLs to point to your deployed backend

## 🔐 Environment Variables

### Backend (.env)
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📚 Learning Resources

- [MongoDB MERN Stack Tutorial](https://www.mongodb.com/developer/languages/javascript/mern-stack-tutorial/)
- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)

## 🐛 Known Issues

- None at the moment! Please report any bugs you find.

## 🎯 Future Enhancements

- [ ] User authentication with JWT
- [ ] Goal categories and tags
- [ ] Progress percentage tracker
- [ ] Email notifications for approaching deadlines
- [ ] Dark mode theme
- [ ] Export goals to PDF/CSV
- [ ] Goal sharing functionality
- [ ] Mobile app version

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Hassan Bin Waqar**
- GitHub: [@HassanBinWaqar](https://github.com/HassanBinWaqar)

## 🙏 Acknowledgments

- MongoDB for the excellent MERN stack tutorial
- Week-9 Fellowship Program for the learning opportunity
- All contributors and supporters

---

⭐ If you found this project helpful, please give it a star!

Built with ❤️ using MERN Stack | Week-9 (Day 1-4) Fellowship Program 2025
```