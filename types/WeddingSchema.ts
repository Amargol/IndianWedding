export type WeddingWebsite = {
  id: string;

  couple: {
    partnerOne: string;
    partnerTwo: string;
    date: string;
    location?: string;
  };

  images: WeddingImage[];
  events: WeddingEvent[];
  information: WeddingInformation[];

  settings?: {
    title?: string;
    timezone?: string;
    primaryColor?: string;
    secondaryColor?: string;
  };
};

export type WeddingImage = {
  id: string;
  url: string;
  description?: string;
};

export type WeddingEventType =
  | "welcome-party"
  | "mehndi"
  | "haldi"
  | "sangeet"
  | "garba"
  | "baraat"
  | "ceremony"
  | "reception"
  | "after-party"
  | "brunch"
  | "other";

export type WeddingEvent = {
  id: string;
  type: WeddingEventType;
  name: string;
  description?: string;

  date: string;
  startTime?: string;
  endTime?: string;

  venue?: {
    name: string;
    address?: string;
    mapUrl?: string;
  };

  dressCode?: string;
  transportation?: string;

  imageIds?: string[];
  order?: number;
};

export type WeddingInformationType =
  | "our-story"
  | "families"
  | "wedding-party"
  | "traditions"
  | "dress-code"
  | "travel"
  | "accommodations"
  | "transportation"
  | "things-to-do"
  | "registry"
  | "faq"
  | "contact"
  | "gallery"
  | "custom";

export type WeddingInformation = {
  id: string;
  type: WeddingInformationType;
  name: string;
  description?: string;

  imageIds?: string[];
  items?: WeddingInformationItem[];
  order?: number;
};

export type WeddingInformationItem = {
  id: string;
  name: string;
  description?: string;
  imageIds?: string[];
  url?: string;
};