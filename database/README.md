# Database Architecture & Management

This directory contains the database schemas, seed datasets, migration guidelines, and management scripts for the TravelEase platform.

## Directory Overview

- **`schemas/`**: Complete SQL schema definitions (`database-schema.sql`) and Mermaid ER diagrams (`er-diagram.md`).
- **`seeds/`**: Seed scripts with realistic sample data for development and testing.
- **`migrations/`**: Alembic / SQL migration logs and documentation.
- **`scripts/`**: Shell utilities for database backup, restore, and reset.

## Quick Setup

### 1. Apply Schema
```bash
psql -U postgres -d travelease -f schemas/database-schema.sql
```

### 2. Run Seed Scripts
```bash
psql -U postgres -d travelease -f seeds/seed_admin.sql
psql -U postgres -d travelease -f seeds/seed_users.sql
psql -U postgres -d travelease -f seeds/seed_destinations.sql
psql -U postgres -d travelease -f seeds/seed_cars.sql
psql -U postgres -d travelease -f seeds/seed_packages.sql
```

### 3. Backup and Maintenance
```bash
# Backup database
./scripts/backup.sh

# Restore database
./scripts/restore.sh backup_file.sql

# Reset database
./scripts/reset-db.sh
```
