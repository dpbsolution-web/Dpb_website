export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DPB Solution Pvt. Ltd.',
    description: 'Leading provider of telecommunications and IT solutions, empowering digital transformation since 2009',
    url: 'https://dpbsolution.com',
    logo: 'https://dpbsolution.com/images/logo.jpeg',
    foundingDate: '2009',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-XXX-XXX-XXXX',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Patna',
      addressRegion: 'Bihar',
      postalCode: '800001',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://facebook.com/dpbsolution',
      'https://twitter.com/dpbsolution',
      'https://linkedin.com/company/dpbsolution',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DPB Solution',
    url: 'https://dpbsolution.com',
    description: 'Telecommunications and IT solutions provider',
    publisher: {
      '@type': 'Organization',
      name: 'DPB Solution Pvt. Ltd.',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'DPB Solution Pvt. Ltd.',
    image: 'https://dpbsolution.com/images/logo.jpeg',
    '@id': 'https://dpbsolution.com',
    url: 'https://dpbsolution.com',
    telephone: '+91-XXX-XXX-XXXX',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Patna',
      addressRegion: 'Bihar',
      postalCode: '800001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.5941,
      longitude: 85.1376,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
