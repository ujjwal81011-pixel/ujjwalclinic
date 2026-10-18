import { Metadata } from 'next';
import AppointmentView from '@/components/views/AppointmentView';

export const metadata: Metadata = {
  title: 'Consultation & Appointments | Call +91 78301 95336',
  description:
    'Call Ujjwal Clinic at +91 78301 95336 to enquire about consultation timings for Dr. Bimlesh Babu or Dr. Shivam in Barnahal, District Mainpuri. Enquiry form and WhatsApp available.',
  alternates: {
    canonical: 'https://ujjwalclinic.vercel.app/appointment',
  },
  openGraph: {
    title: 'Consultation & Appointments | Ujjwal Clinic Barnahal',
    description:
      'Direct telephone and WhatsApp consultation enquiry for Ujjwal Clinic, Barnahal, District Mainpuri.',
    url: 'https://ujjwalclinic.vercel.app/appointment',
  },
};

export default function AppointmentPage() {
  return <AppointmentView />;
}
