import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
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

  return (
    <section className="difference-section py-5 bg-light">
      <Container>
        <h2 className="section-title text-center display-6 fw-bold mb-5">To Make A Difference</h2>
        
        <div className="d-none d-lg-flex justify-content-center">
          <div className="difference-container">
            {differenceItems.map((item, index) => (
              <motion.div
                key={index}
                className="difference-item bg-white rounded shadow-sm text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="difference-icon mb-3">
                  <img src={item.icon} alt={item.text} loading="lazy" className="img-fluid" style={{ height: '50px' }} />
                </div>
                <p className="mb-0 fw-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="d-lg-none">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              576: { slidesPerView: 2 }
            }}
          >
            {differenceItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="difference-item h-100 p-3 bg-white rounded shadow-sm text-center">
                  <div className="difference-icon mb-3">
                    <img src={item.icon} alt={item.text} loading="lazy" className="img-fluid" style={{ height: '50px' }} />
                  </div>
                  <p className="mb-0 fw-medium">{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default DifferenceSection;