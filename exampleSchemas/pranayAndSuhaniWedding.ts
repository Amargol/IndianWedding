// Pranay & Suhani - https://pranayagarwal02.github.io/pswedding/ - Custom

import type { WeddingWebsite } from "../types/WeddingSchema";

export const pranayAndSuhaniWedding: WeddingWebsite = {
  id: "pranay-and-suhani",

  couple: {
    partnerOne: "Pranay",
    partnerTwo: "Suhani",
    date: "2025-12-11",
    location: "Kotdwar",
  },

  images: [
    {
      id: "ganpati",
      url: "https://pranayagarwal02.github.io/pswedding/assets/images/ganpati.png",
      description: "Lord Ganesh",
    },
    {
      id: "haldi-icon",
      url: "https://pranayagarwal02.github.io/pswedding/assets/icons/haldi.png",
      description: "Haldi ceremony icon",
    },
    {
      id: "mehandi-icon",
      url: "https://pranayagarwal02.github.io/pswedding/assets/icons/mehandi.png",
      description: "Mehandi ceremony icon",
    },
    {
      id: "wedding-ceremony-icon",
      url: "https://pranayagarwal02.github.io/pswedding/assets/icons/weddingCeremony.png",
      description: "Wedding ceremony icon",
    },
    {
      id: "where-it-all-began",
      url: "https://pranayagarwal02.github.io/pswedding/assets/images/couple1.jpeg",
      description: "Where it all began...",
    },
    {
      id: "growing-together",
      url: "https://pranayagarwal02.github.io/pswedding/assets/images/couple2.jpeg",
      description: "Growing together in love",
    },
    {
      id: "creating-memories",
      url: "https://pranayagarwal02.github.io/pswedding/assets/images/couple3.jpeg",
      description: "Creating memories",
    },
    {
      id: "forever-starts-now",
      url: "https://pranayagarwal02.github.io/pswedding/assets/images/couple4.jpeg",
      description: "Forever starts now...",
    },
  ],

  events: [
    {
      id: "haldi-ceremony",
      type: "haldi",
      name: "Haldi Ceremony",
      date: "2025-12-10",
      startTime: "10:00",
      venue: {
        name: "Tourist Garden",
        address: "NBD Road, Kotdwar",
        mapUrl: "https://maps.app.goo.gl/BPmicgxWnC4RVuVF6",
      },
      dressCode: "Traditional Yellow ✨",
      imageIds: ["haldi-icon"],
      order: 1,
    },
    {
      id: "mehandi-ceremony",
      type: "mehndi",
      name: "Mehandi Ceremony",
      date: "2025-12-10",
      startTime: "19:00",
      venue: {
        name: "Tourist Garden",
        address: "NBD Road, Kotdwar",
        mapUrl: "https://maps.app.goo.gl/BPmicgxWnC4RVuVF6",
      },
      dressCode: "Traditional Green ✨",
      imageIds: ["mehandi-icon"],
      order: 2,
    },
    {
      id: "wedding-ceremony",
      type: "ceremony",
      name: "Wedding Ceremony",
      description:
        "The live event card displays 5:00 PM onwards. The page countdown targets 7:00 PM, while the repository README lists 9:00 PM; this example retains the visible event-card time.",
      date: "2025-12-11",
      startTime: "17:00",
      venue: {
        name: "J.K Farm",
        address: "Najibabad Road, Kotdwar",
        mapUrl: "https://maps.app.goo.gl/9hJz8FfQzdzCxSQe7",
      },
      imageIds: ["wedding-ceremony-icon"],
      order: 3,
    },
  ],

  information: [
    {
      id: "invitation",
      type: "custom",
      name: "You Are Cordially Invited",
      description:
        "With hearts overflowing with joy and gratitude, we warmly invite you to share in our happiness.",
      imageIds: ["ganpati"],
      items: [
        {
          id: "ganesh-blessing",
          name: "Ganesh Blessing",
          description: "॥ श्री गणेशाय नमः ॥",
          imageIds: ["ganpati"],
        },
        {
          id: "hindi-poetry",
          name: "Hindi Poetry",
          description:
            "दो दिलों का मिलन, दो परिवारों का संगम. खुशियों से सजे इस पल में, आपका साथ है सबसे अनमोल.",
        },
        {
          id: "presence",
          name: "Your Presence",
          description:
            "Your presence would be the greatest blessing as we embark on this beautiful journey of togetherness.",
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
          id: "pranay-family",
          name: "Pranay",
          description:
            "Son of Mrs Nisha Agarwal & Late Mr Awadesh Agarwal",
        },
        {
          id: "suhani-family",
          name: "Suhani",
          description:
            "Daughter of Mrs Preeti Rastogi & Mr. Sudhanshu Rastogi",
        },
      ],
      order: 2,
    },
    {
      id: "our-story",
      type: "our-story",
      name: "OUR STORY",
      imageIds: [
        "where-it-all-began",
        "growing-together",
        "creating-memories",
        "forever-starts-now",
      ],
      items: [
        {
          id: "where-it-all-began",
          name: "Where it all began...",
          imageIds: ["where-it-all-began"],
        },
        {
          id: "growing-together",
          name: "Growing together in love",
          imageIds: ["growing-together"],
        },
        {
          id: "creating-memories",
          name: "Creating memories",
          imageIds: ["creating-memories"],
        },
        {
          id: "forever-starts-now",
          name: "Forever starts now...",
          imageIds: ["forever-starts-now"],
        },
      ],
      order: 3,
    },
    {
      id: "blessings",
      type: "custom",
      name: "Your Blessings",
      description: "Share your blessings and good wishes for the couple",
      items: [
        {
          id: "send-blessings",
          name: "Send Blessings",
          description: "Submit your name and a message for Pranay and Suhani.",
          url: "https://formspree.io/f/xzzygwlk",
        },
      ],
      order: 4,
    },
    {
      id: "memories",
      type: "gallery",
      name: "Memories",
      description:
        "Share the love, upload your favorite moments from the celebration",
      items: [
        {
          id: "share-photos",
          name: "Share Photos",
          url: "https://photos.app.goo.gl/zF2Ji3QQC6C8qZdR8",
        },
      ],
      order: 5,
    },
    {
      id: "celebration",
      type: "custom",
      name: "Celebrating Love, Tradition, and New Beginnings",
      description: "॥ शुभ विवाह ॥",
      items: [
        {
          id: "author-credit",
          name: "Designed & Created by Ashish Varshney",
          url: "https://www.instagram.com/ashishvarshney__?igsh=MnNzMjhzbzR4aG04",
        },
      ],
      order: 6,
    },
  ],

  settings: {
    title: "Pranay & Suhani - Wedding Invitation",
    timezone: "Asia/Kolkata",
    primaryColor: "#D2691E",
    secondaryColor: "#DAA520",
  },
};
