import React from "react";

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
    title: "FitSage",
    description: [
      <>
        An intelligent fitness companion that transforms natural diary entries
        into structured workout insights using Google Gemini AI. The app
        recognizes 40+ workout types from casual diaries, automatically
        evaluates duration and calories, and provides personalized workout
        recommendations based on user progress. Built with a minimalist design
        philosophy, it eliminates the friction of traditional fitness tracking
        by allowing users to write freely about their workouts while the AI
        handles all the data structuring and analysis. FitSage helps users build
        consistent fitness habits and level up fitness enjoyment, while
        maintaining a focus on progress and intelligent workout planning.
      </>,
    ],
    images: [
      "/projects/fit1.png",
      "/projects/fit2.png",
      "/projects/fit3.png",
      "/projects/fit4.png",
    ],
    github: "https://github.com/rickytang666/fitsage",
    website: "https://fitsage.tech/",
  },
  {
    id: "2",
    title: "CheFlow",
    description: [
      <>
        A lightweight desktop app that revolutionizes recipe management through
        intelligent recipe matching and data-driven cooking insights. It
        features a smart recommendation algorithm that analyzes your fridge
        inventory against recipe and time requirements, prioritizing either
        ingredient availability or time constraints based on user preferences.
        CheFlow keeps track of cooking activities, generating heatmaps and
        applying mathematical regression models to reveal cooking habits and
        trends. By combining practical meal planning tools with comprehensive
        analytics, CheFlow helps users build consistent cooking habits while
        reducing food waste through data-informed grocery decisions.
      </>,
    ],
    images: [
      "/projects/chef1.png",
      "/projects/chef2.png",
      "/projects/chef3.png",
    ],
    github: "https://github.com/rickytang666/cheflow",
  },
  {
    id: "3",
    title: "EcoHub",
    description: [
      <>
        A gamified web app designed to make sustainability engaging and
        rewarding by encouraging users to complete eco-friendly challenges and
        earn points for prizes. Inspired by Hack Club and built with a focus on
        fun and motivation, EcoHub uses a incentive-based system to promote
        environmental actions through friendly competition. The platform blends
        interactive visuals with a strong user experience, offering features
        like activity tracking and prizes shop to analyze long-term dedication.
        With future plans to expand globally and enhance its user insights,
        EcoHub turns everyday sustainable choices into meaningful progress.
      </>,
    ],
    images: ["/projects/eco1.png"],
    github: "https://github.com/rickytang666/ecohub",
  },
  {
    id: "4",
    title: "Vanilla Flashcards",
    description: [
      <>
        A lightweight, responsive flashcard web app that lets users create,
        edit, and study flashcards directly in the browser. It features a
        focused practice mode with a 5-point grading system (0-4) to track
        retention progress. Users can navigate efficiently using keyboard
        shortcuts and manage their collection through an intuitive list
        interface. The app automatically prioritizes cards with lower retention
        scores during practice sessions, making it ideal for quick, effective
        studying on both desktop and mobile devices.
      </>,
    ],
    images: ["/projects/van1.png", "/projects/van2.png"],
    github: "https://github.com/rickytang666/vanilla-flashcards",
    website: "https://vanilla-flashcards.vercel.app/",
  },
  {
    id: "5",
    title: "SwiftNotes",
    description: [
      <>
        An lightweight, feature-rich note-taking desktop app that transforms the
        traditional note-taking experience through gamified productivity
        incentives, advanced customization options, and enterprise-grade
        security. Built with a modern tabbed interface, the app features an
        innovative reward system that motivates consistent usage, comprehensive
        theming capabilities including dark mode and multi-font support, and
        real-time local storage with optional AES encryption. Designed for
        productivity-focused users who demand both functionality and security in
        their digital workspace.
      </>,
    ],
    images: ["/projects/swift1.png", "/projects/swift2.png"],
    github: "https://github.com/rickytang666/swiftnotes",
  },
  {
    id: "6",
    title: "2-Player Tank Battle Game",
    description: [
      <>
        A local multiplayer tank battle game built with Python Tkinter for the
        GUI. Players control tanks with limited fuel, ammo, and health points,
        requiring strategic resource management. The game features real-time
        collision detection, damage calculation based on proximity, and
        continuous health loss mechanics. It also implemented special abilities
        including but not limited to: auto-aiming systems, improved mobility,
        and regenerative healing through movement. With object-oriented
        programming and event-driven architecture, the game is beginner-friendly
        and able to extend with new features and mechanics.
      </>,
    ],
    images: ["/projects/tank1.png", "/projects/tank2.png"],
    github: "https://github.com/rickytang666/2p-tank-battle",
  },
  {
    id: "7",
    title: "Movie Review Station",
    description: [
      <>
        A full-stack movie review platform where users can browse countless
        movies from the TMDB, read community reviews, and share their own
        ratings/reviews. This web app features trending movie browsing,
        searching and navigation functionality, and a collaborative review
        system.
      </>,
    ],
    images: ["/projects/movie1.png"],
    github: "https://github.com/rickytang666/movie-review-website",
    website: "https://movie-review-website-plum.vercel.app/",
  },
  {
    id: "8",
    title: "World Championship 100m Sim",
    description: [
      <>
        A comprehensive 100m dash simulator that accurately models the Men's
        100m sprint event using real-world athlete performance data and dynamic
        environmental factors, outputting results in detailed animations. The
        system implements Dr. Jonas Mureika's models for sprint data analysis,
        incorporating biomechanical principles and environmental effects on race
        outcomes. The simulator features realistic weather impact modeling and
        comprehensive performance analytics, allowing users to simulate and
        analyze races with authentic dynamics. The simulator provides detailed
        performance comparisons and outcome evaluation, making it a useful tool
        for sports analytics and competitive analysis.
      </>,
    ],
    images: ["/projects/sim1.png", "/projects/sim2.png"],
    github: "https://github.com/rickytang666/world-championship-100m-sim",
  },
];
