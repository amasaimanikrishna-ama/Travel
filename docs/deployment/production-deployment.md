# Production Deployment Guide

Instructions for deploying TravelEase to cloud environments.

## Docker Deployment
```bash
cd backend
docker build -t travelease-api:latest .
docker run -p 8000:8000 --env-file .env travelease-api:latest
```

## Frontend Build
```bash
cd frontend
npm run build
# Deploy dist/ folder to Vercel, Netlify, or AWS S3 + CloudFront.
```
