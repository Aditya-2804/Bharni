import React from 'react';
import { ArrowRight, MapPin, Sparkles, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';
import { heroImg, STORE_DETAILS } from '../data/storeData';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Narrative & Action */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] font-sans block mb-3 text-[#2D241E]/60">
                Curated Saree Collections
              </span>
              <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-light italic leading-tight text-[#2D241E]">
                Timeless Elegance <br className="hidden sm:inline" />
                <span className="not-italic font-normal">in Every Thread.</span>
              </h1>
              <p className="text-sm sm:text-base text-[#2D241E]/70 max-w-xl font-normal leading-relaxed pt-4">
                Welcome to <span className="font-semibold text-[#2D241E]">Bharni</span> — your destination for diverse, handcrafted sarees. Discover our versatile range spanning breathable handloom cottons, breezy organic linens, sheer organzas, fluid georgettes, and radiant festive drapes.
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap gap-4 pt-1 font-sans text-xs uppercase tracking-[0.25em]">
              <a
                id="hero-explore-gallery-btn"
                href="#gallery"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[#FDFBF7] bg-[#2D241E] hover:bg-[#43352B] rounded-full transition-all shadow-xs"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                id="hero-store-address-btn"
                href="#visit"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[#2D241E] bg-[#EADCCB]/40 hover:bg-[#EADCCB] border border-[#2D241E]/15 rounded-full transition-all"
              >
                <MapPin className="w-3.5 h-3.5 opacity-70" />
                <span>Visit Atelier</span>
              </a>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[#2D241E]/80 hover:text-[#2D241E] hover:bg-[#EADCCB]/20 rounded-full transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 opacity-70" />
                <span>Inquiries</span>
              </a>
            </div>

            {/* Key Assurance Minimalist Badges */}
            <div className="pt-8 border-t border-[#2D241E]/10 grid grid-cols-3 gap-4 sm:gap-6 text-left">
              <div className="space-y-1">
                <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#2D241E] block">
                  All Fabrics
                </span>
                <p className="text-xs text-[#2D241E]/60">Cottons, Linens, Organzas & more</p>
              </div>

              {/*<div className="space-y-1">
                <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#2D241E] block">
                  Artisan Looms
                </span>
                <p className="text-xs text-[#2D241E]/60">Direct regional weaver families</p>
              </div>*/}

              <div className="space-y-1">
                <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#2D241E] block">
                  Ram Nagar Boutique
                </span>
                <p className="text-xs text-[#2D241E]/60">Showroom & draping lounge</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden bg-[#EADCCB] shadow-sm border border-[#2D241E]/10">
                <img
                  id="hero-main-image"
                  src={heroImg}
                  alt="Bharni Handcrafted Saree Collection Showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] sm:h-[500px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                />

                {/* Subtle minimalist overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FDFBF7]/90 backdrop-blur-md rounded-xl border border-[#2D241E]/10 flex items-center justify-between text-[#2D241E]">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.3em] font-sans text-[#2D241E]/60 font-medium block">
                      Curated Styles
                    </span>
                    <span className="font-serif-luxury text-base font-medium">
                      Multi-Fabric Saree Exhibition
                    </span>
                  </div>
                  <a
                    href="#gallery"
                    className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#2D241E] hover:opacity-70 flex items-center gap-1"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
