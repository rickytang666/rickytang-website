import Image from 'next/image';

// Icons
import {
  IconUser,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconMail,
} from "@tabler/icons-react";

import { externalLinks } from '@/data/links';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 lg:max-w-[85%]">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center flex items-center justify-center gap-2 text-foreground">
        <IconUser stroke={2.5} className="w-10 h-10 text-primary" />
        About Me
      </h1>
      
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-center xl:items-center">
        {/* Image Section */}
        <div className="flex align-center justify-center xl:justify-start w-full xl:w-[400px] xl:flex-shrink-0">
          <div className="relative w-[375px] h-[375px] md:w-[500px] md:h-[500px] xl:w-[550px] xl:h-[550px] overflow-hidden opacity-80 hover:opacity-100 transition-all duration-300">
            <Image
              src="/about/myself.jpg"
              alt="Ricky Tang"
              fill
              className="object-contain hover:saturate-150 transition-all duration-300"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-4 md:space-y-6 xl:flex-1">
          {/* About Me - Paragraphs */}
          <div className="space-y-5 mb-10">
            <p className="leading-relaxed text-base md:text-lg text-foreground">
              My name is Ricky Tang, an incoming Software Engineering student at the University of Waterloo.
            </p>

            <p className="leading-relaxed text-base md:text-lg text-foreground">
              I build apps that solve real problems. Whether it's a smart culinary app that adapts to your lifestyle or an AI-powered fitness companion that keeps you motivated, I want to create things that people actually use and enjoy.
            </p>
            
            <p className="leading-relaxed text-base md:text-lg text-foreground">
              I love building meaningful projects — the kind I genuinely enjoy making, and that just might help someone along the way. Whether it's at a hackathon or in my free time, I find joy in turning ideas into products that solve real problems.
            </p>
            
            <p className="leading-relaxed text-base md:text-lg text-foreground">
              Improving day by day, even if it's tiny, is something I truly value. There's always something new to discover in tech, and I enjoy staying curious about how things work and how they could work better.
            </p>
            
            <p className="leading-relaxed text-base md:text-lg text-foreground">
              I've participated in multiple hackathons, and each time I try to build something entirely new. It's not just about the end result — it's about growing creatively, technically, and personally through the challenge.
            </p>
            
            <p className="leading-relaxed text-base md:text-lg text-foreground">
              Outside of coding, I love playing table tennis, watching track and field events (I've become so obsessed with it that I have been analyzing the data on my own for years), and playing Rubik's cubes. I've never been short of touching grass, whether it's running, biking, or just a walk in a nearby forest, I enjoy the persistence and enjoyment of the process, rather than chasing the perfection.
            </p>
            
            <p className="leading-relaxed text-base md:text-lg text-foreground">
              I'm also a hobbyist video editor and graphic designer. I enjoy creating digital artworks freely using different software and tools, contributing to my school community, and producing something meaningful along the way.
            </p>
            
            <p className="leading-relaxed text-base md:text-lg text-foreground">
              I'm always excited for opportunities to connect and learn. Feel free to reach out! Let's work on something amazing together.
            </p>
          </div>
          
          {/* Contact Buttons */}
          <div className="flex flex-wrap gap-7 mb-2">
            <a href={externalLinks.github} target="_blank" className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200">
              <IconBrandGithub stroke={2} className="w-5 h-5" />
              GitHub
            </a>
            <a href={externalLinks.linkedin} target="_blank" className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200">
              <IconBrandLinkedin stroke={2} className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200">
              <IconFileCv stroke={2} className="w-5 h-5" />
              Resume
            </a>
            <a href={`mailto:${externalLinks.email}`} target="_blank" className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200">
              <IconMail stroke={2} className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
