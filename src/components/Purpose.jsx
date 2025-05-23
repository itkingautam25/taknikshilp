import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Purpose = () => {
  const styles = {
    heroContainer: {
      padding: '3rem 1rem',
      margin: '3rem 0',
      textAlign: 'center',
    },
    logo: {
      display: 'block',
      margin: '0 auto 1rem',
      width: '72px',
      height: '57px',
    },
    heading: {
      fontWeight: 'bold',
      color: '#212529', // Bootstrap text-body-emphasis color
    },
    leadText: {
      fontSize: '1.25rem',
      marginBottom: '1.5rem',
      color: '#6c757d', // Bootstrap secondary color
    },
    buttonPrimary: {
      padding: '0.5rem 1.5rem',
      fontSize: '1.25rem',
      marginRight: '1rem',
    },
    buttonSecondary: {
      padding: '0.5rem 1.5rem',
      fontSize: '1.25rem',
    },
  };

  return (
    <div style={styles.heroContainer}>
      <img
        src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
        alt="Bootstrap Logo"
        style={styles.logo}
      />
      <h1 style={styles.heading}>Centered hero</h1>
      <div className="col-lg-6 mx-auto">
        <p style={styles.leadText}>
          Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary" style={styles.buttonPrimary}>
            Primary button
          </button>
          <button type="button" className="btn btn-outline-secondary" style={styles.buttonSecondary}>
            Secondary
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purpose;