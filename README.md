# 📈 BrokerBase:Zerodha Clone 

A full-stack personal trading platform inspired by Zerodha, built with React, Node.js, Express, and more.

This monorepo contains:


---

## 🚀 Features

- 🧾 User Authentication (JWT + Cookie-based)
- 📊 Protected Dashboard for Logged-in Users
- 📁 Modular React + Express Architecture
- ✅ CORS, Secure Routing, Cookie Handling
- 📦 Monorepo for unified management
- 🔐 Login verification API: `/verify`

---

## 📂 Folder Structure

| Folder      | Description                               |
|-------------|-------------------------------------------|
| `frontend/` | Public landing page with signup/login UI |
| `backend/`  | Express server with authentication APIs  |
| `dashboard/`| Private React app for authenticated users|

---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/zerodha-monorepo.git
cd zerodha-monorepo
# Install frontend
cd frontend
npm install

# Install backend
cd ../backend
npm install

# Install dashboard
cd ../dashboard
npm install
PORT=3002
JWT_SECRET=your_jwt_secret_key
# In /frontend
npm start     # Runs on http://localhost:3000

# In /dashboard
npm start     # Runs on http://localhost:3001

# In /backend
npm run dev or nodemon index.js   # Runs on http://localhost:3002
```
## ✅ Available API Endpoints

| Method | Endpoint     | Description                      |
|--------|--------------|----------------------------------|
| POST   | `/signup`    | User Registration                |
| POST   | `/login`     | User Login                       |
| POST   | `/verify`    | Check if user is authenticated   |
| GET    | `/logout`    | Log the user out (clear cookie)  |

---

## 🙋 Author

Built with ❤️ by **Ujjwal Maurya**

