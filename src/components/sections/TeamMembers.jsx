import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import team1 from '../../assets/images/Shishupal.avif'
import team2 from '../../assets/images/person.webp'
import team3 from '../../assets/images/Yug.webp'
import team4 from '../../assets/images/lija.webp'
import './TeamMembers.scss'

const team = [
  {
    name: "Sheshu Pulipaka",
    role: "Founder & CEO",
    shortBio: "20+ years of business consulting experience across multiple industries.",
    fullBio: "Sheshu Pulipaka is the Founder of Global Guru LLC, with over 27 years of global experience in real estate, private equity, fund accounting, lease audits, FP&A, and regulatory compliance. He has held senior leadership roles at Apex Group and Invesco US, where he led large international teams across fund operations, NAV reviews, and investor reporting. Sheshu specializes in CAM reconciliation, valuations, and automation using platforms like Yardi, Angus Systems, and SAP. He is a Certified Management Accountant (CMA) and CISA, with an MBA in Investments and certifications in Lean Six Sigma and Design Thinking. Known for his strategic insight and execution focus, he helps clients streamline CRE operations and scale with confidence.",
    avatar: team1,
    specialties: ["Real Estate", "Private Equity", "Fund Accounting", "CAM Reconciliation"]
  },
  {
    name: "Yugandhar Majji",
    role: "Co-Founder & Financial Advisor",
    shortBio: "Certified financial planner with expertise in corporate finance.",
    fullBio: "Yugandhar Majji is a fund accounting and financial operations specialist with over 15 years of experience across private equity, real estate, and financial reporting. As Co-Founder of Global Guru, he leads Yardi implementations, reconciliations, and end-to-end accounting support for clients across the U.S. and India. He has previously held key roles at Deloitte and Invesco, managing NAV processes, investor reporting, and audit support. With strong expertise in Yardi Voyager, SAP, and QuickBooks, Yugandhar blends technical precision with process efficiency to deliver results for fund managers and property owners alike.",
    avatar: team3,
    specialties: ["Fund Accounting", "Financial Operations", "NAV Processes", "Audit Support"]
  },
  {
    name: "Lija Erkhova",
    role: "Director of Operations",
    shortBio: "Brand strategist with a track record of successful campaigns.",
    fullBio: "Lija Erkhova is a seasoned operations expert with 20+ years of global experience across real estate accounting, client service, HR operations, and training. As Director of Operations at Global Guru, she leads Yardi-based solutions, compliance reporting, and operational enhancements for real estate clients worldwide. Based in Australia, Lija has previously held roles with the WA Government and luxury retail brands, where she streamlined systems and led high-impact teams. With a strong background in business management and service leadership, she drives efficiency, compliance, and client success across every engagement.",
    avatar: team4,
    specialties: ["Operations Management", "Compliance Reporting", "Yardi Solutions", "Client Service"]
  },
  {
    name: "Avinash Amarnath Jha",
    role: "Senior Accounting Manager | Finance Operations & ERP Specialist",
    shortBio: "Technology strategist specializing in digital transformation.",
    fullBio: "Avinash Avinash Jha is a Senior Accounting Manager with over 12 years of global experience in financial management, accounts payable/receivable, reconciliations, and process optimization. He has led international finance transitions, including U.S.-based assignments, ensuring accuracy and compliance across complex operations. Avinash specializes in automation, reporting, and process improvements using platforms such as SAP, Yardi, IFS, QAD, Trintech, and Blackline. Known for his leadership and problem-solving skills, he helps organizations streamline financial operations, strengthen controls, and scale with efficiency and confidence..",
    avatar: team2,
    specialties: ["Yardi Implementation", "Financial Reporting", "Process Automation", "Tech Solutions"]
  }
]

export default function TeamMembers({ variant = 'about' }) {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className={`team-section py-5 team-${variant}`}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="display-5 fw-bold mb-3">Meet Our Expert Team</h2>
              <p className="lead">
                The talented professionals behind Global Guru
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row>
          {team.map((member, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              {variant === 'about' ? (
                <AboutTeamCard member={member} index={index} />
              ) : (
                <TeamPageCard 
                  member={member} 
                  index={index} 
                  onSelect={() => setSelectedMember(member)}
                />
              )}
            </Col>
          ))}
        </Row>

        {/* Detailed Overlay */}
        <AnimatePresence>
          {selectedMember && (
            <TeamDetailOverlay 
              member={selectedMember} 
              onClose={() => setSelectedMember(null)} 
            />
          )}
        </AnimatePresence>
      </Container>
    </section>
  )
}

// Component for About Us page
const AboutTeamCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="team-card about-card"
    >
      <div className="team-avatar">
        <img
          src={member.avatar}
          alt={member.name}
          loading="lazy"
          className="img-fluid"
        />
        <div className="avatar-overlay"></div>
      </div>
      <div className="team-info">
        <h3>{member.name}</h3>
        <p className="role">{member.role}</p>
        {/* <p className="bio">{member.shortBio}</p> */}
        <Link to="/our-experts" className="view-more-btn">
          View More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

// Component for Team page
const TeamPageCard = ({ member, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="team-card team-page-card"
      whileHover={{ y: -5 }}
      onClick={onSelect}
    >
      <div className="card-inner">
        <div className="team-avatar">
          <img
            src={member.avatar}
            alt={member.name}
            loading="lazy"
            className="img-fluid"
          />
          <div className="avatar-hover-effect"></div>
        </div>
        <div className="team-info">
          <h3>{member.name}</h3>
          <p className="role">{member.role}</p>
          <div className="view-details-btn">
            View Details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Detailed Overlay Component
const TeamDetailOverlay = ({ member, onClose }) => {
  return (
    <motion.div
      className="team-detail-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="overlay-backdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      <motion.div 
        className="detail-container"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <button className="close-btn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="detail-content">
          <div className="detail-avatar">
            <img
              src={member.avatar}
              alt={member.name}
              loading="lazy"
              className="img-fluid"
            />
          </div>
          
          <div className="detail-info">
            <h2>{member.name}</h2>
            <p className="detail-role">{member.role}</p>
            
            <div className="specialties">
              <h4>Areas of Expertise</h4>
              <div className="specialty-tags">
                {member.specialties.map((specialty, i) => (
                  <span key={i} className="specialty-tag">{specialty}</span>
                ))}
              </div>
            </div>
            
            <div className="bio-section">
              <h4>About</h4>
              <p className="detail-bio">{member.fullBio}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}