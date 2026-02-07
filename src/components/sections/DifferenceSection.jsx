import React, { useState, useEffect, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
// Import images with responsive srcset
import techSupport from '../../assets/images/technical-support.webp?w=60;80&format=webp&as=srcset';
import techSupportFallback from '../../assets/images/technical-support.webp?w=80';
import saveMoney from '../../assets/images/save-money.webp?w=60;80&format=webp&as=srcset';
import saveMoneyFallback from '../../assets/images/save-money.webp?w=80';
import priceUp from '../../assets/images/price-up.webp?w=60;80&format=webp&as=srcset';
import priceUpFallback from '../../assets/images/price-up.webp?w=80';
import profits from '../../assets/images/profits.webp?w=60;80&format=webp&as=srcset';
import profitsFallback from '../../assets/images/profits.webp?w=80';
import diagram from '../../assets/images/diagram.webp?w=60;80&format=webp&as=srcset';
import diagramFallback from '../../assets/images/diagram.webp?w=80';
import tablet from '../../assets/images/tablet.webp?w=60;80&format=webp&as=srcset';
import tabletFallback from '../../assets/images/tablet.webp?w=80';
import switchIcon from '../../assets/images/switch.webp?w=60;80&format=webp&as=srcset';
import switchIconFallback from '../../assets/images/switch.webp?w=80';
import './DifferenceSection.scss';

const DifferenceSection = React.memo(() => {
  const differenceItems = useMemo(() => [
    { icon: techSupport, fallback: techSupportFallback, text: 'Reduce Employee Turnover Rate' },
    { icon: saveMoney, fallback: saveMoneyFallback, text: '50% Average Payroll Savings' },
    { icon: priceUp, fallback: priceUpFallback, text: 'Greater ROI' },
    { icon: profits, fallback: profitsFallback, text: 'Higher Accuracy' },
    { icon: diagram, fallback: diagramFallback, text: 'Increased Capacity' },
    { icon: tablet, fallback: tabletFallback, text: '100% Shared Vision' },
    { icon: switchIcon, fallback: switchIconFallback, text: 'Real Time Shift Patterns' }
  ], []);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Throttled resize handler
    let timeoutId;
    const handleResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 100);
    };
    
    // Initial set
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const isDesktop = windowWidth >= 1200;
  const isSmallMobile = windowWidth <= 500;

  if (windowWidth === 0) return null;

  return (
    <section className="difference-section py-5 bg-light">
      <Container>
        <h2 className="section-title text-center display-6 fw-bold mb-5">
          Why Businesses Choose Our Solutions
        </h2>

        {/* Desktop version - KEPT ORIGINAL SCROLLING */}
        {isDesktop && (
          <div className="difference-desktop-container">
            <div className="difference-scroll-track">
              {/* KEPT THE DUPLICATE ARRAY FOR SEAMLESS SCROLLING */}
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
                    <img
                      srcSet={item.icon}
                      src={item.fallback}
                      alt={item.text}
                      loading="lazy"
                      className="img-fluid"
                      sizes="80px"
                    />
                  </div>
                  <p className="mb-0 fw-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Small Mobile Infinite Scroll for 300px–500px - KEPT ORIGINAL */}
        {isSmallMobile && (
          <div className="difference-mobile-scroll">
            <div className="difference-scroll-track">
              {/* KEPT THE DUPLICATE ARRAY FOR SEAMLESS SCROLLING */}
              {[...differenceItems, ...differenceItems].map((item, index) => (
                <div key={index} className="difference-item bg-white rounded shadow-sm text-center">
                  <div className="difference-icon mb-2">
                    <img
                      srcSet={item.icon}
                      src={item.fallback}
                      alt={item.text}
                      loading="lazy"
                      className="img-fluid"
                      sizes="60px"
                    />
                  </div>
                  <p className="mb-0 fw-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Standard Swiper for 501px–1199px - KEPT ORIGINAL */}
        {!isDesktop && !isSmallMobile && (
          <div className="difference-mobile-container">
            <div className="difference-scroll-track">
              {/* KEPT THE DUPLICATE ARRAY FOR SEAMLESS SCROLLING */}
              {[...differenceItems, ...differenceItems].map((item, index) => (
                <div key={index} className="difference-item bg-white rounded shadow-sm text-center">
                  <div className="difference-icon mb-3">
                    <img
                      srcSet={item.icon}
                      src={item.fallback}
                      alt={item.text}
                      loading="lazy"
                      className="img-fluid"
                      sizes="70px"
                    />
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
});

export default DifferenceSection;