-- Create database
CREATE DATABASE IF NOT EXISTS jwhite_reviews;

-- Use the database
USE jwhite_reviews;

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  reviewerName VARCHAR(255) NOT NULL,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample data (optional)
INSERT INTO reviews (reviewerName, rating, description) VALUES
('John Smith', 5, 'Excellent service! Josh was professional and fixed our boiler quickly.'),
('Sarah Johnson', 5, 'Very reliable plumber. Highly recommend for any plumbing work.'),
('Mike Brown', 4, 'Good work on our bathroom installation. Clean and efficient.');