import { useState, useEffect } from 'react';
import testImage from '../assets/test_image.png';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Create multiple instances of the same image for the carousel effect
  const slides = [
    { id: 1, image: testImage, title: "Create Your Game" },
    { id: 2, image: testImage, title: "Join Local Matches" },
    { id: 3, image: testImage, title: "Connect with Players" },
    { id: 4, image: testImage, title: "Find Your Team" },
    { id: 5, image: testImage, title: "Play Any Sport" }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="carousel-slide">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="carousel-image"
              />
              <div className="slide-content">
                <h3 className="slide-title">{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button 
          className="carousel-nav carousel-nav-prev"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button 
          className="carousel-nav carousel-nav-next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          &#8250;
        </button>
      </div>
      
      {/* Dots indicator */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
