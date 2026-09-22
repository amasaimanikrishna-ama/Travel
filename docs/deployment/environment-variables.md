# Environment Variables Reference

Configuration values for backend and frontend environments.

## Backend (`backend/.env`)
- `PROJECT_NAME`: Name of the service.
- `DATABASE_URL`: Database connection URI (e.g. `postgresql://user:pass@host:5432/dbname`).
- `SECRET_KEY`: Cryptographic secret for signing JWTs.
- `CORS_ORIGINS`: JSON array of allowed origins.

## Frontend (`frontend/.env`)
- `VITE_API_BASE_URL`: Base URL of the backend API (e.g. `http://localhost:8000/api/v1`).
