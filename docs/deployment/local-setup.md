# Local Development Setup

Follow these steps to run both frontend and backend locally.

## Prerequisites
- Node.js 18+ and npm
- Python 3.10+
- PostgreSQL or SQLite

## 1. Backend Setup
```bash
cd backend
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```

## 2. Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
