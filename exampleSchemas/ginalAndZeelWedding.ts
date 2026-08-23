// Ginal & Zeel - https://www.theknot.com/us/ginal-patel-and-zeel-patel-2026-08-23 - The Knot

import type { WeddingWebsite } from "../types/WeddingSchema";

export const ginalAndZeelWedding: WeddingWebsite = {
  id: "ginal-and-zeel",
  couple: {
    partnerOne: "Ginal Patel",
    partnerTwo: "Zeel Patel",
    date: "2026-08-23",
    location: "Parsippany-Troy Hills, NJ, United States"
  },
  images: [
    {
      id: "ginal-zeel-image-sheraton",
      url: "https://www.theknot.com/tk-media/images/5b20a0fa-73f4-4393-86ae-3b9b2bbb8477",
      description: "Sheraton Parsippany Hotel"
    }
  ],
  events: [
    {
      id: "ginal-zeel-event-manglik-prasango",
      type: "other",
      name: "Manglik Prasango",
      description: "Several religious ceremonies will take place between 7:30 am and noon, including a pithi ceremony where you can see the bride covered in haldi (yellow turmeric).\n\nLight breakfast will be served from 6 am-8 am, and lunch will be served after the ceremonies, later in the afternoon.",
      date: "2026-08-22",
      startTime: "07:30",
      endTime: "11:00",
      venue: {
        name: "Sheraton Parsippany Hotel",
        address: "199 Smith Road, Parsippany-Troy Hills, NJ, 07054, United States"
      },
      dressCode: "Hues of sunset & shades of yellow! Traditional Indian attire (sarees, chaniya choli, lehengas, kurtas) or semi-formal Western attire (long dresses or skirts, slacks, button-down shirts)",
      order: 1
    },
    {
      id: "ginal-zeel-event-garba-sangeet",
      type: "garba",
      name: "Garba/ Sangeet night ~ (Dance your hearts out)",
      description: "This event will include traditional Indian music and dancing— Garba, a typical folk dance with circular, rhythmic steps. The steps are easy to learn, and everyone is encouraged to participate! Dinner to be served between Garba and sangeet performances!\n\nJoin us for an evening filled with music, movement, and mouthwatering cuisine—a celebration of culture and community that promises to be a highlight of the event!",
      date: "2026-08-22",
      startTime: "18:00",
      endTime: "23:30",
      venue: {
        name: "Sheraton Parsippany Hotel",
        address: "199 Smith Road, Parsippany-Troy Hills, NJ, 07054, United States"
      },
      dressCode: "Colorful Indian attire (chaniya choli, lehengas, kurtas) or semi-formal Western attire (long dresses or skirts, slacks, button-down shirts)",
      order: 2
    },
    {
      id: "ginal-zeel-event-wedding",
      type: "ceremony",
      name: "Din shagan Da (Wedding)",
      description: "It’s our big day! The Baraat will begin at 9:30 am. Come join Zeel as he enters the wedding venue and be a part of the music/dancing procession! The wedding ceremony will begin shortly after. Snacks and drinks will be provided before the start of the ceremony, with lunch to follow later on in the evening.",
      date: "2026-08-23",
      venue: {
        name: "Sheraton Parsippany Hotel",
        address: "199 Smith Road, Parsippany-Troy Hills, NJ, 07054, United States"
      },
      dressCode: "Traditional Indian attire such as sarees, lehengas, or kurtas is encouraged. Formal Western attire, including dresses and suits, is also welcome.",
      order: 3
    },
    {
      id: "ginal-zeel-event-hast-melap",
      type: "ceremony",
      name: "Hast Melap",
      description: "Hastmelap is a meaningful Hindu wedding ritual in which the bride and groom’s hands are joined, symbolizing the union of two souls, the joining of two families, and their promise to begin life together with love, trust, and blessings.",
      date: "2026-08-23",
      startTime: "11:00",
      endTime: "23:30",
      venue: {
        name: "Sheraton Parsippany Hotel",
        address: "199 Smith Road, Parsippany-Troy Hills, NJ, 07054, United States"
      },
      order: 4
    }
  ],
  information: [
    {
      id: "ginal-zeel-info-our-story",
      type: "our-story",
      name: "Our Story",
      description: "Our Story coming soon!",
      order: 1
    },
    {
      id: "ginal-zeel-info-wedding-party",
      type: "wedding-party",
      name: "Wedding Party",
      items: [
        {
          id: "ginal-zeel-wedding-party-01-vidhi-patel",
          name: "Vidhi Patel",
          description: "Bridesmaid"
        },
        {
          id: "ginal-zeel-wedding-party-02-heny-patel",
          name: "Heny Patel",
          description: "Bridesmaid"
        },
        {
          id: "ginal-zeel-wedding-party-03-bhoomi-patel",
          name: "Bhoomi Patel",
          description: "Bridesmaid"
        },
        {
          id: "ginal-zeel-wedding-party-04-enza-nash",
          name: "Enza Nash",
          description: "Bridesmaid"
        }
      ],
      order: 2
    },
    {
      id: "ginal-zeel-info-faq",
      type: "faq",
      name: "Q + A",
      items: [
        {
          id: "ginal-zeel-faq-01-can-i-have-some-details-regarding-your-special-d",
          name: "CAN I HAVE SOME DETAILS REGARDING YOUR SPECIAL DAY?",
          description: "Yes, we will be having a traditional Indian wedding! Our wedding will take place on August 23, 2026, with events on the day prior. Please take a look at the home tab for details regarding our events! If you have any questions about our events, please reach out to us!"
        },
        {
          id: "ginal-zeel-faq-02-do-you-have-any-hotel-recommendations",
          name: "DO YOU HAVE ANY HOTEL RECOMMENDATIONS?",
          description: "Room block pricing is available at the Sheraton Parsippany NJ, but any hotel in the area should be a short drive to all of the events (see the Travel tab on this website for additional details)."
        },
        {
          id: "ginal-zeel-faq-03-what-is-the-best-way-to-get-from-the-hotel-to-th",
          name: "WHAT IS THE BEST WAY TO GET FROM THE HOTEL TO THE WEDDING EVENTS?",
          description: "Rideshare services such as Uber and Lyft are widely available in the area. Alternatively, if you decide to rent a vehicle, all venue locations will have parking available to guests."
        },
        {
          id: "ginal-zeel-faq-04-is-there-a-dress-code",
          name: "IS THERE A DRESS CODE?",
          description: "Suggestions for outfits for each event are listed under the RSVP tab."
        },
        {
          id: "ginal-zeel-faq-05-when-will-i-receive-an-invitation-and-when-shoul",
          name: "WHEN WILL I RECEIVE AN INVITATION AND WHEN SHOULD I RSVP BY?",
          description: "Invitations will be sent in June 2026. Once received, please submit your RSVP on this website by July 2026. If you are unable to access the RSVP or see any errors in names/guests (apologies in advance!), please reach out to Binal (sister-in-law), Jaldip ( brother), or their parents. Thank you!"
        },
        {
          id: "ginal-zeel-faq-06-i-have-more-questions-about-your-wedding-who-can",
          name: "I HAVE MORE QUESTIONS ABOUT YOUR WEDDING, WHO CAN I CONTACT",
          description: "Feel free to reach out to Binal, Jaldip, or their parents, and they will be happy to answer any questions!"
        },
        {
          id: "ginal-zeel-faq-07-what-about-wedding-gifts-do-you-have-a-wedding-r",
          name: "WHAT ABOUT WEDDING GIFTS? DO YOU HAVE A WEDDING REGISTRY?",
          description: "We are kindly requesting no boxed gifts."
        }
      ],
      order: 3
    },
    {
      id: "ginal-zeel-info-accommodations",
      type: "accommodations",
      name: "Accommodations",
      items: [
        {
          id: "ginal-zeel-accommodation-sheraton-parsippany",
          name: "Sheraton Parsippany Hotel",
          description: "Address: 199 Smith Rd, Parsippany, NJ, US",
          imageIds: [
            "ginal-zeel-image-sheraton"
          ],
          url: "https://theknot.booking.engine.com/properties/P0000000000000116996?checkIn=2026-08-22&checkOut=2026-08-24&roomCount=1&guestCount=2&utm_source=the-knot&utm_medium=channel&utm_campaign=channel-the-knot&utm_term=tkwws"
        }
      ],
      order: 4
    },
    {
      id: "ginal-zeel-info-travel",
      type: "travel",
      name: "Travel",
      items: [
        {
          id: "ginal-zeel-travel-nearby-airports",
          name: "Airports near by!",
          description: "1. Newark Liberty International Airport (EWR) (The closest one to the wedding venue) in NJ\n\nDistance: Approximately 13 miles (about 20 minutes by car)\n\n2. Teterboro Airport (TEB)\n\nDistance: Approximately 7 miles (about 15-20 minutes by car) in NJ\n\n3.LaGuardia Airport (LGA) in NYC\n\nDistance: Approximately 15 miles (about 30 minutes by car, depending on traffic)\n\n4. John F. Kennedy International Airport (JFK) in NYC\n\nDistance: Approximately 25 miles (about 40-50 minutes by car, depending on traffic)"
        }
      ],
      order: 5
    },
    {
      id: "ginal-zeel-info-things-to-do",
      type: "things-to-do",
      name: "Things to Do",
      items: [
        {
          id: "ginal-zeel-activity-01-central-park",
          name: "Central Park",
          description: "Take a stroll, rent a bike, or enjoy a picnic in Central Park. There are also often events and performances happening throughout the summer. Also, you can visit the Central Park Zoo with your kids.\n\nAddress: New York, NY, USA\n\nPhone: (212) 310-6600",
          url: "https://www.centralparknyc.org/"
        },
        {
          id: "ginal-zeel-activity-02-times-square",
          name: "Times Square",
          description: "Times Square is a bustling hub of activity in the heart of New York City, offering a wide range of attractions, dining options, and entertainment for visitors\n\n1. Broadway Shows: Times Square is famous for its numerous theaters showing world-class Broadway productions. Guests can catch a show at one of the iconic theaters like the Majestic Theatre, the New Amsterdam Theatre, or the Broadway Theatre.\n\n2. Explore Times Square: Take a stroll through Times Square to experience the bright lights, colorful billboards, and lively atmosphere. Don't forget to snap some photos with the famous Times Square signage and the iconic TKTS booth.\n\n3. Visit Madame Tussauds New York: Guests can get up close and personal with lifelike wax figures of their favorite celebrities at Madame Tussauds New York. It's a fun and interactive experience for visitors of all ages.\n\n4. Shopping: Times Square is home to numerous shops and boutiques where guests can find everything from souvenirs and memorabilia to high-end fashion and electronics. Stores like the Disney Store, M&M's World, and the flagship stores of major retailers are popular attractions.\n\n5. Dining: There's no shortage of dining options around Times Square, ranging from casual eateries to fine dining restaurants. Guests can enjoy a diverse array of cuisines, including American, Italian, Asian, and more. Some popular spots include Junior's Cheesecake, Carmine's Italian Restaurant, and The View Restaurant & Lounge.\n\n6. Times Square Visitor Center: The Times Square Visitor Center offers information about attractions, events, and tours in the area. Guests can stop by to pick up maps, brochures, and recommendations from knowledgeable staff.\n\n7. Ride the Ferris Wheel at Toys \"R\" Us: Although the iconic Toys \"R\" Us store has closed, the Ferris wheel inside the store has been relocated to a nearby location and is still operational. Guests can enjoy a ride with panoramic views of Times Square.\n\n8. Experience Virtual Reality at VR World: VR World offers an immersive virtual reality experience with a variety of games, simulations, and experiences for guests to enjoy. It's a great way to try cutting-edge technology and have fun with friends and family.\n\nAddress: Manhattan, NY 10036, USA",
          url: "https://www.timessquarenyc.org/"
        },
        {
          id: "ginal-zeel-activity-03-american-dream",
          name: "American Dream",
          description: "American Dream is a large entertainment and retail complex with numerous stores, restaurants, and attractions, including an indoor amusement park, waterpark, and ice skating rink\n\nAddress: 1 American Dream Wy, East Rutherford, NJ 07073, USA\n\nPhone: (833) 263-7326",
          url: "https://www.americandream.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp_website"
        },
        {
          id: "ginal-zeel-activity-04-summit-one-vanderbilt",
          name: "SUMMIT One Vanderbilt",
          description: "1. Summit One Vanderbilt Observation Deck: Opening in 2022, Summit One Vanderbilt offers unparalleled views of NYC, along with immersive exhibits and outdoor terraces for panoramic cityscape vistas.\n\n2. Grand Central Terminal: Adjacent to One Vanderbilt, guests can explore this iconic transportation hub, housing shops, restaurants, and the renowned celestial ceiling in the Main Concourse.\n\n3. Dining and Shopping: While One Vanderbilt itself doesn't have public dining or retail options, nearby Grand Central Terminal and its surroundings boast a diverse array of restaurants, cafes, and shops.\n\n4. Bryant Park: A short walk away, Bryant Park provides a serene escape with lush lawns, beautiful gardens, and seasonal activities like ice skating in winter and outdoor movie screenings in summer.\n\nAddress: 45 E 42nd St, New York, NY 10017, USA",
          url: "https://summitov.com/"
        }
      ],
      order: 6
    },
    {
      id: "ginal-zeel-info-gallery",
      type: "gallery",
      name: "Photos",
      description: "Photos coming soon!",
      order: 7
    }
  ],
  settings: {
    title: "Ginal & Zeel",
    timezone: "America/New_York"
  }
};

