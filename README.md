# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './CAMReconciliation.scss';
import ContactForm from '../../components/forms/ContactForm';
// Import all difference icons
import techSupport from '../../assets/images/technical-support.webp';
import saveMoney from '../../assets/images/save-money.webp';
import priceUp from '../../assets/images/price-up.webp';
import profits from '../../assets/images/profits.webp';
import diagram from '../../assets/images/diagram.webp';
import tablet from '../../assets/images/tablet.webp';
import switchIcon from '../../assets/images/switch.webp';
// Other images
import landingBanner from '../../assets/images/landing-banner.webp';
import appVector from '../../assets/images/app-form-vector.webp';
import accounting from '../../assets/images/accounting.webp';

const CAMReconciliation = () => {
  const services = [
    {
      icon: 'bi-briefcase',
      title: 'A Solid Knowledge Base',
      description: 'Performing jobs routinely over the years results in overall higher productivity easy.'
    },
    {
      icon: 'bi-card-checklist',
      title: 'Cost-Effective Human Resources',
      description: 'Losing employees and finding new ones is expensive. Our services eliminates all these costly expenses.'
    },
    {
      icon: 'bi-bar-chart',
      title: 'Invaluable Support System',
      description: 'The need for new hires arises when a company is growing. We serve as a built-in support system.'
    },
    {
      icon: 'bi-binoculars',
      title: 'A Reputation of Stability',
      description: 'Long-term employees help ensure a stable work environment.'
    }
  ];

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
    <div className="cam-reconciliation-page">
      {/* Hero Banner Section */}
      <motion.section 
        className="hero-banner position-relative py-5 py-lg-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-background position-absolute top-0 start-0 w-100 h-100">
          <img 
            src={landingBanner}
            alt="Background" 
            loading="lazy"
            className="background-image w-100 h-100 object-fit-cover"
          />
          <div className="overlay position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
        </div>
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="pe-lg-5">
              <motion.div 
                className="hero-content text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h4 className="subtitle fs-5 fw-semibold mb-4 text-uppercase">Simplify CAM Reconciliation and Boost Your Profits!</h4>
                <h1 className="title display-5 fw-bold mb-4">Eliminate the stress of CAM reconciliation with accurate, timely financials delivered by our expert team.</h1>
                <ul className="benefits-list ps-0">
                  <li>Preparation and delivery of tenant statements with professional communication.</li>
                  <li>Thorough review of lease agreements, invoices, and supporting documents to ensure accuracy.</li>
                  <li>Accurate tracking and documentation of all maintenance-related expenses.</li>
                  <li>Personalized CAM solutions for your property.</li>
                  <li>Creation of detailed and reliable property budgets.</li>
                  <li>Comprehensive CAM audit reports with clear, actionable recommendations.</li>
                  <li>In-depth evaluation of inclusions, exclusions, CPI adjustments, and CAP calculations.</li>
                  <li>Drafting of next year's CAM estimates to support planning and forecasting.</li>
                </ul>
              </motion.div>
            </Col>
            <Col lg={4}>
              <motion.div
                className="bg-white rounded-3 p-4 shadow"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h3 className="text-center mb-4 fw-bold">Get Expert Advice</h3>
                <ContactForm 
                  formTitle="Get Expert Advice"
                  showPrivacyPolicy={true}
                  recaptchaSiteKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Why CAM Matters Section */}
      <section className="why-section py-5">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={7}>
              <h2 className="section-title display-6 fw-bold mb-4">
                Why Accurate CAM Reconciliation Matters
              </h2>
              <p className="section-text text-muted">
                As a property owner or manager, you know how crucial common area maintenance (CAM) 
                reconciliation is to both property valuation and overall profitability. However, in 
                commercial real estate, CAM reconciliation can be a complex and demanding process. 
                When not handled with precision, even small errors can result in significant financial 
                losses or strained relationships with tenants.
              </p>
            </Col>
            <Col md={5}>
              <motion.img 
                src={appVector} 
                alt="CAM Reconciliation" 
                loading="lazy"
                className="img-fluid rounded-3 shadow"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-6 bg-light">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={5}>
              <motion.img 
                src={accounting} 
                alt="Accounting Services" 
                loading="lazy"
                className="img-fluid rounded-3 shadow"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </Col>
            <Col lg={7}>
              <h2 className="section-title display-6 fw-bold mb-4">Let's grow your business together</h2>
              <p className="section-text text-muted">
                At Global Guru, we provide specialized commercial real estate accounting solutions 
                designed to streamline your financial operations and maximize ROI. From property-level 
                bookkeeping to portfolio-wide financial reporting, our expert team ensures accuracy, 
                transparency, and compliance—so you can focus on growth.
              </p>
              <p className="section-text text-muted">
                Let us handle the numbers, so you can focus on the growth.
              </p>
              <motion.a 
                href="/about" 
                className="btn btn-primary mt-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View More
              </motion.a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
        <Container>
          <h2 className="section-title text-center display-6 fw-bold mb-5">Why Us</h2>
          
          {/* Desktop Grid - Hidden on mobile */}
          <Row className="d-none d-md-flex g-4">
            {services.map((service, index) => (
              <Col lg={3} key={index}>
                <motion.div
                  className="service-item bg-white h-100 p-3 rounded shadow-sm text-center"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="service-icon mb-3">
                    <i className={`bi ${service.icon} fs-1 text-primary`}></i>
                  </div>
                  <h3 className="h5 fw-bold">{service.title}</h3>
                  <p className="mb-0 text-muted">{service.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Mobile Carousel - Hidden on desktop */}
          <div className="d-md-none">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                576: { slidesPerView: 2 }
              }}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="service-item h-100 p-4 bg-white rounded shadow-sm text-center">
                    <div className="service-icon mb-3">
                      <i className={`bi ${service.icon} fs-1 text-primary`}></i>
                    </div>
                    <h3 className="h5 fw-bold">{service.title}</h3>
                    <p className="mb-0 text-muted">{service.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </section>

      {/* Difference Section */}
      <section className="difference-section py-5 bg-light">
        <Container>
          <h2 className="section-title text-center display-6 fw-bold mb-5">To Make A Difference</h2>
          
          {/* Desktop - Single Row */}
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

          {/* Mobile Carousel - Unchanged */}
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
    </div>
  );
};

export default CAMReconciliation;
CAMReconciliation.scss
.cam-reconciliation-page {
  /* Hero Banner Styles */
  .hero-banner {
    position: relative;
    padding: 100px 0;
    color: #011e41;
    overflow: hidden;
    
    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      
      .background-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 3);
      }
    }

    .hero-content {
      .subtitle {
        font-size: 1.5rem;
        color: #fff;
        font-weight: 600;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .title {
        font-size: 2.5rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 30px;
        line-height: 1.3;
        text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
      }

      .benefits-list {
        list-style-type: none;
        padding-left: 0;

        li {
          position: relative;
          padding-left: 30px;
          margin-bottom: 15px;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #fff;

          &::before {
            content: "✓";
            position: absolute;
            left: 0;
            top: 0;
            color: #4CAF50;
            font-weight: bold;
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  /* Why Sections Styles */
  .why-section, .why-choose-us {
    padding: 80px 0;
    position: relative; // Add this to prevent overlap
    z-index: 1; // Add this to prevent overlap

    .section-title {
      font-size: 2.2rem;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 30px;
      position: relative;
      
      &::after {
        content: '';
        display: block;
        width: 80px;
        height: 4px;
        background: #3498db;
        margin-top: 15px;
      }
    }

    .section-text {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #555;
      margin-bottom: 25px;
    }
  }

  .why-choose-us {
    background-color: #f8f9fa;
  }

  /* Fixed Services Section */
  .services-section {
    padding: 80px 0;
    position: relative; // Add this
    z-index: 1; // Add this

    // .section-title {
    //   text-align: center;
    //   margin-bottom: 50px;
    // }

    /* Desktop Grid Layout - Fixed */
    .services-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;

      .service-item {
        flex: 0 0 calc(50% - 10px);
        height: 100%;
        background: white;
        padding: 30px;
        width: 50%;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        margin-bottom: 0; // Ensure no extra margin

        .service-icon {
          width: 70px;
          height: 70px;
          background: rgba(13, 110, 253, 0.1);
          color: $primary;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;

          i {
            font-size: 1.8rem;
          }
        }

        h3 {
          font-size: 1.3rem;
          font-weight: 400;
          margin-bottom: 15px;
        }

        p {
          color: #666;
          font-size: 5rem;
          line-height: 1.3;
        }
      }
    }

    /* Mobile Carousel - Fixed */
    .services-carousel {
      padding: 20px 0 40px; // Added bottom padding
      overflow: hidden;

      .service-item {
        background: white;
        padding: 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        margin: 0 15px;
        height: 100%;
      }

      .swiper-pagination {
        bottom: 0px !important;
      }
    }
  }

  /* Fixed Difference Section */
  .difference-section {
    padding: 80px 0;
    background-color: #f8f9fa;
    position: relative;
    z-index: 1;

    .difference-container {
      display: flex;
      gap: 15px;
      justify-content: center;
      flex-wrap: nowrap;
      overflow-x: auto;
      padding-bottom: 20px;
      width: 100%;
      
      &::-webkit-scrollbar {
        height: 6px;
      }
      
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      
      &::-webkit-scrollbar-thumb {
        background: #3498db;
        border-radius: 10px;
      }
    }

    .difference-item {
      flex: 0 0 auto;
      width: calc(14.28% - 13px); // 7 items with gap
      min-width: 150px;
      padding: 20px 15px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      .difference-icon {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;

        img {
          max-height: 50px;
          width: auto;
        }
      }

      p {
        font-size: 0.9rem;
        font-weight: 500;
        margin-bottom: 0;
        line-height: 1.4;
      }
    }

    /* Mobile Carousel - Fixed */
    .difference-carousel {
      padding: 20px 0 40px; // Added bottom padding
      overflow: hidden;

      .difference-item {
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        margin: 0 15px;
        height: 100%;
      }

      .swiper-pagination {
        bottom: 0px !important;
      }
    }
  }

  /* Responsive Fixes */
  @media (max-width: 1199px) {
    .difference-grid .difference-item {
      flex: 0 0 calc(25% - 20px); // 4 items per row on smaller desktop
    }
  }

  @media (max-width: 991px) {
    .hero-banner {
      padding: 80px 0;
    }

    .why-section, .why-choose-us, .services-section, .difference-section {
      padding: 60px 0;
    }
  }

  @media (max-width: 767px) {
    // Switch to carousel layout on mobile
    .services-grid,
    .difference-grid {
      display: none;
    }

    .services-carousel,
    .difference-carousel {
      display: block;
    }

    .hero-banner {
      padding: 60px 0;
      text-align: center;

      .hero-content {
        .title {
          font-size: 1.8rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    // Hide carousels on desktop
    .services-carousel,
    .difference-carousel {
      display: none;
    }
  }

  @media (max-width: 575px) {
    .hero-banner {
      padding: 50px 0;

      .hero-content {
        .title {
          font-size: 1.6rem;
        }
      }
    }
  }
}
This above code i have sent you as a reference as the hero section in both the pages will be same one page we will create is of LeaseAccounting.jsx for that https://globalgurullc.com/lease-accounting-services.html this is the website reference and the DataExpertise section is already a component so you just have to add <DataExpertise /> in both the pages and another page which you have to create is RealEstateAccounting.jsx for this page the reference link is