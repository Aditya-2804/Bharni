import React from 'react';
import { MapPin, Clock, Navigation, Car, Sparkles, Phone, ExternalLink, CheckCircle } from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

export const VisitAndAddress: React.FC = () => {
  return (
    <section id="visit" className="py-20 md:py-28 bg-[#FDFBF7] border-t border-[#2D241E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase tracking-[0.4em] font-sans block text-[#2D241E]/60">
            Atelier & Showroom
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#2D241E]">
            Visit Our Flagship Boutique
          </h2>
          <p className="text-sm sm:text-base text-[#2D241E]/70 font-normal leading-relaxed font-sans">
            Experience the tactile drape of diverse fabrics in person — from featherlight handloom cottons and breezy linens to crisp chanderis and rich celebration drapes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address & Hours Detail Card */}
          <div className="lg:col-span-6 bg-[#FDFBF7] rounded-2xl p-6 sm:p-8 border border-[#2D241E]/10 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Header inside card */}
              <div className="border-b border-[#2D241E]/10 pb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-[#2D241E]/60 block mb-1">
                  Location
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#2D241E] font-light">
                  Bharni — Flagship Store
                </h3>
              </div>

              {/* Exact Physical Address */}
              <div className="flex items-start gap-4 font-sans">
                <div className="p-2.5 rounded-xl bg-[#EADCCB]/30 text-[#2D241E] border border-[#2D241E]/10 shrink-0 mt-1">
                  <MapPin className="w-4 h-4 opacity-70" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm sm:text-base font-medium text-[#2D241E]">
                    {STORE_DETAILS.addressLine1}
                  </p>
                  <p className="text-xs sm:text-sm text-[#2D241E]/70">
                    {STORE_DETAILS.addressLine2}
                  </p>
                  <p className="text-xs text-[#2D241E]/80">
                    Landmark: {STORE_DETAILS.landmark}
                  </p>
                  <p className="text-xs font-semibold text-[#2D241E] pt-0.5">
                    {STORE_DETAILS.cityStateZip}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4 pt-2 border-t border-[#2D241E]/10 font-sans">
                <div className="p-2.5 rounded-xl bg-[#EADCCB]/30 text-[#2D241E] border border-[#2D241E]/10 shrink-0 mt-1">
                  <Clock className="w-4 h-4 opacity-70" />
                </div>
                <div className="space-y-1 text-xs sm:text-sm">
                  <span className="font-medium text-[#2D241E] block">
                    Visiting Hours
                  </span>
                  <div className="text-[#2D241E]/70 space-y-0.5">
                    <p>{STORE_DETAILS.timings.weekdays}</p>
                    <p>{STORE_DETAILS.timings.weekends}</p>
                  </div>
                  <p className="text-[11px] text-[#2D241E]/50 italic pt-1">
                    {STORE_DETAILS.timings.note}
                  </p>
                </div>
              </div>

              {/* Parking & Accessibility */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-sans">
                {/*<div className="p-3 bg-[#EADCCB]/20 rounded-xl border border-[#2D241E]/10 text-xs text-[#2D241E]/80 flex items-center gap-2">
                  <Car className="w-4 h-4 opacity-70 shrink-0" />
                  <span>Complimentary Valet Parking</span>
                </div>*/}
                <div className="p-3 bg-[#EADCCB]/20 rounded-xl border border-[#2D241E]/10 text-xs text-[#2D241E]/80 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 opacity-70 shrink-0" />
                  <span>Private Styling Lounge</span>
                </div>
              </div>

            </div>

            {/* Direct Directions Action */}
            <div className="pt-4 border-t border-[#2D241E]/10 flex flex-wrap gap-3 font-sans text-xs uppercase tracking-[0.15em]">
              <a
                id="google-maps-directions-btn"
                href={STORE_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 text-[#FDFBF7] bg-[#2D241E] hover:bg-[#43352B] rounded-full shadow-xs transition-all"
              >
                <Navigation className="w-3.5 h-3.5 opacity-80" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                id="call-store-directions-btn"
                href={`tel:${STORE_DETAILS.phonePrimary.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-5 text-[#2D241E] bg-[#EADCCB]/40 hover:bg-[#EADCCB] border border-[#2D241E]/10 rounded-full transition-all"
              >
                <Phone className="w-3.5 h-3.5 opacity-70" />
                <span>Call Concierge</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Representation Card */}
          <div className="lg:col-span-6 bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#2D241E]/10 shadow-xs flex flex-col justify-between">
            <div className="relative h-[260px] sm:h-[300px] w-full bg-[#EADCCB]/40 overflow-hidden">
              {/* Stylized Simulated Map Graphic */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#2D241E_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Decorative Roads / Grid */}
              <svg className="absolute inset-0 w-full h-full stroke-[#2D241E]/15 stroke-[1.5]" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="80" x2="100%" y2="80" />
                <line x1="0" y1="180" x2="100%" y2="180" />
                <line x1="120" y1="0" x2="120" y2="100%" />
                <line x1="280" y1="0" x2="280" y2="100%" />
                <path d="M 0 140 Q 200 120 400 220" fill="none" stroke="#2D241E" strokeWidth="2" strokeOpacity="0.25" />
              </svg>

              {/* Pin Center Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative p-3 bg-[#2D241E] text-[#FDFBF7] rounded-full shadow-md border border-[#FDFBF7]">
                  <MapPin className="w-5 h-5 text-[#FDFBF7]" />
                </div>
                <div className="mt-2 bg-[#FDFBF7] px-3.5 py-1.5 rounded-lg shadow-sm border border-[#2D241E]/10 text-center font-sans">
                  <span className="font-serif-luxury text-sm text-[#2D241E] block font-medium">
                    Bharni Boutique
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#2D241E]/60">Ramnagar, Cidco, Ch. Sambhajinagar</span>
                </div>
              </div>

              {/* Floating Map Label Badge */}
              <div className="absolute top-3 left-3 bg-[#FDFBF7]/90 backdrop-blur-xs px-3 py-1 rounded-full border border-[#2D241E]/10 text-[10px] uppercase tracking-[0.2em] font-sans text-[#2D241E]/70">
                Ramnagar, Aurangabad
              </div>
            </div>

            {/* In-store experience perks */}
            <div className="p-6 sm:p-7 space-y-4 font-sans">
              <h4 className="font-serif-luxury text-xl font-light text-[#2D241E]">
                What to Expect During Your Visit:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#2D241E]/70">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#2D241E] shrink-0 mt-0.5 opacity-60" />
                  <span>Individual saree draping on full-length mirrors</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#2D241E] shrink-0 mt-0.5 opacity-60" />
                  <span>Tactile fabric exploration across all weaves</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#2D241E] shrink-0 mt-0.5 opacity-60" />
                  <span>On-site blouse master consultation & measurements</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#2D241E] shrink-0 mt-0.5 opacity-60" />
                  <span>Complimentary fall, pico & tassel finishing</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
