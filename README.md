 # 🚍 Locate2Go - Bus Management System

![Bus Management]
A robust Node.js-based bus management system designed for handling users, drivers, and bus operations efficiently.

---

## 🌟 Features

✅ User authentication & authorization (JWT-based)  
✅ Driver & Bus management system  
✅ REST API with CRUD operations  
✅ MongoDB database integration  
✅ Secure password hashing using bcrypt  
✅ Middleware-based request validation  
✅ API documentation using Postman  

---

## 🛠️ Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14 or later) - [Download](https://nodejs.org/)  
- **MongoDB** (local or cloud-based) - [MongoDB Atlas](https://www.mongodb.com/)  
- **Git** (for cloning the repository)  

---

## 📦 Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/Prashantmishra08/Locate2Go.git
cd Locate2Go
npm install
```

---

## 🚀 Usage

To start the application, run:

```sh
npm start
```

Other available scripts:

- `start`: node app.js

---

## 📡 API Endpoints

| Method | Endpoint       | Description                 |
|--------|---------------|-----------------------------|
| POST   | `/api/users`  | Create a new user           |
| GET    | `/api/users`  | Get all users               |
| GET    | `/api/users/:id` | Get user by ID         |
| PUT    | `/api/users/:id` | Update user details    |
| DELETE | `/api/users/:id` | Delete a user          |
| POST   | `/api/drivers` | Register a new driver     |
| GET    | `/api/drivers` | Get all drivers           |
| PUT    | `/api/drivers/:id` | Update driver details |
| DELETE | `/api/drivers/:id` | Remove a driver      |

---

## 📂 Folder Structure

```
/campusbus/
│── app.js                 # Main entry point
│── connect.js             # Database connection setup
│── package.json           # Project dependencies and scripts
│── controllers/           # Handles API logic
│   ├── driver.js          # Driver-related functionality
│   ├── user.js            # User-related functionality
│── models/                # Database models
│   ├── driver.js          # Driver schema
│   ├── user.js            # User schema
│── routes/                # API routes
│── node_modules/          # Installed dependencies
```

---

## 🏗️ Contributing

Want to improve this project? Feel free to submit issues or pull requests!

---

## 📜 License

This project is licensed under the **MIT License**.

---

💡 _Developed with ❤️ using Node.js & MongoDB_
