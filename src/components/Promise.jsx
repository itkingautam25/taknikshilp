// src/components/Promise.jsx
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import promiseImage from '../store/promise.jpg'; // <-- IMPORT THE IMAGE

const PromiseComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const styles = {
    section: {
      padding: '3rem 0',
    },
    logoImg: {
      width: '100%',
      maxWidth: '800px',
      height: 'auto',
      display: 'block',
      margin: '0 auto 2rem auto',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    heading: {
      fontWeight: 'bold',
      color: '#0d3b66',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    leadText: {
      fontSize: '1.1rem',
      color: '#495057',
      lineHeight: '1.7',
      textAlign: 'center',
    },
    button: {
      padding: '0.75rem 1.75rem',
      fontSize: '1.1rem',
      marginTop: '1.5rem',
      backgroundColor: '#f39200',
      borderColor: '#f39200',
      display: 'block',
      width: 'fit-content',
      margin: '1.5rem auto 0 auto',
    },
  };

  return (
    <section className="container" style={styles.section}>
      <div className="row align-items-center flex-column-reverse flex-md-row">
        {/* Right Side - Text Content */}
        <div className="col-md-6" data-aos="fade-up">
          <div className="p-3 p-md-5">
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

        {/* Left Side - Image */}
        <div className="col-md-6 text-center" data-aos="fade-right">
          <img
            src={promiseImage}
            alt="Taknik Shilp Promise"
            style={styles.logoImg}
          />
        </div>
      </div>
    </section>
  );
};

export default PromiseComponent;