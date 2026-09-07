import React from 'react';
import { Phone, Mail, MapPin, Sparkles, Heart, ShieldCheck } from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#2D241E] text-[#FDFBF7] pt-16 pb-12 border-t border-[#2D241E]/10 text-left font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FDFBF7]/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif-luxury text-3xl font-light tracking-[0.15em] text-[#FDFBF7]">
                BHARNI
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#EADCCB] font-medium">
              Curated Handlooms, Cottons, Organzas & Festive Sarees
            </p>
            <p className="text-xs text-[#FDFBF7]/70 leading-relaxed max-w-sm">
              Celebrating the richness of Indian weaves. Offering a curated selection of breathable handloom cottons, pure linens, gossamer organzas, flowy georgettes, and vibrant festive drapes.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#EADCCB] font-normal pt-1">
              <ShieldCheck className="w-4 h-4 opacity-70" />
              <span>Authentic Handcrafted Weaves & Verified Fabrics</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-lg text-[#FDFBF7] font-light tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#FDFBF7]/70">
              <li>
                <a href="#gallery" className="hover:text-[#FDFBF7] transition-colors">
                  Curated Gallery
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-[#FDFBF7] transition-colors">
                  Handloom Craft & Authenticity
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#FDFBF7] transition-colors">
                  Boutique Location & Hours
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FDFBF7] transition-colors">
                  Concierge Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Snapshot Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif-luxury text-lg text-[#FDFBF7] font-light tracking-wide">
              Address & Contact
            </h4>
            <div className="space-y-2 text-xs text-[#FDFBF7]/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 opacity-60 shrink-0 mt-0.5" />
                <span>{STORE_DETAILS.addressLine1}, {STORE_DETAILS.addressLine2}, {STORE_DETAILS.cityStateZip}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 opacity-60 shrink-0" />
                <a href={`tel:${STORE_DETAILS.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-[#FDFBF7]">
                  {STORE_DETAILS.phonePrimary} / {STORE_DETAILS.phoneSecondary}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 opacity-60 shrink-0" />
                <a href={`mailto:${STORE_DETAILS.email}`} className="hover:text-[#FDFBF7]">
                  {STORE_DETAILS.email}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#EADCCB] block font-medium">
                Visiting Hours:
              </span>
              <span className="text-xs text-[#FDFBF7]/70">
                {STORE_DETAILS.timings.weekdays} • Sunday Open
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FDFBF7]/50 gap-4">
          <p>
            © {new Date().getFullYear()} Bharni. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span>Handwoven for discerning connoisseurs</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
