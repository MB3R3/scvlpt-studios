/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Project } from "./types";

import harmoniqHero from "./assets/images/projects/harmoniq/h-screen2.jpeg";
import harmoniqScreen1 from "./assets/images/projects/harmoniq/h-screen1.jpeg";
import harmoniqScreen3 from "./assets/images/projects/harmoniq/h-screen3.jpeg";
import hotelHero from "./assets/images/projects/hotel-lobby/home.jpeg";
import hotelAbout from "./assets/images/projects/hotel-lobby/about.jpeg";
import hotelBooking from "./assets/images/projects/hotel-lobby/booking.jpeg";

// — Portfolio projects —

export const PROJECTS: Project[] = [
  {
    slug: "harmoniq",
    title: "HarmonIQ",
    type: "REAL",
    category: "Product / Web",
    description: "A music recommendation platform designed around personalized discovery and a focused listening experience.",
    image: harmoniqHero,
    technologies: ["React", "TypeScript", "Django", "Django REST Framework", "Spotify Web API", "SQLite"],
    year: "2026",
    status: "Ongoing",
    liveUrl: null,
    githubUrl: null,
    overview: "HarmonIQ is a music discovery platform that lets people shape what they want to hear through mood, genre, era, artist, and discovery preferences. Rather than relying on algorithmic feeds or social signals, the experience is driven by intentional input — giving users direct control over the direction of their listening.",
    role: "Design & Development",
    screenshots: [harmoniqHero, harmoniqScreen1, harmoniqScreen3],
    challenge: "Most music discovery tools either rely on listening history or surface popular content without giving the listener meaningful control. HarmonIQ set out to create a preference-driven experience where the user's mood, taste, and intent shape the recommendation — not passive data. The challenge was building a system that balances guided input with genuine surprise, while maintaining a clean, focused interface that doesn't overwhelm.",
    designDirection: "The interface is designed to be music-focused, immersive but restrained. A clear discovery flow guides the user from preference inputs to recommendation results. Genre, era, artist, mood, and discovery style are presented as direct, tactile controls — not buried behind settings. The layout prioritizes legibility and responsive behavior, keeping the recommendation output as the visual anchor.",
    approach: "The frontend is built with React and TypeScript, providing a responsive custom interface. The backend uses Django and Django REST Framework, integrated with the Spotify Web API for music discovery and recommendation data. The recommendation flow works by collecting user preference inputs — mood, genre, era, artist, and discovery style — then passing them through a backend discovery endpoint that evaluates and filters Spotify results, presenting recommendations with contextual reasons. Authentication, session handling, and CSRF protection are implemented to support a secure, stateful experience.",
    development: "The system architecture connects a React frontend to a Django backend through a REST API. The backend manages Spotify API integration, user authentication, and the recommendation pipeline. SQLite is used during current development. Key technical areas include OAuth session flow, CSRF handling across frontend and backend, and the recommendation scoring logic that evaluates user preferences against available music data.",
    recommendation: "Users shape recommendations by combining mood, genre, era, artist, and discovery style inputs. The system produces results with contextual reasons explaining why each recommendation was selected, helping users understand the logic behind each suggestion while keeping the experience transparent and exploratory.",
    outcome: "HarmonIQ is an active portfolio project that demonstrates full-stack product development — from design direction through to API integration and recommendation logic. The project continues to evolve as the recommendation system and interface are refined.",
    nextSlug: "hotel-website",
  },
  {
    slug: "hotel-website",
    title: "Hotel Website",
    type: "REAL",
    category: "Hospitality / Web",
    description: "A hospitality website focused on clear presentation of rooms, amenities, and booking information.",
    image: hotelHero,
    technologies: [],
    year: "2026",
    status: null,
    liveUrl: null,
    githubUrl: null,
    overview: "A hospitality website centered on visual presentation, intuitive navigation, and a booking-oriented user experience. The project explores how hotel and accommodation information can be presented with clarity and warmth through a web interface.",
    role: "Design & Development",
    screenshots: [hotelHero, hotelAbout, hotelBooking],
    challenge: "Hospitality websites need to communicate atmosphere and trust quickly — before a guest considers booking. The challenge was creating a layout that presents rooms, amenities, and essential information in a way that feels inviting without relying on complex interaction patterns or heavy animation.",
    designDirection: "The design focuses on a warm, editorial presentation that prioritizes visual clarity. Large imagery carries the atmosphere. Navigation is minimal and intuitive, with clear paths to key information. The layout is responsive, presenting the same considered experience across device sizes.",
    approach: "The project was built with a focus on presentation — ensuring that imagery, typography, and layout work together to create a hospitality-oriented experience. The interface emphasizes essential information: property visuals, room presentation, and booking clarity. Responsive behavior was a key consideration throughout.",
    outcome: "The Hotel Website demonstrates a client-style hospitality presentation — clean, responsive, and focused on the user experience that matters in a booking context. No hotel name, client, or business outcome is fabricated; the work is shown as a real, presentation-focused web project.",
    nextSlug: "kairo",
  },
  {
    slug: "kairo",
    title: "KAIRO",
    type: "CONCEPT",
    category: "Fashion / Web",
    description: "A speculative contemporary fashion brand website exploring editorial typography, imagery, and digital product presentation.",
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
    description: "A speculative luxury skincare website focused on minimal visual design, product presentation, and editorial storytelling.",
    image: null,
    technologies: [],
    year: null,
    status: null,
    liveUrl: null,
    githubUrl: null,
  },
];
