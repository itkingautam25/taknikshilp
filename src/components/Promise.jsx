import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Promise = () => {
  const styles = {
    section: {
      padding: '3rem 0',
    },
    logoImg: {
      width: '100%',
      maxWidth: '400px',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    },
    heading: {
      fontWeight: 'bold',
      color: '#212529',
      marginBottom: '1rem',
    },
    leadText: {
      fontSize: '1.1rem',
      color: '#6c757d',
      lineHeight: '1.6',
    },
    button: {
      padding: '0.5rem 1.5rem',
      fontSize: '1.1rem',
      marginTop: '1.5rem',
    },
  };

  return (
    <section className="container" style={styles.section}>
      <div className="row align-items-center">
        
        {/* Left Side - Image */}
        <div className="col-md-6 text-center">
          <img
            src="/src/store/promise.jpg"
            alt="Taknik Shilp"
            height={700}
            width={400}
            style={styles.logoImg}
          />
        </div>

        {/* Right Side - Our Promise Text */}
        <div className="col-md-6">
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
    </section>
  );
};

export default Promise;