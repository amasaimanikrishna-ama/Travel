-- Seed Administrator Account
-- Password hash corresponds to: Admin@12345 (bcrypt)
INSERT INTO users (email, hashed_password, full_name, phone_number, role, is_active, is_verified)
VALUES (
    'admin@travelease.com',
    '$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW',
    'System Administrator',
    '+10000000000',
    'admin',
    TRUE,
    TRUE
)
ON CONFLICT (email) DO NOTHING;
