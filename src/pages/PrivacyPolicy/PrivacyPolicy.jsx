import { Container } from "react-bootstrap";
import "./PrivacyPolicy.scss";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      <section className="content-section">
        <Container>
          <div className="content-wrapper">
            <h1 className="page-title">Privacy Policy</h1>
            <p className="subtitle">
              How we collect, use, and protect your information
            </p>
            <p className="last-updated">
              <strong>Last Updated:</strong> October 2025
            </p>

            <h2>1. Introduction</h2>
            <p>
              Global Guru LLC (“we”, “our”, or “us”) operates the website{" "}
              <a href="https://globalgurullc.com" target="_blank" rel="noreferrer">
                https://globalgurullc.com
              </a>{" "}
              (the “Site”). This Privacy Policy explains how we collect, use, and
              protect your personal information when you use our website and related
              services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Contact Form Data:</strong> When you contact us through forms
                on our website, we collect your name, email address, and message
                content.
              </li>
              <li>
                <strong>Communication Data:</strong> Any information you voluntarily
                share with us through email or other communication channels.
              </li>
              <li>
                <strong>Cookies and Tracking:</strong> We use cookies and similar
                technologies to improve user experience, analyze traffic, and serve
                personalized ads.
              </li>
              <li>
                <strong>Analytics Data:</strong> We collect non-identifiable
                information such as browser type, operating system, pages visited,
                time spent, and referring URLs through tools like Google Analytics.
              </li>
              <li>
                <strong>reCAPTCHA:</strong> We use Google reCAPTCHA to prevent spam
                and abuse. This may collect certain information such as IP address and
                browser details to verify that the request is human.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We may use the collected information to:</p>
            <ul>
              <li>Respond to your inquiries or service requests.</li>
              <li>Improve our website’s functionality and user experience.</li>
              <li>Analyze website traffic and usage trends.</li>
              <li>Display relevant and personalized advertisements.</li>
              <li>Ensure website security and prevent fraudulent activities.</li>
            </ul>

            <h2>4. Use of Cookies</h2>
            <p>
              Cookies are small files stored on your device that help us recognize you
              and improve your experience. We use:
            </p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Necessary for the website to
                function.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> To understand how visitors interact
                with our website.
              </li>
              <li>
                <strong>Advertising Cookies:</strong> To serve personalized ads through
                platforms like Google or Facebook.
              </li>
            </ul>
            <p>
              You can control or disable cookies through your browser settings. For
              more information, visit{" "}
              <a
                href="https://www.allaboutcookies.org"
                target="_blank"
                rel="noreferrer"
              >
                www.allaboutcookies.org
              </a>
              .
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              We use trusted third-party tools that may process your data in
              accordance with their own privacy policies:
            </p>
            <ul>
              <li>EmailJS – for sending and managing contact form submissions.</li>
              <li>Google Analytics – for website performance analysis.</li>
              <li>Google reCAPTCHA – for spam and abuse prevention.</li>
            </ul>
            <p>
              These services may collect information directly from your browser or
              device. We do not control their data handling practices.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information only as long as necessary for the
              purposes outlined above or as required by law.
            </p>

            <h2>7. Data Sharing</h2>
            <p>
              We do <strong>not</strong> sell, rent, or share personal information
              with third parties for marketing purposes.
            </p>

            <h2>8. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to:
            </p>
            <ul>
              <li>Access and request a copy of your personal data.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Withdraw consent to cookies or analytics.</li>
              <li>Object to certain data processing activities.</li>
            </ul>
            <p>
              If you wish to exercise these rights, contact us at{" "}
              <strong>info@globalgurullc.com</strong>.
            </p>

            <h2>9. International Visitors</h2>
            <p>
              Our website is accessible globally. By using our website, you
              acknowledge that your information may be processed in the United States
              or other countries where our service providers operate, following
              applicable data protection laws.
            </p>

            <h2>10. Data Security</h2>
            <p>
              We take reasonable steps to protect your data from unauthorized access,
              alteration, or disclosure. However, no online transmission is 100%
              secure, and we cannot guarantee absolute protection.
            </p>

            <h2>11. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be
              posted on this page with an updated “Last Updated” date.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices,
              please contact us at:
            </p>
            <p>
              📧 <strong>Email:</strong> info@globalgurullc.com<br />
              🌐 <strong>Website:</strong>{" "}
              <a href="https://globalgurullc.com" target="_blank" rel="noreferrer">
                https://globalgurullc.com
              </a>
              <br />
              🏢 <strong>Company:</strong> Global Guru LLC
            </p>

            <hr />
            <p className="compliance-note">
              <strong>Compliant With:</strong> GDPR (EU/UK), CCPA (California), and the
              Australian Privacy Act (1988)
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
