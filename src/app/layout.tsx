import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dpbsolution.com'),
  title: {
    default: "DPB Solution - Telecommunications & IT Solutions",
    template: "%s | DPB Solution",
  },
  description: "Leading provider of telecommunications and IT solutions, connecting businesses to the future with cutting-edge technology and unparalleled service. Empowering Digital Transformation since 2009.",
  keywords: [
    "telecommunications",
    "IT solutions",
    "internet services",
    "cloud services",
    "VoIP",
    "cybersecurity",
    "managed IT services",
    "digital transformation",
    "network infrastructure",
    "enterprise solutions",
    "India telecom",
    "Patna IT services"
  ],
  authors: [{ name: "DPB Solution Pvt. Ltd." }],
  creator: "DPB Solution Pvt. Ltd.",
  publisher: "DPB Solution Pvt. Ltd.",
  applicationName: "DPB Solution",
  referrer: 'origin-when-cross-origin',
  category: 'technology',
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dpbsolution.com",
    siteName: "DPB Solution",
    title: "DPB Solution - Telecommunications & IT Solutions",
    description: "Leading provider of telecommunications and IT solutions. Empowering Digital Transformation with cutting-edge technology and unparalleled service since 2009.",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "DPB Solution - Telecommunications & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DPB Solution - Telecommunications & IT Solutions",
    description: "Leading provider of telecommunications and IT solutions. Empowering Digital Transformation since 2009.",
    creator: "@dpbsolution",
    images: ["/images/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/images/logo.jpeg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/images/logo.jpeg', sizes: '192x192', type: 'image/jpeg' },
    ],
    shortcut: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
    other: [
      {
        rel: 'icon',
        url: '/images/logo.jpeg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
