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
    technologies: ["React", "TypeScript", "Django", "Django REST Framework", "Spotify Web API"],
    year: "2026",
    status: null,
    liveUrl: null,
    githubUrl: null,
    overview: "HarmonIQ is a music discovery experience that lets people shape what they want to hear through mood, genre, era, artist, and discovery preferences.",
    role: "Design & Development",
    screenshots: [harmoniqHero, harmoniqScreen1, harmoniqScreen3],
    designDirection: "The design centers on a simple discovery flow with clear visual hierarchy. Mood and preference controls are presented as direct, tactile inputs — genre, era, artist, and discovery style — that shape the recommendation result without overwhelming the interface. The layout prioritizes legibility and responsive behavior, keeping the recommendation output as the visual anchor.",
    development: "The frontend is built with React and TypeScript. The backend uses Django and Django REST Framework and integrates with the Spotify Web API for music discovery and recommendation functionality. Authentication, session, and CSRF handling are implemented to support a secure, stateful product experience.",
    recommendation: "Users can shape recommendations by combining inputs such as mood, genre, era, artist, and discovery style. The experience is designed to surface relevant results while remaining transparent about the controls that influence discovery.",
  },
  {
    slug: "hotel-website",
    title: "Hotel Website",
    type: "REAL",
    category: "Hospitality / Web",
    description: "A hospitality website focused on clear presentation of rooms, amenities and booking information.",
    image: hotelHero,
    technologies: [],
    year: "2026",
    status: null,
    liveUrl: null,
    githubUrl: null,
    overview: "A hospitality-focused website centered on presentation, navigation, and a booking-oriented user experience.",
    role: "Design & Development",
    screenshots: [hotelHero, hotelAbout, hotelBooking],
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
