import React from 'react';

const Footer = () => {
  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <a 
            href="/" 
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            aria-label="TaknikShilp"
          >
            <span className="fs-4">
              <span style={{ color: '#0d3b66' }}>Taknik</span>
              <span style={{ color: '#f39200' }}>Shilp</span>
            </span>
          </a>
          <p className="text-body-secondary">© 2025 TaknikShilp, Inc</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5>Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Services</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contracts</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Consulting</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Support</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Training</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Legal</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Terms of Service</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Cookie Policy</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">GDPR</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Compliance</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
