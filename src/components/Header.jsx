import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Header = () => {
  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  
  // Modal visibility states
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  
  // Form states
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '' });
  
  // Navigation state
  const [activeTab, setActiveTab] = useState('Home');

  // Tab navigation handler
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    console.log(`Switched to ${tabName} tab`);
  };

  // Authentication handlers
  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) {
      alert('Please fill in all fields');
      return;
    }

    console.log('Login submitted:', loginForm);
    setUser({ name: 'John Doe', email: loginForm.email });
    setIsLoggedIn(true);
    setShowLoginModal(false);
    setLoginForm({ email: '', password: '' });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!signupForm.name || !signupForm.Age ||!signupForm.Sex ||!signupForm.email || !signupForm.password) {
      alert('Please fill in all fields');
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
  };

  // Form input handlers
  const handleLoginInput = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSignupInput = (e) => {
    const { name, value } = e.target;
    setSignupForm(prev => ({ ...prev, [name]: value }));
  };

  // Tab configuration
  const tabs = [
    { id: 'Home', label: 'Home' },
    { id: 'Contracts', label: 'Contracts' },
    { id: 'Services', label: 'Services' },
    { id: 'About', label: 'About Us' }
  ];

  return (
    <header>
      <div className="px-3 py-2 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            {/* Logo */}
            <a href="/" className="d-flex align-items-center text-decoration-none">
              <img src={logo} alt="TaknikShilp Logo" style={{ height: '40px', marginRight: '10px' }} />
              <span className="fs-4">
                <span style={{ color: '#0d3b66' }}>Taknik</span>
                <span style={{ color: '#f39200' }}>Shilp</span>
              </span>
            </a>

            {/* Navigation Tabs */}
            <ul className="nav nav-tabs" style={{ borderBottom: 'none' }}>
              {tabs.map(tab => (
                <li key={tab.id} className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => handleTabChange(tab.id)}
                    style={{
                      border: 'none',
                      backgroundColor: 'transparent',
                      color: activeTab === tab.id ? '#0d6efd' : '#495057',
                      fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Search and Auth Buttons */}
            <div className="d-flex align-items-center">
              <form className="me-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
              
              {isLoggedIn ? (
                <div className="d-flex align-items-center gap-3">
                  <span className="text-muted">Welcome, {user?.name}</span>
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary me-2"
                    onClick={() => setShowLoginModal(true)}
                  >
                    Login
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => setShowSignupModal(true)}
                  >
                    Sign-up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login to TaknikShilp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={loginForm.email}
                onChange={handleLoginInput}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={loginForm.password}
                onChange={handleLoginInput}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <p className="text-muted small mb-0">
            Don't have an account?{' '}
            <button 
              className="btn btn-link p-0" 
              onClick={() => {
                setShowLoginModal(false);
                setShowSignupModal(true);
              }}
            >
              Sign up
            </button>
          </p>
        </Modal.Footer>
      </Modal>

      {/* Sign Up Modal */}
      <Modal show={showSignupModal} onHide={() => setShowSignupModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up for TaknikShilp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={signupForm.name}
                onChange={handleSignupInput}
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={signupForm.email}
                onChange={handleSignupInput}
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={signupForm.password}
                onChange={handleSignupInput}
                required
              />
            </Form.Group>
            
            <Button variant="primary" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Header;