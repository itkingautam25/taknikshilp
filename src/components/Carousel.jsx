import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import images from store folder
import img1 from '../store/1.jpg';
import img2 from '../store/2.jpg';
import img3 from '../store/3.jpg';

const Carousel = () => {
  return (
    <div id="taknikCarousel" className="carousel slide" data-bs-ride="carousel" style={{ backgroundColor: 'transparent' }}>
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#taknikCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#taknikCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#taknikCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner" style={{ backgroundColor: 'transparent' }}>
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" style={{ 
            height: '524px', 
            objectFit: 'contain', 
            backgroundColor: 'transparent',
            margin: '0 auto' // Center the image
          }} alt="Slide 1" />
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p className="opacity-75">
                Some representative placeholder content for the first slide of the carousel.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Sign up today
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" style={{ 
            height: '524px', 
            objectFit: 'contain', 
            backgroundColor: 'transparent',
            margin: '0 auto' // Center the image
          }} alt="Slide 2" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>
                Some representative placeholder content for the second slide of the carousel.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" style={{ 
            height: '524px', 
            objectFit: 'contain', 
            backgroundColor: 'transparent',
            margin: '0 auto' // Center the image
          }} alt="Slide 3" />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>
                Some representative placeholder content for the third slide of this carousel.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Browse gallery
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
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