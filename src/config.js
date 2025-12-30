export const config = {
  recaptchaSiteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  emailjsServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  emailjsTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  emailjsPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Optional: warn in dev if something is missing (safe for production)
if (import.meta.env.DEV) {
  const requiredKeys = [
    "VITE_RECAPTCHA_SITE_KEY",
    "VITE_EMAILJS_SERVICE_ID",
    "VITE_EMAILJS_TEMPLATE_ID",
    "VITE_EMAILJS_PUBLIC_KEY",
  ];

  requiredKeys.forEach((key) => {
    if (!import.meta.env[key]) {
      console.warn(`[Config] Missing environment variable: ${key}`);
    }
  });
}
