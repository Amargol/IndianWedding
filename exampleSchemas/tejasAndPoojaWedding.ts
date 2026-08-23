// Tejas & Pooja - https://arcalima.github.io/TejasPooja/ - Custom-coded (HTML/CSS/JS)

import type { WeddingWebsite } from "../types/WeddingSchema";

const prasangPartyPlot = {
  name: "Prasang Party Plot",
  address: "Behind BAPS Temple, Zadeshwar, Bharuch",
  mapUrl: "https://maps.app.goo.gl/W8cSVfiMxs7LiFSh7",
};

const sankatMochanTemple = {
  name: "Shri Sankat Mochan Hanumanji Temple",
  address: "Ayodhya Nagar, Bharuch",
  mapUrl: "https://maps.app.goo.gl/aZqioiFKbU5f9kD98",
};

export const tejasAndPoojaWedding: WeddingWebsite = {
  id: "tejas-and-pooja",

  couple: {
    partnerOne: "Tejas Patel",
    partnerTwo: "Pooja Jadav",
    date: "2027-02-25",
    location: "Bharuch",
  },

  images: [
    {
      id: "hero",
      url: "https://arcalima.github.io/TejasPooja/images/hero.jpg",
      description: "Tejas and Pooja",
    },
    {
      id: "gallery-one",
      url: "https://arcalima.github.io/TejasPooja/images/gallery1.jpg",
      description: "Tejas and Pooja",
    },
    {
      id: "gallery-two",
      url: "https://arcalima.github.io/TejasPooja/images/gallery2.jpg",
      description: "Tejas and Pooja",
    },
    {
      id: "gallery-three",
      url: "https://arcalima.github.io/TejasPooja/images/gallery3.jpg",
      description: "Tejas and Pooja",
    },
  ],

  events: [
    {
      id: "grahshanti",
      type: "other",
      name: "Grahshanti",
      date: "2027-02-24",
      startTime: "09:00",
      venue: prasangPartyPlot,
      order: 1,
    },
    {
      id: "haldi",
      type: "haldi",
      name: "Haldi",
      date: "2027-02-24",
      startTime: "10:00",
      venue: prasangPartyPlot,
      order: 2,
    },
    {
      id: "mameru",
      type: "other",
      name: "Mameru",
      date: "2027-02-24",
      startTime: "11:30",
      venue: prasangPartyPlot,
      order: 3,
    },
    {
      id: "lunch",
      type: "other",
      name: "Lunch",
      date: "2027-02-24",
      startTime: "12:30",
      venue: prasangPartyPlot,
      order: 4,
    },
    {
      id: "dinner",
      type: "other",
      name: "Dinner",
      date: "2027-02-24",
      startTime: "20:00",
      venue: prasangPartyPlot,
      order: 5,
    },
    {
      id: "sangeet-and-garba",
      type: "sangeet",
      name: "Sangeet & Garba",
      date: "2027-02-24",
      startTime: "21:00",
      venue: prasangPartyPlot,
      order: 6,
    },
    {
      id: "baarat",
      type: "baraat",
      name: "Baarat",
      date: "2027-02-25",
      startTime: "18:30",
      venue: sankatMochanTemple,
      order: 7,
    },
    {
      id: "hast-milap",
      type: "ceremony",
      name: "Hast Milap",
      date: "2027-02-25",
      startTime: "19:30",
      venue: sankatMochanTemple,
      order: 8,
    },
  ],

  information: [
    {
      id: "invitation",
      type: "custom",
      name: "Wedding Invitation",
      description:
        "TOGETHER WITH OUR FAMILIES. Request the honour of your presence and blessings as we celebrate the beginning of our forever.",
      imageIds: ["hero"],
      items: [
        {
          id: "celebration-details",
          name: "View Celebration Details",
        },
        {
          id: "countdown",
          name: "Countdown To Our Wedding",
          description:
            "The wedding countdown targets February 25, 2027 at 7:30 PM.",
        },
        {
          id: "footer",
          name: "Tejas ❤️ Pooja",
          description: "25 February 2027",
        },
      ],
      order: 1,
    },
    {
      id: "gallery",
      type: "gallery",
      name: "Our Moments",
      imageIds: ["hero", "gallery-one", "gallery-two", "gallery-three"],
      order: 2,
    },
    {
      id: "rsvp",
      type: "custom",
      name: "Will You Attend",
      description:
        "Your presence will make our celebration truly special.",
      items: [
        {
          id: "whatsapp-rsvp",
          name: "Touch here to let us know",
          description:
            "Hello Tejas, I would like to confirm my attendance for your wedding.",
          url: "https://wa.me/917359120312?text=Hello%20Tejas,%20I%20would%20like%20to%20confirm%20my%20attendance%20for%20your%20wedding.",
        },
      ],
      order: 3,
    },
    {
      id: "contact",
      type: "contact",
      name: "Contact",
      items: [
        {
          id: "tejas-whatsapp",
          name: "+91 7359120312",
          description: "WhatsApp wedding attendance contact.",
          url: "https://wa.me/917359120312?text=Hello%20Tejas,%20I%20would%20like%20to%20confirm%20my%20attendance%20for%20your%20wedding.",
        },
      ],
      order: 4,
    },
    {
      id: "background-music",
      type: "custom",
      name: "Background Music",
      items: [
        {
          id: "music",
          name: "Wedding Music",
          description:
            "Looping background music controlled by the page's music button.",
          url: "https://arcalima.github.io/TejasPooja/music.mp3",
        },
      ],
      order: 5,
    },
  ],

  settings: {
    title: "Tejas ❤️ Pooja | Wedding Invitation",
    timezone: "Asia/Kolkata",
    primaryColor: "#6d1020",
    secondaryColor: "#d4af37",
  },
};
