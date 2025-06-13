// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const Purpose = () => {
//   const styles = {
//     heroContainer: {
//       padding: '3rem 1rem',
//       margin: '3rem 0',
//       textAlign: 'center',
//     },
//     logo: {
//       display: 'block',
//       margin: '0 auto 1rem',
//       width: '72px',
//       height: '57px',
//     },
//     heading: {
//       fontWeight: 'bold',
//       color: '#212529', // Bootstrap text-body-emphasis color
//     },
//     leadText: {
//       fontSize: '1.25rem',
//       marginBottom: '1.5rem',
//       color: '#6c757d', // Bootstrap secondary color
//     },
//     buttonPrimary: {
//       padding: '0.5rem 1.5rem',
//       fontSize: '1.25rem',
//       marginRight: '1rem',
//     },
//     buttonSecondary: {
//       padding: '0.5rem 1.5rem',
//       fontSize: '1.25rem',
//     },
//   };

//   return (
//     <div style={styles.heroContainer}>
//       <img
//         src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
//         alt="Bootstrap Logo"
//         style={styles.logo}
//       />
//       <h1 style={styles.heading}>Centered hero</h1>
//       <div className="col-lg-6 mx-auto">
//         <p style={styles.leadText}>
//           Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
//         </p>
//         <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//           <button type="button" className="btn btn-primary" style={styles.buttonPrimary}>
//             Primary button
//           </button>
//           <button type="button" className="btn btn-outline-secondary" style={styles.buttonSecondary}>
//             Secondary
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Purpose;
// src/components/Purpose.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// If you want to use the Bootstrap SVG logo, download it, place it in src/assets, and import it.
// For example: import bootstrapLogo from '../assets/bootstrap-logo.svg';
// Or keep using the CDN URL if you prefer, but local assets are generally better for Vite projects.

const Purpose = () => {
  const styles = {
    heroContainer: {
      padding: '3rem 1rem',
      margin: '3rem 0', // Keep existing margin
      textAlign: 'center',
      backgroundColor: '#f8f9fa', // Added a light background for better contrast
      borderRadius: '0.5rem', // Added rounded corners
    },
    logo: {
      display: 'block',
      margin: '0 auto 1.5rem auto', // Increased bottom margin
      width: '72px', // Keep original size
      height: '57px',
    },
    heading: {
      fontWeight: 'bold',
      color: '#0d3b66', // Use your brand color
      marginBottom: '1rem', // Added margin
    },
    leadText: {
      fontSize: '1.15rem', // Slightly adjusted size
      marginBottom: '2rem', // Increased margin
      color: '#495057',
      lineHeight: '1.7',
    },
    buttonPrimary: {
      padding: '0.75rem 1.5rem',
      fontSize: '1.1rem', // Adjusted font size
      marginRight: '0.5rem', // Adjusted margin
      backgroundColor: '#0d6efd', // Standard primary blue
      borderColor: '#0d6efd',
    },
    buttonSecondary: {
      padding: '0.75rem 1.5rem',
      fontSize: '1.1rem',
      color: '#0d3b66', // Your brand color for outline
      borderColor: '#0d3b66', // Your brand color for outline
    },
  };

  return (
    <div className="container"> {/* Wrap with a container for better alignment */}
        <div style={styles.heroContainer} className="px-4 py-5 my-5 text-center">
        <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" // Or use imported local SVG: src={bootstrapLogo}
            alt="Bootstrap Logo"
            style={styles.logo}
        />
        <h1 className="display-5 fw-bold" style={styles.heading}>Our Purpose & Approach</h1> {/* Updated heading */}
        <div className="col-lg-7 mx-auto"> {/* Adjusted column width */}
            <p className="lead mb-4" style={styles.leadText}>
            At TaknikShilp, we quickly design and customize responsive, mobile-first sites and applications.
            We leverage robust front-end toolkits, modern development practices, and powerful JavaScript plugins
            to deliver solutions that are not only functional but also intuitive and scalable.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" style={styles.buttonPrimary}>
                Explore Our Work
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4" style={styles.buttonSecondary}>
                Contact Us
            </button>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Purpose;