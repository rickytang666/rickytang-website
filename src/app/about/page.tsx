import Image from "next/image";
import type { Metadata } from "next";

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
          <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[400px] md:max-w-[500px] xl:w-[550px] xl:h-[550px] overflow-hidden opacity-80 hover:opacity-100 transition-all duration-300">
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
        <div className="flex-1 space-y-6 md:space-y-8 xl:ml-8">
          {/* About Me - Paragraphs */}
          <div className="space-y-5">
            <p className="leading-relaxed text-base md:text-lg text-foreground">
              My name is Ricky Tang, an aspiring software engineer with a
              genuine love for full stack applications and human-machine
              interaction. I am striving to merge tech into daily life for
              simplicity and pure joy.
            </p>

            <p className="leading-relaxed text-base md:text-lg text-foreground">
              I focus on creating tools that people use and enjoy, whether it's
              a smart culinary app that adapts to your lifestyle, or an
              AI-powered fitness companion that keeps you motivated.
            </p>

            <p className="leading-relaxed text-base md:text-lg text-foreground">
              I've participated in multiple hackathons, each time pushing myself
              to touch something entirely new and learning to turn ideas into
              working products in dozens of hours. I love the challenge of rapid
              shipping and seeing projects come to life.
            </p>

            <p className="leading-relaxed text-base md:text-lg text-foreground">
              Outside of coding, I love playing table tennis, watching track &
              field and analyzing its statistics, and solving Rubik's cubes. I
              enjoy running, biking, and exploring the city — there's something
              about the rhythm of movement that helps me think through complex
              problems.
            </p>

            <p className="leading-relaxed text-base md:text-lg text-foreground">
              I'm also a hobbyist video editor and graphic designer, creating{" "}
              <a
                className="link font-semibold"
                href={externalLinks.videoGraphic}
                target="_blank"
              >
                miscellaneous digital artworks
              </a>
              . I enjoy the process of learning new software/tools upon every
              new project and use them to contribute to my school community.
            </p>

            <p className="leading-relaxed text-base md:text-lg text-foreground">
              Feel free to reach out if you'd like to connect!
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap gap-7 pt-4">
            <a
              href={externalLinks.github}
              target="_blank"
              className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200"
            >
              <IconBrandGithub stroke={2} className="w-5 h-5" />
              GitHub
            </a>
            <a
              href={externalLinks.linkedin}
              target="_blank"
              className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200"
            >
              <IconBrandLinkedin stroke={2} className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200"
            >
              <IconFileCv stroke={2} className="w-5 h-5" />
              Resume
            </a>
            <a
              href={`mailto:${externalLinks.email}`}
              target="_blank"
              className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200"
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
