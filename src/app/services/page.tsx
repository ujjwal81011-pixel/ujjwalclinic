import { Metadata } from 'next';
import ServicesView from '@/components/views/ServicesView';

export const metadata: Metadata = {
  title: 'Consultation Services | General Physician & Proctology',
  description:
    'Healthcare consultation services at Ujjwal Clinic, Barnahal: General Physician primary care (Dr. Bimlesh Babu) and Proctology consultations (Dr. Shivam). Call +91 78301 95336.',
  alternates: {
    canonical: 'https://ujjwalclinic.vercel.app/services',
  },
  openGraph: {
    title: 'Consultation Services | Ujjwal Clinic Barnahal',
    description:
      'General Medicine and Proctology consultations at Ujjwal Clinic, Teacher\'s Colony, Barnahal, District Mainpuri.',
    url: 'https://ujjwalclinic.vercel.app/services',
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
