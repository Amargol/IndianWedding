// Anumeha & Shikhar - https://www.theknot.com/us/anumeha-pandey-and-shikhar-tiwari-nov-2025 - The Knot

import type { WeddingWebsite } from "../types/WeddingSchema";

export const anumehaAndShikharWedding: WeddingWebsite = {
  id: "anumeha-and-shikhar",

  couple: {
    partnerOne: "Anumeha Pandey",
    partnerTwo: "Shikhar Tiwari",
    date: "2025-11-22",
    location: "Varanasi, Uttar Pradesh, India",
  },

  images: [
    {
      id: "hero",
      url: "https://www.theknot.com/tk-media/images/cdce21d9-4a01-4379-87c7-6e16b804d38c",
      description: "Anumeha and Shikhar",
    },
    {
      id: "gallery-one",
      url: "https://media-api.xogrp.com/images/6c4657f5-c127-4126-a062-d0e1147a0ea2",
    },
    {
      id: "gallery-two",
      url: "https://media-api.xogrp.com/images/605c0365-b86f-476f-b7f8-d2b193082678",
    },
    {
      id: "gallery-three",
      url: "https://media-api.xogrp.com/images/3f4634f8-25be-45fc-a0b6-362d0fd8b0bf",
    },
  ],

  events: [
    {
      id: "haldi-and-sangeet",
      type: "sangeet",
      name: "Pre Wedding - Haldi & Sangeet",
      description:
        "The Haldi is an intimate ritual where turmeric, sandalwood, rose water, and sometimes mustard oil or milk are applied by close family and friends. The Sangeet is an evening of music, dance, and celebration.",
      date: "2025-11-21",
      startTime: "16:00",
      endTime: "21:00",
      order: 1,
    },
    {
      id: "baraat",
      type: "baraat",
      name: "Baraat",
      description:
        "The groom's procession makes a grand entrance with family and friends dancing and celebrating. The event card starts at 5:00 PM, while its note says the Baraat leaves the groom's house at 6:00 PM.",
      date: "2025-11-22",
      startTime: "17:00",
      endTime: "19:00",
      venue: {
        name: "Groom's House",
        address: "N 16/95-5 Vinayaka, Varanasi, Uttar Pradesh, India",
        mapUrl: "https://maps.app.goo.gl/mXgJEst1jxcfCKpP9",
      },
      order: 2,
    },
    {
      id: "jai-mala",
      type: "ceremony",
      name: "Jai Mala",
      description:
        "The bride and groom exchange flower garlands at the start of the wedding ceremony, after which guests greet them and take photos.",
      date: "2025-11-22",
      startTime: "20:00",
      endTime: "22:00",
      venue: {
        name: "Hotel Sarnath International",
        address: "Varanasi, Uttar Pradesh, India",
        mapUrl: "https://maps.app.goo.gl/LfGNNSXUTUmgxDZu5",
      },
      order: 3,
    },
    {
      id: "wedding-ceremony",
      type: "ceremony",
      name: "Wedding Day 2 - Ceremony",
      description:
        "The couple takes their vows and ties their souls together in the presence of fire, family, and the divine.",
      date: "2025-11-23",
      startTime: "00:00",
      endTime: "05:00",
      venue: {
        name: "Hotel Sarnath International",
        address: "Varanasi, Uttar Pradesh, India",
        mapUrl: "https://maps.app.goo.gl/LfGNNSXUTUmgxDZu5",
      },
      order: 4,
    },
  ],

  information: [
    {
      id: "our-story",
      type: "our-story",
      name: "Journey so far...",
      description:
        "Anumeha and Shikhar met in January 2024 at the end of a long train journey. Despite busy lives across the world, late-night and early-morning coffee calls kept them connected as their bond and love grew. In the summer of 2025 they sealed their story with a ring and a promise and prepared to begin forever with their loved ones.",
      order: 1,
    },
    {
      id: "gallery",
      type: "gallery",
      name: "Photos",
      imageIds: ["gallery-one", "gallery-two", "gallery-three"],
      order: 2,
    },
  ],

  settings: {
    title: "Anumeha weds Shikhar",
    timezone: "Asia/Kolkata",
  },
};
