import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../assets/logo.png';

const Header = ({ activeTab, onTabChange, currentTheme, toggleTheme }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', age: '', sex: '', email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) {
      alert('Please fill in all fields');
      return;
    }
    setUser({ name: loginForm.email.split('@')[0], email: loginForm.email });
    setIsLoggedIn(true);
    setShowLoginModal(false);
    setLoginForm({ email: '', password: '' });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!signupForm.name || !signupForm.age || !signupForm.sex || !signupForm.email || !signupForm.password) {
      alert('Please fill in all fields for signup');
      return;
    }
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
    <header className="app-header sticky-top">
      <div className="px-3 py-2 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <a href="#" onClick={() => onTabChange('Home')} className="d-flex align-items-center text-decoration-none mb-2 mb-lg-0">
              <img src={logo} alt="TaknikShilp Logo" style={{ height: '40px', marginRight: '10px' }} />
              <span className="fs-4">
                <span className="taknikshilp-logo-taknik">Taknik</span>
                <span className="taknikshilp-logo-shilp">Shilp</span>
              </span>
            </a>

            <ul className="nav nav-tabs col-12 col-lg-auto mb-2 justify-content-center mb-md-0 header-nav-tabs" style={{ borderBottom: 'none' }}>
              {tabs.map(tab => (
                <li key={tab.id} className="nav-item">
                  <button
                    className={`nav-link px-2 ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => onTabChange(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center mt-2 mt-lg-0">
              <form className="me-2 position-relative" role="search" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="search"
                  className="form-control form-control-sm ps-4"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-2"></i>
              </form>

              <Button
                variant="outline-secondary"
                onClick={toggleTheme}
                className="me-2 btn-sm p-1"
                aria-label={currentTheme.includes('dark') ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {currentTheme.includes('dark') ? <i className="bi bi-sun-fill fs-5"></i> : <i className="bi bi-moon-stars-fill fs-5"></i>}
              </Button>

              {isLoggedIn ? (
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
                    variant="outline-primary"
                    className="me-2"
                    onClick={() => setShowLoginModal(true)}
                  >
                    Login
                  </Button>
                  <Button
                    variant="primary"
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