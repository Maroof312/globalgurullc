import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { 
  FaReceipt, 
  FaShoppingCart, 
  FaFileInvoiceDollar, 
  FaChartLine, 
  FaClock, 
  FaFileAlt, 
  FaCheckCircle, 
  FaHandHoldingUsd, 
  FaBalanceScale,
  FaCalculator
} from 'react-icons/fa';
import './FinancialServices.scss';

const defaultServices = [
  { icon: <FaReceipt />, title: "Record to Report (RTR)", description: "End-to-end accounting and financial reporting solutions." },
  { icon: <FaShoppingCart />, title: "Procure to Pay (PTP)", description: "Complete procurement and payment processing." },
  { icon: <FaFileInvoiceDollar />, title: "Order to Cash (OTC)", description: "Integrated order processing and collections." },
  { icon: <FaChartLine />, title: "Financial Planning & Analysis", description: "Strategic budgeting and performance analysis." },
  { icon: <FaCalculator />, title: "Waterfall Calculation", description: "Complex distribution calculations for investments and partnerships." },
  { icon: <FaClock />, title: "Attorney Time Entry", description: "Tracking of legal professionals' billable hours." },
  { icon: <FaFileAlt />, title: "Expense Reports", description: "Comprehensive expense management solutions." },
  { icon: <FaFileInvoiceDollar />, title: "Prebilling and Invoicing", description: "Professional invoice generation services." },
  { icon: <FaCheckCircle />, title: "Billing Coordination", description: "End-to-end billing process management." },
  { icon: <FaHandHoldingUsd />, title: "Collections", description: "Professional accounts receivable services." },
  { icon: <FaBalanceScale />, title: "OCG Billing Process", description: "Specialized OCG billing solutions." }
];

const FinancialServices = ({ services = defaultServices }) => {
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
  const coreServices = services.slice(0, 5);
  const specializedServices = services.slice(5);

  return (
    <section className="additional-services">
      <Container>
        <motion.h2 
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
          >
            {coreServices.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="service-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Specialized Services Slider */}
        <motion.div 
          className="services-slider-wrapper"
          variants={containerVariants}
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
          >
            {specializedServices.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="service-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </section>
  );
};

export default FinancialServices;