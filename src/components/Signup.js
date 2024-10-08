import React, { useState } from 'react';
import styles from './EnhancedAuthPage.module.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [error, setError] = useState(''); // To display signup errors
  
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: signupEmail, password: signupPassword })
      });

      const data = await response.json();

      if (response.ok) {
        // If signup is successful, redirect to the login page
        navigate('/');
      } else {
        // If there's an error, display the error message
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      console.error('Error signing up:', err);
      setError('Error signing up. Please try again later.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Welcome</h2>
          <p className={styles.cardDescription}>Create an account to get started</p>
        </div>
        <div className={styles.cardContent}>
          {error && <p className={styles.error}>{error}</p>} {/* Display error message */}

          <form onSubmit={handleSignup} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="signupName" className={styles.label}>Full Name</label>
              <input
                id="signupName"
                type="text"
                className={styles.input}
                placeholder="John Doe"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="signupEmail" className={styles.label}>Email</label>
              <input
                id="signupEmail"
                type="email"
                className={styles.input}
                placeholder="m@example.com"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="signupPassword" className={styles.label}>Password</label>
              <input
                id="signupPassword"
                type="password"
                className={styles.input}
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.button}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
