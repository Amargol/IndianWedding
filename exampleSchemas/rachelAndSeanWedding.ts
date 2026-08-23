// Rachel & Sean - https://www.zola.com/wedding/waterhousechaudhariwedding - Zola

import type { WeddingWebsite } from "../types/WeddingSchema";

export const rachelAndSeanWedding: WeddingWebsite = {
  id: "rachel-and-sean",

  couple: {
    partnerOne: "Rachel Waterhouse",
    partnerTwo: "Sean Chaudhari",
    date: "2023-08-12",
    location: "Itasca, Illinois",
  },

  images: [
    {
      id: "hero",
      url: "https://images.zola.com/d8db176e-626e-4fb5-b05d-7d487ec851ee?w=1500",
      description: "Rachel and Sean",
    },
  ],

  events: [
    {
      id: "sangeet-and-mehndi",
      type: "sangeet",
      name: "Sangeet and Mehndi",
      description:
        "A private pre-wedding celebration with music, dancing, henna, food, family, and friends.",
      date: "2023-08-11",
      startTime: "18:00",
      venue: {
        name: "Ashyana Banquets",
        address: "1620 75th Street, Downers Grove, IL 60516",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=41.75309120,-88.02216860&query_place_id=ChIJyc7c_A9QDogRQGF4mVwpj2s",
      },
      dressCode:
        "Traditional Indian or semi-formal American attire. Brightly colored sarees or lehengas and kurtas or sherwanis are suggested, or colorful American semi-formal attire.",
      order: 1,
    },
    {
      id: "ceremony",
      type: "ceremony",
      name: "Ceremony",
      description:
        "A private Hindu ceremony featuring the Baraat, Jaimala garland exchange, Sagai and Sagun, Kanyadaan, Sindoor, and Mangalsutra traditions, followed by a full lunch.",
      date: "2023-08-12",
      startTime: "10:30",
      venue: {
        name: "The Westin Chicago Northwest",
        address: "400 Park Boulevard, Itasca, IL 60143",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=41.98711300,-88.01961880&query_place_id=ChIJC_T81wWuD4gRrnt8Px5hTY4",
      },
      dressCode:
        "Traditional Indian or semi-formal American attire, such as a dhoti-kurta or sherwani, a saree or lehenga, a suit, or a semi-formal dress.",
      order: 2,
    },
    {
      id: "reception",
      type: "reception",
      name: "Reception",
      description:
        "Cocktail hour begins at 6:00 PM and the reception begins at 7:00 PM, followed by food, drinks, and dancing.",
      date: "2023-08-12",
      startTime: "18:00",
      venue: {
        name: "The Westin Chicago Northwest",
        address: "400 Park Boulevard, Itasca, IL 60143",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=41.98711300,-88.01961880&query_place_id=ChIJC_T81wWuD4gRrnt8Px5hTY4",
      },
      dressCode:
        "Semi-formal Indian or American attire, including tuxedos or suits, lehengas, gowns, or cocktail dresses.",
      order: 3,
    },
  ],

  information: [
    {
      id: "travel",
      type: "travel",
      name: "Travel",
      description:
        "A limited block of king and double rooms was available at the Westin for $129 per night before taxes and fees, with a July 22 booking deadline.",
      items: [
        {
          id: "westin",
          name: "The Westin Chicago Northwest",
          description:
            "400 Park Boulevard, Itasca, IL 60143. Phone: (630) 773-4000. The ceremony and reception are held at the hotel.",
          url: "https://www.marriott.com/events/start.mi?id=1672160779356&key=GRP",
        },
        {
          id: "ohare-airport",
          name: "Chicago O'Hare International Airport",
          description:
            "The recommended airport for out-of-town guests, approximately 20 minutes from the Westin. Midway Airport is approximately 40–60 minutes away.",
        },
      ],
      order: 1,
    },
    {
      id: "faq",
      type: "faq",
      name: "FAQs",
      items: [
        {
          id: "registry",
          name: "Do you have a registry for gifts?",
          description:
            "There is no traditional gift registry. Cash contributions or cards may be placed in the card box at the venue; contact the couple for a mailing address.",
        },
        {
          id: "plus-one",
          name: "Can we bring a plus-one?",
          description:
            "Only guests whose names are listed on the invitation may attend.",
        },
        {
          id: "children",
          name: "Can we bring children?",
          description:
            "Check the RSVP to see whether children are invited and respond for them. Parents are also welcome to enjoy a child-free date night.",
        },
        {
          id: "indian-clothing",
          name: "Where can we find Indian clothing?",
          description:
            "Indian attire is optional. Suggested shops include Pernia's Pop-Up Shop, Lashkaraa, G3 Fashion, Kalki Fashion, House of Indya, and Etsy.",
        },
        {
          id: "accommodations",
          name: "Are there nearby accommodations?",
          description:
            "A discounted room block is available at the Westin, which is also the reception venue. Guests were asked to reserve before July 22.",
        },
        {
          id: "things-to-do",
          name: "What is there to do in Chicago or Itasca?",
          description:
            "Chicago options include Millennium Park, Navy Pier, the Art Institute, architecture boat tours, Museum Campus, and the Magnificent Mile. Itasca offers parks, Spring Brook Nature Center, and the Ned Brown Preserve or Busse Woods.",
        },
        {
          id: "schedule-gap",
          name: "What can we do between the ceremony and reception?",
          description:
            "Guests can relax, nap, change, freshen up, and prepare for the evening.",
        },
        {
          id: "ceremony-invitation",
          name: "Who is invited to the ceremony?",
          description:
            "The ceremony is private with limited seating. The invitation and RSVP indicate whether a guest is invited to both the ceremony and reception or only the reception.",
        },
        {
          id: "start-times",
          name: "Will events start on time?",
          description: "Yes. Events will begin promptly, so guests should arrive on time.",
        },
      ],
      order: 2,
    },
  ],

  settings: {
    title: "Rachel & Sean",
    timezone: "America/Chicago",
  },
};
