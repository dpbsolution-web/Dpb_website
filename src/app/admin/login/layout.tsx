import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Login | DPB Solution - Secure Access Portal',
  description: 'Secure admin access portal for DPB Solution telecommunications management platform. Enterprise-grade authentication with 256-bit SSL encryption and 99.99% uptime SLA.',
  robots: {
    index: false, // Prevent indexing of admin pages for security
    follow: false,
    nocache: true,
  },
  openGraph: {
    title: 'DPB Solution Admin Portal',
    description: 'Secure telecommunications management platform access',
    type: 'website',
    locale: 'en_US',
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
