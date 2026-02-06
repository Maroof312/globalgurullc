// src/components/analytics/GoogleAnalytics.jsx
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Lightweight GA pageview tracker
 * Execution deferred until gtag is available
 */
const GoogleAnalytics = () => {
  const location = useLocation();
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Avoid running before GA is loaded
    if (!window.gtag) return;

    // Initial page load
    if (!initialized.current) {
      initialized.current = true;
    }

    window.gtag('config', 'G-CDEPBPME6G', {
      page_path: location.pathname + location.search,
      transport_type: 'beacon', // non-blocking
    });
  }, [location]);

  return null;
};

/* -----------------------
   SAFE EVENT HELPERS
----------------------- */

const safeGtag = (fn) => {
  if (typeof window !== 'undefined' && window.gtag) {
    fn();
  }
};

export const trackEvent = (eventName, parameters = {}) => {
  safeGtag(() =>
    window.gtag('event', eventName, {
      event_category: parameters.category || 'engagement',
      event_label: parameters.label,
      value: parameters.value,
      ...parameters,
    })
  );
};

export const trackButtonClick = (buttonName, location = '') =>
  trackEvent('button_click', { label: buttonName, location });

export const trackFormSubmission = (formName, success = true) =>
  trackEvent('form_submit', { label: formName, success });

export const trackDownload = (fileName, fileType = '') =>
  trackEvent('file_download', { label: fileName, file_type: fileType });

export const trackOutboundLink = (url, linkText = '') =>
  trackEvent('outbound_click', { label: linkText, url });

export const trackScroll = (scrollDepth) =>
  trackEvent('scroll', { value: scrollDepth });

export const trackSearch = (searchTerm, resultsCount = 0) =>
  trackEvent('search', { search_term: searchTerm, results_count: resultsCount });

export const trackPurchase = (transactionId, value, currency = 'USD', items = []) =>
  trackEvent('purchase', { transaction_id: transactionId, value, currency, items });

export const trackAddToCart = (itemId, itemName, category, value, quantity = 1) =>
  trackEvent('add_to_cart', {
    item_id: itemId,
    item_name: itemName,
    item_category: category,
    value,
    quantity,
  });

export const trackServiceInquiry = (serviceName, contactMethod = 'form') =>
  trackEvent('service_inquiry', { service_name: serviceName, contact_method: contactMethod });

export const trackConsultationRequest = (consultationType, urgency = 'normal') =>
  trackEvent('consultation_request', { consultation_type: consultationType, urgency });

export const trackResourceDownload = (resourceType, resourceName) =>
  trackEvent('resource_download', { resource_type: resourceType, resource_name: resourceName });

export default GoogleAnalytics;
