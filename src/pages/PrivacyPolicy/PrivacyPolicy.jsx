import { Container } from 'react-bootstrap'
import './PrivacyPolicy.scss'

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      <section className="content-section">
        <Container>
          <div className="content-wrapper">
            <h1 className="page-title">Privacy Policy</h1>
            <p className="subtitle">How we collect, use, and protect your information</p>
            <p className="last-updated"><strong>Last Updated:</strong> January 1, 2023</p>
            
            <h2>1. Introduction</h2>
            <p>
              Global Guru LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details</li>
              <li><strong>Business Information:</strong> Company name, job title, and business needs</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, and usage data</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your experience on our site</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis for improving our site</li>
              <li>To monitor usage of our site</li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>
            
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to maintain the safety of your personal information. However, no internet transmission or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>
            
            <h2>5. Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
            </p>
            
            <h2>6. Your Rights</h2>
            <p>You have certain rights regarding your personal information:</p>
            <ul>
              <li>The right to access, update, or delete your information</li>
              <li>The right to rectification if your information is inaccurate</li>
              <li>The right to object to our processing of your data</li>
              <li>The right to request restriction of processing</li>
              <li>The right to data portability</li>
            </ul>
            
            <h2>7. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:<br />
              <strong>Email:</strong> info@globalgurullc.com<br />
              <strong>Phone:</strong> (800) 123-4567<br />
              <strong>Address:</strong> 123 Business Ave, Suite 100, New York, NY 10001
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}