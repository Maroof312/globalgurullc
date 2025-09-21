import React, { useMemo, lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './FinancialServices.scss';

// Lazy load only the icons you actually need
const FaReceipt = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaReceipt })));
const FaShoppingCart = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaShoppingCart })));
const FaFileInvoiceDollar = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaFileInvoiceDollar })));
const FaChartLine = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaChartLine })));
const FaCalculator = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaCalculator })));
const FaClock = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaClock })));
const FaFileAlt = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaFileAlt })));
const FaCheckCircle = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaCheckCircle })));
const FaHandHoldingUsd = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaHandHoldingUsd })));
const FaBalanceScale = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaBalanceScale })));

// Simple loading component for icons
const IconLoader = ({ children }) => (
  <Suspense fallback={<div className="service-icon-loading" aria-hidden="true">•</div>}>
    {children}
  </Suspense>
);

const FinancialServices = ({ services }) => {
  // Default services with lazy-loaded icons
  const defaultServices = useMemo(() => [
    { icon: <IconLoader><FaReceipt aria-hidden="true" /></IconLoader>, title: "Record to Report (RTR)", description: "End-to-end accounting and financial reporting solutions." },
    { icon: <IconLoader><FaShoppingCart aria-hidden="true" /></IconLoader>, title: "Procure to Pay (PTP)", description: "Complete procurement and payment processing." },
    { icon: <IconLoader><FaFileInvoiceDollar aria-hidden="true" /></IconLoader>, title: "Order to Cash (OTC)", description: "Integrated order processing and collections." },
    { icon: <IconLoader><FaChartLine aria-hidden="true" /></IconLoader>, title: "Financial Planning & Analysis", description: "Strategic budgeting and performance analysis." },
    { icon: <IconLoader><FaCalculator aria-hidden="true" /></IconLoader>, title: "Waterfall Calculation", description: "Complex distribution calculations for investments and partnerships." },
    { icon: <IconLoader><FaClock aria-hidden="true" /></IconLoader>, title: "Attorney Time Entry", description: "Tracking of legal professionals' billable hours." },
    { icon: <IconLoader><FaFileAlt aria-hidden="true" /></IconLoader>, title: "Expense Reports", description: "Comprehensive expense management solutions." },
    { icon: <IconLoader><FaFileInvoiceDollar aria-hidden="true" /></IconLoader>, title: "Prebilling and Invoicing", description: "Professional invoice generation services." },
    { icon: <IconLoader><FaCheckCircle aria-hidden="true" /></IconLoader>, title: "Billing Coordination", description: "End-to-end billing process management." },
    { icon: <IconLoader><FaHandHoldingUsd aria-hidden="true" /></IconLoader>, title: "Collections", description: "Professional accounts receivable services." },
    { icon: <IconLoader><FaBalanceScale aria-hidden="true" /></IconLoader>, title: "OCG Billing Process", description: "Specialized OCG billing solutions." }
  ], []);

  const serviceList = services || defaultServices;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Safely get slices
  const coreServices = serviceList.slice(0, 5);
  const specializedServices = serviceList.slice(5);

  return (
    <section className="additional-services" aria-labelledby="financial-services-heading">
      <Container>
        <motion.h2 
          id="financial-services-heading"
          className="text-center mb-5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Related Financial Services
        </motion.h2>
        
        {/* Core Services Slider */}
        <motion.div 
          className="services-slider-wrapper mb-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-center mb-4">Core Services</h3>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
            }}
            a11y={{
              prevSlideMessage: 'Previous core services',
              nextSlideMessage: 'Next core services',
              containerMessage: 'Carousel of core financial services. Use previous and next buttons to navigate',
            }}
          >
            {coreServices.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="service-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  tabIndex={0}
                  aria-label={`Service: ${service.title}. ${service.description}`}
                  role="article"
                >
                  <div className="service-icon" aria-hidden="true">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Specialized Services Slider */}
        <motion.div 
          className="services-slider-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-center mb-4">Specialized Services</h3>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: true
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
            }}
            a11y={{
              prevSlideMessage: 'Previous specialized services',
              nextSlideMessage: 'Next specialized services',
              containerMessage: 'Carousel of specialized financial services. Use previous and next buttons to navigate',
            }}
          >
            {specializedServices.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="service-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  tabIndex={0}
                  aria-label={`Service: ${service.title}. ${service.description}`}
                  role="article"
                >
                  <div className="service-icon" aria-hidden="true">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </section>
  );
};

export default React.memo(FinancialServices);