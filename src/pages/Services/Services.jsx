import { Container, Row, Col, Accordion, Tab, Tabs, Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import DataFlowVisualization from '../../components/sections/DataFlowVisualization'
import DataExpertise from '../../components/sections/DataExpertise'
import servicesHeroImage from '../../assets/images/services-hero.avif'
import './Services.scss'

// const services = [
//   {
//     title: "Business Consulting",
//     description: "Comprehensive strategic planning and operational improvement services.",
//     features: [
//       "Market analysis and strategy development",
//       "Operational efficiency optimization",
//       "Organizational restructuring",
//       "Change management"
//     ],
//     icon: "bi-briefcase"
//   },
//   {
//     title: "Technology Solutions",
//     description: "Custom software and IT infrastructure development.",
//     features: [
//       "Custom software development",
//       "Cloud migration services",
//       "IT infrastructure planning",
//       "Cybersecurity solutions"
//     ],
//     icon: "bi-laptop"
//   },
//   {
//     title: "Financial Advisory",
//     description: "Expert financial planning and analysis services.",
//     features: [
//       "Financial modeling and forecasting",
//       "Investment strategy",
//       "Risk management",
//       "Mergers and acquisitions"
//     ],
//     icon: "bi-graph-up"
//   },
//   {
//     title: "Marketing Strategy",
//     description: "Data-driven marketing solutions for growth.",
//     features: [
//       "Digital marketing campaigns",
//       "Brand positioning",
//       "Customer acquisition strategies",
//       "Marketing analytics"
//     ],
//     icon: "bi-megaphone"
//   },
//   // {
//   //   title: "HR Solutions",
//   //   description: "Comprehensive human resources services.",
//   //   features: [
//   //     "Talent acquisition",
//   //     "Employee engagement programs",
//   //     "Performance management",
//   //     "Training and development"
//   //   ],
//   //   icon: "bi-people"
//   // },
//   {
//     title: "Supply Chain Optimization",
//     description: "Streamline your logistics and operations.",
//     features: [
//       "Inventory management",
//       "Vendor relations",
//       "Process automation",
//       "Cost reduction strategies"
//     ],
//     icon: "bi-truck"
//   }
// ]

export default function Services() {
  return (
    <div className="services-page">
      {/* Hero Section - Updated to match About page */}
      <section className="services-hero">
        <div className="hero-image-wrapper">
          <Image
            src={servicesHeroImage}
            alt="Our Services"
            className="hero-image"
          />
          <div className="hero-overlay">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="hero-content"
              >
                <h1 className="hero-title">Our Professional Services</h1>
                <p className="hero-text">
                  Comprehensive solutions tailored to your business needs and growth objectives
                </p>
              </motion.div>
            </Container>
          </div>
        </div>
      </section>
      <DataExpertise/>
      <DataFlowVisualization/>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
              <p className="lead">
                Answers to common questions about our services
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="mx-auto">
              <Accordion>
                {[
                  {
                    question: "How do you determine which services are right for my business?",
                    answer: "We start with a comprehensive assessment of your business needs, challenges, and goals. Our team then recommends a tailored solution that aligns with your specific requirements and budget."
                  },
                  {
                    question: "What industries do you specialize in?",
                    answer: "While we serve clients across various industries, we have particular expertise in technology, finance, healthcare, and professional services."
                  },
                  {
                    question: "How long does a typical engagement last?",
                    answer: "Project duration varies based on scope. Short-term consultations may last 2-4 weeks, while comprehensive implementations can take 3-6 months or longer."
                  },
                  {
                    question: "What makes your approach different from other consulting firms?",
                    answer: "We combine strategic thinking with practical implementation, focusing on measurable results. Our team brings both industry expertise and hands-on experience to every engagement."
                  },
                  {
                    question: "Do you offer ongoing support after implementation?",
                    answer: "Yes, we provide various support packages ranging from basic maintenance to full-scale continuous improvement programs tailored to your needs."
                  },
                  {
                    question: "How do you measure the success of your services?",
                    answer: "We establish clear KPIs at the start of each engagement and provide regular progress reports. Success metrics are tailored to each client's specific objectives."
                  },
                  {
                    question: "What are your pricing models?",
                    answer: "We offer flexible pricing including project-based, retainer, and performance-based models depending on the service and client needs."
                  }
                ].map((item, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{item.question}</Accordion.Header>
                    <Accordion.Body>
                      {item.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}