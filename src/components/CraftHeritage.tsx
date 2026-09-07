import React from 'react';
import { Award, Feather, Sparkles, Scissors, HeartHandshake, ShieldCheck } from 'lucide-react';
import { CRAFT_PILLARS } from '../data/storeData';

export const CraftHeritage: React.FC = () => {
  return (
    <section id="craft" className="py-20 md:py-28 bg-[#FDFBF7] border-t border-[#2D241E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs uppercase tracking-[0.4em] font-sans block text-[#2D241E]/60">
            Pillars of Integrity
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#2D241E]">
            Artisanship, Comfort & Fabric Craft
          </h2>
          <p className="text-sm sm:text-base text-[#2D241E]/70 font-normal leading-relaxed font-sans">
            At Bharni, every saree in our boutique is chosen for its authentic texture, breathable comfort, and meticulous finish — from handspun daily cottons to radiant celebration drapes.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CRAFT_PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              id={`craft-pillar-${index}`}
              className="bg-[#EADCCB]/20 rounded-2xl p-6 border border-[#2D241E]/10 hover:border-[#2D241E]/25 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#FDFBF7] border border-[#2D241E]/10 text-[#2D241E] flex items-center justify-center text-xs font-sans">
                    0{index + 1}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-sans px-2.5 py-1 rounded-md bg-[#FDFBF7] text-[#2D241E]/70 border border-[#2D241E]/10">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-xl font-light text-[#2D241E]">
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#2D241E]/70 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#2D241E]/5 flex items-center gap-1.5 text-xs text-[#2D241E]/70 font-sans">
                <ShieldCheck className="w-3.5 h-3.5 opacity-60" />
                <span>Heirloom Longevity</span>
              </div>
            </div>
          ))}
        </div>

        {/* Heritage Care Note */}
        <div className="mt-14 bg-[#EADCCB]/25 rounded-2xl p-8 border border-[#2D241E]/10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 space-y-2">
            <h4 className="font-serif-luxury text-2xl text-[#2D241E] font-light">
              The Art of Saree Preservation & Care
            </h4>
            <p className="text-xs sm:text-sm text-[#2D241E]/70 leading-relaxed font-sans">
              Proper care ensures your sarees stay vibrant for years. We provide custom breathable cotton storage bags and tailored fabric-care guidelines with every Bharni purchase.
            </p>
          </div>
          <div className="md:col-span-1 flex justify-start md:justify-end">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FDFBF7] border border-[#2D241E]/10 text-xs font-sans uppercase tracking-[0.15em] text-[#2D241E]">
              <Sparkles className="w-3.5 h-3.5 opacity-60" />
              <span>Cotton Saree Bag Included</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
