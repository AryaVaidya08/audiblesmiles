import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/react';
import { funnelSans } from './fontStyles/funnelSans';

export const metadata = {
  title: {
    default: "AudibleSmiles",
    template: "%s | AudibleSmiles"
  },
  description: "Audible Smiles is a nonprofit organization dedicated to building strong community partnerships and providing hearing aids to those in need. We believe that access to hearing assistance creates opportunities for connection, communication, and community engagement across the globe.",
  keywords: [
    "hearing aids",
    "hearing loss",
    "deaf community",
    "hard of hearing",
    "nonprofit",
    "hearing health",
    "community support",
    "fundraising",
    "hearing assistance",
    "audible smiles"
  ],
  authors: [{ name: "Arya Vaidya" }, { name: "AudibleSmiles Team" }],
  creator: "AudibleSmiles",
  publisher: "AudibleSmiles",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://audiblesmiles.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AudibleSmiles - Supporting Hearing Health & Community",
    description: "Audible Smiles is a nonprofit organization dedicated to building strong community partnerships and providing hearing aids to those in need.",
    url: 'https://audiblesmiles.org',
    siteName: 'AudibleSmiles',
    images: [
      {
        url: '/Transparent_Logo.png',
        width: 1200,
        height: 630,
        alt: 'AudibleSmiles Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AudibleSmiles - Supporting Hearing Health & Community",
    description: "Audible Smiles is a nonprofit organization dedicated to building strong community partnerships and providing hearing aids to those in need.",
    images: ['/Transparent_Logo.png'],
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
  verification: {
    google: 'google53ea055d3c01e4ca',
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AudibleSmiles",
    "description": "Audible Smiles is a nonprofit organization dedicated to building strong community partnerships and providing hearing aids to those in need.",
    "url": "https://audiblesmiles.org",
    "logo": "https://audiblesmiles.org/Transparent_Logo.png",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bridgewater",
      "addressRegion": "NJ",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "General Inquiry",
      "email": "info@audiblesmiles.org"
    },
    "sameAs": [
      "https://www.instagram.com/audiblesmiles",
      "https://www.facebook.com/audiblesmiles"
    ],
    "mission": "Building strong community partnerships and providing hearing aids to those in need",
    "areaServed": "United States",
    "knowsAbout": [
      "Hearing aids",
      "Hearing loss support",
      "Community outreach",
      "Fundraising",
      "Deaf community support"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${funnelSans.variable} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}