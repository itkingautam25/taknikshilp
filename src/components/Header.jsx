// src/components/Header.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Keep this for Bootstrap base
import logo from '../assets/logo.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Note: activeTab and onTabChange come from App.jsx props
const Header = ({ activeTab, onTabChange, currentTheme, toggleTheme }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', age: '', sex: '', email: '', password: '' });

  // ... (keep your existing login, signup, logout, input handlers)
  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Login submitted:', loginForm);
    setUser({ name: loginForm.email.split('@')[0], email: loginForm.email });
    setIsLoggedIn(true);
    setShowLoginModal(false);
    setLoginForm({ email: '', password: '' });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!signupForm.name || !signupForm.age || !signupForm.sex || !signupForm.email || !signupForm.password) {
      alert('Please fill in all fields for signup (Name, Age, Sex, Email, Password).');
      return;
    }
    console.log('Signup submitted:', signupForm);
    setShowSignupModal(false);
    setSignupForm({ name: '', age: '', sex: '', email: '', password: '' });
    alert('Signup successful! You can now log in.');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    onTabChange('Home');
  };

  const handleLoginInput = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSignupInput = (e) => {
    const { name, value } = e.target;
    setSignupForm(prev => ({ ...prev, [name]: value }));
  };


  const tabs = [
    { id: 'Home', label: 'Home' },
    { id: 'Contracts', label: 'Contracts' },
    { id: 'Services', label: 'Services' },
    { id: 'About', label: 'About Us' }
  ];

  return (
    // Added 'app-header' class for specific header styling from index.css
    <header className="app-header sticky-top"> {/* Added sticky-top for better UX */}
      <div className="px-3 py-2 border-bottom"> {/* This border-bottom will now use CSS vars */}
        <div className="container">
          {/* Main flex container for header items */}
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            {/* Logo - takes its own space */}
            <a href="#" onClick={() => onTabChange('Home')} className="d-flex align-items-center text-decoration-none mb-2 mb-lg-0">
              <img src={logo} alt="TaknikShilp Logo" style={{ height: '40px', marginRight: '10px' }} />
              <span className="fs-4">
                {/* Apply classes for themable logo text */}
                <span className="taknikshilp-logo-taknik">Taknik</span>
                <span className="taknikshilp-logo-shilp">Shilp</span>
              </span>
            </a>

            {/* Navigation Tabs - will grow and center */}
            {/* Added 'header-nav-tabs' class for centering and styling from index.css */}
            <ul className="nav nav-tabs col-12 col-lg-auto mb-2 justify-content-center mb-md-0 header-nav-tabs" style={{ borderBottom: 'none' }}>
              {tabs.map(tab => (
                <li key={tab.id} className="nav-item">
                  <button
                    className={`nav-link px-2 ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => onTabChange(tab.id)}
                    // Removed inline styles, rely on index.css for tab styling (bold, colors)
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Search, Auth, and Theme Toggle - takes its own space */}
            <div className="d-flex align-items-center mt-2 mt-lg-0">
              <form className="me-2" role="search" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="search"
                  className="form-control form-control-sm"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>

              {/* Theme Toggle Button */}
              <Button
                variant="outline-secondary"
                onClick={toggleTheme}
                className="me-2 btn-sm p-1" /* Adjusted padding */
                aria-label={currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {currentTheme === 'light' ? <i className="bi bi-moon-stars-fill fs-5"></i> : <i className="bi bi-sun-fill fs-5"></i>}
              </Button>

              {isLoggedIn ? (
                // ... (keep existing logged-in dropdown)
                <div className="dropdown text-end">
                  <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-person-circle fs-5 me-1"></i>
                    {user?.name}
                  </a>
                  <ul className="dropdown-menu text-small">
                    <li>
                        <button className="dropdown-item" onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <Button
                    variant="outline-primary" // Uses Bootstrap's primary color, themed by CSS vars
                    className="me-2"
                    onClick={() => setShowLoginModal(true)}
                  >
                    Login
                  </Button>
                  <Button
                    variant="primary" // Uses Bootstrap's primary color
                    onClick={() => setShowSignupModal(true)}
                  >
                    Sign-up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Login and Signup Modals ... (keep existing modal structure) */}
      {/* Modals will automatically pick up dark/light theme styles via .modal-content in index.css */}
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login to TaknikShilp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={loginForm.email} onChange={handleLoginInput} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={loginForm.password} onChange={handleLoginInput} required />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">Login</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <p className="text-muted small mb-0">
            Don't have an account?{' '}
            <button className="btn btn-link p-0" onClick={() => { setShowLoginModal(false); setShowSignupModal(true); }}>Sign up</button>
          </p>
        </Modal.Footer>
      </Modal>

      <Modal show={showSignupModal} onHide={() => setShowSignupModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up for TaknikShilp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" name="name" value={signupForm.name} onChange={handleSignupInput} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter your age" name="age" value={signupForm.age} onChange={handleSignupInput} required min="1" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sex</Form.Label>
              <div>
                {['Male', 'Female', 'Other'].map((gender) => (
                  <Form.Check
                    inline
                    key={`signup-sex-${gender}`}
                    label={gender}
                    name="sex"
                    type="radio"
                    id={`signup-sex-${gender}`}
                    value={gender}
                    checked={signupForm.sex === gender}
                    onChange={handleSignupInput}
                    required
                  />
                ))}
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={signupForm.email} onChange={handleSignupInput} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Create a password" name="password" value={signupForm.password} onChange={handleSignupInput} required />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">Sign Up</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Header;