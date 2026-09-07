export interface ColorOption {
  hex: string;
  name: string;
};

export interface Saree {
  id: string;
  name: string;
  category: 'cotton-linen' | 'organza' | 'georgette-chiffon' | 'silk' | 'festive' | string;
  categoryLabel: string;
  tagline: string;
  description: string;
  fabric: string;
  weave: string;
  zariType: string;
  color: string;
  colorHex: string;
  availableColors: ColorOption[];
  occasion: string[];
  blouseIncluded: string;
  length: string;
  careInstructions: string;
  priceRange: string;
  image: string;
  featured?: boolean;
  craftStory: string;
  badge?: string;
}

export interface StoreDetails {
  name: string;
  tagline: string;
  addressLine1: string;
  addressLine2: string;
  landmark: string;
  cityStateZip: string;
  phonePrimary: string;
  phoneSecondary: string;
  whatsappNumber: string;
  email: string;
  timings: {
    weekdays: string;
    weekends: string;
    note: string;
  };
  mapsUrl: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  sareeInterest: string;
  visitDate?: string;
  message: string;
}
