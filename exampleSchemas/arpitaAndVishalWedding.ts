// Arpita & Vishal - https://arpita21soni.github.io/ArpitaGotHerVish/ - Custom-coded (HTML/CSS/JS)

import type { WeddingWebsite } from "../types/WeddingSchema";

const atrioVenue = {
  name: "Atrio by Devam",
  address:
    "Off, N.H - 8, D Block, Kapas Hera, New Delhi, Delhi 110097, India",
  mapUrl: "https://share.google/3PTg30T2aGJwhPJcB",
};

export const arpitaAndVishalWedding: WeddingWebsite = {
  id: "arpita-and-vishal",

  couple: {
    partnerOne: "Arpita",
    partnerTwo: "Vishal",
    date: "2026-12-04",
    location: "New Delhi, Delhi, India",
  },

  images: [
    {
      id: "home-portrait-one",
      url: "https://arpita21soni.github.io/ArpitaGotHerVish/assets/images/img1.JPG",
      description: "Vishal and Arpita",
    },
    {
      id: "home-portrait-two",
      url: "https://arpita21soni.github.io/ArpitaGotHerVish/assets/images/img3.jpg",
      description: "Vishal and Arpita",
    },
    {
      id: "story-photo-one",
      url: "https://arpita21soni.github.io/ArpitaGotHerVish/assets/images/img2.jpg",
      description: "Vishal and Arpita",
    },
    {
      id: "story-photo-two",
      url: "https://arpita21soni.github.io/ArpitaGotHerVish/assets/images/img6.jpg",
      description: "Vishal and Arpita",
    },
    {
      id: "guestbook-photo",
      url: "https://arpita21soni.github.io/ArpitaGotHerVish/assets/images/img4.jpg",
      description: "Vishal and Arpita",
    },
    {
      id: "faq-photo",
      url: "https://arpita21soni.github.io/ArpitaGotHerVish/assets/images/img5.jpg",
      description: "Wedding moments",
    },
    {
      id: "engagement-photo-one",
      url: "https://arpita21soni.github.io/ArpitaGotHerVish/assets/images/Engagement%20Photo%201.JPG",
      description: "Engagement Photo 1",
    },
    {
      id: "engagement-photo-two",
      url: "https://arpita21soni.github.io/ArpitaGotHerVish/assets/images/Engagement%20Photo%202.JPG",
      description: "Engagement Photo 2",
    },
    {
      id: "engagement-photo-three",
      url: "https://arpita21soni.github.io/ArpitaGotHerVish/assets/images/Engagement%20Photo%203.JPG",
      description: "Engagement Photo 3",
    },
    {
      id: "engagement-photo-four",
      url: "https://arpita21soni.github.io/ArpitaGotHerVish/assets/images/Engagement%20Photo%204.JPG",
      description: "Engagement Photo 4",
    },
    {
      id: "engagement-photo-five",
      url: "https://arpita21soni.github.io/ArpitaGotHerVish/assets/images/Engagement%20Photo%205.JPG",
      description: "Engagement Photo 5",
    },
    {
      id: "engagement-photo-six",
      url: "https://arpita21soni.github.io/ArpitaGotHerVish/assets/images/Engagement%20Photo%206.JPG",
      description: "Engagement Photo 6",
    },
  ],

  events: [
    {
      id: "mehndi",
      type: "mehndi",
      name: "Mehndi",
      description:
        "Mehndi marks the traditional beginning of our wedding festivities. Henna is applied to the bride and loved ones while family and friends gather for music, laughter, and blessings. It is a colorful celebration of joy, beauty, and togetherness.",
      date: "2026-12-02",
      startTime: "11:00",
      venue: {
        name: "Soni Family Residence",
      },
      order: 1,
    },
    {
      id: "haldi",
      type: "haldi",
      name: "Haldi",
      description:
        "Haldi is a sacred pre-wedding ritual where turmeric paste is lovingly applied to the bride and groom as a blessing for prosperity, protection, and happiness before marriage.",
      date: "2026-12-03",
      startTime: "11:00",
      venue: atrioVenue,
      order: 2,
    },
    {
      id: "sangeet-and-sagan",
      type: "sangeet",
      name: "Sangeet & Sagan",
      description:
        "Sangeet is a festive evening of performances, dance, and celebration by family and friends. Sagan traditions include blessings and the ceremonial exchange of gifts and sweets before the wedding day.",
      date: "2026-12-03",
      startTime: "19:00",
      venue: atrioVenue,
      order: 3,
    },
    {
      id: "baraat",
      type: "baraat",
      name: "Baraat",
      description:
        "Baraat is the groom's celebratory procession with music, dance, and great energy as he arrives with loved ones to the wedding venue.",
      date: "2026-12-04",
      startTime: "10:00",
      venue: atrioVenue,
      order: 4,
    },
    {
      id: "shaadi",
      type: "ceremony",
      name: "Shaadi (Varmala & Phere)",
      description:
        "This is our main wedding ceremony. During Varmala, we exchange garlands to accept one another; during Phere, we take sacred vows around the holy fire, symbolizing our lifelong bond.",
      date: "2026-12-04",
      startTime: "12:30",
      venue: atrioVenue,
      order: 5,
    },
    {
      id: "reception",
      type: "reception",
      name: "Reception",
      description:
        "Reception is our post-wedding celebration where families and friends come together for dinner, music, and dancing as we begin this new chapter together.",
      date: "2026-12-04",
      startTime: "19:00",
      venue: atrioVenue,
      order: 6,
    },
  ],

  information: [
    {
      id: "invitation",
      type: "custom",
      name: "We're Getting Married!",
      description:
        "Join us as we celebrate love, tradition, and the joyful beginning of our forever. We can’t wait to share this special milestone with the people who mean the most to us.",
      imageIds: ["home-portrait-one", "home-portrait-two"],
      items: [
        {
          id: "wedding-celebrations",
          name: "Wedding Celebrations",
          description:
            "Join us for six heartfelt celebrations across our wedding journey.",
        },
        {
          id: "presence-and-blessings",
          name: "Your Presence and Blessings",
          description:
            "Your presence and blessings are all we need to make this celebration complete. We look forward to celebrating this special milestone with you!",
        },
        {
          id: "footer-message",
          name: "With Love and Gratitude",
          description:
            "Thank you for being a part of our special journey. December 4th, 2026 | Atrio by Devam. With love and gratitude ✦",
        },
      ],
      order: 1,
    },
    {
      id: "our-story",
      type: "our-story",
      name: "A Symphony of Distances: Our Story",
      description: "A journey of hearts coming together",
      imageIds: ["story-photo-one", "story-photo-two"],
      items: [
        {
          id: "vishal-and-arpita",
          name: "Vishal & Arpita",
          description:
            "They say economists analyze patterns, but nothing could have predicted the complex, beautiful trajectory that began in August 2019. Within the revered walls of the Delhi School of Economics, two worlds quietly aligned. He was the quintessential Delhi boy, occupying the front of the lecture hall, sharp and focused. She was the girl from UP, seeking knowledge, seated quietly at the back.",
        },
        {
          id: "december-2020-turning-point",
          name: "December 2020: The Turning Point",
          description:
            "Friendship blossomed instantly, fueled by shared intellect and laughter. They became inseparable friends, their bond growing deeper, their conversations longer, all while the unspoken truth of their love grew quietly beneath the surface.\n\nThe dam broke on December 2nd, 2020. He finally summoned the courage to speak his heart. The subsequent forty-eight hours were a silent internal battle for her against feelings too potent to ignore.\n\nOn December 4th, 2020, amidst the movement of Delhi traffic, she turned to him and finally said 'Yes'.",
        },
        {
          id: "love-across-miles",
          name: "Love Across Miles",
          description:
            "That year in Delhi was a sun-drenched season of shared dreams and indelible memories. But love, they soon learned, would be tested by geography. In December 2021, she moved to Bangalore for work, marking the start of their long-distance journey. They adjusted to the miles, unaware that the distance was about to stretch across an ocean.\n\nFor years, their romance was measured in time zones, late-night video calls, and the unwavering conviction that they were meant for each other. Time, rather than fraying their connection, only revealed its unbreakable strength. They knew, regardless of where their paths led, they had to walk them together.",
        },
        {
          id: "a-promise-kept",
          name: "A Promise Kept",
          description:
            "On December 2nd, 2025—exactly five years after his first confession—they got engaged. And on December 4th, 2026, precisely six years to the day she said 'Yes', Vishal and Arpita will marry.\n\nFor now, their home remains the quiet spaces between heartbeats, spanning the vastness between Delhi and Pittsburgh. They will endure the distance, whether measured in months or years, fueled by the certainty that no matter how far they are, they are always, invariably, coming home to one another.",
        },
        {
          id: "love-quote",
          name: "Love",
          description:
            '"Love is not about finding the perfect person, but about seeing an imperfect person perfectly."',
        },
      ],
      order: 2,
    },
    {
      id: "venue-details",
      type: "custom",
      name: "The Venue",
      description:
        "Everything you need to know about our celebrations, venues, and guest accommodations.",
      items: [
        {
          id: "atrio-by-devam",
          name: "Atrio by Devam",
          description:
            "Address: Off, N.H - 8, D Block, Kapas Hera, New Delhi, Delhi 110097, India. Contact: +911143337000. Set amidst serene surroundings and elegant spaces, Atrio offers the perfect setting for us to celebrate each moment with our loved ones.",
          url: "https://share.google/3PTg30T2aGJwhPJcB",
        },
      ],
      order: 3,
    },
    {
      id: "accommodations",
      type: "accommodations",
      name: "The Stay",
      description:
        "For your comfort and convenience, rooms are arranged here for our out-of-town guests.",
      items: [
        {
          id: "hotel-park-blue",
          name: "Hotel Park Blue",
          description:
            "Address: Kh.no.378, Raj Singh Complex, Kapas Hera, New Delhi, Delhi 110037. Contact: +919717468777.",
          url: "https://share.google/EY0G4Wh9aWM9md6LB",
        },
      ],
      order: 4,
    },
    {
      id: "dress-code",
      type: "dress-code",
      name: "Dress Code",
      description:
        "Traditional Indian attire is encouraged and appreciated!",
      items: [
        {
          id: "men",
          name: "Men",
          description: "Sherwanis, kurtas, churidars, or formal suits",
        },
        {
          id: "women",
          name: "Women",
          description: "Sarees, lehengas, anarkalis, or ethnic wear",
        },
        {
          id: "colors",
          name: "Colors",
          description: "Bright, festive colors are welcome.",
        },
      ],
      order: 5,
    },
    {
      id: "gallery",
      type: "gallery",
      name: "Photo Gallery",
      description: "Moments from our celebration",
      imageIds: [
        "engagement-photo-one",
        "engagement-photo-two",
        "engagement-photo-three",
        "engagement-photo-four",
        "engagement-photo-five",
        "engagement-photo-six",
      ],
      items: [
        {
          id: "engagement-gallery",
          name: "Engagement Gallery",
          description:
            "A glimpse into our engagement photos, capturing the love and joy leading up to our wedding day.",
          imageIds: [
            "engagement-photo-one",
            "engagement-photo-two",
            "engagement-photo-three",
            "engagement-photo-four",
            "engagement-photo-five",
            "engagement-photo-six",
          ],
        },
        {
          id: "full-wedding-photos",
          name: "Full Wedding Photos",
          description:
            "Complete wedding photos and videos will be available after the wedding day! 📸 Check back after December 4th for the full gallery. Or we'll share a link to our cloud storage where all photos and videos will be organized by event.",
        },
      ],
      order: 6,
    },
    {
      id: "rsvp",
      type: "custom",
      name: "We'd Love to Have You!",
      description:
        "Please let us know if you'll be joining us for our celebrations. Your RSVP helps us plan and ensure we have everything ready for a wonderful celebration.",
      items: [
        {
          id: "rsvp-form",
          name: "RSVP Form",
          description:
            "Fill out the form above to leave your wishes and blessings in our guest book!",
          url: "https://form.typeform.com/to/umnTvo9B",
        },
        {
          id: "rsvp-full-name",
          name: "What is your full name?",
          description: "Required short-text field.",
        },
        {
          id: "rsvp-email",
          name: "What's your email address?",
          description: "Optional email field.",
        },
        {
          id: "rsvp-phone",
          name: "What's the best phone number to reach you?",
          description: "Optional phone-number field with India as the default country.",
        },
        {
          id: "rsvp-guest-count",
          name: "How many guests (including yourself) will be attending?",
          description: "Required number field.",
        },
        {
          id: "rsvp-celebration-dates",
          name: "Which dates will you be joining the wedding celebration?",
          description:
            "Required multiple-choice field allowing multiple selections: Mehndi, 2nd Dec; Haldi, 3rd Dec; Sangeet, 3rd Dec; Shaadi, 4th Dec; Reception, 4th Dec.",
        },
        {
          id: "rsvp-special-requests",
          name: "Please share any special requests or dietary restrictions.",
          description: "Optional long-text field.",
        },
        {
          id: "rsvp-confirmation",
          name: "RSVP Confirmation",
          description: "Thank you for responding!",
        },
        {
          id: "rsvp-help",
          name: "RSVP Help",
          description:
            "If you're having trouble submitting the RSVP form, please reach out to us via our Q&A page.",
          url: "https://arpita21soni.github.io/ArpitaGotHerVish/qa.html",
        },
      ],
      order: 7,
    },
    {
      id: "guest-book",
      type: "custom",
      name: "Leave Your Mark",
      description:
        "We would be honored to receive your wishes, blessings, and kind words. Your messages will be treasured as memories of this special day. Please share your thoughts below!",
      imageIds: ["guestbook-photo"],
      items: [
        {
          id: "guest-book-form",
          name: "Wedding Guestbook",
          description:
            "Welcome to Arpita & Vishal's Wedding Guestbook! Fill out the form above to leave your wishes and blessings in our guest book!",
          url: "https://form.typeform.com/to/bhatFQIs",
        },
        {
          id: "guest-book-name",
          name: "Your Name",
          description: "Required short-text field.",
        },
        {
          id: "guest-book-relationship",
          name: "Your Relationship",
          description:
            "Required multiple-choice field: Family - Bride's Side; Family - Groom's Side; Friend - Bride; Friend - Groom; Other.",
        },
        {
          id: "guest-book-message",
          name: "Share your wishes, blessings, or a special memory...",
          description: "Optional long-text field.",
        },
        {
          id: "guest-book-confirmation",
          name: "Guest Book Confirmation",
          description: "Thank you for sharing your love and wishes!",
        },
        {
          id: "why-a-guest-book",
          name: "📖 Why a Guest Book?",
          description:
            "A guest book is a timeless tradition that captures the love and support of everyone who shares in our joy. These precious messages will be treasured forever as a reminder of all those who blessed our marriage.",
        },
      ],
      order: 8,
    },
    {
      id: "faq",
      type: "faq",
      name: "Frequently Asked Questions",
      description:
        "Click on any question below to expand the answer. Can't find what you're looking for? Still Have Questions? If you didn't find the answer you're looking for, please don't hesitate to reach out. We're here to help and want to make sure you have a wonderful experience!",
      imageIds: ["faq-photo"],
      items: [
        {
          id: "faq-arrival-time",
          name: "When is the wedding and what time should I arrive?",
          description:
            "The wedding will take place on December 4th, 2026. Haldi and Sangeet & Sagan are on December 3rd. We recommend arriving 15-20 minutes before the scheduled event time. Exact timings for each event are: Haldi: 11:00 AM on December 3rd; Sangeet & Sagan: 7:00 PM on December 3rd; Baraat: 10:00 AM on December 4th; Shaadi (Varmala & Phere): 12:30 PM on December 4th; Reception: 7:00 PM on December 4th.",
        },
        {
          id: "faq-dress-code",
          name: "What should I wear? Are there specific dress codes?",
          description:
            "Dress Code: Traditional Indian attire is encouraged and appreciated! Men: Sherwanis, kurtas, churidars, or formal suits. Women: Sarees, lehengas, anarkalis, or ethnic wear. Colors: Bright, festive colors are welcome.",
        },
        {
          id: "faq-rsvp-deadline",
          name: "Do I need to RSVP? What's the deadline?",
          description:
            "Yes! We need an accurate headcount for planning purposes. Please RSVP by November 20th, 2026 on our RSVP page. If you haven't received an invitation but would like to attend, please",
          url: "https://arpita21soni.github.io/ArpitaGotHerVish/rsvp.html",
        },
        {
          id: "faq-parking",
          name: "Is there parking available at the venue?",
          description: "Yes, parking is available at Atrio by Devam.",
        },
        {
          id: "faq-children",
          name: "Are children welcome? Are there kids' activities?",
          description:
            "Yes, children are welcome! We have celebrations that the whole family can enjoy. Please let us know about children attending during RSVP. Activities and arrangements for kids will be made accordingly.",
        },
        {
          id: "faq-accommodations",
          name: "Will there be accommodation arrangements?",
          description:
            "Accommodation for out-of-town guests has been arranged at Hotel Park Blue. You can view the stay details here: Hotel Park Blue.",
          url: "https://share.google/EY0G4Wh9aWM9md6LB",
        },
        {
          id: "faq-wedding-photos",
          name: "When will wedding photos be available?",
          description:
            "Professional photos and videos from the wedding will be available after the events. We'll share a link to a cloud storage or gallery where you can view and download photos. Check back on our gallery page after December 4th for the full collection!",
          url: "https://arpita21soni.github.io/ArpitaGotHerVish/gallery.html",
        },
      ],
      order: 9,
    },
    {
      id: "what-to-expect",
      type: "traditions",
      name: "What to Expect",
      items: [
        {
          id: "traditions",
          name: "Traditions",
          description: "Sacred rituals and customs to bond us",
        },
        {
          id: "music-and-dance",
          name: "Music & Dance",
          description:
            "Joyful celebrations filled with rhythm and energy",
        },
        {
          id: "cuisine",
          name: "Cuisine",
          description: "A blend of traditional and modern flavors",
        },
        {
          id: "love-and-family",
          name: "Love & Family",
          description: "Cherished moments with people who matter most",
        },
      ],
      order: 10,
    },
    {
      id: "contact",
      type: "contact",
      name: "Contact and Social",
      items: [
        {
          id: "instagram",
          name: "Instagram",
          url: "https://www.instagram.com/arpitavishalstory/",
        },
        {
          id: "venue-contact",
          name: "Atrio by Devam",
          description: "+911143337000",
          url: "https://share.google/3PTg30T2aGJwhPJcB",
        },
        {
          id: "hotel-contact",
          name: "Hotel Park Blue",
          description: "+919717468777",
          url: "https://share.google/EY0G4Wh9aWM9md6LB",
        },
      ],
      order: 11,
    },
  ],

  settings: {
    title: "ArpitaGotHerVish - December 4th, 2026",
    timezone: "Asia/Kolkata",
    primaryColor: "#1f7e78",
    secondaryColor: "#9b4f73",
  },
};
