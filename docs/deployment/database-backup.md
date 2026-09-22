# Database Backup & Restore Guide

Automated backup routines and recovery procedures.

## Running Backups
```bash
cd database
./scripts/backup.sh
```

## Restoring from Backup
```bash
cd database
./scripts/restore.sh backups/travelease_backup_YYYYMMDD_HHMMSS.sql
```
