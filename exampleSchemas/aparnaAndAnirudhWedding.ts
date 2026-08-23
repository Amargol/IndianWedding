// Aparna & Anirudh - https://www.zola.com/wedding/aparnaandanirudh - Zola

import type { WeddingWebsite } from "../types/WeddingSchema";

export const aparnaAndAnirudhWedding: WeddingWebsite = {
  id: "aparna-and-anirudh",

  couple: {
    partnerOne: "Aparna Nanda",
    partnerTwo: "Anirudh Raju",
    date: "2024-01-22",
    location: "Bangalore, Karnataka, India",
  },

  images: [
    {
      id: "schedule",
      url: "https://images.zola.com/f509cdc6-07b5-4469-a11b-9e7d1998e634?w=1500",
      description: "Aparna and Anirudh's wedding schedule",
    },
  ],

  events: [
    {
      id: "mehendi-and-sangeet",
      type: "sangeet",
      name: "Mehendi followed by Sangeet",
      date: "2024-01-20",
      startTime: "14:30",
      endTime: "21:30",
      venue: {
        name: "The Tamarind Tree",
        address:
          "88 Avalahalli Kanakapura Road, Bengaluru, Karnataka 560108, India",
        mapUrl: "https://maps.google.com/?cid=3385633555102173703",
      },
      dressCode:
        "Shimmer and shine: dress festively in attire that allows easy movement and dancing.",
      order: 1,
    },
    {
      id: "haldi",
      type: "haldi",
      name: "Haldi",
      date: "2024-01-21",
      startTime: "11:00",
      endTime: "12:00",
      venue: {
        name: "The Tamarind Tree",
        address:
          "88 Avalahalli Kanakapura Road, Bengaluru, Karnataka 560108, India",
        mapUrl: "https://maps.google.com/?cid=3385633555102173703",
      },
      dressCode:
        "Splash and smile: light-colored casual ethnic wear for the Haldi vibe.",
      order: 2,
    },
    {
      id: "reception",
      type: "reception",
      name: "Reception",
      date: "2024-01-21",
      startTime: "18:00",
      endTime: "21:30",
      venue: {
        name: "The Tamarind Tree",
        address:
          "88 Avalahalli Kanakapura Road, Bengaluru, Karnataka 560108, India",
        mapUrl: "https://maps.google.com/?cid=3385633555102173703",
      },
      dressCode:
        "Tradition meets tuxedo: Indian ethnic or timeless formal attire.",
      order: 3,
    },
    {
      id: "wedding",
      type: "ceremony",
      name: "Wedding",
      date: "2024-01-22",
      startTime: "08:00",
      endTime: "11:00",
      venue: {
        name: "The Tamarind Tree",
        address:
          "88 Avalahalli Kanakapura Road, Bengaluru, Karnataka 560108, India",
        mapUrl: "https://maps.google.com/?cid=3385633555102173703",
      },
      dressCode:
        "Divine drapes for sacred moments: Indian ethnic attire for the Muhurtam.",
      order: 4,
    },
  ],

  information: [
    {
      id: "our-story",
      type: "our-story",
      name: "Our Story",
      items: [
        {
          id: "our-journey-video",
          name: "Our journey so far",
          url: "https://www.youtube.com/embed/1gFQtEMPnW8",
        },
      ],
      order: 1,
    },
    {
      id: "travel",
      type: "travel",
      name: "Travel",
      items: [
        {
          id: "cab-services",
          name: "Cab Services",
          description: "Guests can use Uber, Meru Cabs, or Ola.",
        },
        {
          id: "bengaluru-airport",
          name: "Kempegowda International Airport Bengaluru",
          description: "Airport code BLR.",
          url: "https://www.bengaluruairport.com/",
        },
      ],
      order: 2,
    },
    {
      id: "registry",
      type: "registry",
      name: "Registry",
      description:
        "The couple says their guests' presence, warmth, blessings, and shared memories are the most cherished gift. For anyone who insists, they created a travel fund for future adventures.",
      items: [
        {
          id: "travel-fund",
          name: "Travel Fund",
          url: "https://www.zola.com/wedding/aparnaandanirudh/registry",
        },
      ],
      order: 3,
    },
    {
      id: "faq",
      type: "faq",
      name: "FAQs",
      items: [
        {
          id: "attire-guidelines",
          name: "Do I need to follow the attire guidelines?",
          description:
            "No. Comfort and fun come first, so guests can wear whatever makes them feel at ease.",
        },
        {
          id: "food-and-drinks",
          name: "Will there be food and drinks at each event?",
          description:
            "Yes. A special menu was curated for every event, with something to sip and savor.",
        },
        {
          id: "mehendi-sangeet-timings",
          name: "What are the timings for the Mehendi and Sangeet events?",
          description:
            "The FAQ says Mehendi runs from 3:30 PM to 5:00 PM, followed by a one-hour break, and Sangeet begins at 6:00 PM. The combined schedule card separately lists the event from 2:30 PM to 9:30 PM.",
        },
      ],
      order: 4,
    },
  ],

  settings: {
    title: "Aparna & Anirudh are tying the knot",
    timezone: "Asia/Kolkata",
  },
};
