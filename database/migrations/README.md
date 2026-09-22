# Database Migrations

This folder tracks database schema migrations managed by **Alembic** alongside manual migration scripts.

## Running Migrations with Alembic (FastAPI Backend)

To generate and apply migrations automatically using the backend application:

```bash
# Navigate to backend directory
cd ../backend

# Generate a new migration revision
alembic revision --autogenerate -m "Add new table or column"

# Apply all pending migrations to the latest revision
alembic upgrade head

# Rollback one migration step
alembic downgrade -1
```

## Manual SQL Migrations

When writing raw SQL migration files:
1. Name files sequentially: `001_initial_schema.sql`, `002_add_coupons.sql`, etc.
2. Ensure migrations are idempotent (`IF NOT EXISTS`, `IF EXISTS`).
