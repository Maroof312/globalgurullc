import { Container, Row, Col } from 'react-bootstrap';
import { memo, useMemo, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './CAMReconciliation.scss';
import ContactForm from '../../components/forms/ContactForm';
import { config } from '../../config'
import LinkedInInsightTag from '../../components/layout/LinkedInInsightTag';
import { Helmet } from 'react-helmet-async';
import AccountingProcess from '../../components/sections/AccountingProcess';
import useAnalytics from '../../components/hooks/useAnalytics';


// Lazy load heavy components
const FAQ = lazy(() => import('../../components/sections/FAQ'));
const CTA = lazy(() => import('../../components/sections/CTA'));
const TrustedBySection = lazy(() => import('../../components/sections/TrustedBySection'));
const DifferenceSection = lazy(() => import('../../components/sections/DifferenceSection'));

// Images
import landingBanner from '../../assets/images/landing-banner.webp';
import appVector from '../../assets/images/app-form-vector.webp';
import CamAudit from '../../assets/images/4th.avif';
import CamAcc from '../../assets/images/3rd.avif';
import CamMap from '../../assets/images/6th.avif';

// Simple loader component
const Loader = () => <div className="d-flex justify-content-center py-4"><div className="spinner-border text-primary" role="status"></div></div>;

// Static data - memoized outside component
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

// CAM Process Steps
const camProcessSteps = [
  {
    id: 'retail-cam',
    title: 'Retail CAM Solutions',
    subtitle: 'Clear, Consistent, Defensible Reconciliation',
    icon: 'bi-shop',
    content: {
      description: 'We provide comprehensive retail CAM reconciliation services that ensure clarity, consistency, and defensibility across all your retail properties. Our meticulous approach eliminates disputes and builds tenant trust.',
      activities: [
        'Marketing and Promo Funds: Separate ledger management with clean tie out procedures',
        'Seasonality Adjustments: Month by month gross ups for kiosks and pop up spaces',
        'Recoverability Analysis: Patrol costs, event expenses, and exclusions applied per lease terms',
        'Caps Enforcement: Annual percentage and line item caps strictly enforced per tenant agreements'
      ],
      deliverables: [
        'Retail Rule Sheet detailing caps, bases, and thresholds',
        'Marketing Fund Tie Out documentation',
        'Seasonal Occupancy Log and analysis',
        'Tenant Statements with Q&A support notes',
        'Comprehensive reconciliation reports'
      ],
      benefits: [
        'Reduced tenant disputes and improved relationships',
        'Accurate recovery of all eligible expenses',
        'Clear documentation for audit defense',
        'Streamlined seasonal adjustments'
      ]
    }
  },
  {
    id: 'office-cam',
    title: 'Office CAM Excellence',
    subtitle: 'Eliminating Gray Areas in Commercial Reconciliation',
    icon: 'bi-building',
    content: {
      description: 'Our office CAM reconciliation services remove ambiguity and ensure precise expense allocation. We provide clear, defensible reconciliations that stand up to tenant scrutiny and audit requirements.',
      activities: [
        'Single and Multi Threshold Gross Ups: Documented and consistent application',
        'Caps Management: Admin fee caps and pass through caps applied by specific clause',
        'Capital vs Operating Expense Classification: Policy memos with line level treatments',
        'Shared Services and Cross Charges: Clear allocation memos and documentation'
      ],
      deliverables: [
        'Office Rule Sheet covering caps, bases, thresholds, and audit windows',
        'GL to CAM mapping documentation',
        'Allocation and Assumptions Memorandum',
        'Tenant Statements with comprehensive evidence index',
        'Expense classification guidelines'
      ],
      stat: {
        value: '98%',
        description: 'Reduction in tenant disputes with proper documentation'
      },
      benefits: [
        'Complete elimination of gray areas in expense allocation',
        'Audit ready documentation package',
        'Clear policy application across all leases',
        'Reduced administrative overhead'
      ]
    }
  },
  {
    id: 'family-offices',
    title: 'Family Office Services',
    subtitle: 'Trusted by Family Offices Service Built Around Principals',
    icon: 'bi-shield-check',
    content: {
      description: 'We work quietly and precisely for single family and multi family offices. We adapt to your entity chart, reporting cadence, communication style, and privacy standards so the work fits your world perfectly.',
      activities: [
        'Discretion and privacy first workflows with least privilege access protocols',
        'Consolidated multi entity reporting for HoldCo, MidCo, OpCo, SPVs, and JVs',
        'Capital calls and distributions calendars with preferred return tracking',
        'Bespoke reporting cadence for principals including 1 page summaries and deep packs',
        'Tax ready schedules including K 1 support packages and 1099 vendor hygiene',
        'Single point of contact with fast escalation paths'
      ],
      deliverables: [
        'Consolidated multi entity financial reports',
        'Principal focused summary dashboards',
        'Capital account management documentation',
        'Tax preparation support packages',
        'Privacy compliant workflow documentation'
      ],
      benefits: [
        'NOI and cash yield analysis by asset and roll up',
        'IRR and MOIC snapshots for select investments',
        'Liquidity runway and covenant headroom monitoring',
        'Capital account roll forwards and waterfall calculations',
        'Principal aligned communication and reporting'
      ]
    }
  }
];

const camFAQs = [
  {
    question: "How many CAM reconciliations has your team completed?",
    answer: "Our team has completed more than 10,000 CAM reconciliations across the United States, establishing our reputation as trusted CAM reconciliation experts."
  },
  {
    question: "What are the benefits of outsourcing CAM reconciliations?",
    answer: "Outsourcing CAM reconciliations ensures accurate expense allocation, reduces tenant disputes, improves financial transparency, and saves time for internal teams. Our clients benefit from error-free reconciliations that strengthen tenant relationships."
  },
  {
    question: "How do you handle tenant disputes related to CAM reconciliations?",
    answer: "We prepare tenant-ready reconciliations with clear supporting documentation. This reduces disputes, prevents misunderstandings, and ensures compliance with lease terms. "
  }
];

const CAMReconciliation = memo(() => {

  useAnalytics();

  // Memoize service items
  const serviceItems = useMemo(() => 
    services.map((service, index) => (
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
    )), []);

  // Memoize why us items
  const whyUsItems = useMemo(() => 
    [
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
    )), []);

  return (
    <div className="cam-reconciliation-page">
      <LinkedInInsightTag />
      <Helmet>
        <title>CAM Reconciliation Services for Property Owners | Global Guru</title>
        <link rel="canonical" href="https://globalgurullc.com/cam-reconciliation-services" />
        <meta 
          name="description" 
          content="Ensure accurate lease audits & CAM reconciliation with expert accounting services. Minimize disputes & improve property financial transparency with Global Guru" 
        />
        {/* Preload critical fonts to prevent layout shift */}
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" as="style" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* BREADCRUMB SCHEMA FOR /cam-reconciliation-services PAGE */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://globalgurullc.com/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "CAM Reconciliation",
              "item": "https://globalgurullc.com/cam-reconciliation-services"
            }]
          }`}
        </script>

        {/* FAQ SCHEMA FOR /cam-reconciliation-services PAGE */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "How many CAM reconciliations has your team completed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our team has completed more than 10,000 CAM reconciliations across the United States, establishing our reputation as trusted CAM reconciliation experts."
              }
            },{
              "@type": "Question",
              "name": "What are the benefits of outsourcing CAM reconciliations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Outsourcing CAM reconciliations ensures accurate expense allocation, reduces tenant disputes, improves financial transparency, and saves time for internal teams. Our clients benefit from error-free reconciliations that strengthen tenant relationships."
              }
            },{
              "@type": "Question",
              "name": "How do you handle tenant disputes related to CAM reconciliations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We prepare tenant-ready reconciliations with clear supporting documentation. This reduces disputes, prevents misunderstandings, and ensures compliance with lease terms."
              }
            }]
          }`}
        </script>
      </Helmet>

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
            loading="eager"
            className="background-image w-100 h-100 object-fit-cover"
            width={1920}
            height={1080}
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
                  recaptchaSiteKey={config.recaptchaSiteKey}
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
                width={500}
                height={400}
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
            <h2 className="section-title display-6 fw-bold mb-5">
              CAM Reconciliation Services Tailored to Your Needs
            </h2>
            <p className="section-intro mb-5 mx-auto">
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

      {/* CAM Process Section */}
      <AccountingProcess 
        title="Our Comprehensive CAM Reconciliation Framework"
        subtitle="A systematic approach to common area maintenance reconciliation that delivers accuracy, transparency, and peace of mind across all property types"
        steps={camProcessSteps}
      />

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
                width={500}
                height={400}
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
                width={500}
                height={400}
              />
            </Col>
            <Col lg={7}>
              <h2 className="section-title display-6 fw-bold mb-4">Let's grow your business together</h2>
              <p className="section-text text-muted">
                At Global Guru, we provide specialized commercial real estate accounting solutions 
                designed to streamline your financial operations and maximize ROI. From property-level 
                bookkeeping to portfolio-wide financial reporting, our expert team ensures accuracy, 
                transparency, and compliance so you can focus on growth.
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
            {whyUsItems}
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
                  width={500}
                  height={400}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Us Cards under Why Choose Us */}
      <section className="services-section py-5">
        <Container>
          <h2 className="section-title text-center display-6 fw-bold mb-5">Why Us</h2>
          
          <Row className="d-none d-md-flex g-4">
            {serviceItems}
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

      {/* Social Proof before final CTA */}
      <Suspense fallback={<Loader />}>
        <TrustedBySection pageType="camReconciliation" />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <DifferenceSection/>
      </Suspense>

      {/* Final CTA */}
      <Suspense fallback={<Loader />}>
        <CTA
          title="Start Your CAM Reconciliation Today with Confidence"
          description="Don't let hidden fees, vague lease terms, or unchecked landlord billing impact your bottom line. Get accurate, timely, and professional CAM reconciliation from a team that knows what to look for. Contact Global Guru now to schedule your consultation and take the guesswork out of CAM charges for good."
          buttonText="Get Started"
          buttonLink="/contact"
        />
      </Suspense>

      {/* FAQ after CTA (optional section) */}
      <section className="faq-section py-5 bg-light">
        <Container>
          <Suspense fallback={<Loader />}>
            <FAQ 
              faqs={camFAQs}
              title="FAQs About CAM Reconciliation and Audit Services"
              themeColor="#0056b3"
            />
          </Suspense>
        </Container>
      </section>
    </div>
  );
});

CAMReconciliation.displayName = 'CAMReconciliation';
export default CAMReconciliation;