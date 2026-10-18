import { Metadata } from 'next';
import HomeView from '@/components/views/HomeView';

export const metadata: Metadata = {
  title: 'Ujjwal Clinic | Trusted Medical Care in Barnahal, Mainpuri',
  description:
    'Dedicated medical consultations in Teacher\'s Colony, Barnahal, District Mainpuri. Consulting doctors: Dr. Bimlesh Babu (General Physician) and Dr. Shivam (Proctologist). Call +91 78301 95336.',
  alternates: {
    canonical: 'https://ujjwalclinic.vercel.app',
  },
  openGraph: {
    title: 'Ujjwal Clinic | Trusted Medical Care in Barnahal',
    description:
      'Medical clinic in Teacher\'s Colony, Barnahal. Consulting doctors: Dr. Bimlesh Babu (General Physician) and Dr. Shivam (Proctologist). Contact: +91 78301 95336.',
    url: 'https://ujjwalclinic.vercel.app',
  },
};

export default function Page() {
  return <HomeView />;
}
