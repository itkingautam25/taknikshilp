// src/components/Promise.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import promiseImage from '../store/promise.jpg'; // <-- IMPORT THE IMAGE

const PromiseComponent = () => { // Renamed component to PromiseComponent
  const styles = {
    section: {
      padding: '3rem 0',
    },
    logoImg: {
      width: '100%',
      maxWidth: '400px', // Adjusted for better responsiveness
      height: 'auto',   // Maintain aspect ratio
      display: 'block',
      margin: '0 auto 2rem auto', // Added bottom margin for spacing on small screens
      borderRadius: '8px', // Optional: add some rounded corners
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Optional: subtle shadow
    },
    heading: {
      fontWeight: 'bold',
      color: '#0d3b66', // Using your brand color
      marginBottom: '1rem',
      textAlign: 'center', // Center heading on small screens
    },
    leadText: {
      fontSize: '1.1rem',
      color: '#495057', // Slightly darker for better readability
      lineHeight: '1.7',
      textAlign: 'center', // Center text on small screens
    },
    button: {
      padding: '0.75rem 1.75rem', // Larger button
      fontSize: '1.1rem',
      marginTop: '1.5rem',
      backgroundColor: '#f39200', // Using your brand color
      borderColor: '#f39200',
      display: 'block', // Make button block for centering
      width: 'fit-content', // Adjust width to content
      margin: '1.5rem auto 0 auto', // Center the button
    },
  };

  return (
    <section className="container" style={styles.section}>
      <div className="row align-items-center flex-column-reverse flex-md-row"> {/* Reverses order on small screens */}
        {/* Right Side - Our Promise Text (appears first on small screens due to flex-column-reverse) */}
        <div className="col-md-6">
          <div className="p-3 p-md-5"> {/* Added padding */}
            <h1 style={styles.heading}>Our Promise</h1>
            <p style={styles.leadText}>
              “Crafting Reliable Tech Solutions with Precision and Innovation” <br /><br />
              At Taknik Shilp, we deliver user-friendly digital products that bridge the gap between technology and people, ensuring quality, trust, and future-ready solutions.
            </p>
            <button type="button" className="btn btn-primary" style={styles.button}>
              Know More
            </button>
          </div>
        </div>
        {/* Left Side - Image (appears second on small screens) */}
        <div className="col-md-6 text-center">
          <img
            src={promiseImage} // <-- USE THE IMPORTED IMAGE
            alt="Taknik Shilp Promise"
            // height and width removed to rely on maxWidth and auto height for responsiveness
            style={styles.logoImg}
          />
        </div>
      </div>
    </section>
  );
};

export default PromiseComponent; // Export as PromiseComponent