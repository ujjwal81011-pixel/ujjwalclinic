import { Metadata } from 'next';
import DoctorsView from '@/components/views/DoctorsView';

export const metadata: Metadata = {
  title: 'Consulting Doctors | Dr. Bimlesh Babu & Dr. Shivam',
  description:
    'Meet the consulting doctors at Ujjwal Clinic, Barnahal: Dr. Bimlesh Babu (General Physician) and Dr. Shivam (Proctologist). Call +91 78301 95336 for consultations.',
  alternates: {
    canonical: 'https://ujjwalclinic.vercel.app/doctors',
  },
  openGraph: {
    title: 'Consulting Doctors | Ujjwal Clinic Barnahal',
    description:
      'Dr. Bimlesh Babu (General Physician) & Dr. Shivam (Proctologist) at Ujjwal Clinic, Teacher\'s Colony, Barnahal.',
    url: 'https://ujjwalclinic.vercel.app/doctors',
  },
};

export default function DoctorsPage() {
  return <DoctorsView />;
}
