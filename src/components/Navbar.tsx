import React, { useState, useEffect } from 'react';
import { Menu, X, Navigation as NavigationIcon } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background blur toggle
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Progress bar calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Stay', href: '#stay' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-[2px] bg-[#B99A5B] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        id="main-navbar-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F6F1E8]/92 backdrop-blur-md shadow-xs border-b border-[#D8C8AE]/60 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              id="brand-logo-link"
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="group flex flex-col focus:outline-hidden"
            >
              <span className="font-serif-luxury text-lg sm:text-xl font-semibold tracking-wider text-[#171717] group-hover:text-[#B99A5B] transition-colors">
                HOTEL KAMLA VIHAR
              </span>
              <span className="text-[11px] sm:text-xs text-[#B99A5B] font-medium tracking-wide">
                होटल कमला विहार
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav id="desktop-nav-menu" className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs font-medium uppercase tracking-widest text-[#171717]/80 hover:text-[#B99A5B] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B99A5B] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button: Get Directions */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                id="navbar-get-directions-btn"
                href={HOTEL_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 border border-[#B99A5B] bg-[#B99A5B] text-[#FFFFFF] text-xs uppercase tracking-wider font-medium rounded-xs hover:bg-[#a6884a] hover:border-[#a6884a] transition-all shadow-xs"
              >
                <NavigationIcon className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#171717] hover:text-[#B99A5B] focus:outline-hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden bg-[#F6F1E8] border-b border-[#D8C8AE] px-4 pt-3 pb-6 shadow-lg transition-all animate-fadeIn"
          >
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  id={`mobile-nav-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium uppercase tracking-widest text-[#171717]/90 hover:text-[#B99A5B] py-2 border-b border-[#D8C8AE]/30 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <a
                  id="mobile-menu-get-directions-btn"
                  href={HOTEL_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-[#B99A5B] text-[#FFFFFF] text-xs uppercase tracking-wider font-medium rounded-xs hover:bg-[#a6884a] transition-colors"
                >
                  <NavigationIcon className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
