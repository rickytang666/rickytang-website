export interface Project {
  id: string;
  title: string;
  description: string[];
  images: string[];
  github: string;
  website?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'FitSage',
    description: [
      'FitSage is a smart, minimalist fitness web app designed to help casual exercisers track workouts, journal their fitness journey, and gain meaningful insights with the help of Google Gemini AI. It offers an intuitive, distraction-free interface, a personal dashboard for tracking progress, and a secure, quick sign-in with Google. FitSage transforms free-form diary entries into structured summaries and suggestions, giving users clarity without the clutter—all while keeping their data private and in their control.'
    ],
    images: [
      '/projects/fit1.png',
      '/projects/fit2.png',
      '/projects/fit3.png',
      '/projects/fit4.png',
    ],
    github: 'https://github.com/rickytang666/fitsage',
    website: 'https://fitsage.tech/',
  },
  {
    id: '2',
    title: 'CheFlow',
    description: [
      'CheFlow is an interactive app designed to help students and young adults take control of their cooking habits by making meal planning smarter and more engaging. It allows users to store and organize recipes, track fridge inventory, and receive personalized recipe recommendations based on available ingredients and time constraints. With built-in analytics like heatmaps and math regressions, CheFlow offers insights into your cooking patterns and ingredient usage—making it easier to plan meals, reduce waste, and grow culinary skills over time.'
    ],
    images: [
      '/projects/chef1.png',
      '/projects/chef2.png',
      '/projects/chef3.png',
    ],
    github: 'https://github.com/rickytang666/cheflow',
  },
  {
    id: '3',
    title: 'EcoHub',
    description: [
      'EcoHub is a gamified web app designed to make sustainability engaging and rewarding by encouraging users to complete eco-friendly challenges and compete for prizes. Inspired by Hack Club and built with a focus on fun and motivation, EcoHub uses a challenge-based system to promote environmental actions through friendly competition. The platform blends interactive visuals with a strong user experience, offering features like activity tracking and upcoming user insights to analyze long-term dedication. With future plans to expand globally and enhance its visual appeal, EcoHub aims to turn everyday sustainable choices into meaningful progress—one challenge at a time.'
    ],
    images: [
      '/projects/eco1.png',
    ],
    github: 'https://github.com/rickytang666/ecohub',
  },
  {
    id: '4',
    title: 'Vanilla Flashcards',
    description: [
      'Vanilla Flashcards is a lightweight, responsive flashcard app built with vanilla JavaScript that lets users create, edit, and study flashcards directly in the browser. It features a simple practice mode with a 0–4 grading system to reinforce memory through spaced repetition. Users can navigate efficiently using keyboard shortcutsand utilize storage to persist their flashcards across sessions, making it ideal for quick, effective studying on both desktop and mobile devices.'
    ],
    images: [
      '/projects/van1.png',
      '/projects/van2.png',
    ],
    github: 'https://github.com/rickytang666/vanilla-flashcards',
    website: 'https://vanilla-flashcards.vercel.app/',
  },
  {
    id: '5',
    title: 'SwiftNotes',
    description: [
      'SwiftNotes is an open-source, user-friendly note-taking app designed to make writing secure, customizable, and even fun. It features an incentives system that rewards productivity with gold coins, font and interface customization (including dark mode), and a tabbed layout for managing multiple notes with ease. Notes are automatically saved to local storage with every keystroke, and optional password encryption ensures privacy. Ideal for students, professionals, or anyone who wants an organized, secure, and engaging note-taking experience.'
    ],
    images: [
      '/projects/swift1.png',
      '/projects/swift2.png',
    ],
    github: 'https://github.com/rickytang666/swiftnotes',
  },
  {
    id: '6',
    title: '2-Player Tank Battle Game',
    description: [
      '2-Player Tank Battle Game is a fast-paced local multiplayer game built with Python and Tkinter, where two players control tanks and battle until one runs out of health. Each tank starts with limited fuel, ammo, and 100 health points. Players must manage resources carefully — moving, shooting, and even time all consume fuel. Attacks deal damage only within range, and collisions cause continuous health loss. The game includes unique special abilities like faster speed, auto-aiming, extra ammo, or self-healing through movement. It\'s a strategic and competitive game with real-time mechanics and a variety of playstyles, offering a fun and challenging experience.'
    ],
    images: [
      '/projects/tank1.png',
      '/projects/tank2.png',
    ],
    github: 'https://github.com/rickytang666/2p-tank-battle',
  },
  {
    id: '7',
    title: 'Movie Review Station',
    description: [
      'The Movie Review Website is a dynamic web application designed to provide users with a platform to browse, search, and review movies. Built with a modern tech stack, the site allows users to explore detailed information about films, read and write reviews, and rate their favorite titles. With a user-friendly interface and responsive design, the platform aims to foster a vibrant community of movie enthusiasts, enabling engaging discussions and insightful feedback on the latest releases as well as timeless classics. Whether you\'re looking to discover new films or share your opinions, the Movie Review Website offers a comprehensive and interactive experience for all cinema lovers.'
    ],
    images: [
      '/projects/movie1.png',
    ],
    github: 'https://github.com/rickytang666/movie-review-website',
    website: 'https://movie-review-website-plum.vercel.app/',
  },
  {
    id: '8',
    title: 'World Championship 100m Sim',
    description: [
      'The World Championship 100m Simulator is an object-oriented programming project that models the excitement and intensity of the Men’s 100m sprint event. Built entirely in Processing, this simulation recreates race scenarios using real or simulated athlete data, allowing users to visualize, analyze, and compare performances in a dynamic environment. The project not only runs the virtual races but also provides comprehensive data analysis and generates detailed results, giving insights into athlete performance and event outcomes. Designed for educational and analytical purposes, this tool offers an engaging way to explore the nuances of sprint competitions and the factors influencing race results.'
    ],
    images: [
      '/projects/sim1.png',
      '/projects/sim2.png',
    ],
    github: 'https://github.com/rickytang666/world-championship-100m-sim',
  }
]; 