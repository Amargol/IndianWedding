// Sushan & Sanah - https://www.sushanandsanahwedding.com/ - Squarespace
// The custom domain has expired. This example uses archived homepage/story content;
// registry items were independently verified at the matching Zola registry.

import type { WeddingWebsite } from "../types/WeddingSchema";

const squarespaceImageBase =
  "https://images.squarespace-cdn.com/content/v1/665cf60dc3a32c3e2e43f64e";

export const sushanAndSanahWedding: WeddingWebsite = {
  id: "sushan-and-sanah",

  couple: {
    partnerOne: "Sushan Sheregar",
    partnerTwo: "Sanah Langer",
    date: "2024-11-25",
    location: "New Delhi, India",
  },

  images: [
    {
      id: "hero",
      url: `${squarespaceImageBase}/613254b4-c50b-4d69-baeb-2ca134a23a56/DSC_9096.jpg`,
      description: "Sushan and Sanah",
    },
    {
      id: "haldi",
      url: `${squarespaceImageBase}/93707204-f1b0-40c9-a2fd-a9a105f6087e/DSC_2014.jpg`,
      description: "Haldi",
    },
    {
      id: "sangeet",
      url: `${squarespaceImageBase}/de3720fc-9ace-41f8-b1cb-9ae800f0aa68/DSC_2202.jpg`,
      description: "Sangeet",
    },
    {
      id: "ceremony",
      url: `${squarespaceImageBase}/b50e0b63-fe71-41fe-91db-be25feb2fd77/DSC_9010.jpg`,
      description: "Wedding ceremony",
    },
    {
      id: "reception",
      url: `${squarespaceImageBase}/5db1b509-6b98-4cdc-8a20-7a62df3078ee/DSC_8808.jpg`,
      description: "Reception",
    },
    {
      id: "story-01",
      url: `${squarespaceImageBase}/0035409f-4043-4c4a-9556-f0b638b640dc/IMG_6947.JPG`,
    },
    {
      id: "story-02",
      url: `${squarespaceImageBase}/58f96e31-9bf2-465e-b3df-e4ccdecfa4dc/IMG_5833.jpg`,
    },
    {
      id: "story-03",
      url: `${squarespaceImageBase}/e21bd600-4c68-4751-832d-dccc6aa87f96/Screenshot%2B2024-06-23%2Bat%2B6.16.01%E2%80%AFPM.png`,
    },
    {
      id: "story-04",
      url: `${squarespaceImageBase}/c92060ca-53f1-40c3-bf04-22c3b7157b8a/IMG_6898.JPG`,
    },
    {
      id: "story-05",
      url: `${squarespaceImageBase}/ddb137c3-89a6-4047-98f3-6ede61b3ee4d/IMG_6876.JPG`,
    },
    {
      id: "story-06",
      url: `${squarespaceImageBase}/58980b73-5e3a-4882-be7b-eef6f458afff/IMG_6881.JPG`,
    },
    {
      id: "story-07",
      url: `${squarespaceImageBase}/9f5eeb9c-ce8b-4262-bce9-acb7d54b4b2e/IMG_6884.JPG`,
    },
    {
      id: "story-08",
      url: `${squarespaceImageBase}/1054a60b-49cf-4cbf-8665-bff603ec10f4/IMG_6885.JPG`,
    },
    {
      id: "story-09",
      url: `${squarespaceImageBase}/f8078d21-7496-4e6b-8dc2-58a6142a98ed/IMG_7114.JPG`,
    },
    {
      id: "story-10",
      url: `${squarespaceImageBase}/0152c8ae-8c8c-4e95-8fbf-774f29af75bb/IMG_7155.JPG`,
    },
    {
      id: "story-11",
      url: `${squarespaceImageBase}/c600db14-6371-448b-994d-6df37ff65b02/IMG_1030.JPG`,
    },
    {
      id: "story-12",
      url: `${squarespaceImageBase}/16f8a71d-61ca-4372-9ea0-278e9d5a32ce/IMG_5838.JPG`,
    },
    {
      id: "story-13",
      url: `${squarespaceImageBase}/e7a50abc-726b-48df-8fec-ffd47b06f113/IMG_5832.JPG`,
    },
    {
      id: "story-14",
      url: `${squarespaceImageBase}/7d8a0fd1-53b6-482d-9109-10da0de0a1f1/IMG_5927.JPG`,
    },
    {
      id: "story-15",
      url: `${squarespaceImageBase}/1fcaf550-1694-4abc-9b58-ed7eafe5e16f/IMG_5933.JPG`,
    },
    {
      id: "story-16",
      url: `${squarespaceImageBase}/d565377c-f5e9-4e8e-b914-fccf66493714/IMG_5998.JPG`,
    },
    {
      id: "story-17",
      url: `${squarespaceImageBase}/cf61b31c-bf8f-488e-955c-0c8f8e285267/IMG_5999.JPG`,
    },
    {
      id: "story-18",
      url: `${squarespaceImageBase}/f6bff666-07be-495a-8e6f-52f49c0d282f/IMG_5840.JPG`,
    },
    {
      id: "story-19",
      url: `${squarespaceImageBase}/090f22f8-55ee-45f9-91cf-eebafa47fd4d/DSC_2534.jpeg`,
    },
    {
      id: "story-20",
      url: `${squarespaceImageBase}/467c9baa-1a4f-47ea-af16-1182f4f91715/DSC_2947.jpeg`,
    },
    {
      id: "story-21",
      url: `${squarespaceImageBase}/bd25b727-e662-41aa-b345-226ce5238bf8/DSC_2758.jpeg`,
    },
  ],

  events: [
    {
      id: "haldi",
      type: "haldi",
      name: "Haldi",
      date: "2024-11-24",
      venue: { name: "ITC Maurya" },
      imageIds: ["haldi"],
      order: 1,
    },
    {
      id: "sangeet",
      type: "sangeet",
      name: "Sangeet",
      date: "2024-11-24",
      venue: { name: "Bella-Mondé" },
      imageIds: ["sangeet"],
      order: 2,
    },
    {
      id: "wedding-ceremony",
      type: "ceremony",
      name: "Wedding Ceremony",
      date: "2024-11-25",
      venue: { name: "ITC Maurya" },
      imageIds: ["ceremony"],
      order: 3,
    },
    {
      id: "reception",
      type: "reception",
      name: "Reception",
      date: "2024-11-25",
      venue: { name: "Army Hospital Research & Referral Grounds" },
      imageIds: ["reception"],
      order: 4,
    },
  ],

  information: [
    {
      id: "our-story",
      type: "our-story",
      name: "Our Story",
      description:
        "Sushan, a Mangalorean born and raised in Mumbai, and Sanah, a Punjabi-Kashmiri born and raised in Delhi, matched on Bumble during the COVID lockdown. At their first lunch Sushan brought board games, but they talked all day instead. The connection initially fizzled, then they met again six months later at Sushan's annual Christmas party. Four years later they were best friends and partners, bringing South and North Indian cultures together. Sushan says he knew after their first few dates that Sanah was the one; Sanah says meeting him felt like home and still does.",
      imageIds: ["story-01", "story-02", "story-03", "story-04"],
      order: 1,
    },
    {
      id: "gallery",
      type: "gallery",
      name: "Our Story in Photos",
      imageIds: [
        "story-05",
        "story-06",
        "story-07",
        "story-08",
        "story-09",
        "story-10",
        "story-11",
        "story-12",
        "story-13",
        "story-14",
        "story-15",
        "story-16",
        "story-17",
        "story-18",
        "story-19",
        "story-20",
        "story-21",
      ],
      order: 2,
    },
    {
      id: "rsvp",
      type: "custom",
      name: "RSVP",
      description: "Guests were asked to RSVP by August 15, 2024.",
      order: 3,
    },
    {
      id: "registry",
      type: "registry",
      name: "Registry",
      description:
        "The expired Squarespace registry page could not be recovered. These items come from the independently matched Zola registry for Sanah Langer and Sushan Sheregar.",
      items: [
        {
          id: "view-registry",
          name: "View the Zola Registry",
          url: "https://www.zola.com/registry/sanahandsushan",
        },
        { id: "new-home-fund", name: "New Home Fund" },
        {
          id: "honeymoon-fund",
          name: "Honeymoon Fund",
          description: "For an Italy road trip.",
        },
        { id: "plane-tickets", name: "Round Trip Plane Tickets" },
        {
          id: "brooklinen-sheets",
          name: "Brooklinen Luxe Sateen 4-Piece Sheet Set",
        },
        { id: "blacklock-skillet", name: "Lodge Blacklock Skillet" },
        {
          id: "charleston-cutting-board",
          name: "Ironwood Charleston Cutting Board",
        },
        { id: "lodge-skillet", name: "Lodge 12-Inch Skillet" },
        { id: "zola-gift-card", name: "Zola Gift Card" },
        { id: "ninja-blender", name: "Ninja Foodi Power Blender" },
        {
          id: "crate-and-barrel-cutting-board",
          name: "Crate & Barrel Rectangular End-Grain Cutting Board",
        },
        {
          id: "levtex-duvet",
          name: "Levtex Washed Linen Duvet",
        },
      ],
      order: 4,
    },
  ],

  settings: {
    title: "Sushan & Sanah",
    timezone: "Asia/Kolkata",
  },
};
