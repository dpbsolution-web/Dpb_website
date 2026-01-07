// Contact page configuration and data

// Contact information
export const CONTACT_INFO = {
  email: "info@dpbsolution.com",
  phone: "+91 9973789207",
  address: {
    street: "123 Business Street",
    city: "San Francisco",
    state: "CA",
    zip: "94102",
    country: "United States"
  },
  hours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
    weekend: "Saturday - Sunday: Closed"
  },
  social: {
    linkedin: "https://linkedin.com/company/DPBsolution",
    twitter: "https://twitter.com/DPBsolution",
    facebook: "https://facebook.com/DPBsolution"
  }
};

// Contact form fields configuration
export const CONTACT_FORM_FIELDS = {
  firstName: {
    label: "First Name",
    placeholder: "John",
    required: true,
    type: "text"
  },
  lastName: {
    label: "Last Name",
    placeholder: "Doe",
    required: true,
    type: "text"
  },
  email: {
    label: "Email",
    placeholder: "john@example.com",
    required: true,
    type: "email"
  },
  company: {
    label: "Company",
    placeholder: "Your Company Name",
    required: true,
    type: "text"
  },
  message: {
    label: "Message",
    placeholder: "Tell us about your project...",
    required: true,
    type: "textarea",
    rows: 5
  }
};

// Contact page hero
export const CONTACT_HERO = {
  title: "Get in Touch",
  description: "Have questions about our telecommunications solutions? We're here to help. Contact us today and let's discuss how we can support your connectivity needs.",
  badge: "Contact Us"
};

// Office locations (if multiple)
export const OFFICE_LOCATIONS = [
  {
    name: "Headquarters",
    address: "123 Business Street, San Francisco, CA 94102",
    phone: "+91 9973789207",
    email: "info@DPBsolution.com",
    mapLink: "https://maps.google.com"
  }
  // Add more locations as needed
];

// FAQ section for contact page
export const CONTACT_FAQ = [
  {
    question: "What are your business hours?",
    answer: "We're available Monday through Friday, 9:00 AM to 6:00 PM PST. For urgent support, our 24/7 hotline is always available."
  },
  {
    question: "How quickly can I expect a response?",
    answer: "We typically respond to all inquiries within 24 business hours. For urgent matters, please call our direct line."
  },
  {
    question: "Do you offer on-site consultations?",
    answer: "Yes, we provide on-site consultations for enterprise clients. Contact us to schedule a visit."
  }
];
