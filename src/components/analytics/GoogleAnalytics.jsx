import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics 4 Event Tracking Component
const GoogleAnalytics = () => {
  const location = useLocation();

  // Track page views on route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-CDEPBPME6G', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // This component doesn't render anything
};

// Utility functions for custom event tracking
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'engagement',
      event_label: parameters.label,
      value: parameters.value,
      ...parameters
    });
  }
};

// Predefined event tracking functions
export const trackButtonClick = (buttonName, location = '') => {
  trackEvent('button_click', {
    category: 'engagement',
    label: buttonName,
    location: location
  });
};

export const trackFormSubmission = (formName, success = true) => {
  trackEvent('form_submit', {
    category: 'engagement',
    label: formName,
    success: success
  });
};

export const trackDownload = (fileName, fileType = '') => {
  trackEvent('file_download', {
    category: 'engagement',
    label: fileName,
    file_type: fileType
  });
};

export const trackOutboundLink = (url, linkText = '') => {
  trackEvent('click', {
    category: 'outbound',
    label: linkText,
    url: url
  });
};

export const trackScroll = (scrollDepth) => {
  trackEvent('scroll', {
    category: 'engagement',
    value: scrollDepth
  });
};

export const trackSearch = (searchTerm, resultsCount = 0) => {
  trackEvent('search', {
    category: 'engagement',
    search_term: searchTerm,
    results_count: resultsCount
  });
};

// E-commerce tracking functions
export const trackPurchase = (transactionId, value, currency = 'USD', items = []) => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    value: value,
    currency: currency,
    items: items
  });
};

export const trackAddToCart = (itemId, itemName, category, value, quantity = 1) => {
  trackEvent('add_to_cart', {
    item_id: itemId,
    item_name: itemName,
    item_category: category,
    value: value,
    quantity: quantity
  });
};

// Custom business events for your consulting services
export const trackServiceInquiry = (serviceName, contactMethod = 'form') => {
  trackEvent('service_inquiry', {
    category: 'business',
    service_name: serviceName,
    contact_method: contactMethod
  });
};

export const trackConsultationRequest = (consultationType, urgency = 'normal') => {
  trackEvent('consultation_request', {
    category: 'business',
    consultation_type: consultationType,
    urgency: urgency
  });
};

export const trackResourceDownload = (resourceType, resourceName) => {
  trackEvent('resource_download', {
    category: 'business',
    resource_type: resourceType,
    resource_name: resourceName
  });
};

export default GoogleAnalytics;
