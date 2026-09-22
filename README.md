# TravelPro

Premium Travel Agency & Self-Drive Car Rental Platform.

## Features

- Travel Packages
- Destinations
- Self-Drive Car Rental
- Online Booking
- Payment Integration
- Customer Dashboard
- Admin Dashboard

## Tech Stack

Frontend:
- React
- Vite
- Tailwind CSS

Backend:
- FastAPI
- PostgreSQL
- SQLAlchemy

## Local Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```
