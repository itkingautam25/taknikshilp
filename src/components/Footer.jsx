import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">

        {/* Branding and Social Links */}
        <div className="col mb-3" data-aos="fade-right">
          <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="TaknikShilp">
            <span className="fs-4">
              <span style={{ color: '#0d3b66' }}>Taknik</span>
              <span style={{ color: '#f39200' }}>Shilp</span>
            </span>
          </a>
          <div className="d-flex gap-3 mb-3">
            <a href="#" className="text-body-secondary"><i className="bi bi-facebook fs-5"></i></a>
            <a href="#" className="text-body-secondary"><i className="bi bi-twitter-x fs-5"></i></a>
            <a href="#" className="text-body-secondary"><i className="bi bi-linkedin fs-5"></i></a>
            <a href="#" className="text-body-secondary"><i className="bi bi-instagram fs-5"></i></a>
            <a href="#" className="text-body-secondary"><i className="bi bi-whatsapp fs-5"></i></a>
            <a href="#" className="text-body-secondary"><i className="bi bi-youtube fs-5"></i></a>
          </div>
          <p className="text-body-secondary">© 2025 TaknikShilp, Inc</p>
        </div>

        <div className="col mb-3"></div>

        {/* Company Links */}
        <div className="col mb-3" data-aos="fade-up">
          <h5>Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="col mb-3" data-aos="fade-up" data-aos-delay="200">
          <h5>Services</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contracts</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Consulting</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Support</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Training</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="col mb-3" data-aos="fade-up" data-aos-delay="400">
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