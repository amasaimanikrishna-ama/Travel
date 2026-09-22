-- Seed Car Categories and Vehicles
INSERT INTO car_categories (name, slug, description)
VALUES
('SUV', 'suv', 'Spacious, high ground clearance vehicles ideal for families and road trips'),
('Sedan', 'sedan', 'Comfortable, fuel-efficient cruisers for business and relaxed travel'),
('Luxury', 'luxury', 'High-end performance and premium luxury vehicles'),
('Hatchback', 'hatchback', 'Compact, easy to park urban exploration cars')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO cars (name, brand, model_year, transmission, fuel_type, seating_capacity, daily_price, is_available, primary_image)
VALUES
('Hyundai Creta SX', 'Hyundai', 2024, 'Automatic', 'Petrol', 5, 49.00, TRUE, 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341'),
('Toyota Fortuner 4x4', 'Toyota', 2024, 'Automatic', 'Diesel', 7, 95.00, TRUE, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf'),
('BMW 3 Series M-Sport', 'BMW', 2024, 'Automatic', 'Petrol', 5, 129.00, TRUE, 'https://images.unsplash.com/photo-1555215695-3004980ad54e'),
('Honda City ZX', 'Honda', 2023, 'Automatic', 'Petrol', 5, 42.00, TRUE, 'https://images.unsplash.com/photo-1590362891991-f776e747a588'),
('Mercedes-Benz C-Class', 'Mercedes-Benz', 2024, 'Automatic', 'Petrol', 5, 149.00, TRUE, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8');
