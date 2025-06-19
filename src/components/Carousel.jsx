import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images
import img1 from '../store/1.jpg';
import img2 from '../store/2.jpg';
import img3 from '../store/3.jpg';
import img4 from '../store/4.jpg';

const slides = [
  {
    image: img1,
    caption: 'Example headline.',
    description: '',
    button: 'Sign up today',
    align: 'text-start'
  },
  {
    image: img2,
    caption: 'Another example headline.',
    description: '',
    button: 'Learn more',
    align: 'text-center'
  },
  {
    image: img3,
    caption: 'One more for good measure.',
    description: '',
    button: 'Browse gallery',
    align: 'text-end'
  },
  {
    image: img4,
    caption: 'The final touch.',
    description: '',
    button: 'Explore now',
    align: 'text-end'
  }
];

const Carousel = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      id="taknikCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="10000"
      data-bs-pause="hover"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            data-bs-target="#taknikCarousel"
            data-bs-slide-to={idx}
            className={idx === 0 ? 'active' : ''}
            aria-current={idx === 0 ? 'true' : undefined}
            aria-label={`Slide ${idx + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner" style={{ backgroundColor: 'transparent' }}>
        {slides.map((slide, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
            <img
              src={slide.image}
              className="d-block w-100"
              alt={`Slide ${idx + 1}`}
              style={{
                height: '80vh',
                objectFit: 'cover',
                backgroundColor: 'transparent',
              }}
            />
            <div className="container">
              <div
                className={`carousel-caption ${slide.align}`}
                data-aos="fade-up"
              >
                <h1 data-aos="fade-right">{slide.caption}</h1>
                <p
                  className="opacity-75"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  {slide.description}
                </p>
                <p data-aos="zoom-in" data-aos-delay="400">
                  <a className="btn btn-lg btn-primary" href="#">
                    {slide.button}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#taknikCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#taknikCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;