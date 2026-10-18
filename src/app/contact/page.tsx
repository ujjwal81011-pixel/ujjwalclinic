import { Metadata } from 'next';
import ContactView from '@/components/views/ContactView';

export const metadata: Metadata = {
  title: 'Contact & Clinic Location | Teacher\'s Colony, Barnahal',
  description:
    'Visit Ujjwal Clinic at Teacher\'s Colony, Barnahal, District Mainpuri, Uttar Pradesh. Contact phone: +91 78301 95336. Google Maps directions and timings info.',
  alternates: {
    canonical: 'https://ujjwalclinic.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact & Location | Ujjwal Clinic Barnahal',
    description:
      'Teacher\'s Colony, Barnahal, District Mainpuri. Phone: +91 78301 95336. Consultations by Dr. Bimlesh Babu & Dr. Shivam.',
    url: 'https://ujjwalclinic.vercel.app/contact',
  },
};

export default function ContactPage() {
  return <ContactView />;
}
