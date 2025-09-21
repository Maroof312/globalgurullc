import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types'; // Added prop validation
import './Portfolio.scss';

const Portfolio = ({ title, items = [] }) => { // Added default empty array
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="portfolio-pro">
      <div className="pp-container">
        {/* Header with Elegant Underline */}
        <motion.div 
          className="pp-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="pp-title">
            <span>{title}</span>
            <motion.div 
              className="pp-title-underline"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </h2>
        </motion.div>

        <div className="pp-content">
          {/* Desktop: Side-by-side layout */}
          <div className="pp-desktop-view">
            <div className="pp-services-list">
              {items.map((item, index) => (
                <motion.div
                  key={`desktop-${index}`}
                  className={`pp-service-item ${activeIndex === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${item.title}`}
                  onKeyPress={(e) => e.key === 'Enter' && setActiveIndex(index)}
                >
                  <div className="pp-service-content">
                    <div className="pp-service-icon">
                      <motion.div
                        className="pp-service-dot"
                        animate={{
                          backgroundColor: activeIndex === index ? '#0056b3' : '#e0e6ed',
                          scale: activeIndex === index ? 1.2 : 1
                        }}
                        transition={{ duration: 0.2 }} // Faster transition
                      />
                    </div>
                    <h3>{item.title}</h3>
                    <motion.div
                      className="pp-service-arrow"
                      animate={{ 
                        opacity: activeIndex === index ? 1 : 0.3,
                        x: activeIndex === index ? [0, 5, 0] : 0
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0056b3" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pp-service-details">
              <AnimatePresence mode="wait">
                {activeIndex !== null && items[activeIndex] && (
                  <motion.div
                    key={`desktop-details-${activeIndex}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="pp-details-card"
                  >
                    <div className="pp-details-content">
                      <h3>{items[activeIndex].title}</h3>
                      <p>{items[activeIndex].description}</p>
                      {items[activeIndex].features && (
                        <ul className="pp-features-list">
                          {items[activeIndex].features.map((feature, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i }}
                            >
                              <div className="pp-feature-marker" aria-hidden="true"></div>
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile: Accordion */}
          <div className="pp-mobile-view">
            {items.map((item, index) => (
              <motion.div
                key={`mobile-${index}`}
                className="pp-mobile-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button 
                  className="pp-mobile-header"
                  onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                  aria-expanded={index === activeIndex}
                  aria-controls={`mobile-content-${index}`}
                >
                  <div className="pp-mobile-icon">
                    <div className={`pp-mobile-dot ${index === activeIndex ? 'active' : ''}`} aria-hidden="true"></div>
                  </div>
                  <h3>{item.title}</h3>
                  <motion.div
                    className="pp-mobile-arrow"
                    animate={{ rotate: index === activeIndex ? 180 : 0 }}
                    aria-hidden="true"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="#0056b3" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {index === activeIndex && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pp-mobile-content"
                      id={`mobile-content-${index}`}
                      role="region"
                    >
                      <div className="pp-mobile-details">
                        <p>{item.description}</p>
                        {item.features && (
                          <ul className="pp-mobile-features">
                            {item.features.map((feature, i) => (
                              <li key={i}>
                                <div className="pp-mobile-marker" aria-hidden="true"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Added prop validation
Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

export default Portfolio;