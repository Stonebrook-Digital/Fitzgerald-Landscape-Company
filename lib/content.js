export const siteName = "Fitzgerald Landscape Co.";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const hero = {
  title:
    "A trusted full-service residential and commercial landscaping company rooted in Woodbury New Jersey and serving all of Gloucester County",
  subhead:
    "We've helped thousands of property owners make their properties cleaner, safer, and more attractive.",
};

/** @deprecated Use hero.subhead */
export const headerQuote = hero.subhead;

export const seasonalPromo = {
  message:
    "Spring lawn care season is here — aeration, power seeding, and fertilization now booking.",
  cta: { href: "/contact", label: "Request a Free Estimate" },
};

export const valueProposition = {
  title: "Transform Your Outdoor Space",
  text: "Enhance your home's curb appeal, increase its property value, and make your outdoor space a refuge.",
};

export const contact = {
  phone: "(856) 381-3670",
  email: "placeholder@example.com",
  address: "Woodbury, NJ 08096",
  hours: "Mon–Fri: 7:00 AM–6:00 PM",
};

export const serviceArea = {
  eyebrow: "Service Area",
  title: "Proudly Serving New Jersey",
  description:
    "Based in Woodbury, NJ — we bring professional landscape care to homeowners across the Garden State.",
  tagline: "Proudly Serving New Jersey",
  subtext:
    "Whether you need routine maintenance or a full outdoor transformation, our team is ready to help properties throughout New Jersey.",
  center: { lat: 39.838, lng: -75.153 },
  mapBbox: [-75.19, 39.805, -75.115, 39.865],
};

/** @deprecated Use `contact` — kept for gradual migration */
export const placeholderContact = contact;

export const cta = {
  primaryLabel: "Request a Free Estimate",
  primaryHref: "/contact",
};

export const pricing = {
  eyebrow: "Pricing",
  title: "Clear Quotes, No Surprises",
  description:
    "Every property is different. We walk your yard, listen to your goals, and put together an honest quote for the work you actually need.",
  highlights: [
    {
      icon: "01",
      title: "Free On-Site Estimates",
      text: "Schedule a walkthrough at no cost. We assess your property and discuss options before any work is booked.",
    },
    {
      icon: "02",
      title: "Itemized Proposals",
      text: "You receive a clear breakdown of scope, materials, and pricing — so you know exactly what is included.",
    },
    {
      icon: "03",
      title: "Plans That Fit You",
      text: "Choose one-time projects, seasonal services, or year-round maintenance plans built around your property.",
    },
  ],
  note: "Ready for a number? Request a free quote and we will follow up to schedule your on-site consultation.",
};

export const serviceCategories = [
  {
    id: "year-round",
    title: "Ongoing, Year-Round Services",
    description:
      "Reliable care and improvements that keep your property looking its best through every season.",
  },
  {
    id: "seasonal",
    title: "Seasonal Services",
    description:
      "Targeted work timed for the season—from spring installations to winter snow removal.",
  },
];

export const services = [
  {
    id: "maintenance",
    title: "Maintenance",
    category: "year-round",
    description:
      "Complete lawn and bed care to keep your property healthy, tidy, and inviting all year long.",
    items: [
      "Aeration",
      "Power seeding",
      "Fertilization",
      "Dethatching",
      "Leaf cleanups",
      "Bed installation, renovation, and maintenance",
      "Lawn mowing",
    ],
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    id: "irrigation",
    title: "Irrigation",
    category: "year-round",
    description:
      "Efficient watering systems designed, installed, and maintained for healthy lawns and plantings.",
    items: [
      "System design and installation",
      "Repairs and seasonal startup/shutdown",
      "Water-efficient upgrades",
    ],
    image: "/pexels-hand-ome-boy-18652807-23408532.jpg",
  },
  {
    id: "hardscaping",
    title: "Hardscaping",
    category: "year-round",
    description:
      "Durable stonework and paving that define how you live outdoors.",
    items: ["Walkways", "Patios", "Steps", "Retaining walls", "Stone borders"],
    image: "/gallery/pexels-nguyendesigner-34909157.jpg",
  },
  {
    id: "lighting",
    title: "Lighting",
    category: "year-round",
    description:
      "Extend the beauty and safety of your landscape after dark.",
    items: ["Low voltage landscape lighting", "Christmas lighting"],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "fencing",
    title: "Fencing",
    category: "year-round",
    description:
      "Privacy, security, and style with fencing installed to complement your property.",
    items: [
      "Wood and composite fencing",
      "Gate installation",
      "Repairs and replacements",
    ],
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    id: "carpentry",
    title: "Carpentry",
    category: "year-round",
    description:
      "Custom outdoor structures built for gatherings, shade, and everyday enjoyment.",
    items: ["Decks", "Pergolas", "Arbors and trellises"],
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd7e?w=800&q=80",
  },
  {
    id: "trees",
    title: "Trees",
    category: "seasonal",
    description:
      "Planting, pruning, and care for trees that shape your landscape for years to come.",
    items: [
      "Tree planting",
      "Pruning and shaping",
      "Removal and stump grinding",
    ],
    image: "/pexels-john-robertson-1100376905-34674271.jpg",
  },
  {
    id: "sod",
    title: "Sod",
    category: "seasonal",
    description:
      "Instant, lush lawns with professional sod installation and soil preparation.",
    items: [
      "Site preparation and grading",
      "Fresh sod installation",
      "Post-install care guidance",
    ],
    image: "/pexels-shvetsa-5231237.jpg",
  },
  {
    id: "snow-removal",
    title: "Snow Removal",
    category: "seasonal",
    description:
      "Dependable clearing so your driveways and walks stay safe through winter storms.",
    items: [
      "Driveway and walkway clearing",
      "Salting and de-icing",
      "Seasonal contracts available",
    ],
    image: "/pexels-karola-g-6952452.jpg",
  },
];

export function getServicesByCategory(categoryId) {
  return services.filter((s) => s.category === categoryId);
}

/** Rotating highlights below the hero — value + label pairs */
export const statsCarousel = [
  { value: "Woodbury", label: "Based & Serving" },
  { value: "Full Service", label: "Landscape Care" },
  { value: "Free", label: "On-Site Quotes" },
  { value: "Year-Round", label: "Maintenance Plans" },
  { value: "Patios to", label: "Pergolas & Decks" },
  { value: "Spring Sod", label: "& Fall Cleanups" },
  { value: "Low Voltage", label: "& Holiday Lighting" },
  { value: "Snow Removal", label: "When Winter Hits" },
];

/** @deprecated Use statsCarousel */
export const stats = statsCarousel;

export const galleryCategories = [
  "All",
  "Residential",
  "Commercial",
  "Hardscape",
  "Gardens",
];

export const galleryItems = [
  {
    id: 1,
    category: "Residential",
    title: "Front Yard Beds",
    image: "/gallery/front-yard-beds.png",
  },
  {
    id: 2,
    category: "Gardens",
    title: "Foundation Plantings",
    image: "/gallery/foundation-plantings.png",
  },
  {
    id: 3,
    category: "Residential",
    title: "Privacy Screen Planting",
    image: "/gallery/privacy-screen-planting.png",
  },
  {
    id: 4,
    category: "Hardscape",
    title: "Paver Walkway",
    image: "/gallery/paver-walkway.png",
  },
  {
    id: 5,
    category: "Gardens",
    title: "Entry Landscape",
    image: "/gallery/entry-landscape.png",
  },
  {
    id: 6,
    category: "Gardens",
    title: "Front Yard Garden",
    image: "/gallery/backyard-garden.png",
  },
  {
    id: 7,
    category: "Residential",
    title: "Mulched Garden Bed",
    image: "/gallery/mulched-garden-bed.png",
  },
  {
    id: 8,
    category: "Gardens",
    title: "Tree & Shrub Planting",
    image: "/gallery/rose-boxwood-border.png",
  },
  {
    id: 9,
    category: "Residential",
    title: "Lawn Care",
    image: "/gallery/lawn-drainage.png",
  },
  {
    id: 10,
    category: "Residential",
    title: "Patio Service",
    image: "/gallery/professional-lawn-care.png",
  },
];

export const featuredGalleryIds = [1, 4, 6, 8, 9, 10];

export function getFeaturedGalleryItems() {
  return featuredGalleryIds
    .map((id) => galleryItems.find((item) => item.id === id))
    .filter(Boolean);
}

export const googleReviews = {
  rating: 4.9,
  count: 48,
  href: "#google-reviews",
};

export const testimonials = [
  {
    id: "fran",
    quote:
      "Matthew and his team completely transformed the front of our home and went above and beyond. The landscaping came out absolutely beautiful, and the attention to detail truly shows how talented and dedicated they are. Professional, reliable, personable, and extremely skilled—we highly recommend them.",
    author: "Fran Smythe",
    location: "South Jersey",
    rating: 5,
    date: "November 2025",
    avatar:
      "https://ui-avatars.com/api/?name=Fran+Smythe&background=1a3d2e&color=f5e6c8&size=150",
  },
  {
    id: "lizabeth",
    quote:
      "Matt is great to work with. His crew arrived on time and did exactly as we wanted. We will continue to use them in the future and recommend them without hesitation. They also handle our lawn service all summer and snow removal in the winter—great people!",
    author: "Lizabeth Bloem",
    location: "Woodbury, NJ",
    rating: 5,
    date: "August 2025",
    avatar:
      "https://ui-avatars.com/api/?name=Lizabeth+Bloem&background=1a3d2e&color=f5e6c8&size=150",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consult",
    text: "We walk your property, listen to your goals, and discuss options for your budget and timeline.",
  },
  {
    step: "02",
    title: "Plan",
    text: "You receive a clear proposal with scope, materials, and pricing—no hidden fees.",
  },
  {
    step: "03",
    title: "Build",
    text: "Our crew executes with craftsmanship, respect for your home, and consistent communication.",
  },
  {
    step: "04",
    title: "Maintain",
    text: "Year-round maintenance and seasonal services keep your investment looking its best.",
  },
];

export const heroImage = "/pexels-artbovich-8134817.jpg";

export const aboutCopy = {
  intro:
    "Fitzgerald Landscape Co. brings thoughtful design, skilled installation, and dependable maintenance to homes and properties across Woodbury and South Jersey. We believe exceptional outdoor spaces are built on fair dealing, steady craftsmanship, and genuine care for every client.",
  heritage:
    "From lawn care and seasonal cleanups to hardscaping, lighting, and snow removal, we offer the full scope of landscape services under one trusted team.",
};
