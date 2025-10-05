import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// Temporarily disabled due to Turbopack error
// import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "AudibleSmiles - Building Community Through Hearing",
  description: "Audible Smiles is a nonprofit organization dedicated to building strong community partnerships and providing hearing aids to those in need. We believe that access to hearing assistance creates opportunities for connection, communication, and community engagement across the globe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}