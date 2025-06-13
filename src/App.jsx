// src/App.jsx
import React, { useState, useEffect } from 'react'; // Add useEffect
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import PromiseComponent from './components/Promise';
import Purpose from './components/Purpose';
import Contracts from './components/Contracts';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'; // Ensure your global CSS is imported

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    // Apply the theme class to the body
    document.body.className = ''; // Clear previous theme classes
    document.body.classList.add(theme + '-mode');
    localStorage.setItem('theme', theme); // Save theme to localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    window.scrollTo(0, 0);
  };

  const renderActiveComponent = () => {
    // ... (keep your existing renderActiveComponent logic)
    switch (activeTab) {
      case 'Home':
        return (
          <>
            <Carousel />
            <PromiseComponent />
            <Purpose />
          </>
        );
      case 'Contracts':
        return <Contracts />;
      case 'Services':
        return (
          <div className="container py-5 text-center">
            <h1 className="display-5 fw-bold">Our Services</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                Discover the range of services we offer at TaknikShilp, from custom software development
                to IT consulting. We are dedicated to providing innovative solutions tailored to your needs.
              </p>
            </div>
          </div>
        );
      case 'About':
        return (
          <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h1 className="display-5 fw-bold">About TaknikShilp</h1>
                    <p className="lead mb-4">
                    TaknikShilp is committed to excellence in technology and craftsmanship. Our mission is to
                    empower businesses and individuals through innovative and reliable digital solutions. Learn
                    more about our journey, our values, and the team that makes it all happen.
                    </p>
                </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            <Carousel />
            <PromiseComponent />
            <Purpose />
          </>
        );
    }
  };

  return (
    <>
      <Header
        activeTab={activeTab}
        onTabChange={handleTabChange}
        currentTheme={theme} // Pass current theme
        toggleTheme={toggleTheme} // Pass toggle function
      />
      <main role="main">
        {renderActiveComponent()}
      </main>
      <Footer />
    </>
  );
}

export default App;