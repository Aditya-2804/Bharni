import React, { useState, useMemo } from 'react';
import { Sparkles, Eye, MessageCircle, Filter, Search, Check } from 'lucide-react';
import { SAREE_COLLECTION, STORE_DETAILS } from '../data/storeData';
import { Saree } from '../types';

interface GalleryProps {
  onSelectSaree: (saree: Saree) => void;
  onBookSareeViewing: (sareeName: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectSaree }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Sarees' },
    { id: 'cotton-linen', label: 'Cotton & Linen' },
    { id: 'organza', label: 'Sheer Organza' },
    { id: 'georgette-chiffon', label: 'Georgette & Chiffon' },
    // { id: 'chanderi', label: 'Chanderi & Blends' },
    { id: 'festive', label: 'Festive & Celebration' },
    { id: 'daily', label: 'Everyday Luxury' },
    { id: 'silk', label: 'Silk' },
  ];

  const filteredSarees = useMemo(() => {
    return SAREE_COLLECTION.filter((saree) => {
      const matchesCategory =
        selectedCategory === 'all' || saree.category === selectedCategory;
      const matchesSearch =
        saree.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        saree.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
        saree.occasion.some((o) => o.toLowerCase().includes(searchQuery.toLowerCase())) ||
        saree.color.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FDFBF7] border-t border-[#2D241E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-[0.4em] font-sans block text-[#2D241E]/60">
            Curated Styles
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#2D241E]">
            The Saree Collection
          </h2>
          <p className="text-sm sm:text-base text-[#2D241E]/70 font-normal leading-relaxed">
            From breathable daily handloom cottons and breezy linens to featherlight organzas, flowing georgettes, and vibrant festive drapes — explore sarees crafted for every mood, comfort, and occasion.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-tab-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#2D241E] text-[#FDFBF7] shadow-xs'
                    : 'bg-[#EADCCB]/30 text-[#2D241E]/70 hover:text-[#2D241E] hover:bg-[#EADCCB]/60 border border-[#2D241E]/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 text-[#2D241E]/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="saree-search-input"
              type="text"
              placeholder="Search fabrics, colors, occasions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#FDFBF7] border border-[#2D241E]/15 rounded-full text-xs text-[#2D241E] placeholder-[#2D241E]/40 focus:outline-none focus:border-[#2D241E]"
            />
          </div>
        </div>

        {/* Sarees Grid */}
        {filteredSarees.length === 0 ? (
          <div className="text-center py-16 bg-[#EADCCB]/20 rounded-2xl border border-[#2D241E]/10 max-w-md mx-auto p-8">
            <p className="text-sm text-[#2D241E]/70 font-medium">
              No weaves matching your search criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 text-xs uppercase tracking-[0.2em] font-sans text-[#FDFBF7] bg-[#2D241E] rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSarees.map((saree) => (
              <div
                key={saree.id}
                id={`saree-card-${saree.id}`}
                className="group bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#2D241E]/10 hover:border-[#2D241E]/30 transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-[#EADCCB]">
                    <img
                      src={saree.image}
                      alt={saree.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    />

                    {/* Category Overlay */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-3 py-1 rounded-full text-[9px] font-sans uppercase tracking-[0.25em] bg-[#FDFBF7]/90 backdrop-blur-xs text-[#2D241E] border border-[#2D241E]/10">
                        {saree.categoryLabel}
                      </span>
                    </div>

                    {/* Quick view hover action */}
                    <div className="absolute inset-0 bg-[#2D241E]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        id={`quickview-btn-${saree.id}`}
                        onClick={() => onSelectSaree(saree)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FDFBF7] text-[#2D241E] rounded-full text-xs uppercase tracking-[0.15em] font-sans shadow-md hover:bg-white transition-all transform translate-y-2 group-hover:translate-y-0"
                      >
                        <Eye className="w-3.5 h-3.5 opacity-70" />
                        <span>Inspect Weave</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#2D241E]/60 flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block border border-[#2D241E]/20"
                          style={{ backgroundColor: saree.colorHex }}
                        />
                        {saree.color}
                      </span>
                      <span className="text-xs font-semibold text-[#2D241E]">
                        {saree.priceRange}
                      </span>
                    </div>

                    <h3 className="font-serif-luxury text-xl font-light text-[#2D241E] group-hover:opacity-80 transition-opacity leading-snug">
                      {saree.name}
                    </h3>

                    <p className="text-xs text-[#2D241E]/70 line-clamp-2 leading-relaxed font-sans">
                      {saree.description}
                    </p>

                    {/* Spec tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5 text-[10px] text-[#2D241E]/70 font-sans">
                      <span className="bg-[#EADCCB]/30 px-2 py-0.5 rounded-md border border-[#2D241E]/10">
                        {saree.weave}
                      </span>
                      <span className="bg-[#EADCCB]/30 px-2 py-0.5 rounded-md border border-[#2D241E]/10">
                        {saree.zariType.split('(')[0].trim()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-3 border-t border-[#2D241E]/5 flex items-center justify-between gap-2">
                  <button
                    id={`view-details-${saree.id}`}
                    onClick={() => onSelectSaree(saree)}
                    className="text-xs font-sans uppercase tracking-[0.15em] text-[#2D241E] hover:opacity-70 flex items-center gap-1 py-1"
                  >
                    <span>Full Details</span>
                    <Eye className="w-3.5 h-3.5 opacity-60" />
                  </button>

                  <a
                    id={`whatsapp-inquiry-${saree.id}`}
                    href={`https://wa.me/${STORE_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello Bharni Sarees, I want to inquire about "${saree.name}". Is this piece available for in-store viewing or video call?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EADCCB]/50 hover:bg-[#EADCCB] border border-[#2D241E]/10 text-[#2D241E] rounded-full text-xs font-sans uppercase tracking-[0.15em] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 opacity-70" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footnote */}
        <div className="mt-14 text-center p-5 bg-[#EADCCB]/20 rounded-2xl border border-[#2D241E]/10 max-w-2xl mx-auto text-xs text-[#2D241E]/70 font-sans">
          <span className="font-medium text-[#2D241E]">Looking for a specific fabric, drape, or color palette?</span>{' '}
          Visit our Ramnagar, Cidco boutique to explore hundreds of unlisted sarees across all textures, with complimentary fall-pico and blouse matching assistance.
        </div>

      </div>
    </section>
  );
};
