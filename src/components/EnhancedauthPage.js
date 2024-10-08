import React, { useState } from 'react';
import styles from './EnhancedAuthPage.module.css';
import { useNavigate, Link } from 'react-router-dom';

export default function EnhancedAuthPage() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to store error messages
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: loginEmail, password: loginPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        navigate('/dashboard'); // Redirect to dashboard after successful login
      } else {
        console.error('Login failed:', data.message);
        setErrorMessage(data.message); // Display the error message
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Welcome</h2>
          <p className={styles.cardDescription}>Login to continue</p>
        </div>
        <div className={styles.cardContent}>
          <form onSubmit={handleLogin} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="loginEmail" className={styles.label}>Email</label>
              <input
                id="loginEmail"
                type="email"
                className={styles.input}
                placeholder="m@example.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="loginPassword" className={styles.label}>Password</label>
              <input
                id="loginPassword"
                type="password"
                className={styles.input}
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.button}>Login</button>
          </form>

          {/* Show error message if login fails */}
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          
          <p className={styles.signupLink}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
