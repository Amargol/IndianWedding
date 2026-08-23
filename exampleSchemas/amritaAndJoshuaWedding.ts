// Amrita & Joshua - https://www.theknot.com/us/amrita-bains-and-joshua-stephens-2025-10-25 - The Knot

import type { WeddingWebsite } from "../types/WeddingSchema";

export const amritaAndJoshuaWedding: WeddingWebsite = {
  id: "amrita-and-joshua",

  couple: {
    partnerOne: "Amrita Bains",
    partnerTwo: "Joshua Stephens",
    date: "2025-10-25",
    location: "Richmond, Texas",
  },

  images: [
    {
      id: "hero",
      url: "https://www.theknot.com/tk-media/images/d4a5f715-50fb-4273-ace8-b4c38bd6d9a4",
      description: "Amrita and Joshua",
    },
    {
      id: "our-story",
      url: "https://www.theknot.com/tk-media/images/af05bf51-2197-40d6-bd59-0feb13e115fa",
      description: "Amrita and Joshua's story",
    },
    {
      id: "hotel",
      url: "https://www.theknot.com/tk-media/images/42ee3118-f284-4ee4-951d-8940e80e660d",
      description: "Fairfield Inn & Suites Houston Missouri City",
    },
    {
      id: "gallery-one",
      url: "https://media-api.xogrp.com/images/918c48f1-6b46-488b-aa5b-fa721058da27",
    },
    {
      id: "gallery-two",
      url: "https://media-api.xogrp.com/images/d4ecf497-5ab3-4705-9d11-6f52b4470e91",
    },
    {
      id: "gallery-three",
      url: "https://media-api.xogrp.com/images/9603931b-5f77-4f82-8acb-9866d704c1af",
    },
    {
      id: "gallery-four",
      url: "https://media-api.xogrp.com/images/ca92409b-6aa2-4624-bca0-8e5dd1923024",
    },
    {
      id: "gallery-five",
      url: "https://media-api.xogrp.com/images/7b566539-5522-4e8a-a36c-552a925723df",
    },
    {
      id: "gallery-six",
      url: "https://media-api.xogrp.com/images/73b99225-a91a-4085-b3ed-4e0b524b242f",
    },
    {
      id: "gallery-seven",
      url: "https://media-api.xogrp.com/images/8addc0a7-4abd-4384-88c6-98eefba52567",
    },
    {
      id: "gallery-eight",
      url: "https://media-api.xogrp.com/images/c71f4e78-a270-401d-9232-cefc55a340fd",
    },
  ],

  events: [
    {
      id: "sangeet",
      type: "sangeet",
      name: "Sangeet",
      description:
        "An invitation-only celebration for family and close friends, with plenty of dancing and food.",
      date: "2025-10-23",
      startTime: "19:00",
      endTime: "00:00",
      venue: {
        name: "Calista Ballroom",
        address: "869 Dulles Avenue, Stafford, TX 77477",
      },
      dressCode:
        "Fun Indian bridal wear or semi-formal attire—wear whatever makes you feel most confident.",
      order: 1,
    },
    {
      id: "mehndi",
      type: "mehndi",
      name: "Mehndi",
      description:
        "A small invitation-only family henna event. The bride's henna is first and takes about an hour; all genders are welcome.",
      date: "2025-10-24",
      startTime: "10:00",
      endTime: "14:00",
      venue: {
        name: "Bains Home",
        address: "2523 Jester Lane, Stafford, TX 77477",
      },
      dressCode:
        "Dresses or Indian wear that you would not mind accidentally staining with henna.",
      order: 2,
    },
    {
      id: "ceremony",
      type: "ceremony",
      name: "Ceremony",
      description:
        "A traditional ceremony in the Gurdwara. Everyone sits on the floor, so guests should choose comfortable clothing.",
      date: "2025-10-25",
      startTime: "10:00",
      endTime: "13:00",
      venue: {
        name: "Gurdwara Sahib of Southwest Houston",
        address: "14811 Lindita Drive, Houston, TX 77083",
      },
      dressCode: "Formal wear with a head covering.",
      order: 3,
    },
    {
      id: "reception",
      type: "reception",
      name: "Reception",
      description:
        "A flashy, high-energy party with dancing throughout the night.",
      date: "2025-10-25",
      startTime: "19:00",
      venue: {
        name: "Safari Texas Ranch",
        address: "11627 FM 1464, Richmond, TX 77407",
      },
      dressCode: "Cocktail or Indian party wear that is easy to dance in.",
      order: 4,
    },
  ],

  information: [
    {
      id: "our-story",
      type: "our-story",
      name: "Love Love Love",
      description:
        "Amrita and Joshua felt an effortless connection from the moment their paths crossed. Laughter-filled conversations became adventures, quiet nights, mutual support, and best friendship. On April 1, 2022, during a date in The Woodlands, they said yes to forever and began preparing for their next chapter.",
      imageIds: ["our-story"],
      order: 1,
    },
    {
      id: "accommodations",
      type: "accommodations",
      name: "Hotel",
      description:
        "Rooms were blocked for October 22–26, 2025 at $109 per night plus tax. The source says the block has 12 rooms but also describes 10 king rooms and 5 double-queen rooms. The booking cutoff was September 22, 2025 at 11:59 PM CST.",
      imageIds: ["hotel"],
      items: [
        {
          id: "fairfield-inn",
          name: "Fairfield Inn & Suites Houston Missouri City",
          description:
            "3533 FM 1092 Road, Missouri City, TX 77459. Phone: (832) 899-8181. Group code: BWGS.",
          url: "https://www.marriott.com/en-us/hotels/houfm-fairfield-inn-and-suites-houston-missouri-city/overview/",
        },
      ],
      order: 2,
    },
    {
      id: "wedding-party",
      type: "wedding-party",
      name: "Wedding Party",
      items: [
        {
          id: "bava-bains",
          name: "Bava Bains — Mother of the Bride",
          description:
            "The heart and soul of every celebration, bringing laughter, joy, energy, dancing, and stories.",
        },
        {
          id: "bitu-bains",
          name: "Bitu Bains — Father of the Bride",
          description:
            "A man of few words who is always there for family and friends and is known for sneaky jokes.",
        },
        {
          id: "karan-bains",
          name: "Karan Bains — Brother of the Bride",
          description:
            "Amrita's brother and near-twin, a sweet soul who helps guide anyone in need.",
        },
        {
          id: "larissa-spurgeon",
          name: "Larissa Spurgeon — Mother of the Groom",
          description:
            "A caring mother whose love, kindness, support, warmth, and guidance helped shape the couple.",
        },
        {
          id: "carl-stephens",
          name: "Carl Stephens — Father of the Groom",
          description:
            "His quiet advice, hard work, and daily sacrifices are treasured cornerstones in the family's life.",
        },
        {
          id: "thomas-lacey-corey",
          name: "Thomas, Lacey, and Corey — Siblings of the Groom",
          description:
            "A close sibling group connected through a lifetime of shared mischief, belongings, and experiences.",
        },
        {
          id: "jada-cobb",
          name: "Jada Cobb — Daughter of the Groom",
          description:
            "A source of light, love, laughter, grace, kindness, compassion, and strength.",
        },
        {
          id: "kataria-family",
          name: "The Kataria Family — Bride's Aunt, Uncle, and Youngest Cousin",
          description:
            "Rimple Massi, Timmy Massar, and Gavin have shared in the bride's life adventures.",
        },
        {
          id: "margie-head",
          name: "Margie Head — Maid of Honor",
          description:
            "Amrita's best friend since high school, known for her kindness and fun spirit.",
        },
        {
          id: "nanke-aunts",
          name: "Nanke Aunts — Bride's Mother's Family",
          description:
            "Lali Massi, Kamal Mamjii, and Rimple Massi are described as wise and classy.",
        },
        {
          id: "nanke-uncles",
          name: "Nanke Uncles — Bride's Mother's Family",
          description:
            "Guri Mama, the family patriarch, and Pinky Massar are treasured uncles on the bride's mother's side.",
        },
        {
          id: "fathers-family",
          name: "Dad's Side of the Family",
          description: "The family's clan from Iowa to Texas.",
        },
        {
          id: "the-sisters",
          name: "The Sisters — Bride's Cousins",
          description:
            "The bride's cousins on her mother's side, celebrated as a fun group and the party's dancing queens.",
        },
        {
          id: "tina-bhuji",
          name: "Tina Bhuji — Bride's Aunt",
          description:
            "The bride's father's only sibling, mother of Pawan and Barry, and mother-in-law of Aisha.",
        },
        {
          id: "vancouver-family",
          name: "The Bros and Their Father — Bride's Uncle and Cousins",
          description: "Manohar, Pawan, and Barry are the bride's family from Vancouver.",
        },
        {
          id: "the-bros",
          name: "The Bros — Bride's Cousins",
          description: "A fun and rowdy group of cousins from the bride's mother's side.",
        },
      ],
      order: 3,
    },
    {
      id: "gallery",
      type: "gallery",
      name: "Photos",
      imageIds: [
        "gallery-one",
        "gallery-two",
        "gallery-three",
        "gallery-four",
        "gallery-five",
        "gallery-six",
        "gallery-seven",
        "gallery-eight",
      ],
      order: 4,
    },
    {
      id: "faq",
      type: "faq",
      name: "Q + A",
      items: [
        {
          id: "indian-clothes",
          name: "Where can I buy Indian wedding clothes?",
          description: "The couple recommends House of Indya and Lashkaraa.",
          url: "https://www.houseofindya.com/",
        },
        {
          id: "colors",
          name: "What colors should I wear?",
          description:
            "Any colors except red or maroon, which are reserved for the bride.",
        },
      ],
      order: 5,
    },
    {
      id: "registry",
      type: "registry",
      name: "Registry",
      description:
        "The published registry page directs guests to browse the couple's registry but does not expose individual items.",
      order: 6,
    },
  ],

  settings: {
    title: "Amrita & Joshua",
    timezone: "America/Chicago",
  },
};
