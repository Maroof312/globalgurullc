// Footer.jsx - With LinkedIn Added
import { Container, Row, Col } from 'react-bootstrap'
import { motion, useReducedMotion } from 'framer-motion'
import { useMemo } from 'react'
import './Footer.scss'

// Professional: Extract constants
const FOOTER_CONFIG = {
  companyName: 'Global Guru LLC',
  currentYear: new Date().getFullYear(),
  contact: {
    address: {
      street: '228 Park Ave S PMB 702068',
      city: 'New York',
      state: 'NY',
      zip: '10003',
      country: 'United States'
    },
    phone: '+1 845-497-6474',
    email: 'info@globalgurullc.com'
  },
  // Add LinkedIn URL
  linkedinUrl: 'https://www.linkedin.com/company/global-guru-llc/posts/?feedView=all'
}

const Footer = () => {
  const reduceMotion = useReducedMotion()

  // Professional: Single optimized animation config
  const animationConfig = useMemo(() => ({
    container: {
      initial: 'hidden',
      whileInView: 'visible',
      viewport: { once: true, margin: '-50px' }
    },
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: reduceMotion ? 0 : 0.05,
          delayChildren: reduceMotion ? 0 : 0.1
        }
      }
    },
    item: {
      hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: reduceMotion ? 0 : 0.3 }
      }
    }
  }), [reduceMotion])

  return (
    <>
      {/* Professional: Skip to content for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <footer 
        className="site-footer" 
        role="contentinfo"
        aria-label="Site footer"
      >
        <Container>
          <motion.div
            {...animationConfig.container}
            variants={animationConfig.variants}
          >
            <Row className="g-4">
              {/* Company Column */}
              <Col lg={3} md={6}>
                <motion.div variants={animationConfig.item} className="h-100">
                  <div className="footer-brand">
                    <h2 className="footer-heading">
                      {FOOTER_CONFIG.companyName}
                    </h2>
                    <p className="footer-description">
                      Providing innovative business solutions to help your company grow 
                      and succeed in today's competitive market.
                    </p>
                    
                    {/* LinkedIn Social Link - Added Here */}
                    <div className="footer-social">
                      <a
                        href={FOOTER_CONFIG.linkedinUrl}
                        className="social-link linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our LinkedIn page"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span>Follow us on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Col>

              {/* Navigation Columns */}
              {[
                {
                  title: 'Quick Links',
                  links: [
                    { label: 'About Us', href: '/who-we-are' },
                    { label: 'Services', href: '/services' },
                    { label: 'Industries', href: '/industries' },
                    { label: 'CPA', href: '/real-estate-cpa-activities' },
                    { label: 'Yardi Consulting', href: '/yardi-consultation-services' },
                    { label: 'Contact', href: '/contact' },
                    { label: 'Our Experts', href: '/our-experts' },
                    { label: 'Privacy Policy', href: '/privacy-policy' },
                    { label: 'Sitemap', href: '/sitemap' }
                  ]
                },
                {
                  title: 'Our Services',
                  links: [
                    { label: 'Property Accounting', href: '/real-estate-accounting-services' },
                    { label: 'CAM Reconciliation', href: '/cam-reconciliation-services' },
                    { label: 'Lease Administration', href: '/lease-admin-accounting-services' },
                    { label: 'Accounting and Bookkeeping', href: '/accounting-and-bookkeeping' },
                    { label: 'AR & AP Services', href: '/ar-ap-services' },
                    { label: 'Argus', href: '/argus' }
                  ]
                }
              ].map((section, idx) => (
                <Col lg={3} md={6} key={section.title}>
                  <motion.div variants={animationConfig.item} className="h-100">
                    <nav aria-label={section.title}>
                      <p className="footer-subheading">{section.title}</p>
                      <ul className="footer-nav">
                        {section.links.map(link => (
                          <li key={link.href}>
                            <a 
                              href={link.href}
                              className="footer-link"
                              aria-label={`Navigate to ${link.label}`}
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </motion.div>
                </Col>
              ))}

              {/* Contact Column - PROFESSIONAL */}
              <Col lg={3} md={6}>
                <motion.div variants={animationConfig.item} className="h-100">
                  <div className="footer-contact">
                    <h3 className="footer-subheading">Contact Info</h3>
                    
                    <address className="contact-details" itemScope itemType="https://schema.org/Organization">
                      <div className="contact-item">
                        <svg 
                          className="contact-icon" 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <title>Location</title>
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <div>
                          <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                            <span itemProp="streetAddress">{FOOTER_CONFIG.contact.address.street}</span>
                            <br />
                            <span itemProp="addressLocality">{FOOTER_CONFIG.contact.address.city}</span>,{' '}
                            <span itemProp="addressRegion">{FOOTER_CONFIG.contact.address.state}</span>{' '}
                            <span itemProp="postalCode">{FOOTER_CONFIG.contact.address.zip}</span>
                            <br />
                            <span itemProp="addressCountry">{FOOTER_CONFIG.contact.address.country}</span>
                          </p>
                        </div>
                      </div>

                      <div className="contact-item">
                        <svg 
                          className="contact-icon" 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <title>Phone</title>
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <a 
                          href={`tel:${FOOTER_CONFIG.contact.phone.replace(/\D/g, '')}`}
                          className="contact-link"
                          itemProp="telephone"
                          aria-label={`Call ${FOOTER_CONFIG.companyName} at ${FOOTER_CONFIG.contact.phone}`}
                        >
                          {FOOTER_CONFIG.contact.phone}
                        </a>
                      </div>

                      <div className="contact-item">
                        <svg 
                          className="contact-icon" 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <title>Email</title>
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        <a 
                          href={`mailto:${FOOTER_CONFIG.contact.email}`}
                          className="contact-link"
                          itemProp="email"
                          aria-label={`Email ${FOOTER_CONFIG.companyName} at ${FOOTER_CONFIG.contact.email}`}
                        >
                          {FOOTER_CONFIG.contact.email}
                        </a>
                      </div>
                    </address>
                  </div>
                </motion.div>
              </Col>
            </Row>

            {/* Bottom Bar - Professional */}
            <motion.div variants={animationConfig.item}>
              <div className="footer-bottom">
                <div className="footer-copyright">
                  <p>
                    &copy; {FOOTER_CONFIG.currentYear} {FOOTER_CONFIG.companyName}. 
                    All rights reserved.
                  </p>
                </div>
                
                {/* Optional: Back to top */}
                <button 
                  className="back-to-top"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  aria-label="Scroll back to top"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="18 15 12 9 6 15"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </footer>
    </>
  )
}

Footer.displayName = 'Footer'

export default Footer