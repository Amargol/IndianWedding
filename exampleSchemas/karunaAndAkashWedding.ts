// Karuna & Akash - https://ksonone.github.io/indexx_wedding.html - Custom

import type { WeddingWebsite } from "../types/WeddingSchema";

export const karunaAndAkashWedding: WeddingWebsite = {
  id: "karuna-and-akash",

  couple: {
    partnerOne: "Karuna",
    partnerTwo: "Akash",
    date: "2024-02-11",
    location: "Amravati",
  },

  images: [
    {
      id: "couple-illustration",
      url: "https://ksonone.github.io/assets/images/3.jpg",
      description: "Illustration of Karuna and Akash",
    },
    {
      id: "invitation-illustration",
      url: "https://ksonone.github.io/assets/images/2.jpg",
      description: "Karuna and Akash wedding invitation illustration",
    },
    {
      id: "karuna",
      url: "https://ksonone.github.io/assets/images/bride.png",
      description: "Karuna",
    },
    {
      id: "akash",
      url: "https://ksonone.github.io/assets/images/groom.png",
      description: "Akash",
    },
  ],

  events: [
    {
      id: "paritran-pooja",
      type: "other",
      name: "Paritran Pooja",
      date: "2024-02-10",
      startTime: "12:00",
      order: 1,
    },
    {
      id: "bangles-ceremony",
      type: "other",
      name: "Bangles Ceremony",
      date: "2024-02-10",
      startTime: "15:00",
      order: 2,
    },
    {
      id: "haldi-ceremony",
      type: "haldi",
      name: "Haldi Ceremony",
      date: "2024-02-10",
      startTime: "19:00",
      order: 3,
    },
    {
      id: "wedding-ceremony",
      type: "ceremony",
      name: "Wedding Ceremony",
      description:
        "No wedding time is displayed. The page countdown and calendar link contain conflicting values, so no start or end time is recorded.",
      date: "2024-02-11",
      venue: {
        name: "Sakha Mangalam Marriage Hall",
        address: "Amravati",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=sakha%20mangalam%20marriage%20hall",
      },
      order: 4,
    },
  ],

  information: [
    {
      id: "invitation",
      type: "custom",
      name: "Wedding Invitation",
      description: "Two souls, two hearts, united as one!!!",
      imageIds: ["couple-illustration", "invitation-illustration"],
      items: [
        {
          id: "share-the-joy",
          name: "Share in the Joy",
          description: "invite you to share in the joy of their union.",
        },
        {
          id: "celebration-of-love",
          name: "Celebration of Love",
          description: "Please join us for the celebration of love.",
        },
        {
          id: "event-invitation",
          name: "Event Invitation",
          description:
            "With hearts full of joy and smiles that gleam, We invite you to join us for a ceremony so dreamy.",
        },
        {
          id: "golden-glow",
          name: "The Golden Glow",
          description:
            "We look forward to sharing laughter, love, and the warmth of the golden glow.",
        },
      ],
      order: 1,
    },
    {
      id: "families",
      type: "families",
      name: "Families",
      items: [
        {
          id: "karuna-family",
          name: "Karuna",
          description: "daughter of Mrs. Devkala & Mr. Hansraj Sonone",
          imageIds: ["karuna"],
        },
        {
          id: "akash-family",
          name: "Akash",
          description: "son of Mrs. Sunandatai & Late Purushottamrao Gawai",
          imageIds: ["akash"],
        },
      ],
      order: 2,
    },
    {
      id: "presence-as-gift",
      type: "custom",
      name: "Your Presence Is the Gift",
      description:
        "Your presence is the gift we cherish, So please come and sprinkle love as we flourish.",
      order: 3,
    },
    {
      id: "credits",
      type: "custom",
      name: "Credits",
      items: [
        {
          id: "background-music",
          name: "Background Music",
          url: "https://ksonone.github.io/assets/music/sathiya-kapil.mp3",
        },
        {
          id: "author-credit",
          name: "Build with love by Kapil",
          url: "https://github.com/ksonone/",
        },
      ],
      order: 4,
    },
  ],

  settings: {
    title: "Karuna and Akash's Wedding Invitation",
    timezone: "Asia/Kolkata",
    primaryColor: "#111111",
    secondaryColor: "#FF69B4",
  },
};
