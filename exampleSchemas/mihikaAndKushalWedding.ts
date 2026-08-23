// Mihika & Kushal - https://www.theknot.com/us/mihika-guntur-and-kushal-kapoor-2026-12-04 - The Knot

import type { WeddingWebsite } from "../types/WeddingSchema";

export const mihikaAndKushalWedding: WeddingWebsite = {
  id: "mihika-and-kushal",
  couple: {
    partnerOne: "Mihika Guntur",
    partnerTwo: "Kushal Kapoor",
    date: "2026-12-04",
    location: "Amritsar, Punjab, India"
  },
  images: [
    {
      id: "mihika-kushal-image-cover",
      url: "https://www.theknot.com/tk-media/images/429c994c-8d37-41a4-a654-56049d9e0fb5",
      description: "Mihika & Kushal Home Page Banner"
    },
    {
      id: "mihika-kushal-image-kapoors",
      url: "https://www.theknot.com/tk-media/images/424dccc9-5e76-4e91-a4b6-5fb48d3234ca",
      description: "The Kapoors: Sonia & Sanjive"
    },
    {
      id: "mihika-kushal-image-gunturs",
      url: "https://www.theknot.com/tk-media/images/25666280-8e29-4367-909a-acb5f5df968a",
      description: "The Gunturs: Bhanu & Pavan"
    },
    {
      id: "mihika-kushal-image-monogram",
      url: "https://www.theknot.com/tk-media/images/024e0678-804e-4f35-a346-3bd01f3d6318",
      description: "Mihika and Kushal's wedding monogram"
    }
  ],
  events: [
    {
      id: "mihika-kushal-event-sangeet",
      type: "sangeet",
      name: "Sangeet",
      description: "Every celebration has its opening act. Ours begins with an evening where music sets the tone, performances tell our story, and the dance floor comes alive. Join us as we raise a toast to the first chapter of our wedding festivities with unforgettable performances, an open DJ night, and celebrations that continue well into the night.",
      date: "2026-12-02",
      startTime: "18:30",
      venue: {
        name: "Welcomhotel By ITC Hotels, Raja Sansi, Amritsar",
        address: "Ajnala Road, Raja Sansi, Amritsar, Punjab 143101, India"
      },
      dressCode: "Dress for a night of glamour in sophisticated Indo-Western silhouettes, inspired by the opulent jewel tones of maroon and pink.",
      order: 1
    },
    {
      id: "mihika-kushal-event-haldi",
      type: "haldi",
      name: "Haldi",
      description: "Bathed in the golden glow of tradition, our Haldi is where the Punjabi rituals of Maiyan & Batna meet the timeless Telugu ceremonies of Pasupu Kottadam & Pellikuthuru. Together, we will bless Mihika and Kushal with turmeric before surrendering to an afternoon of infectious laughter, spirited celebrations, music, and playful splashes of water, where every joyful moment becomes a cherished memory.",
      date: "2026-12-03",
      startTime: "10:30",
      venue: {
        name: "Welcomhotel By ITC Hotels, Raja Sansi, Amritsar",
        address: "Ajnala Road, Raja Sansi, Amritsar, Punjab 143101, India"
      },
      dressCode: "Celebrate in chic Indian or Western casuals, inspired by the soft vibrance of peach and green.",
      order: 2
    },
    {
      id: "mihika-kushal-event-mehendi",
      type: "mehndi",
      name: "Mehendi",
      description: "Our Mehendi is a vibrant celebration of tradition, artistry, and joyful togetherness. The cherished Punjabi Kudmayi sets the tone for an evening enriched with spirited Boliyan, soulful folk songs, and the timeless ritual of adorning every guest with henna. Surrounded by music, colour, and laughter, we invite you to experience the warmth of Punjab in its most festive and heartfelt form.",
      date: "2026-12-03",
      startTime: "18:00",
      venue: {
        name: "Welcomhotel By ITC Hotels, Raja Sansi, Amritsar",
        address: "Ajnala Road, Raja Sansi, Amritsar, Punjab 143101, India"
      },
      dressCode: "Celebrate the artistry of the evening in relaxed Indian or Western casuals, beautifully complemented by vibrant yellows and serene blues.",
      order: 3
    },
    {
      id: "mihika-kushal-event-telegu-wedding-ceremony",
      type: "ceremony",
      name: "Telegu Wedding Ceremony (Pelli)",
      description: "As dawn breaks, we invite you to experience the timeless beauty of a traditional Telugu wedding. Witness centuries-old rituals unfold with quiet grace, where every chant, every blessing, and every sacred custom celebrates not only the union of two souls, but the coming together of two families and their enduring legacies.",
      date: "2026-12-04",
      startTime: "08:00",
      venue: {
        name: "Welcomhotel By ITC Hotels, Raja Sansi, Amritsar",
        address: "Ajnala Road, Raja Sansi, Amritsar, Punjab 143101, India"
      },
      dressCode: "Dress in graceful Indian or Western formals, inspired by the warm metallic palette of copper, rose gold, and sunlit orange.",
      order: 4
    },
    {
      id: "mihika-kushal-event-punjabi-wedding-ceremony",
      type: "ceremony",
      name: "Punjabi Wedding Ceremony (Vyah)",
      description: "Some celebrations are witnessed. Others are felt. A Punjabi wedding belongs to the latter, where the rhythm of the Baraat, the richness of tradition, and the warmth of family come together in a celebration that is both magnificent and deeply soulful.\n\nThe evening may mark the finale of our festivities, but it is also the beginning of our greatest story; one written with love, blessed by generations, and shared with the people who mean the most to us.",
      date: "2026-12-04",
      startTime: "17:30",
      venue: {
        name: "Welcomhotel By ITC Hotels, Raja Sansi, Amritsar",
        address: "Ajnala Road, Raja Sansi, Amritsar, Punjab 143101, India"
      },
      dressCode: "A celebration of grandeur calls for your finest Indian or Western formals in opulent golds and rich browns, thoughtfully accented with refined shimmer and timeless glamour.",
      order: 5
    }
  ],
  information: [
    {
      id: "mihika-kushal-info-welcome",
      type: "custom",
      name: "Welcome",
      description: "A celebration woven from heritage, love, and generations of tradition. Mihika and Kushal welcome you to witness the coming together of two families, two cultures, and one extraordinary beginning at the historic Sandhanwalia Haveli.",
      imageIds: [
        "mihika-kushal-image-cover"
      ],
      order: 1
    },
    {
      id: "mihika-kushal-info-celebration-venue",
      type: "accommodations",
      name: "Celebration Venue",
      description: "Our Celebration Home\n\nSet amidst tranquil gardens on the outskirts of Amritsar, Welcomhotel by ITC Hotels, Raja Sansi is where timeless Punjabi heritage meets contemporary luxury. Built around the beautifully restored 150-year-old Sandhanwalia Haveli, the estate preserves the elegance of a bygone era while offering the warmth and comfort of modern hospitality.\n\nJust minutes from Sri Guru Ram Dass Jee International Airport and a short drive from the city's most treasured landmarks, the hotel offers an idyllic setting for guests to celebrate, unwind, and experience the rich culture of Punjab. From its expansive lawns and heritage architecture to its thoughtfully curated culinary experiences and gracious hospitality, every corner of the property reflects the spirit of the region.\n\nOver the course of our wedding celebrations, this beautiful estate will become our home: a place where traditions will come alive, families will come together, and unforgettable memories will be made.",
      order: 2
    },
    {
      id: "mihika-kushal-info-our-tribe",
      type: "families",
      name: "Our Tribe",
      items: [
        {
          id: "mihika-kushal-family-kapoors",
          name: "The Kapoors: Sonia & Sanjive — The Legacy Behind Kushal",
          description: "For generations, the Kapoor family has believed that life's greatest luxuries are not possessions, but people: the conversations that linger long after dinner, the laughter that fills a home, and the joy of gathering those they love under one roof. Warm-hearted, effortlessly gracious, and endlessly hospitable, they possess the rare gift of making every celebration feel deeply personal and every guest feel as though they have always belonged.\n\nRooted in the rich cultural tapestry of Punjab, their story has gracefully unfolded across continents. Years spent in New Zealand, followed by a life beautifully established in Australia, have shaped a family whose worldview is as expansive as it is grounded. Along the way, they have carried with them not only cherished friendships and treasured memories but an unwavering commitment to family, generosity, and togetherness.\n\nThe Kapoor family embodies a beautiful duality, where the exuberance of Punjabi heritage meets the elegance of a truly global perspective. They celebrate wholeheartedly, love unconditionally, and believe that the most meaningful moments in life are those shared with the people who matter most.\n\nAs they join hands with the Guntur family, they bring with them a legacy of warmth, tradition, and unmistakable joie de vivre, setting the stage for a celebration that is not only grand in scale but rich in soul and destined to be remembered for generations to come.",
          imageIds: [
            "mihika-kushal-image-kapoors"
          ]
        },
        {
          id: "mihika-kushal-family-gunturs",
          name: "The Gunturs: Bhanu & Pavan — The Legacy Behind Mihika",
          description: "The Guntur family has always believed that the greatest celebrations are built not by occasions, but by the people who gather to share them. Warm, gracious, and effortlessly welcoming, they have a beautiful way of making every guest feel like family and every moment feel worthy of remembering.\n\nWith roots deeply woven into Hyderabad and a journey that took them through Dubai before Australia became home, their story is one enriched by cultures, friendships, and experiences gathered across continents. Wherever life has taken them, they have carried with them the same generosity of spirit, creating a community that extends far beyond family and is bound together by genuine affection and lifelong friendships.\n\nIt is this beautiful blend of Hyderabadi warmth, global perspective, and heartfelt hospitality that defines the Guntur family. Loved by all who know them, they have an effortless gift for bringing people together and an infectious joy that naturally becomes the heart of every celebration.\n\nAs they come together with the Kapoor family, they bring not only cherished traditions and enduring values but a spirit of warmth and togetherness that will make this celebration one to be remembered for generations.",
          imageIds: [
            "mihika-kushal-image-gunturs"
          ]
        }
      ],
      order: 3
    },
    {
      id: "mihika-kushal-info-guest-essentials",
      type: "faq",
      name: "Guest Essentials",
      items: [
        {
          id: "mihika-kushal-guest-essential-01-what-is-the-rsvp-deadline",
          name: "What is the RSVP deadline?",
          description: "We kindly request that you confirm your attendance by 15th September 2026. Your timely response will help us thoughtfully coordinate every detail of your stay and the celebrations."
        },
        {
          id: "mihika-kushal-guest-essential-02-where-is-the-wedding-taking-place",
          name: "Where is the wedding taking place?",
          description: "All wedding celebrations will be hosted at Welcomhotel by ITC Hotels, Raja Sansi, Amritsar, a beautifully restored heritage haveli that blends timeless Punjabi grandeur with contemporary luxury. Conveniently located just minutes from the airport, it will be home to all our celebrations."
        },
        {
          id: "mihika-kushal-guest-essential-03-i-ve-never-attended-a-telugu-or-punjabi-",
          name: "I've never attended a Telugu or Punjabi wedding. What should I expect?",
          description: "If this is your first Indian wedding, you're in for a truly unforgettable experience. Indian weddings are much more than ceremonies; they are vibrant, immersive celebrations where every guest becomes a part of the story.\n\nOver the course of our celebrations, you'll experience the warmth of Punjabi hospitality, the grace of Telugu traditions, colourful festivities, soulful rituals, incredible cuisine, joyous music, and plenty of dancing and laughter. More than anything, you'll discover that Indian weddings are about bringing people together, celebrating across generations, and making every guest feel like family.\n\nIf you're unfamiliar with any of the customs or ceremonies, there's absolutely nothing to worry about. Our wedding coordinators will be present throughout the celebrations to guide you, explain the significance of each event, and gently assist you whenever needed, so you can simply relax, immerse yourself in the festivities, and enjoy every moment.\n\nWe cannot wait to share our traditions, our families, and this beautiful celebration with you."
        },
        {
          id: "mihika-kushal-guest-essential-04-when-is-the-arrival-and-departure",
          name: "When is the arrival and departure?",
          description: "Our celebrations begin on the evening of 2nd December 2026, so we recommend planning your arrival by the afternoon to allow ample time to settle in before the festivities commence.\n\n-Check-in: 2nd December 2026, from 3:00 PM\n-Check-out: 5th December 2026, by 11:00 AM\n\nArriving around the standard check-in time will give you plenty of time to complete your check-in formalities, unwind, and get ready to join us for the first evening of celebrations. We can't wait to welcome you!"
        },
        {
          id: "mihika-kushal-guest-essential-05-how-do-i-reach-amritsar",
          name: "How do I reach Amritsar?",
          description: "Reaching Amritsar is easier than ever, with excellent connectivity from across India and around the world.\n\nBy Air:\nSri Guru Ram Dass Jee International Airport (ATQ) is located just 10 minutes from our venue and offers direct flights from major Indian cities including Delhi, Mumbai, Bengaluru, Hyderabad and Chennai. The airport is also connected internationally through destinations such as Dubai, Singapore, Kuala Lumpur and several seasonal routes.\n\nFor guests travelling from the USA, Canada, Australia, New Zealand, the UK and other international destinations, the most convenient journey is via one of India's major gateway cities; Delhi, Mumbai or Bengaluru, or through international hubs such as Dubai, Abu Dhabi, Doha or Singapore, with a short onward flight to Amritsar.\n\nBy Train:\nAmritsar Junction is one of North India's major railway stations, with convenient connections from Delhi, Chandigarh and several other cities.\n\nBy Road:\nAmritsar is well connected by modern highways, making it an easy drive from Chandigarh, Delhi and neighbouring cities in Punjab.\n\nOur Wedding Planning and hospitality team will be delighted to assist with travel guidance and airport transfers to ensure your journey is as seamless as possible."
        },
        {
          id: "mihika-kushal-guest-essential-06-do-i-need-a-visa-to-travel-to-india",
          name: "Do I need a visa to travel to India?",
          description: "Most international guests, including those travelling from the USA, UK, Australia, New Zealand, UAE and several other countries, can conveniently apply for an e-Tourist Visa through the official Government of India portal.\n\nWe recommend applying a few days before your departure and ensuring that your passport is valid for at least six months from your date of arrival in India.\n\nIf your visa application requires your accommodation details, please use:\n\nWelcomhotel by ITC Hotels, Raja Sansi, Amritsar\nAjnala Road, Raja Sansi, Amritsar, Punjab 143101, India\nPhone: +91 183 281 4444\n\nOnce your visa is approved, please carry a printed or digital copy of your Electronic Travel Authorisation (ETA) while travelling.\n\nFor detailed travel guidance, visa information, and other helpful tips, please visit the Travel Essentials section of our website."
        },
        {
          id: "mihika-kushal-guest-essential-07-can-i-extend-my-stay-or-arrive-earlier",
          name: "Can I extend my stay or arrive earlier?",
          description: "Absolutely. If you wish to arrive before the wedding festivities begin or extend your stay after the celebrations, you're welcome to do so.\n\nAdditional nights are subject to the hotel's availability and prevailing room rates. We recommend contacting the hotel directly at the earliest to make your arrangements, as December is a busy travel season in Amritsar."
        },
        {
          id: "mihika-kushal-guest-essential-08-will-transportation-be-arranged",
          name: "Will transportation be arranged?",
          description: "Yes. Airport transfers and local transportation between the hotel and wedding venues (where applicable) will be arranged for our guests. Detailed schedules and contact information will be shared closer to the wedding."
        },
        {
          id: "mihika-kushal-guest-essential-09-is-there-parking-available",
          name: "Is there parking available?",
          description: "Yes. Ample parking and valet facilities are available at the hotel for guests arriving by car."
        },
        {
          id: "mihika-kushal-guest-essential-10-does-welcomhotel-by-itc-amritsar-have-an",
          name: "Does Welcomhotel by ITC Amritsar have an on-site EV charging station, and what is the closest option outside the hotel grounds?",
          description: "Yes, the hotel features an on-site Statiq Charging Station with both AC and DC fast chargers, located just a 100-metre turn from the main entry. If you need an alternative outside the hotel grounds, the closest option is the Statiq Amritsar Airport Station, situated roughly 2 km away on Ajnala Road directly opposite the Radisson Blu hotel."
        },
        {
          id: "mihika-kushal-guest-essential-11-what-will-the-weather-be-like-in-early-d",
          name: "What will the weather be like in early December?",
          description: "December marks the beginning of Punjab's beautiful winter. It is the best time to visit the Golden city of Amritsar.\n\nExpect:\n\nDay: 18–24°C\nEvening: 8–14°C\n\nThe mornings and nights can be quite chilly, while the afternoons remain pleasant and sunny."
        },
        {
          id: "mihika-kushal-guest-essential-12-what-should-i-pack",
          name: "What should I pack?",
          description: "Along with your festive wardrobe, we recommend bringing:\n\n-A warm shawl, blazer or light jacket for the evenings\n-Comfortable footwear for dancing and exploring\n-Sunglasses and sunscreen for daytime events\n-Moisturiser and lip balm for the dry winter air\n-Any personal medications you may require\n-A portable phone charger or power bank\n-Your biggest smile and plenty of energy for dancing!"
        },
        {
          id: "mihika-kushal-guest-essential-13-what-kind-of-food-can-i-expect",
          name: "What kind of food can I expect?",
          description: "One thing Punjab never compromises on is hospitality, and certainly not food.\n\nThroughout the celebrations, expect an indulgent spread featuring authentic Punjabi favourites, cherished Telugu delicacies, regional Indian cuisine and global classics, alongside thoughtfully curated vegetarian options.\n\nIf you have any allergies or dietary restrictions, please let us know while confirming your RSVP so we can make suitable arrangements."
        },
        {
          id: "mihika-kushal-guest-essential-14-what-is-the-dress-code",
          name: "What is the dress code?",
          description: "Each celebration has its own colour palette and style inspiration.\nOur Wedding Wardrobe Planner is currently being curated with thoughtful style inspiration for every celebration. Check back soon for colour palettes, attire recommendations, and everything you'll need to dress the part."
        },
        {
          id: "mihika-kushal-guest-essential-15-will-there-be-any-outdoor-events",
          name: "Will there be any outdoor events?",
          description: "Yes. A few of our celebrations will take place outdoors, allowing you to enjoy the beautiful winter charm of Amritsar.\n\nDecember evenings can be pleasantly chilly, so we recommend carrying a light jacket, shawl or stole to keep warm. Additionally, some events will be hosted on the lawns, so you may wish to opt for comfortable footwear or block heels instead of stilettos, which can be difficult to walk in on grass.\n\nA little planning will ensure you're comfortable from the first dance to the final celebration!"
        },
        {
          id: "mihika-kushal-guest-essential-16-can-i-explore-amritsar-during-my-stay",
          name: "Can I explore Amritsar during my stay?",
          description: "Absolutely. If you have some free time, we highly recommend visiting:\n\n-The Golden Temple\n-Jallianwala Bagh\n-Partition Museum\n-Hall Bazaar\n-The Attari–Wagah Border Ceremony\n\nOur wedding planning and hospitality team will be delighted to help you with recommendations, reservations and local guidance.\n\nFor guests looking to make the most of their visit, we've also curated a dedicated \"Things to Do\" page on our website featuring suggested day tours, local experiences, shopping recommendations and helpful travel information."
        },
        {
          id: "mihika-kushal-guest-essential-17-is-breakfast-included",
          name: "Is breakfast included?",
          description: "Yes. Breakfast is included with your stay throughout the wedding."
        },
        {
          id: "mihika-kushal-guest-essential-18-can-i-order-food-through-online-delivery",
          name: "Can I order food through online delivery apps?",
          description: "Yes. You're welcome to order food and essentials through online delivery platforms such as Swiggy and Zomato during your stay.\n\nPlease ensure that your room number and contact details are entered correctly while placing your order. Once your delivery partner arrives at the hotel, you may be requested to collect your order from the designated pickup area, in accordance with the hotel's policies."
        },
        {
          id: "mihika-kushal-guest-essential-19-will-there-be-wi-fi-at-the-hotel",
          name: "Will there be Wi-Fi at the hotel?",
          description: "Yes. Complimentary Wi-Fi is available throughout the hotel."
        },
        {
          id: "mihika-kushal-guest-essential-20-can-i-use-upi-or-should-i-carry-cash",
          name: "Can I use UPI or should I carry cash?",
          description: "Most hotels, restaurants and shops accept international credit and debit cards. However, carrying a small amount of Indian currency is useful for local shopping, street food or small purchases. Currency exchange is available at the airport and major banks."
        },
        {
          id: "mihika-kushal-guest-essential-21-where-can-i-exchange-foreign-currency",
          name: "Where can I exchange foreign currency?",
          description: "Foreign currency exchange is readily available across Amritsar. \nFor the best rates and convenience, you can exchange money at these specific locations:At the Airport: 24/7 counters operate inside both the arrival and departure terminals at Sri Guru Ram Dass Jee International Airport (ATQ).\n\nAuthorized Forex Hubs: For better rates, visit certified RBI dealers in major commercial areas like Lawrence Road, Ranjit Avenue, or Railway Link Road. Trusted branches include Thomas Cook, WSFx (Global Pay), Orient Exchange, and Multimoney Forex.\n\nInternational ATMs: You can withdraw Indian Rupees (INR) directly using international Visa or Mastercard credit/debit cards at major bank ATMs (such as SBI, HDFC, and ICICI) located citywide.\n\nImportant Requirements: You must present your physical passport and a valid Indian visa for any exchange transaction."
        },
        {
          id: "mihika-kushal-guest-essential-22-when-should-i-book-my-flights",
          name: "When should I book my flights?",
          description: "We highly recommend booking your flights as early as possible.\n\nThe first week of December is a popular travel period in North India, and flight availability to Amritsar can become limited as the wedding season approaches. Booking well in advance will not only give you a wider choice of flight timings but may also help you secure more favourable fares.\n\nOnce your travel plans are confirmed, please remember to share your flight details through the RSVP form so we can coordinate your airport transfers."
        },
        {
          id: "mihika-kushal-guest-essential-23-what-documents-will-be-required-for-hote",
          name: "What documents will be required for hotel check-in?",
          description: "To ensure a smooth check-in experience, all guests are requested to carry a valid government-issued photo ID.\n\nFor Indian Nationals:\n\nAadhaar Card\nPassport\nDriving Licence\nVoter ID (or any other government-approved photo ID)\n\nFor International Guests:\n\nOriginal Passport\nValid Indian Visa (e-Visa or regular visa, as applicable)\n\nPlease note that the name on your reservation should match the name on your identification document. As per Indian hotel regulations, every guest, including children where applicable, may be required to provide valid identification at check-in."
        },
        {
          id: "mihika-kushal-guest-essential-24-can-i-take-photos-during-the-ceremony",
          name: "Can I take photos during the ceremony?",
          description: "Absolutely! We would love for you to capture and cherish these special moments.\n\nWe kindly request that you remain mindful of our professional photography and videography team by avoiding the aisle and refraining from taking photographs or videos from the front during the couple's entries, immediate family entries, and the wedding ceremony, as this may obstruct both the experience of fellow guests and the work of our photographers.\n\nThe best way to enjoy the celebrations is to remain comfortably seated during the ceremonies, where you'll have an excellent view while allowing every special moment to unfold seamlessly.\n\nWhen it's time to meet and bless the couple, our wedding coordinators will be delighted to guide you to the stage in an orderly manner.\n\nThank you for helping us preserve these beautiful memories while ensuring everyone enjoys an uninterrupted celebration."
        },
        {
          id: "mihika-kushal-guest-essential-25-will-there-be-an-open-bar",
          name: "Will there be an open bar?",
          description: "No, ours is a dry wedding, so alcohol will not be served during the celebrations.\n\nThat said, we promise the spirits will be high! With endless dancing, heartfelt traditions, incredible food, lively conversations, and celebrations that refuse to slow down, we have a feeling you won't miss the bar one bit."
        },
        {
          id: "mihika-kushal-guest-essential-26-is-ride-hailing-available-in-amritsar",
          name: "Is ride-hailing available in Amritsar? ",
          description: "Yes. Amritsar is served by popular app-based taxi services such as Uber and Ola (India's leading ride-hailing platform), making it easy to travel around the city at your convenience.\n\nThese services are ideal for sightseeing, shopping, dining, or any personal excursions outside the wedding itinerary. We recommend downloading the apps before your arrival in India for a seamless travel experience.\n\nPlease note that during peak hours, festivals, or late at night, vehicle availability may be limited and wait times can be slightly longer."
        },
        {
          id: "mihika-kushal-guest-essential-27-what-if-i-need-assistance-during-the-wed",
          name: "What if I need assistance during the wedding?",
          description: "To ensure every guest enjoys a seamless and memorable celebration, our wedding has been thoughtfully planned by Destiny Tales by Ganesh & Ruchi, the team behind every detail of this celebration, from hospitality and logistics to the overall guest experience.\n\nShould you need any assistance with transportation, accommodation, event schedules, local recommendations, or anything at all during your stay, please don't hesitate to get in touch.\n\nGanesh\n📞 +91 96000 39249\n\nRuchi\n📞 +91 96005 39241\n\nFrom the moment you arrive in Amritsar until the final farewell, they are just a call or message away and will be delighted to make your experience effortless, comfortable, and truly unforgettable."
        },
        {
          id: "mihika-kushal-guest-essential-28-what-if-i-need-medical-assistance",
          name: "What if I need medical assistance?",
          description: "Your health and well-being are our utmost priority. If you feel unwell or experience a medical emergency at any time during your stay, please inform the hotel front desk or a member of our wedding planning team immediately. Both teams are available round the clock and will be happy to coordinate the appropriate assistance without delay.\n\nA doctor-on-call is available through the hotel for immediate medical attention.\n\nShould hospital care be required, the nearest major multi-specialty facility is Livasa Hospital, Amritsar, located on Airport Road, approximately 4.7 km (about an 8-minute drive) from the hotel. Other leading healthcare facilities, including Fortis Escorts Hospital and Amandeep Multispeciality Medicity Hospital, are also located within the city.\n\nPlease don't hesitate to reach out, whether it's a minor concern or an emergency; our team is here to assist you promptly and ensure you receive the care you need."
        }
      ],
      order: 4
    },
    {
      id: "mihika-kushal-info-travel-essentials",
      type: "travel",
      name: "Travel Essentials",
      items: [
        {
          id: "mihika-kushal-travel-01-how-to-come-from-ahmedabad-to-amritsar",
          name: "How to come from Ahmedabad to Amritsar?",
          description: "✈️ Flight: Direct non-stop flight available via IndiGo Airlines. Flight time is 1 hour 45 minutes.\n🚂 Train: Book a direct seat on the ADI SVDK Express (19415), taking approximately 27 hours.\n🛣️ Road: ~1,200 km journey taking 20–22 hours via the NE 4 and NH 62 highway network."
        },
        {
          id: "mihika-kushal-travel-02-how-to-come-from-hyderabad-to-amritsar",
          name: "How to come from Hyderabad to Amritsar?",
          description: "✈️ Flight: Direct flight available via IndiGo (Flight 6E 2490). Flight time is 3 hours 20 minutes, departing early morning.🚂 Train: Board the Telangana Express or Rajdhani up to New Delhi, then change to the Shatabdi Express directly to Amritsar (~36 hours total).🛣️ Road: A long ~1,900 km trip taking 32–34 hours via the vertical NH 44 highway corridor."
        },
        {
          id: "mihika-kushal-travel-03-how-to-come-from-mumbai-to-amritsar",
          name: "How to come from Mumbai to Amritsar?",
          description: "✈️ Flight: Direct flights available via IndiGo and Air India. Flight time is 2 hours 30 minutes.\n🚂 Train: Take the daily Paschim Express (12925) from Bandra Terminus directly to Amritsar Junction (31 hours).\n🛣️ Road: ~1,700 km drive requiring 28–30 hours via the NH 48 national highway."
        },
        {
          id: "mihika-kushal-travel-04-how-to-come-from-chennai-to-amritsar",
          name: "How to come from Chennai to Amritsar?",
          description: "✈️ Flight: Connecting flights only. No direct routes exist. Fly via IndiGo or Air India with a quick layover in New Delhi (DEL) or Mumbai (BOM) (5 to 7 hours total).🚂 Train: Board the direct Andaman Express (16031) from Chennai Central directly to Amritsar (48 hours).🛣️ Road: ~2,600 km run via NH 44 across central India (38–40 hours)."
        },
        {
          id: "mihika-kushal-travel-05-how-to-come-from-ludhiana-to-amritsar",
          name: "How to come from Ludhiana to Amritsar?",
          description: "✈️ Flight: No flights operate due to the very short physical distance.🚂 Train: The absolute best option. Hourly trains like the Amritsar Shatabdi (12031) or Shan-e-Punjab Express reach in 1.5 to 2 hours.🛣️ Road: ~140 km drive taking 2.5 hours via the smooth NH 44 and NH 3 stretch."
        },
        {
          id: "mihika-kushal-travel-06-how-to-come-from-bangalore-to-amritsar",
          name: "How to come from Bangalore to Amritsar?",
          description: "✈️ Flight: Direct flight available via IndiGo Airlines (Flight 6E 6288), operating 4 times a week. Flight time is 3 hours 5 minutes.🚂 Train: Travel via New Delhi using a fast connection like the Karnataka Express and transit onto a fast rail link to Amritsar (~40 hours).🛣️ Road: ~2,500 km route traversing NH 44 (38–40 hours)."
        },
        {
          id: "mihika-kushal-travel-07-how-to-come-from-chandigarh-to-amritsar",
          name: "How to come from Chandigarh to Amritsar?",
          description: "✈️ Flight: Inefficient route, as flights require a long layover at New Delhi.🚂 Train: Direct trains like the Chandigarh - Amritsar Superfast Express (12241) reach in exactly 4 hours.🛣️ Road: ~230 km route via NH 344A and NH 3, taking 4 hours by car or state-run luxury Volvo buses."
        },
        {
          id: "mihika-kushal-travel-08-how-to-come-from-nellore-to-amritsar",
          name: "How to come from Nellore to Amritsar?",
          description: "✈️ Flight: Nellore has no commercial airport. Drive or take a local train to Chennai Airport (MAA), then fly out to Amritsar.🚂 Train: Catch the direct long-distance Andaman Express (16031) right from Nellore Railway Station straight to Amritsar Junction (44 hours).🛣️ Road: ~2,400 km over land via NH 44, requiring 36+ hours of multi-day driving."
        },
        {
          id: "mihika-kushal-travel-09-how-to-come-from-dubai-to-amritsar",
          name: "How to come from Dubai to Amritsar?",
          description: "✈️ Flight Status: Direct non-stop flights available daily.🛄 Flight Operators: IndiGo, Air India Express, and SpiceJet operate daily direct departures from Dubai International (DXB).⏱️ Duration: 3 hours and 30 minutes.🛂 Visa Requirement: UAE citizens/residents holding international passports must apply for an Indian e-Tourist Visa (e-Visa) online at least 4 to 7 days before departure."
        },
        {
          id: "mihika-kushal-travel-10-how-to-come-from-the-united-kingdom-to-a",
          name: "How to come from the United Kingdom to Amritsar?",
          description: "✈️ Flight Status: Direct non-stop flights available.🛄 Flight Operators & Routing: Air India operates direct non-stop flights out of London Gatwick (LGW) and Birmingham (BHX). Connecting flights are operated by Qatar Airways (via Doha) or Emirates (via Dubai).⏱️ Duration: 8 hours and 20 minutes for direct flights; 12+ hours for layovers.🛂 Visa Requirement: UK passport holders are fully eligible for the Indian e-Tourist Visa (e-Visa) portal, which must be approved online before boarding."
        },
        {
          id: "mihika-kushal-travel-11-how-to-come-from-canada-to-amritsar",
          name: "How to come from Canada to Amritsar?",
          description: "✈️ Flight Status: Connecting flights only. No direct routes exist to ATQ.🛄 Flight Operators & Routing: Air India offers a single-ticket itinerary from Toronto (YYZ) or Vancouver (YVR) with a layover in New Delhi (DEL) where you clear immigration. Alternatively, Air Canada, Emirates, and Qatar Airways offer routes via Dubai or Doha.⏱️ Duration: 17 to 22 hours depending entirely on layover length.🛂 Visa Requirement: Canadian citizens must secure an Indian e-Tourist Visa (e-Visa) or a regular paper tourist visa prior to booking travel."
        },
        {
          id: "mihika-kushal-travel-12-how-to-come-from-united-states-of-americ",
          name: "How to come from United States of America to Amritsar?",
          description: "✈️ Flight Status: Connecting flights only.🛄 Flight Operators & Routing: United Airlines or Air India from major US gateways (JFK, ORD, SFO, EWR) fly directly into New Delhi (DEL) as the primary layover. From Delhi, you take a quick domestic connection into Amritsar. Qatar Airways (via Doha) is also highly preferred.⏱️ Duration: 18 to 23 hours total travel time.🛂 Visa Requirement: US citizens must apply online for an Indian e-Tourist Visa (e-Visa). It is typically granted for 30 days, 1 year, or 5 years with multiple entries."
        },
        {
          id: "mihika-kushal-travel-13-how-to-come-from-australia-to-amritsar",
          name: "How to come from Australia to Amritsar?",
          description: "✈️ Flight Status: Connecting flights only.🛄 Flight Operators & Routing: Air India operates flights from Sydney (SYD) or Melbourne (MEL) with a layover in New Delhi (DEL). Alternatively, Scoot and Singapore Airlines offer one-stop premium economy or budget flights with a layover in Singapore (SIN) directly into Amritsar.⏱️ Duration: 14 to 18 hours.🛂 Visa Requirement: Australian passport holders must obtain a pre-approved Indian e-Tourist Visa (e-Visa) online before starting their trip."
        },
        {
          id: "mihika-kushal-travel-14-how-to-come-from-new-zealand-to-amritsar",
          name: "How to come from New Zealand to Amritsar?",
          description: "✈️ Flight Status: Connecting flights only.🛄 Flight Operators & Routing: Singapore Airlines and Scoot provide unified booking tickets out of Auckland (AKL) with a single layover in Singapore (SIN) before landing at ATQ. Malaysia Airlines offers a secondary option via Kuala Lumpur (KUL).⏱️ Duration: 16 to 20 hours total.🛂 Visa Requirement: New Zealand citizens are fully eligible to apply for the fast-tracked Indian e-Tourist Visa (e-Visa) online."
        }
      ],
      order: 5
    },
    {
      id: "mihika-kushal-info-things-to-do",
      type: "things-to-do",
      name: "Things to Do",
      items: [
        {
          id: "mihika-kushal-thing-172520442",
          name: "🏛️ Iconic Landmarks & Things to See"
        },
        {
          id: "mihika-kushal-thing-172520443",
          name: "1. The Golden Temple (Sri Harmandir Sahib)",
          description: "1. The Golden Temple (Sri Harmandir Sahib)\n\nSignificance: The holiest shrine in Sikhism, renowned for its exquisite gold architecture and spiritual serenity.\n\nTicket Price: Free for all tourists (Local & International).\n\nBooking Requirement: None. Open 24/7.\n\nCore Guidelines: Wash your hands and feet at the entrance, dress modestly, and keep your head fully covered (scarves are provided for free outside). Do not take photos inside the inner sanctum."
        },
        {
          id: "mihika-kushal-thing-172520446",
          name: "2. Attari-Wagah Border (Beating Retreat Ceremony)",
          description: "2. Attari-Wagah Border (Beating Retreat Ceremony)\n\nSignificance: A high-energy, patriotic military drill performed by the Indian Border Security Force (BSF) and Pakistani Rangers.\n\nTicket Price: Free stadium entry.\n\nPro-Tip: International travellers with a foreign passport get access to a dedicated foreigner seating area near the front gate; carry your physical passport for verification. Bags and power banks are strictly prohibited."
        },
        {
          id: "mihika-kushal-thing-172520449",
          name: "3. Jallianwala Bagh",
          description: "3. Jallianwala Bagh\n\nSignificance: A memorial garden steps from the Golden Temple, preserving the bullet-marked walls and martyrdom well from the tragic 1919 massacre.\n\nTicket Price: Free for everyone.\n\nBooking Requirement: None. Open daily from 6:30 AM to 7:30 PM."
        },
        {
          id: "mihika-kushal-thing-172520453",
          name: "4. The Partition Museum",
          description: "4. The Partition Museum\n\nSignificance: The world's first museum dedicated entirely to the raw personal histories and archives of the 1947 partition of India and Pakistan.\n\nTicket Price: ₹10 for Indian Nationals | ₹250 for International Tourists.\n\nBooking Requirement: Tickets can be bought directly at the counter (Town Hall building)."
        },
        {
          id: "mihika-kushal-thing-172520454",
          name: "5. Gobindgarh Fort",
          description: "5. Gobindgarh Fort\n\nSignificance: A grand 18th-century fortress featuring live Punjabi cultural performances, a turban museum, and high-tech historical projection mapping shows.\n\nTicket Price: Passes scale depending on combo options:\n\nLocal / Indian Tourist: ~₹180 (General Combo) up to ₹650 (Full show entry).\n\nInternational Tourist: ~₹375 to ₹1,000.\n\nBooking Requirement: Tickets are available via the Gobindgarh Fort Site or at the on-site ticket counter.",
          url: "https://fortgobindgarh.com/"
        },
        {
          id: "mihika-kushal-thing-172520472",
          name: "🛍️ The Ultimate Market Breakdown & Top Shops"
        },
        {
          id: "mihika-kushal-thing-172520475",
          name: "1. Katra Jaimal Singh Market (The Textile & Phulkari Hub)",
          description: "1. Katra Jaimal Singh Market (The Textile & Phulkari Hub)\n\nThis maze of lanes is the absolute heart of Amritsar’s textile trade. It is the premier destination for authentic Phulkari (traditional geometric flower embroidery) suits, sarees, dupattas, and unstitched fabrics.\n\nTop Shops to Go:\n\nKhalchian Wale Di Hatti (Shop No. 19, near Katra Jaimal Chowk) – Operating since 1970 [Katra Jaimal Singh Market]. This iconic multi-level shop is famous for premium hand-embroidered Phulkari, elegant Patiala salwars, and trending Pakistani suits. Ask for Mr. Puneet or Ekta to see their exclusive bridal collections.\n\nRaja Exclusive – Excellent for high-quality, authentic Phulkari work and bridal wear with transparent pricing.\n\nKala Mandir – Highly celebrated for premium heavy suits and traditional Punjabi attire.\n\nWhat to Buy: Heavy Phulkari dupattas (silk or chiffon base), unstitched suit materials, pashmina shawls, and Punjabi wedding fabrics."
        },
        {
          id: "mihika-kushal-thing-172520477",
          name: "2. Hall Bazaar (The Historic Heritage Market)",
          description: "2. Hall Bazaar (The Historic Heritage Market)\n\nEntering through the iconic Gandhi Gate, this is a massive, multi-product street market. It is highly chaotic but contains hidden gems for handicrafts, home decor, and authentic footwear.\n\nTop Shops to Go:\n\nRaunak Jutti or Sardar Jutti Chownk – Famous for traditional Punjabi Juttis (handcrafted leather shoes with embroidery). They can custom-stretch them on the spot if they feel too tight.\n\nWhat to Buy: Authentic leather Punjabi Juttis, hand-carved wooden furniture, brass artifacts, and colourful embroidered wedding accessories."
        },
        {
          id: "mihika-kushal-thing-172520541",
          name: "3. Mishri Bazaar & Papad-Warian Lane (The Culinary Market)",
          description: "3. Mishri Bazaar & Papad-Warian Lane (The Culinary Market)\n\nLocated in the tight alleys right outside the Golden Temple complex, this area hits you with the heavy aroma of pure Punjabi spices.\n\nTop Shops to Go:\n\nUjagar Singh Karam Singh (Mishri Bazaar) – A century-old, legendary, multi-generational spice store highly sought after for its uncompromised quality. It is the premier destination for premium quality whole spices, dry fruits, and completely authentic, unadulterated Amritsari Warian.\n\nLubhaya Ram Aam Papad Wale (Lawrence Road / Hall Bazaar) – Legendary street vendor famous for creative variations of Aam Papad (dried mango pulp sheets) topped with secret spice blends.\n\nManmohan Papad Warian – A trusted, multi-generational shop for authentic sun-dried items.\n\nWhat to Buy: Authentic Amritsari Warian (spiced, sun-dried lentil chunks used in curries), Papadoms, pure saffron, organic almonds/walnuts, and fresh spice blends like Garam Masala and Chana Masala"
        },
        {
          id: "mihika-kushal-thing-172520555",
          name: "💡 Pro-Tips for Shopping in Amritsar",
          description: "💡 Pro-Tips for Shopping in Amritsar\n\nSpotting Fake Phulkari: Genuine Phulkari is embroidered by hand from the reverse side of the fabric using coarse silk threads. Turn the dupatta inside out—if you see neat, identical machine stitches and loose threads everywhere, it is machine-made in a factory. Hand-done Phulkari is heavy, slightly irregular, and costs significantly more.\n\nThe \"Jutti\" Bite: Authentic Punjabi Juttis are made of pure leather and lack a defined left or right foot shape (they mold to your feet over time). To prevent painful blisters (\"jutti bites\"), rub a bit of mustard oil or candle wax on the inside heel of the shoe 24 hours before wearing them.\n\nAvoid Rickshaw Commissions: Never let local auto-rickshaw or e-rickshaw drivers guide you to a \"recommended\" or \"government-approved\" textile shop. They get up to a 20% to 30% cut on your total bill, which is quietly added to your final item prices. Walk into shops independently.\n\nExpress Stitching & Global Shipping: Top textile shops like Khalchian Wale Di Hatti can stitch unstitched fabrics to your exact measurements and deliver them directly to your Amritsar hotel within 3 hours to a single day. If you run out of luggage space, ask them to handle global shipping directly to your home country."
        },
        {
          id: "mihika-kushal-thing-172520561",
          name: "Master Bargaining Strategy",
          description: "🤝 Master Bargaining Strategy\n\nBargaining is expected in street markets like Hall Bazaar and Katra Jaimal Singh, but it must be done respectfully. It is not practised in major sweet shops, spice supermarkets, or fixed-price showrooms.\n\nThe 50% Rule for Street Vendors: For unbranded garments, street-side juttis, and souvenirs, vendors usually quote double the actual price to tourists. Start your counter-offer at roughly 45% to 50% of their initial quote, and slowly negotiate up to a comfortable 65% midpoint.\n\nThe \"Walk Away\" Test: If a street vendor refuses to lower the price to your reasonable counter-offer, politely thank them and walk away. Because these markets have dozens of identical stalls side-by-side, the vendor will very often call you back to seal the deal.\n\nThe Wholesale / Package Tactic: At multi-level stores like Khalchian Wale Di Hatti, prices are more stable. Instead of arguing over single-item rates, politely request a lump-sum package discount if you are purchasing multiple sets of suits or heavy dupattas together.\n\nInternational Tourist Tactic: International travellers should avoid showing extreme excitement over an item, as vendors instantly scale prices up. If you are travelling with a local Indian friend or guide, let them handle the initial pricing conversation and cash payment while you observe."
        },
        {
          id: "mihika-kushal-thing-172520630",
          name: "🍲 Legacy Food to Eat"
        },
        {
          id: "mihika-kushal-thing-172520632",
          name: "🥞 Legendary Amritsari Kulcha Hubs",
          description: "🥞 Legendary Amritsari Kulcha Hubs\n\nBhai Kulwant Singh Kulchian Wale: Located right outside the Golden Temple complex, this iconic spot serves crisp, multi-layered flatbread crushed by hand and drenched in pure butter.\n\nPehelwan Kulcha: Known for its thick, heavily stuffed clay-tandoor kulchas that retain an incredible crunch.\n\nArshi Kulcha: A local favourite celebrated for its distinctive spice blend hidden inside the potato-and-onion stuffing."
        },
        {
          id: "mihika-kushal-thing-172520634",
          name: "🍛 Historic Punjabi Dhabas & Vegetarian Legacy",
          description: "🍛 Historic Punjabi Dhabas & Vegetarian Legacy\n\nKesar Da Dhaba: Operating since 1916 inside the walled city. Famous for its iconic slow-cooked Dal Makhani (lentils simmered overnight) and Shahi Paneer cooked in pure desi ghee.\n\nBrothers Dhaba: Situated near the Town Hall. A massive, highly hygienic spot serving classic vegetarian thalis, buttery north Indian curries, and paranthas.\n\nBharawan Da Dhaba: Right next to Brothers Dhaba. One of the oldest surviving family-run dhabas in the city, renowned for its rich Chana Masala and soft Lachha Paranthas."
        },
        {
          id: "mihika-kushal-thing-172520638",
          name: "🥛 Sweet Drinks & Lassi Essentials",
          description: "🥛 Sweet Drinks & Lassi Essentials\n\nAhuja Milk Bhandar: Located near Hindu College. Famous for its thick, signature Amritsari Lassi infused with a hint of natural lemon essence.\n\nGiani Di Lassi: Tucked away in the old city. It serves massive, heavy glasses of sweetened yogurt topped with a huge dollop of fresh cream (malai)."
        },
        {
          id: "mihika-kushal-thing-172520640",
          name: "🍨 Desserts, Sweet Treats & Bakeries",
          description: "🍨 Desserts, Sweet Treats & Bakeries\n\nA-One Kulfa: Located on Queens Road. This is the ultimate adaptation of kulfi. It features a massive plate layered with dense kulfi, rabri, falooda noodles, crushed ice, and secret sweet syrups.\n\nGurdas Ram Jalebi Wala: Located in Katra Ahluwalia near the Golden Temple. A tiny shop serving hot, thin, crispy Jalebis and soft Gulab Jamuns fried fresh in pure desi ghee.\n\nRana Fruit Cream: A hidden gem serving large bowls of thick, chilled fresh dairy cream beaten together with seasonal fruits and dry fruits.\n\nGreen Bakery: The go-to legacy bakery for local tea-time snacks, freshly baked butter biscuits, cookies, and traditional dry cakes.\n\nGoenkas: A modern yet highly respected confectionery hub perfect for buying premium boxed traditional sweets, dry fruit platters, and fusion desserts to take back home."
        },
        {
          id: "mihika-kushal-thing-172520643",
          name: "☕ Unique Snacks & Street Alleys",
          description: "☕ Unique Snacks & Street Alleys\n\nGiani Tea Stall: Located on Cooper Road. A legendary early-morning meeting spot famous for its deeply steeped, milk-heavy cardamom tea (Chai) paired with butter-soaked toasts or kachoris.\n\nRaam Lubhaya Aam Papad: Located on Lawrence Road. A landmark street stall offering dozens of variations of Aam Papad (dried mango sheets) sliced and seasoned with secret sour, sweet, and salty spice blends.\n\nBeera Namkeens: The ultimate local stop to stock up on crunchy, authentic Punjabi savoury snacks, spiced mathris, and specialised sev mixtures."
        },
        {
          id: "mihika-kushal-thing-172520649",
          name: "💡 Food Rules & Dietary Warnings for Travellers",
          description: "💡 Food Rules & Dietary Warnings for Travellers\n\nTiming Your Kulcha: Amritsari Kulchas are strictly a breakfast and lunch item. Top places like Bhai Kulwant or Pehelwan heat their tandoors by 7:30 AM and completely sell out their dough stock by 2:00 PM. Do not plan a kulcha trip for dinner.\n\nPure Vegetarian Zones: The entire perimeter surrounding the Golden Temple (within a 1-2 km radius) is a strict multi-religious holy zone. No meat or alcohol is served or allowed in this area.\n\nNo Air Conditioning & High Crowds: Many iconic street-side spots (such as Gurdas Ram Jalebi, Giani Tea Stall, and Kesar Da Dhaba) are heritage locations operating in tiny, tight alleyways. They are heavily crowded, lack air conditioning, and feature basic open-air communal seating or standing setups.\n\nHeavy Spice Profiles: Traditional Amritsari street food relies heavily on green chillies, black pepper, and custom garam masala blends. If you have a sensitive stomach or low spice tolerance, specify \"Kam Mirch\" (less spice) when placing your order.\n\nDesi Ghee & Lactose Warning: Punjab’s culinary legacy is entirely built around dairy. Almost every vegetarian dish, curry, and dessert listed here is slow-cooked in pure Desi Ghee (clarified butter), topped with fresh cream (malai), or served with a side of white butter. This cuisine is not lactose-free.\n\nGluten-Heavy Menu: Amritsar is famous for its wheat-based flatbreads. Iconic dishes like the Amritsari Kulcha are made using refined wheat flour (maida). Because cross-contamination is high in traditional clay tandoor ovens, these legacy street joints are not gluten-free safe."
        },
        {
          id: "mihika-kushal-thing-172521096",
          name: "🚌  Popular Guided Tours"
        },
        {
          id: "mihika-kushal-thing-172521102",
          name: "Guided Tour Recommendations and Disclaimer",
          description: "If you'd prefer a guided experience, several highly rated local tours cover the city's iconic landmarks, cultural experiences, and the famous Wagah Border Retreat Ceremony.\n\nHere are a few curated options to help you plan your visit:\n\nGetYourGuide\n\n-Amritsar: Small Group Sightseeing Tour with Wagah Border:\n\nhttps://gyg.me/B6EpZ2Ep\n\n-Amritsar Heritage Walking Tour: Hidden Lanes & Stories\n\nhttps://gyg.me/OI0jjkB4\n\n-Amritsar Golden Temple- Night view walking tour\n\nhttps://gyg.me/0qIPmh7P\n\n-Golden Temple Night Palki Ceremony & Light Tour\n\nhttps://gyg.me/rZnmV6fX\n\nViator\n\n-Full-Day Amritsar Sightseeing & Wagah Border Ceremony\n\nhttps://www.viator.com/tours/Amritsar/Full-Day-Amritsar-Sightseeing-With-Wagah-Border-Retreat-Ceremony/d22306-171664P1?medium=social-share-copy\n\n-Golden Temple, Jallianwala Bagh, Old City & Wagah Border Day Tour\n\nhttps://www.viator.com/tours/Amritsar/DAY-TRIP-OF-GOLDEN-TEMPLE-JALLIANWALA-BAGH-WAGHA-BORDER-OLD-CITY/d22306-125700P8?medium=social-share-copy\n\n-Wagah Border Experience\n\nhttps://www.viator.com/tours/Amritsar/WAGHA-BORDER-TOUR/d22306-125700P3\n\nThese tours are operated by independent local providers and can be booked directly through the links above. We recommend checking the itinerary, inclusions, timings, and cancellation policies before confirming your booking.\n\nPlease Note:\n\nThe tour recommendations above are provided solely for your convenience. All experiences are independently operated by third-party tour providers, and any bookings made are directly between you and the respective operator.\n\nMihika & Kushal, their families, and the wedding planning team are not affiliated with these providers and cannot accept responsibility or liability for tour operations, schedules, cancellations, pricing, service quality, transportation, or any incidents that may occur during these experiences.\n\nWe encourage guests to review the tour details, inclusions, and terms and conditions carefully before making a reservation."
        },
        {
          id: "mihika-kushal-thing-172522932",
          name: "♫ Fred again.. India Tour 2026"
        },
        {
          id: "mihika-kushal-thing-172522955",
          name: "A Little Note from Mihika and Kushal",
          description: "A Little Note from Mihika and Kushal:\n\nIf you're planning to stay on and explore India after the wedding, here's something we couldn't resist sharing.\n\nOne of our favourite artists, Fred again.., is making his India debut just after our celebrations—and we know many of our friends love him just as much as we do. If you're extending your trip, it might just be the perfect excuse to add one more unforgettable experience to your itinerary.\n\nFred again.. India Tour 2026:\n\n-5 December — Delhi NCR (Sold Out)\n\n-8 December — Mumbai\n\n-12 December — Bengaluru\n\nConsider this our post-wedding, or \"I'm-not-ready-to-go-home-yet\" recommendation.\n\nWho knows... we might just see you there. ♡"
        },
        {
          id: "mihika-kushal-thing-172523176",
          name: "🌍 Extending Your Trip? Explore India!"
        },
        {
          id: "mihika-kushal-thing-172523199",
          name: "Golden Triangle Travel Recommendations",
          description: "For our guests planning to explore beyond the wedding festivities, December is the absolute prime time to experience India. The winter weather is delightfully cool, crisp, and perfect for sightseeing.\n\nThe iconic \"Golden Triangle\" route is highly recommended and easily accessible from the wedding venue:\n\n-Delhi (The Vibrant Capital) — A beautiful blend of old and new. Explore majestic Mughal forts, grand colonial architecture, and world-famous street food.\n\n-Agra (The City of Romance) — Home to the breathtaking Taj Mahal, one of the Seven Wonders of the World, alongside the stunning red sandstone Agra Fort.\n\n-Jaipur (The Pink City) — The historic heart of Rajasthan. Famous for its magnificent hilltop palaces, vibrant local bazaars, and rich royal heritage.\n\n💡 Travel Tip: December is peak tourist season in India. We highly recommend booking your domestic flights, premium trains, and hotel stays well in advance!"
        }
      ],
      order: 6
    },
    {
      id: "mihika-kushal-info-wedding-logo",
      type: "custom",
      name: "Wedding Logo",
      imageIds: [
        "mihika-kushal-image-monogram"
      ],
      items: [
        {
          id: "mihika-kushal-wedding-logo-story",
          name: "The Story Behind Our Monogram",
          description: "Some symbols do more than represent names; they carry heritage, memory, and the promise of a shared future.\n\nOur monogram is a reflection of two cultures finding harmony in one story. Rather than using the Roman alphabet, it begins with the scripts that shaped us. Mihika's initial is rendered as the Telugu syllable \"మి (Mi)\", while Kushal's is expressed through the Punjabi \"ਕੁ (Ku)\"—a tribute to the languages, traditions, and families that have nurtured us long before we found one another.\n\nTheir names are written in full alongside these initials, allowing the monogram to remain both meaningful to those who understand its origins and welcoming to those discovering our story for the first time.\n\nEvery detail within the design has been chosen with intention. The Punjabi half is adorned with delicate Phulkari motifs, celebrating the vibrant artistry, warmth, and joyful spirit of Punjab. The Telugu half is enriched with Kalamkari motifs, honouring the timeless craftsmanship and storytelling traditions of Andhra Pradesh and Telangana.\n\nTogether, these artistic traditions meet not in contrast but in conversation, each preserving its own identity while creating something beautifully whole.\n\nMore than a wedding logo, this monogram is a quiet celebration of legacy. It is where two scripts become one emblem, two artistic traditions share the same canvas, and two families begin a story that will be written together for generations to come.",
          imageIds: [
            "mihika-kushal-image-monogram"
          ]
        }
      ],
      order: 7
    }
  ],
  settings: {
    title: "Mihika & Kushal",
    timezone: "Asia/Kolkata"
  }
};
