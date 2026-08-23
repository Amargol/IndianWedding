// Nitish & Vaishnavi - https://ntmishra0009.github.io/ - Custom-coded (HTML/CSS/JS)

import type { WeddingWebsite } from "../types/WeddingSchema";

export const nitishAndVaishnaviWedding: WeddingWebsite = {
  id: "nitish-and-vaishnavi",

  couple: {
    partnerOne: "Nitish Mishra",
    partnerTwo: "Vaishnavi Shukla",
    date: "2027-02-22",
    location: "Prayagraj, Uttar Pradesh, India",
  },

  images: [
    {
      id: "couple-image",
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400&auto=format&fit=crop",
      description:
        "A stock Indian wedding photograph displayed with the alt text “Nitish & Vaishnavi”; the site does not establish that it depicts the couple.",
    },
  ],

  events: [
    {
      id: "silmayan",
      type: "other",
      name: "Silmayan",
      date: "2027-02-19",
      order: 1,
    },
    {
      id: "haldi",
      type: "haldi",
      name: "Haldi",
      date: "2027-02-21",
      order: 2,
    },
    {
      id: "marriage",
      type: "ceremony",
      name: "Marriage",
      description:
        "The venue association is inferred from the site's separate Wedding Venue section.",
      date: "2027-02-22",
      venue: {
        name: "Grand Garden",
        address:
          "Balu Mandi, 224/1, Karelabagh, Prayagraj, Uttar Pradesh 211016",
        mapUrl: "https://maps.app.goo.gl/gVpXHuKnsok87Xs18",
      },
      imageIds: ["couple-image"],
      order: 3,
    },
    {
      id: "reception",
      type: "reception",
      name: "Reception",
      description:
        "The venue association is inferred from the site's separate Reception Venue section.",
      date: "2027-02-24",
      venue: {
        name: "ॐ हरि कृपा मंडपम",
        address:
          "Near Gomti Inter College, Phulpur, Prayagraj, Uttar Pradesh 212402",
        mapUrl: "https://maps.app.goo.gl/HxX341sENoeQV1Ps8",
      },
      order: 4,
    },
  ],

  information: [
    {
      id: "families",
      type: "families",
      name: "With Blessings From",
      items: [
        {
          id: "groom-family",
          name: "Groom: Nitish Mishra",
          description: "Parents: Mr. Manoj Mishra and Mrs. Alpana Mishra.",
        },
        {
          id: "bride-family",
          name: "Bride: Vaishnavi Shukla",
          description:
            "Parents: Mr. Brijmohan Shukla and Mrs. Shukla.",
        },
      ],
      order: 1,
    },
    {
      id: "invocation",
      type: "custom",
      name: "Invocation",
      description: "Two souls, one journey, endless blessings.",
      items: [
        {
          id: "ganesh-invocation",
          name: "|| श्री गणेशाय नमः ||",
        },
        {
          id: "ganesh-shloka",
          name: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।",
          description: "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
        },
      ],
      order: 2,
    },
    {
      id: "scratch-card",
      type: "custom",
      name: "A Little Surprise",
      description: "Scratch the golden plate to reveal the date!",
      items: [
        {
          id: "scratch-card-reveal",
          name: "WE ARE GETTING MARRIED!",
          description:
            "22 • FEB • 2027. Bless us with your presence.",
        },
      ],
      order: 3,
    },
    {
      id: "contact",
      type: "contact",
      name: "Contact Details",
      description: "For any queries or guidance regarding routes.",
      items: [
        {
          id: "manoj-mishra",
          name: "Manoj Mishra",
          description: "+91 9918 698 631",
          url: "tel:+919918698631",
        },
        {
          id: "nitin-mishra",
          name: "Nitin Mishra",
          description: "+91 9517 658 657",
          url: "tel:+919517658657",
        },
      ],
      order: 4,
    },
    {
      id: "wedding-hashtag",
      type: "custom",
      name: "Wedding Hashtag",
      description: "#NitishWedsVaishnavi",
      order: 5,
    },
  ],

  settings: {
    title: "Nitish & Vaishnavi",
    timezone: "Asia/Kolkata",
    primaryColor: "#580000",
    secondaryColor: "#D4AF37",
  },
};
