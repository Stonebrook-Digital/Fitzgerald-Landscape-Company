export const siteName = "Fitzgerald Landscape Co.";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const headerQuote =
  "In all endeavors, pursue not only wealth, but also virtue—fair dealing, steadfastness, kindness to clients, moderation in all things. Thus you will find your labor transformed into the crafting of a noble life as well as a thriving business.";

export const seasonalPromo = {
  message:
    "Spring lawn care season is here — aeration, power seeding, and fertilization now booking.",
  cta: { href: "/contact", label: "Request a free quote" },
};

export const valueProposition = {
  eyebrow: "Why Choose Us?",
  title: "Transform Your Outdoor Space",
  text: "Enhance your home's curb appeal, increase its property value, and make your outdoor space a refuge.",
};

export const contact = {
  owner: "Bryan Ortiz",
  phone: "(856) 381-3670",
  email: "placeholder@example.com",
  address: "Woodbury, NJ 08096",
  hours: "Mon–Fri: 7:00 AM–6:00 PM",
};

/** @deprecated Use `contact` — kept for gradual migration */
export const placeholderContact = contact;

export const cta = {
  primaryLabel: "Request a Free Quote",
  primaryHref: "/contact",
};

export const pricing = {
  eyebrow: "Pricing",
  title: "Tailored to Your Property",
  description:
    "Every landscape is different. We provide clear, itemized quotes after a walkthrough of your property—no surprises, just honest pricing for the work you need.",
  points: [
    "Free on-site consultations and estimates",
    "Year-round maintenance plans available",
    "Seasonal packages for spring cleanup, fall leaf removal, and winter snow service",
  ],
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
    image:
      "https://images.unsplash.com/photo-1558904541-efa9a96ee3d6?w=800&q=80",
  },
  {
    id: "hardscaping",
    title: "Hardscaping",
    category: "year-round",
    description:
      "Durable stonework and paving that define how you live outdoors.",
    items: ["Walkways", "Patios", "Steps", "Retaining walls", "Stone borders"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
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
    image: "/gallery/Screenshot%20from%202026-05-29%2000-32-28.png",
  },
  {
    id: 2,
    category: "Gardens",
    title: "Foundation Plantings",
    image: "/gallery/Screenshot%20from%202026-05-29%2000-32-49.png",
  },
  {
    id: 3,
    category: "Residential",
    title: "Privacy Screen Planting",
    image: "/gallery/Screenshot%20from%202026-05-29%2000-33-55.png",
  },
  {
    id: 4,
    category: "Hardscape",
    title: "Paver Walkway",
    image: "/gallery/Screenshot%20from%202026-05-29%2000-34-14.png",
  },
  {
    id: 5,
    category: "Gardens",
    title: "Entry Landscape",
    image: "/gallery/Screenshot%20from%202026-05-29%2000-34-38.png",
  },
  {
    id: 6,
    category: "Gardens",
    title: "Backyard Garden",
    image: "/gallery/Screenshot%20from%202026-05-29%2000-35-38.png",
  },
  {
    id: 7,
    category: "Residential",
    title: "Mulched Garden Bed",
    image: "/gallery/Screenshot%20from%202026-05-29%2000-36-01.png",
  },
  {
    id: 8,
    category: "Gardens",
    title: "Rose & Boxwood Border",
    image: "/gallery/Screenshot%20from%202026-05-29%2000-36-25.png",
  },
  {
    id: 9,
    category: "Residential",
    title: "Lawn & Drainage",
    image: "/gallery/Screenshot%20from%202026-05-29%2000-36-54.png",
  },
  {
    id: 10,
    category: "Residential",
    title: "Professional Lawn Care",
    image: "/gallery/Screenshot%20from%202026-05-29%2000-38-26.png",
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

export const team = [
  {
    name: "Bryan Ortiz",
    role: "Owner",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
];

export const heroImage = "/pexels-artbovich-8134817.jpg";

export const aboutCopy = {
  intro:
    "Fitzgerald Landscape Co. brings thoughtful design, skilled installation, and dependable maintenance to homes and properties across Woodbury and South Jersey. We believe exceptional outdoor spaces are built on fair dealing, steady craftsmanship, and genuine care for every client.",
  heritage:
    "From lawn care and seasonal cleanups to hardscaping, lighting, and snow removal, we offer the full scope of landscape services under one trusted team.",
};
