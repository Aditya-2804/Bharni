/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { CraftHeritage } from './components/CraftHeritage';
import { VisitAndAddress } from './components/VisitAndAddress';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SareeModal } from './components/SareeModal';
import { STORE_DETAILS } from './data/storeData';
import { Saree } from './types';

export default function App() {
  const [selectedSaree, setSelectedSaree] = useState<Saree | null>(null);
  const [inquirySareeName, setInquirySareeName] = useState<string>('Bridal Kanjeevaram Silk');
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectForViewing = (sareeName: string) => {
    setInquirySareeName(sareeName);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2D241E] selection:bg-[#EADCCB] selection:text-[#2D241E]">
      {/* Navigation Bar */}
      <Navbar onSelectSareeInterest={handleSelectForViewing} />

      {/* Main Single Page Content */}
      <main className="flex-1">
        <Hero />
        <Gallery
          onSelectSaree={(saree) => setSelectedSaree(saree)}
          onBookSareeViewing={handleSelectForViewing}
        />
        <CraftHeritage />
        <VisitAndAddress />
        <ContactSection preselectedSareeName={inquirySareeName} />
      </main>

      {/* Saree Detail Inspection Modal */}
      <SareeModal
        saree={selectedSaree}
        store={STORE_DETAILS}
        onClose={() => setSelectedSaree(null)}
        onSelectForViewing={handleSelectForViewing}
      />

      {/* Footer */}
      <Footer />

      {/* Floating Action Button for Direct Assistance */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5 items-end font-sans">
        {showBackToTop && (
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="p-3 bg-[#FDFBF7] text-[#2D241E] border border-[#2D241E]/10 rounded-full shadow-md hover:bg-[#EADCCB]/30 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 opacity-70" />
          </button>
        )}

        <a
          id="floating-whatsapp-btn"
          href={`https://wa.me/${STORE_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Bharni Sarees, I am browsing your online gallery and have an inquiry.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 bg-[#2D241E] hover:bg-[#43352B] text-[#FDFBF7] rounded-full shadow-lg border border-[#2D241E]/20 hover:scale-105 transition-all text-xs uppercase tracking-[0.15em]"
        >
          <MessageCircle className="w-3.5 h-3.5 opacity-80" />
          <span className="hidden sm:inline">WhatsApp Concierge</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
