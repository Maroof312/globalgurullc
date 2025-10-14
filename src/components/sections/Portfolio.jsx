import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import './Portfolio.scss';

const Portfolio = React.memo(({ title = "Our Portfolio Services", items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Memoize the click handler to prevent unnecessary re-renders
  const handleItemClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  // Memoize the service items to prevent unnecessary re-renders
  const serviceItems = useMemo(() => 
    items.map((item, index) => (
      <motion.div
        key={`desktop-${index}`}
        className={`pp-service-item ${activeIndex === index ? 'active' : ''}`}
        onMouseEnter={() => handleItemClick(index)}
        onClick={() => handleItemClick(index)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${item.title}`}
        onKeyPress={(e) => e.key === 'Enter' && handleItemClick(index)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="pp-service-content">
          <div className="pp-service-icon">
            <motion.div
              className="pp-service-dot"
              animate={{
                backgroundColor: activeIndex === index ? '#0056b3' : '#e0e6ed',
                scale: activeIndex === index ? 1.2 : 1
              }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div className="pp-service-text">
            <h3>{item.title}</h3>
            <motion.div
              className="pp-service-preview"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: activeIndex === index ? 1 : 0,
                height: activeIndex === index ? 'auto' : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <p>{item.description.substring(0, 80)}...</p>
            </motion.div>
          </div>
          <motion.div
            className="pp-service-arrow"
            animate={{ 
              opacity: activeIndex === index ? 1 : 0.3,
              x: activeIndex === index ? [0, 5, 0] : 0
            }}
            transition={{ 
              duration: 1.5,
              repeat: activeIndex === index ? Infinity : 0,
              ease: "easeInOut"
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    )), [items, activeIndex, handleItemClick]
  );

  // Memoize mobile items
  const mobileItems = useMemo(() => 
    items.map((item, index) => (
      <motion.div
        key={`mobile-${index}`}
        className="pp-mobile-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ scale: 1.01 }}
      >
        <button 
          className="pp-mobile-header"
          onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          aria-expanded={index === activeIndex}
          aria-controls={`mobile-content-${index}`}
        >
          <div className="pp-mobile-icon">
            <motion.div
              className="pp-mobile-dot"
              animate={{ 
                backgroundColor: index === activeIndex ? '#0056b3' : '#e0e6ed',
                scale: index === activeIndex ? 1.2 : 1
              }}
              aria-hidden="true"
            />
          </div>
          <div className="pp-mobile-text">
            <h3>{item.title}</h3>
            <span className="pp-mobile-badge">{index + 1}</span>
          </div>
          <motion.div
            className="pp-mobile-arrow"
            animate={{ rotate: index === activeIndex ? 180 : 0 }}
            aria-hidden="true"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </button>
        
        <AnimatePresence>
          {index === activeIndex && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="pp-mobile-content"
              id={`mobile-content-${index}`}
              role="region"
            >
              <div className="pp-mobile-details">
                <div className="pp-mobile-description">
                  <p>{item.description}</p>
                </div>
                {item.features && (
                  <div className="pp-mobile-features-section">
                    <h4>Key Features:</h4>
                    <ul className="pp-mobile-features">
                      {item.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <div className="pp-mobile-marker" aria-hidden="true">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )), [items, activeIndex]
  );

  return (
    <div className="portfolio-pro">
      <div className="pp-container">
        {/* Enhanced Header */}
        <motion.div 
          className="pp-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="pp-header-content">
            <motion.h2 
              className="pp-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="pp-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Explore our comprehensive service offerings
            </motion.p>
            <motion.div 
              className="pp-title-underline"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>

        <div className="pp-content">
          {/* Enhanced Desktop View */}
          <div className="pp-desktop-view">
            <div className="pp-services-column">
              <div className="pp-services-header">
                <h3>Our Services</h3>
                <div className="pp-services-count">
                  <span>{activeIndex + 1}</span>
                  <span>/</span>
                  <span>{items.length}</span>
                </div>
              </div>
              <div className="pp-services-list">
                {serviceItems}
              </div>
            </div>

            <div className="pp-service-details">
              <AnimatePresence mode="wait">
                {activeIndex !== null && items[activeIndex] && (
                  <motion.div
                    key={`desktop-details-${activeIndex}`}
                    initial={{ opacity: 0, x: 30, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="pp-details-card"
                  >
                    <div className="pp-details-header">
                      <div className="pp-details-badge">Service {activeIndex + 1}</div>
                      <h3>{items[activeIndex].title}</h3>
                    </div>
                    <div className="pp-details-content">
                      <div className="pp-description-section">
                        <p>{items[activeIndex].description}</p>
                      </div>
                      {items[activeIndex].features && (
                        <div className="pp-features-section">
                          <h4>What We Deliver:</h4>
                          <ul className="pp-features-list">
                            {items[activeIndex].features.map((feature, i) => (
                              <motion.li 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i, duration: 0.3 }}
                                whileHover={{ x: 5 }}
                              >
                                <div className="pp-feature-marker" aria-hidden="true">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                  </svg>
                                </div>
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <motion.div 
                      className="pp-details-footer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="pp-progress-indicator">
                        {items.map((_, index) => (
                          <button
                            key={index}
                            className={`pp-progress-dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => handleItemClick(index)}
                            aria-label={`Go to service ${index + 1}`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Enhanced Mobile View */}
          <div className="pp-mobile-view">
            <div className="pp-mobile-header-section">
              <h3>Our Services</h3>
              <div className="pp-mobile-count">
                {items.length} Services Available
              </div>
            </div>
            <div className="pp-mobile-list">
              {mobileItems}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Portfolio.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

Portfolio.displayName = 'Portfolio';

export default Portfolio;