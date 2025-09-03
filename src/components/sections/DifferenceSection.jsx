import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './DifferenceSection.scss';

// Import all difference icons
import techSupport from '../../assets/images/technical-support.webp';
import saveMoney from '../../assets/images/save-money.webp';
import priceUp from '../../assets/images/price-up.webp';
import profits from '../../assets/images/profits.webp';
import diagram from '../../assets/images/diagram.webp';
import tablet from '../../assets/images/tablet.webp';
import switchIcon from '../../assets/images/switch.webp';

const DifferenceSection = () => {
  const differenceItems = [
    { icon: techSupport, text: 'Reduce Employee Turnover Rate' },
    { icon: saveMoney, text: '50% Average Payroll Savings' },
    { icon: priceUp, text: 'Greater ROI' },
    { icon: profits, text: 'Higher Accuracy' },
    { icon: diagram, text: 'Increased Capacity' },
    { icon: tablet, text: '100% Shared Vision' },
    { icon: switchIcon, text: 'Real Time Shift Patterns' }
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = windowWidth >= 1200;
  const isSmallMobile = windowWidth <= 500;

  return (
    <section className="difference-section py-5 bg-light">
      <Container>
        <h2 className="section-title text-center display-6 fw-bold mb-5">
          To Make A Difference
        </h2>

        {/* Desktop version */}
        {isDesktop && (
          <div className="difference-desktop-container">
            <div className="difference-scroll-track">
              {[...differenceItems, ...differenceItems].map((item, index) => (
                <motion.div
                  key={index}
                  className="difference-item bg-white rounded shadow-sm text-center"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % differenceItems.length) * 0.1, duration: 0.5 }}
                >
                  <div className="difference-icon mb-3">
                    <img src={item.icon} alt={item.text} loading="lazy" className="img-fluid" />
                  </div>
                  <p className="mb-0 fw-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Small Mobile Infinite Scroll for 300px–500px */}
        {isSmallMobile && (
          <div className="difference-mobile-scroll">
            <div className="difference-scroll-track">
              {[...differenceItems, ...differenceItems].map((item, index) => (
                <div key={index} className="difference-item bg-white rounded shadow-sm text-center">
                  <div className="difference-icon mb-2">
                    <img src={item.icon} alt={item.text} loading="lazy" className="img-fluid" />
                  </div>
                  <p className="mb-0 fw-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Standard Swiper for 501px–1199px */}
        {!isDesktop && !isSmallMobile && (
          <div className="difference-mobile-container">
            <div className="difference-scroll-track">
              {[...differenceItems, ...differenceItems].map((item, index) => (
                <div key={index} className="difference-item bg-white rounded shadow-sm text-center">
                  <div className="difference-icon mb-3">
                    <img src={item.icon} alt={item.text} loading="lazy" className="img-fluid" />
                  </div>
                  <p className="mb-0 fw-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default DifferenceSection;
