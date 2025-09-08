const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'jwhite_reviews'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Routes

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'Jwhiteplumbingandheating@hotmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
    
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending message.' });
  }
});

// Get all reviews
app.get('/api/reviews', (req, res) => {
  const query = 'SELECT * FROM reviews ORDER BY id DESC';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching reviews:', err);
      res.status(500).json({ error: 'Error fetching reviews' });
      return;
    }
    res.json(results);
  });
});

// Submit a new review
app.post('/api/reviews', (req, res) => {
  const { reviewerName, rating, description } = req.body;
  
  const query = 'INSERT INTO reviews (reviewerName, rating, description) VALUES (?, ?, ?)';
  
  db.query(query, [reviewerName, rating, description], (err, result) => {
    if (err) {
      console.error('Error submitting review:', err);
      res.status(500).json({ error: 'Error submitting review' });
      return;
    }
    res.json({ success: true, message: 'Review submitted successfully!', id: result.insertId });
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});