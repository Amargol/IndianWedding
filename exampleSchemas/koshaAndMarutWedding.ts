// Kosha & Marut - https://www.zola.com/wedding/kosha-marut - Zola
// The site currently returns 404; this example uses recently cached page content.

import type { WeddingWebsite } from "../types/WeddingSchema";

export const koshaAndMarutWedding: WeddingWebsite = {
  id: "kosha-and-marut",

  couple: {
    partnerOne: "Kosha Gandhi",
    partnerTwo: "Marut Raval",
    date: "2025-12-26",
    location: "Vadodara, Gujarat, India",
  },

  images: [],

  events: [
    {
      id: "reception",
      type: "reception",
      name: "Reception",
      description:
        "A United States celebration after the wedding festivities in India, with an open bar.",
      date: "2026-02-14",
      venue: { name: "Somerset, New Jersey" },
      dressCode:
        "Formal or cocktail attire; both Western and Indian attire are welcome.",
      transportation:
        "A complimentary shuttle will run between the Fairfield Inn room block and the reception venue.",
      order: 1,
    },
  ],

  information: [
    {
      id: "our-story",
      type: "our-story",
      name: "Our Story",
      description:
        "Kosha and Marut met in Philadelphia through a swipe while Marut worked in the corporate world and Kosha attended pharmacy school. Despite growing up on opposite sides of the world, they found aligned values and spent three years blending two cultures and two large Gujarati families. They chose Kosha's hometown of Vadodara for their Indian wedding and planned a second celebration in New Jersey.",
      order: 1,
    },
    {
      id: "india-wedding-events",
      type: "traditions",
      name: "India Wedding Events",
      description:
        "The India wedding takes place December 26–27, 2025. Indian attire is requested for all events. The archived site does not expose individual event dates, times, or venues.",
      items: [
        {
          id: "grah-shanti",
          name: "Grah Shanti",
          description:
            "A sacred ritual seeking blessings from the planets and the divine. The two families hold separate ceremonies on different dates.",
        },
        {
          id: "mehndi",
          name: "Mehndi",
          description:
            "Henna for women and a social mixer for men. The suggested style is light, festive, and garden-chic.",
        },
        {
          id: "sangeet",
          name: "Sangeet",
          description:
            "A music and dance night with an elegant, high-energy, and classy style.",
        },
        {
          id: "haldi",
          name: "Haldi",
          description:
            "A flower-showering ceremony to bless the couple. The suggested style is sun-kissed, earthy, and warm.",
        },
        {
          id: "lagna",
          name: "Lagna",
          description:
            "The marriage ceremony, where vows are exchanged and two souls are joined in love and tradition. The suggested style is traditional and opulent.",
        },
      ],
      order: 2,
    },
    {
      id: "things-to-do",
      type: "things-to-do",
      name: "Things To Do In India",
      description:
        "Attractions for guests arriving in Gujarat before the wedding or staying afterward.",
      items: [
        {
          id: "sabarmati-ashram",
          name: "Sabarmati Ashram",
          description:
            "Ashram Road, Ahmedabad, GJ 380027, India. The former residence of Mahatma Gandhi.",
        },
        {
          id: "law-garden",
          name: "Law Garden",
          description:
            "Netaji Road, Ahmedabad, GJ 380009, India. An outdoor market and lively food destination.",
        },
        {
          id: "laxshmi-vilas-palace",
          name: "Laxshmi Vilas Palace",
          description:
            "J N Marg, Vadodara, GJ 390001, India. The palace of Maharaja Sayajirao Gaekward.",
        },
        {
          id: "statue-of-unity",
          name: "Statue Of Unity",
          description:
            "Statue of Unity Road, Kevadia, GJ 393155, India. The tallest statue in the world.",
        },
        {
          id: "rann-of-kutch",
          name: "Rann of Kutch",
          description:
            "Gujarat, India. A salt marsh in the Thar Desert; Rann Utsav and the Tent City are especially vibrant from December through January.",
        },
        {
          id: "gir-national-park",
          name: "Gir National Park",
          description:
            "Chitrod, GJ 362135, India. The only place outside Africa where lions can be seen in their natural habitat.",
        },
      ],
      order: 3,
    },
    {
      id: "accommodations",
      type: "accommodations",
      name: "Reception Accommodations",
      description:
        "The reception venue is not a hotel. A group rate is available at the Fairfield Inn with block code RGR; the Hyatt Regency and Residence Inn are nearby alternatives.",
      items: [
        {
          id: "fairfield-inn-room-block",
          name: "Fairfield Inn Room Block",
          description:
            "Use group block code RGR. Complimentary shuttle service is provided to and from the reception venue.",
          url: "https://www.marriott.com/event-reservations/reservation-link.mi?id=1757339227293&key=GRP&app=resvlink",
        },
      ],
      order: 4,
    },
    {
      id: "faq",
      type: "faq",
      name: "FAQs",
      items: [
        {
          id: "weather",
          name: "What will the weather be like?",
          description:
            "December has an average high of 85°F (28°C) and an average low of 55°F (15°C).",
        },
        {
          id: "bar",
          name: "Will there be a bar?",
          description:
            "The India wedding will not have a bar because Gujarat is a dry state. The New Jersey reception will have an open bar.",
        },
        {
          id: "registry",
          name: "Is there a wedding registry?",
          description:
            "No gifts are expected; the couple says guests' love, company, and blessings are all they need.",
        },
      ],
      order: 5,
    },
  ],

  settings: {
    title: "Marut & Kosha",
    timezone: "Asia/Kolkata",
  },
};
