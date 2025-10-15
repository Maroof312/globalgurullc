import React, { useState, useRef, useCallback, memo, useEffect, useMemo } from 'react'
import { Form, Button, Alert, Spinner } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha'
import { config } from '../../config'
import emailjs from '@emailjs/browser'
import './ContactForm.scss'

const ContactForm = memo(({ 
  recaptchaSiteKey = config.recaptchaSiteKey, 
  showPrivacyPolicy = true,
  formTitle = "Contact Form Submission"
}) => {
  const initialFormData = useMemo(() => ({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: formTitle,
    company: 'Not provided',
    page: typeof window !== 'undefined' ? window.location.href : ''
  }), [formTitle]);

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [validated, setValidated] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const recaptchaRef = useRef();

  useEffect(() => {
    setMounted(true);
    
    // Check if reCAPTCHA is properly loaded
    const checkRecaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.render) {
        setRecaptchaReady(true);
      } else {
        // If not loaded, try again after a delay
        setTimeout(checkRecaptcha, 500);
      }
    };
    
    checkRecaptcha();
    
    return () => setMounted(false);
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleRecaptchaChange = useCallback((value) => {
    setRecaptchaValue(value);
    setRecaptchaError(false);
  }, []);

  const handleRecaptchaError = useCallback(() => {
    console.error('reCAPTCHA failed to load');
    setRecaptchaError(true);
  }, []);

  const handleRecaptchaExpire = useCallback(() => {
    setRecaptchaValue(null);
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setValidated(false);
    setRecaptchaValue(null);
    
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  }, [initialFormData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (!form.checkValidity()) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    // Enhanced reCAPTCHA validation
    if (recaptchaSiteKey && !recaptchaValue) {
      setStatus({ loading: false, success: false, error: 'Please complete the CAPTCHA verification' });
      setRecaptchaError(true);
      
      // Reset reCAPTCHA to force user to complete it again
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      return;
    }

    setStatus({ loading: true, success: false, error: '' });
    setValidated(true);

    try {
      const serviceId = config.emailjsServiceId;
      const templateId = config.emailjsTemplateId;
      const publicKey = config.emailjsPublicKey;
      
      const emailData = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: formData.subject,
        company: formData.company,
        page_url: formData.page,
        // Don't include reCAPTCHA token in EmailJS data
      };
      
      await emailjs.send(serviceId, templateId, emailData, publicKey);
      
      setStatus({ loading: false, success: true, error: '' });
      resetForm();
      
    } catch (error) {
      console.error('EmailJS error:', error);
      
      let errorMessage = 'Failed to send message. Please try again.';
      
      if (error.text && error.text.includes('quota')) {
        errorMessage = 'Message quota exceeded. Please try again later or contact us directly.';
      }
      
      setStatus({ 
        loading: false, 
        success: false, 
        error: errorMessage 
      });
      
      // Reset reCAPTCHA on error
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
        setRecaptchaValue(null);
      }
    }
  }, [formData, recaptchaValue, recaptchaSiteKey, resetForm]);

  const formValidation = useMemo(() => ({
    nameInvalid: validated && !formData.name,
    emailInvalid: validated && !formData.email,
    messageInvalid: validated && !formData.message,
  }), [validated, formData.name, formData.email, formData.message]);

  if (!mounted) {
    return (
      <div className="contact-form-container">
        <Form className="contact-form">
          <Spinner animation="border" variant="primary" />
        </Form>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      <Form 
        noValidate 
        validated={validated}
        onSubmit={handleSubmit}
        className="contact-form"
      >
        
        {status.error && (
          <Alert variant="danger" dismissible onClose={() => setStatus(prev => ({...prev, error: ''}))}>
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
            isInvalid={formValidation.nameInvalid}
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
            isInvalid={formValidation.emailInvalid}
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
            isInvalid={formValidation.messageInvalid}
            placeholder="How can we help you?"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a message.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Enhanced reCAPTCHA with better error handling */}
        {recaptchaSiteKey && (
          <div className="mb-3 recaptcha-container">
            {!recaptchaReady && (
              <div className="text-muted small mb-2">Loading CAPTCHA...</div>
            )}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={recaptchaSiteKey}
              onChange={handleRecaptchaChange}
              onErrored={handleRecaptchaError}
              onExpired={handleRecaptchaExpire}
              asyncScriptOnLoad={() => setRecaptchaReady(true)}
            />
            {recaptchaError && (
              <div className="text-danger small mt-1">
                CAPTCHA verification failed. Please refresh the page and try again.
              </div>
            )}
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
                  fontWeight: '500',
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
          disabled={status.loading || (recaptchaSiteKey && !recaptchaValue)}
          className="submit-btn w-50"
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
    </div>
  )
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;