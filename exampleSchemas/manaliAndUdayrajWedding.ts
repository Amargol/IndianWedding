// Manali & Udayraj - https://udayraj123.github.io/wedding/ - Custom-coded (HTML/CSS/JS)

import type { WeddingWebsite } from "../types/WeddingSchema";

const venue = {
  name: "Dhole Patil Lawns",
  address: "Sangamner",
  mapUrl: "https://maps.app.goo.gl/QRqMRkKzXREpQSff9",
};

export const manaliAndUdayrajWedding: WeddingWebsite = {
  id: "manali-and-udayraj",

  couple: {
    partnerOne: "Manali",
    partnerTwo: "Udayraj",
    date: "2026-02-11",
    location: "Sangamner, India",
  },

  images: [
    {
      id: "hero-poster",
      url: "https://udayraj123.github.io/wedding/assets/images/charu_poster.jpg",
      description: "Poster image for the wedding website's hero video.",
    },
    {
      id: "wedding-cover",
      url: "https://udayraj123.github.io/wedding/assets/images/wedding_cover.jpeg",
      description: "Manali and Udayraj's wedding cover image.",
    },
    {
      id: "haldi",
      url: "https://udayraj123.github.io/wedding/assets/images/haldi.jpg",
      description: "Haldi Ceremony.",
    },
    {
      id: "vidhi",
      url: "https://udayraj123.github.io/wedding/assets/images/vidhi.jpeg",
      description: "Wedding Ceremony and Reception day.",
    },
    {
      id: "pune-airport",
      url: "https://udayraj123.github.io/wedding/assets/images/pune_airport.jpg",
      description: "Pune Airport travel option.",
    },
    {
      id: "shirdi-airport",
      url: "https://udayraj123.github.io/wedding/assets/images/shirdi_airport.jpeg",
      description: "Shirdi Airport travel option.",
    },
    {
      id: "rental-car-sharing",
      url: "https://udayraj123.github.io/wedding/assets/images/carpool.jpeg",
      description: "Rental car sharing.",
    },
    {
      id: "extended-stay",
      url: "https://udayraj123.github.io/wedding/assets/images/stay.jpeg",
      description: "Extended stay near Sangamner.",
    },
    {
      id: "shirdi-temple",
      url: "https://udayraj123.github.io/wedding/assets/images/shirdi.jpg",
      description: "Shirdi Sai Baba Temple.",
    },
    {
      id: "trimbakeshwar-temple",
      url: "https://udayraj123.github.io/wedding/assets/images/Trimbakeshwar.jpeg",
      description: "Trimbakeshwar Temple.",
    },
    {
      id: "local-sangamner",
      url: "https://udayraj123.github.io/wedding/assets/images/sangamner.jpeg",
      description: "Sangamner and its surroundings.",
    },
  ],

  events: [
    {
      id: "hotel-check-in",
      type: "other",
      name: "Hotel Check-in",
      description:
        "Day 1 — Haldi Ceremony. The celebration continues with Haldi, snacks, games, performances, Sangeet and dinner.",
      date: "2026-02-10",
      startTime: "13:00",
      venue,
      imageIds: ["haldi"],
      order: 1,
    },
    {
      id: "haldi-and-snacks",
      type: "haldi",
      name: "Haldi & Snacks",
      description:
        "Day 1 — the traditional Haldi ceremony, followed by snacks, games and performances.",
      date: "2026-02-10",
      startTime: "16:15",
      venue,
      imageIds: ["haldi"],
      order: 2,
    },
    {
      id: "sangeet-and-dinner",
      type: "sangeet",
      name: "Sangeet & Dinner",
      description:
        "Day 1 concludes with Sangeet celebrations and dinner.",
      date: "2026-02-10",
      startTime: "19:30",
      venue,
      imageIds: ["haldi"],
      order: 3,
    },
    {
      id: "early-rest-for-vidhi",
      type: "other",
      name: "Early Rest for Vidhi",
      description: "The final scheduled item on Day 1.",
      date: "2026-02-10",
      startTime: "22:30",
      venue,
      imageIds: ["haldi"],
      order: 4,
    },
    {
      id: "vidhi-starts",
      type: "ceremony",
      name: "Vidhi Starts",
      description:
        "Day 2 — Wedding Ceremony & Reception. The main wedding day begins with Vidhi and continues through breakfast, reception, lunch, Vidai and Gruhapravesh.",
      date: "2026-02-11",
      startTime: "07:00",
      venue,
      imageIds: ["vidhi"],
      order: 5,
    },
    {
      id: "breakfast",
      type: "other",
      name: "Breakfast",
      description: "Breakfast on the Wedding Ceremony & Reception day.",
      date: "2026-02-11",
      startTime: "08:30",
      venue,
      imageIds: ["vidhi"],
      order: 6,
    },
    {
      id: "rest-and-luggage-packing",
      type: "other",
      name: "Rest/Luggage Packing",
      description:
        "A scheduled rest and luggage-packing period on the Wedding Ceremony & Reception day.",
      date: "2026-02-11",
      startTime: "10:30",
      venue,
      imageIds: ["vidhi"],
      order: 7,
    },
    {
      id: "reception-starts",
      type: "reception",
      name: "Reception Starts",
      description: "The reception portion of Day 2 begins.",
      date: "2026-02-11",
      startTime: "11:15",
      venue,
      imageIds: ["vidhi"],
      order: 8,
    },
    {
      id: "mangalashtaka-starts",
      type: "ceremony",
      name: "Mangalashtaka Starts",
      description:
        "Mangalashtaka during the Wedding Ceremony & Reception day.",
      date: "2026-02-11",
      startTime: "11:40",
      venue,
      imageIds: ["vidhi"],
      order: 9,
    },
    {
      id: "lunch",
      type: "other",
      name: "Lunch",
      description: "Lunch on the Wedding Ceremony & Reception day.",
      date: "2026-02-11",
      startTime: "12:00",
      venue,
      imageIds: ["vidhi"],
      order: 10,
    },
    {
      id: "vidai-and-gruhapravesh",
      type: "other",
      name: "Vidai & Gruhapravesh",
      description:
        "The concluding scheduled event of the two-day wedding celebration.",
      date: "2026-02-11",
      startTime: "16:00",
      venue,
      imageIds: ["vidhi"],
      order: 11,
    },
  ],

  information: [
    {
      id: "invitation",
      type: "custom",
      name: "Our Wedding Celebration",
      description:
        "Manali and Udayraj are getting married during a two-day celebration on February 10–11, 2026, at Dhole Patil Lawns, Sangamner. The primary date of February 11 is inferred because the site labels Day 2 as the Wedding Ceremony & Reception.",
      imageIds: ["hero-poster", "wedding-cover"],
      order: 1,
    },
    {
      id: "faq",
      type: "faq",
      name: "Good to Know",
      description:
        "A few helpful details to make your day smooth and joyful.",
      items: [
        {
          id: "what-to-wear",
          name: "What should I wear?",
          description:
            "Traditional Indian wedding attire is encouraged. Ladies can wear sarees, lehengas or anarkalis. Gentlemen can wear a kurta, sherwani or anything traditional. Vibrant colors are welcome.",
        },
        {
          id: "when-to-arrive-day-one",
          name: "Day 1 Arrival",
          description:
            "Check into your hotel by 1:00 PM and arrive at the venue by 5:00 PM for the Haldi ceremony. The separate schedule lists Haldi & Snacks at 4:15 PM, so the site's stated times are inconsistent.",
        },
        {
          id: "when-to-arrive-day-two",
          name: "Day 2 Arrival",
          description:
            "Be present by 6:30 AM for the morning ceremonies.",
        },
      ],
      order: 2,
    },
    {
      id: "travel",
      type: "travel",
      name: "Travel to Sangamner",
      description:
        "Essential travel information to help guests reach the celebration and explore the surroundings.",
      items: [
        {
          id: "via-pune-airport",
          name: "Via Pune Airport",
          description:
            "Fly into Pune, then travel 150 km to Sangamner in about 4 hours. If landing before 9 AM on February 10, reach Wakdewadi; from Wakdewadi Bus Stand, take a direct bus to Sangamner or share a rental car with friends for two days.",
          imageIds: ["pune-airport"],
        },
        {
          id: "via-shirdi-airport",
          name: "Via Shirdi Airport",
          description:
            "The closest airport to Sangamner is 50 km away, with an estimated travel time of 1.5 hours. It is a convenient option with a shorter trip to the venue.",
          imageIds: ["shirdi-airport"],
        },
        {
          id: "rental-car-sharing",
          name: "Rental Car Sharing",
          description:
            "A cost-effective two-day option shared with friends. Land in Pune before 9 AM on February 10, rent a car together and return via Pune on February 11 at night.",
          imageIds: ["rental-car-sharing"],
        },
        {
          id: "extended-stay",
          name: "Extended Stay",
          description:
            "Relatives' homes have space for extended stays. Guests can visit Shirdi and Trimbakeshwar or try the famous Saadhna misal in Nashik.",
          imageIds: ["extended-stay"],
        },
      ],
      order: 3,
    },
    {
      id: "things-to-do",
      type: "things-to-do",
      name: "Nearby Attractions",
      items: [
        {
          id: "shirdi-sai-baba-temple",
          name: "Shirdi Sai Baba Temple",
          description:
            "A famous spiritual pilgrimage site dedicated to Sai Baba, 50 km away. The site displays a rating of 4.8.",
          imageIds: ["shirdi-temple"],
        },
        {
          id: "trimbakeshwar-temple",
          name: "Trimbakeshwar Temple",
          description:
            "An ancient Jyotirlinga temple about 100 km away. The site displays a rating of 4.7.",
          imageIds: ["trimbakeshwar-temple"],
        },
        {
          id: "local-sangamner",
          name: "Local Sangamner",
          description:
            "Explore the town and its surroundings. The site displays a rating of 4.0.",
          imageIds: ["local-sangamner"],
          url: "https://www.youtube.com/watch?v=xvN2n0eRLX8",
        },
      ],
      order: 4,
    },
    {
      id: "registry",
      type: "registry",
      name: "Wedding Gift Registry",
      description:
        "Your presence is the greatest gift of all. Guests who wish to contribute can browse the couple's curated list and should message them to remove an item after ordering it.",
      items: [
        {
          id: "amazon-wishlist",
          name: "Amazon Wishlist",
          url: "https://www.amazon.in/hz/wishlist/ls/9L9KF252DUJP",
        },
      ],
      order: 5,
    },
    {
      id: "contact",
      type: "contact",
      name: "Get in Touch",
      description: "Reach out to the couple with any inquiries.",
      items: [
        {
          id: "email",
          name: "manoday717@gmail.com",
          url: "mailto:manoday717@gmail.com",
        },
        {
          id: "phone",
          name: "+91 8329544805",
          url: "tel:+918329544805",
        },
      ],
      order: 6,
    },
    {
      id: "rsvp",
      type: "custom",
      name: "Join Us On Our Special Day",
      description:
        "We would be honored to celebrate this beautiful moment with you. Kindly let us know if you will be attending by filling out the form.",
      items: [
        {
          id: "rsvp-form",
          name: "RSVP Form",
          url: "https://docs.google.com/forms/d/e/1FAIpQLSdPOjQYq-KFmYvZKz-rcHuG8Racq-7lb4XxRdQ_kHgNGF8w1w/viewform?embedded=true",
        },
      ],
      order: 7,
    },
    {
      id: "wedding-hashtag",
      type: "custom",
      name: "Wedding Hashtag",
      description: "#Meow&Forever",
      order: 8,
    },
  ],

  settings: {
    title: "Manali & Udayraj",
    timezone: "Asia/Kolkata",
  },
};
