import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://ujjwalclinic.vercel.app'),
  title: {
    default: 'Ujjwal Clinic | Healthcare in Barnahal, Mainpuri',
    template: '%s | Ujjwal Clinic, Barnahal',
  },
  description:
    'Ujjwal Clinic provides medical consultations in Teacher\'s Colony, Barnahal, District Mainpuri. Consulting doctors: Dr. Bimlesh Babu (General Physician) and Dr. Shivam (Proctologist). Call +91 78301 95336.',
  keywords: [
    'Ujjwal Clinic Barnahal',
    'General Physician in Barnahal',
    'Proctologist in Barnahal',
    'Clinic in Teacher\'s Colony, Barnahal',
    'Ujjwal Clinic Mainpuri',
    'Dr. Bimlesh Babu',
    'Dr. Shivam Barnahal',
    'Doctor in Barnahal Mainpuri',
  ],
  authors: [{ name: 'Ujjwal Clinic' }],
  creator: 'Ujjwal Clinic',
  publisher: 'Ujjwal Clinic',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.webmanifest',
  alternates: {
    canonical: 'https://ujjwalclinic.vercel.app',
  },
  openGraph: {
    title: 'Ujjwal Clinic | Trusted Medical Care, Close to Home',
    description:
      'Providing dedicated medical consultations in Teacher\'s Colony, Barnahal, District Mainpuri, Uttar Pradesh. Consulting doctors: Dr. Bimlesh Babu and Dr. Shivam.',
    url: 'https://ujjwalclinic.vercel.app',
    siteName: 'Ujjwal Clinic',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Ujjwal Clinic | Healthcare in Barnahal, District Mainpuri',
    description:
      'Medical consultations in Teacher\'s Colony, Barnahal. Dr. Bimlesh Babu (General Physician) & Dr. Shivam (Proctologist). Contact: +91 78301 95336.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#12345A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <StructuredData />
      </head>
      <body>
        <LanguageProvider>
          {/* Skip Link for Accessibility */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          <Navbar />
          <main id="main-content" style={{ flexGrow: 1 }}>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
