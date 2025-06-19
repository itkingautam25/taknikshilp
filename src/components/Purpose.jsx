import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import purposeImage from '../store/purpose.jpg';
import logo from '../assets/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Purpose = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // only animate once
    });
  }, []);

  const styles = {
    container: {
      width: '100%',
      height: '700px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2rem',
      backgroundColor: 'transparent',
    },
    leftBox: {
      flex: 1,
      height: '100%',
      borderRadius: '8px',
      backgroundImage: `url(${purposeImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginRight: '2rem',
    },
    rightBox: {
      flex: 1,
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'justify',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    },
    logo: {
      width: '315px',
      marginBottom: '2rem',
    },
    content: {
      maxWidth: '500px',
      backgroundColor: 'transparent',
    },
    heading: {
      fontSize: '2.3rem',
      fontWeight: 'bold',
      color: '#0d3b66',
      marginBottom: '1rem',
    },
    text: {
      fontSize: '1.1rem',
      color: '#1a1a1a',
      marginBottom: '2rem',
      lineHeight: '1.6',
    },
    contactButton: {
      padding: '0.6rem 1.2rem',
      fontSize: '1rem',
      width: '150px',
      backgroundColor: '#0d6efd',
      border: 'none',
      color: '#fff',
      borderRadius: '4px',
      alignSelf: 'center',
    }
  };

  return (
    <section style={styles.container}>
      {/* Left image block with scroll animation */}
      <div style={styles.leftBox} data-aos="fade-right"></div>

      {/* Right content block with scroll animation */}
      <div style={styles.rightBox} data-aos="fade-up">
        <img src={logo} alt="TaknikShilp Logo" style={styles.logo} />
        <div style={styles.content}>
          <h1 style={styles.heading}>Our Purpose & Approach</h1>
          <p style={styles.text}>
            At TaknikShilp, we quickly design and customize responsive, mobile-first sites and applications.
            We leverage robust front-end toolkits, modern development practices, and powerful JavaScript plugins
            to deliver solutions that are not only functional but also intuitive and scalable.
          </p>
        </div>
        <button style={styles.contactButton}>Contact Us</button>
      </div>
    </section>
  );
};

export default Purpose;