// Ananya & Utsav - https://utsav1908.github.io/utsav-ananya-wedding/bride-wedding.html - Custom-coded (HTML/CSS/JS)

import type { WeddingWebsite } from "../types/WeddingSchema";

export const ananyaAndUtsavWedding: WeddingWebsite = {
  id: "ananya-and-utsav",

  couple: {
    partnerOne: "Ananya",
    partnerTwo: "Utsav",
    date: "2026-06-19",
    location: "Bhubaneswar, Odisha, India",
  },

  images: [
    {
      id: "hero",
      url: "https://utsav1908.github.io/utsav-ananya-wedding/hero.jpg",
      description: "Jagannath Temple, Bhubaneswar.",
    },
    {
      id: "bhubaneswar-skyline",
      url: "https://utsav1908.github.io/utsav-ananya-wedding/parallax.jpg",
      description: "Bhubaneswar skyline.",
    },
    {
      id: "gallery-one",
      url: "https://drive.google.com/thumbnail?id=12FcxqAYNA4ybAaiFAWLlx_PdldUUypxG&sz=w1200",
      description: "Ananya and Utsav.",
    },
    {
      id: "gallery-two",
      url: "https://drive.google.com/thumbnail?id=1iowk_1Hk31Z9EttP9R22De-O8YG75IWw&sz=w1200",
      description: "Ananya and Utsav.",
    },
    {
      id: "gallery-three",
      url: "https://drive.google.com/thumbnail?id=1h_X-GmWSJ7vdCpAyfEfz2CYygn1PQww0&sz=w1200",
      description: "Ananya and Utsav.",
    },
    {
      id: "gallery-four",
      url: "https://drive.google.com/thumbnail?id=1lGZrXIQmnn_QxDkfCq7XiF4u-Tg-6cJm&sz=w1200",
      description: "Ananya and Utsav.",
    },
  ],

  events: [
    {
      id: "wedding",
      type: "ceremony",
      name: "The Wedding",
      date: "2026-06-19",
      startTime: "20:00",
      endTime: "23:59",
      venue: {
        name: "Kokila Resort",
        address: "Bhubaneswar, Odisha, India",
        mapUrl: "https://maps.google.com/?q=Kokila+Resort+Bhubaneswar",
      },
      order: 1,
    },
  ],

  information: [
    {
      id: "invitation",
      type: "custom",
      name: "Ananya Weds Utsav",
      description:
        "॥ श्री जगन्नाथ स्वामी नयन पथ गामी भवतु मे ॥ Save the date: June 19, 2026, Bhubaneswar, Odisha.",
      imageIds: ["hero"],
      order: 1,
    },
    {
      id: "our-story",
      type: "our-story",
      name: "A Sacred Union",
      description:
        "In the Temple City of Bhubaneswar, surrounded by the echoes of ancient stones and the love of our families, we begin our forever. With the blessings of Lord Jagannath, we invite you to celebrate our union and witness the start of this beautiful chapter.",
      imageIds: ["bhubaneswar-skyline"],
      items: [
        {
          id: "sacred-beginnings",
          name: "Sacred Beginnings",
          description: "In the land of temples.",
        },
      ],
      order: 2,
    },
    {
      id: "families",
      type: "families",
      name: "Our Families",
      items: [
        {
          id: "ananya-family",
          name: "Ananya",
          description:
            "Daughter of Mrs. Sujaya Chand & Mr. Satyaranjan Chand.",
        },
        {
          id: "utsav-family",
          name: "Utsav",
          description: "Son of Mrs. Uma Gan & Mr. Sanjay Gan.",
        },
        {
          id: "blessings",
          name: "With the blessings of",
          description: "Mrs. Asima Dash & Mr. Nilamadhab Chand.",
        },
        {
          id: "brides-grandmother",
          name: "Mrs. Jayashree Mahatab",
          description:
            "Under the guidance of the bride's beloved grandmother.",
        },
        {
          id: "angel",
          name: "Angel",
          description: "The Bride's Forever Teammate.",
        },
      ],
      order: 3,
    },
    {
      id: "gallery",
      type: "gallery",
      name: "Our Gallery",
      items: [
        {
          id: "gallery-photo-one",
          name: "Ananya & Utsav",
          imageIds: ["gallery-one"],
        },
        {
          id: "gallery-photo-two",
          name: "Ananya & Utsav",
          imageIds: ["gallery-two"],
        },
        {
          id: "gallery-photo-three",
          name: "Ananya & Utsav",
          imageIds: ["gallery-three"],
        },
        {
          id: "gallery-photo-four",
          name: "Ananya & Utsav",
          imageIds: ["gallery-four"],
        },
      ],
      order: 4,
    },
    {
      id: "no-gifts",
      type: "custom",
      name: "No Gifts",
      description:
        "We kindly ask that you refrain from bringing a gift. Your presence and blessings are the greatest gift.",
      order: 5,
    },
    {
      id: "celebration-controls",
      type: "custom",
      name: "Celebration Controls",
      description: "Save the date and experience the invitation your way.",
      items: [
        {
          id: "save-date",
          name: "Save All Dates to Calendar",
          description:
            "Downloads a calendar entry for the wedding on June 19, 2026, from 8:00 PM to 11:59 PM at Kokila Resort, Bhubaneswar.",
        },
        {
          id: "languages",
          name: "Languages",
          description: "English, हिन्दी, বাংলা and ଓଡ଼ିଆ.",
        },
        {
          id: "background-music",
          name: "Background Music",
          description: "The invitation includes a background-music toggle.",
          url: "https://utsav1908.github.io/utsav-ananya-wedding/Khat.mp3",
        },
      ],
      order: 6,
    },
  ],

  settings: {
    title: "Ananya & Utsav",
    timezone: "Asia/Kolkata",
    primaryColor: "#642424",
    secondaryColor: "#B88645",
  },
};
