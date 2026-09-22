#!/usr/bin/env bash
# ==========================================================
# Database Reset & Re-Seed Script for TravelEase
# ==========================================================

set -e

DB_HOST="${DB_HOST:-localhost}"
DB_PORT="${DB_PORT:-5432}"
DB_NAME="${DB_NAME:-travelease}"
DB_USER="${DB_USER:-postgres}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BASE_DIR="$(dirname "${SCRIPT_DIR}")"

echo "[WARNING] This will DROP and RECREATE the database '${DB_NAME}'."
read -p "Are you sure you want to continue? (y/N): " confirm

if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
  echo "[CANCELLED] Operation aborted."
  exit 0
fi

echo "[INFO] Dropping existing database..."
dropdb -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" --if-exists "${DB_NAME}"

echo "[INFO] Creating fresh database..."
createdb -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" "${DB_NAME}"

echo "[INFO] Applying schemas..."
psql -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" -d "${DB_NAME}" -f "${BASE_DIR}/schemas/database-schema.sql"

echo "[INFO] Seeding data..."
psql -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" -d "${DB_NAME}" -f "${BASE_DIR}/seeds/seed_admin.sql"
psql -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" -d "${DB_NAME}" -f "${BASE_DIR}/seeds/seed_users.sql"
psql -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" -d "${DB_NAME}" -f "${BASE_DIR}/seeds/seed_destinations.sql"
psql -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" -d "${DB_NAME}" -f "${BASE_DIR}/seeds/seed_cars.sql"
psql -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" -d "${DB_NAME}" -f "${BASE_DIR}/seeds/seed_packages.sql"

echo "[SUCCESS] Database reset and seeded successfully!"
