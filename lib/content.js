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
  phone: "(000) 000-0000",
  email: "placeholder@example.com",
  address: "419 Essex St, Brooklyn, NY 11208",
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
    image:
      "https://images.unsplash.com/photo-1592150621744-081686a89a08?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
];

export function getServicesByCategory(categoryId) {
  return services.filter((s) => s.category === categoryId);
}

/** Rotating highlights below the hero — value + label pairs */
export const statsCarousel = [
  { value: "Brooklyn", label: "Based & Serving" },
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
    title: "Backyard Retreat",
    image:
      "https://images.unsplash.com/photo-1558904541-efa9a96ee3d6?w=900&q=80",
  },
  {
    id: 2,
    category: "Hardscape",
    title: "Stone Patio",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
  },
  {
    id: 3,
    category: "Gardens",
    title: "Perennial Beds",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80",
  },
  {
    id: 4,
    category: "Commercial",
    title: "Property Grounds",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80",
  },
  {
    id: 5,
    category: "Residential",
    title: "Evening Lighting",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
  },
  {
    id: 6,
    category: "Hardscape",
    title: "Garden Walkway",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
  },
  {
    id: 7,
    category: "Gardens",
    title: "Seasonal Plantings",
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=900&q=80",
  },
  {
    id: 8,
    category: "Commercial",
    title: "Entry Landscaping",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80",
  },
  {
    id: 9,
    category: "Residential",
    title: "Lawn & Trees",
    image:
      "https://images.unsplash.com/photo-1592150621744-081686a89a08?w=900&q=80",
  },
  {
    id: 10,
    category: "Gardens",
    title: "Shade Garden",
    image:
      "https://images.unsplash.com/photo-1628746533051-98847df1d50c?w=900&q=80",
  },
  {
    id: 11,
    category: "Hardscape",
    title: "Natural Stone",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd7e?w=900&q=80",
  },
  {
    id: 12,
    category: "Commercial",
    title: "Modern Hardscape",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
  },
];

export const googleReviews = {
  rating: 4.9,
  count: 48,
  href: "#google-reviews",
};

export const testimonials = [
  {
    id: "sarah",
    quote:
      "Fitzgerald transformed our backyard into a space we use every weekend. Professional, on time, and fair pricing.",
    author: "Sarah Mitchell",
    location: "East New York, Brooklyn",
    rating: 5,
    date: "March 2025",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
  },
  {
    id: "james",
    quote:
      "Their maintenance crew keeps our property immaculate. Aeration and fertilization made a visible difference in our lawn.",
    author: "James Torres",
    location: "Bushwick, Brooklyn",
    rating: 5,
    date: "January 2025",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
  },
  {
    id: "elena",
    quote:
      "From the patio to the lighting, every detail was handled with care. We recommend them without hesitation.",
    author: "Elena Rodriguez",
    location: "Cypress Hills, Brooklyn",
    rating: 5,
    date: "November 2024",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
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

export const heroImage =
  "https://images.unsplash.com/photo-1558904541-efa9a96ee3d6?w=1920&q=85";

export const heroPortrait =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=85";

export const aboutCopy = {
  intro:
    "Fitzgerald Landscape Co. brings thoughtful design, skilled installation, and dependable maintenance to homes and properties across Brooklyn. We believe exceptional outdoor spaces are built on fair dealing, steady craftsmanship, and genuine care for every client.",
  heritage:
    "From lawn care and seasonal cleanups to hardscaping, lighting, and snow removal, we offer the full scope of landscape services under one trusted team.",
};
