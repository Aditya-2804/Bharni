import React from 'react';
import { X, MessageCircle, Calendar, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Saree, StoreDetails } from '../types';

interface SareeModalProps {
  saree: Saree | null;
  store: StoreDetails;
  onClose: () => void;
  onSelectForViewing: (sareeName: string) => void;
}

export const SareeModal: React.FC<SareeModalProps> = ({
  saree,
  store,
  onClose,
  onSelectForViewing,
}) => {
  if (!saree) return null;

  const whatsappMessage = `Hello Bharni Sarees, I am interested in inquiring about "${saree.name}" (${saree.categoryLabel}, ID: ${saree.id}). Could you please share availability and video/photos?`;

  return (
    <div
      id="saree-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2D241E]/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-[#FDFBF7] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-[#2D241E]/10 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-saree-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#2D241E]/60 hover:text-[#2D241E] bg-[#FDFBF7] hover:bg-[#EADCCB]/40 rounded-full border border-[#2D241E]/10 transition-colors focus:outline-none"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          {/* Left Column: Saree Imagery */}
          <div className="md:col-span-6 space-y-4">
            <div className="rounded-xl overflow-hidden bg-[#EADCCB] border border-[#2D241E]/10">
              <img
                src={saree.image}
                alt={saree.name}
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[420px] object-cover object-center"
              />
            </div>

            {/* Micro Badges */}
            <div className="flex items-center justify-between px-2 text-xs text-[#2D241E]/60 font-sans">
              <span className="flex items-center gap-1 font-medium text-[#2D241E]">
                <ShieldCheck className="w-4 h-4 text-[#2D241E]/80" />
                {saree.badge || 'Verified Fabric Quality'}
              </span>
              <span className="italic text-[#2D241E]/60">Artisan Handcrafted</span>
            </div>

            {/* Craft Story Quote */}
            <div className="p-4 bg-[#EADCCB]/25 rounded-xl border border-[#2D241E]/10 text-xs text-[#2D241E]/80 leading-relaxed font-sans">
              <span className="font-medium text-[#2D241E] block mb-1">Artisan Heritage</span>
              "{saree.craftStory}"
            </div>
          </div>
          

          {/* Right Column: Saree Specifications */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1.5 font-sans">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-[0.2em] bg-[#EADCCB]/50 text-[#2D241E] border border-[#2D241E]/10">
                  {saree.categoryLabel}
                </span>
                <span className="text-xs text-[#2D241E]/60">
                  {saree.length}
                </span>
              </div>

              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#2D241E] font-light leading-snug">
                {saree.name}
              </h2>
              <p className="text-xs font-sans uppercase tracking-[0.2em] text-[#2D241E]/60 mt-1">
                {saree.tagline}
              </p>

              <div className="mt-3 text-lg font-semibold text-[#2D241E] font-sans">
                {saree.priceRange}
                <span className="text-xs font-normal text-[#2D241E]/60 ml-2">
                  (Includes taxes & unstitched blouse)
                </span>
              </div>

              <p className="mt-3 text-sm text-[#2D241E]/75 leading-relaxed border-b border-[#2D241E]/10 pb-4 font-sans">
                {saree.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="mt-4 space-y-2 text-xs font-sans">
                <div className="grid grid-cols-3 gap-1 py-1 border-b border-[#2D241E]/5">
                  <span className="font-medium text-[#2D241E]">Fabric:</span>
                  <span className="col-span-2 text-[#2D241E]/70">{saree.fabric}</span>
                </div>
                <div className="grid grid-cols-3 gap-1 py-1 border-b border-[#2D241E]/5">
                  <span className="font-medium text-[#2D241E]">Weave Technique:</span>
                  <span className="col-span-2 text-[#2D241E]/70">{saree.weave}</span>
                </div>
                <div className="grid grid-cols-3 gap-1 py-1 border-b border-[#2D241E]/5">
                  <span className="font-medium text-[#2D241E]">Zari:</span>
                  <span className="col-span-2 text-[#2D241E]/70">{saree.zariType}</span>
                </div>
                <div className="grid grid-cols-3 gap-1 py-1 border-b border-[#2D241E]/5">
                  <span className="font-medium text-[#2D241E]">Color:</span>
                  <span className="col-span-2 text-[#2D241E]/70 flex items-center gap-1.5">
                    <span
                      className="w-3 h-3 rounded-full border border-[#2D241E]/20 inline-block"
                      style={{ backgroundColor: saree.colorHex }}
                    />
                    {saree.color}
                  </span>
                </div>
                {/*<div className="grid grid-cols-3 gap-1 py-1 border-b border-[#2D241E]/5">
                  <span className="font-medium text-[#2D241E]">Available Colors:</span>
                  <div className="col-span-2 text-[#2D241E]/70 flex flex-wrap items-center gap-x-3 gap-y-1">
                    {saree.availableColors.map((item, index) => (
                      <span key={index} className="flex items-center gap-1.5">
                        <span
                          className="w-3 h-3 rounded-full border border-[#2D241E]/20 inline-block"
                          style={{ backgroundColor: item.hex }}
                        />
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>*/}
                <div className="grid grid-cols-3 gap-1 py-1 border-b border-[#2D241E]/5">
                  <span className="font-medium text-[#2D241E]">Available Colors:</span>
                    <div className="col-span-2 flex flex-wrap items-center gap-2.5 py-1">
                      {saree.availableColors.map((item, index) => (
                      <div key={index} className="relative group flex items-center">
                        {/* Floating Tooltip */}
                        <div className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center pointer-events-none z-10">
                          <span className="bg-[#2D241E] text-white text-[10px] whitespace-nowrap px-2 py-0.5 rounded shadow-md">
                          {item.name}
                          </span>
                            <span className="w-1.5 h-1.5 bg-[#2D241E] rotate-45 -mt-1" />
                        </div>

                          {/* Color Dot */}
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-[#2D241E]/20 inline-block transition-transform duration-150 group-hover:scale-125 cursor-pointer"
                          style={{ backgroundColor: item.hex }}
                        />
                      </div>
                      ))}
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 py-1 border-b border-[#2D241E]/5">
                  <span className="font-medium text-[#2D241E]">Blouse Piece:</span>
                  <span className="col-span-2 text-[#2D241E]/70">{saree.blouseIncluded}</span>
                </div>
                <div className="grid grid-cols-3 gap-1 py-1 border-b border-[#2D241E]/5">
                  <span className="font-medium text-[#2D241E]">Occasions:</span>
                  <span className="col-span-2 text-[#2D241E]/70">
                    {saree.occasion.join(' • ')}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1 py-1">
                  <span className="font-medium text-[#2D241E]">Care:</span>
                  <span className="col-span-2 text-[#2D241E]/70 italic">{saree.careInstructions}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2 border-t border-[#2D241E]/10 font-sans text-xs uppercase tracking-[0.15em]">
              <a
                id="modal-whatsapp-inquiry-btn"
                href={`https://wa.me/${store.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-[#FDFBF7] bg-[#2D241E] hover:bg-[#43352B] rounded-xl transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 opacity-80" />
                <span>Inquire on WhatsApp</span>
              </a>

              <button
                id="modal-book-viewing-btn"
                onClick={() => {
                  onSelectForViewing(saree.name);
                  onClose();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-[#2D241E] bg-[#EADCCB]/40 hover:bg-[#EADCCB] border border-[#2D241E]/10 rounded-xl transition-all"
              >
                <Calendar className="w-4 h-4 text-[#2D241E]/70" />
                <span>Schedule In-Store Viewing</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
