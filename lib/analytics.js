// Vercel Analytics Configuration
// This file provides configuration options for Vercel Analytics

export const analyticsConfig = {
  // Enable analytics in development (optional)
  debug: process.env.NODE_ENV === 'development',
  
  // Custom event tracking examples
  trackEvents: {
    // Example: Track button clicks
    buttonClick: (buttonName) => {
      if (typeof window !== 'undefined' && window.va) {
        window.va('track', 'Button Click', { button: buttonName });
      }
    },
    
    // Example: Track page views
    pageView: (pageName) => {
      if (typeof window !== 'undefined' && window.va) {
        window.va('track', 'Page View', { page: pageName });
      }
    },
    
    // Example: Track form submissions
    formSubmit: (formName) => {
      if (typeof window !== 'undefined' && window.va) {
        window.va('track', 'Form Submit', { form: formName });
      }
    }
  }
};

// Speed Insights Configuration
export const speedInsightsConfig = {
  // Speed Insights automatically tracks Core Web Vitals
  // No additional configuration needed for basic usage
  
  // Optional: Custom performance tracking
  trackCustomMetric: (metricName, value) => {
    if (typeof window !== 'undefined' && window.si) {
      window.si('track', metricName, value);
    }
  }
};
