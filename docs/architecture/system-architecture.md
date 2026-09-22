# System Architecture

TravelEase is designed as a scalable multi-tier distributed web application consisting of a React Single Page Application (SPA), a high-performance FastAPI backend service, and a PostgreSQL database.

## High-Level Architecture

```mermaid
graph TD
    Client[Web Browser / Client] -->|HTTPS / REST| CDN[Vercel / Cloudflare CDN]
    CDN --> Frontend[React + Vite SPA]
    Client -->|API Requests| Gateway[FastAPI Backend / Nginx Reverse Proxy]
    Gateway --> Auth[Auth & Security Service]
    Gateway --> BookingEngine[Booking & Reservation Service]
    Gateway --> PaymentGateway[Payment Integrations - Stripe]
    Gateway --> DB[(PostgreSQL Database)]
    Gateway --> Cache[(Redis Cache & Session Store)]
```
