import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './CAMReconciliation.scss';
import ContactForm from '../../components/forms/ContactForm';
import FAQ from '../../components/sections/FAQ';
import CTA from '../../components/sections/CTA';
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
import CamAudit from '../../assets/images/4th.avif';
import CamAcc from '../../assets/images/3rd.avif';
import CamMap from '../../assets/images/6th.avif';

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

  const camFAQs = [
    {
      question: "What is CAM reconciliation, and who needs it?",
      answer: "CAM reconciliation is the process of reviewing Common Area Maintenance charges billed by landlords to tenants. It's essential for both tenants (to avoid overpaying) and landlords (to ensure compliance and transparency)."
    },
    {
      question: "What's the difference between CAM reconciliation and a CAM audit?",
      answer: "A reconciliation reviews charges for a specific period against lease terms. A CAM audit is deeper, often looking back multiple years to identify patterns, errors, and systemic overcharges."
    },
    {
      question: "Do you offer CAM reconciliation for retail, office, and industrial leases?",
      answer: "Yes. Our team has experience across all commercial real estate types. We tailor every CAM reconciliation service to the specific lease structure and property type involved."
    },
    {
      question: "What if your audit uncovers major discrepancies?",
      answer: "We provide complete documentation and, if needed, support your communications with landlords or legal teams to seek a resolution. Our goal is to protect your interests."
    }
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
                Why CAM Reconciliation Matters More Than You Think
              </h2>
              <p className="section-text text-muted">
                In commercial real estate, CAM reconciliation isn't just about tallying up bills. It's about trust, accountability, 
                and protecting your financial interests. Even a small oversight in reconciliations can lead to thousands in losses or worse,
                legal disputes.
                Our expert team reviews lease terms, validates CAM pass-through charges, and ensures that expenses are properly allocated. 
                We work as an extension of your team, offering a thorough, professional review process that eliminates confusion and ensures
                compliance.
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

      {/* New Section 1: CAM Reconciliation Services */}
      <section className="cam-services-section py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center display-6 fw-bold mb-5">
              CAM Reconciliation Services Tailored to Your Needs
            </h2>
            <p className="section-intro text-center mb-5 mx-auto">
              At Global Guru, we don't believe in one-size-fits-all. Our CAM reconciliation services are fully customized 
              based on lease specifics, tenant categories, property types, and market standards.
            </p>
          </motion.div>

          <Row className="g-4">
            <Col md={6}>
              <motion.div
                className="service-card bg-white h-100 p-4 rounded-3 shadow-sm"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="h4 fw-bold mb-4">We provide:</h3>
                <ul className="service-features">
                  <li>Detailed reconciliation of landlord CAM charges to lease terms</li>
                  <li>Verification of expense categories and allocations</li>
                  <li>Lease abstraction and audit trail documentation</li>
                  <li>Support for landlord and tenant dispute resolution</li>
                  <li>Historical audit and forward-looking budget validation</li>
                  <li>Analysis of caps, exclusions, and gross-up clauses</li>
                </ul>
              </motion.div>
            </Col>
            <Col md={6}>
              <motion.div
                className="service-card bg-white h-100 p-4 rounded-3 shadow-sm"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="h4 fw-bold mb-4">Benefits:</h3>
                <p className="mb-4">
                  We help tenants avoid overcharges and landlords maintain compliance and confidence. 
                  Whether you manage a multi-tenant retail center or lease office space, we bring fairness 
                  and accuracy to every agreement.
                </p>
                <div className="highlight-box p-3 rounded bg-primary bg-opacity-10">
                  <p className="mb-0 fw-medium">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Customized solutions for every property type and lease structure
                  </p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* New Section 2: Comprehensive CAM Audit Services */}
      <section className="cam-audit-section py-5">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6} className="order-lg-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="section-title display-6 fw-bold mb-4">
                  Comprehensive CAM Audit Services for Every Scenario
                </h2>
                <p className="section-text mb-4">
                  With our in-depth CAM audit process, you'll uncover inconsistencies and recover potential overpayments. 
                  Our forensic approach ensures every dollar is accounted for, and every clause is respected.
                </p>
                <div className="audit-features">
                  <h3 className="h5 fw-bold mb-3">Our CAM audit services include:</h3>
                  <Row>
                    <Col md={6}>
                      <ul className="feature-list">
                        <li>In-depth review of CAM billing statements</li>
                        <li>Comparison with actual lease terms and historical trends</li>
                        <li>Identification of discrepancies, overcharges, and gray areas</li>
                      </ul>
                    </Col>
                    <Col md={6}>
                      <ul className="feature-list">
                        <li>Reporting that outlines findings with clarity and action steps</li>
                        <li>Direct communication support with landlords when needed</li>
                      </ul>
                    </Col>
                  </Row>
                </div>
                <div className="audit-conclusion mt-4 p-3 bg-light rounded">
                  <p className="mb-0 fst-italic">
                    When it comes to CAM audit services, few can match our experience, speed, and transparency. 
                    We don't just find errors we provide the documentation and support to correct them.
                  </p>
                </div>
              </motion.div>
            </Col>
            <Col lg={6} className="order-lg-1">
              <motion.img 
                src={CamAudit} 
                alt="CAM Audit Services" 
                loading="lazy"
                className="img-fluid rounded-3 shadow"
                initial={{ x: -50, opacity: 0 }}
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
                src={CamAcc} 
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
                href="/who-we-are" 
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

      {/* New Section 3: Why Choose Global Guru */}
      <section className="why-us-section py-5">
        <Container>
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title display-6 fw-bold mb-3">
              Why Global Guru is the Preferred CAM Reconciliation Service Provider
            </h2>
            <p className="section-intro mx-auto mb-0">
              We stand out because we understand what's at stake. With years of experience in commercial lease analysis, 
              finance, and property management, Global Guru is a trusted name for businesses seeking reliable CAM reconciliation services.
            </p>
          </motion.div>

          <Row className="g-4 justify-content-center">
            {[
              "Specialized focus on retail, industrial, and office lease reconciliations",
              "Dedicated team of financial and real estate professionals",
              "Technology-enabled accuracy with audit-traceable results",
              "Transparent communication and support every step of the way",
              "Proven track record across multiple global markets"
            ].map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <motion.div
                  className="why-us-card bg-white p-4 rounded-3 shadow-sm h-100"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="d-flex align-items-start">
                    <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3">
                      <i className="bi bi-check2-circle fs-4"></i>
                    </div>
                    <p className="mb-0 fw-medium">{item}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>

          <motion.div
            className="mt-5 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="highlight-box p-4 bg-light rounded-3 d-inline-block">
              <p className="mb-0 fw-bold">
                Other CAM reconciliation service providers often offer a surface-level review. We go deeper, 
                combining data, legal precision, and a consultative approach that delivers value beyond a spreadsheet.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* New Section 4: Serving Clients Nationwide */}
      <section className="nationwide-section py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="section-title display-6 fw-bold mb-4">
                  Serving Clients Nationwide with Precision
                </h2>
                <p className="mb-4">
                  From New York to Los Angeles, our CAM reconciliation services in the USA support businesses 
                  that demand clarity, compliance, and cost control. Whether you're a national tenant, a regional 
                  landlord, or a property manager overseeing multiple locations, we're equipped to meet your needs.
                </p>
                <div className="py-3">
                  <h3 className="h5 fw-bold mb-3">We serve:</h3>
                  <ul className="client-list">
                    <li>Commercial tenants seeking validation of charges</li>
                    <li>Property owners aiming for transparent tenant relations</li>
                    <li>Real estate investment firms demanding financial accuracy</li>
                    <li>Multi-location retailers seeking scalable audit support</li>
                  </ul>
                </div>
                <p className="mt-4 mb-0 fw-medium">
                  Let us handle the complexity so you can focus on growing your business
                </p>
              </motion.div>
            </Col>
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="cam-map-container"
              >
                <img 
                  src={CamMap} 
                  alt="Map Services" 
                  loading="lazy"
                  className="img-fluid rounded-3 shadow"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5 bg-light">
        <Container>
          <FAQ 
            faqs={camFAQs}
            title="FAQs About CAM Reconciliation and Audit Services"
            themeColor="#0056b3"
          />
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
        <Container>
          <h2 className="section-title text-center display-6 fw-bold mb-5">Why Us</h2>
          
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
      {/* CTA Section */}
      <CTA
        title="Start Your CAM Reconciliation Today with Confidence"
        description="Don't let hidden fees, vague lease terms, or unchecked landlord billing impact your bottom line. Get accurate, timely, and professional CAM reconciliation from a team that knows what to look for. Contact Global Guru now to schedule your consultation and take the guesswork out of CAM charges for good."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
};

export default CAMReconciliation;