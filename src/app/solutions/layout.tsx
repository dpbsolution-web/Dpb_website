import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions - Tailored for Every Industry',
  description: 'Customized telecommunications and IT solutions for healthcare, finance, retail, manufacturing, and education sectors. Enterprise-grade connectivity, security, and scalability.',
  keywords: [
    'telecommunications solutions',
    'industry IT solutions',
    'healthcare telecom',
    'financial services IT',
    'retail technology',
    'manufacturing connectivity',
    'education IT infrastructure',
    'enterprise solutions'
  ],
  openGraph: {
    title: 'DPB Solution - Industry-Specific Solutions',
    description: 'Tailored telecommunications solutions for every industry',
    images: ['/images/logo.jpeg'],
    url: 'https://dpbsolution.com/solutions',
  },
  alternates: {
    canonical: 'https://dpbsolution.com/solutions',
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}