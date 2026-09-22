-- Seed Demo Users
-- Password hash corresponds to: Password@123 (bcrypt)
INSERT INTO users (email, hashed_password, full_name, phone_number, role, is_active, is_verified)
VALUES
(
    'john.doe@example.com',
    '$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW',
    'John Doe',
    '+1234567890',
    'customer',
    TRUE,
    TRUE
),
(
    'jane.smith@example.com',
    '$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW',
    'Jane Smith',
    '+1987654321',
    'customer',
    TRUE,
    TRUE
)
ON CONFLICT (email) DO NOTHING;
