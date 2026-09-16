/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StepType, ClientLogo, WebsiteType, CaseStudy, PricingPlan, PromiseType, Project } from "./types";

// — Legacy agency data — retained to keep unused components type-safe until they are deleted.
// No longer rendered in App.tsx (Phase 2D). Will be removed when component files are deleted.

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "EVLTN GYM" },
  { name: "NORD-OSTSEE" },
  { name: "REMCO" },
  { name: "CLICKLESS" },
  { name: "OXZY" },
  { name: "ANTIK VEHRS" },
  { name: "CLOCKWISE" },
  { name: "UNIV OF PORT HARCOURT" },
  { name: "CORD'S" },
  { name: "LIFE & CO" },
];

export const STEPS: StepType[] = [
  {
    number: 1,
    title: "Free intro call",
    description: "In 30 minutes we talk through your business goals, target audience, and requirements. Prefer email or a quick phone call? That works perfectly too.",
    badge: "30 Mins",
    icon: "PhoneCall",
  },
  {
    number: 2,
    title: "Free design draft",
    description: "Within 7 days you get a custom design draft of your homepage. We walk through it together and refine it. Absolutely free, no credit card or commitment required.",
    badge: "7 Days",
    icon: "Sparkles",
  },
  {
    number: 3,
    title: "High-performance build",
    description: "Our developers hand-craft your custom website with extreme detail using React & Tailwind. We build for lightning speed, mobile fluidity, and structural integrity.",
    badge: "Dev Phase",
    icon: "CodeXml",
  },
  {
    number: 4,
    title: "Launch & SEO tuning",
    description: "We optimize your metadata, configure lighting-fast server caching, secure hosting, and integrate search analytics so you are indexable by Google and Gemini right away.",
    badge: "Launch Ready",
    icon: "Rocket",
  },
];

export const WEBSITE_TYPES: WebsiteType[] = [
  {
    id: "local",
    title: "Cafe & Local Business",
    tagline: "Location, contact and gallery",
    description: "Get customers in the door with a perfectly structured physical-to-digital bridge. Features maps, menus, local SEO, and a visual showcase.",
    features: [
      "Optimized for local Google Search listings",
      "Interactive menus & visual galleries",
      "Seamless phone, email & map triggers"
    ],
    ctaText: "Build local visibility ↗",
    image: "/src/assets/images/coffee_shop_facade_1784301836572.jpg",
    icon: "MapPin",
  },
  {
    id: "salon",
    title: "Salon, Practice & Service",
    tagline: "Bookable any time, automatic sync",
    description: "Allow clients to book services and pay directly online. Integrated calendars and notifications keep you focused on your work.",
    features: [
      "Fully integrated 24/7 online booking system",
      "Automatic SMS & email confirmations",
      "CalDAV sync with Google Calendar & Outlook"
    ],
    ctaText: "Automate appointments ↗",
    image: "/src/assets/images/beauty_salon_interior_1784301856280.jpg",
    icon: "CalendarCheck",
  },
  {
    id: "shop",
    title: "E-Commerce & Retail",
    tagline: "Orders land directly in your inbox",
    description: "Sell products beautiful all year round. We build customized lightweight checkouts and structured inventories for high conversions.",
    features: [
      "High-speed, distraction-free checkout flow",
      "Secure Stripe, PayPal & local payment methods",
      "Automatic inventory and shipment notifications"
    ],
    ctaText: "Build high-converting shop ↗",
    image: "/src/assets/images/boutique_apparel_store_1784301874609.jpg",
    icon: "ShoppingBag",
  },
  {
    id: "agency",
    title: "Social & Modern Agency",
    tagline: "Guides visitors straight to contact",
    description: "Showcase your portfolio, credentials, and capture leads with absolute speed. Optimized conversion pipelines for maximum inquiries.",
    features: [
      "Custom multi-step client onboarding forms",
      "Dynamic bento-grid visual portfolios",
      "Direct CRM integrations (Hubspot, Notion, Slack)"
    ],
    ctaText: "Start growing pipeline ↗",
    image: "/src/assets/images/developer_at_desk_1784301816194.jpg",
    icon: "Share2",
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "grechow",
    client: "Grechow's Beauty",
    category: "Beauty & Health",
    title: "Premium website doubles the booking revenue.",
    description: "A website with integrated online booking means appointments come in around the clock. On top of that, Larisa actually spends 12 hours less per week on scheduling admin.",
    metrics: "+104%",
    metricLabel: "Appointment volume",
    image: "/src/assets/images/happy_client_portrait_1784301891707.jpg",
    primaryColor: "pink",
    logoText: "GB",
    mockupText: "Grechow's Beauty - Permanent mehr Du.",
  },
  {
    id: "evltn",
    client: "EVLTN Martial Arts",
    category: "Sports & Fitness",
    title: "Sleek rebrand fuels a record member influx.",
    description: "By deploying a modern, high-contrast dark theme optimized for local mobile searches, we helped EVLTN transform their customer onboarding and pack their training classes.",
    metrics: "+58%",
    metricLabel: "New trial members",
    image: "/src/assets/images/developer_at_desk_1784301816194.jpg",
    primaryColor: "purple",
    logoText: "EVLTN",
    mockupText: "EVLTN Martial Arts - Wake up. Train. Repeat.",
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "start",
    name: "Website Start",
    description: "Your professional presence on the web.",
    price: "from 1.490€",
    features: [
      "1-3 pages, custom layout tailored to your brand",
      "Optimised for search engines (SEO) & AI search listings",
      "Perfect for local businesses, practices & campaigns",
      "Free custom design draft upfront (no risk)",
      "High-speed, hand-coded performance",
      "GDPR-compliant cookie-free setup",
    ],
    ctaText: "Get a Website Start draft ↗",
  },
  {
    id: "pro",
    name: "Website Pro",
    description: "Everything your business needs to excel online.",
    price: "from 3.490€",
    badge: "Most Popular",
    features: [
      "Everything in Website Start included",
      "Up to 10 pages, bespoke interactive elements",
      "Fully integrated 24/7 online booking or advanced forms",
      "Custom product databases, filters, and dynamic search",
      "Complete copywriting & high-conversion text crafting",
      "Speed-optimized custom animations and motion design",
      "30 days of comprehensive post-launch support",
    ],
    ctaText: "Get a Website Pro draft ↗",
    popular: true,
  }
];

export const PROMISES: PromiseType[] = [
  {
    id: "draft",
    title: "Free draft upfront",
    description: "Zero risk. See a custom, fully-styled interactive mockup of your homepage before you ever sign a contract or spend a single Euro.",
    icon: "Sparkles",
  },
  {
    id: "guarantee",
    title: "Satisfaction guarantee",
    description: "We don't settle for 'good enough'. We iterate and revise the drafts until you look at the screen and say: 'This is absolutely perfect!'",
    icon: "HeartHandshake",
  },
  {
    id: "price",
    title: "Fixed price from day one",
    description: "No ticking clocks, no hourly surprise invoices, and no sneaky overheads. You pay exactly what we agree on, transparently.",
    icon: "Tag",
  },
  {
    id: "revisions",
    title: "Unlimited revisions",
    description: "During the draft and approval phase, all revision loops are completely covered. Your feedback is what shapes the masterpiece.",
    icon: "RotateCcw",
  },
  {
    id: "gdpr",
    title: "Privacy compliance",
    description: "We build with absolute privacy standard. Secure and optimized cloud hosting, zero cookie-banners needed unless you explicitly request tracking.",
    icon: "Lock",
  },
];

// — Portfolio projects —

export const PROJECTS: Project[] = [
  {
    slug: "harmoniq",
    title: "HarmonIQ",
    type: "REAL",
    category: "Product / Web",
    description: "A music recommendation platform designed around personalized discovery and a focused listening experience.",
    image: null,
    technologies: ["React", "TypeScript", "Django", "Django REST Framework", "Spotify Web API"],
    year: null,
    status: null,
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "hotel-website",
    title: "Hotel Website",
    type: "REAL",
    category: "Hospitality / Web",
    description: "A hospitality website focused on clear presentation of rooms, amenities and booking information.",
    image: null,
    technologies: [],
    year: null,
    status: null,
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "kairo",
    title: "KAIRO",
    type: "CONCEPT",
    category: "Fashion / Web",
    description: "A speculative contemporary fashion brand website exploring editorial typography, imagery and digital product presentation.",
    image: null,
    technologies: [],
    year: null,
    status: null,
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "aura",
    title: "AURA",
    type: "CONCEPT",
    category: "Luxury Skincare / Web",
    description: "A speculative luxury skincare website focused on minimal visual design, product presentation and editorial storytelling.",
    image: null,
    technologies: [],
    year: null,
    status: null,
    liveUrl: null,
    githubUrl: null,
  },
];
