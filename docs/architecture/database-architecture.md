# Database Architecture

The data layer uses **PostgreSQL** with structured relational schemas designed for transactional consistency.

## Highlights
- Strict Foreign Key constraints ensuring referential integrity across users, vehicles, and bookings.
- Indexed columns on high-frequency lookup fields: `users.email`, `bookings.booking_reference`, `cars.category_id`.
- Comprehensive audit trails with created/updated timestamps.
