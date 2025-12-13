import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import './FAQ.scss';

const FAQ = ({ 
  faqs, 
  title = "Frequently Asked Questions", 
  subtitle = "Find answers to common questions about our services",
  themeColor = "#0056b3",
  maxWidth = "800px"
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const memoizedFaqs = useMemo(() => faqs, [faqs]);

  const toggleFAQ = useCallback((index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }, [activeIndex]);

  const handleKeyPress = useCallback((event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFAQ(index);
    }
  }, [toggleFAQ]);

  const renderAnswer = useCallback((answer) => {
    if (typeof answer === 'string') {
      return <p>{answer}</p>;
    }
    return answer;
  }, []);

  return (
    <section 
      className="faq-section" 
      style={{ 
        '--theme-color': themeColor, 
        '--max-width': maxWidth 
      }}
      aria-label="Frequently Asked Questions"
    >
      <div className="faq-container">
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="faq-title">{title}</h2>
          {subtitle && <p className="faq-subtitle">{subtitle}</p>}
        </motion.div>

        <div className="faq-items">
          {memoizedFaqs.map((faq, index) => (
            <motion.div 
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => handleKeyPress(e, index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                aria-label={`${faq.question} ${activeIndex === index ? 'Collapse' : 'Expand'}`}
              >
                <h3 className="faq-question-text">{faq.question}</h3>
                <motion.span 
                  className="faq-icon"
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" loading="lazy">
                    <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: 'auto' 
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0 
                    }}
                    transition={{ 
                      duration: 0.3, 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <div className="faq-answer-content">
                      {renderAnswer(faq.answer)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

FAQ.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
    })
  ).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  themeColor: PropTypes.string,
  maxWidth: PropTypes.string
};

export default React.memo(FAQ);