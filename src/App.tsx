import React from 'react';
import { JsonLd } from './components/seo/JsonLd';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { AboutSection } from './components/home/AboutSection';
import { SignatureDishes } from './components/home/SignatureDishes';
import { MenuSection } from './components/home/MenuSection';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { CustomerReviews } from './components/home/CustomerReviews';
import { GallerySection } from './components/home/GallerySection';
import { LocationContact } from './components/home/LocationContact';
import { Footer } from './components/layout/Footer';
import { QuickActionsBar } from './components/common/QuickActionsBar';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-charcoal-950 text-cream-100 flex flex-col font-sans selection:bg-gold-500 selection:text-charcoal-950">
      {/* Schema.org Structured Data */}
      <JsonLd />

      {/* Header & Sticky Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <SignatureDishes />
        <MenuSection />
        <WhyChooseUs />
        <GallerySection />
        <CustomerReviews />
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Highway Quick Actions for Mobile */}
      <QuickActionsBar />
    </div>
  );
};

export default App;
