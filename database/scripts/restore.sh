#!/usr/bin/env bash
# ==========================================================
# Database Restore Script for TravelEase PostgreSQL
# ==========================================================

set -e

BACKUP_FILE="$1"

if [ -z "${BACKUP_FILE}" ]; then
  echo "[ERROR] Please specify the SQL backup file to restore."
  echo "Usage: ./restore.sh <path_to_backup_file.sql>"
  exit 1
fi

if [ ! -f "${BACKUP_FILE}" ]; then
  echo "[ERROR] Backup file not found: ${BACKUP_FILE}"
  exit 1
fi

DB_HOST="${DB_HOST:-localhost}"
DB_PORT="${DB_PORT:-5432}"
DB_NAME="${DB_NAME:-travelease}"
DB_USER="${DB_USER:-postgres}"

echo "[INFO] Restoring database '${DB_NAME}' from '${BACKUP_FILE}'..."
psql -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" -d "${DB_NAME}" -f "${BACKUP_FILE}"

echo "[SUCCESS] Restore finished successfully!"
