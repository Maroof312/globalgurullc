import { useState, useRef } from 'react'
import { Form, Button, Alert, Spinner } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha'
import { config } from '../../config'
import emailjs from '@emailjs/browser'
import './ContactForm.scss'

const ContactForm = ({ 
  recaptchaSiteKey = config.recaptchaSiteKey, 
  showPrivacyPolicy = true,
  formTitle = "Contact Form Submission"
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: formTitle,
    company: 'Not provided',
    page: window.location.href
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [validated, setValidated] = useState(false);
  const recaptchaRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setRecaptchaError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    // Check form validity
    if (!form.checkValidity()) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    // Check reCAPTCHA - only if site key is provided
    if (recaptchaSiteKey && !recaptchaValue) {
      setStatus({ loading: false, success: false, error: 'Please complete the CAPTCHA verification' });
      setRecaptchaError(true);
      return;
    }

    setStatus({ loading: true, success: false, error: '' });
    setValidated(true);

    try {
      // Use configuration values
      const serviceId = config.emailjsServiceId;
      const templateId = config.emailjsTemplateId;
      const publicKey = config.emailjsPublicKey;
      
      // Create form data with reCAPTCHA response for EmailJS validation
      const formDataWithCaptcha = {
        ...formData,
        'g-recaptcha-response': recaptchaValue // EmailJS expects this parameter
      };
      
      await emailjs.send(serviceId, templateId, formDataWithCaptcha, publicKey);
      
      setStatus({ loading: false, success: true, error: '' });
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        message: '',
        subject: formTitle,
        company: 'Not provided',
        page: window.location.href
      });
      setValidated(false);
      
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setRecaptchaValue(null);
      
    } catch (error) {
      console.error('EmailJS error:', error);
      
      // Handle reCAPTCHA specific errors
      let errorMessage = 'Failed to send message. Please try again.';
      if (error.text && error.text.includes('reCAPTCHA')) {
        errorMessage = 'CAPTCHA verification failed. Please complete the CAPTCHA again.';
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setRecaptchaValue(null);
      }
      
      setStatus({ 
        loading: false, 
        success: false, 
        error: errorMessage 
      });
    }
  };

  return (
    <Form 
      noValidate 
      validated={validated}
      onSubmit={handleSubmit}
      className="contact-form">
      
      {status.error && (
        <Alert variant="danger" dismissible onClose={() => setStatus({...status, error: ''})}>
          {status.error}
        </Alert>
      )}
      
      {status.success && (
        <Alert variant="success">
          Thank you! Your message has been sent successfully.
        </Alert>
      )}

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Full Name *</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          isInvalid={validated && !formData.name}
          placeholder="Enter your full name"
        />
        <Form.Control.Feedback type="invalid">
          Please provide your name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email Address *</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          isInvalid={validated && !formData.email}
          placeholder="Enter your email address"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid email address.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number (optional)"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message *</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          isInvalid={validated && !formData.message}
          placeholder="How can we help you?"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a message.
        </Form.Control.Feedback>
      </Form.Group>

      {recaptchaSiteKey ? (
        <div className="mb-3">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaSiteKey}
            onChange={handleRecaptchaChange}
          />
          {recaptchaError && (
            <div className="text-danger small mt-1">Please complete the CAPTCHA verification</div>
          )}
        </div>
      ) : (
        <div className="mb-3 text-muted small">
          CAPTCHA verification is currently disabled
        </div>
      )}

      {showPrivacyPolicy && (
        <Form.Group className="mb-3">
          <Form.Text className="text-muted" style={{ fontSize: '0.75rem' }}>
            By clicking the button below, you agree to be contacted by Global Guru LLC via the 
            phone number and email you provide, even if you're listed on any Do Not Call registries.
            There is no purchase obligation. {' '}
            <a 
              href="/privacy-policy" 
              style={{ 
                color: '#3498db',
                textDecoration: 'underline',
                fontWeight: '500'
              }}
            >
              Privacy Policy
            </a>.
          </Form.Text>
        </Form.Group>
      )}

      <Button
        variant="primary"
        type="submit"
        disabled={status.loading}
        className="submit-btn w-100"
        size="lg"
      >
        {status.loading ? (
          <>
            <Spinner animation="border" size="sm" className="me-2" />
            Sending...
          </>
        ) : 'Send Message'}
      </Button>
    </Form>
  )
}

export default ContactForm;