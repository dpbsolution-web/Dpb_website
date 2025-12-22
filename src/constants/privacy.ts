// Privacy Policy content

export const PRIVACY_SECTIONS = [
  { id: "introduction", title: "1. Introduction" },
  { id: "information-collection", title: "2. Information Collection" },
  { id: "use-of-information", title: "3. Use of Information" },
  { id: "data-sharing", title: "4. Data Sharing" },
  { id: "data-security", title: "5. Data Security" },
  { id: "cookies", title: "6. Cookies Policy" },
  { id: "user-rights", title: "7. Your Rights" },
  { id: "data-retention", title: "8. Data Retention" },
  { id: "third-party", title: "9. Third-Party Services" },
  { id: "changes", title: "10. Policy Changes" },
  { id: "contact", title: "11. Contact Information" },
];

export const PRIVACY_INTRO = {
  text: "DPB Solution Pvt. Ltd. is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us in any capacity."
};

export const PRIVACY_CONTENT = {
  introduction: {
    title: "1. Introduction",
    paragraphs: [
      'DPB Solution Pvt. Ltd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us in any capacity.',
      "By accessing or using our services, you agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please do not use our services."
    ]
  },
  informationCollection: {
    title: "2. Information We Collect",
    subsections: [
      {
        subtitle: "2.1 Personal Information",
        text: "We may collect personal information that you voluntarily provide to us, including but not limited to:",
        list: [
          "Name, email address, phone number, and company details",
          "Billing and payment information",
          "Project specifications and technical requirements",
          "Communication records and correspondence"
        ]
      },
      {
        subtitle: "2.2 Automatically Collected Information",
        text: "When you visit our website, we may automatically collect:",
        list: [
          "IP address, browser type, and operating system",
          "Pages visited, time spent on pages, and navigation patterns",
          "Device information and unique identifiers",
          "Cookies and similar tracking technologies"
        ]
      }
    ]
  },
  useOfInformation: {
    title: "3. How We Use Your Information",
    text: "We use the collected information for the following purposes:",
    list: [
      "To provide, operate, and maintain our telecommunications and IT infrastructure services",
      "To process transactions and send related information including confirmations and invoices",
      "To respond to inquiries, provide customer support, and communicate about projects",
      "To improve our website, services, and customer experience",
      "To send marketing communications, newsletters, and promotional materials (with your consent)",
      "To comply with legal obligations and enforce our terms and conditions",
      "To detect, prevent, and address technical issues or fraudulent activities"
    ]
  },
  dataSharing: {
    title: "4. Information Sharing and Disclosure",
    text: "We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:",
    list: [
      "Service Providers: We may share information with trusted third-party vendors who assist us in operating our business, such as payment processors, cloud hosting providers, and project management tools",
      "Business Partners: With contractors, subcontractors, and suppliers involved in delivering services to you",
      "Legal Requirements: When required by law, regulation, legal process, or governmental request",
      "Business Transfers: In connection with a merger, acquisition, or sale of company assets",
      "Consent: With your explicit consent or at your direction"
    ]
  },
  dataSecurity: {
    title: "5. Data Security",
    paragraphs: [
      "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:"
    ],
    list: [
      "Encryption of data in transit and at rest",
      "Secure access controls and authentication mechanisms",
      "Regular security audits and vulnerability assessments",
      "Employee training on data protection and confidentiality"
    ],
    footer: "However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security."
  },
  cookies: {
    title: "6. Cookies and Tracking Technologies",
    text: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser, but disabling cookies may affect website functionality.",
    types: [
      { name: "Essential Cookies", description: "Required for basic website functionality" },
      { name: "Analytics Cookies", description: "Help us understand how visitors interact with our website" },
      { name: "Marketing Cookies", description: "Used to deliver relevant advertisements" }
    ]
  },
  userRights: {
    title: "7. Your Rights",
    text: "Depending on your location, you may have the following rights regarding your personal information:",
    list: [
      "Access: Request access to the personal information we hold about you",
      "Correction: Request correction of inaccurate or incomplete information",
      "Deletion: Request deletion of your personal information (subject to legal obligations)",
      "Restriction: Request restriction of processing in certain circumstances",
      "Portability: Request transfer of your data to another service provider",
      "Objection: Object to processing of your personal information",
      "Withdraw Consent: Withdraw consent for marketing communications at any time"
    ],
    footer: "To exercise these rights, please contact us using the information provided in the Contact section below."
  },
  dataRetention: {
    title: "8. Data Retention",
    text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When information is no longer needed, we will securely delete or anonymize it."
  },
  thirdParty: {
    title: "9. Third-Party Links and Services",
    text: "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party services you access."
  },
  changes: {
    title: "10. Changes to This Privacy Policy",
    text: 'We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information. Continued use of our services after changes constitutes acceptance of the updated policy.'
  },
  contact: {
    title: "11. Contact Information",
    text: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
    details: {
      company: "DPB Solution Pvt. Ltd.",
      address: "Road No-01, Awadhpuri Colony, Ara, Bihar - 802301",
      email: "info@dpbsolution.com, dpbsolution19@gmail.com",
      phone: "9973789207, 7277327990",
      website: "www.dpbsolution.com"
    }
  }
};

export const PRIVACY_ACKNOWLEDGMENT = "By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to be bound by its terms.";
