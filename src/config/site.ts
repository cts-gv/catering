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
    videoSrc: "hero-720p.mp4",
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
    image: "meet-the-chef.jpg",
    paragraphs: [
      "For over a decade, Gabe has been bringing the vibrant flavors of authentic Mexican street food to events across the region. What started as a small taco stand at local farmers' markets grew into a full-service catering operation serving hundreds of events.",
      "From intimate dinners for ten to grand celebrations for five hundred, Gabe brings the same passion, quality ingredients, and attention to detail to every plate. Every tortilla is hand-pressed, every salsa made from scratch, every dish plated with care.",
      "Whether you're planning the wedding of your dreams, a corporate gala, a quinceañera, or an intimate evening with close friends, Gabe crafts a menu that tells your story through food.",
    ],
    // Chef video shown under the story. Place the file in /public.
    // Leave `src` empty ("") to hide the video block entirely.
    // `poster` is optional — the cover image shown before the visitor hits play.
    video: {
      src: "chef-story.mp4",
      poster: "chef-story-poster.jpg",
      title: "Watch Gabe in the kitchen",
      caption: "A look at how Gabe cooks, and why every event gets his full attention.",
    },
  },

  // ---- PHOTO GALLERY (bento grid) ----
  // Exactly 5 images, placed in /public. The first image is the large feature tile,
  // so put the strongest photo first. Update `alt` text to describe each photo.
  gallery: {
    eyebrow: "Recent Work",
    heading: "A Taste of Our Events",
    intro: "A few highlights from recent catering jobs.",
    images: [
      { src: "gallery-1.jpg", alt: "Catered event spread prepared by Chef Gabe" },
      { src: "gallery-2.jpg", alt: "Plated dish from a catered event" },
      { src: "gallery-3.jpg", alt: "Buffet setup at a catered event" },
      { src: "gallery-4.jpg", alt: "Guests enjoying food at a catered event" },
      { src: "gallery-5.jpg", alt: "Chef Gabe serving at a catered event" },
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
    // Flyer or photo for the card. Shown whole (never cropped) and opens full size when clicked.
    // To switch months, drop the new file in /public and change the filename here.
    //   "special-offer.jpg" = $200 deposit flyer   |   "build-menu.jpg" = Build Your Menu flyer
    image: "special-offer.jpg",
    imageAlt: "Special offer flyer: book any size event and pay only a $200 deposit",
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

  // ---- FORMSPREE (contact form submissions) ----
  // 1. Create a form at https://formspree.io and copy its endpoint URL.
  // 2. Paste it below (it looks like https://formspree.io/f/xyzabcde).
  formspree: {
    endpoint: "https://formspree.io/f/xjyyolqz",
  },

  // ---- QUOTE GENERATOR SETTINGS ----
  // Each entry here becomes an option in the Event Type dropdown, in this order.
  //   label    = text shown in the dropdown (and in the Formspree email)
  //   perGuest = price per guest / per person
  //   baseFee  = flat fee added to every quote
  //   minGuests / maxGuests = optional guest limits for that option
  // Quote = (perGuest x number of guests) + baseFee
  quotePricing: {
    event_catering: { label: "Event Catering", perGuest: 25, baseFee: 200, minGuests: 25, maxGuests: 250 },
    meal_prep: { label: "Custom Meal Preps", perGuest: 15, baseFee: 50 },
    personal_chef: { label: "Personal Chef Experience", perGuest: 45, baseFee: 150, minGuests: 2, maxGuests: 25 },
    private_chef: { label: "Private Chef Experience", perGuest: 65, baseFee: 300, minGuests: 2, maxGuests: 25 },
    bar_services: { label: "Private Event Bar Services", perGuest: 18, baseFee: 250, maxGuests: 250 },
    other: { label: "Other", perGuest: 24, baseFee: 150 },
  },

  // ---- FOOTER ----
  footer: {
    text: "Bringing authentic flavors to your special moments since 2013.",
  },
};

export type SiteConfig = typeof siteConfig;
