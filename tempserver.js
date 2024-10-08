const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('./models/User'); // Import the User model

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Route for registering a new user
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.status(400).send({ message: 'Username already exists!' });
    }

    // Hash the password using bcryptjs
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).send({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send({ message: 'Failed to register user' });
  }
});

// Route for logging in
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }

    // Compare the hashed password with the input password
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      // Return a success message and the user info (without session or token)
      return res.status(200).send({ message: 'Login successful', userId: user._id });
    } else {
      return res.status(401).send({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send({ message: 'Error logging in' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
