import React from "react";
import Link from "@/components/link";
import Image from "next/image";

export interface Project {
  id: string;
  title: string;
  description: React.ReactNode[];
  images: string[];
  github: string;
  website?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "BrainLattice",
    description: [
      <>
        A tool that transforms 100+ pages of PDFs into interactive knowledge network for intuitive studying. Built with Next.js and FastAPI, utilizing multiple LLMs to extract concepts and map connections. You can click nodes for instant explanations or listen to auto-generated audio summaries while on the go.
      </>,
    ],
    images: [
      "/projects/brain1.png",
      "/projects/brain2.png",
      "/projects/brain3.png",
      "/projects/brain4.png",
      "/projects/brain5.png",
    ],
    github: "https://github.com/rickytang666/brainlattice",
    website: "https://www.brainlattice.study/",
  },
  {
    id: "2",
    title: "Post-It",
    description: [
      <>
        AR social experience for{" "}
        <span className="inline-block">
          <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/960px-Snapchat_logo.svg.png?20190813231721" alt="Snap Logo" className="inline align-middle mx-1" width={20} height={20} />
          <Link href="https://spectacles.com/">Snap Spectacles</Link>
        </span> where you
        leave persistent 3D notes in the real world. Includes spatial mapping
        and voice controls so you can discover hidden messages from others.
        Built in 32 hours; semi-finalist at{" "}
        <span className="inline-block">
          <Image src="/projects/htn_logo.jpg" alt="HTN Logo" className="inline align-middle mx-1" width={20} height={20} />
          <Link href="https://hackthenorth.com/">Hack the North 2025.</Link>
        </span>
      </>,
    ],
    images: [
      "/projects/post1.jpg",
      "/projects/post2.jpg",
      "/projects/post3.jpg",
      "/projects/post4.jpg",
    ],
    github: "https://github.com/rickytang666/post-it",
  },
  {
    id: "3",
    title: "FitSage",
    description: [
      <>
        Comprehensive fitness tracker that turns messy diary entries or verbal vents into structured
        workout data using, consolidating processes across multiple platforms. Recognizes 40+ activities automatically so you don&apos;t have to fiddle
        with dropdowns. Designed to help build habits without the tracking
        hassle.
      </>,
    ],
    images: [
      "/projects/fit1.png",
      "/projects/fit2.png",
      "/projects/fit3.png",
      "/projects/fit4.png",
    ],
    github: "https://github.com/rickytang666/fitsage",
    website: "https://www.fitsage.tech/",
  },
  {
    id: "4",
    title: "CheFlow",
    description: [
      <>
        Desktop recipe manager that suggests meals based on what&apos;s expiring
        in your fridge, built with Processing. Matches ingredients to recipes and tracks your cooking
        habits with heatmaps. Helps you build up cooking habits and waste less food.
      </>,
    ],
    images: [
      "/projects/chef1.png",
      "/projects/chef2.png",
    ],
    github: "https://github.com/rickytang666/cheflow",
  },
  {
    id: "5",
    title: "EcoHub",
    description: [
      <>
        Gamified tracker that rewards eco-friendly actions with points and users can redeem prizes. Inspired
        by <Link href="https://hackclub.com/">Hack Club</Link>, it makes
        sustainability fun by letting you log activities and earn actual prizes.
        Focuses on keeping motivation high.
      </>,
    ],
    images: ["/projects/eco1.png"],
    github: "https://github.com/rickytang666/ecohub",
  },
  {
    id: "6",
    title: "Vanilla Flashcards",
    description: [
      <>
        Keyboard-first flashcard app for rapid study. Uses a merit-based grading
        system to show you the concepts you struggle with more often. Fully
        responsive and browser-based for quick practice sessions.
      </>,
    ],
    images: ["/projects/van1.png", "/projects/van2.png"],
    github: "https://github.com/rickytang666/vanilla-flashcards",
    website: "https://vanilla-flashcards.vercel.app/",
  },
  {
    id: "7",
    title: "SwiftNotes",
    description: [
      <>
        Local-first desktop notes app focused on speed and privacy. Saves
        everything in real-time with optional encryption and supports full
        theming. Includes a small gamification system to help you stay
        productive.
      </>,
    ],
    images: ["/projects/swift1.png"],
    github: "https://github.com/rickytang666/swiftnotes",
  },
  {
    id: "8",
    title: "2-Player Tank Battle Game",
    description: [
      <>
        Zero-dependency multiplayer tank game built from scratch with Python Tkinter (no
        game engines). Features custom physics for collisions and ballistics. A
        fun project to learn event-driven architecture and OOP.
      </>,
    ],
    images: ["/projects/tank1.png"],
    github: "https://github.com/rickytang666/2p-tank-battle",
  },
  {
    id: "9",
    title: "Movie Review Station",
    description: [
      <>
        Movie discovery site powered by the{" "}
        <Link href="https://www.themoviedb.org/">TMDB API</Link>. Browses
        trending films, filters search results, and lets users leave ratings and
        reviews. A simple place to find what to watch next.
      </>,
    ],
    images: ["/projects/movie1.png"],
    github: "https://github.com/rickytang666/movie-review-website",
    website: "https://movie-review-website-plum.vercel.app/",
  },
  {
    id: "10",
    title: "World Championship 100m Sim",
    description: [
      <>
        Sprint simulator based on{" "}
        <Link href="https://jmureika.lmu.build/track/index.html">
          Dr. Jonas Mureika&apos;s
        </Link>{" "}
        physics models. Simulates a 100m race by accounting for wind, altitude, humidity,
        and reaction times. Outputs realistic animations to visualize how
        multiple different factors change the race.
      </>,
    ],
    images: ["/projects/sim1.png"],
    github: "https://github.com/rickytang666/world-championship-100m-sim",
  },
];
