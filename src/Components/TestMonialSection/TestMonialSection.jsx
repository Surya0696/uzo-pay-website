import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./TestMonialSectionStyle.css";

// ✅ Fixed: Changed to lowercase 't'
const testimonialsData = [
  {
    id: 1,
    name: "Michael Grants",
    position: "CEO",
    image: "/Assets/client1.jpg",
    rating: 5,
    review:
      "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CTO",
    image: "/Assets/client2.jpg",
    rating: 5,
    review:
      "Outstanding payment gateway solution. Their customer support is exceptional and the platform is incredibly reliable.",
  },
  {
    id: 3,
    name: "David Chen",
    position: "Founder",
    image: "/Assets/client3.jpg",
    rating: 5,
    review:
      "The best financial technology partner we've worked with. Highly secure and user-friendly payment processing.",
  },
  {
    id: 4,
    name: "Emma Wilson",
    position: "CFO",
    image: "/Assets/client4.jpg",
    rating: 5,
    review:
      "Incredible service quality and seamless integration. They've transformed our entire payment infrastructure.",
  },
  {
    id: 5,
    name: "Alex Rodriguez",
    position: "Head of Operations",
    image: "/Assets/client5.jpg",
    rating: 5,
    review:
      "Professional, reliable, and innovative. Their payment solutions have significantly improved our business efficiency.",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
          ★
        </span>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, isCenter, index, currentIndex }) => {
  return (
    <div className={`testimonial-card ${isCenter ? "center-focus" : ""}`}>
      <p className="testimonial-text">{testimonial.review}</p>

      <div className="client-info">
        <div className="client-avatar">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                testimonial.name
              )}&background=4e5bff&color=fff&size=50`;
            }}
          />
        </div>
        <div className="client-details">
          <h5 className="client-name">{testimonial.name}</h5>
          <p className="client-position">{testimonial.position}</p>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>
    </div>
  );
};

const TestMonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start from index 1 to show center focus
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  // Always show 3 testimonials with center focus
  const visibleTestimonials = 3;

  // Get visible testimonials with proper wrapping
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleTestimonials; i++) {
      const index =
        (currentIndex - 1 + i + testimonialsData.length) %
        testimonialsData.length;
      visible.push({
        ...testimonialsData[index],
        originalIndex: index,
        displayIndex: i,
        isCenter: i === 1, // Middle card is center
      });
    }
    return visible;
  };

  // Memoized navigation functions
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  }, []);

  // Auto-slide functionality with proper cleanup
  useEffect(() => {
    if (!isAutoSliding) return;

    const autoSlide = setInterval(() => {
      nextSlide();
    }, 4000);

    // Cleanup function to prevent memory leaks
    return () => {
      clearInterval(autoSlide);
    };
  }, [nextSlide, isAutoSliding]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => setIsAutoSliding(false);
  const handleMouseLeave = () => setIsAutoSliding(true);

  // Handle dot click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const visibleTestimonialsData = getVisibleTestimonials();

  return (
    <section
      className="testimonial-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <div className="section-badge">
              <span>Client Feedbacks</span>
            </div>
            <h2 className="section-title">
              Trusted by
              <br />
              <span className="highlight-text">Businesses Like Yours</span>
            </h2>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className="testimonial-carousel center-mode">
              <div className="testimonial-track">
                {visibleTestimonialsData.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${currentIndex}`}
                    className={`testimonial-slide ${
                      testimonial.isCenter ? "center-slide" : "side-slide"
                    }`}
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      isCenter={testimonial.isCenter}
                      index={index}
                      currentIndex={currentIndex}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="carousel-navigation">
              <button
                className="nav-btn prev-btn"
                onClick={prevSlide}
                aria-label="Previous testimonials"
              >
                <span>‹</span>
              </button>

          

              <button
                className="nav-btn next-btn"
                onClick={nextSlide}
                aria-label="Next testimonials"
              >
                <span>›</span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestMonialSection;
