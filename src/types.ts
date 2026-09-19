export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  label?: string;
  size: 'large' | 'medium' | 'small';
}

export interface HotelInfo {
  name: string;
  hindiName: string;
  category: string;
  address: {
    line1: string;
    line2: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    fullFormatted: string;
  };
  googleRating: {
    score: number;
    maxScore: number;
    reviewCount: number;
  };
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  developerCredit: {
    name: string;
    websiteLabel: string;
    whatsapp: string;
    whatsappFormatted: string;
    phone: string;
    phoneFormatted: string;
  };
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  message: string;
}
