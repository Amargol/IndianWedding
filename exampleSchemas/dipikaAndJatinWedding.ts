// Dipika & Jatin - https://dipika-jatin.github.io/ - Custom-coded (Astro)

import type { WeddingWebsite } from "../types/WeddingSchema";

export const dipikaAndJatinWedding: WeddingWebsite = {
  id: "dipika-and-jatin",

  couple: {
    partnerOne: "Dipika",
    partnerTwo: "Jatin",
    date: "2026-11-21",
    location: "Kolkata, India",
  },

  images: [
    {
      id: "story-panorama",
      url: "https://dipika-jatin.github.io/story/panorama.jpg",
      description:
        "An illustrated panorama of Dipika and Jatin's journey, from a Kolkata classroom through their long-distance years and shared life to forever.",
    },
    {
      id: "story-school-days",
      url: "https://dipika-jatin.github.io/story/card-school.jpg",
      description:
        "A wooden desk by a sunlit window, with an open notebook, pen, paper plane, books, and the Birla Bharati school building outside.",
    },
    {
      id: "story-pani-puri",
      url: "https://dipika-jatin.github.io/story/card-pani.jpg",
      description:
        "A boy reacting to spicy pani puri at a Kolkata street stall while a girl laughs beside him, with the Victoria Memorial in the background.",
    },
    {
      id: "story-across-cities",
      url: "https://dipika-jatin.github.io/story/card-distance.jpg",
      description:
        "A map of India with two location pins joined by a dotted heart and chat icons, framed by study-desk scenes from both cities.",
    },
    {
      id: "story-growing-together",
      url: "https://dipika-jatin.github.io/story/card-growing.jpg",
      description:
        "A wooden desk with a laptop, plant, books, open journal, and coffee cup.",
    },
    {
      id: "story-match-night",
      url: "https://dipika-jatin.github.io/story/card-match.jpg",
      description:
        "Two friends in Argentina jerseys cheering while their team celebrates on television.",
    },
    {
      id: "story-same-skyline",
      url: "https://dipika-jatin.github.io/story/card-skyline.jpg",
      description:
        "A couple walking hand in hand on a flower-lined path under festival lights, with the Charminar in the distance at sunset.",
    },
    {
      id: "story-forever",
      url: "https://dipika-jatin.github.io/story/card-forever.jpg",
      description:
        "A couple in traditional Indian attire inside an ancient sandstone temple, surrounded by carved walls, a Nandi statue, and temple spires.",
    },
  ],

  events: [
    {
      id: "guest-check-in-welcome-breakfast",
      type: "welcome-party",
      name: "Guest Check-in & Welcome Breakfast",
      description: "Settle in, say hello and start the celebrations.",
      date: "2026-11-20",
      startTime: "11:00",
      venue: {
        name: "Kenilworth Hotel",
        address:
          "1 & 2, Little Russell Street, Kolkata, West Bengal 700 071",
        mapUrl: "https://maps.google.com/?q=Kenilworth+Hotel+Kolkata",
      },
      order: 1,
    },
    {
      id: "haldi",
      type: "haldi",
      name: "Haldi Ceremony",
      description:
        "A vibrant blessing ritual with turmeric, flowers and the warmth of family.",
      date: "2026-11-20",
      startTime: "14:00",
      venue: {
        name: "Kenilworth Hotel",
        address:
          "1 & 2, Little Russell Street, Kolkata, West Bengal 700 071",
        mapUrl: "https://maps.google.com/?q=Kenilworth+Hotel+Kolkata",
      },
      order: 2,
    },
    {
      id: "sangeet",
      type: "sangeet",
      name: "Sangeet Night",
      description:
        "An electric evening of music, dance and joy as two families become one.",
      date: "2026-11-20",
      startTime: "19:00",
      venue: {
        name: "The Dockyard Co",
        address:
          "3, Strand Road, Fairlie Place, Kolkata, West Bengal 700 001",
        mapUrl: "https://maps.google.com/?q=The+Dockyard+Co+Kolkata",
      },
      order: 3,
    },
    {
      id: "mehendi",
      type: "mehndi",
      name: "Mehendi Ceremony",
      description:
        "An intimate morning of intricate henna artistry, laughter and timeless tradition.",
      date: "2026-11-21",
      startTime: "10:00",
      venue: {
        name: "Kenilworth Hotel",
        address:
          "1 & 2, Little Russell Street, Kolkata, West Bengal 700 071",
        mapUrl: "https://maps.google.com/?q=Kenilworth+Hotel+Kolkata",
      },
      order: 4,
    },
    {
      id: "varmala",
      type: "ceremony",
      name: "Varmala",
      description:
        "The sacred exchange of garlands as Dipika and Jatin choose each other before their loved ones.",
      date: "2026-11-21",
      startTime: "19:00",
      venue: {
        name: "The Dockyard Co",
        address:
          "3, Strand Road, Fairlie Place, Kolkata, West Bengal 700 001",
        mapUrl: "https://maps.google.com/?q=The+Dockyard+Co+Kolkata",
      },
      order: 5,
    },
    {
      id: "wedding-ceremony",
      type: "ceremony",
      name: "Wedding Ceremony",
      description:
        "Vedic vows solemnised under the stars, followed by an unforgettable night of dining and dancing.",
      date: "2026-11-21",
      startTime: "21:00",
      venue: {
        name: "The Dockyard Co",
        address:
          "3, Strand Road, Fairlie Place, Kolkata, West Bengal 700 001",
        mapUrl: "https://maps.google.com/?q=The+Dockyard+Co+Kolkata",
      },
      order: 6,
    },
  ],

  information: [
    {
      id: "invitation",
      type: "custom",
      name: "Wedding Invitation",
      description:
        "Together with our families. We're getting married! Dipika & Jatin · 21 November 2026 · Kolkata. You're invited.",
      order: 1,
    },
    {
      id: "our-story",
      type: "our-story",
      name: "Our Story",
      description:
        "And now, we get to celebrate the next chapter with you.",
      imageIds: ["story-panorama"],
      items: [
        {
          id: "school-days",
          name: "School days",
          imageIds: ["story-school-days"],
        },
        {
          id: "pani-puri",
          name: "Pani puri",
          imageIds: ["story-pani-puri"],
        },
        {
          id: "across-cities",
          name: "Across cities",
          imageIds: ["story-across-cities"],
        },
        {
          id: "growing-together",
          name: "Growing together",
          imageIds: ["story-growing-together"],
        },
        {
          id: "match-night",
          name: "Match night",
          imageIds: ["story-match-night"],
        },
        {
          id: "same-skyline",
          name: "Same skyline",
          imageIds: ["story-same-skyline"],
        },
        {
          id: "forever",
          name: "Forever",
          imageIds: ["story-forever"],
        },
      ],
      order: 2,
    },
    {
      id: "venue-details",
      type: "custom",
      name: "Venue Details",
      items: [
        {
          id: "kenilworth-hotel",
          name: "Kenilworth Hotel",
          description:
            "Haldi and Mehendi. 1 & 2, Little Russell Street, Kolkata, West Bengal 700 071.",
          url: "https://maps.google.com/?q=Kenilworth+Hotel+Kolkata",
        },
        {
          id: "the-dockyard-co",
          name: "The Dockyard Co",
          description:
            "Sangeet, Varmala and Wedding. 3, Strand Road, Fairlie Place, Kolkata, West Bengal 700 001.",
          url: "https://maps.google.com/?q=The+Dockyard+Co+Kolkata",
        },
      ],
      order: 3,
    },
    {
      id: "save-the-date",
      type: "custom",
      name: "Save the Date",
      description: "Add 20–21 November 2026 to your calendar.",
      items: [
        {
          id: "google-calendar",
          name: "Google Calendar",
          description:
            "Add the two-day wedding celebration to Google Calendar.",
          url: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Dipika%20%26%20Jatin%20%E2%80%94%20Wedding&dates=20261120/20261122&details=Join%20us%20as%20Dipika%20and%20Jatin%20get%20married.%20Full%20schedule%20and%20venue%20details%20at%20https%3A%2F%2Fdipika-jatin.github.io&location=Kolkata%2C%20India",
        },
        {
          id: "apple-outlook-calendar",
          name: "Apple · Outlook",
          description:
            "Download the two-day wedding celebration as an ICS calendar event.",
        },
        {
          id: "whatsapp-share",
          name: "Share on WhatsApp",
          description:
            "Share Dipika and Jatin's wedding invitation on WhatsApp.",
          url: "https://wa.me/?text=We're%20getting%20married!%20Dipika%20%26%20Jatin%20%C2%B7%2021%20November%202026%20%C2%B7%20Kolkata.%20You're%20invited%20%E2%80%94%20https%3A%2F%2Fdipika-jatin.github.io",
        },
      ],
      order: 4,
    },
    {
      id: "contact",
      type: "contact",
      name: "Contact",
      description: "For queries.",
      items: [
        {
          id: "email",
          name: "jatinpandey77@gmail.com",
          url: "mailto:jatinpandey77@gmail.com",
        },
      ],
      order: 5,
    },
  ],

  settings: {
    title: "Dipika & Jatin",
    timezone: "Asia/Kolkata",
    primaryColor: "#7B2435",
    secondaryColor: "#C8A96E",
  },
};
