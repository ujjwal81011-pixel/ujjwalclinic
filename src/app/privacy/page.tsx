import { Metadata } from 'next';
import PrivacyView from '@/components/views/PrivacyView';

export const metadata: Metadata = {
  title: 'Privacy Policy & Patient Data Notice',
  description:
    'Privacy Policy for Ujjwal Clinic, Barnahal, District Mainpuri. Commitment to patient confidentiality and secure handling of consultation inquiries.',
  alternates: {
    canonical: 'https://ujjwalclinic.vercel.app/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Ujjwal Clinic Barnahal',
    description: 'Patient confidentiality and privacy standards at Ujjwal Clinic.',
    url: 'https://ujjwalclinic.vercel.app/privacy',
  },
};

export default function PrivacyPage() {
  return <PrivacyView />;
}
