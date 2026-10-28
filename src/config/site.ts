// ============================================================
//  SITE CONFIG — Edit this file to change all content, images,
//  and videos on the website. No need to touch component code.
// ============================================================

export const siteConfig = {
  // ---- BUSINESS INFO ----
  business: {
    name: "Chef Who Drinks Whiskey",
    tagline: "Private Chef & Catering",
    phone: "(555) 123-4567",
    email: "hello@gabethetacoguy.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    yearsInBusiness: 12,
    location: "Serving the Yakima Valley, Tri-Cities and surrounding areas",
  },

  // ---- HERO SECTION ----
  // Place your video file in the /public folder and reference it here.
  // To change the hero video, just swap the file in /public or change the path below.
  // The posterImage shows before the video loads.
  hero: {
    // Video file: put your video in /public/hero-video.mp4 (or change path below)
    // Supported formats: .mp4, .webm
    videoSrc: "hero-video.mp4",
    posterImage: "hero-poster.jpg",
    title: "Chef Who Drinks Whiskey",
    subtitle: "Private Chef & Catering for Meal Preps, Weddings, Quinceañeras, Corporate Events & Intimate Gatherings",
    ctaText: "Get a Free Quote",
    ctaScrollTarget: "contact",
  },

  // ---- ABOUT SECTION ----
  // Change the chef photo by placing an image in /public or update the URL below
  about: {
    title: "Meet The Chef",
    image: "https://images.pexels.com/photos/4253315/pexels-photo-4253315.jpeg?auto=compress&cs=tinysrgb&w=800",
    paragraphs: [
      "For over a decade, Gabe has been bringing the vibrant flavors of authentic Mexican street food to events across the region. What started as a small taco stand at local farmers' markets grew into a full-service catering operation serving hundreds of events.",
      "From intimate dinners for ten to grand celebrations for five hundred, Gabe brings the same passion, quality ingredients, and attention to detail to every plate. Every tortilla is hand-pressed, every salsa made from scratch, every dish plated with care.",
      "Whether you're planning the wedding of your dreams, a corporate gala, a quinceañera, or an intimate evening with close friends, Gabe crafts a menu that tells your story through food.",
    ],
  },

  // ---- STATS (Years in business, events served, etc.) ----
  stats: [
    { value: "12+", label: "Years of Experience" },
    { value: "850+", label: "Events Catered" },
    { value: "50,000+", label: "Guests Served" },
    { value: "100%", label: "Made From Scratch" },
  ],

  // ---- EVENT PORTFOLIO ----
  // Each card showcases a type of event. Change images by updating the URL
  // or placing files in /public and referencing them as "/your-image.jpg"
  eventTypes: [
    {
      title: "Elevated Event Catering",
      image: "https://images.pexels.com/photos/37976951/pexels-photo-37976951.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "From soulful Southern comfort and Mediterranean spreads to rich Asian-inspired plates, colorful Mexican dishes, and formal plated dinners, crafted exclusively for your celebration.",
      stat: "200+ events catered",
    },
    {
      title: "Custom Meal Prep",
      image: "https://images.pexels.com/photos/4929677/pexels-photo-4929677.jpeg",
      description: "Tailored to your exact dietary goals and packed with bold, unforgettable flavor. Eat clean without ever compromising on taste.",
      stat: "10,000+ meals prepped",
    },
    {
      title: "Private/Personal Chef",
      image: "https://images.pexels.com/photos/30892994/pexels-photo-30892994.jpeg",
      description: "Bespoke culinary experiences crafted in your home. From intimate dinner parties to weekly custom menus, featuring global flavors tailored precisely to your palate.",
      stat: "300+ plated dinners",
    },
    {
      title: "Private Event Bar Services",
      image: "https://images.pexels.com/photos/36244494/pexels-photo-36244494.jpeg",
      description: "Tailored mixology, curated drink menus, and a seamless bar experience for birthdays, anniversaries, and milestone celebrations.",
      stat: "Tailored drinks for your event",
    },
  ],

  // ---- MONTHLY SPECIAL ----
  // Update these fields each month. Use an image URL or a file in /public
  // (for example: "/monthly-special-october.jpg").
  monthlySpecial: {
    eyebrow: "A Little Something Special",
    heading: "This Month’s Special",
    intro: "Every month brings a new reason to gather around great food. Check back for our latest seasonal offer.",
    badge: "Seasonal feature",
    monthLabel: "October • Fall Gatherings",
    title: "Make Your Fall Gathering Delicious",
    description: "Planning a Halloween get-together, autumn celebration, or cozy family party? Let’s bring the taco bar to your table. Reach out to discuss a menu and catering package tailored to your guest list.",
    image: "https://images.pexels.com/photos/12983263/pexels-photo-12983263.jpeg",
    imageAlt: "Freshly prepared tacos with vibrant seasonal toppings",
    offerDetails: "Ask about a seasonal menu tailored to your gathering.",
    ctaText: "Ask About This Special",
    ctaTarget: "contact",
  },

  // ---- WHY US SECTION ----
  whyUs: [
    {
      icon: "ChefHat",
      title: "Private/Personal Chef Experience",
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
      description: "From 2 guests to 200+, we scale seamlessly. Backyard gatherings, banquet halls, corporate offices — we bring the flavor anywhere.",
    },
    {
      icon: "Flame",
      title: "Authentic Global Flavors",
      description: "From authentic al pastor and hand-pressed tortillas to rich Mediterranean, Asian, and Southern comfort culinary traditions.",
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
