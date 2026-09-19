import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { LocationStory } from './components/LocationStory';
import { StaySection } from './components/StaySection';
import { RoomPreview } from './components/RoomPreview';
import { GoogleReviews } from './components/GoogleReviews';
import { Gallery } from './components/Gallery';
import { HotelDetails } from './components/HotelDetails';
import { ContactSection } from './components/ContactSection';
import { GoogleMapSection } from './components/GoogleMapSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ImageLightbox } from './components/ImageLightbox';
import { GALLERY_IMAGES } from './data/hotelData';

export default function App() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNavigateLightbox = (newIndex: number) => {
    setActiveLightboxIndex(newIndex);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F1E8] text-[#171717]">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Split-Screen Editorial Hero */}
        <Hero />

        {/* Editorial Introduction */}
        <Introduction />

        {/* Location Story */}
        <LocationStory />

        {/* Your Stay Concept */}
        <StaySection />

        {/* Accommodation Preview */}
        <RoomPreview onOpenLightbox={handleOpenLightbox} />

        {/* Verified Google Reviews */}
        <GoogleReviews />

        {/* Editorial Masonry Gallery */}
        <Gallery onOpenLightbox={handleOpenLightbox} />

        {/* The Hotel in Details (Horizontal Panels) */}
        <HotelDetails />

        {/* Contact & Enquiry Form */}
        <ContactSection />

        {/* Google Map Section */}
        <GoogleMapSection />
      </main>

      {/* Minimalist Luxury Footer */}
      <Footer />

      {/* Back to top floating button */}
      <BackToTop />

      {/* Fullscreen Photo Lightbox */}
      <ImageLightbox
        images={GALLERY_IMAGES}
        currentIndex={activeLightboxIndex}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
}
