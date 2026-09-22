-- ==========================================================
-- PostgreSQL Docker Initialization Script
-- ==========================================================

-- Enable essential extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE travelease TO postgres;

-- Initial Database Notice
DO $$
BEGIN
    RAISE NOTICE 'TravelEase PostgreSQL database initialized successfully with UUID & Crypto extensions.';
END
$$;
