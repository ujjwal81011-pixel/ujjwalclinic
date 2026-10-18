import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ujjwal Clinic Barnahal',
    short_name: 'Ujjwal Clinic',
    description: 'Healthcare clinic in Teacher\'s Colony, Barnahal, District Mainpuri, Uttar Pradesh.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#12345A',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
