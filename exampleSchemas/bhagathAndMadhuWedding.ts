// Bhagath & Madhu - https://love-at-penn.github.io/ - Custom-coded (HTML/CSS/JS)

import type { WeddingWebsite } from "../types/WeddingSchema";

export const bhagathAndMadhuWedding: WeddingWebsite = {
  id: "bhagath-and-madhu",

  couple: {
    partnerOne: "Bhagath",
    partnerTwo: "Madhu",
    date: "2025-02-07",
    location: "Hyderabad Region, Telangana, India",
  },

  images: [
    {
      id: "hero",
      url: "https://love-at-penn.github.io/assets/images/bg.png",
      description: "Bhagath and Madhu",
    },
    {
      id: "bhagath",
      url: "https://love-at-penn.github.io/assets/images/cowo.png",
      description: "Bhagath",
    },
    {
      id: "madhu",
      url: "https://love-at-penn.github.io/assets/images/cewe.png",
      description: "Madhu",
    },
    {
      id: "gallery-proposal",
      url: "https://love-at-penn.github.io/assets/images/portrait/Proposal2.jpg",
      description: "Bhagath and Madhu",
    },
    {
      id: "gallery-portrait",
      url: "https://love-at-penn.github.io/assets/images/portrait/1.jpg",
      description: "Bhagath and Madhu",
    },
    {
      id: "gallery-engagement",
      url: "https://love-at-penn.github.io/assets/images/portrait/E1.jpg",
      description: "Bhagath and Madhu",
    },
  ],

  events: [
    {
      id: "wedding",
      type: "ceremony",
      name: "Wedding",
      description: "Muhurtam",
      date: "2025-02-07",
      startTime: "11:45",
      venue: {
        name: "GMR Convention Center",
        address: "Patancheruvu, Hyderabad, TG 502319",
        mapUrl: "https://maps.app.goo.gl/U1c6dZdpwSnD9ujM6",
      },
      order: 1,
    },
    {
      id: "reception",
      type: "reception",
      name: "Reception",
      description: "Onwards",
      date: "2025-02-09",
      startTime: "19:00",
      venue: {
        name: "Shubham Convention",
        address:
          "Old NH 44, Sri Guru Raghavendra Colony, Kamareddy, TG 503111",
        mapUrl: "https://maps.app.goo.gl/QgSFC6e8Q63VbPyc7",
      },
      order: 2,
    },
  ],

  information: [
    {
      id: "invitation",
      type: "custom",
      name: "Wedding Invitation",
      description:
        "Cordially invite you and your family to grace the wedding cermony of: Bhagath & Madhu.",
      imageIds: ["hero"],
      items: [
        {
          id: "invocation",
          name: "Invocation",
          description: "శ్రీ గణేశాయ నమః",
        },
        {
          id: "wedding-date",
          name: "Bhagath & Madhu",
          description: "Friday, February 7th, 2025",
        },
        {
          id: "welcome-overlay",
          name: "The Wedding Of",
          description: "Bhagath & Madhu. Open Invitation.",
        },
        {
          id: "countdown",
          name: "Time to Wedding Event",
          description:
            "The countdown is configured for February 7, 2025 at 11:30 AM, while the visible Wedding event lists the Muhurtam at 11:45 AM. The event time uses the visible 11:45 AM value.",
        },
      ],
      order: 1,
    },
    {
      id: "families",
      type: "families",
      name: "Bride & Groom",
      items: [
        {
          id: "bhagath-family",
          name: "Bhagath",
          description: "Son of Srinivas & Kalpana",
          imageIds: ["bhagath"],
        },
        {
          id: "madhu-family",
          name: "Madhu",
          description: "Daughter of Buchappa & Shailaja",
          imageIds: ["madhu"],
        },
      ],
      order: 2,
    },
    {
      id: "gallery",
      type: "gallery",
      name: "Photos",
      imageIds: [
        "gallery-proposal",
        "gallery-portrait",
        "gallery-engagement",
      ],
      items: [
        {
          id: "picture-one",
          name: "picture 1",
          imageIds: ["gallery-proposal"],
        },
        {
          id: "picture-two",
          name: "picture 2",
          imageIds: ["gallery-portrait"],
        },
        {
          id: "picture-three",
          name: "picture 3",
          imageIds: ["gallery-engagement"],
        },
      ],
      order: 3,
    },
    {
      id: "save-the-date",
      type: "custom",
      name: "Save The Date",
      items: [
        {
          id: "google-calendar",
          name: "Save The Date",
          description: "Friday, February 7th, 2025",
          url: "https://calendar.app.google/dGyFDN2LsKRT6dxB7",
        },
      ],
      order: 4,
    },
    {
      id: "closing-and-music",
      type: "custom",
      name: "Closing and Music",
      description:
        "We will be blessed to have your presence on this ocassion.",
      items: [
        {
          id: "background-music",
          name: "Background Music",
          url: "https://love-at-penn.github.io/assets/music/sound.mp3",
        },
        {
          id: "footer-song",
          name: "I Wanna Grow Old with You",
          url: "https://www.youtube.com/watch?v=1WCIrw85zbQ",
        },
        {
          id: "footer-credit",
          name: "Built with love",
        },
      ],
      order: 5,
    },
  ],

  settings: {
    title: "Bhagath and Madhu's wedding invitation Online",
    timezone: "Asia/Kolkata",
    primaryColor: "#111111",
  },
};
