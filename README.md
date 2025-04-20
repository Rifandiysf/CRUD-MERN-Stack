# MERN Stack CRUD Application

A full-stack CRUD (Create, Read, Update, Delete) application built using MySQL, Express.js, React.js, and Node.js (MERN stack with MySQL instead of MongoDB).

## Overview

This project demonstrates a complete implementation of a CRUD system with a React frontend and Node.js backend. The application allows users to manage data through a user-friendly interface with smooth interactions and a modern design using Tailwind CSS.

## Features

- **Create**: Add new users/items to the database
- **Read**: View all existing users/items with search and filter capabilities
- **Update**: Edit user/item information
- **Delete**: Remove users/items from the database
- **Responsive UI**: Built with Tailwind CSS for a clean, modern interface
- **RESTful API**: Well-structured backend with proper API endpoints

## Tech Stack

### Frontend
- React.js (v19.0.0)
- Tailwind CSS (v3.4.17)
- Axios (v1.8.4) for API requests
- React Router DOM (v7.5.1) for routing
- Framer Motion (v12.7.4) for animations
- Iconsax-reactjs (v0.0.8) for UI icons
- Vite (v6.3.1) as build tool

### Backend
- Node.js
- Express.js (v5.1.0)
- MySQL2 (v3.14.0)
- Sequelize ORM (v6.37.7)
- CORS (v2.8.5)
- RESTful API architecture

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MySQL Server
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Backend Setup**
   ```
   cd backend
   npm install
   ```
   
   Configure your database connection in `backend/config/database.js`:
   ```javascript
   import {Sequelize} from "sequelize"
   
   const db = new Sequelize('crud_db', 'root', 'your_password', {
       host: 'localhost',
       dialect: 'mysql'
   })
   
   export default db
   ```
   
   Make sure to create the MySQL database:
   ```sql
   CREATE DATABASE crud_db;
   ```
   
   Start the backend server:
   ```
   node index.js
   ```
   
   Note: Consider adding a dev script to your backend package.json:
   ```json
   "scripts": {
     "start": "node index.js",
     "dev": "nodemon index.js"
   }
   ```

3. **Frontend Setup**
   ```
   cd frontend
   npm install
   ```
   
   Start the React development server:
   ```
   npm run dev
   ```

## Project Structure

```
/
├── backend/
│   ├── config/
│   │   └── database.js    # Direct database configuration
│   ├── controller/        # Request handlers
│   ├── model/             # Database models
│   ├── routes/            # API routes
│   ├── index.js           # Entry point for the backend
│   └── package.json
│
├── frontend/
│   ├── public/            # Static files
│   ├── src/
│   │   ├── assets/        # Images, fonts, etc.
│   │   ├── components/    # Reusable React components
│   │   ├── css/           # Additional CSS files
│   │   ├── App.jsx        # Main React component
│   │   ├── App.css        # Main styles
│   │   ├── main.jsx       # React entry point
│   │   ├── UserList.jsx   # User listing component
│   │   ├── AddUser.jsx    # User creation component
│   │   └── EditUser.jsx   # User editing component
│   ├── index.html
│   ├── package.json
│   └── tailwind.config.js
│
├── .gitignore
└── README.md
```

## Package Dependencies

### Frontend (package.json)
```json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.8.4",
    "framer-motion": "^12.7.4",
    "iconsax-reactjs": "^0.0.8",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.5.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.22.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.22.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "tailwindcss": "^3.4.17",
    "vite": "^6.3.1"
  }
}
```

### Backend (package.json)
```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^5.1.0",
    "mysql2": "^3.14.0",
    "sequelize": "^6.37.7"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Rifandi Yusuf",
  "license": "ISC"
}
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/users | Retrieve all users |
| GET    | /api/users/:id | Retrieve a specific user |
| POST   | /api/users | Create a new user |
| PUT    | /api/users/:id | Update a user |
| DELETE | /api/users/:id | Delete a user |

## Database Configuration

This project uses direct database configuration in the `config/database.js` file using Sequelize. Make sure to update the database credentials according to your MySQL setup:

```javascript
const db = new Sequelize('crud_db', 'root', 'your_password', {
    host: 'localhost',
    dialect: 'mysql'
})
```

## Future Enhancements

- User authentication and authorization
- Pagination for large datasets
- Advanced filtering and sorting options
- Image upload functionality
- Dark/light mode toggle

## License

[MIT](LICENSE)

## Author

Rifandi Yusuf

## Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Iconsax](https://iconsax-react.pages.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/)