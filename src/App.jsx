import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import PromiseComponent from './components/Promise';
import Purpose from './components/Purpose';
import Contracts from './components/Contracts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'system-dark';
    }
    return 'system-light';
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
      offset: 100
    });
  }, []);

  useEffect(() => {
    document.body.className = '';
    if (theme === 'system') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.add('light-mode');
      }
    } else if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e) => {
      if (theme === 'system') {
        document.body.className = '';
        document.body.classList.add(e.matches ? 'dark-mode' : 'light-mode');
      }
    };
    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      switch (prevTheme) {
        case 'light': return 'dark';
        case 'dark': return 'system';
        case 'system': return 'light';
        case 'system-dark': return 'light';
        case 'system-light': return 'dark';
        default: return 'light';
      }
    });
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    window.scrollTo(0, 0);
  };

  const renderActiveComponent = () => {
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
          <div className="container py-5 text-center" data-aos="fade-up">
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
          <div className="container py-5" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h1 className="display-5 fw-bold">About TaknikShilp</h1>
                <p className="lead mb-4">
                  TaknikShilp is committed to excellence in technology and craftsmanship. Our mission is to
                  empower businesses and individuals through innovative and reliable digital solutions.
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
        currentTheme={theme}
        toggleTheme={toggleTheme}
      />
      <main role="main">
        {renderActiveComponent()}
      </main>
      <Footer />
    </>
  );
}

export default App;