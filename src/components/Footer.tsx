import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Globe, Phone, MessageSquare, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Stay', href: '#stay' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      id="main-footer"
      aria-label="Hotel Kamla Vihar Footer"
      className="bg-[#171717] text-[#FFFFFF] pt-16 pb-12 border-t border-[#B99A5B]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#FFFFFF]/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-1">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold tracking-wider text-[#FFFFFF]">
                HOTEL KAMLA VIHAR
              </h3>
              <p className="text-xs sm:text-sm text-[#B99A5B] font-medium tracking-wide">
                होटल कमला विहार
              </p>
            </div>
            
            <p className="font-sans-clean text-xs sm:text-sm text-[#FFFFFF]/70 max-w-sm leading-relaxed">
              A serene and accessible hotel destination in Anwari, Mohania, Bihar. Thoughtfully created for comfortable road journeys and local hospitality.
            </p>

            <div className="pt-2 text-xs text-[#B99A5B] font-serif-luxury">
              5.0 ★ Google Rating • 2 Verified Reviews
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B99A5B]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-sans-clean text-xs sm:text-sm text-[#FFFFFF]/75">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    id={`footer-link-${link.label.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#B99A5B] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hotel Location Information */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B99A5B]">
              Hotel Address
            </h4>
            <div className="font-sans-clean text-xs sm:text-sm text-[#FFFFFF]/75 space-y-1.5 leading-relaxed">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" />
                <div>
                  <p>Ward Number 16,</p>
                  <p>Vimla Pipe House and Company,</p>
                  <p>Anwari, Mohania,</p>
                  <p>Bihar 821109</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                id="footer-open-maps-link"
                href={HOTEL_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-[#B99A5B] hover:text-[#FFFFFF] transition-colors inline-flex items-center space-x-1"
              >
                <span>View on Google Maps →</span>
              </a>
            </div>
          </div>

        </div>

        {/* Developer Credit & Copyright Section (Strictly Separated) */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#FFFFFF]/60">
          
          <div>
            © {new Date().getFullYear()} Hotel Kamla Vihar (होटल कमला विहार). All rights reserved.
          </div>

          {/* Distinct Developer Attribution Box */}
          <div
            id="developer-credit-container"
            className="p-3.5 rounded-xs bg-[#FFFFFF]/5 border border-[#B99A5B]/30 flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-xs text-[#FFFFFF]/80"
          >
            <div className="flex items-center space-x-1.5 text-[#B99A5B] font-medium">
              <Globe className="w-3.5 h-3.5" />
              <span>Created by RoadsideDeveloper</span>
            </div>

            <span className="hidden sm:inline text-[#FFFFFF]/20">|</span>

            <a
              href={`https://wa.me/${HOTEL_DATA.developerCredit.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B99A5B] transition-colors flex items-center space-x-1"
              title="Contact Developer via WhatsApp"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp: {HOTEL_DATA.developerCredit.whatsappFormatted}</span>
            </a>

            <span className="hidden sm:inline text-[#FFFFFF]/20">|</span>

            <a
              href={`tel:${HOTEL_DATA.developerCredit.phone}`}
              className="hover:text-[#B99A5B] transition-colors flex items-center space-x-1"
              title="Contact Developer via Phone"
            >
              <Phone className="w-3 h-3 text-[#B99A5B]" />
              <span>Call: {HOTEL_DATA.developerCredit.phoneFormatted}</span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
