import type { Metadata } from "next";
import Image from "next/image";

// Icons
import {
  IconUser,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconMail,
} from "@tabler/icons-react";

import { externalLinks } from "@/data/links";

export const metadata: Metadata = {
  title: "About - Ricky Tang",
  description:
    "Learn more about Ricky Tang, a full stack developer with a habit of curiosity and consistently building. Improvement is a precious power, even if it's small, and he is here to chase it.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto lg:max-w-[85%]">
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-12 text-center flex items-center justify-center gap-2 text-foreground">
        <IconUser
          stroke={2.5}
          className="w-8 h-8 sm:w-10 sm:h-10 text-primary"
        />
        About Me
      </h1>

      <div className="flex flex-col xl:flex-row gap-6 items-center">
        {/* Image Section */}
        <div className="flex xl:flex-shrink-0 items-center justify-center w-full xl:w-auto">
          <div className="relative w-full aspect-square max-w-[300px] [@media(min-width:500px)]:max-w-[400px] md:max-w-[600px] xl:w-[550px] xl:h-[550px] overflow-hidden saturate-120 transition-all duration-300">
            <Image
              src="/about/myself.jpg"
              alt="Ricky Tang"
              fill
              className="object-contain transition-all duration-300"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-6 md:space-y-8 xl:ml-8">
          {/* About Me - Paragraphs */}
          <div className="space-y-5">
            <p className="leading-relaxed text-base md:text-lg text-foreground">
              My name is Ricky Tang, a Software Engineering student at Waterloo
              working on autonomous drones at WARG. I build tools that solve
              problems I actually encounter, and they become part of my daily
              workflow.
            </p>

            <p className="leading-relaxed text-base md:text-lg text-foreground">
              Whenever I see a great tech stack I haven&apos;t tried, I
              can&apos;t help myself but start a project with it immediately. I
              prefer building something new instead of repeating the same techs.
            </p>

            <p className="leading-relaxed text-base md:text-lg text-foreground">
              Hackathons are where I thrive. I enjoy getting flow state to ship
              something that works well and fix stuff with pressure. I&apos;m
              not satisfied until my projects become tools I actually use every
              day.
            </p>

            <p className="leading-relaxed text-base md:text-lg text-foreground">
              Computer vision is where I get especially excited about: object
              detection, real-time image processing, spatial understanding.
              There&apos;s something satisfying about making systems understand
              the visual world through code.
            </p>

            <p className="leading-relaxed text-base md:text-lg text-foreground">
              When I&apos;m not coding, you can find me playing table tennis,
              tweaking Obsidian plugins, watching track meets and analyzing
              split times (I&apos;m obsessed with it), doomscrolling
              inspirational projects online.
            </p>

            <p className="leading-relaxed text-base md:text-lg text-foreground">
              Feel free to reach out if you&apos;d like to connect!
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap gap-7 pt-4">
            <a
              href={externalLinks.github}
              target="_blank"
              className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary active:text-primary focus:text-primary"
            >
              <IconBrandGithub stroke={2} className="w-5 h-5" />
              GitHub
            </a>
            <a
              href={externalLinks.linkedin}
              target="_blank"
              className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary active:text-primary focus:text-primary"
            >
              <IconBrandLinkedin stroke={2} className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary active:text-primary focus:text-primary"
            >
              <IconFileCv stroke={2} className="w-5 h-5" />
              Resume
            </a>
            <a
              href={`mailto:${externalLinks.email}`}
              target="_blank"
              className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary active:text-primary focus:text-primary"
            >
              <IconMail stroke={2} className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
