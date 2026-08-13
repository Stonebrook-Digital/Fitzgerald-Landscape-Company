export const siteName = "Fitzgerald Landscape Co.";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];

export function getServiceHref(id) {
  return `/services/${id}`;
}

export function getServiceById(id) {
  return services.find((service) => service.id === id);
}

export const hero = {
  title:
    "A trusted full-service residential and commercial landscaping company rooted in Woodbury New Jersey and serving all of Gloucester County",
  subhead:
    "We've helped thousands of clients make their properties cleaner, safer, and more attractive.",
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
  title: "Service Area",
  copy:
    "Proudly serving Woodbury, New Jersey and the surrounding areas, including Wenonah, West Deptford, Deptford, National Park, Pitman, Mantua, and more.",
  center: { lat: 39.838, lng: -75.153 },
  mapBbox: [-75.19, 39.805, -75.115, 39.865],
};

/** @deprecated Use `contact` — kept for gradual migration */
export const placeholderContact = contact;

export const cta = {
  primaryLabel: "Request a Free Estimate",
  mobileLabel: "Start Today",
  primaryHref: "/contact",
  intakeTitle: "How can we be of service?",
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

export const services = [
  {
    id: "softscaping",
    title: "Softscaping",
    description:
      "Living elements that bring color, texture, and curb appeal to your property — from new plantings to full garden transformations.",
    items: [
      "Garden and bed design",
      "Planting and mulching",
      "Sod installation",
      "Tree and shrub care",
      "Seasonal cleanups",
    ],
    image: "/gallery/foundation-plantings.png",
  },
  {
    id: "hardscaping",
    title: "Hardscaping",
    description:
      "Durable stonework and paving that define how you live outdoors.",
    items: ["Walkways", "Patios", "Steps", "Retaining walls", "Stone borders"],
    image: "/gallery/pexels-nguyendesigner-34909157.jpg",
  },
  {
    id: "mowing",
    title: "Mowing",
    description:
      "Reliable lawn care that keeps your grass healthy, even, and well-maintained week after week.",
    items: [
      "Lawn mowing",
      "Edging and trimming",
      "Aeration and overseeding",
      "Fertilization",
      "Leaf cleanups",
    ],
    image: "/gallery/professional-lawn-care.png",
  },
  {
    id: "irrigation",
    title: "Irrigation",
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
    id: "lighting",
    title: "Lighting",
    description:
      "Extend the beauty and safety of your landscape after dark.",
    items: ["Low voltage landscape lighting", "Holiday and accent lighting"],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "snow-ice",
    title: "Snow and Ice Management",
    description:
      "Dependable winter service to keep driveways, walks, and lots safe through snow and ice.",
    items: [
      "Snow plowing and removal",
      "Salting and de-icing",
      "Walkway and lot clearing",
      "Seasonal contracts available",
    ],
    image: "/pexels-karola-g-6952452.jpg",
  },
];

/**
 * Partner / supplier logos for the homepage carousel.
 * Set `logo` to a path under /public (e.g. "/brands/hunter.svg") when assets are ready.
 * Leave `logo` null to show a placeholder until images are imported.
 */
export const trustedBrands = {
  eyebrow: "Partners",
  title: "Brands We Trust",
  description:
    "We install and maintain products from industry-leading manufacturers our clients rely on.",
  brands: [
    { id: "stihl", name: "STIHL", logo: "/STIHL-logo-transparent.png", logoScale: 0.9, logoOffsetY: -4 },
    { id: "toro", name: "Toro", logo: "/toro-shield.png", logoScale: 1.02 },
    { id: "echo", name: "Echo", logo: "/echo.png", logoScale: 2.55, logoOffsetY: 3 },
    { id: "redmax", name: "RedMax", logo: "/redmax-logo.png", logoScale: 0.95, logoOffsetY: -4 },
    {
      id: "hunter",
      name: "Hunter",
      logo: "/hunter-cropped.png",
      logoScale: 0.66,
      logoOffsetY: 3,
    },
    { id: "lesco", name: "LESCO", logo: "/lesco-cropped.png", logoScale: 0.76, logoOffsetY: 3 },
    {
      id: "western",
      name: "Western Snow Plows",
      logo: "/Western_snow_plows_logo.jpg",
      logoScale: 0.88,
    },
    { id: "belgard", name: "Belgard", logo: "/belgard.png", logoScale: 1.02 },
    { id: "saltdogg", name: "SaltDogg", logo: "/saltdogg-cropped.png", logoScale: 1.05 },
  ],
};

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

export const googleReviews = {
  rating: 4.9,
  count: 93,
  externalHref:
    "https://www.google.com/search?q=Fitzgerald+Landscape+Co+Woodbury+NJ+reviews#lrd=0xa8b7f268a065782d:0xcc7d5e01f52b6a1c,1,,,,",
  tagline: "Real clients — real reviews",
  moreLabel: "See More Reviews",
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
    image: "/franReview.png",
    imageAlt: "Landscaping transformation at Fran Smythe's home by Fitzgerald Landscape Co.",
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
    image: "/lizbethReview.png",
    imageAlt: "Hardscaping and lighting project at Lizabeth Bloem's property by Fitzgerald Landscape Co.",
  },
  {
    id: "donna",
    quote:
      "Fitzgerald Landscaping is the lawn company we chose for our property after cutting and trimming our lawn ourselves for more than 30 years. And we are so glad we did. They take care of our property as if it was their own. To be honest, I never thought that any lawn service would measure up to the care we took in our yard, but they did. And the owner is so easy to work with. I highly recommend Fitzgerald to care for your yard and property!",
    author: "Donna Turner",
    location: "South Jersey",
    rating: 5,
    date: "2025",
    avatar: "/donnaTurnerReview.png",
    image: "/donnaTurnerLawn.webp",
    imageAlt: "Donna Turner's lawn cared for by Fitzgerald Landscape Co.",
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

export const heroImage = "/hero-home.jpg";

export const aboutCopy = {
  intro:
    "Fitzgerald Landscape Co. brings thoughtful design, skilled installation, and dependable maintenance to homes and properties across Woodbury and South Jersey. We believe exceptional outdoor spaces are built on fair dealing, steady craftsmanship, and genuine care for every client.",
  heritage:
    "From lawn care and seasonal cleanups to hardscaping, lighting, and snow removal, we offer the full scope of landscape services under one trusted team.",
};
