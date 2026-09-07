import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, Sparkles } from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

interface NavbarProps {
  onSelectSareeInterest?: (sareeName: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Gallery', href: '#gallery' },
    { label: 'Craft', href: '#craft' },
    { label: 'Atelier', href: '#visit' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs border-b border-[#2D241E]/10 py-4'
          : 'bg-[#FDFBF7]/85 backdrop-blur-xs py-6 border-b border-[#2D241E]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="brand-logo"
          href="#"
          className="group flex flex-col items-start focus:outline-none"
        >
          <span className="font-serif-luxury text-3xl sm:text-4xl tracking-[0.2em] font-light uppercase text-[#2D241E] transition-opacity hover:opacity-80">
            Bharni
          </span>
          <span className="text-[9px] tracking-[0.35em] uppercase text-[#2D241E]/50 -mt-0.5 font-sans">
            Saree Boutique
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-10 text-xs uppercase tracking-[0.3em] font-sans text-[#2D241E]/70">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#2D241E] hover:border-b hover:border-[#2D241E] transition-all pb-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            id="nav-whatsapp-btn"
            href={`https://wa.me/${STORE_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Bharni Sarees, I would like to inquire about your saree collections.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-sans uppercase tracking-[0.2em] text-[#2D241E] bg-[#EADCCB]/60 hover:bg-[#EADCCB] border border-[#2D241E]/10 rounded-full transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 opacity-70" />
            <span>WhatsApp</span>
          </a>

          <a
            id="nav-call-btn"
            href={`tel:${STORE_DETAILS.phonePrimary.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-sans uppercase tracking-[0.2em] text-[#FDFBF7] bg-[#2D241E] hover:bg-[#43352B] rounded-full transition-all"
          >
            <Phone className="w-3.5 h-3.5 opacity-80" />
            <span>{STORE_DETAILS.phonePrimary}</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center md:hidden gap-2">
          <a
            id="mobile-nav-whatsapp"
            href={`https://wa.me/${STORE_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#2D241E] bg-[#EADCCB]/60 rounded-full"
            aria-label="WhatsApp Us"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2D241E] hover:bg-[#EADCCB]/40 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#FDFBF7] border-b border-[#2D241E]/10 px-6 py-6 shadow-md space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <nav className="flex flex-col space-y-3 font-sans text-xs uppercase tracking-[0.25em]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#2D241E]/80 hover:text-[#2D241E] py-2 border-b border-[#2D241E]/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              id="mobile-drawer-call"
              href={`tel:${STORE_DETAILS.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs uppercase tracking-[0.2em] font-sans text-[#FDFBF7] bg-[#2D241E] rounded-full"
            >
              <Phone className="w-4 h-4 opacity-80" />
              <span>Call Store ({STORE_DETAILS.phonePrimary})</span>
            </a>
            <a
              id="mobile-drawer-directions"
              href={STORE_DETAILS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs uppercase tracking-[0.2em] font-sans text-[#2D241E] bg-[#EADCCB]/50 border border-[#2D241E]/10 rounded-full"
            >
              <MapPin className="w-4 h-4 text-[#2D241E]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
