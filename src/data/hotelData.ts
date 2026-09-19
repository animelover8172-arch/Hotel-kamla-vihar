import { GalleryImage, HotelInfo } from '../types';

export const HOTEL_DATA: HotelInfo = {
  name: "Hotel Kamla Vihar",
  hindiName: "होटल कमला विहार",
  category: "Hotel",
  address: {
    line1: "Ward Number 16",
    line2: "Vimla Pipe House and Company",
    locality: "Anwari",
    city: "Mohania",
    state: "Bihar",
    pincode: "821109",
    fullFormatted: "Ward Number 16, Vimla Pipe House and Company, Anwari, Mohania, Bihar 821109",
  },
  googleRating: {
    score: 5.0,
    maxScore: 5,
    reviewCount: 2,
  },
  // Real Google Maps direct URL pointing to the business address
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Kamla+Vihar+Ward+Number+16+Vimla+Pipe+House+and+Company+Anwari+Mohania+Bihar+821109",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Hotel%20Kamla%20Vihar%20Ward%20Number%2016%20Vimla%20Pipe%20House%20Anwari%20Mohania%20Bihar%20821109&t=&z=15&ie=UTF8&iwloc=&output=embed",
  developerCredit: {
    name: "RoadsideDeveloper",
    websiteLabel: "🌐 Designed & Developed by RoadsideDeveloper",
    whatsapp: "+917654224826",
    whatsappFormatted: "+91 7654224826",
    phone: "+918405918172",
    phoneFormatted: "+91 8405918172",
  },
};

export const HERO_IMAGE = {
  src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
  alt: "Hotel Kamla Vihar - Warm architectural view in Mohania, Bihar",
};

export const INTRO_IMAGE = {
  src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  alt: "Hotel Kamla Vihar - Welcoming hospitality space in Anwari, Mohania",
};

export const ROOM_PREVIEW_IMAGES = [
  {
    id: "room-1",
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    alt: "Hotel Kamla Vihar - Accommodation space",
    title: "Comfortable Accommodation",
  },
  {
    id: "room-2",
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
    alt: "Hotel Kamla Vihar - Clean restful space",
    title: "Restful Environment",
  },
  {
    id: "room-3",
    src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80",
    alt: "Hotel Kamla Vihar - Room overview",
    title: "Guest Room Overview",
  }
];

// Gallery layout: 1 large image, 2 medium images, 4 smaller images
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "gal-1",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    alt: "Hotel Kamla Vihar property perspective",
    label: "Property View",
    size: "large",
  },
  {
    id: "gal-2",
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    alt: "Hotel Kamla Vihar guest room",
    label: "Accommodation",
    size: "medium",
  },
  {
    id: "gal-3",
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    alt: "Hotel Kamla Vihar reception and entryway",
    label: "Entryway & Reception",
    size: "medium",
  },
  {
    id: "gal-4",
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    alt: "Hotel Kamla Vihar restful room setting",
    label: "Rest Space",
    size: "small",
  },
  {
    id: "gal-5",
    src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
    alt: "Hotel Kamla Vihar neat interior space",
    label: "Room Details",
    size: "small",
  },
  {
    id: "gal-6",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    alt: "Hotel Kamla Vihar architectural perspective",
    label: "Exterior Architecture",
    size: "small",
  },
  {
    id: "gal-7",
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
    alt: "Hotel Kamla Vihar peaceful seating area",
    label: "Quiet Seating",
    size: "small",
  },
];
