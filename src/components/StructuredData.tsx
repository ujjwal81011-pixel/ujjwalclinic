import React from 'react';
import { clinicInfo } from '@/lib/translations';

export default function StructuredData() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: clinicInfo.name,
    description: 'Healthcare clinic in Teacher\'s Colony, Barnahal, District Mainpuri, Uttar Pradesh, offering consultations with Dr. Bimlesh Babu (General Physician) and Dr. Shivam (Proctologist).',
    url: clinicInfo.siteUrl,
    telephone: clinicInfo.phoneRaw,
    address: {
      '@type': 'PostalAddress',
      streetAddress: "Teacher's Colony",
      addressLocality: 'Barnahal',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
      description: "Teacher's Colony, Barnahal, District Mainpuri, Uttar Pradesh, India",
    },
    medicalSpecialty: [
      'GeneralPhysician',
      'Proctology',
    ],
    physician: [
      {
        '@type': 'Physician',
        name: 'Dr. Bimlesh Babu',
        medicalSpecialty: 'General Practice',
      },
      {
        '@type': 'Physician',
        name: 'Dr. Shivam',
        medicalSpecialty: 'Proctology',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
