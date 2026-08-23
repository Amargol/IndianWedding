// Aisha & Jiv - https://www.zola.com/wedding/aisha_and_jiv - Zola

import type { WeddingWebsite } from "../types/WeddingSchema";

export const aishaAndJivWedding: WeddingWebsite = {
  id: "aisha-and-jiv",

  couple: {
    partnerOne: "Aisha Gandhi",
    partnerTwo: "Jiv Prince",
    date: "2026-04-12",
    location: "Cancún, Mexico",
  },

  images: [
    {
      id: "hero",
      url: "https://images.zola.com/3d015f59-6970-4c9a-96ed-b244578c9dca?w=1500",
      description: "Aisha and Jiv",
    },
    {
      id: "schedule",
      url: "https://images.zola.com/f7b35f9f-4f80-4dbe-be70-f1dbabbc0552?w=1500",
      description: "Wedding schedule",
    },
    {
      id: "travel",
      url: "https://images.zola.com/74039f2a-be2b-49c4-a737-23faadb03437?w=1500",
      description: "Travel",
    },
    {
      id: "wishing-well",
      url: "https://images.zola.com/24a58ff5-ae53-492c-9139-c73bce82970d?w=1500",
      description: "Wishing Well",
    },
    {
      id: "vietnam",
      url: "https://images.zola.com/f34c3545-7e1f-49b4-9f9c-0db27655d9fa?w=1500",
      description:
        "I said yes… then we flew off to Vietnam to celebrate love.",
    },
    {
      id: "peanut",
      url: "https://images.zola.com/0c60495c-53be-4861-b506-340f3de75d4e?w=1500",
      description: "Just the three of us - love, laughter, and Peanut.",
    },
    {
      id: "camera-and-love",
      url: "https://images.zola.com/452b9b08-365d-4eea-be09-acf7ed1c11d2?w=1500",
      description: "Just us, the camera, and a whole lot of love.",
    },
    {
      id: "proposal",
      url: "https://images.zola.com/f045d8a2-3444-4aec-98fd-3f22a8450c4b?w=1500",
      description: "Proposal of My Dreams",
    },
    {
      id: "gallery-photo",
      url: "https://images.zola.com/d4b55cc9-6f43-460d-9ab2-10201a6f04ad?w=1500",
    },
    {
      id: "family-photo",
      url: "https://images.zola.com/20ff8ac4-b51e-4b9b-8bf3-ce14e3b442fc?w=1500",
      description: "Purfect Family Photo",
    },
    {
      id: "travel-photo",
      url: "https://images.zola.com/479c27ab-caeb-4644-89a8-a767b3fb80a9?w=1500",
      description: "All we do is travel",
    },
    {
      id: "aisha-favorite",
      url: "https://images.zola.com/4b3a933e-acec-4792-843c-360e1c6a4004?w=1500",
      description: "Aisha's Fav photo of Us",
    },
    {
      id: "jiv-being-jiv",
      url: "https://images.zola.com/f00e880b-262d-45d6-945f-85d7b1a8f319?w=1500",
      description: "Jiv being Jiv",
    },
    {
      id: "chichen-itza",
      url: "https://images.zola.com/090beace-92db-4aee-8f36-12feb6eff872?w=1500",
      description: "Chichén-Itzá",
    },
    {
      id: "tulum",
      url: "https://images.zola.com/25a5759b-6d22-4e86-adec-339e8629ef07?w=1500",
      description: "Tulum",
    },
    {
      id: "isla-mujeres",
      url: "https://images.zola.com/427031c9-2ad9-43aa-816d-f0841018829f?w=1500",
      description: "Isla Mujeres",
    },
    {
      id: "atv-adventure",
      url: "https://images.zola.com/5e3e76bb-3c55-48e4-98c0-f082d1045676?w=1500",
      description:
        "Cancún ATV Jungle Adventure, Ziplines, Cenote and Tequila Tasting",
    },
    {
      id: "la-isla-cancun",
      url: "https://images.zola.com/74dde4ab-4a37-44fb-9879-b4332b117651?w=1500",
      description: "La Isla Cancún",
    },
    {
      id: "moon-palace",
      url: "https://images.zola.com/17b6a4e8-1d45-4bc3-aeb9-bf73f9be42b3?w=1500",
      description: "Moon Palace Cancun",
    },
    {
      id: "dolphins-beach",
      url: "https://images.zola.com/e63b89b6-f781-4552-936e-1c6ef523086d?w=1500",
      description: "Dolphins Beach",
    },
  ],

  events: [
    {
      id: "boat-party",
      type: "other",
      name: "Boat Party",
      date: "2026-04-10",
      startTime: "15:00",
      venue: {
        name: "Moon Palace",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=21.16190800,-86.85152790&query_place_id=ChIJ21P2rgUrTI8Ris1fYjy3Ms4",
      },
      order: 1,
    },
    {
      id: "mehendi-and-mojitos",
      type: "mehndi",
      name: "Mehendi & Mojitos",
      description:
        "Mehndi, games, and beachy flames—let's get this party started!",
      date: "2026-04-11",
      startTime: "10:00",
      venue: {
        name: "Dolphin Beach (Playa Delfines)",
        address:
          "Chetumal Km 340, Cancún, Quintana Roo 77500, Mexico",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=21.06086080,-86.77902910&query_place_id=ChIJTc0cUYCCTo8R5IF6JQxSq-Q",
      },
      dressCode:
        "Colorful beach attire such as linen pants, short-sleeved button-downs, maxi dresses, and sandals.",
      order: 2,
    },
    {
      id: "sangeet-soiree",
      type: "sangeet",
      name: "Sangeet Soirée",
      description: "Sun, sand, shots, and shaava shaava!",
      date: "2026-04-11",
      startTime: "18:00",
      venue: {
        name: "Lake Terrace",
        address:
          "Chetumal Km 340, Cancún, Quintana Roo 77500, Mexico",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=21.16527530,-86.81701320&query_place_id=ChIJhZsTjaUpTI8RhDt12ZPWn50",
      },
      dressCode:
        "Women in white and men in black. Drama optional, style required.",
      order: 3,
    },
    {
      id: "anand-karaj",
      type: "ceremony",
      name: "Anand Karaj",
      date: "2026-04-12",
      startTime: "10:00",
      venue: {
        name: "Tucan Gazebo",
        address:
          "Chetumal Km 340, Cancún, Quintana Roo 77500, Mexico",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=20.97860470,-86.82995900&query_place_id=ChIJ3YqQ9gSBTo8RfqYEpmHyXns",
      },
      dressCode:
        "Indian royalty in soft pastel pinks, blues, greens, or yellows.",
      order: 4,
    },
    {
      id: "reception-remix",
      type: "reception",
      name: "The Reception Remix",
      date: "2026-04-12",
      startTime: "18:00",
      venue: {
        name: "Venado Combo",
        address:
          "Chetumal Km 340, Cancún, Quintana Roo 77500, Mexico",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=21.04230330,-86.87604360",
      },
      dressCode: "Glitz-and-glam elegant wear.",
      order: 5,
    },
  ],

  information: [
    {
      id: "our-story",
      type: "our-story",
      name: "Perfectly Timed, Beautifully Us",
      description:
        "Aisha and Jiv were not looking for love when a simple conversation grew into late-night laughs, shared dreams, and a comfort that felt like home. Their story celebrates love arriving unexpectedly but at exactly the right time.",
      items: [
        {
          id: "our-story-video",
          name: "Our Story Video",
          url: "https://player.vimeo.com/video/1101408826",
        },
      ],
      order: 1,
    },
    {
      id: "guest-update",
      type: "custom",
      name: "The Beach Is Calling",
      description:
        "RSVPs are open, color themes are live, and dance moves are required. Guests should review the dress code and schedule pages for updates.",
      order: 2,
    },
    {
      id: "travel",
      type: "travel",
      name: "Travel & RSVP",
      description:
        "Guests should use the destination-wedding travel site to book their stay and share travel details.",
      imageIds: ["travel"],
      items: [
        {
          id: "travel-website",
          name: "Travel Website",
          url: "https://www.shaadidestinations.com/aisha-and-jiv",
        },
      ],
      order: 3,
    },
    {
      id: "wardrobe-planner",
      type: "dress-code",
      name: "Wardrobe Planner",
      description:
        "A shared wardrobe guide provides color themes and outfit guidance for the celebrations.",
      items: [
        {
          id: "wardrobe-guide",
          name: "View the Wardrobe Planner",
          url: "https://www.canva.com/design/DAG0-UucCL8/OEkbFCuy4wPYHoSS18deUg/view",
        },
      ],
      order: 4,
    },
    {
      id: "registry",
      type: "registry",
      name: "Wishing Well",
      description:
        "The couple says guests' presence is their greatest gift. For those who wish to contribute, the wishing well will help them start their life together.",
      imageIds: ["wishing-well"],
      items: [
        {
          id: "zola-registry",
          name: "Wishing Well",
          url: "https://www.zola.com/wedding/aisha_and_jiv/registry",
        },
      ],
      order: 5,
    },
    {
      id: "gallery",
      type: "gallery",
      name: "Captured Memories",
      imageIds: [
        "vietnam",
        "peanut",
        "camera-and-love",
        "proposal",
        "gallery-photo",
        "family-photo",
        "travel-photo",
        "aisha-favorite",
        "jiv-being-jiv",
      ],
      order: 6,
    },
    {
      id: "things-to-do",
      type: "things-to-do",
      name: "Make Memories Beyond the Aisle",
      description: "Activities for guests enjoying Cancún and the surrounding area.",
      items: [
        {
          id: "chichen-itza",
          name: "Chichén-Itzá",
          description:
            "Chichén-Itzá, Yucatán 97751, Mexico. Explore one of the New Seven Wonders of the World and its Maya ruins.",
          imageIds: ["chichen-itza"],
          url: "https://www.chichenitza.com/",
        },
        {
          id: "tulum",
          name: "Tulum",
          description:
            "Maya ruins, cenotes, beaches, nightlife, and a relaxed bohemian atmosphere.",
          imageIds: ["tulum"],
        },
        {
          id: "isla-mujeres",
          name: "Isla Mujeres",
          description:
            "Take a ferry for snorkeling, diving, tropical fish, turtles, and the underwater museum.",
          imageIds: ["isla-mujeres"],
          url: "https://isla-mujeres.net/",
        },
        {
          id: "atv-jungle-adventure",
          name: "Cancún ATV Jungle Adventure",
          description:
            "Ride jungle trails, take three zipline flights, swim in a cenote, and join a tequila tasting with round-trip hotel transportation.",
          imageIds: ["atv-adventure"],
          url: "https://www.viator.com/Riviera-Maya-and-the-Yucatan/d770-ttd",
        },
        {
          id: "la-isla-cancun",
          name: "La Isla Cancún",
          description:
            "Km 12.5 Boulevard Kukulcan, Cancún, Q.R. 77500, Mexico. Shopping, dining, canals, and family attractions.",
          imageIds: ["la-isla-cancun"],
          url: "https://islacancun.mx/en",
        },
        {
          id: "moon-palace",
          name: "Moon Palace Cancun",
          description:
            "Km 340 Carretera Cancún-Chetumal, Cancún, Q.R. 77500, Mexico. Relax with a spa treatment, massage, or facial.",
          imageIds: ["moon-palace"],
          url: "https://www.moonpalacecancun.com/",
        },
        {
          id: "dolphins-beach",
          name: "Dolphins Beach",
          description:
            "17 Boulevard Kukulcan, Cancún, Q.R. 77500, Mexico. Enjoy the sun, sand, and turquoise water at Playa Delfines.",
          imageIds: ["dolphins-beach"],
          url: "https://www.tripadvisor.com/Attraction_Review-g150807-d152700-Reviews-Playa_Delfines-Cancun_Yucatan_Peninsula.html",
        },
      ],
      order: 7,
    },
  ],

  settings: {
    title: "AJ",
    timezone: "America/Cancun",
  },
};
