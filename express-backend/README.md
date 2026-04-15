# Todo Express Backend

A RESTful Todo API built with **Express.js** + **PostgreSQL (Supabase)**, ready to deploy on **Render**.

---

## 🚀 Quick Start (Local)

```bash
npm install
# Copy env and fill in values
cp .env.example .env
npm run dev
```

---

## 📦 Project Structure

```
express-backend/
├── src/
│   ├── index.js              # Entry point
│   ├── app.js                # Express app + middleware
│   ├── config/
│   │   └── database.js       # PostgreSQL pool (Supabase)
│   ├── routes/
│   │   ├── todos.js
│   │   └── health.js
│   └── controllers/
│       └── todosController.js
├── migrations/
│   └── 001_create_todos.sql  # Run once in Supabase SQL editor
├── .env.example
├── .gitignore
└── package.json
```

---

## 🗄️ Database Setup

1. Go to your [Supabase project](https://supabase.com) → **SQL Editor**
2. Run the contents of `migrations/001_create_todos.sql`

---

## 📡 API Endpoints

| Method | Endpoint          | Description        |
|--------|-------------------|--------------------|
| GET    | `/`               | API status         |
| GET    | `/api/health`     | DB health check    |
| GET    | `/api/todos`      | Get all todos      |
| POST   | `/api/todos`      | Create a todo      |
| GET    | `/api/todos/:id`  | Get todo by ID     |
| PUT    | `/api/todos/:id`  | Update a todo      |
| DELETE | `/api/todos/:id`  | Delete a todo      |

### POST/PUT Body (JSON)
```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "completed": false
}
```

---

## ☁️ Deploy on Render

1. Push this project to a GitHub repository
2. Go to [render.com](https://render.com) → **New → Web Service**
3. Connect your GitHub repo
4. Configure:
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add **Environment Variable**:
   - Key: `DATABASE_URL`
   - Value: `postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT.supabase.co:5432/postgres`
6. Click **Deploy** ✅

> ⚠️ Never commit your `.env` file. Always set secrets via Render's environment variables dashboard.
