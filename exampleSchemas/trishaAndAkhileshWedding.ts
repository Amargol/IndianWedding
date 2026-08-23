// Trisha & Akhilesh - https://www.zola.com/wedding/trishaandakhilesh - Zola

export const trishaAndAkhileshWedding: WeddingWebsite = {
  id: "trisha-and-akhilesh",

  couple: {
    partnerOne: "Trisha",
    partnerTwo: "Akhilesh",
    date: "2026-03-08",
    location: "Udaipur, India",
  },

  images: [
    {
      id: "udaipur",
      url: "https://images.zola.com/ebcf6821-7620-420b-9a6d-addffad24919?w=1500",
      description: "Udaipur",
    },
    {
      id: "our-story",
      url: "https://images.zola.com/97c431af-53c1-4c80-9d9a-10c839dad343?w=1500",
      description: "Trisha and Akhilesh",
    },
  ],

  events: [
    {
      id: "haldi",
      type: "haldi",
      name: "Haldi",
      description:
        "A poolside Haldi ceremony to kick off the wedding celebrations.",
      date: "2026-03-07",
      startTime: "11:00",
      endTime: "14:00",
      venue: {
        name: "Wyndham Grand Udaipur Fatehsagar Lake",
      },
      dressCode:
        "Bright and breezy festive attire. Yellow, cream, orange, and other bright colors are encouraged.",
      order: 1,
    },
    {
      id: "sangeet",
      type: "sangeet",
      name: "Sangeet",
      description:
        "An evening of music, dance, performances, and celebration.",
      date: "2026-03-07",
      startTime: "19:00",
      endTime: "00:00",
      venue: {
        name: "Wyndham Grand Udaipur Fatehsagar Lake",
      },
      dressCode:
        "Bold, bright, festive colors and traditional Indian attire are encouraged.",
      order: 2,
    },
    {
      id: "wedding-ceremony",
      type: "ceremony",
      name: "Wedding Ceremony",
      description:
        "An outdoor wedding ceremony bringing together North and South Indian traditions. The baraat begins before the ceremony, followed by lunch.",
      date: "2026-03-08",
      startTime: "10:00",
      endTime: "13:00",
      venue: {
        name: "Wyndham Grand Udaipur Fatehsagar Lake",
      },
      dressCode:
        "Soft pastel colors such as pink, peach, lavender, white, cream, blue, and light green. Traditional Indian attire is recommended.",
      order: 3,
    },
    {
      id: "reception",
      type: "reception",
      name: "Cocktail Hour & Reception",
      description:
        "An evening celebrating the newlyweds with cocktails, music, toasts, and dancing.",
      date: "2026-03-08",
      startTime: "19:00",
      endTime: "02:00",
      venue: {
        name: "The Mansion, Udaipur",
      },
      dressCode:
        "Sparkly or shimmering Western or Indian formalwear is encouraged.",
      order: 4,
    },
  ],

  information: [
    {
      id: "our-story",
      type: "our-story",
      name: "Our Story",
      description:
        "Trisha and Akhilesh first crossed paths in college through Bollywood dance teams. Years later they reconnected in Seattle and quickly became close. Their relationship grew through cooking nights, travel, game nights, and time with family. Akhilesh later proposed at Muir Beach Overlook near San Francisco.",
      imageIds: ["our-story"],
      order: 1,
    },
    {
      id: "dress-code",
      type: "dress-code",
      name: "Dress Code",
      description:
        "The dress codes are suggestions, and guests should not feel the need to buy anything new.",
      items: [
        {
          id: "haldi-dress-code",
          name: "Haldi",
          description:
            "Bright and breezy attire in yellow, cream, orange, and other festive shades.",
        },
        {
          id: "sangeet-dress-code",
          name: "Sangeet",
          description:
            "Bold and colorful festive Indian attire suitable for dancing.",
        },
        {
          id: "ceremony-dress-code",
          name: "Wedding Ceremony",
          description:
            "Soft pastel colors with traditional Indian attire recommended.",
        },
        {
          id: "reception-dress-code",
          name: "Cocktail Hour & Reception",
          description:
            "Sparkly or shimmering Western or Indian formalwear.",
        },
      ],
      order: 2,
    },
    {
      id: "travel",
      type: "travel",
      name: "Travel",
      imageIds: ["udaipur"],
      items: [
        {
          id: "getting-to-udaipur",
          name: "Getting to Udaipur",
          description:
            "International travelers can fly into a major Indian city such as Delhi or Mumbai and then take a domestic flight to Udaipur.",
        },
        {
          id: "visa",
          name: "Visa",
          description:
            "Guests traveling from the United States without an OCI card will likely need a tourist visa. India offers an online e-visa application.",
          url: "https://indianvisaonline.gov.in/",
        },
      ],
      order: 3,
    },
    {
      id: "accommodations",
      type: "accommodations",
      name: "Accommodations",
      description:
        "Hotel accommodations are covered for March 7 and March 8. Guests arriving a night early can reach out for help arranging an additional hotel night.",
      order: 4,
    },
    {
      id: "transportation",
      type: "transportation",
      name: "Transportation",
      description:
        "The wedding planners will collect guests' travel details. Transportation is planned between Udaipur airport and the hotels, as well as between designated hotels and wedding venues.",
      order: 5,
    },
    {
      id: "things-to-do",
      type: "things-to-do",
      name: "Things to Do in Udaipur",
      items: [
        {
          id: "city-palace",
          name: "City Palace",
          description:
            "A major Lake Pichola landmark known for its architecture, museums, courtyards, and views.",
        },
        {
          id: "lake-pichola",
          name: "Lake Pichola Boat Ride",
          description:
            "A scenic boat ride with views of City Palace, Jag Mandir, and Lake Palace.",
        },
        {
          id: "jagdish-temple",
          name: "Jagdish Temple",
          description:
            "A historic 17th-century temple known for its architecture and intricate stonework.",
        },
        {
          id: "bagore-ki-haveli",
          name: "Bagore Ki Haveli Cultural Show",
          description:
            "An evening cultural performance featuring traditional Rajasthani dance, puppetry, and folk music.",
        },
        {
          id: "old-city-markets",
          name: "Old City Markets",
          description:
            "Markets featuring handicrafts, miniature paintings, textiles, and jewelry.",
        },
      ],
      order: 6,
    },
    {
      id: "registry",
      type: "registry",
      name: "Registry",
      description:
        "The couple says guests' presence is the greatest gift and has created a single fund for anyone who would still like to contribute.",
      items: [
        {
          id: "forever-fund",
          name: "Our Forever Fund",
          description:
            "A fund for Trisha and Akhilesh's first chapter as newlyweds.",
          url: "https://www.zola.com/registry/trishaandakhilesh",
        },
      ],
      order: 7,
    },
  ],

  settings: {
    title: "Trisha & Akhilesh",
    timezone: "Asia/Kolkata",
  },
};