// ============================================================
//  SITE CONFIG — Edit this file to change all content, images,
//  and videos on the website. No need to touch component code.
// ============================================================

export const siteConfig = {
  // ---- BUSINESS INFO ----
  business: {
    name: "Gabe the Taco Guy",
    tagline: "Private Chef & Catering",
    phone: "(555) 123-4567",
    email: "hello@gabethetacoguy.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    yearsInBusiness: 12,
    location: "Serving the greater metro area",
  },

  // ---- HERO SECTION ----
  // Place your video file in the /public folder and reference it here.
  // To change the hero video, just swap the file in /public or change the path below.
  // The posterImage shows before the video loads.
  hero: {
    // Video file: put your video in /public/hero-video.mp4 (or change path below)
    // Supported formats: .mp4, .webm
    videoSrc: "assets/hero-video.mp4",
    posterImage: "https://images.pexels.com/photos/8448178/pexels-photo-8448178.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Gabe the Taco Guy",
    subtitle: "Private Chef & Catering for Weddings, Quinceañeras, Corporate Events & Intimate Gatherings",
    ctaText: "Get a Free Quote",
    ctaScrollTarget: "contact",
  },

  // ---- ABOUT SECTION ----
  // Change the chef photo by placing an image in /public or update the URL below
  about: {
    title: "Meet Gabe",
    image: "https://images.pexels.com/photos/4253315/pexels-photo-4253315.jpeg?auto=compress&cs=tinysrgb&w=800",
    paragraphs: [
      "For over a decade, Gabe has been bringing the vibrant flavors of authentic Mexican street food to events across the region. What started as a small taco stand at local farmers' markets grew into a full-service catering operation serving hundreds of events.",
      "From intimate dinners for ten to grand celebrations for five hundred, Gabe brings the same passion, quality ingredients, and attention to detail to every plate. Every tortilla is hand-pressed, every salsa made from scratch, every dish plated with care.",
      "Whether you're planning the wedding of your dreams, a corporate gala, a quinceañera, or an intimate evening with close friends, Gabe crafts a menu that tells your story through food.",
    ],
  },

  // ---- STATS (Years in business, events served, etc.) ----
  stats: [
    { value: "12+", label: "Years in Business" },
    { value: "850+", label: "Events Catered" },
    { value: "50,000+", label: "Guests Served" },
    { value: "100%", label: "Made From Scratch" },
  ],

  // ---- EVENT PORTFOLIO ----
  // Each card showcases a type of event. Change images by updating the URL
  // or placing files in /public and referencing them as "/your-image.jpg"
  eventTypes: [
    {
      title: "Weddings",
      image: "https://images.pexels.com/photos/37976951/pexels-photo-37976951.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Elegant catering tailored to your special day, from taco bars to full plated dinners.",
      stat: "200+ weddings catered",
    },
    {
      title: "Quinceañeras",
      image: "https://images.pexels.com/photos/16451001/pexels-photo-16451001.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Celebrate this milestone with vibrant flavors and a feast your guests will never forget.",
      stat: "150+ quinceañeras served",
    },
    {
      title: "Corporate Events",
      image: "https://images.pexels.com/photos/18749086/pexels-photo-18749086.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional catering for lunches, galas, and company celebrations of any scale.",
      stat: "300+ corporate events",
    },
    {
      title: "Private Parties",
      image: "https://images.pexels.com/photos/12032536/pexels-photo-12032536.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Birthday parties, anniversaries, and celebrations with custom menus for your crew.",
      stat: "200+ parties catered",
    },
  ],

  // ---- WHY US SECTION ----
  whyUs: [
    {
      icon: "ChefHat",
      title: "Private Chef Experience",
      description: "Gabe personally cooks at your event, bringing the kitchen to you. Watch your meal being crafted in real time.",
    },
    {
      icon: "Leaf",
      title: "Fresh, Local Ingredients",
      description: "We source produce from local farms and markets daily. Everything is made from scratch — no shortcuts, no pre-packaged anything.",
    },
    {
      icon: "Users",
      title: "Any Size, Any Venue",
      description: "From 10 guests to 500+, we scale seamlessly. Backyard gatherings, banquet halls, corporate offices — we bring the flavor anywhere.",
    },
    {
      icon: "Flame",
      title: "Authentic Mexican Flavors",
      description: "Family recipes passed down generations. Real al pastor from the trompo, hand-pressed tortillas, salsas with real fire.",
    },
    {
      icon: "CalendarHeart",
      title: "Personalized Planning",
      description: "Every menu is custom-built around your event, dietary needs, and preferences. No cookie-cutter packages.",
    },
    {
      icon: "Award",
      title: "Trusted & Reviewed",
      description: "Hundreds of five-star reviews from satisfied clients. Fully licensed, insured, and catering-safe certified.",
    },
  ],

  // ---- QUOTE GENERATOR SETTINGS ----
  // Base pricing per guest for each event type (used by the quote calculator)
  quotePricing: {
    wedding: { perGuest: 28, baseFee: 200 },
    corporate: { perGuest: 22, baseFee: 150 },
    quinceanera: { perGuest: 25, baseFee: 200 },
    private_party: { perGuest: 20, baseFee: 100 },
    private_chef: { perGuest: 65, baseFee: 300 },
    other: { perGuest: 24, baseFee: 150 },
  },

  // ---- FOOTER ----
  footer: {
    text: "Bringing authentic flavors to your special moments since 2013.",
  },
};

export type SiteConfig = typeof siteConfig;
