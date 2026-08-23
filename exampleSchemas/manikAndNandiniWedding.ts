// Manik & Nandini - https://manik3112.github.io/wedding/ - Custom-coded (HTML/CSS/JS)

import type { WeddingWebsite } from "../types/WeddingSchema";

export const manikAndNandiniWedding: WeddingWebsite = {
  id: "manik-and-nandini",

  couple: {
    partnerOne: "Manik Rastogi",
    partnerTwo: "Nandini Gautam",
    date: "2026-03-14",
    location: "Moradabad, Uttar Pradesh, India",
  },

  images: [
    {
      id: "wedding-hero",
      url: "https://manik3112.github.io/wedding/assets/images/slider-1.jpg",
      description: "The hero image for Manik and Nandini's wedding website.",
    },
    {
      id: "reception-event-image",
      url: "https://manik3112.github.io/wedding/assets/images/event-5.jpg",
      description: "Wedding reception event image.",
    },
    {
      id: "manik",
      url: "https://manik3112.github.io/wedding/assets/images/couple-1.jpg",
      description: "Manik Rastogi.",
    },
    {
      id: "nandini",
      url: "https://manik3112.github.io/wedding/assets/images/couple-2.jpg",
      description: "Nandini Gautam.",
    },
  ],

  events: [
    {
      id: "wedding-reception",
      type: "reception",
      name: "Wedding Reception",
      date: "2026-03-14",
      startTime: "20:00",
      venue: {
        name: "The White House",
        address:
          "Sector 6A, Buddhi Vihar Phase 2, Moradabad, Uttar Pradesh 244103",
        mapUrl: "https://maps.app.goo.gl/SqAoFYdtBZN6SbzT8",
      },
      imageIds: ["reception-event-image"],
      order: 1,
    },
  ],

  information: [
    {
      id: "invitation",
      type: "custom",
      name: "Manik & Nandini",
      description: "WE ARE MARRIED — 14th March 2026.",
      imageIds: ["wedding-hero"],
      order: 1,
    },
    {
      id: "couple-profiles",
      type: "custom",
      name: "Lovely Couple",
      items: [
        {
          id: "manik-rastogi",
          name: "Manik Rastogi",
          description:
            "A calm thinker with a warm heart, Manik believes in building life with purpose and sincerity. Grounded, dependable, and quietly thoughtful, he values meaningful connections, shared laughter, and growing together through every chapter of life.",
          imageIds: ["manik"],
          url: "https://www.instagram.com/manik3112/",
        },
        {
          id: "nandini-gautam",
          name: "Nandini Gautam",
          description:
            "Graceful, strong, and full of warmth, Nandini brings light wherever she goes. With a caring soul and an infectious smile, she believes in love, family, and creating a home filled with happiness, kindness, and joy.",
          imageIds: ["nandini"],
        },
      ],
      order: 2,
    },
    {
      id: "families",
      type: "families",
      name: "Rastogis' & Gautams'",
      order: 3,
    },
  ],

  settings: {
    title: "Manik & Nandini",
    timezone: "Asia/Kolkata",
  },
};
